const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderInner = document.getElementById('education-slider');
const slides = Array.from(sliderInner.querySelectorAll('.flex-me'));
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const controls = document.getElementById('slider-controls');

let currentSlide = 0;
let isSliderActive = false;

function updateSlidePosition() {
  const offset = -currentSlide * 100;
  sliderInner.style.transform = `translateX(${offset}%)`;
}

function activateSlider() {
  if (isSliderActive) return;

  sliderInner.style.transition = 'transform 0.3s ease-in-out';

  slides.forEach(slide => {
    slide.style.minWidth = '100%';
    slide.style.boxSizing = 'border-box';
    slide.style.flexShrink = '0';
  });

  controls.style.display = 'flex';
  updateSlidePosition();
  isSliderActive = true;
}

function deactivateSlider() {
  if (!isSliderActive) return;

  sliderInner.style.transform = '';
  sliderInner.style.display = '';
  sliderInner.style.transition = '';
  sliderInner.style.width = '';
  sliderInner.style.overflow = '';

  slides.forEach(slide => {
    slide.style.minWidth = '';
    slide.style.boxSizing = '';
    slide.style.flexShrink = '';
  });

  controls.style.display = 'none';
  currentSlide = 0;
  isSliderActive = false;
}

function checkSlider() {
  if (window.innerWidth <= 767) {
    activateSlider();
  } else {
    deactivateSlider();
  }
}

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlidePosition();
});

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlidePosition();
});

window.addEventListener('resize', checkSlider);
window.addEventListener('DOMContentLoaded', checkSlider);
