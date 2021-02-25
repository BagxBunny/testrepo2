$(function(){
    $(".navbar-set li > a").each(function(){
        var href = $(this).attr('href');
        var heading = $(this).text();
        $('.sidenav').append('<a href="'+href+'">'+heading+'</a>');
    });
});

function openNav() {
        document.getElementById("mySidenav").style.left = "0px";
        }

        function closeNav() {
            document.getElementById("mySidenav").style.left = "-250px";
}


$('.carousel').carousel({
                    interval: 5000
                 })





  $(function(){
    $('#menu').slicknav();
  });


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
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

 $(document).ready(function(){
     $("#faq .panel").click(function(){
         $(".collapse in").collapse('show');
         $(".collapse").collapse('hide');
     });
  });

$(function(){
    if($('.fb').length>0){
        $('.fb').fancybox()
    }
    // $('title').html('');
    $("nav.navbar .navbar-nav li > a").each(function(){
        var href = $(this).attr('href');
        var heading = $(this).text();
        var activeclass;
        if($(this).parent().hasClass('active')){
            activeclass = "active";
        }else{
            activeclass = "";
        }
        $('.sidenav').append('<a href="'+href+'" class="'+activeclass+'">'+heading+'</a>');

    });
    $('.center').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows:false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


     $('.services-one').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows:false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

     $('.center-one').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows:false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

     $('.center-two').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

     $('.center-three').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});

// // Script for sticky header OR add class on 1st scroll
// $(window).scroll(function() {
//     if ($(this).scrollTop() > 1){  
//         $('header').addClass("navbar-fixed-top");
//     }
//     else{
//         $('header').removeClass("navbar-fixed-top");
//     }
// });


// // Active Header Status & Smooth Scroll on click
// $(document).ready(function () {
//   $(document).on("scroll", onScroll);

//   $('a[href^="#"]').on('click', function (e) {
//     e.preventDefault();
//     $(document).off("scroll");

//     $('a').each(function () {
//       $(this).removeClass('active');
//     })
//     $(this).addClass('active');

//     var target = this.hash;
//     $target = $(target);
//     $('html, body').stop().animate({
//       'scrollTop': $target.offset().top+2
//     }, 500, 'swing', function () {
//       window.location.hash = target;
//       $(document).on("scroll", onScroll);
//     });
//   });
//   });

//   function onScroll(event){
//   var scrollPosition = $(document).scrollTop();
//   $('ul.section-nav li a').each(function () {
//     var currentLink = $(this);
//     var refElement = $(currentLink.attr("href"));
//     if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
//       $('ul.section-nav li a').removeClass("active");
//       currentLink.addClass("active");
//     }
//     else{
//       currentLink.removeClass("active");
//     }
//   });
// }


// // Page RoleBack to Top
// // $(document).ready(function(){
// //   $("a").on('click', function(event) {
// //     if (this.hash !== "") {
// //       event.preventDefault();
// //       var hash = this.hash;
// //       $('html, body').animate({
// //         scrollTop: $(hash).offset().top
// //       }, 800, function(){
// //         window.location.hash = hash;
// //       });
// //     }
// //   });
// // });
// //Use This
// $(document).ready(function(){
//     $('.roleback').click(function(){
//         $("html, body").animate({ scrollTop: 0 }, 800);
//         return false;
//     });
// });


// // Text Animation Script
// $(function () {
//   $('.flash').textillate({ in: { effect: 'flash' } });
//   $('.bounce').textillate({ in: { effect: 'bounce' } });
//   $('.shake').textillate({ in: { effect: 'shake' } });
//   $('.tada').textillate({ in: { effect: 'tada' } });
//   $('.swing').textillate({ in: { effect: 'swing' } });
//   $('.wobble').textillate({ in: { effect: 'wobble' } });
//   $('.pulse').textillate({ in: { effect: 'pulse' } });
//   $('.flip').textillate({ in: { effect: 'flip' } });
//   $('.flipInX').textillate({ in: { effect: 'flipInX' } });
//   $('.flipInY').textillate({ in: { effect: 'flipInY' } });
//   $('.fadeIn').textillate({ in: { effect: 'fadeIn' } });
//   $('.fadeInUp').textillate({ in: { effect: 'fadeInUp' } });
//   $('.fadeInDown').textillate({ in: { effect: 'fadeInDown' } });
//   $('.fadeInLeft').textillate({ in: { effect: 'fadeInLeft' } });
//   $('.fadeInRight').textillate({ in: { effect: 'fadeInRight' } });
//   $('.fadeInUpBig').textillate({ in: { effect: 'fadeInUpBig' } });
//   $('.fadeInDownBig').textillate({ in: { effect: 'fadeInDownBig' } });
//   $('.fadeInLeftBig').textillate({ in: { effect: 'fadeInLeftBig' } });
//   $('.fadeInRightBig').textillate({ in: { effect: 'fadeInRightBig' } });
//   $('.bounceIn').textillate({ in: { effect: 'bounceIn' } });
//   $('.bounceInDown').textillate({ in: { effect: 'bounceInDown' } });
//   $('.bounceInUp').textillate({ in: { effect: 'bounceInUp' } });
//   $('.bounceInLeft').textillate({ in: { effect: 'bounceInLeft' } });
//   $('.bounceInRight').textillate({ in: { effect: 'bounceInRight' } });
//   $('.rotateIn').textillate({ in: { effect: 'rotateIn' } });
//   $('.rotateInDownLeft').textillate({ in: { effect: 'rotateInDownLeft' } });
//   $('.rotateInDownRight').textillate({ in: { effect: 'rotateInDownRight' } });
//   $('.rotateInUpLeft').textillate({ in: { effect: 'rotateInUpLeft' } });
//   $('.rotateInUpRight').textillate({ in: { effect: 'rotateInUpRight' } });
//   $('.rollIn').textillate({ in: { effect: 'rollIn' } });
// });



    
  $('.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(10).fadeIn(10);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(10).fadeOut(10);
});

