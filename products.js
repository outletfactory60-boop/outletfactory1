/* =====================================================
   OUTLET FACTORY - PRODUCTS DATA
===================================================== */

const products = [
    {
        id: "P001",
        name: "Basic Top",
        category: "women",
        price: 95,
        oldPrice: null,
        colors: [
            { name: "Yellow", image: "p1.jpg", code: "#FFD21C" },
            { name: "White", image: "p2.jpg", code: "#FFFFFF" },
            { name: "Orange", image: "p3.jpg", code: "#FF6500" },
            { name: "Black", image: "p4.jpg", code: "#111111" },
            { name: "Baby Blue", image: "p5.jpg", code: "#9ED3F5" },
            { name: "Pink", image: "p6.jpg", code: "#F39ABB" },
            { name: "Beige", image: "p7.jpg", code: "#DFCFB7" }
        ],
        sizes: ["S", "M", "L", "XL", "2XL"],
        material: "Cotton Ribbed",
        fit: "Slim Fit",
        details: "Soft and comfortable ribbed cotton fabric for everyday wear.",
        suitableFor: "Women",
        newProduct: true,
        offer: false
    },
    {
        id: "F001",
        name: "Pink Water Flask",
        category: "offers",
        price: 75,
        oldPrice: 125,
        colors: [
            { name: "Pink", code: "#F39ABB", gallery: ["f1.jpg", "f2.jpg"] }
        ],
        sizes: ["250 ML"],
        material: "Pure Plastic",
        fit: "Kids Friendly",
        details: "Lightweight pink water flask, suitable for children at school.",
        suitableFor: "Children at school",
        newProduct: false,
        offer: true
    },
    {
        id: "K001",
        name: "Kids Soft Polo T-Shirt",
        category: "kids-boys",
        price: 550,
        oldPrice: null,
        colors: [
            { name: "White", code: "#FFFFFF", gallery: ["m1.jpg", "m2.jpg", "m3.jpg"] },
            { name: "Baby Blue", code: "#9ED3F5", gallery: ["t1.jpg", "t2.jpg", "t3.jpg"] }
        ],
        sizes: ["4-5", "6-7", "8-9", "10-11", "12-13", "14"],
        material: "Soft Cotton",
        fit: "Slim Fit",
        details: "Soft and comfortable cotton polo fabric, perfect for kids.",
        suitableFor: "Kids from 4 to 14 years old",
        newProduct: true,
        offer: false
    },
    {
        id: "D001",
        name: "Kids Polyester T-Shirt",
        category: "offers",
        price: 45,
        oldPrice: 65,
        colors: [
            { name: "Baby Blue", code: "#9ED3F5", gallery: ["d1.jpg"] },
            { name: "Yellow", code: "#FFD21C", gallery: ["d2.jpg"] },
            { name: "Salmon", code: "#FA8072", gallery: ["d3.jpg"] }
        ],
        sizes: ["4-5", "6-7", "8-9", "10-11", "12-13", "14"],
        material: "Polyester",
        fit: "Comfortable Fit",
        details: "Lightweight and comfortable polyester fabric, suitable for everyday kids wear.",
        suitableFor: "Kids from 4 to 14 years old",
        newProduct: false,
        offer: true
    },
    {
        id: "G002",
        name: "Girls Kids Pajama Set",
        category: "offers",
        price: 65,
        oldPrice: 75,

        colors: [
            {
                name: "White",
                code: "#FFFFFF",
                gallery: ["ll1.jpg"]
            },
            {
                name: "Khaki",
                code: "#C3B091",
                gallery: ["ll2.jpg"]
            },
            {
                name: "Pink",
                code: "#F39ABB",
                gallery: ["ll3.jpg"]
            },
            {
                name: "Blue",
                code: "#4A90E2",
                gallery: ["ll4.jpg"]
            }
        ],

        sizes: ["1-2 Years", "2-3 Years", "3-4 Years", "4-5 Years", "5-6 Years"],

        material: "Soft Fabric",
        fit: "Comfortable Fit",

        details: "Soft and comfortable girls' pajama set, perfect for everyday wear and sleeping.",

        suitableFor: "Girls from 1 to 6 years old",

        newProduct: false,
        offer: true
    },
    {
        id: "K002",
        name: "Zara Kids Cotton T-Shirt",
        category: "kids-boys",
        price: 135,
        oldPrice: null,
        colors: [
            { name: "White", code: "#FFFFFF", gallery: ["n4.jpg", "n5.jpg"] },
            { name: "Grey", code: "#5b5959", gallery: ["n6.jpg", "n7.jpg"] },
            { name: "Yellow", code: "#FFD21C", gallery: ["n2.jpg", "n8.jpg"] },
            { name: "Red", code: "#D62828", gallery: ["n3.jpg"] }
        ],
        sizes: ["4-5", "6-7", "8-9", "10"],
        material: "100% Cotton",
        fit: "Comfortable Fit",
        details: "Soft 100% cotton fabric, comfortable and suitable for everyday kidswear.",
        suitableFor: "Kids from 4 to 10 years old",
        newProduct: true,
        offer: false
    },
    {
        id: "K003",
        name: "Girls Kids Dress",
        category: "kids-girls",
        price: 80,
        oldPrice: null,
        colors: [
            { name: "Blue", code: "#4A90E2", gallery: ["ee1.jpg"] },
            { name: "Mauve", code: "#B784A7", gallery: ["ee2.jpg"] }
        ],
        sizes: ["1-2", "2-3", "3-4"],
        material: "Soft Fabric",
        fit: "Comfortable Fit",
        details: "Comfortable girls' dress, suitable for everyday wear.",
        suitableFor: "Girls from 1 to 4 years old",
        newProduct: true,
        offer: false
    },
    {
        id: "G001",
        name: "Girls Purple Pants",
        category: "kids-girls",
        gender: "girls",
        price: 65,
        oldPrice: null,
        colors: [
            { name: "Purple", code: "#8E44AD", gallery: ["K1.jpg"] }
        ],
        sizes: ["2 Years"],
        material: "Soft Fabric",
        fit: "Comfortable Fit",
        details: "Comfortable purple girls' pants, perfect for everyday wear.",
        suitableFor: "Girls - 2 years old",
        newProduct: true,
        offer: false
    },
    {
        id: "M001",
        name: "Men's Cotton Polo T-Shirt",
        category: "men",
        price: 385,
        oldPrice: null,
        colors: [
            { name: "Olive", code: "#6B705C", gallery: ["v1.jpg", "v2.jpg"] },
            { name: "Pink", code: "#E88FA3", gallery: ["v3.jpg", "v4.jpg"] },
            { name: "Blue", code: "#3B82C4", gallery: ["v5.jpg", "v6.jpg"] }
        ],
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        material: "Cotton Polo",
        fit: "Comfortable Fit",
        details: "Soft and comfortable cotton polo fabric, perfect for outings and everyday wear.",
        suitableFor: "Men",
        newProduct: true,
        offer: false
    },
    {
        id: "M002",
        name: "Men Pure Linen Shirt",
        category: "men",
        price: 850,
        oldPrice: null,
        colors: [
            { name: "Mint Green", code: "#98D8C8", gallery: ["l1.jpg"] },
            { name: "Black", code: "#111111", gallery: ["l2.jpg"] },
            { name: "Blue", code: "#3D78B8", gallery: ["l3.jpg"] },
            { name: "Salmon", code: "#FA8072", gallery: ["l4.jpg"] },
            { name: "Beige", code: "#D8C3A5", gallery: ["l5.jpg"] }
        ],
        sizes: ["S", "M", "L", "XL"],
        material: "100% Pure Linen",
        fit: "Comfortable Fit",
        details: "Premium pure linen fabric, lightweight and breathable.",
        suitableFor: "Men",
        newProduct: true,
        offer: false
    },


    {
        id: "M003",
        name: "Men's Socks Pack",
        category: "men",
        price: 450,
        oldPrice: null,

        colors: [
            {
                name: "White",
                code: "#FFFFFF",
                gallery: ["z1.jpg"]
            },
            {
                name: "Black",
                code: "#111111",
                gallery: ["z2.jpg"]
            }
        ],

        sizes: ["One Size"],

        material: "Cotton",
        fit: "Comfortable Fit",

        details: "Soft and comfortable cotton socks, perfect for everyday wear. Pack contains 3 pieces.",

        suitableFor: "Men",

        newProduct: true,
        offer: false
    },
{
        id: "M004",
        name: "Men Linen Shirt",
        category: "men",
        price: 950,
        oldPrice: null,

        colors: [
            {
                name: "Black",
                code: "#111111",
                gallery: ["kk1.jpg"]
            },
            {
                name: "Baby Blue",
                code: "#9ED3F5",
                gallery: ["kk2.jpg"]
            },
            {
                name: "Dark Blue",
                code: "#0F3D5E",
                gallery: ["kk3.jpg"]
            }
        ],

        sizes: ["S", "M", "L", "XL", "2XL"],

        material: "Linen",
        fit: "Comfortable Fit",

        details: "Lightweight and comfortable linen shirt, perfect for everyday wear and outings.",

        suitableFor: "Men",

        newProduct: true,
        offer: false
    },
    {
        id: "M005",
        name: "Men's Cotton Tank Top",
        category: "men",
        price: 125,
        oldPrice: null,

        colors: [
            {
                name: "White",
                code: "#FFFFFF",
                gallery: ["op1.jpg", "op2.jpg"]
            }
        ],

        sizes: ["S", "M", "L", "XL"],

        material: "100% Cotton",
        fit: "Comfortable Fit",

        details: "Soft and comfortable 100% cotton tank top, perfect for everyday wear.",

        suitableFor: "Men",

        newProduct: true,
        offer: false
    },
    {
        id: "K004",
        name: "Kids Polyester T-Shirt",
        category: "kids-boys",
        price: 55,
        oldPrice: null,

        colors: [
            {
                name: "Black",
                code: "#111111",
                gallery: ["e1.jpg", "e2.jpg", "e3.jpg"]
            },
            {
                name: "Blue",
                code: "#3B82C4",
                gallery: ["e4.jpg"]
            },
            {
                name: "Grey",
                code: "#808080",
                gallery: ["e5.jpg"]
            }
        ],

        sizes: ["6-7 Years", "8-9 Years", "10 Years"],

        material: "Polyester",
        fit: "Comfortable Fit",

        details: "Lightweight and comfortable polyester fabric, perfect for everyday kidswear.",

        suitableFor: "Kids from 6 to 10 years old",

        newProduct: true,
        offer: false
    },
    {
    id: "W002",
    name: "Women's Shorts Pajama Set",
    category: "women",
    price: 450,
    oldPrice: null,

    colors: [
        {
            name: "gray",
            code: "#353433",
            gallery: ["rr1.jpg"]
        },
        {
            name: "Beige",
            code: "#D8C3A5",
            gallery: ["rr2.jpg"]
        },
        {
            name: "White",
            code: "#FFFFFF",
            gallery: ["rr3.jpg"]
        },
        {
            name: "Burgundy",
            code: "#800020",
            gallery: ["rr4.jpg"]
        }
    ],

    sizes: ["S", "M", "L", "XL"],

    material: "Soft Fabric",
    fit: "Comfortable Fit",

    details: "Soft and comfortable women's shorts pajama set, perfect for sleeping and relaxing.",

    suitableFor: "Women",

    newProduct: true,
    offer: false
},

    {
    id: "K005",
    name: "Kids Zipper School Jacket",
    category: "kids-boys",
    price: 300,
    oldPrice: null,

    colors: [
        {
            name: "Black",
            code: "#111111",
            gallery: ["b1.jpg"]
        },
        {
            name: "Grey",
            code: "#808080",
            gallery: ["b2.jpg"]
        },
        {
            name: "Navy",
            code: "#000080",
            gallery: ["b3.jpg"]
        }
    ],

    sizes: [
        "6 Years",
        "8 Years",
        "10 Years",
        "12 Years",
        "14 Years",
        "16 Years"
    ],

    material: "Melted Fabric, Cotton Lined",
    fit: "Comfortable Fit",

    details: "Comfortable zipper school jacket, made from warm Melted fabric and cotton lined for extra comfort.",

    suitableFor: "Kids from 6 to 16 years old",

    newProduct: true,
    offer: false
},
{
    id: "W003",
    name: "Women's Cotton Beach Kaftan",
    category: "women",
    price: 175,
    oldPrice: null,

    colors: [
        {
            name: "White",
            code: "#FFFFFF",
            gallery: ["j1.jpg"]
        },
        {
            name: "Navy",
            code: "#000080",
            gallery: ["j2.jpg"]
        },
        {
            name: "Grey",
            code: "#808080",
            gallery: ["j3.jpg"]
        },
        {
            name: "Baby Blue",
            code: "#9ED3F5",
            gallery: ["j4.jpg"]
        }
    ],

    sizes: ["S","M","L","XL"],

    material: "Cotton",
    fit: "Comfortable Fit",

    details: "Soft and comfortable cotton beach kaftan, perfect for beach and summer wear.",

    suitableFor: "Women",

    newProduct: true,
    offer: false
},
{
    id: "W004",
    name: "Women's Cotton Button Beach Kaftan",
    category: "women",
    price: 325,
    oldPrice: null,

    colors: [
        {
            name: "Salmon",
            code: "#FA8072",
            gallery: ["c1.jpg"]
        },
        {
            name: "Hot Pink",
            code: "#FF1493",
            gallery: ["c2.jpg"]
        },
        {
            name: "Baby Blue",
            code: "#9ED3F5",
            gallery: ["c3.jpg"]
        },
        {
            name: "Mauve",
            code: "#6904b6",
            gallery: ["c4.jpg"]
        }
    ],

    sizes: ["S", "M", "L", "XL", "2XL"],

    material: "Cotton",
    fit: "Comfortable Fit",

    details: "Soft and comfortable women's cotton beach kaftan with buttons, perfect for summer and beach wear.",

    suitableFor: "Women",

    newProduct: true,
    offer: false
},
{
    id: "G003",
    name: "Girls Kids Mint Green Skirt",
    category: "kids-girls",
    price: 95,
    oldPrice: null,

    colors: [
        {
            name: "Mint Green",
            code: "#98D8C8",
            gallery: ["gk1.jpg"]
        }
    ],

    sizes: [
        "1-2 Years",
        "2-3 Years",
        "3-4 Years",
        "4-5 Years",
        "5-6 Years",
        "6-7 Years",
        "7-8 Years"
    ],

    material: "Cotton",
    fit: "Comfortable Fit",

    details: "Soft and comfortable cotton skirt, perfect for everyday girls' wear.",

    suitableFor: "Girls from 1 to 8 years old",

    newProduct: true,
    offer: false
},
{
    id: "U001",
    name: "Kids Girls Swimsuit",
    category: "kids-girls",
    price: 165,
    oldPrice: null,

    colors: [
        {
            name: "White",
            code: "U1",
            gallery: ["u1.jpg", "u4.jpg"]
        },
        {
            name: "Grey",
            code: "#808080",
            gallery: ["u2.jpg", "u3.jpg"]
        }
    ],

    sizes: [
        "10 Years",
        "11 Years",
        "12 Years",
        "13 Years",
        "14 Years",
        "15 Years",
        "16 Years"
    ],

    material: "Soft Cotton",
    fit: "Comfortable Fit",

    details: "Soft and comfortable cotton swimsuit, made from soft cotton fabric.",

    suitableFor: "Girls from 10 to 16 years old",

    newProduct: true,
    offer: false
},
{
    id: "UU003",
    name: "Boys Denim Summer Shorts",
    category: "kids-boys",
    price: 285,
    oldPrice: null,

    colors: [
        {
            name: "Light Denim",
            code: "#6F8FA8",
            gallery: ["uu1.jpg"]
        },
        {
            name: "Dark Denim",
            code: "#263A4A",
            gallery: ["uu2.jpg"]
        }
    ],

    sizes: [
        "4 Years",
        "5 Years",
        "6 Years",
        "7 Years",
        "8 Years",
        "9 Years",
        "10 Years",
        "11 Years",
        "12 Years",
        "13 Years",
        "14 Years"
    ],

    material: "High-Quality Denim",
    fit: "Comfortable Summer Fit",

    details: "Stylish boys' denim shorts made from high-quality denim fabric. Lightweight and comfortable, perfect for summer days and everyday wear.",

    suitableFor: "Boys from 4 to 14 years old",

    newProduct: true,
    offer: false
},
{
    id: "O001",
    name: "Women's 100% Cotton Long Sleeve T-Shirt",
    category: "women",
    price: 250,
    oldPrice: null,

    colors: [
        {
            name: "Yellow",
            code: "#F4D03F",
            productCode: "O1",
            gallery: ["o1.jpg"]
        },
        {
            name: "Beige",
            code: "#D8C3A5",
            productCode: "O2",
            gallery: ["o2.jpg"]
        },
        {
            name: "Black",
            code: "#000000",
            productCode: "O3",
            gallery: ["o3.jpg"]
        },
        {
            name: "Baby Blue",
            code: "#89CFF0",
            productCode: "O4",
            gallery: ["o4.jpg"]
        },
        {
            name: "Pink",
            code: "#F4A6C1",
            productCode: "O5",
            gallery: ["o5.jpg"]
        },
        {
            name: "Coffee",
            code: "#8B6F47",
            productCode: "O6",
            gallery: ["o6.jpg"]
        },
        {
            name: "Grey",
            code: "#808080",
            productCode: "O7",
            gallery: ["o7.jpg"]
        },
        {
            name: "Navy",
            code: "#1F3A5F",
            productCode: "O9",
            gallery: ["o9.jpg"]
        }
    ],

    sizes: [
        "S",
        "M",
        "L",
        "XL",
        "2XL"
    ],

    material: "100% Cotton",
    fit: "Comfortable Fit",

    details: "Soft 100% cotton women's T-shirt with long sleeves. Comfortable, breathable and suitable for everyday wear.",

    suitableFor: "Women",

    newProduct: true,
    offer: false
},
{
    id: "O001",
    name: "Women's 100% Cotton Long Sleeve T-Shirt",
    category: "women",
    price: 0,
    oldPrice: null,

    colors: [
        {
            name: "Yellow",
            code: "#F4D03F",
            productCode: "O1",
            gallery: ["o1.jpg"]
        },
        {
            name: "Beige",
            code: "#D8C3A5",
            productCode: "O2",
            gallery: ["o2.jpg"]
        },
        {
            name: "Black",
            code: "#000000",
            productCode: "O3",
            gallery: ["o3.jpg"]
        },
        {
            name: "Baby Blue",
            code: "#89CFF0",
            productCode: "O4",
            gallery: ["o4.jpg"]
        },
        {
            name: "Pink",
            code: "#F4A6C1",
            productCode: "O5",
            gallery: ["o5.jpg"]
        },
        {
            name: "Coffee",
            code: "#8B6F47",
            productCode: "O6",
            gallery: ["o6.jpg"]
        },
        {
            name: "Grey",
            code: "#808080",
            productCode: "O7",
            gallery: ["o7.jpg"]
        },
        {
            name: "Navy",
            code: "#1F3A5F",
            productCode: "O9",
            gallery: ["o9.jpg"]
        }
    ],

    sizes: [
        "S",
        "M",
        "L",
        "XL",
        "2XL"
    ],

    material: "100% Cotton",
    fit: "Comfortable Fit",

    details: "Soft 100% cotton women's T-shirt with long sleeves. Comfortable, breathable and suitable for everyday wear.",

    suitableFor: "Women",

    newProduct: true,
    offer: false
},
{
    id: "X001",
    name: "Men's Shirt",
    category: "men",
    price: 1000,
    oldPrice: null,

    colors: [
        {
            name: "White",
            code: "#FFFFFF",
            productCode: "X2",
            gallery: ["x2.jpg"]
        },
        {
            name: "Baby Blue",
            code: "#89CFF0",
            productCode: "X1",
            gallery: ["x1.jpg"]
        },
        {
            name: "Coffee",
            code: "#8B6F47",
            productCode: "X3",
            gallery: ["x3.jpg"]
        }
    ],

    sizes: [
        "S",
        "M",
        "L",
        "XL",
        "2XL"
    ],

    material: "High-Quality Fabric",
    fit: "Comfortable Fit",

    details: "Men's shirt made from high-quality, soft and comfortable fabric. Stylish and breathable, perfect for everyday wear and smart casual looks.",

    suitableFor: "Men",

    newProduct: true,
    offer: false
}
];

