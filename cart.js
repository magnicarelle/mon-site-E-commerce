let panier = new Panier();
let panierItems = panier.panier;
let cartItemsHtml = "";

function itemHtml(panierItem) {
  return `
    <tr>
      <td>${panierItem.thumbnail}</td>
      <td>${panierItem.title}</td>
      <td>${panierItem.price}</td>
      <td>${panierItem.quantity}</td>
      <td>${new Panier().getProductTotalPrice(panierItem)}</td>
      <td><button data-productId=${
        panierItem.id
      } class="fa-solid fa-trash"></button></td>
    </tr>
    `;
}

for (const item of panierItems) {
  cartItemsHtml += itemHtml(item);
}

let basket = document.getElementById("cart-body");
basket.innerHTML = cartItemsHtml;

//pour supprimer un element //

window.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    let deletCartButtons = document.querySelectorAll(".fa-trash");
    for (const item of deletCartButtons) {
      item.addEventListener("click", (e) => {
        panier.removeFromPanier(e.currentTarget.dataset.productid);
        window.location.reload()
      });
    }
  }, 1000);
});
