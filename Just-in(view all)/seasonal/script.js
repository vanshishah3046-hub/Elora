const toastEl = document.getElementById('wishlistToast');
const toast = toastEl ? new bootstrap.Toast(toastEl) : null;

document.querySelectorAll('.wishlist-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const icon = btn.querySelector('i');
    btn.classList.toggle('active');
    icon.classList.toggle('fas');
    icon.classList.toggle('far');

    if (toast) {
      const isActive = btn.classList.contains('active');
      document.querySelector('#wishlistToast .toast-body').textContent = isActive
        ? 'Added to wishlist'
        : 'Removed from wishlist';
      toast.show();
    }
  });
});