/* =====================================================
   GLOBAL STATE
===================================================== */
let currentCategory = "women";
let displayedProducts = products.filter(product => product.category === currentCategory);
let cart = JSON.parse(localStorage.getItem("outletFactoryCart")) || [];

/* =====================================================
   PAGE LOAD INITIALIZATION
===================================================== */
document.addEventListener("DOMContentLoaded", function () {
    renderProducts();
    updateCartCount();
});

/* =====================================================
   RENDER PRODUCTS GRID
===================================================== */
function renderProducts() {
    const grid = document.getElementById("productsGrid");
    if (!grid) return;

    grid.innerHTML = "";

    if (displayedProducts.length === 0) {
        grid.innerHTML = `
            <div class="no-products">
                <i class="fa-solid fa-box-open"></i>
                <h2>No Products Yet</h2>
                <p>There are no products in this category yet.</p>
            </div>
        `;
        updateProductCount();
        return;
    }

    displayedProducts.forEach(product => {
        grid.innerHTML += createProductCard(product);
    });

    updateProductCount();
}

/* =====================================================
   CREATE PRODUCT CARD HTML
===================================================== */
function createProductCard(product) {
    let colorButtons = "";
    product.colors.forEach((color, index) => {
        colorButtons += `
            <button
                class="color-button ${index === 0 ? "selected" : ""}"
                style="background-color: ${color.code};"
                title="${color.name}"
                onclick="changeColor('${product.id}', '${color.name}', this)">
            </button>
        `;
    });

    let sizeButtons = "";
    product.sizes.forEach((size, index) => {
        sizeButtons += `
            <button
                class="size-button ${index === 0 ? "selected" : ""}"
                onclick="selectSize(this)">
                ${size}
            </button>
        `;
    });

    let priceHTML = product.oldPrice ? `
        <div class="product-price">
            <del>${product.oldPrice} EGP</del>
            <strong>${product.price} EGP</strong>
        </div>
    ` : `
        <div class="product-price">
            <strong>${product.price}</strong> <span>EGP</span>
        </div>
    `;

    let badgeHTML = "";
    if (product.offer) {
        badgeHTML = `<span class="offer-badge">OFFER</span>`;
    } else if (product.newProduct) {
        badgeHTML = `<span class="new-badge">NEW</span>`;
    }

    const firstColor = product.colors[0];
    const firstGallery = firstColor.gallery || [firstColor.image];

    let dotsHTML = "";
    firstGallery.forEach((image, index) => {
        dotsHTML += `
            <span
                class="image-dot ${index === 0 ? "active" : ""}"
                onclick="changeGalleryImage('${product.id}', '${image}', this)">
            </span>
        `;
    });

    const mainImgSrc = firstColor.gallery ? firstColor.gallery[0] : firstColor.image;

    return `
        <article class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                ${badgeHTML}
                <button class="favorite-button" onclick="toggleFavorite(this)" aria-label="Add to favorites">♡</button>
                <img id="image-${product.id}" src="${mainImgSrc}" alt="${product.name}">
            </div>

            <div class="image-dots">
                ${dotsHTML}
            </div>

            <div class="product-info">
                <h2 class="product-name">${product.name}</h2>
                <div class="product-code">Code: <span>${product.id}</span></div>

                ${priceHTML}

                <div class="option-title">Colors:</div>
                <div class="color-options">${colorButtons}</div>
                <div class="selected-color">Selected Color: <strong>${product.colors[0].name}</strong></div>

                <div class="option-title">${product.id === "F001" ? "Capacity:" : "Sizes:"}</div>
                <div class="size-options">${sizeButtons}</div>
                <div class="selected-size">Selected: <strong>${product.sizes[0]}</strong></div>

                <div class="quantity-row">
                    <span class="option-title">Quantity:</span>
                    <div class="quantity-box">
                        <button onclick="changeQuantity(this, -1)">−</button>
                        <span>1</span>
                        <button onclick="changeQuantity(this, 1)">+</button>
                    </div>
                </div>

                <div class="details">
                    <h4>Details:</h4>
                    <ul>
                        <li>${product.id === "F001" ? "Capacity: 250 ML" : "Material: " + product.material}</li>
                        <li>${product.id === "F001" ? "Material: Pure Plastic" : "Fit: " + product.fit}</li>
                        <li>Suitable for: ${product.suitableFor}</li>
                        <li>${product.id === "F001" ? "Lightweight and suitable for school." : product.details}</li>
                    </ul>
                </div>

                <button class="add-to-bag" onclick="addToCart('${product.id}', this)">
                    <i class="fa-solid fa-bag-shopping"></i> Add to Shopping Bag
                </button>
            </div>
        </article>
    `;
}

