document.querySelectorAll('.product-card button').forEach(btn => {
  btn.addEventListener('click', () => {
    alert("Added to cart!");
  });
});
