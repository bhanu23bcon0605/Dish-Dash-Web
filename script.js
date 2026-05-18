// ── Cart counter ──
let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById('cartCount').textContent = cartCount;
}

// ── Category pill selection ──
document.querySelectorAll('.pill').forEach(pill => {
  pill.addEventListener('click', () => {
    document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
  });
});
