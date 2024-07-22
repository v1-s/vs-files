const mainproduct = [
  { id: 0, image: "https://images.unsplash.com/photo-1494475673543-6a6a27143fc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWRkcmVzc3xlbnwwfHwwfHx8MA%3D%3D", title: 'fruits', price: 120 },
  { id: 1, image: "../assets/images/images/product-1.png", title: 'fruits', price: 120 },
  { id: 2, image: "../assets/images/images/product-2.png", title: 'fruits', price: 120 },
  { id: 3, image: "../assets/images/images/product-8.png", title: 'fruits', price: 120 }
];

const allproducts = [...new Set(mainproduct.map(item => item))];
let i = 0;

document.getElementById('cartsec').innerHTML = allproducts.map((item) => {
  const { image, title, price } = item;
  return (
    `<div class='box'>
      <div class='img-box'>
         <img class='images' src="${image}" alt="${title}">
      </div>
      <div class='bottom'>
        <p>${title}</p>
        <h2>${price}.00</h2>
        <button onclick='addtocart(${i++})'>Add to cart</button>
      </div>
    </div>`
  );
}).join('');

function addtocart(index) {
  console.log('Add to cart:', index);
  // Add your add to cart functionality here
}
