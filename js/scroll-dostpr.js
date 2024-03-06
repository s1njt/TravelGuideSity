document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".place-slide");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  const links = document.querySelectorAll(".carousel-link");
  const totalSlides = slides.length;
  const visibleSlides = 1;
  let currentSlide = 0;

  function updateSlides() {
    slides.forEach((slide, i) => {
      if (i >= currentSlide && i < currentSlide + visibleSlides) {
        slide.style.display = "flex";
      } else {
        slide.style.display = "none";
      }
    });
  }

  function setActiveSlide(index) {
    currentSlide = index;
    updateSlides();
  }

  links.forEach((link, index) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      setActiveSlide(index);
      updateActiveLink(index);
    });
  });

  function updateActiveLink(index) {
    links.forEach((link, i) => {
      if (i === index) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  prevButton.addEventListener("click", () => {
    if (currentSlide > 0) {
      setActiveSlide(currentSlide - 1);
      updateActiveLink(currentSlide - 1);
    } else {
      setActiveSlide(totalSlides - visibleSlides);
      updateActiveLink(totalSlides - visibleSlides);
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentSlide + visibleSlides < totalSlides) {
      setActiveSlide(currentSlide + 1);
      updateActiveLink(currentSlide + 1);
    } else {
      setActiveSlide(0);
      updateActiveLink(0);
    }
  });

  updateSlides();
});