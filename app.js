const ListProductHtml = document.querySelector('#cardContainer');
let listProducts = [];
let carts = [];
let listCartHtml = document.querySelector('#cartContainer');
let notificationBox = document.querySelector('#shoppingNotification');
let removeItems = document.querySelector('#removeBtn');
let finalPrice = document.querySelector('#totalPrice');



const addToCart = ()=> {
    ListProductHtml.innerHTML =``;

    if(listProducts.length > 0){

        listProducts.forEach((product) => {
        let newProduct = document.createElement('div');
        newProduct.dataset.id = product.id;
        newProduct.innerHTML = ` 
        <div data-id="1" class="bg-gray-50 dark:bg-gray-800 p-8 list">
        <div class="">
        <h2 class="text-xl text-gray-600 dark:text-white">
        ${product.name}
        </h2>
        <p
        class="text-xl font-semibold text-gray-800 dark:text-white mt-2"
        >
        ${product.price}
        </p>
        </div>
        <div class="flex justify-center items-center mt-8 md:mt-24">
        <img
        class="max-w-xl transition hover:scale-110 slide"
        src="${product.image}"
        alt="A chair with designed back"
        role="img"
        /> 
        </div> 
        
        <div class="flex items-center justify-between mt-16 md:mt-32">
        <div class="" data-id="${product.id}">
        <button class="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer transition ease-in-out addToCart">Wishlist</button>
        </div>
        <div class="flex justify-center items-center space-x-2 mt- md:mt-">
        <button
        aria-label="show in red color"
        class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded buttonRed"
        >
        <div
        class="w-2.5 h-2.5 bg-red-600 border rounded-full border-gray-500"
        ></div>
        </button>
        <button
        aria-label="show in white color"
        class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded buttonRed"
        >
        <div
        class="w-2.5 h-2.5 bg-white border rounded-full border-gray-500"
        ></div>
        </button>
        <button
        aria-label="show in black color"
        class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded buttonRed"
            >
            <div
            class="w-2.5 h-2.5 bg-gray-900 border rounded-full border-gray-500"
            ></div>
            </button>
            </div>
            </div>
            <!-- End of the div -->
            </div> `
            ListProductHtml.appendChild(newProduct);
        })
    }
}




ListProductHtml.addEventListener('click', (event) => {
    let positionClick = event.target;
    
    if(positionClick.classList.contains('addToCart')){
        let id_product = positionClick.parentElement.dataset.id;

        addToCartHtml(id_product);
        
    } else {
        console.log('Clicked element does not have class "addToCart"');
    }
});


const addToCartHtml = (id_product)=> {
let positionThisProductCart = carts.findIndex((value) => value.id_product == id_product);
if(carts.length <= 0){
    carts = [{
       id_product : id_product,
       quantity: 1
     }]
     console.log(carts);
} else if(positionThisProductCart < 0){
  //  carts.push = ({
  //     id_product : id_product,
  //     quantity:1
  //  });
  //  console.log(carts);
  carts = [...carts, { id_product: id_product, quantity: 1 }];
  console.log(carts)
} else {
    carts[positionThisProductCart].quantity = carts[positionThisProductCart].quantity + 1;
}
addToCartHtmlList();
addCartToMemory();
}

const addCartToMemory = ()=>{
  localStorage.setItem('cart', JSON.stringify(carts));
}

  
const addToCartHtmlList = () => {
  listCartHtml.innerHTML = '';
  let totalQuantity = 0;
  let totalPrice = 0; // Initialize total price variable

  if (carts.length > 0) {
      carts.forEach(cart => {
          totalQuantity += cart.quantity;

          // Find the product information corresponding to the cart item
          let positionProduct = listProducts.findIndex((value) => value.id == cart.id_product);
          if (positionProduct !== -1) { // Check if product exists
              let info = listProducts[positionProduct];
              let itemPrice = parseFloat(info.price.replace(/\D/g, '')) * cart.quantity;
              totalPrice += itemPrice; // Add item price to total price

              let newCart = document.createElement('div');
              newCart.innerHTML =
                  `
                  <li class="flex py-6">
                      <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img src="${info.image}" alt="Product image" class="h-full w-full object-cover object-center">
                      </div>

                      <div class="ml-4 flex flex-1 flex-col">
                          <div>
                              <div class="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                      <a href="#">${info.name}</a>
                                  </h3>
                                  <p class="ml-4 text-lg font-semibold text-green-500">${itemPrice.toFixed(2)}</p>
                              </div>
                          </div>
                          <div class="flex flex-1 items-end justify-between text-sm">
                              <p class="text-gray-500">${cart.quantity}</p>
                              <div class="flex" data-id="${cart.id}">
                                  <button id="removeBtn" type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                              </div>
                          </div> 
                      </div>
                  </li>
                  `;

              // Add data-productId attribute to the newCart element
              newCart.querySelector('li').setAttribute('data-productId', cart.id_product);
              listCartHtml.appendChild(newCart);
          } else {
              console.error(`Product with ID ${cart.id_product} not found.`);
          }
      });
  }

  // Display total price and total quantity in the HTML
  finalPrice.innerHTML = totalPrice.toFixed(2); // Display total price with two decimal places
  notificationBox.innerText = totalQuantity;
};




const initApp = ()=> {
// fetch data from json data
 fetch('products.json')
 .then(response => response.json())
 .then(data => {
    listProducts = data;
     console.log(listProducts);
    addToCart();

    // if(localStorage.getItem('cart')){
    //   carts = JSON.parse(localStorage.getItem('cart'));
    //   addToCartHtml();
    // }
 })
}
initApp();






// listCartHtml.addEventListener('click', function(event) {
//   if (event.target.id === "removeBtn") {
//       // Your function to handle remove item logic for the clicked button
//       if (event.target.id === "removeBtn") {
//         const clickedButton = event.target;
//         const parentElement = clickedButton.parentElement;
        
    
//         // Check if data-product-id attribute exists
//         if (parentElement.dataset && parentElement.dataset.productId) {
//           const productId = clickedButton.parentElement.dataset.productId;
    
//           // Remove item from cart data (carts array)
//           carts = carts.filter(item => item.id != productId);
//         } else {
//           console.error("Missing data-product-id attribute on remove button parent element!");
//         }
    
//         // Update displayed cart list
//         addToCartHtmlList();
//       }
//   }
// });

listCartHtml.addEventListener('click', function(event) {
  if (event.target.id === "removeBtn") {
      const productId = event.target.closest('li').getAttribute('data-productId');

      // Check if productId is valid
      if (productId) {
          // Remove item from cart data (carts array)
          carts = carts.filter(item => item.id_product !== productId);
          
          // Update displayed cart list
          addToCartHtmlList();
      } else {
          console.error("Missing data-productId attribute on remove button parent element!");
      }
  }
});
