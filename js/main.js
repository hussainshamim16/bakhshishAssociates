(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top');
        } else {
            $('.nav-bar').removeClass('sticky-top');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });

})(jQuery);

let firstNm = 420;
let secondNm = 0;
let thirdNm = 220;


firstNm++
secondNm++
thirdNm++
const counter = setInterval(() => {
    if (firstNm < 482) {
        let firstReder = document.getElementById('firstReder').innerHTML = '+' + firstNm++
        let secondReder = document.getElementById('secondReder').innerHTML = '+' + secondNm++
        let thirdReder = document.getElementById('thirdReder').innerHTML = '+' + thirdNm++
    }
    else {
        clearInterval(counter)
    }

    // console.log(firstNm)
}, 100)


// const subscribers = []
// const email = document.getElementById('email')





// const Properties = document.getElementById("Properties")
// console.log(Properties)


//     `                                    <div class="position-relative overflow-hidden">
//                                         <a href=""><img class="img-fluid" src="img/property-1.jpg" alt=""></a>
//                                         <div
//                                             class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
//                                             For Sell</div>
//                                         <div
//                                             class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
//                                             Appartment</div>
//                                     </div>
//                                     `


                                    // <div class="property-item rounded overflow-hidden">



                                    

