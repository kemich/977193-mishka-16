(function () {
  "use strict";
  if (document.querySelector(".map") != undefined) {
    document.querySelector(".map__img").classList.add("map__img--hidden");

    ymaps.ready(init);

    var myMap, myPlacemark;

    function init() {
      myMap = new ymaps.Map("map", {
        center: [59.938631, 30.323055],
        behaviors: ["default", "scrollZoom"],
        zoom: 16
      });
      myMap.controls
        .add("zoomControl", {
          left: 5,
          top: 5
        });
      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'ул. Большая Конюшенная, д. 19/8, офис 101',
        balloonContent: 'ул. Большая Конюшенная, д. 19/8, офис 101'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'http://placehold.it/70x100',
        // Размеры метки.
        iconImageSize: [70, 100],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-35, -100]
      });
      myMap.geoObjects
        .add(myPlacemark);
    }
  }
}());
(function () {
  "use strict";

  var menuToggle, menuDropdown;

  menuToggle = document.querySelector(".js-menu-toggle");
  menuDropdown = document.querySelector(".js-menu-dropdown");
  menuToggle.classList.add("main-nav__menu-toggle--js--true");
  menuDropdown.classList.add("main-nav__main-container--js--true");
  menuDropdown.classList.add("main-nav__main-container--hidden");

  menuToggle.addEventListener("click", function (event) {
    event.preventDefault();
    if (menuToggle.querySelector(".menu-toggle").classList.contains("menu-toggle--open")) {
      menuDropdown.classList.add("main-nav__main-container--hidden");
      menuToggle.querySelector(".menu-toggle").classList.remove("menu-toggle--open");
    } else {
      menuToggle.querySelector(".menu-toggle").classList.add("menu-toggle--open");
      menuDropdown.classList.remove("main-nav__main-container--hidden");
    }
  }, false);
}());

(function () {
  "use strict";

  var modalBg, modalAddToCart, modalAddToCartOpen;
  modalAddToCartOpen = document.querySelector(".js-modal-add-to-cart-open");
  modalBg = document.querySelector(".js-modal-bg");
  modalAddToCart = document.querySelector(".js-modal-add-to-cart");

  modalAddToCartOpen.addEventListener("click", function (event) {
    event.preventDefault();
    modalBg.classList.add("site-modals__bg--active");
    modalAddToCart.classList.add("site-modals__modal--active");
  }, false);
  modalBg.addEventListener("click", function (event) {
    event.preventDefault();
    modalAddToCart.classList.remove("site-modals__modal--active");
    modalBg.classList.remove("site-modals__bg--active");
  }, false);
}());
