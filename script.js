const sections = document.querySelectorAll("section");
const navBar = document.querySelector(".navbar");
const navButton = document.getElementById("navbar_button");
const projectFigs = document.querySelectorAll("#projects figure");
const projectFigCaps = document.querySelectorAll("#projects figcaption");
const totalOffsetHeight = Array.from(sections).reduce(
  (sum, section) => sum + section.offsetHeight,
  0
);
console.log(navBar);
console.log(navButton);
window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.scrollY / totalOffsetHeight
    );
  },
  false
);

// toggle nav bar in and out
const toggleNavBar = () => {
  navBar.classList.toggle("toggle_nav");
};

navButton.addEventListener("click", toggleNavBar);

// add animations in so they don't activate on load
const addNavIn = () => {
  navBar.classList.add("nav_in");
  navButton.removeEventListener("click", addNavIn);
};

navButton.addEventListener("click", addNavIn);

const addAnimations = figCap => {
  const projectFig = Array.from(projectFigs).find(
    projectFig => projectFig.querySelector("figcaption").innerHTML === figCap
  );
  projectFig.classList.add("fig_img_animation");
  projectFig.removeEventListener("mouseover", addAnimations);
};

projectFigs.forEach(project => {
  const figCap = project.querySelector("figcaption").innerHTML;
  project.addEventListener("mouseover", () => addAnimations(figCap));
});

// Close nav on click anywhere off navbar
const closeNav = e => {
  console.log("click");
  if (!navBar.contains(e.target)) {
    navBar.classList.remove("toggle_nav");
  }
};

document.addEventListener("click", e => closeNav(e));
