// scroll js
function scrollWin() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
// sidebar js
function showFun() {
  console.log("detec");
  let x = document.getElementById("navsidebar");
  x.style.right = "0rem";
  x.style.transition = "all 2s";
}

function hideFun() {
  let x = document.getElementById("navsidebar");
  x.style.right = "-35rem";
  x.style.transition = "all 2s";
}

// service box
// let element = document.querySelector("#techloveBody");
// window.addEventListener("scroll", () => {
  //   // let scrollPx=window.pageYOffset
  // let sc = window.scrollY;
  // let bb = document.getElementById("bb");
  // bb.innerHTML = sc;
  // if (sc > 1740 || sc < 2500) {
  //   let data = document.getElementById("myHeading");
    // data.style.color = "red";
//     data.style.transition = "all 2s";
//     const element = document.querySelectorAll(".service-div");
//     element.classList.add("animate__animated", "animate__backInLeft");
//   }
//   console.log(sc);
// });
// console.log(window.scrollY);
// if(window.scrollY>1800){
//   let data=document.getElementById("myHeading")
// data.style.color="red"
// }
// console.log(window.scrollY)
//Testimonial Data
const testimonials = [
  {
    name: "Rupendra Chaubey",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5yTxBxqX7UPLILheEuZbgOuYver2PQLQxuQ&usqp=CAU",
    testimonial:
      "Imagine web solution is really trustworthy, reasonable and professional company in web designing",
  },
  {
    name: "Shivam ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIWNTiq9IDokwKAKD68rWcfvb_790X2MOxIA&usqp=CAU",
    testimonial:
      "It provide the best solution regarding web as well as digital marketing,  It give all possible way to increase traffic of my website, thanku Techlove.",
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
   
  `;
};
window.onload = displayTestimonial;
