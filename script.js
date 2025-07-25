const options = document.querySelectorAll('.option');
const totalDiv = document.getElementById('total');

options.forEach(option => {
  option.addEventListener('click', () => {
    options.forEach(opt => opt.classList.remove('selected'));
    option.classList.add('selected');
    updateTotal();
  });
});

function updateTotal() {
  const selected = document.querySelector('.option.selected');
  if (!selected) return;

  const percentage = parseInt(selected.dataset.discount);
  const original = parseFloat(selected.dataset.original);
  const discounted = original - (original * percentage / 100);

  totalDiv.innerHTML = `You pay: <strong>₹${discounted.toFixed(2)}</strong> <del>₹${original.toFixed(2)}</del>`;
}
