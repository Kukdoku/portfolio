// $(document).ready(function () {
//   $(window).scroll(function () {
//     console.log("sda");
//     if (this.scrollY > 20) {
//       $(".navbar").addClass("sticky");
//     } else {
//       $(".navbar").removeClass("sticky");
//     }
//   });
// });

var typed = new Typed(".typing", {
  strings: [
    "Full Stack Web Developer",
    "Designer",
    "Freelancer",
    "Content Creater",
    "Blogger",
    "YouTuber",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

var typed = new Typed(".typing-2", {
  strings: [
    "Full Stack Web Developer",
    "Designer",
    "Freelancer",

    "Content Creater",
    "Blogger",
    "YouTuber",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    if ($(this).scrollTop > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      300: {
        items: 2,
        nav: false,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 4,
        nav: false,
      },
    },
  });
});
