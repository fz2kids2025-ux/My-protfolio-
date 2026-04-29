// NAVBAR ACTIVE LINK
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// SKILLS ANIMATION
const skillSection = document.querySelector("#skills");

window.addEventListener("scroll", () => {
    if (!skillSection) return;

    const top = skillSection.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
        document.querySelectorAll(".fill").forEach(bar => {
            if (bar.classList.contains("html")) bar.style.width = "90%";
            if (bar.classList.contains("css")) bar.style.width = "85%";
            if (bar.classList.contains("js")) bar.style.width = "65%";
        });
    }
});

