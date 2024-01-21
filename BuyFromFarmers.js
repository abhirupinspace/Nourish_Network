const vegetablesData = [
    { id: 1, name: 'Carrot', price: 1.5, img: 'https://th.bing.com/th/id/OIP.CZkr0J3LeRsMafEnZZGpcAHaFj?rs=1&pid=ImgDetMain'},
    { id: 2, name: 'Tomato', price: 2.0, img: 'https://www.lipmanfamilyfarms.com/wp-content/uploads/2020/09/TOV-hero@2x-1024x913.png'},
    { id: 3, name: 'Broccoli', price: 1.8, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Broccoli_and_cross_section_edit.jpg/800px-Broccoli_and_cross_section_edit.jpg'},
    { id: 4, name: 'Potato', price: 1.2, img: 'https://th.bing.com/th/id/R.1746905e79820c611a75f362be285401?rik=Om5Rt8artWAu4A&riu=http%3a%2f%2fwww.valleyspuds.com%2fwp-content%2fuploads%2fRusset-Potatoes-cut.jpg&ehk=%2f9WbC1j%2fDMKQkwnb8Q9l7NfVGeVMrHuQmCWM%2fR9kpg8%3d&risl=&pid=ImgRaw&r=0'},
    { id: 5, name: 'Spinach', price: 2.5, img: 'https://th.bing.com/th/id/OIP.MIhh6wGi3kXh6m0sAzOhhAHaIl?rs=1&pid=ImgDetMain'},
    { id: 6, name: 'Strawberry', price: 3.0, img: 'https://www.pngmart.com/files/3/Strawberry-PNG-Pic.png'},
    { id: 7, name: 'Avocado', price: 4.5, img: 'https://th.bing.com/th/id/R.c72d7edfe419495937dc5c02bbcd85e7?rik=hRc18WgImzh3iw&riu=http%3a%2f%2fmassageinflorida.com%2fblog%2fwp-content%2fuploads%2f2012%2f04%2fAvocado-5918425_l1.jpg&ehk=kQRbjSajWN54cFW8D1%2fm6wLdOE3Fz8mu5K7aGxN12Q0%3d&risl=&pid=ImgRaw&r=0'},
    { id: 8, name: 'Pineapple', price: 3.8, img: 'https://i.redd.it/yh30kluc3uqy.jpg'},
    { id: 9, name: 'Cucumber', price: 1.3, img: 'https://th.bing.com/th/id/OIP.VKG1qNp4bQnOTWVzO1DJiwHaEo?rs=1&pid=ImgDetMain'},
    { id: 10, name: 'Bell Pepper', price: 2.2, img: ''},
    { id: 11, name: 'Mango', price: 3.5, img: ''},
    { id: 12, name: 'Lettuce', price: 1.7, img: ''},
    { id: 13, name: 'Blueberry', price: 4.0, img: ''},
    { id: 14, name: 'Peach', price: 2.8, img: ''},
    { id: 15, name: 'Cauliflower', price: 2.0, img: 'https://www.thespruceeats.com/thmb/XSOyJO8R3_zu8m6VlyRQIzPyHVQ=/4096x2734/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-611274342-58c5d15a3df78c353cde46f2.jpg'},
    { id: 16, name: 'Watermelon', price: 3.2, img: 'https://www.thespruceeats.com/thmb/XSOyJO8R3_zu8m6VlyRQIzPyHVQ=/4096x2734/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-611274342-58c5d15a3df78c353cde46f2.jpg'},
    { id: 17, name: 'Grapes', price: 3.7, img: 'https://www.thespruceeats.com/thmb/XSOyJO8R3_zu8m6VlyRQIzPyHVQ=/4096x2734/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-611274342-58c5d15a3df78c353cde46f2.jpg'},
    { id: 18, name: 'Zucchini', price: 1.4, img: 'https://www.thespruceeats.com/thmb/XSOyJO8R3_zu8m6VlyRQIzPyHVQ=/4096x2734/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-611274342-58c5d15a3df78c353cde46f2.jpg'},
    { id: 19, name: 'Cherry', price: 3.3, img: 'https://www.thespruceeats.com/thmb/XSOyJO8R3_zu8m6VlyRQIzPyHVQ=/4096x2734/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-611274.jpg'}
];


let cart = [];

function renderVegetables() {
    const vegetableList = document.getElementById('vegetable-list');
    vegetableList.innerHTML = '';

    vegetablesData.forEach((vegetable) => {
        const vegetableCard = document.createElement('div');
        vegetableCard.classList.add('vegetable-card');
        vegetableCard.innerHTML = `
            <img src="${vegetable.img}">
            <h2>${vegetable.name}</h2>
            <p>Price: $${vegetable.price.toFixed(2)}</p>
            <button onclick="addToCart(${vegetable.id})">Buy Now</button>
        `;
        vegetableList.appendChild(vegetableCard);
    });
}

function addToCart(vegetableId) {
    const selectedVegetable = vegetablesData.find((v) => v.id === vegetableId);
    cart.push(selectedVegetable);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item) => {
        const cartItem = document.createElement('li');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
        `;
        cartItems.appendChild(cartItem);
        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
}

function checkout() {
    alert('Thank you for your purchase!');
    cart = [];
    updateCart();
}

document.addEventListener('DOMContentLoaded', function () {
    renderVegetables();
});