/* =====================================================
   CARD INTERACTION HANDLERS
===================================================== */
function changeColor(productId, colorName, button) {
    const card = button.closest(".product-card");
    const product = products.find(p => p.id === productId);
    if (!card || !product) return;

    card.querySelectorAll(".color-button").forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");

    const selectedColor = card.querySelector(".selected-color strong");
    if (selectedColor) selectedColor.textContent = colorName;

    const colorData = product.colors.find(c => c.name === colorName);
    if (!colorData) return;

    const gallery = colorData.gallery || (colorData.image ? [colorData.image] : []);
    if (gallery.length === 0) return;

    const imageElement = document.getElementById("image-" + productId);
    if (imageElement) imageElement.src = gallery[0];

    const dotsContainer = card.querySelector(".image-dots");
    if (!dotsContainer) return;

    dotsContainer.innerHTML = "";
    gallery.forEach((galleryImage, index) => {
        dotsContainer.innerHTML += `
            <span class="image-dot ${index === 0 ? "active" : ""}"
                  onclick="changeGalleryImage('${productId}', '${galleryImage}', this)">
            </span>
        `;
    });
}

function changeGalleryImage(productId, image, dot) {
    const imageElement = document.getElementById("image-" + productId);
    if (imageElement) imageElement.src = image;

    const card = dot.closest(".product-card");
    if (!card) return;

    card.querySelectorAll(".image-dot").forEach(item => item.classList.remove("active"));
    dot.classList.add("active");
}

