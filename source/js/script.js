(function () {
  "use strict";

  document.querySelector(".contacts__map-img").classList.add("contacts__map-img--hidden");

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
}());
