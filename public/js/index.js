// const getProducts = async () => {
//     const products = await fetch('/api/products', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//         .then(res => res.json());
//     console.log(products);
//     // products.forEach(product => {
//     //     const productElement = document.createElement('div');
//     //     productElement.classList.add('product');
//     //     productElement.innerHTML = `
//     //     <div class="product-image">
//     //         <img src="${product.image}">
//     //     </div>
//     //     <div class="product-info">
//     //         <h1>${product.name}</h1>
//     //         <p>${product.description}</p>
//     //         <p>$${product.price}</p>
//     //         <p>${product.category}</p>
//     //         <p>
//     //             <button class="btn btn-outline-primary add-to-cart" data-id="${product.id}">
//     //                 <i class="fas fa-shopping-cart"></i>
//     //                 Add to Cart
//     //             </button>
//     //         </p>
//     //     </div>
//     // `;
//     //     document.querySelector('.products').appendChild(productElement);
//     // });
// };
// getProducts();

    $(document).ready(function () {
        $.ajax({
            url: "/api/products",
            method: "GET",
            success: function (data) {
                console.log(data);
                var products = data.products;
                var output = "";
                for (var i in products) {
                    output += `
                    <div class="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src="${products[i].image}" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">${products[i].name}</h5>
                                <p class="card-text">${products[i].description}</p>
                                <p class="card-text">${products[i].price}</p>
                                <a href="#" class="btn btn-primary">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                    `;
                }
                $(".products").html(output);
            }
        });
    });