function selectSize(button) {
    const card = button.closest(".product-card");
    if (!card) return;

    card.querySelectorAll(".size-button").forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");

    const selectedSize = card.querySelector(".selected-size strong");
    if (selectedSize) selectedSize.textContent = button.textContent.trim();
}

function changeQuantity(button, amount) {
    const box = button.closest(".quantity-box");
    if (!box) return;

    const number = box.querySelector("span");
    let quantity = parseInt(number.textContent) || 1;
    quantity += amount;

    if (quantity < 1) quantity = 1;
    number.textContent = quantity;
}

function toggleFavorite(button) {
    button.classList.toggle("active");
    button.textContent = button.classList.contains("active") ? "♥" : "♡";
}

/* =====================================================
   FILTERING, SEARCH & SORT
===================================================== */
function filterCategory(category) {
    currentCategory = category;
    displayedProducts = products.filter(product => product.category === category);

    document.querySelectorAll(".category-tab, .side-category").forEach(button => {
        button.classList.remove("active");
    });
    document.querySelectorAll(`[data-category="${category}"]`).forEach(button => {
        button.classList.add("active");
    });

    const titles = { men: "Men", women: "Women", kids: "Kids", offers: "Offers" };
    const title = document.getElementById("categoryTitle");
    if (title && titles[category]) title.textContent = titles[category];

    renderProducts();
}

