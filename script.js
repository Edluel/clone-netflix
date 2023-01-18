//checing witch display should be used
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    var menu = document.getElementById("desktop");
    menu.style.display = "none";
    //define side menu margin-top
    let header = document.getElementById("mobile");
    let headerHeight = header.offsetHeight;
    let sidemenu = document.getElementById("side-menu");
    sidemenu.style.marginTop = headerHeight + "px";

  } else {
    var menu = document.getElementById("mobile");
    menu.style.display = "none";
    var sm = document.getElementById("side-menu");
    sm.style.display = "none";
}

//Enable open/close side menu
const sideMenu = document.getElementById("hamburguer");
const openSideMenu = document.getElementById("side-menu");

sideMenu.addEventListener('click', () => {
  if(openSideMenu.classList.contains("side-menu--open")){
    openSideMenu.classList.remove("side-menu--open");
  }
  else {
    openSideMenu.classList.add("side-menu--open");
  }
});





