const hamburgerButton = $(".hamburgerButton");

hamburgerButton.click(() => {
  hamburgerButton.toggleClass("active");
  $(".js-navigation").toggleClass("panelActive");
  $(".circleBackground").toggleClass("circleActive");

  if ($(".js-navigation").hasClass("panelActive")) {
    $(".js-navigation .snsIconContainer").css({
      display: "block",
    });
  }

  if (!$(".js-navigation").hasClass("panelActive")) {
    $(".js-navigation .snsIconContainer").css({
      display: "none",
    });
  }

  const currentSpImage = $(".js-spLogo").attr("srcset");
  const srcSet =
    currentSpImage === "./img/logo-sp.png"
      ? "./img/logo-sp-active.png"
      : "./img/logo-sp.png";
  $(".js-spLogo").attr("srcset", srcSet);
});

const swiper = new Swiper(".swiper", {
  direction: "vertical",
  reverse: true,
  navigation: {
    nextEl: false,
    prevEl: false,
  },
  speed: 400,
  spaceBetween: 100,
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
  },
});

const identifyDevice = () => {
  const ua = navigator.userAgent;
  if (
    ua.indexOf("iPhone") > 0 ||
    ua.indexOf("iPod") > 0 ||
    (ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0)
  ) {
    return "sp";
  } else {
    return "pc";
  }
};
