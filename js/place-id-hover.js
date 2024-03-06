document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".carousel-link");
    links.forEach((link, index) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        setActiveLink(index);
      });
    });
  
    function setActiveLink(index) {
      links.forEach((link, i) => {
        if (i === index) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  });