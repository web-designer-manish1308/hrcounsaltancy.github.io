$(document).ready(function(){
           $(window).scroll(function(){
             var scroll = $(window).scrollTop();
             if (scroll > 100) {
               $(".navbar").addClass("bg-primary");
             } else{
               $(".navbar").removeClass("bg-primary");   
             }
           })
         
         $('.owl-carousel-banner').owlCarousel({
               loop: true,
               margin: 10,
               autoplay: true,
               responsiveClass: true,
               // dotsContainer:false,
               responsive: {
                 0: {
                   items: 1,
                   nav: false,
                   loop: true
                   },
                   600: {
                   items: 1,
                   nav: false,
                   loop: true
                 },
                 1000: {
                   items: 1,
                   nav: false,
                   loop: true
                   }
               }
           })
         
         $('.owl-carousel-testimonial').owlCarousel({
               loop: true,
               margin: 10,
               autoplay: true,
               responsiveClass: true,
               responsive: {
                 0: {
                   items: 1,
                   nav: false,
                   loop: true
                 },
                 600: {
                   items: 1,
                   nav: false,
                   loop: true
                 },
                 1000: {
                   items: 1,
                   nav: false,
                   loop: true
                   }
               }
           })


         // 

         $(".navbar").click(function(){
            $("#navbar").addClass("bg-primary"); 
          });

          // navbar 
           
         })