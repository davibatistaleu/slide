export default function Slide(slide, wrapper) {
  this.slide = document.querySelector(slide);
  this.wrapper = document.querySelector(wrapper);
  this.mouseInfo = {
    startX: 0,
    movement: 0,
    lastPosition: 0,
    lastSliderXonScreen: 0,
  };

  return this.init();
}

Slide.prototype.init = function init() {
  this.bind();
  this.addEvent();
};

Slide.prototype.config = function (params) {};

Slide.prototype.bind = function bind() {
  this.onStartClick = this.onStartClick.bind(this);
  this.onMouseMove = this.onMouseMove.bind(this);
  this.onEndClick = this.onEndClick.bind(this);
};

Slide.prototype.addEvent = function addEventListener() {
  this.wrapper.addEventListener("mousedown", this.onStartClick);
  this.wrapper.addEventListener("mouseup", this.onEndClick);
};

Slide.prototype.onStartClick = function onStartClick(event) {
  event.preventDefault();
  this.wrapper.addEventListener("mousemove", this.onMouseMove);

  this.mouseInfo.startX = event.clientX;
};

Slide.prototype.onMouseMove = function onMouseMove(event) {
  const finalPosition = this.updateValues(event.clientX);
  this.animationMove(finalPosition);
};

Slide.prototype.onEndClick = function onEndClick(event) {
  this.wrapper.removeEventListener("mousemove", this.onMouseMove);
  this.mouseInfo.lastPosition = this.mouseInfo.lastSliderXonScreen;
  console.log("end: ", this.mouseInfo);
  console.log(this.positionsOfImagesOnSlide);
};

Slide.prototype.animationMove = function animationMove(px) {
  this.mouseInfo.lastSliderXonScreen = px;

  this.slide.style.transform = `translate3d(${px}px, 0, 0)`;
};

Slide.prototype.updateValues = function updateValues(lastMove) {
  this.mouseInfo.movement = (this.mouseInfo.startX - lastMove) * 1.4;
  this.mouseInfo.lastSliderXonScreen =
    this.mouseInfo.lastPosition + this.mouseInfo.movement;
  return this.mouseInfo.lastPosition - this.mouseInfo.movement;
};
