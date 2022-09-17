// get a random number, and return true if number is > 50
function randomError() {
  return Math.random() > 0.1;
}

let APIcall = new Promise((resolve, reject) => {
  const data =  { id: "1", name: "Mi producto", description: "El mejor producto de la tienda", stock: 9 }

  if (randomError() === false) {
    console.log("resolviendo...");
    resolve(data);
  } else {
    console.error("rechazando...");
    reject("Error en la llamada a la API");
  }
});

console.log("App iniciada!");

APIcall
  .then((response) => console.log(`Respuesta: ${response.name}`))
  .catch((error) => console.error(`Error Promise: ${error}`))
  .finally(console.log("App finalizada."));
