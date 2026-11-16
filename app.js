
// CURSOR FOLLOWING GLOW

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});


// MOBILE NAVBAR

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});


// CLOSE NAVBAR AFTER CLICKING A LINK

document.querySelectorAll(".navbar nav a").forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});


// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});


revealElements.forEach((element) => {

    observer.observe(element);

});


// 3D TILT EFFECT ON CARDS

const cards = document.querySelectorAll(".tilt-card");

cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        if (window.matchMedia("(hover: none)").matches) return;

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (centerY - y) / 15;
        const rotateY = (x - centerX) / 15;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";

    });

});


// TOUCH FRIENDLY CARD FEEDBACK

cards.forEach((card) => {

    card.addEventListener("touchstart", () => {

        card.style.boxShadow =
            "0 0 25px #a855f788";

    }, { passive: true });

    card.addEventListener("touchend", () => {

        card.style.boxShadow = "";

    }, { passive: true });

});


// GLOW EFFECT ON BUTTON CLICK

document.querySelectorAll(".primary-btn").forEach((button) => {

    button.addEventListener("click", () => {

        button.classList.add("clicked");

        setTimeout(() => {

            button.classList.remove("clicked");

        }, 300);

    });

});


// CURRENT YEAR

document.querySelector("footer p").textContent =
    `Designed & Built by Shilpi Aggarwal © ${new Date().getFullYear()}`;
