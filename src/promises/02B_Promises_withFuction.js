function APIcall(){
    return new Promise((resolve) => {
      const data = {
        id: "1",
        name: "Mi producto",
        description: "El mejor producto de ka tienda",
        stock: 9,
      };
      setTimeout(() => resolve(data), 1500);
    })
  };
  
  
  const APIrequest = APIcall();
  
  console.log("App iniciada.");
  
  APIrequest.then(function (response) {
    console.log(`Respuesta: ${response.name}`);
  });
  
  console.log("App finalizada.");
  