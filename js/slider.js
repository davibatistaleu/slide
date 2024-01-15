export default function Slide(slide, wrapper) {
  this.slide = document.querySelector(slide);
  this.wrapper = document.querySelector(wrapper);
  this.sliderData = {
    initialPosition: 0,
    movement: 0,
    lastPosition: 0,
    lastPostionSlider: 0,
  };
  return this.init();
}

Slide.prototype.init = function () {
  this.bindEvents();
  this.addEvents();

  return this;
};

Slide.prototype.bindEvents = function () {
  this.onMousedown = this.onMousedown.bind(this);
  this.onMousemove = this.onMousemove.bind(this);
  this.onMouseup = this.onMouseup.bind(this);
};

Slide.prototype.addEvents = function () {
  this.wrapper.addEventListener("mousedown", this.onMousedown);
  this.wrapper.addEventListener("mouseup", this.onMouseup);
};

Slide.prototype.onMousedown = function (event) {
  event.preventDefault();
  this.sliderData.initialPosition = event.clientX;
  this.wrapper.addEventListener("mousemove", this.onMousemove);
};

Slide.prototype.onMousemove = function (event) {
  this.animateSlide(this.caculateMovements(event.clientX));
};
Slide.prototype.caculateMovements = function (currentMousePosition) {
  this.sliderData.movement =
    currentMousePosition - this.sliderData.initialPosition;

  return this.sliderData.lastPosition - this.sliderData.movement;
};
Slide.prototype.onMouseup = function (event) {
  this.wrapper.removeEventListener("mousemove", this.onMousemove);
  this.sliderData.lastPosition = this.sliderData.lastPostionSlider;
};

Slide.prototype.animateSlide = function (currentMousePosition) {
  this.sliderData.lastPostionSlider = currentMousePosition;
  this.slide.style.transform = `translate3d(${-currentMousePosition}px, 0, 0)`;
};
