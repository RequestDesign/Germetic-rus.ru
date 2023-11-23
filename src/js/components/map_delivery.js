const mapDelivery = () => {

      function init() {
        let map = new ymaps.Map("map", {
          center:[55.84956882425105,37.677268005525036],
          zoom: 17,
        });

        let placemark = new ymaps.Placemark( [55.84956882425105,37.677268005525036], {}, {
            iconLayout: 'default#image',
            iconImageHref: './assets/images/icons/placemark.svg',
            iconImageSize: [90, 90],
            iconImageOffset: [-45, -65],
        })

    map.controls.remove("geolocationControl"); // удаляем геолокацию
      map.controls.remove("searchControl"); // удаляем поиск
      map.controls.remove("trafficControl"); // удаляем контроль трафика
      map.controls.remove("typeSelector"); // удаляем тип
      map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
      map.controls.remove("zoomControl"); // удаляем контрол зуммирования
      map.controls.remove("rulerControl"); // удаляем контрол правил
    //   map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark)
      }


 

      ymaps.ready(init);


}

export default mapDelivery