// Bestseller.js — replace existing file with this

// --------- products array (use the one you already provided) ----------
const products = [
  {
    //1
    title: 'Essential For Him',
    category: 'gift',
    price: 895,
    image: 'Essentails for him.png',
    badge: 'New',
    skin: 'dry',
    benefit: 'hydration',
    rating: 4,
    desc: 'A curated set for daily grooming.'
  },
  {
    //2
    title: 'Advanced Hair Growth Serum',
    category: 'hair',
    price: 745,
    image: 'Advanced Hair Growth Serum.png',
    badge: 'Trending',
    skin: 'all',
    benefit: 'anti-aging',
    rating: 5,
    desc: 'Strengthens follicles and promotes growth.'
  },
  {
    //3
    title: 'Facial Cleanser',
    category: 'face',
    price: 395,
    image: 'Facial Cleanser.png',
    badge: 'Best Seller',
    skin: 'oily',
    benefit: 'hydration',
    rating: 3,
    desc: 'Gentle face wash with herbal infusion.'
  },
  {
    //4
    title: 'Iconic Minis Discovery Set',
    category: 'gift',
    price: 1195,
    image: 'Iconic Minis Discovery Set.png',
    badge: 'Luxury',
    skin: 'all',
    benefit: 'hydration',
    rating: 5,
    desc: 'Miniature indulgences in a box.'
  },
  {
    //5
    title: 'Day & Night Serums Duo',
    category: 'face',
    price: 1595,
    image: 'Day & Night Serums Duo.png',
    badge: 'Soft Skin',
    skin: 'combination',
    benefit: 'anti-aging',
    rating: 4,
    desc: 'Glowing skin, day and night.'
  },
  {
    //6
    title: 'Sheer Sun Fluid SPF 50',
    category: 'face',
    price: 495,
    image: 'Sheer Sun Fluid With SPF 50  PA++++.png',
    badge: 'Daily Use',
    skin: 'oily',
    benefit: 'brightening',
    rating: 3,
    desc: 'Light sun protection with glow.'
  },
  {
    //7
    title: 'Soundarya Night Cream',
    category: 'face',
    price: 2095,
    image: 'Transformative Soundarya Night Cream.png',
    badge: 'Trending',
    skin: 'dry',
    benefit: 'anti-aging',
    rating: 5,
    desc: 'Rejuvenates your skin overnight.'
  },
  {
    //8
    title: 'Soundarya 24K Cream',
    category: 'face',
    price: 1095,
    image: 'Soundaya 24k cream.png',
    badge: 'Glow',
    skin: 'combination',
    benefit: 'brightening',
    rating: 4,
    desc: 'Infused with 24K gold particles.'
  },
  {
    //9
    title: 'Hair Repair Oil',
    category: 'hair',
    price: 525,
    image: 'Hair Repair Oil.png',
    badge: 'Hot Pick',
    skin: 'all',
    benefit: 'hydration',
    rating: 4,
    desc: 'Nourishing hair elixir.'
  },
  {
    //10
    title: 'Kumkumadi Tailam',
    category: 'face',
    price: 1495,
    image: 'Kumkumadi Tailam.png',
    badge: 'Best Seller',
    skin: 'dry',
    benefit: 'brightening',
    rating: 5,
    desc: 'Luxurious glow serum.'
  },
  {
    //11
    title: 'Body Radiance Cream',
    category: 'body',
    price: 995,
    image: 'Body Radiance Cream.png',
    badge: 'Hydrating',
    skin: 'combination',
    benefit: 'hydration',
    rating: 4,
    desc: 'Smooth radiant skin.'
  },
  {
    //12
    title: 'Hair Cleanser',
    category: 'hair',
    price: 675,
    image: 'Hair Cleanser.png',
    badge: 'Natural',
    skin: 'dry',
    benefit: 'hydration',
    rating: 4,
    desc: 'Soothing daily  hair cleanser.'
  },
  {
    //13
    title: 'Brightening Face Pack',
    category: 'face',
    price: 795,
    image: 'Brightening Face Pack.png',
    badge: 'Purifying',
    skin: 'oily',
    benefit: 'brightening',
    rating: 5,
    desc: 'Brightens and clears complexion.'
  },
  {
    //14
    title: 'Gentle Eye Serum',
    category: 'face',
    price: 545,
    image: 'Gentle Eye Serum.png',
    badge: 'Bright Eyes',
    skin: 'dry',
    benefit: 'anti-aging',
    rating: 4,
    desc: 'Reduces puffiness and fine lines.'
  },
  {
    //15
    title: 'Rose Water Mist',
    category: 'face',
    price: 395,
    image: 'Rose Water Mist.png',
    badge: 'Fresh',
    skin: 'all',
    benefit: 'hydration',
    rating: 5,
    desc: 'Soothing floral toner spray.'
  },
  {
    //16
    title: 'Intense Hair Conditioner',
    category: 'hair',
    price: 695,
    image: 'Intense Hair Conditioner.png',
    badge: 'Silky',
    skin: 'all',
    benefit: 'hydration',
    rating: 4,
    desc: 'Deep nourishment for damaged hair.'
  },
  {
    //17
    title: 'Advanced Soundarya Age Defying Facial Serum With 24K Gold',
    category: 'face',
    price: 395,
    image: 'Advanced Soundarya Age Defying Facial Serum With 24K Gold.png',
    badge: 'Refreshing',
    skin: 'all',
    benefit: 'hydration',
    rating: 3,
    desc: 'Gentle and fragrant cleanse.'
  },
  {
    //18
    title: 'Gentlemen Gift Box',
    category: 'gift',
    price: 1295,
    image: 'Gentlemen Gift Box.png',
    badge: 'Limited',
    skin: 'all',
    benefit: 'hydration',
    rating: 5,
    desc: 'Perfect self-care gift box.'
  },
  {
    //19
    title: 'Ultra Rich Body Milk Soundarya With 24K Gold & SPF25',
    category: 'body',
    price: 875,
    image: 'Ultra Rich Body Milk Soundarya With 24K Gold & SPF25.png',
    badge: 'Soothing',
    skin: 'dry',
    benefit: 'hydration',
    rating: 4,
    desc: 'Aromatic relaxation blend.'
  },
  {
    //20
    title: 'Intense Under Eye Cream',
    category: 'face',
    price: 495,
    image: 'Intense Under Eye Cream.png',
    badge: 'Tone',
    skin: 'oily',
    benefit: 'brightening',
    rating: 4,
    desc: 'For Dark Circles and Fine Lines.'
  },
  {
    //21
    title: 'Beard Elixir',
    category: 'hair',
    price: 895,
    image: 'Beard Elixir.png',
    badge: 'Repair',
    skin: 'all',
    benefit: 'hydration',
    rating: 3,
    desc: 'Softens and strengthens beard.'
  },
  {//22
    title: 'Skin Clarifying Facial Spray',
    category: 'face',
    price: 1095,
    image: 'Skin Clarifying Facial Spray.png',
    badge: 'Glow',
    skin: 'dry',
    benefit: 'brightening',
    rating: 5,
    desc: 'Premium glow elixir.'
  },
  {
    //23
    title: 'Body Polishing Oil',
    category: 'body',
    price: 1195,
    image: 'Body Polishing Oil.png',
    badge: 'Exfoliate',
    skin: 'all',
    benefit: 'hydration',
    rating: 5,
    desc: 'Leaves skin silky and smooth.'
  },
  {
    //24
    title: 'Intense Perfume Gulnar - Rose & Carnation',
    category: 'gift',
    price: 995,
    image: 'Intense Perfume Gulnar - Rose & Carnation.png',
    badge: 'Mini',
    skin: 'all',
    benefit: 'hydration',
    rating: 4,
    desc: 'Floral.Romantic.Sensual'
}
];

