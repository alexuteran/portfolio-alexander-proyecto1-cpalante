// -------------------------------Menu-------------------------
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
//-----------------------read more buttom text---------------------------------

const btnMore = document.querySelector("button");
const mostar = document.querySelector(".about-content #mostrar");

let click_ = 1;
btnMore.addEventListener("click", () => {
  if (click_ % 2 === 0) {
    btnMore.textContent = "+";
    mostrar.textContent = "";
    click_++;
  } else {
    mostrar.textContent =
      " \"  I'm the type of person... if you ask me a question and I don't know the answer, I'm going to tell you that I don't know. But I bet you what. I know how to find the answer, and I will find the answer. \"";
    btnMore.textContent = "-";
    click_++;
  }
});

/*------------------------scroll --------------------------------*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
// console.log("hola mundo");

window.onscroll = () => {
  // scroll section active links
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  // ----------------------sticky navBar---------------------------

  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
  // remove toggle icon and navbar when click navbar link (scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// ---------------------scroll reveal-----------------------

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 1000,
  delay: 20,
  easing: "ease-in-out",
});
ScrollReveal().reveal(".home,  .skills h2, .portfolio h2, .contact h2", {
  origin: "top",
});
ScrollReveal().reveal(" .skills-container, .portfolio-box, .contact form", {
  origin: "bottom",
});
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(" .home-content p, .about-content", { origin: "right" });

//  ---------------------typed Js---------------------

const typed = new Typed(".home-content span", {
  strings: ["Frontend Developer", "Javascript", "React"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
