// fetch ("data.Json")
//    .then(res=> res.Json())
//    .then(data=> console.log( JSON.stringify(data)))
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
               <button data-product=${product}> <i class="fa-solid fa-cart-shopping cart "> </i> </button>
             </div>
           `;
}

// 
window.addEventListener('DOMContentLoaded', function () {
  const siteProducts = document.getElementsByClassName("pro");
})

class Panier {
  constructor() {
    let panier = localStorage.getItem("panier");
    let allProducts = localStorage.getItem("all-products");
    if (panier == null) {
      this.panier = [];
    } else {
      this.panier = JSON.parse(panier);
    }

    if (allProducts == null) {
      this.allProducts = [];
    } else {
      this.allProducts = JSON.parse(allProducts);
    }
  }

  savePanier() {
    localStorage.setItem("panier", JSON.stringify(this.panier));
  }

  addProduct(product) {
    let foundproduit = this.panier.find((p) => p.id == product.id);
    if (foundproduit != undefined) {
      this.changeQuantity(foundproduit, 1);
    } else {
      let productAvailable = this.allProducts.find((p) => p.id == product.id);

      if (productAvailable != undefined) {
        productAvailable.quantity = 1;
        this.panier.push(productAvailable);
        this.savePanier();
      }
    }
  }

  removeFromPanier(product) {
    this.panier = this.panier.filter((p) => p.id != product.id);
    this.savepanier();
  }

  changeQuantity(produit, quantity) {
    let foundProduit = this.panier.find((p) => p.id == produit.id);
    if (foundProduit != undefined) {
      foundProduit.quantity += quantity;
      if (foundProduit.quantity <= 0) {
        removeFromPanier(produits);
      } else {
        this.savePanier();
      }
    }
  }

  getNumberProduits() {
    let number = 0;
    for (let produit of this.panier) {
      number += produit.quantity;
    }
    return number;
  }

  getTotalPrice() {
    let total = 0;
    for (let produit of this.panier) {
      number += produit.quantity * produit.price;
    }
    return total;
  }
}