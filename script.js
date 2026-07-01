  window.addEventListener("load", () => {
    setTimeout(() => {
      const intro = document.getElementById("intro");
      if (intro) intro.style.display = "none";

      // FIX: safely show navbar (only if it exists)
      const navbar = document.querySelector(".navbar");
      if (navbar) navbar.style.display = "flex";

      const main = document.getElementById("main-content");
      if (main) {
        main.style.display = "block";
        setTimeout(() => main.classList.add("show"), 100);
      }

    }, 3000);
  });



  const messages = [
    "Flat 10% OFF on First Order",
    "Pure Ayurvedic Wisdom",
    "Free Shipping Above ₹475",
    "Handcrafted in the Himalayas",
    "Buy 2, Get 1 Free – Limited Time",
    "Glow from Nature’s Goodness",
    "Use Code ELORA10 at Checkout",
    "Timeless Luxury, Made in India"
  ];

  let index = 0;
  const msgEl = document.getElementById("elora-message");

  function showNextMessage() {
    msgEl.classList.remove("show");
    setTimeout(() => {
      msgEl.textContent = messages[index];
      msgEl.classList.add("show");
      index = (index + 1) % messages.length;
    }, 500); // fade out before showing next
  }

  // Initial show
  msgEl.textContent = messages[0];
  msgEl.classList.add("show");
  index++;

  // Change message every 3 seconds
  setInterval(showNextMessage, 3000);

  // Mega Dropdown Hover Logic
  // Mega Dropdown Hover Logic
  document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const dropdowns = document.querySelectorAll('.mega-dropdown');
    let timeout;

    navItems.forEach(item => {
      const dropdownId = item.getAttribute('data-dropdown');
      const targetDropdown = document.getElementById(`${dropdownId}-dropdown`);

      item.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        dropdowns.forEach(d => d.style.display = 'none');
        if (targetDropdown) {
          targetDropdown.style.display = 'flex';
          // Add a class to prevent immediate close if mouse leaves quickly
          targetDropdown.classList.add('active-dropdown');
        }
      });

      item.addEventListener('mouseleave', () => {
        timeout = setTimeout(() => {
          if (targetDropdown) {
            targetDropdown.style.display = 'none';
            targetDropdown.classList.remove('active-dropdown');
          }
        }, 300); // 300ms delay before closing
      });

      if (targetDropdown) {
        targetDropdown.addEventListener('mouseenter', () => {
          clearTimeout(timeout);
          targetDropdown.style.display = 'flex';
        });

        targetDropdown.addEventListener('mouseleave', () => {
          timeout = setTimeout(() => {
            targetDropdown.style.display = 'none';
            targetDropdown.classList.remove('active-dropdown');
          }, 300); // 300ms delay before closing
        });
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const slidesContainer = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dotsContainer = document.querySelector('.dots');

    let currentIndex = 0;
    const total = slides.length;
    let slideInterval;

    // Create dots
    for (let i = 0; i <= 5; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.dataset.index = i;
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }

    function goToSlide(idx) {
      currentIndex = idx;
      updateSlider();
    }

    prevBtn.addEventListener('click', () => {
      goToSlide((currentIndex - 1 + total) % total);
    });

    nextBtn.addEventListener('click', () => {
      goToSlide((currentIndex + 1) % total);
    });

    function updateSlider() {
      slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
      document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    }

    function startAutoSlide() {
      slideInterval = setInterval(() => {
        goToSlide((currentIndex + 1) % total);
      }, 5000); // Change slide every 5 seconds
    }

    document.querySelector('.hero-slider').addEventListener('mouseenter', () => {
      clearInterval(slideInterval);
    });

    document.querySelector('.hero-slider').addEventListener('mouseleave', () => {
      startAutoSlide();
    });

    // Start
    updateSlider();
    startAutoSlide();
  });




  document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.customer-slider');
    let scrollAmount = 0;
    let slideTimer;

    function autoSlide() {
      const cardWidth = slider.querySelector('.customer-card').offsetWidth + 20; // includes gap
      const maxScroll = slider.scrollWidth - slider.clientWidth;

      scrollAmount += cardWidth;

      if (scrollAmount >= maxScroll) {
        scrollAmount = 0;
      }

      slider.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }

    // Start auto sliding every 3 seconds
    slideTimer = setInterval(autoSlide, 3000);

    // Optional: pause on hover
    slider.addEventListener('mouseenter', () => clearInterval(slideTimer));
    slider.addEventListener('mouseleave', () => {
      slideTimer = setInterval(autoSlide, 3000);
    });
  });




  // Auto slide for Shop by Concern
  function autoSlideConcern() {
    const concernSlider = document.querySelector('.concern-slider');
    const cardWidth = concernSlider.querySelector('.concern-card').offsetWidth + 20;

    concernSlider.scrollBy({ left: cardWidth, behavior: 'smooth' });

    // Reset to start if end reached
    if (concernSlider.scrollLeft + concernSlider.clientWidth >= concernSlider.scrollWidth - 1) {
      setTimeout(() => {
        concernSlider.scrollTo({ left: 0, behavior: 'smooth' });
      }, 500);
    }
  }

  setInterval(autoSlideConcern, 3000); // every 3 seconds

  // Function for Seasonal Carousel
  const seasonalTrack = document.querySelector('.seasonal-carousel-track');
  const seasonalDots = document.querySelectorAll('.seasonal-carousel-dots .dot');

  let currentSeasonalSlide = 0;
  const totalSeasonalSlides = 2; // Make sure this number matches your slides

  // Show a specific slide for the seasonal section
  function goToSeasonalSlide(index) {
    currentSeasonalSlide = index;
    seasonalTrack.style.transform = `translateX(-${index * 100}%)`;

    seasonalDots.forEach(dot => dot.classList.remove('active'));
    seasonalDots[index].classList.add('active');
  }

  // Auto slide for seasonal carousel
  setInterval(() => {
    currentSeasonalSlide = (currentSeasonalSlide + 1) % totalSeasonalSlides;
    goToSeasonalSlide(currentSeasonalSlide);
  }, 7000); // Auto-slide every 7 seconds

  // Manual dot click for seasonal carousel
  seasonalDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSeasonalSlide(index);
    });
  });

  // Open search bar
  document.addEventListener("DOMContentLoaded", function () {

    const openSearch = document.getElementById("openSearch");
    const closeSearch = document.getElementById("closeSearch");
    const searchBox = document.getElementById("searchBox");
    const searchInput = document.getElementById("searchInput");
    const startSearch = document.getElementById("startSearch");
    const suggestionsBox = document.getElementById("suggestions");

    // Open Search Box
    openSearch.addEventListener("click", () => {
      searchBox.classList.add("active");
      searchInput.focus();
    });

    // Close Search Box
    closeSearch.addEventListener("click", () => {
      searchBox.classList.remove("active");
      searchInput.value = "";
      suggestionsBox.style.display = "none";
    });

    // Search trigger
    function runSearch() {
      const q = searchInput.value.trim();
      if (q !== "") {
        window.location.href = "search.html?q=" + encodeURIComponent(q);
      }
    }

    startSearch.addEventListener("click", runSearch);

    searchInput.addEventListener("keydown", e => {
      if (e.key === "Enter") runSearch();
    });

    // Live suggestions
    searchInput.addEventListener("input", function () {
      const q = this.value.toLowerCase().trim();

      if (q === "") {
        suggestionsBox.style.display = "none";
        return;
      }

      const matches = products.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.keywords.toLowerCase().includes(q)
      );

      if (matches.length === 0) {
        suggestionsBox.style.display = "none";
        return;
      }

      suggestionsBox.innerHTML =
        matches.map(p => `<div class="suggestion-item">${p.name}</div>`).join("");

      suggestionsBox.style.display = "block";

      document.querySelectorAll(".suggestion-item").forEach(item => {
        item.onclick = () => {
          runSearch();
        };
      });
    });

  });




