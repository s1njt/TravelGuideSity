document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.footer-images img');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const imageCount = images.length;
    const displayCount = 3; // Number of images to display at once
    let currentIndex = 0;
  
    function showImage(index) {
      for (let i = 0; i < imageCount; i++) {
        const adjustedIndex = (index + i) % imageCount;
        let displayStyle = 'none';
        let opacityValue = 0; // Set initial opacity to 0 for hidden images
        if (i < displayCount) {
          displayStyle = 'block';
          opacityValue = 1; // Change opacity to 1 for displayed images
        }
        images[adjustedIndex].style.display = displayStyle;
        images[adjustedIndex].style.opacity = opacityValue;
      }
    }
  
    function fadeInImages() {
      const currentImage = images[currentIndex];
      let opacity = 0;
  
      const fadeInInterval = setInterval(() => {
        opacity += 0.25; // Adjust the increment for smoother or faster fade
        currentImage.style.opacity = opacity;
        if (opacity >= 1) {
          clearInterval(fadeInInterval);
        }
      }, 50); // Adjust the interval for smoother or faster fade
    }
  
    function nextImage() {
      fadeInImages(); // Fade in the next image smoothly
      currentIndex = (currentIndex + 1) % imageCount;
      showImage(currentIndex);
    }
  
    function prevImage() {
      currentIndex = (currentIndex - 1 + imageCount) % imageCount;
      showImage(currentIndex);
    }
  
    prevButton.addEventListener('click', prevImage);
    nextButton.addEventListener('click', nextImage);
  
    // Show initial images
    showImage(currentIndex);
  });
  