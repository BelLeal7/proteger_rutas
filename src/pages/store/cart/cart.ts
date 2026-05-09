import type { CartItem } from "../../../types/product";

const contenedorCarrito = document.querySelector<HTMLDivElement>("#contenedor-carrito");
const displayTotal = document.querySelector<HTMLHeadingElement>("#total-carrito");
const btnVolver = document.querySelector<HTMLButtonElement>("#btn-volver");
const btnVaciar = document.querySelector<HTMLButtonElement>("#btn-vaciar");

function renderizarCarrito() {
  if (!contenedorCarrito || !displayTotal) return;

  const carritoString = localStorage.getItem("carrito");
  const carrito: CartItem[] = carritoString ? JSON.parse(carritoString) : [];

  if (carrito.length === 0) {
    contenedorCarrito.innerHTML = "<h3>Tu carrito está vacío.</h3>";
    displayTotal.textContent = "Total: $0";
    return;
  }

  contenedorCarrito.innerHTML = "";
  let totalAcumulado = 0;

 carrito.forEach((item) => {
    const subtotal = item.product.precio * item.cantidad;
    totalAcumulado += subtotal;

    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <div class="cart-item-info">
        <img src="/${item.product.imagen}" alt="${item.product.nombre}" class="cart-img-thumbnail">
        <div>
          <strong>${item.product.nombre}</strong> (x${item.cantidad})
        </div>
      </div>
      <div class="cart-item-price">
        $${subtotal}
      </div>
    `;
    contenedorCarrito.appendChild(div);
  });

  displayTotal.textContent = `Total: $${totalAcumulado}`;
}

btnVolver?.addEventListener("click", () => {
  window.location.href = "../home/home.html";
});

btnVaciar?.addEventListener("click", () => {
  localStorage.removeItem("carrito");
  renderizarCarrito();
});

renderizarCarrito();