// Dummy product list (ADD ALL YOUR PRODUCTS HERE)
const products = [
    {
        name: "Balancing Night Cream",
        keywords: "night cream gotu kola neem pear soothing gel oil control",
        image: "Images/Just-In/night cream.jpeg",
        link: "product1.html"
    },
    {
        name: "Keshanta Advanced Hair Growth Serum",
        keywords: "hair growth serum keshanta advanced ayurvedic regrowth strengthening roots follicles breakage",
        image: "Images/Just-In/hair growth.jpeg",
        link: "product2.html"
    },
    {
        name: "Cooling Body Mist",
        keywords: "body mist cooling spray fragrance fresh summer",
        image: "Images/Just-In/body mist.jpeg",
        link: "product3.html"
    },
    {
        name: "Sheer Sunscreen Body Spray SPF 50 PA++++",
        keywords: "sunscreen spray spf sunblock sheer lightweight uv protection",
        image: "Images/Just-In/sunscreen.jpeg",
        link: "product4.html"
    },
    {
        name: "Cologne - Musk, Lime & Patchouli",
        keywords: "cologne perfume musk lime patchouli fragrance",
        image: "Images/Just-In/perfume.jpeg",
        link: "product5.html"
    },
    {
        name: "Bhringraj Hair Oil",
        keywords: "bhringraj hair oil ayurvedic nourishment smoothness shine glowend",
        image: "Images/Just-In/hair oil.jpeg",
        link: "product6.html"
    },
    {
        name: "Hair Conditioner — Amla, Honey & Mulethi",
        keywords: "conditioner amla honey mulethi moisturizing shine hair care",
        image: "Images/Seasonal Product 1.avif",
        link: "seasonalproduct1.html"
    },
    {
        name: "Transformative Soundarya Night Cream",
        keywords: "night cream soundarya gold bhasma saffron",
        image: "Images/Seasonal Product 2.avif",
        link: "seasonalproduct2.html"
    },
    {
        name: "Sheer Sun Fluid — SPF 50",
        keywords: "sun fluid sunscreen spf 50 lightweight saffron aloe protection",
        image: "Images/Seasonal Product 3.avif",
        link: "seasonalproduct3.html"
    },
    {
        name: "Hair Cleanser — Hibiscus & Neem",
        keywords: "hair cleanser hibiscus neem shampoo scalp clean healthy",
        image: "Images/Seasonal Product 4.avif",
        link: "seasonalproduct4.html"
    },
    {
        name: "Tejasvi Brightening Ghee Cream",
        keywords: "tejasvi ghee cream brightening radiance glow ayurvedic",
        image: "Images/Seasonal Product 5.avif",
        link: "seasonalproduct5.html"
    },
    {
        name: "Hair Thickening Spray — Bhringraj",
        keywords: "hair spray thickening bhringraj volume strengthen",
        image: "Images/Seasonal Product 6.avif",
        link: "seasonalproduct6.html"
    },
    {
        name: "Hydrating Facial Cream",
        keywords: "hydrating facial cream moisturizer nourishing dry skin botanical extracts",
        image: "New Arrivals/facialcream1.jpg",
        link: "new1.html"
    },
    {
        name: "Vitamin-C Radiance Serum",
        keywords: "vitamin c serum brightening radiant glow even skin tone antioxidant",
        image: "New Arrivals/vitamin-c serum 1.jpg",
        link: "new2.html"
    },
    {
        name: "Facewash",
        keywords: "facewash cleanser dirt oil remover deep cleaning fresh skin",
        image: "New Arrivals/facewash1.jpg",
        link: "new3.html"
    },
    {
        name: "Soothing Toner Mist",
        keywords: "toner mist soothing hydrating rosewater aloe vera refresh sensitive skin",
        image: "New Arrivals/Mist1.jpg",
        link: "new4.html"
    },
    {
        name: "Brightening Night Cream",
        keywords: "brightening night cream saffron licorice vitamin e glow hydration overnight radiance",
        image: "New Arrivals/cream1.jpg",
        link: "new5.html"
    },
    {
        name: "Natural Sunscreen SPF 50",
        keywords: "sunscreen spf50 sun protection natural aloe vera green tea lightweight daily",
        image: "New Arrivals/Sunscreen1.jpg",
        link: "new6.html"
    },
    {
        name: "Rose Face Gel",
        keywords: "rose face gel hydrating soothing aloe vera calming redness cooling refreshing",
        image: "New Arrivals/Gel1.jpg",
        link: "new7.html"
    },
    {
        name: "Tea Tree Cleanser",
        keywords: "tea tree cleanser oil control acne refreshing deep clean impurities",
        image: "New Arrivals/cleanser1.jpg",
        link: "new8.html"
    },
    {
        name: "Under Eye Repair",
        keywords: "under eye cream dark circles puffiness repair vitamin e almond coffee",
        image: "New Arrivals/under eye1.jpg",
        link: "new9.html"
    },
    {
        name: "Neem & Tulsi Pack",
        keywords: "neem tulsi pack purifying detox oil control multani mitti acne",
        image: "New Arrivals/Neemtulsi1.jpg",
        link: "new10.html"
    },
    {
        name: "Glow Boost Scrub",
        keywords: "scrub glow boost exfoliate brightening vitamin c papaya walnut unclog pores radiant skin",
        image: "New Arrivals/scrub1.jpg",
        link: "new11.html"
    },
    {
        name: "Anti-Aging Elixir",
        keywords: "anti aging elixir saffron gotu kola gold bhasma youthful glow reduce wrinkles fine lines firm smooth skin",
        image: "New Arrivals/anti-ageing1.jpg",
        link: "new12.html"
    },
    {
        name: "Aloe Vera Gel",
        keywords: "aloe vera gel soothing hydration cooling calm irritated skin lightweight moisturizer daily use",
        image: "New Arrivals/aloeveragel1.jpg",
        link: "new13.html"
    },
    {
        name: "Charcoal Detox Mask",
        keywords: "charcoal detox mask deep cleanse purify pores oil control exfoliate clear skin activated charcoal acne",
        image: "Images/CharcoalMask1.jpg",
        link: "new14.html"
    },
    {
        name: "Botanical Face Oil",
        keywords: "botanical face oil nourishment glow hydration elasticity natural extracts youthful skin",
        image: "Images/Just-In/BotanicaFaceOil1.webp",
        link: "new15.html"
    },
    {
        name: "Essential For Him",
        keywords: "men grooming essential kit fragrance daily fresh combo gift set",
        image: "Just-in(view all)/seasonal/Bestseller page/images/Essentails for him.png",
        link: "Just-in(view all)/seasonal/Bestseller page/product1.html"
    },
    {
        name: "Advanced Hair Growth Serum",
        keywords: "hair serum growth strengthen follicles reduce hair fall natural extract nutrients",
        image: "Just-in(view all)/seasonal/Bestseller page/images/Advanced Hair Growth Serum.png",
        link: "Just-in(view all)/seasonal/Bestseller page/product2.html"
    },
    {
        name: "Facial Cleanser",
        keywords: "cleanser face wash facial wash herbal gentle purifying daily skincare foam cleanse",
        image: "Just-in(view all)/seasonal/Bestseller page/images/Facial Cleanser.png",
        link: "Just-in(view all)/seasonal/Bestseller page/product3.html"
    },
    {
        name: "Iconic Minis Discovery Set",
        keywords: "minis discovery set travel size skincare gift kit luxury mini kit",
        image: "Just-in(view all)/seasonal/Bestseller page/images/Iconic Minis Discovery Set.png",
        link: "Just-in(view all)/seasonal/Bestseller page/product4.html"
    },
    {
        name: "Day & Night Serums Duo",
        keywords: "day serum night serum duo revitalizing brightening repair skincare routine",
        image: "Just-in(view all)/seasonal/Bestseller page/images/Day & Night Serums Duo.png",
        link: "Just-in(view all)/seasonal/Bestseller page/product5.html"
    },
    {
        name: "Sheer Sun Fluid SPF 50",
        keywords: "sunscreen sun fluid spf 50 sun protection lightweight non sticky glow",
        image: "Just-in(view all)/seasonal/Bestseller page/images/Sheer Sun Fluid With SPF 50  PA++++.png",
        link: "Just-in(view all)/seasonal/Bestseller page/product6.html"
    },
    {
        name: "Soundarya Night Cream",
        keywords: "soundarya night cream anti aging glow gold bhasma night repair nourishing skincare",
        image: "Just-in(view all)/seasonal/Bestseller page/images/Transformative Soundarya Night Cream.png",
        link: "Just-in(view all)/seasonal/Bestseller page/product7.html"
    },
    {
        name: "Soundarya 24K Cream",
        keywords: "24k cream soundarya gold glow nourishing radiant antiaging luxury moisturizer",
        image: "Just-in(view all)/seasonal/Bestseller page/images/Soundaya 24k cream.png",
        link: "Just-in(view all)/seasonal/Bestseller page/product8.html"
    },
    {
        name: "Hair Repair Oil",
        keywords: "hair oil repair nourishment damaged hair smooth shiny strengthen elixir",
        image: "Just-in(view all)/seasonal/Bestseller page/images/Hair Repair Oil.png",
        link: "Just-in(view all)/seasonal/Bestseller page/product9.html"
    },
    {
        name: "Kumkumadi Tailam",
        keywords: "kumkumadi tailam ayurvedic oil glow serum brightening radiant skin saffron herbal",
        image: "Just-in(view all)/seasonal/Bestseller page/images/Kumkumadi Tailam.png",
        link: "Just-in(view all)/seasonal/Bestseller page/product10.html"
    },
    {
        name: "Body Radiance Cream",
        keywords: "body cream radiance glow moisturizing nourishing softness hydration",
        image: "Just-in(view all)/seasonal/Bestseller page/images/Body Radiance Cream.png",
        link: "Just-in(view all)/seasonal/Bestseller page/product11.html"
    },
    {
        name: "Hair Cleanser",
        keywords: "hair cleanser shampoo gentle daily wash bhringraj shikakai clean scalp soft hair",
        image: "Just-in(view all)/seasonal/Bestseller page/images/Hair Cleanser.png",
        link: "Just-in(view all)/seasonal/Bestseller page/product12.html"
    },
    {
        name: "Brightening Face Pack",
        keywords: "brightening face pack radiance sandalwood saffron glow mask instant brightening",
        image: "Just-in(view all)/seasonal/Bestseller page/images/Brightening Face Pack.png",
        link: "Just-in(view all)/seasonal/Bestseller page/product13.html"
    },
    {
        name: "Gentle Eye Serum",
        keywords: "eye serum gentle under eye puffiness fine lines soothing botanical extracts",
        image: "Just-in(view all)/seasonal/Bestseller page/images/Gentle Eye Serum.png",
        link: "Just-in(view all)/seasonal/Bestseller page/product14.html"
    },
    {
        name: "Rose Water Mist",
        keywords: "rose mist toner hydrates refresh natural glow steam distilled",
        image: "Just-in(view all)/seasonal/Bestseller page/images/Rose Water Mist.png",
        link: "Just-in(view all)/seasonal/Bestseller page/product15.html"
    },
    {
        name: "Intense Hair Conditioner",
        keywords: "conditioner intense nourishment hair smooth frizz repair",
        image: "Just-in(view all)/seasonal/Bestseller page/images/Intense Hair Conditioner.png",
        link: "Just-in(view all)/seasonal/Bestseller page/product16.html"
    },
    {
        name: "Advanced Soundarya Age Defying Facial Serum With 24K Gold",
        keywords: "soundarya serum 24k gold anti aging face serum youthful glow brightening",
        image: "Just-in(view all)/seasonal/Bestseller page/images/Advanced Soundarya Age Defying Facial Serum With 24K Gold.png",
        link: "Just-in(view all)/seasonal/Bestseller page/product17.html"
    },
    {
        name: "Gentlemen Gift Box",
        keywords: "gift box men grooming self care premium box limited edition",
        image: "Just-in(view all)/seasonal/Bestseller page/images/Gentlemen Gift Box.png",
        link: "Just-in(view all)/seasonal/Bestseller page/product18.html"
    },
    {
        name: "Ultra Rich Body Milk Soundarya With 24K Gold & SPF25",
        keywords: "body milk soundarya gold 24k spf25 moisturizer hydration glow skincare",
        image: "Just-in(view all)/seasonal/Bestseller page/images/Ultra Rich Body Milk Soundarya With 24K Gold & SPF25.png",
        link: "Just-in(view all)/seasonal/Bestseller page/product19.html"
    },
    {
        name: "Intense Under Eye Cream",
        keywords: "under eye cream dark circles puffiness fine lines brightening hydration skincare",
        image: "Just-in(view all)/seasonal/Bestseller page/images/Intense Under Eye Cream.png",
        link: "Just-in(view all)/seasonal/Bestseller page/product20.html"
    },
    {
        name: "Beard Elixir",
        keywords: "beard elixir oil growth smooth soft strengthen grooming men",
        image: "Just-in(view all)/seasonal/Bestseller page/images/Beard Elixir.png",
        link: "Just-in(view all)/seasonal/Bestseller page/product21.html"
    },
    {
        name: "Skin Clarifying Facial Spray",
        keywords: "skin clarifying facial spray toner glow hydration mist botanical refreshing",
        image: "Just-in(view all)/seasonal/Bestseller page/images/Skin Clarifying Facial Spray.png",
        link: "Just-in(view all)/seasonal/Bestseller page/product22.html"
    },
    {
        name: "Body Polishing Oil",
        keywords: "body oil polishing glowing smooth exfoliating nourishing skincare",
        image: "Just-in(view all)/seasonal/Bestseller page/images/Body Polishing Oil.png",
        link: "Just-in(view all)/seasonal/Bestseller page/product23.html"
    },
    {
        name: "Intense Perfume Gulnar – Rose & Carnation",
        keywords: "perfume gulnar rose carnation floral fragrance intense long lasting romantic sensual",
        image: "Just-in(view all)/seasonal/Bestseller page/images/Intense Perfume Gulnar - Rose & Carnation.png",
        link: "Just-in(view all)/seasonal/Bestseller page/product24.html"
    }

];


// Read keyword from URL
const params = new URLSearchParams(window.location.search);
const keyword = params.get("q")?.toLowerCase().trim();

// Show search keyword
document.getElementById("searchKeyword").textContent = keyword;

// Results container
const resultBox = document.getElementById("results");
const noResults = document.getElementById("noResults");

// Filter products
const filtered = products.filter(p =>
    p.name.toLowerCase().includes(keyword) ||
    p.keywords.toLowerCase().includes(keyword)
);

if (filtered.length === 0) {
    noResults.style.display = "block";
} else {
    noResults.style.display = "none";

    filtered.forEach(p => {
        resultBox.innerHTML += `
            <div class="product-card">
                <img src="${p.image}" alt="${p.name}">
                <h3>${p.name}</h3>
                <a href="${p.link}">View Product</a>
            </div>
        `;
    });
}