function searchProducts() {
    const input = document.getElementById("searchInput");
    if (!input) return;

    const value = input.value.toLowerCase().trim();
    const categoryProducts = products.filter(product => product.category === currentCategory);

    displayedProducts = value === "" ? categoryProducts : categoryProducts.filter(product =>
        product.name.toLowerCase().includes(value) || product.id.toLowerCase().includes(value)
    );

    renderProducts();
}

function sortProducts() {
    const select = document.getElementById("sortSelect");
    if (!select) return;

    const value = select.value;
    if (value === "price-low") displayedProducts.sort((a, b) => a.price - b.price);
    if (value === "price-high") displayedProducts.sort((a, b) => b.price - a.price);
    if (value === "name") displayedProducts.sort((a, b) => a.name.localeCompare(b.name));

    renderProducts();
}

function updateProductCount() {
    const countElement = document.getElementById("productCount");
    if (countElement) countElement.textContent = displayedProducts.length;
}

/* =====================================================
   SHOPPING BAG & SIDEBAR CONTROLS
===================================================== */
function openCart() {
    const sidebar = document.getElementById("cartSidebar");
    const overlay = document.getElementById("cartOverlay");

    if (sidebar && overlay) {
        sidebar.classList.add("active");
        overlay.classList.add("active");
        renderCartItems();
    }
}

