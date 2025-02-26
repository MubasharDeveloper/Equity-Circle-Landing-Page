$(document).ready(function () {
  $('.slick-carousel').slick({
      dots: false, // Show pagination dots
      arrows: false, // Hide navigation arrows
      infinite: true, // Infinite looping
      speed: 300, // Transition speed
      slidesToShow: 3, // Number of slides to show at once
      slidesToScroll: 1, // Number of slides to scroll
      autoplay: true, // Auto-play the carousel
      autoplaySpeed: 3000, // Auto-play speed in milliseconds
      responsive: [
          {
              breakpoint: 1024, // Adjust settings for smaller screens
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  dots: true,
              },
          },
          {
              breakpoint: 660, // Adjust settings for smaller screens
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: true,
              },
          },
      ],
  });
});