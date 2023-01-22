//checing witch display should be used
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    var menu = document.getElementById("desktop");
    menu.style.display = "none";
    //define side menu margin-top
    let header = document.getElementById("mobile");
    let headerHeight = header.offsetHeight;
    let sidemenu = document.getElementById("side-menu");
    sidemenu.style.marginTop = headerHeight + "px";
    //hide slider arrowns
    var sbl = document.getElementById("sbl");
    var sbr = document.getElementById("sbr");
    sbl.style.display = "none";
    sbr.style.display = "none";


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



//Enable dropdown menu
const dropdown = document.querySelector('.navigation');

dropdown.addEventListener('mouseenter', function() {
  const dropdownContent = this.querySelector('.navigation-dropdown');
  dropdownContent.style.display = 'block';
});

dropdown.addEventListener('mouseleave', function() {
  const dropdownContent = this.querySelector('.navigation-dropdown');
  dropdownContent.style.display = 'none';
});


//Enable Slider
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  spaceBetween: 5,
  slidesPerView: 2,
  loop: false,
  freeMode: true,
  speed: 500,
  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  breakpoints: {
      // when window width is >= 640px
      640: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          freeMode: false
      }
  }
})



