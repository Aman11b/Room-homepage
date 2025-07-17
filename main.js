const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);

    document.body.classList.add("overlay-active");
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);

    document.body.classList.remove("overlay-active");
  }
});

const upperDetails = [
  {
    img: "./images/desktop-image-hero-1.jpg",
    title: "Discover innovative ways to decorate",
    text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    img: "./images/desktop-image-hero-2.jpg",
    title: "We are available all across the globe",
    text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    img: "./images/desktop-image-hero-3.jpg",
    title: "Manufactured with the best materials",
    text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of  experience in this industry, we understand what customers want for their home and office.",
  },
];

const image = document.getElementById("imagae");
const title = document.getElementById("title");
const text = document.getElementById("text");

const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

let currentSlide=0;
function renderUpperSection(index){
  const data=upperDetails[index];
  image.src=data.img;
  title.textContent=data.title;
  text.textContent=data.text
}
renderUpperSection(currentSlide);

nextBtn.addEventListener('click',()=>{
  currentSlide=(currentSlide + 1)%3;
  renderUpperSection(currentSlide)
});

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + 3) % 3;
  renderUpperSection(currentSlide);
});






  

  


  

  