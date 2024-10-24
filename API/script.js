fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(products=>{
  let productistEl = document.getElementById("product-list")
  let productist = ``
  

  for(let product of products){
    productist += ` <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                     <div class="card h-100">
                       <img src="${product.image}" class="card-img-top" alt="Product Image">
                       <div class="card-body">
                         <h5 class="card-title">${product.title}</h5>
                         <p class="card-price text-success fw-bold" >$${product.price}</p>
                         <p class="card-description">${product.description}</p>
                         <a href="#" class="btn btn-primary">View Product</a>
                       </div>
                     </div>
                    </div> `
  }

  productistEl.innerHTML = productist
})



