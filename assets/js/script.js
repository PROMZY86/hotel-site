const sideNav = document.getElementById('sideNav');
const hamburger = document.getElementById('hamburger');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');


hamburger.addEventListener('click', () => {
  sideNav.classList.add('active');
  overlay.classList.add('active');
  document.body.classList.add('no-scroll');  
});

closeBtn.addEventListener('click', () => {
  sideNav.classList.remove('active');
  overlay.classList.remove('active');
 document.body.classList.remove('no-scroll'); 
});



//navigation to other pages and loading of contents  
document.addEventListener("DOMContentLoaded", () => {
  let navLinks = document.querySelectorAll(".nav-links");
  navLinks[0].classList.add('active');

  navLinks.forEach(link => {
    link.addEventListener('click',  () =>  {
      navLinks.forEach(otherlink => otherlink.classList.remove('active'));
      link.classList.add('active');
    });
  });
});


// Side-nav
document.addEventListener("DOMContentLoaded", () => {
  let navLinks1 = document.querySelectorAll(".nav-links1");
  navLinks1[0].classList.add('active');

  navLinks1.forEach(link => {
    link.addEventListener('click',  () =>  {
      navLinks1.forEach(otherlink => otherlink.classList.remove('active'));
      link.classList.add('active');
    });
  });
});


//
const dropdownToggle = document.getElementById('dropdownToggleIcon');
const roomsDropdown = document.getElementById('roomsDropdown');
const dropdownIcon = document.getElementById('dropdownIcon');

dropdownToggle.addEventListener('click', (e) => {
  e.preventDefault();

  const isOpen = roomsDropdown.classList.contains('show');

  if (isOpen) {
    roomsDropdown.classList.remove('show');
    dropdownToggle.classList.remove('active');
    dropdownIcon.classList.remove('fa-angle-up');
} else {
    roomsDropdown.classList.add('show');
    dropdownToggle.classList.add('active');
    dropdownIcon.classList.add('fa-angle-up');
  }
});
   

//
const dropdown = document.getElementById('roomsDropdown1');
  const menu = document.getElementById('roomsMenu');
  let timeout;

  dropdown.addEventListener('mouseenter', () => {
    clearTimeout(timeout);
    menu.style.opacity = '1';
    menu.style.visibility = 'visible';
    menu.style.transform = 'translateY(0)';
  });

  dropdown.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
      menu.style.opacity = '0';
      menu.style.visibility = 'hidden';
      menu.style.transform = 'translateY(10px)';
    }, 1000); 
  });




// home-Image slider carrousel images
let carouselImages = document.querySelector('.element-home-section-container');
let images = document.querySelectorAll('.element-home-section  img');
let slideIndex = 0;

function nextSlide() {
  slideIndex = (slideIndex + 1) % images.length;
  updateCarousel()
}

function gotoSlide(i) {
  slideIndex = i;
   updateCarousel();
}

function updateCarousel(){
  carouselImages.style.transform = `translateX(-${slideIndex * 100}%)`;
}

setInterval(nextSlide,  3000)


  // form
       document.addEventListener("DOMContentLoaded", function() {
         let checkInInput = document.getElementById("check-in");
         let checkOutInput = document.getElementById("check-out");
        // let form = document.getElementById("element-form-section")
  
        // this function is trying to handle a form for checking and checking out the logic here is that the date updates by 
        // itself and users cant go back to previous month, year and day to select when they want to check-in or check-out
        function setDateInputs(){
         
          let formatDate = (date) => {
          let day = String(date.getDate()).padStart(2, '0');
          let month = String(date.getMonth() + 1).padStart(2, '0'); 
          let year = date.getFullYear();
          return `${year}-${month}-${day}`;
         };
  
         checkInInput.setAttribute("min", formatDate(new Date ()));
         checkOutInput.setAttribute("min", formatDate(new Date ()));
        };
  
      // calling function to set the intial dates
      setDateInputs();
  
      // form submission Handling
     /* form.addEventListener('submit', function(event) {
        event.preventDefault();
  
        let   checkInDate = checkInInput.value;
        let   checkOutdate = checkOutInput.value;
        let   numberOfRooms = document.getElementById("rooms").value;
        let   numberOfGuests = document.getElementById("guests").value;
  
      /*  if(!checkInDate ||   !checkOutdate ||  !numberOfRooms ||   !numberOfGuests){
          // alert("please fill out this fields")
          return
        }
       });*/
       
      }); 



  // 
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const isActive = button.classList.contains('active');
    const answer = button.nextElementSibling;

    // Close all open answers
    document.querySelectorAll('.faq-answer').forEach(ans => {
      ans.style.maxHeight = null;
    });
    document.querySelectorAll('.faq-question').forEach(btn => {
      btn.classList.remove('active');
    });


    if (!isActive) {
      button.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

















  








    

