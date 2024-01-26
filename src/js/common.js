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
