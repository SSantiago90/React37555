function APICall(){
  setTimeout(
    ()=>{
      console.log("API call completed");
      return { id: "1", name: "Mi producto", description: "El mejor producto de ka tienda", stock: 9 }
    },  
    1500
  );
}

console.log("App iniciada.");

let resAPI = APICall();
console.log(`Respuesta: ${resAPI}`);   

console.log("App finalizada.");