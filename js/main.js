
  $('#typewriter').typewriter({
    prefix : "",
    text : ["INTEGRITY,FAITH and EXPERIENCE", "I Build Amazing Websites", "Let's Start a Success Journey"],
    typeDelay : 50,
    waitingTime : 2000,
    blinkSpeed : 200
  });


var myVar;

function loadFunction() {
  myVar = setTimeout(showPage, 500);
}

function showPage() {
  document.getElementById("loader-container").style.display = "none";
  // document.getElementById("myDiv").style.display = "block";
}

  /* ========== toggler-btn ========== */
  $(".menu-btn").click(function(){
    $("nav").addClass("open-nav");
  });
  $(".close").click(function(){
    $("nav").removeClass("open-nav");
  });


/*========== scroll to top ==========*/
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


/* ========== skill bars ========== */
  $(".bar").each(function(){
    $(this).find(".bar-inner").animate({
      width: $(this).attr("data-width")
    },2000)
  });

/* ========== tab section ========== */
  function openSection(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

/* ========== swiper slider ========== */
  var swiper = new Swiper(".mySwiper", {
    // Default parameters
    direction: "horizontal",
    nextButton: '.swiper-next',
    prevButton: '.swiper-prev',
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 3000,
    },
    speed: 1000,
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 640px
      992: {
        slidesPerView: 2,
      },
      // when window width is >= 991px
      1400: {
        slidesPerView: 3,
      }
    }
  })

  /* swiper slider deactivate on mouse hover and then activate again */
  $(".swiper-container").hover(function() {
    (this).swiper.autoplay.stop();
  }, function() {
      (this).swiper.autoplay.start();
  });



/* ===== counter up ===== */
  $('.counter').counterUp({
    delay: 10,
    time: 2000,
});

/* ===== modal ===== */
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}
function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}
trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);



