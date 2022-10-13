// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  addDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBx9y-jVCCDfXsM1HTWun-RkVl2UBoHSk",
  authDomain: "react37555.firebaseapp.com",
  projectId: "react37555",
  storageBucket: "react37555.appspot.com",
  messagingSenderId: "957237227085",
  appId: "1:957237227085:web:cbb37e6cb5c2186e74b604",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export async function getItems() {
  const collectionRef = collection(firestore, "alquileres");
  let respuesta = await getDocs(collectionRef);

  let dataDocs = respuesta.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });
  return dataDocs;
}

export async function getSingleItem(idParams) {
  try {
    const docRef = doc(firestore, "alquileres", idParams);
    const docSnapshot = await getDoc(docRef);
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } catch (error) {
    console.error(error);
  }
}

export async function getItemsByCategory(catParams) {
  const collectionRef = collection(firestore, "alquileres");
  const queryCategory = query(
    collectionRef,
    where("category", "==", catParams)
  );

  const respuesta = await getDocs(queryCategory);

  let dataDocs = respuesta.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });

  return dataDocs;
}

export async function createBuyOrder(orderData) {
  const collectionRef = collection(firestore, "orders");
  let respuesta = await addDoc(collectionRef, orderData);

  return respuesta.id;
}

export async function exportDataToFirestore() {
  const data = [
    {
      id: 1,
      title: "Casa Pinamar",
      price: 9800,
      stock: 0,
      category: "alquileres",
      detail:
        "Hermosa casa en Barrio Golf Pinamar. Perfecta para unas cómodas vacaciones en familia",
      img: "/assets/alquileres/1.png",
    },
    {
      id: 2,
      offer: true,
      title: "Casa 6 Ambientes",
      price: 2500,
      detail:
        "Alquiler de casa de 6 ambientes, 4 dormitorios, pileta, galería, parrilla, Cañuelas Golf Club.",
      img: "/assets/alquileres/2.png",
      stock: 3,
      category: "temporal",
    },
    {
      id: 3,
      title: "Casa 6 Ambientes",
      price: 2500,
      detail:
        "Hermosa casa ubicada sobre un gran lote interno de 900m2, en una de las zonas mas lindas del barrio",
      img: "/assets/alquileres/3.png",
      stock: 7,
      category: "ventas",
    },
    {
      id: 6,
      title: "Casa Pinamar",
      price: 9800,
      stock: 6,
      category: "alquileres",
      detail:
        "Hermosa casa en Barrio Golf Pinamar. Perfecta para unas cómodas vacaciones en familia",
      img: "/assets/alquileres/1.png",
    },
    {
      id: 5,
      title: "Casa 6 Ambientes",
      price: 2500,
      detail:
        "Alquiler de casa de 6 ambientes, 4 dormitorios, pileta, galería, parrilla, Cañuelas Golf Club.",
      img: "/assets/alquileres/2.png",
      stock: 3,
      category: "temporal",
    },
    {
      id: 4,
      title: "Casa 6 Ambientes",
      price: 2500,
      detail:
        "Hermosa casa ubicada sobre un gran lote interno de 900m2, en una de las zonas mas lindas del barrio",
      img: "/assets/alquileres/3.png",
      stock: 7,
      category: "ventas",
    },
  ];

  const collectionRef = collection(firestore, "alquileres");
  
  for (let item of data) {   
    const newDoc = await addDoc(collectionRef, item);
    console.log("Doc created", newDoc.id);
  }
}

export default firestore;
