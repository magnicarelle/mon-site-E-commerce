let panier = new Panier().panier;
let cartItemsHtml = "";

function itemHtml(panierItem) {
  return `
    <tr>
      <td>${panierItem.thumbnail}</td>
      <td>${panierItem.title}</td>
      <td>${panierItem.price}</td>
      <td>${panierItem.quantity}</td>
      <td>${new Panier().getProductTotalPrice(panierItem)}</td>
      <td><i class="fa-solid fa-trash"></i></td>
    </tr>
    `;
}

for (const item of panier) {
  cartItemsHtml += itemHtml(item);
}

let basket = document.getElementById("cart-body");
basket.innerHTML = cartItemsHtml;
