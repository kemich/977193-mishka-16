(function () {
  "use strict";

  document.querySelector(".contacts__map-img").style.cssText = "display: none;";

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
      })
    myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
      balloonContent: "ул. Большая Конюшенная, д. 19/8, офис 101"
    }, {
      iconImageHref: "img/map-pin.png",
      iconImageSize: [70, 100],
      iconImageOffset: [-35, -100]
    });
    myMap.geoObjects
      .add(myPlacemark);
  }
}());
