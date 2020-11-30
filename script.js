function showSideNav() {
  const sideNav = document.getElementById("side-nav");
  const sideNavContent = document.getElementById("side-nav-content");
  sideNavContent.classList.add("animate__fadeInRightBig");
  sideNav.classList.add("nav__mobile--active");
  disableScroll();
}

function hideSideNav() {
  const sideNav = document.getElementById("side-nav");
  const sideNavContent = document.getElementById("side-nav-content");
  sideNavContent.classList.remove("animate__fadeInRightBig");
  sideNavContent.classList.add("animate__fadeOutRightBig");
  setTimeout(() => {
    sideNav.classList.remove("nav__mobile--active");
    sideNavContent.classList.remove("animate__fadeOutRightBig");
  }, 200);
  enableScroll();
}

// NO SCROLL CODE HERE
// Code from: https://stackoverflow.com/a/4770179/11082274

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
let supportsPassive = false;
try {
  window.addEventListener(
    "test",
    null,
    Object.defineProperty({}, "passive", {
      get: function () {
        supportsPassive = true;
      },
    })
  );
} catch (e) {}

const wheelOpt = supportsPassive ? { passive: false } : false;
const wheelEvent =
  "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

// call this to Disable
function disableScroll() {
  window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
  window.addEventListener("keydown", preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener("DOMMouseScroll", preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener("touchmove", preventDefault, wheelOpt);
  window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
}
