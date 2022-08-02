// fetch ("data.Json")
//    .then(res=> res.Json())
//    .then(data=> console.log( JSON.stringify(data)))
const panier =  "fa-solid fa-bag-shopping" 
    const json = {
        "id": 11,
        "title": "perfume Oil",
        "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
        "price": 13,
        "discountPercentage": 8.4,
        "rating": 4.26,
        "stock": 65,
        "brand": "Impression of Acqua Di Gio",
        "category": "fragrances",
        "thumbnail": "https://dummyjson.com/image/i/products/12/thumbnail.jpg",
       }
       const stringJson = JSON.stringify(json);
       const parsedString = JSON.parse(stringJson)
       console.log (json)


       const customDiv = document.getElementById('custom-div')
       const product = `
       <div class="pro">
            <img src="${json.thumbnail}" alt="">
            <div class="des chau">
            <h5>${json.title}</h5>
             <div class="star">
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fas fa-star"></i>
               <i class="fa-solid fa-star-half-stroke"></i>
           </div>
           <div>${json.description}</div>
           <h4>${json.price} FCFA </h4>
             </div>
            <a href="#"><i class="fa-solid fa-cart-shopping cart "></i></a>
          </div>
        `;

        customDiv.innerHTML = product;


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