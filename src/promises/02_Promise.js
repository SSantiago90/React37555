let APIcall = new Promise((resolve) => {
  const data = {
    id: "1",
    name: "Mi producto",
    description: "El mejor producto de ka tienda",
    stock: 9,
  };
  setTimeout(() => resolve(data), 1500);
});

console.log("App iniciada.");

APIcall.then(function (response) {
  console.log(`Respuesta: ${response.name}`);
});

console.log("App finalizada.");