// ---------------------------------------------------------------------

// config
const grid = document.getElementById('productGrid');
const paginationLinks = document.querySelectorAll('.page-link');
const filters = {
  category: document.getElementById('categoryFilter'),
  price: document.getElementById('priceFilter'),
  skin: document.getElementById('skinFilter'),
  benefit: document.getElementById('benefitFilter'),
  rating: document.getElementById('ratingFilter'),
  sort: document.getElementById('sortSelect')
};

let currentPage = 1;
const productsPerPage = 12;

// helpers: cart & wishlist (localStorage)
function getCart(){ try { return JSON.parse(localStorage.getItem('elora_cart')||'[]'); } catch { return []; } }
function setCart(c){ localStorage.setItem('elora_cart', JSON.stringify(c)); }
function getWishlist(){ try { return JSON.parse(localStorage.getItem('wishlist')||'[]'); } catch { return []; } }
function setWishlist(w){ localStorage.setItem('wishlist', JSON.stringify(w)); }

function showToast(message){
  // if the page doesn't have a toast container, create one
  let container = document.getElementById('bs-toast-container');
  if(!container){
    container = document.createElement('div');
    container.id = 'bs-toast-container';
    container.className = 'position-fixed bottom-0 end-0 p-3';
    container.style.zIndex = 99999;
    document.body.appendChild(container);
  }

  // create toast markup
  const toastId = 'toast-' + Date.now();
  container.innerHTML = `
    <div id="${toastId}" class="toast align-items-center text-white bg-dark border-0" role="status" aria-live="polite" aria-atomic="true">
      <div class="d-flex">
        <div class="toast-body">${message}</div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
  ` + container.innerHTML;

  const toastEl = document.getElementById(toastId);
  const bsToast = new bootstrap.Toast(toastEl);
  bsToast.show();

  // clean up after hide
  toastEl.addEventListener('hidden.bs.toast', () => {
    toastEl.remove();
  });
}

