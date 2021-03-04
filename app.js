const slideContainer = document.querySelector('.event-container');
const slide = document.querySelector('.event--items');
const prevBtn = document.querySelector('.prevButton');
const nextBtn = document.querySelector('.nextButton');
const interval = 2500;

let slides = document.querySelectorAll('.event-item');
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone'
firstClone.class='event-item'
lastClone.id = 'last-clone'
lastClone.class = 'event-item'

slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;
slide.style.transform = `translateX(${-slideWidth * index}px)`;


const startSlide = () => {
  slideId = setInterval(() => {
    moveToNextSlide();
  }, interval);
};

const getSlides = () => document.querySelectorAll('.event-item');




slide.addEventListener('transitionend', () => {
  slides = getSlides();
  if (slides[index].id === firstClone.id) {
    slide.style.transition = 'none';
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }

  if (slides[index].id === lastClone.id) {
    slide.style.transition = 'none';
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

const moveToNextSlide = () => {
  slides = getSlides();
  if (index >= slides.length - 1) return;
  index++;
  slide.style.transition = '.4s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

const moveToPreviousSlide = () => {
  if (index <= 0) return;
  index--;
  slide.style.transition = '.4s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

// slideContainer.addEventListener('mouseenter', () => {
//   clearInterval(slideId);
// });

// slideContainer.addEventListener('mouseleave', startSlide);
nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPreviousSlide);

startSlide();

// order에 컬러 넣는거 해야 함.