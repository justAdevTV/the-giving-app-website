function showSideNav() {
  const sideNav = document.getElementById("side-nav");
  const sideNavContent = document.getElementById("side-nav-content");
  sideNavContent.classList.add("animate__fadeInRightBig");
  sideNav.classList.add("nav__mobile--active");
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
}
