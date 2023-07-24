  var Carousels = document.querySelectorAll('[data-carousel]');
  Carousels.forEach(setUpCarousel);

function modulo(number, mod) {
    let result = number % mod;
    if (result < 0) {
      result += mod;
    }
    return result;
  }
  
  function setUpCarousel(carousel) {
    function handleNext() {
      currentSlide = modulo(currentSlide + 1, numSlides);
      changeSlide(currentSlide);
    }
  
    function handlePrevious() {
      currentSlide = modulo(currentSlide - 1, numSlides);
      changeSlide(currentSlide);
    }
  
    function changeSlide(slideNumber) {
      // change current slide
      carousel.style.setProperty('--current-slide', slideNumber);
  
      // handle screen reader accessibility
      const previousSlideNumber = modulo(slideNumber - 1, numSlides);
      const nextSlideNumber = modulo(slideNumber + 1, numSlides);
      const previousSlide = slidesContainer.children[previousSlideNumber];
      const currentSlideElement = slidesContainer.children[slideNumber];
      const nextSlide = slidesContainer.children[nextSlideNumber];
  
      previousSlide.setAttribute('aria-hidden', true);
      nextSlide.setAttribute('aria-hidden', true);
      currentSlideElement.setAttribute('aria-hidden', false);
    }
  
    // get elements
    const buttonPrevious = carousel.querySelector('[data-carousel-button-previous]');
    const buttonNext = carousel.querySelector('[data-carousel-button-next]');
    const slidesContainer = carousel.querySelector('[data-carousel-slides-container]');
  
    let currentSlide = 0;
    const numSlides = slidesContainer.children.length;
  
    // set up events
    buttonPrevious.addEventListener('click', handlePrevious);
    buttonNext.addEventListener('click', handleNext);
  }

  
  // carousels.forEach(carouselElement => new Carousel(carouselElement));