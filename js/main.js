let otherLinks = document.querySelector("header .main-menu .other-links");
let megaMenu = document.querySelector("header .mega-menu");
let scrollTop = document.querySelector(".scroll-to-top");
let articles = document.querySelector(".articles");
let ourSkills = document.querySelector(".our-skills");
let ourSkillsSpans = document.querySelectorAll(
  ".our-skills .skills .skill .the-progress>span"
);
let statsSection = document.querySelector(".stats");
let statsNumbers = document.querySelectorAll(".stats .box .number");
let started = false;

otherLinks.onclick = () => megaMenu.classList.toggle("mega-menu-onclik");
scrollTop.onclick = () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

window.onscroll = () => {
  if (window.scrollY >= articles.offsetTop) {
    megaMenu.classList.remove("mega-menu-onclik");
  }

  if (window.scrollY >= 600) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }

  if (window.scrollY >= ourSkills.offsetTop - 300) {
    ourSkillsSpans.forEach((ourSkillsSpans) => {
      ourSkillsSpans.style.width = ourSkillsSpans.getAttribute("data-width");
    });
  }
  if (window.scrollY >= statsSection.offsetTop - 500) {
    if (!started) {
      statsNumbers.forEach((num) => startCount(num));
      started = true;
    }
  }
};

function startCount(ele) {
  let goal = ele.dataset.count;
  let count = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == goal) {
      clearInterval(count);
    }
  }, 500 / goal);
}
