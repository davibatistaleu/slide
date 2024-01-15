export default function Slider(slider, wrapper) {
  this.slide = document.querySelector(slider);
  this.wrapper = document.querySelector(wrapper);
  this.dist = { finalPosition: 0, startX: 0, movement: 0 };

  return this.init();
}

Slider.prototype.init = function () {
  this.bindEvents();
  this.addEvents();
};

Slider.prototype.addEvents = function () {
  this.wrapper.addEventListener("mousedown", this.onStart);
  this.wrapper.addEventListener("mouseup", this.onEnd);
};

Slider.prototype.bindEvents = function () {
  this.onStart = this.onStart.bind(this);
  this.onMove = this.onMove.bind(this);
  this.onEnd = this.onEnd.bind(this);
};

Slider.prototype.onStart = function (event) {
  event.preventDefault();

  this.dist.startX = event.clientX;
  this.wrapper.addEventListener("mousemove", this.onMove);
};

Slider.prototype.onMove = function (event) {
  const finalPosition = this.updatePosition(event.clientX);
  this.moveSlide(finalPosition);
};

Slider.prototype.onEnd = function (event) {
  this.dist.finalPosition = event.clientX;
  this.wrapper.removeEventListener("mousemove", this.onMove);
  this.dist.finalPosition = this.dist.movePosition;
};

Slider.prototype.updatePosition = function (clientX) {
  this.dist.movement = (this.dist.startX - clientX) * 1.6;
  return this.dist.finalPosition - this.dist.movement;
};

Slider.prototype.moveSlide = function (distX) {
  this.dist.movePosition = distX;
  this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;
};
