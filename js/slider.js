export default function Slider(slider, wrapper) {
  this.slide = document.querySelector(slider);
  this.wrapper = document.querySelector(wrapper);
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
  console.log("clicou");
  this.wrapper.addEventListener("mousemove", this.onMove);
};

Slider.prototype.onMove = function (event) {
  console.log("moveu");
};

Slider.prototype.onEnd = function (event) {
  console.log("acabou");
  this.wrapper.removeEventListener("mousemove", this.onMove);
};
