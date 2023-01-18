if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    var menu = document.getElementById("desktop");
    menu.classList.add("hidden");  
  } else {
    var menu = document.getElementById("mobile");
    menu.classList.add("hidden");
}