function closeCart() {
    const sidebar = document.getElementById("cartSidebar");
    const overlay = document.getElementById("cartOverlay");

    if (sidebar && overlay) {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    }
}

function addToCart(productId, button) {
    const product = products.find(p => p.id === productId);
    const card = button.closest(".product-card");
    if (!product || !card) return;

    const selectedColor = card.querySelector(".selected-color strong");
    const colorName = selectedColor ? selectedColor.textContent.trim() : product.colors[0].name;

    const selectedSize = card.querySelector(".selected-size strong");
    const size = selectedSize ? selectedSize.textContent.trim() : product.sizes[0];

    const quantityElement = card.querySelector(".quantity-box span");
    const quantity = quantityElement ? parseInt(quantityElement.textContent) : 1;

    const colorData = product.colors.find(c => c.name === colorName) || product.colors[0];
    const image = colorData.gallery ? colorData.gallery[0] : colorData.image;

    const existingItemIndex = cart.findIndex(item =>
        item.id === productId && item.color === colorName && item.size === size
    );

    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            color: colorName,
            size: size,
            quantity: quantity,
            image: image
        });
    }

    localStorage.setItem("outletFactoryCart", JSON.stringify(cart));
    updateCartCount();

    const originalHTML = button.innerHTML;
    button.innerHTML = `<i class="fa-solid fa-check"></i> Added!`;
    button.style.backgroundColor = "#28a745";
    setTimeout(() => {
        button.innerHTML = originalHTML;
        button.style.backgroundColor = "";
    }, 1500);
}

