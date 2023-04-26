function showFun() {
  document.getElementById("navsidebar").style.display = "block";
}

function hideFun() {
  document.getElementById("navsidebar").style.display = "none";
}

// testimonils
//Testimonial Data
const testimonials = [
  {
    name: "Rupendra Chaubet",
    image: "profile-image-1.png",
    testimonial:
      "Imagine web solution is really trustworthy, reasonable and professional company in web designing",
  },
];

//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <p>${testimonials[i].testimonial}</p>
    <img src=${testimonials[i].image}>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
  `;
};
window.onload = displayTestimonial;