// render products (grid)
function renderProducts(){
  grid.innerHTML = '';
  let filtered = products.slice();

  // basic filters
  filtered = filtered.filter(p => {
    const cat = filters.category.value === 'all' || p.category === filters.category.value;
    // price
    let priceMatch = true;
    if(filters.price.value === '0-500') priceMatch = p.price < 500;
    if(filters.price.value === '500-1000') priceMatch = p.price >= 500 && p.price <= 1000;
    if(filters.price.value === '1000+') priceMatch = p.price > 1000;
    // skin
    const skinMatch = filters.skin.value === 'all' || p.skin === filters.skin.value;
    // benefit
    const benefitMatch = filters.benefit.value === 'all' || p.benefit === filters.benefit.value;
    // rating
    const ratingMatch = filters.rating.value === 'all' || p.rating >= parseInt(filters.rating.value, 10);

    return cat && priceMatch && skinMatch && benefitMatch && ratingMatch;
  });

  // sorting
  const sortBy = filters.sort.value;
  if(sortBy === 'priceLowHigh') filtered.sort((a,b) => a.price - b.price);
  if(sortBy === 'priceHighLow') filtered.sort((a,b) => b.price - a.price);
  if(sortBy === 'nameAZ') filtered.sort((a,b) => a.title.localeCompare(b.title));
  if(sortBy === 'nameZA') filtered.sort((a,b) => b.title.localeCompare(a.title));
  if(sortBy === 'ratingHigh') filtered.sort((a,b) => b.rating - a.rating);

  // pagination
  const start = (currentPage - 1) * productsPerPage;
  const paginated = filtered.slice(start, start + productsPerPage);

  // if no products found show message
  if(paginated.length === 0){
    const empty = document.createElement('div');
    empty.className = 'col-12 text-center py-5';
    empty.innerHTML = `<p style="color:#666">No products match your filters.</p>`;
    grid.appendChild(empty);
    return;
  }

  paginated.forEach((product, idx) => {
    const col = document.createElement('div');
    col.className = 'col-md-4';

    // product detail page target (auto incremental: product index in master array)
    const productIndex = products.indexOf(product) + 1; // 1-based
    const productPage = `product${productIndex}.html`; // you can change path if needed

    // card html
    col.innerHTML = `
      <div class="card product-card h-100">
        <div class="badge-label">${product.badge||''}</div>
        <div class="wishlist" data-index="${productIndex}" title="Add to wishlist"><i class="fa-regular fa-heart"></i></div>

        <a href="${productPage}" class="d-block" aria-label="${product.title}">
          <img src="images/${product.image}" alt="${product.title}" class="product-image card-img-top">
        </a>

        <div class="card-body d-flex flex-column">
          <div class="rating">${'★'.repeat(product.rating)}${'☆'.repeat(5-product.rating)}</div>
          <a href="${productPage}" class="text-decoration-none" style="color:inherit;">
            <h5 class="card-title">${product.title}</h5>
          </a>
          <p class="card-text">${product.desc}</p>
          <div class="mt-auto">
            <div class="price">₹${product.price}</div>
            <button class="btn btn-outline-dark w-100 mt-3 add-to-bag-btn" data-index="${productIndex}">Add to Bag</button>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(col);
  });

  // attach interactive handlers (delegated)
  attachCardHandlers();
}

// attach handlers: wishlist, add-to-bag (delegation safe)
function attachCardHandlers(){
  // wishlist icons
  document.querySelectorAll('.product-card .wishlist').forEach(icon => {
    const heart = icon.querySelector('i');
    const idx = icon.dataset.index;
    const wish = getWishlist();
    // set initial state if in wishlist
    const productKey = `product-${idx}`;
    if(wish.includes(productKey)){
      icon.classList.add('active');
      heart.classList.replace('fa-regular','fa-solid');
      heart.style.color = 'red';
    } else {
      heart.classList.replace('fa-solid','fa-regular');
      heart.style.color = '#ccc';
    }

    // hover effect handled by CSS but we ensure icon toggles on click
    icon.addEventListener('click', (e) => {
      e.stopPropagation();
      let w = getWishlist();
      if(w.includes(productKey)){
        w = w.filter(x => x !== productKey);
        icon.classList.remove('active');
        heart.classList.replace('fa-solid','fa-regular');
        heart.style.color = '#ccc';
        showToast('Removed from wishlist');
      } else {
        w.push(productKey);
        icon.classList.add('active');
        heart.classList.replace('fa-regular','fa-solid');
        heart.style.color = 'red';
        showToast('Added to wishlist');
      }
      setWishlist(w);
    });

    // hover in/out color change
    icon.addEventListener('mouseenter', () => {
      if(!icon.classList.contains('active')){
        heart.classList.replace('fa-regular','fa-solid');
        heart.style.color = '#e74c3c';
      }
    });
    icon.addEventListener('mouseleave', () => {
      if(!icon.classList.contains('active')){
        heart.classList.replace('fa-solid','fa-regular');
        heart.style.color = '#ccc';
      }
    });
  });

  // add to bag buttons
  document.querySelectorAll('.add-to-bag-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(btn.dataset.index, 10) - 1;
      const p = products[idx];
      if(!p) return;
      const cart = getCart();
      const key = `product-${idx+1}`;
      const existIdx = cart.findIndex(i => i.key === key);
      if(existIdx > -1){
        cart[existIdx].qty = (cart[existIdx].qty || 0) + 1;
      } else {
        cart.push({ key, title: p.title, price: p.price, qty: 1, image: p.image });
      }
      setCart(cart);
      showToast(`${p.title} added to bag`);
    });
  });
}

// wire filters & pagination
Object.values(filters).forEach(el => {
  el.addEventListener('change', () => {
    currentPage = 1;
    renderProducts();
  });
});

// page links
paginationLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    currentPage = parseInt(link.dataset.page, 10) || 1;
    paginationLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    renderProducts();
  });
});

// initial render
document.addEventListener('DOMContentLoaded', () => {
  // ensure first pagination link active
  paginationLinks.forEach(l => l.classList.remove('active'));
  const first = document.querySelector('.page-link[data-page="1"]');
  if(first) first.classList.add('active');

  renderProducts();
});
