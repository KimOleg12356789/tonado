$(document).ready(function(){

$("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
});

$("#menu2").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
});


         $(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.fag_accordion_content').not($next).slideUp().parent().removeClass('open');
    };
  } 

  var accordion = new Accordion($('#accordion'), false);
}); 




});


// $(document).ready(function() {
  
//   var pages = $(".page").length,
//       scrolling = false,
//       curPage = 1;
  
//   function pagination(page, movingUp) {
//     scrolling = true;
//     var diff = curPage - page,
//         oldPage = curPage;
//     curPage = page;
//     $(".page").removeClass("active small previous");
//     $(".page-" + page).addClass("active");
//     $(".nav-btn").removeClass("active");
//     $(".nav-page" + page).addClass("active");
//     if (page > 1) {
//       $(".page-" + (page - 1)).addClass("previous");
//       if (movingUp) {
//         $(".page-" + (page - 1)).hide();
//         var hackPage = page;
//         setTimeout(function() {
//           $(".page-" + (hackPage - 1)).show();
//         }, 600);
//       }
//       while (--page) {
//         $(".page-" + page).addClass("small");
//       }
//     }
//     console.log(diff)
//     if (diff > 1) {
//       for (var j = page + 1; j < oldPage; j++) {
//         $(".page-" + j + " .half").css("transition", "transform .7s ease-out");
//       }
//     }
//     setTimeout(function() {
//       scrolling = false;
//       $(".page .half").attr("style", "");
//       $(".page")
//     }, 700);
//   }
  
//   function navigateUp() {
//     if (curPage > 1) {
//       curPage--;
//       pagination(curPage, true);
//     }
//   }

//   function navigateDown() {
//     if (curPage < pages) {
//       curPage++;
//       pagination(curPage);
//     }
//   }
  
//   $(document).on("mousewheel DOMMouseScroll", function(e) {
//     if (!scrolling) {
//       if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
//         navigateUp();
//       } else { 
//         navigateDown();
//       }
//     }
//   });
  
//   $(document).on("click", ".scroll-btn", function() {
//     if (scrolling) return;
//     if ($(this).hasClass("up")) {
//       navigateUp();
//     } else {
//       navigateDown();
//     }
//   });
  
//   $(document).on("keydown", function(e) {
//     if (scrolling) return;
//     if (e.which === 38) {
//       navigateUp();
//     } else if (e.which === 40) {
//       navigateDown();
//     }
//   });
  
//   $(document).on("click", ".nav-btn:not(.active)", function() {
//     if (scrolling) return;
//     pagination(+$(this).attr("data-target"));
//   });

// });



const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mt-mobile');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');
    
});






 AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
      
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    
    });