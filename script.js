// ============================
// Portfolio JavaScript
// ============================

// Sticky Navbar

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    header.classList.toggle("sticky", window.scrollY > 80);

});


// ============================
// Mobile Menu
// ============================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.onclick = () => {

    nav.classList.toggle("active");

    menuBtn.classList.toggle("open");

};


// Close menu when link clicked

document.querySelectorAll("nav a").forEach(link => {

    link.onclick = () => {

        nav.classList.remove("active");
        menuBtn.classList.remove("open");

    }

});


// ============================
// Smooth Scroll
// ============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior: "smooth"

            });

    });

});



// ============================
// Active Navbar
// ============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;
        const height = section.clientHeight;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});




// ============================
// Scroll Reveal
// ============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".card,.project-card,.skill-card,.certificate-grid img,.hero-content,.hero-image,.about-container")
.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});




// ============================
// Typing Effect
// ============================

const text = [

    "Aspiring Software Developer",

    "Java Developer",

    "SAP Enthusiast",

    "Frontend Developer"

];

let index = 0;
let char = 0;

const typingElement = document.querySelector(".hero h2");

function typeEffect() {

    if (!typingElement) return;

    if (char < text[index].length) {

        typingElement.innerHTML += text[index].charAt(char);

        char++;

        setTimeout(typeEffect, 100);

    }

    else {

        setTimeout(eraseEffect, 1500);

    }

}

function eraseEffect() {

    if (char > 0) {

        typingElement.innerHTML = text[index].substring(0, char - 1);

        char--;

        setTimeout(eraseEffect, 40);

    }

    else {

        index++;

        if (index >= text.length) index = 0;

        setTimeout(typeEffect, 300);

    }

}

window.onload = typeEffect;





// ============================
// Animated Counter
// ============================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const speed = target / 100;

        if (count < target) {

            counter.innerText = Math.ceil(count + speed);

            setTimeout(updateCounter, 25);

        }

        else {

            counter.innerText = target;

        }

    }

    updateCounter();

});




// ============================
// Skill Animation
// ============================

const skills = document.querySelectorAll(".progress");

window.addEventListener("scroll", () => {

    skills.forEach(skill => {

        const width = skill.getAttribute("data-width");

        const position = skill.getBoundingClientRect().top;

        const screen = window.innerHeight;

        if (position < screen - 100) {

            skill.style.width = width;

        }

    });

});




// ============================
// Back To Top
// ============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};




// ============================
// Certificate Popup
// ============================

const certificates = document.querySelectorAll(".certificate-grid img");

certificates.forEach(img => {

    img.onclick = () => {

        const popup = document.createElement("div");

        popup.className = "popup";

        popup.innerHTML = `

        <span class="close">&times;</span>

        <img src="${img.src}">

        `;

        document.body.appendChild(popup);

        popup.querySelector(".close").onclick = () => {

            popup.remove();

        }

        popup.onclick = (e) => {

            if (e.target == popup)

                popup.remove();

        }

    }

});




// ============================
// Dark Mode
// ============================

const darkBtn = document.createElement("button");

darkBtn.id = "darkMode";

darkBtn.innerHTML = "🌙";

document.body.appendChild(darkBtn);

darkBtn.onclick = () => {

    document.body.classList.toggle("dark");

};




// ============================
// Scroll Progress Bar
// ============================

const progress = document.createElement("div");

progress.id = "progressBar";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const scroll = document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const percent = (scroll / height) * 100;

    progress.style.width = percent + "%";

});




// ============================
// Image Hover Animation
// ============================

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.05)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});




// ============================
// Mouse Cursor Glow
// ============================

const cursor = document.createElement("div");

cursor.id = "cursor";

document.body.appendChild(cursor);

window.addEventListener("mousemove", e => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});




// ============================
// Console Message
// ============================

console.log("%cPortfolio Designed for Sujitha Sudhagar", "color:#00bcd4;font-size:18px;font-weight:bold;");