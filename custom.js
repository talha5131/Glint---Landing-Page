$(function() {
	$("#close").click(function(){
		$("#panel").hide("slow");
	});
	$("#open").click(function(){
		$("#panel").show("slow");
	});
});

												//Menu Button
// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction1()};

// function scrollFunction1() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("open-btn").style.background = "#000000";
//   } else {
//     document.getElementById("open-btn").style.background = "transparent";
//   }
// }
// When the user clicks on the button, scroll to the top of the document



												// Scroll To Top Button//

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

	if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("open").style.background = "#000000";
  } else {
    document.getElementById("open").style.background = "transparent";
  }
  	if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// $.fn.riseUp = function()   { $(this).show("slide", { direction: "down" }, 1000); }
// $.fn.riseDown = function() { $(this).hide("slide", { direction: "down" }, 1000); }



// $('#divtoslide').fadeIn(2000).slideDown();
 // $(document).ready(function(){
  // $("#divtoslide").delay(1000).fadeIn('slow').slideDown(2000);

 //  $("#divtoslide").delay(2000).fadeIn('slow');
 // });

// $(document).ready(function(){
//    $('#divtoslide').delay(5000).slideDown('slow');
//  });





// $(window).scroll(function(){
//         $('#divtoslide').slideUp('slow');
// });


 // document.addEventListener("DOMContentLoaded", function(e) {
 //    document.body.classList.remove('fade');
 //  });


//  var animateHTML = function() {
//   var elems;
//   var windowHeight;
//   function init() {
//     elems = document.querySelectorAll('.hidden');
//     windowHeight = window.innerHeight;
//     addEventHandlers();
//     checkPosition();
//   }
//   function addEventHandlers() {
//     window.addEventListener('scroll', checkPosition);
//     window.addEventListener('resize', init);
//   }
//   function checkPosition() {
//     for (var i = 0; i < elems.length; i++) {
//       var positionFromTop = elems[i].getBoundingClientRect().top;
//       if (positionFromTop - windowHeight <= 0) {
//         elems[i].className = elems[i].className.replace(
//           'hidden',
//           'fade-in-element'
//         );
//       }
//     }
//   }
//   return {
//     init: init
//   };
// };
// animateHTML().init();




// jQuery(window).scroll(function () {
//     if (jQuery(this).scrollTop() > 100) {
//         if (jQuery('.totop').hasClass('visible') == false) {
//             jQuery('.totop').stop().animate({
//                 right: '0px'
//             }, function () {
//                 jQuery('.totop').addClass('visible')
//             });
//         }
//     } else {
//         if (jQuery('.totop').hasClass('visible') == true) {
//             jQuery('.totop').stop().animate({
//                 right: '-300px'
//             }, function () {
//                 jQuery('.totop').removeClass('visible')
//             });
//         }
//     }
// });


// $("#show-animate-up").on("click", function () {
//     var div = $("div:not(:visible)");
    
//     var height = divtoslide.css({
//         display: "block"
//     }).height();
    
//     divtoslide.css({
//         overflow: "hidden",
//         marginTop: height,
//         height: 0
//     }).animate({
//         marginTop: 0,
//         height: height
//     }, 500, function () {
//         $(this).css({
//             display: "",
//             overflow: "",
//             height: "",
//             marginTop: ""
//         });
//     });
// });




  AOS.init({
    duration: 1200

  });
