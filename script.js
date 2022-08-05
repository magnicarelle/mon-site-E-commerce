// fetch ("data.Json")
//    .then(res=> res.Json())
//    .then(data=> console.log( JSON.stringify(data)))
let prohtml = "";
let produits = fetch("produits.json")
  .then((res) => res.json())
  .then((data) => {
    // console.log(JSON.stringify(data));
    const customDiv = document.getElementById("products");
    localStorage.setItem("all-products", JSON.stringify(data));
    for (const item of data) {
      prohtml += productElement(item);
    }
    customDiv.innerHTML = prohtml;
  });
//  const json = {
//         "id": 11,
//         "title": "perfume Oil",
//         "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
//         "price": 13,
//         "discountPercentage": 8.4,
//         "rating": 4.26,
//         "stock": 65,
//         "brand": "Impression of Acqua Di Gio",
//         "category": "fragrances",
//         "thumbnail": "https://dummyjson.com/image/i/products/12/thumbnail.jpg",
//        }
//        console.log (json)

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
               <button data onclick="${new Panier().addProduct(
                 product
               )}"> <i class="fa-solid fa-cart-shopping cart "> </i> </button>
             </div>
           `;
}

class Panier {
  constructor() {
    let panier = localStorage.getItem("panier");
    let allProduits = localStorage.getItem("all-products");
    if (panier == null) {
      this.panier = [];
    } else {
      this.panier = JSON.parse(panier);
    }

    if (allProduits == null) {
      this.allProduits = [];
    } else {
      this.allProduits = JSON.parse(allProduits);
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
      let productAvailable = this.allProduits.find((p) => p.id == product.id);

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

//        function getproduct(){
//         let product = localStorage.getItem("product");
//         if (product == null){
//          return[];
//         }else{
//           return JSON.parse(product);
//         }
//        }
// function addproduct (produits){
//         let product = getproduct();
//         let foundproduits = basket.find(p => p.id == product.id);
//         if(foundproduits != undefined){
//           foundproduits.quantity++;
//         }else{
//           produits.quantity = 1;
//           product.push(produits);
//         }
//        saveproduct(product);
//        }
// function removeFromproduct(produits){
//         let product = getproduct();
//         product = product.filter(p => p.id != produits.id);
//         saveproduct(product);
//        }

// function changeQuantity(produits,quantity){
//         let product = getproduct();
//         let foundproduits = basket.find(p => p.id == product.id);
//         if(foundproduits != undefined){
//           foundproduits.quantity += quantity;
//            if (foundProduct.quantity <= 0){
//             removeFromproduct(product);
//            }else{
//             saveBasket(basket);
//            }
//        }

//       }

// function getNumberProduct(){
//   let basket = getBasket();
//   let number = 0;
//   for(let product of basket){
//     number += produit.quantity;
//   }
//   return number;
// }

// function getTotalPrice(){
//   let basket = getBasket();
//   let total = 0;
//   for(let product of basket){
//     number += produit.quantity * product.price;
//   }
//   return total;
// }

//   customDiv.innerHTML = product;

//    const json = {
//     "id": 11,
//     "title": "perfume Oil",
//     "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
//     "price": 13,
//     "discountPercentage": 8.4,
//     "rating": 4.26,
//     "stock": 65,
//     "brand": "Impression of Acqua Di Gio",
//     "category": "fragrances",
//     "thumbnail": "https://dummyjson.com/image/i/products/11/thumbnail.jpg",
//    }
//    const stringJson = JSON.stringify(json);
//    const parsedString = JSON.parse(stringJson)

//    console.log (json)
