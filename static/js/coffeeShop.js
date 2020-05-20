"use strict";

// Add an item to a Cart array.
const addItemToCart = (itemName) => {
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};

const resetCart = () => {
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};

const incrementCartTotal = (price) => {
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html());
  total += price;

  cartTotal.html(total.toFixed(2));
};

const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};

const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};


//
// Add your event handlers below.
//
// Click on 'Add to cart' calls 2 functions.
// addItemToCart for displayed list items
// incrementCartTotal for updating total cost
const addItem = document.querySelector('.add-to-order');
addItem.addEventListener('click', () => { 
  addItemToCart('Cofee'); 
  incrementCartTotal(1.50); 
});

const placeOrder = document.querySelector('#place-order');
placeOrder.addEventListener('click', () => {
  incrementCoffeeSold($('#cart-items').children().length);
  resetCart();
});