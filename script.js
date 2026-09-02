/* =================================================
   CART SYSTEM
================================================= */

let cart = [];

// UPDATE CART COUNT
function updateCartCount() {
    const count = document.getElementById("cartCount");
    if (!count) return;

    let totalItems = 0;
    cart.forEach(function(item) {
        totalItems += item.quantity;
    });

    count.textContent = totalItems;
}

// OPEN CART SIDEBAR
function openCart() {
    const sidebar = document.getElementById("cartSidebar");
    const overlay = document.getElementById("cartOverlay");

    if (sidebar) sidebar.classList.add("active");
    if (overlay) overlay.classList.add("active");

    displayCart();
}

// CLOSE CART SIDEBAR
function closeCart() {
    const sidebar = document.getElementById("cartSidebar");
    const overlay = document.getElementById("cartOverlay");

    if (sidebar) sidebar.classList.remove("active");
    if (overlay) overlay.classList.remove("active");
}

// DISPLAY CART ITEMS
function displayCart() {
    const container = document.getElementById("cartItems");
    const totalElement = document.getElementById("cartTotal");

    if (!container || !totalElement) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div style="text-align:center; padding:40px 0; color:#777;">
                <i class="fa-solid fa-cart-shopping" style="font-size:40px; margin-bottom:15px;"></i>
                <h3>Your cart is empty</h3>
                <p>Add some products first.</p>
            </div>
        `;
        totalElement.textContent = "0 EGP";
        return;
    }

    let total = 0;
    container.innerHTML = "";

    cart.forEach(function(item) {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        container.innerHTML += `
            <div style="padding:15px 0; border-bottom:1px solid #eee; display:flex; gap:15px; align-items:center;">
                <img src="${item.image}" alt="${item.name}" style="width:80px; height:80px; object-fit:cover; border-radius:8px;">
                <div>
                    <strong>${item.name}</strong>
                    <p style="color:#777; font-size:13px; margin-top:5px;">Code: ${item.code}</p>
                    <p style="color:#777; font-size:13px;">Size: ${item.size}</p>
                    <p style="color:#777; font-size:13px;">Color: ${item.color}</p>
                    <p style="color:#777; font-size:13px;">Quantity: ${item.quantity}</p>
                    <strong style="color:#a5161c;">${itemTotal} EGP</strong>
                </div>
            </div>
        `;
    });

    totalElement.textContent = total + " EGP";
}

// ADD TO CART
function addToCart(code, name, price, color, size, quantity, image) {
    const product = {
        code: code,
        name: name,
        price: Number(price),
        color: color,
        size: size,
        quantity: Number(quantity),
        image: image
    };

    cart.push(product);
    updateCartCount();
    alert("Product added to your cart ❤️");
}

/* =================================================
   SEARCH PRODUCTS
================================================= */

function searchProducts() {
    const input = document.getElementById("searchInput");
    if (!input) return;

    const searchText = input.value.trim();
    if (searchText === "") return;

    window.location.href = "products.html?search=" + encodeURIComponent(searchText);
}

/* =================================================
   WHATSAPP ORDER
================================================= */

function confirmOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    let message = "Hello Outlet Factory 👋\n\nI would like to confirm my order:\n\n";
    let total = 0;

    cart.forEach(function(item) {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        message += `🛍️ Product: ${item.name}\n🔢 Code: ${item.code}\n🎨 Color: ${item.color}\n📏 Size: ${item.size}\n📦 Quantity: ${item.quantity}\n💰 Price: ${itemTotal} EGP\n\n`;
    });

    message += `💵 TOTAL: ${total} EGP\n\nPlease confirm my order ❤️`;

    const phone = "201010040888";
    const url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}

/* =================================================
   GENERATE PDF
================================================= */

function loadImage(src) {
    return new Promise(function(resolve, reject) {
        const img = new Image();
        img.onload = function() { resolve(img); };
        img.onerror = function() { reject(); };
        img.src = src;
    });
}

async function generatePDF() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();

    pdf.setFontSize(22);
    pdf.text("OUTLET FACTORY", 20, 25);

    pdf.setFontSize(12);
    pdf.text("ORDER SUMMARY", 20, 35);

    let y = 50;
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        try {
            const img = await loadImage(item.image);
            pdf.addImage(img, "JPEG", 20, y, 45, 45);
        } catch (error) {
            console.log("Product image could not be loaded.");
        }

        pdf.setFontSize(13);
        pdf.text(item.name, 75, y + 8);

        pdf.setFontSize(10);
        pdf.text("Code: " + item.code, 75, y + 17);
        pdf.text("Color: " + item.color, 75, y + 25);
        pdf.text("Size: " + item.size, 75, y + 33);
        pdf.text("Quantity: " + item.quantity, 75, y + 41);
        pdf.text("Price: " + itemTotal + " EGP", 130, y + 41);

        y += 60;

        if (y > 250 && i < cart.length - 1) {
            pdf.addPage();
            y = 20;
        }
    }

    pdf.setFontSize(16);
    pdf.text("TOTAL: " + total + " EGP", 20, y + 10);

    pdf.setFontSize(10);
    pdf.text("WhatsApp: 01010040888", 20, y + 25);
    pdf.text("Thank you for shopping with Outlet Factory!", 20, y + 35);

    pdf.save("Outlet-Factory-Order.pdf");
}