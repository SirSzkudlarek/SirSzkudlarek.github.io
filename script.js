const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");
const smallProjectBtn = document.querySelector('[data-projects-btn="small"]');
const bigProjectBtn = document.querySelector('[data-projects-btn="big"]');
const smallProjectContainer = document.querySelector(
  '[data-projects-size="small"]'
);
const bigProjectContainer = document.querySelector(
  '[data-projects-size="big"]'
);

const showSmallProjects = () => {
  smallProjectContainer.classList.remove("display-none");
  bigProjectContainer.classList.add("display-none");
};

const showBigProjects = () => {
  bigProjectContainer.classList.remove("display-none");
  smallProjectContainer.classList.add("display-none");
};

smallProjectBtn.addEventListener("click", showSmallProjects);
bigProjectBtn.addEventListener("click", showBigProjects);

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});
