"use strict";

// Selectors

const cartButton = document.querySelector('.cart-button');

// Button add to cart

function cartClick() 
{
	let button = this;
	button.classList.add("clicked");
}

cartButton.addEventListener("click", cartClick);