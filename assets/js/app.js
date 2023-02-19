let hero_slide = document.querySelector('#hero-slide')

let hero_slide_items = hero_slide.querySelectorAll('.slide')

let hero_slide_play = true

// resume slide when mouse leave out slider
hero_slide.addEventListener('mouseleave', () => hero_slide_play = true)

setTimeout(() => hero_slide_items[0].classList.add('active'), 200);




// dropdown
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }