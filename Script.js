  $(document).ready(function() {
        var today = new Date();
        var prideMonth = 5; // January is represented as 0 (0-indexed) in JavaScript
        var prideDay = 28;
    
        if (today.getMonth() === prideMonth && today.getDate() === prideDay) {
          // Target the logo element
          var logo = $(".navbar-brand img");
    
          var prideFlag = $("<div class='pride-flag-container'><img src='./img/Pride Flag .png'></div>"); // Adjust the path as needed
    
          // Insert the pride flag after the logo // Adjust the path as needed
    
          // Insert the pride flag after the logo
          logo.after(prideFlag);
        }
        // Style the logo
      $(".navbar-brand img").css({
        "max-width": "100px",
        "height": "auto"
      });
    
      // Style the pride flag container
      $(".pride-flag-container").css({
        "max-width": "100px", // Adjust the maximum width of the pride flag
        "height": "40px",
        "margin-left": "10px", // Add margin to separate the pride flag from the logo
        "display": "inline-block" // Ensure it stays inline with the logo
      });
    
      });


document.addEventListener('DOMContentLoaded', function() {
    const backgroundSlider = document.querySelector('.background-slider');
    const subSlider = document.querySelector('.sub-slider');

    const carouselItems = document.querySelectorAll('.carousel-item');

    carouselItems.forEach((item, index) => {
        const imgSrc = item.querySelector('img').getAttribute('src');
        const backgroundSlide = document.createElement('div');
        backgroundSlide.classList.add('slide');
        backgroundSlide.style.backgroundImage = `url(${imgSrc})`;
        if (index === 0) {
            backgroundSlide.classList.add('active');
        }
        backgroundSlider.appendChild(backgroundSlide);
    });

    function updateBackground() {
        const currentSubSlideIndex = Array.from(subSlider.querySelectorAll('.carousel-item')).findIndex(item => item.classList.contains('active'));
        const backgroundSlides = Array.from(backgroundSlider.children);

        backgroundSlides.forEach((slide, index) => {
            if (index === currentSubSlideIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    subSlider.addEventListener('transitionend', updateBackground);
    updateBackground();
});

