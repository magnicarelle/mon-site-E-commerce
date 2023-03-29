let prohtml = "";
let produits = fetch("produits.json")
  .then((res) => res.json())
  .then((data) => {
    const customDiv = document.getElementById("products");
    localStorage.setItem("all-products", JSON.stringify(data));
    for (const item of data) {
      prohtml += productElement(item);
    }
    customDiv.innerHTML = prohtml;
  });

function productElement(product) {
  return `
          <div class="pro">
               <img src="${product.thumbnail}" alt="">
               <div class="des chau">
               <h5>${product.title}</h5>
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
              </div>
              <h4>${product.price} FCFA </h4>
                </div>
               <button class="btn_shop" style="cursor:pointer"> <i data-productid=${product.id} class="fa-solid fa-cart-shopping cart-btn cart"> </i> </button>
             </div>
           `;
}
function createToast() {
  const toast = document.createElement('div');
  toast.innerHTML = 'Produit Ajouté dans le panier';
  toast.setAttribute('id', 'toast');
  document.body.appendChild(toast);
  return toast;
}

// function copyLocation(){
//   navigator.clipboard.writeText(window.location.href);
// }

function showToast() {
  const windowToast = document.getElementById('toast');
  if(windowToast){
    windowToast.remove();
  }
  const toast = createToast();
  toast.classList.add('show-toast');
  setTimeout(() => {
    hideToast(toast);
  }, 2950);
}

function hideToast(toast) {
  toast.classList.add('hide-toast');
  setTimeout(() => {
    removeToast(toast);
  }, 300);
}

function removeToast(toast) {
  toast.remove();
}


window.addEventListener("DOMContentLoaded", function () {

  
  const allProducts = JSON.parse(localStorage.getItem("all-products"));
  setTimeout(() => {
    const siteProducts = document.getElementsByClassName("cart");
    Array.from(siteProducts).forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const productId = e.currentTarget.dataset.productid;
        const product = allProducts.find((item) => item.id == productId);
        const panier = new Panier();
        panier.addProduct(product);

        
        showToast();
      });
    });
  }, 1000);
});
