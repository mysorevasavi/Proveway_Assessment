const options = document.querySelectorAll('.option');
const total = document.getElementById('totalPrice');

function selectOption(n) {
  options.forEach(opt => opt.classList.remove('selected'));
  options[n - 1].classList.add('selected');

  let price;
  if (n === 1) price = 1800;
  else if (n === 2) price = 3200;
  else if (n === 3) price = 4200;

  total.textContent = `₹${price.toFixed(2)}`;
}

function addToCart() {
  alert("Item added to cart!");
}

window.onload = () => selectOption(2);
