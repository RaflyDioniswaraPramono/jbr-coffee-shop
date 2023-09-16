// // set active class for clicked navbar links
// let linksContainer = document.getElementById("navbar");
// let links = linksContainer.getElementsByClassName("link");

// for (var i = 0; i < links.length; i++) {  
//   links[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

// toggle hidden navbar links for tablet and phone screen
const hiddenLinksBox = document.getElementById("hidden-navbar-links-box");  
const toggleHiddenNavbarBox = () => {
  if (hiddenLinksBox.classList.value.includes("show")) {
    hiddenLinksBox.classList.remove("show")
  } else {
    hiddenLinksBox.classList.add("show");    
  }
}


