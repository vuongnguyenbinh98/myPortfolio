var menuToggle = function () {
  const toggleMenu = document.querySelector(".toggle");
  const navi = document.querySelector(".navigation");
  toggleMenu.classList.toggle("active");
  navi.classList.toggle("active");
};

window.addEventListener("scroll", function () {
  var header = document.querySelector(".top");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/*SCROLL HOME*/
sr.reveal(".banner_title", {});

// scroll about
sr.reveal(".about_h2", {});
sr.reveal(".about_h3", { delay: 300 });
sr.reveal(".about_title", { delay: 450 });

// scroll skills
sr.reveal(".skills_h2", {});
sr.reveal(".skills_items", { interval: 400 });

//scroll contact
sr.reveal(".contact_h2", {});
sr.reveal(".contact_input", { delay: 300 });
sr.reveal(".contact_area", { delay: 400 });
sr.reveal(".contact_btn", { delay: 450 });
