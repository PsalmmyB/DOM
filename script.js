var slides = document.querySelectorAll(".slide");
var currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].style.display = "none";
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = "block";
}

showSlide(currentSlide);

setInterval(function() {
  showSlide(currentSlide + 1);
}, 2000);


const plusBtns = document.querySelectorAll(".plus-btn");
const minusBtns = document.querySelectorAll(".minus-btn");


plusBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const inputEl = btn.previousElementSibling;
    let quantity = parseInt(inputEl.value);
    quantity++;
    inputEl.value = quantity;
  });
});

minusBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const inputEl = btn.nextElementSibling;
    let quantity = parseInt(inputEl.value);
    if (quantity > 1) {
      quantity--;
      inputEl.value = quantity;
    }
  });
});

const addToCartBtns = document.querySelectorAll(".add-to-cart-btn");

const heartBtn = document.querySelector(".heart-btn");

heartBtn.addEventListener("click", () => {
  heartBtn.classList.toggle("clicked");
});


const priceDisplay = document.getElementById('price-display');
  const plusButton = document.getElementById('plus-button');
  const minusButton = document.getElementById('minus-button');
  
  let price = 10.00; 

  plusButton.addEventListener('click', () => {
    price += 10.00; 
    priceDisplay.innerText = $${price.toFixed(2)}; 

  minusButton.addEventListener('click', ()=>{
    if (price > 10) {
    price -= 10.00; 
    priceDisplay.innerText = $${price.toFixed(2)};
     }
    
  })