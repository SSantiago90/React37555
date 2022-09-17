function APIcall() {
  return new Promise((resolve, reject) => {
    const data = {
      id: "1",
      name: "Mi producto",
      description: "El mejor producto de la tienda",
      stock: 9,
    };
    setTimeout(() => {
      console.log("resolviendo...");
      resolve(data);
    }, 1500);
  });
}

console.log("App iniciada!");

async function main() {
  let resAPI = await APIcall();
  // APIcall.then( (repuesta) => resAPI = respuesta));
  console.log(`Respuesta: ${resAPI}`);
}

main();

console.log("App finalizada.");
