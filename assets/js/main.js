$(function () {
  AOS.init({
    duration: 800,
    once: true,
    offset: 120
  });

  new Swiper('.amenohashi', {
    loop: true,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    }
  });

  new Swiper('.shirakawa-slider', {
    loop: true,
    spaceBetween: 20,
    pagination: {
      el: '.shirakawa-slider .swiper-pagination',
      clickable: true
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    }
  });

  const $backToTop = $('.back-to-top');
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 400) {
      $backToTop.fadeIn();
    } else {
      $backToTop.fadeOut();
    }
  });

  $backToTop.on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 600);
  });

  $('.navbar .nav-link, .btn-cta').on('click', function (event) {
    const target = $(this).attr('href');
    if (target && target.startsWith('#')) {
      event.preventDefault();
      const offset = $(target).offset().top - 72;
      $('html, body').animate({ scrollTop: offset }, 600);
    }
  });
});