function renderCartItems() {
    const cartItemsContainer = document.getElementById("cartItems");
    const cartTotalElement = document.getElementById("cartTotal");

    if (!cartItemsContainer) return;

    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div style="text-align: center; padding: 20px; color: #777;">
                Your shopping bag is empty.
            </div>
        `;
        if (cartTotalElement) cartTotalElement.textContent = "0 EGP";
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        cartItemsContainer.innerHTML += `
            <div class="cart-item" style="display: flex; gap: 10px; align-items: center; margin-bottom: 15px;">
                <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px;">
                <div style="flex: 1;">
                    <h4 style="margin: 0; font-size: 14px;">${item.name}</h4>
                    <p style="margin: 2px 0; font-size: 12px; color: #555;">Color: ${item.color} | Size: ${item.size}</p>
                    <p style="margin: 0; font-size: 12px; font-weight: bold;">${item.quantity} x ${item.price} EGP = ${itemTotal} EGP</p>
                </div>
                <button onclick="removeFromCart(${index})" style="background: none; border: none; color: red; cursor: pointer; font-size: 16px;">✕</button>
            </div>
        `;
    });

    if (cartTotalElement) cartTotalElement.textContent = `${total} EGP`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("outletFactoryCart", JSON.stringify(cart));
    updateCartCount();
    renderCartItems();
}

function updateCartCount() {
    const cartCountElement = document.getElementById("cartCount");
    if (cartCountElement) {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCountElement.textContent = totalItems;
    }
}

function confirmOrder() {
    if (cart.length === 0) {
        alert("Your shopping bag is empty!");
        return;
    }

    let message = "Hello Outlet Factory, I would like to place an order:\n\n";
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        message += `${index + 1}. ${item.name}\n   Code: ${item.id}\n   Color: ${item.color}\n   Size: ${item.size}\n   Qty: ${item.quantity}\n   Price: ${itemTotal} EGP\n\n`;
    });

    message += `Total Order: ${total} EGP`;

    const whatsappNumber = "201010040888";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
}