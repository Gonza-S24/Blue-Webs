const slider = document.querySelector('.slider');
    const sliderContent = document.querySelector('.slider-content');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    
    let slideIndex = 0;
    
    prevButton.addEventListener('click', () => {
      slideIndex--;
      if (slideIndex < 0) {
        slideIndex = sliderContent.children.length - 1;
      }
      sliderContent.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
    
    nextButton.addEventListener('click', () => {
      slideIndex++;
      if (slideIndex >= sliderContent.children.length) {
        slideIndex = 0;
      }
      sliderContent.style.transform = `translateX(-${slideIndex * 100}%)`;
    });