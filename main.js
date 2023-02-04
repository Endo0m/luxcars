$(function () {
  $(".top__slider").slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    fade: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: false,
        },
      },
    ],
  });

  $(".reviews__slider").slick({
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 846,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 585,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
  });
});
