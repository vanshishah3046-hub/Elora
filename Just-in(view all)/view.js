document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".ingredient-header, .concern-header, .skin-header, .price-header");

  toggles.forEach(header => {
    header.addEventListener("click", function () {
      const arrow = this.querySelector(".arrow");
      const scrollBox = this.nextElementSibling;

      if (scrollBox.classList.contains("hidden")) {
        scrollBox.classList.remove("hidden");
        arrow.innerHTML = "&#9650;"; // ▲
      } else {
        scrollBox.classList.add("hidden");
        arrow.innerHTML = "&#9660;"; // ▼
      }
    });
  });

  // Price slider logic
  const minSlider = document.getElementById("minPrice");
  const maxSlider = document.getElementById("maxPrice");
  const priceRange = document.getElementById("priceRange");

  function updatePriceRange() {
    let minVal = parseInt(minSlider.value);
    
    let maxVal = parseInt(maxSlider.value);
    if (minVal > maxVal) [minVal, maxVal] = [maxVal, minVal];
    priceRange.textContent = `₹${minVal} - ₹${maxVal}`;
  }
  minSlider.addEventListener("input", updatePriceRange);
  maxSlider.addEventListener("input", updatePriceRange);
});