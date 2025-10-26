document.getElementById("entrar").addEventListener("click", () => {
  document.getElementById("splash-screen").style.display = "none";
  document.getElementById("tienda").classList.remove("oculto");
});

const productos = [
  { nombre: "Vela aromática", precio: "$2500" },
  { nombre: "Aceite esencial", precio: "$1800" },
  { nombre: "Difusor floral", precio: "$3200" }
];

const contenedor = document.getElementById("productos");

productos.forEach(p => {
  const card = document.createElement("div");
  card.classList.add("producto");
  card.innerHTML = `<h3>${p.nombre}</h3><p>${p.precio}</p>`;
  contenedor.appendChild(card);
});
