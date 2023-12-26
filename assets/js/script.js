// Elementos del DOM

const ele = document.getElementById("ele1");
const pintar = function pintar() {
  ele.style.backgroundColor = "yellow";
};

// Eventos

ele.addEventListener("click", pintar);
