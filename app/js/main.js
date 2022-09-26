/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/block1__readMore.js":
/*!********************************!*\
  !*** ./js/block1__readMore.js ***!
  \********************************/
/***/ (() => {

var button = document.querySelector('.block1__readMore');

button.onclick = function () {
  var area = document.querySelector('.block1__text');
  area.classList.toggle('block1__text_closed');
  button.classList.toggle('down');

  if (area.classList.contains('block1__text_closed')) {
    button.textContent = 'Читать далее';
  } else {
    button.textContent = 'Скрыть';
  }
};

/***/ }),

/***/ "./js/brandsSlider.js":
/*!****************************!*\
  !*** ./js/brandsSlider.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../node_modules/swiper/swiper.esm.js");

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination]);
var brandsSlider = document.querySelector('.swiper');
var mySwiper;

function mobileSlider() {
  if (window.innerWidth <= 767 && brandsSlider.dataset.mobile == 'false') {
    mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](brandsSlider, {
      pagination: {
        el: '.swiper-pagination',
        clickable: false
      },
      slidesPerView: 'auto',
      spaceBetween: 16
    });
    brandsSlider.dataset.mobile = 'true';
  }

  if (window.innerWidth > 767) {
    brandsSlider.dataset.mobile = 'false';

    if (brandsSlider.classList.contains('swiper-initialized')) {
      mySwiper.destroy();
    }
  }
}

mobileSlider();
window.addEventListener('resize', function () {
  mobileSlider();
});

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/focus-visible/dist/focus-visible */ "../node_modules/focus-visible/dist/focus-visible.js");
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./js/menu.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _readMore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./readMore */ "./js/readMore.js");
/* harmony import */ var _readMore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_readMore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _block1_readMore_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block1__readMore.js */ "./js/block1__readMore.js");
/* harmony import */ var _block1_readMore_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_block1_readMore_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _brandsSlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./brandsSlider */ "./js/brandsSlider.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper */ "../node_modules/swiper/swiper.esm.js");








swiper__WEBPACK_IMPORTED_MODULE_7__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_7__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_7__.Pagination]);

/***/ }),

/***/ "./js/menu.js":
/*!********************!*\
  !*** ./js/menu.js ***!
  \********************/
/***/ (() => {

var burgerButton = document.querySelector('.header__burger');
var menu = document.querySelector('.menu');
var burgerButtonClose = document.querySelector('.menu__burger');
var overlay = document.querySelector('.menu__overlay');
var body = document.querySelector('body');
burgerButton.addEventListener('click', function () {
  menu.classList.add('menu__opened');
  body.style.overflow = 'hidden';
});

burgerButtonClose.onclick = function () {
  menu.classList.remove('menu__opened');
  body.style.overflow = 'visible';
};

overlay.onclick = function () {
  menu.classList.remove('menu__opened');
  body.style.overflow = 'visible';
};

/***/ }),

/***/ "./js/readMore.js":
/*!************************!*\
  !*** ./js/readMore.js ***!
  \************************/
/***/ (() => {

var button = document.querySelector('.brands__readMore');

button.onclick = function () {
  var area = document.querySelector('.brands__list');
  area.classList.toggle('closed');
  button.classList.toggle('down');

  if (area.classList.contains('closed')) {
    button.textContent = 'Показать все';
  } else {
    button.textContent = 'Скрыть';
  }
};

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/logo.svg */ "./img/icons/logo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/search.svg */ "./img/icons/search.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/phone.svg */ "./img/icons/phone.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/message.svg */ "./img/icons/message.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/profile.svg */ "./img/icons/profile.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/repair.svg */ "./img/icons/repair.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/checkstatus.svg */ "./img/icons/checkstatus.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/_MG_3223.png */ "./img/_MG_3223.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/lenovo_logo.png */ "./img/lenovo_logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/icons/button.svg */ "./img/icons/button.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Samsung_logo.png */ "./img/Samsung_logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Apple_logo.png */ "./img/Apple_logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./img/ViewSonic_logo.png */ "./img/ViewSonic_logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Bosch__logo.png */ "./img/Bosch__logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./img/HP_logo.png */ "./img/HP_logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Acer_logo.png */ "./img/Acer_logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Sony_logo.png */ "./img/Sony_logo.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <title>Document</title>\r\n  </head>\r\n\r\n  <body>\r\n    <div class=\"wrapper\">\r\n      <header class=\"header\">\r\n        <div class=\"header__container\">\r\n          <div class=\"menu\">\r\n            <div class=\"menu__overlay\"></div>\r\n            <div class=\"menu__container\">\r\n              <div class=\"menu__header\">\r\n                <div class=\"menu__burger\"><span></span></div>\r\n                <a href=\"#\" class=\"menu__logo logo\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"Лого\"></a></li>\r\n                <a href=\"#\" class=\"menu__search search\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"Лого\"></a></li>\r\n              </div>\r\n              <div class=\"menu__list\">\r\n                <a class=\"menu__item\" href=\"#\">Ремонт техники</a></button>\r\n                <a class=\"menu__item\" href=\"#\">Услуги и сервисы</a></button>\r\n                <a class=\"menu__item\" href=\"#\">Корпоративным клиентам</a></button>\r\n                <a class=\"menu__item\" href=\"#\">Продавцам техники</a></button>\r\n                <a class=\"menu__item\" href=\"#\">Партнерам</a></button>\r\n                <a class=\"menu__item\" href=\"#\">Производителям</a></button>\r\n                <a class=\"menu__item\" href=\"#\">Наши сервисные центры</a></button>\r\n                <a class=\"menu__item\" href=\"#\">Контакты</a></button>\r\n              </div>\r\n              <div class=\"menu__contact\">\r\n                <div class=\"menu__widget\">\r\n                  <button href=\"#\" class=\"menu__call call\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Звонок\"></button>\r\n                  <button href=\"#\" class=\"menu__message message\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Чат\"></button>\r\n                  <button href=\"#\" class=\"menu__profile profile\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Профиль\"></button>\r\n                </div>\r\n                <a class=\"menu__mail\" href=\"mailto:mail@cps.com\">mail@cps.com</a>\r\n                <a class=\"menu__number\" href=\"tel:88008908900\">8 800 890 8900</a>\r\n              </div>\r\n              <div class=\"menu__language\">\r\n                <button class=\"language\">ru</button>\r\n                <button class=\"language\">eng</button>\r\n                <button class=\"language\">ch</button>\r\n              </div>\r\n              \r\n            </div>\r\n            \r\n          </div>\r\n          <div class=\"header__body\">\r\n            <div class=\"header__burger\"><span></span></div>\r\n            <nav class=\"header__menu\">      \r\n              </nav>\r\n            <a href=\"#\" class=\"header__logo logo\"\r\n              ><img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"Лого\"\r\n            /></a>\r\n            <button href=\"#\" class=\"header__call call\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Звонок\" />\r\n            </button>\r\n            <button href=\"#\" class=\"header__message message\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Чат\" />\r\n            </button>\r\n            <button href=\"#\" class=\"header__profile profile\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Профиль\" />\r\n            </button>\r\n            <button href=\"#\" class=\"header__repair repair\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Заявка\" />\r\n            </button>\r\n            <button href=\"#\" class=\"header__checkstatus checkstatus\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"Статус\" />\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </header>\r\n\r\n      <main class=\"main\">\r\n        <div class=\"main__container\">\r\n          <div class=\"title\">\r\n            <h1 class=\"title__text\">Услуги и сервисы</h1>\r\n            <button href=\"#\" class=\"title__repair button\">\r\n              <span class=\"repair__text\">Оставить заявку</span>\r\n            </button>\r\n            <button href=\"#\" class=\"title__checkstatus button\">\r\n              <span class=\"checkstatus__text\">Оставить заявку</span>\r\n            </button>\r\n          </div>\r\n          <ul class=\"sliderMenu\">\r\n            <li>\r\n              <button class=\"sliderMenu__button\">\r\n                <p>Ремонтируемые бренды</p>\r\n              </button>\r\n            </li>\r\n            <li>\r\n              <button class=\"sliderMenu__button\">\r\n                <p>Ремонтируемые устройства</p>\r\n              </button>\r\n            </li>\r\n            <li>\r\n              <button class=\"sliderMenu__button\">\r\n                <p>Дополнительные услуги</p>\r\n              </button>\r\n            </li>\r\n            <li>\r\n              <button class=\"sliderMenu__button\">\r\n                <p>Цены на услуги</p>\r\n              </button>\r\n            </li>\r\n            <li>\r\n              <button class=\"sliderMenu__button\">\r\n                <p>Адреса сервисных центров</p>\r\n              </button>\r\n            </li>\r\n            <li>\r\n              <button class=\"sliderMenu__button\">\r\n                <p>Специальные цены</p>\r\n              </button>\r\n            </li>\r\n            <li>\r\n              <button class=\"sliderMenu__button\">\r\n                <p>Отзывы</p>\r\n              </button>\r\n            </li>\r\n          </ul>\r\n          <article class=\"block1\">\r\n            <div class=\"block1__content \">\r\n              <div class=\"block1__text block1__text_closed\">\r\n                <p>\r\n                  Мы являемся авторизованным сервисным центром по ремонту\r\n                  техники Dell. Только у нас вы можете отремонтировать свой\r\n                  ноутбук Dell с официальной гарантией производителя.\r\n                </p>\r\n                <p>\r\n                  Мы успешно работаем с 1992 года и заслужили репутацию\r\n                  надежного партнера, что подтверждает большое количество\r\n                  постоянных клиентов. Мы гордимся тем, что к нам обращаются по\r\n                  рекомендациям и, в свою очередь, советуют нас родным и\r\n                  близким.\r\n                </p>\r\n              </div>\r\n              <button class=\"block1__readMore\">Читать далее</button>\r\n            </div>\r\n            <img\r\n              class=\"block1__image\"\r\n              src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\"\r\n              alt=\"Фото центра\"\r\n            />\r\n          </article>\r\n        </div>\r\n      </main>\r\n\r\n\r\n      \r\n      <div class=\"brands\">\r\n        <div class=\"brands__light-shadow\"></div>\r\n        <div class=\"brands__title\">\r\n          <h1>Ремонт техники различных брендов</h1>\r\n        </div>\r\n        <article class=\"brands-swiper swiper\" data-mobile=\"false\">\r\n          <div class=\"brands__list swiper-wrapper closed\">\r\n            <div class=\"brands__item swiper-slide\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"Леново\" />\r\n              <button class=\"brands__button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Далее\" />\r\n              </button>\r\n            </div>\r\n            <div class=\"brands__item swiper-slide\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"Леново\" />\r\n              <button class=\"brands__button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Далее\" />\r\n              </button>\r\n            </div>\r\n            <div class=\"brands__item swiper-slide\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"Леново\" />\r\n              <button class=\"brands__button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Далее\" />\r\n              </button>\r\n            </div>\r\n            <div class=\"brands__item swiper-slide\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"Леново\" />\r\n              <button class=\"brands__button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Далее\" />\r\n              </button>\r\n            </div>\r\n            <div class=\"brands__item swiper-slide\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"Леново\" />\r\n              <button class=\"brands__button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Далее\" />\r\n              </button>\r\n            </div>\r\n            <div class=\"brands__item swiper-slide\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"Леново\" />\r\n              <button class=\"brands__button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Далее\" />\r\n              </button>\r\n            </div>\r\n            <div class=\"brands__item swiper-slide\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Леново\" />\r\n              <button class=\"brands__button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Далее\" />\r\n              </button>\r\n            </div>\r\n            <div class=\"brands__item swiper-slide\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"Леново\" />\r\n              <button class=\"brands__button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Далее\" />\r\n              </button>\r\n            </div>\r\n            <div class=\"brands__item swiper-slide\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"Леново\" />\r\n              <button class=\"brands__button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Далее\" />\r\n              </button>\r\n            </div>\r\n            <div class=\"brands__item swiper-slide\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"Леново\" />\r\n              <button class=\"brands__button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Далее\" />\r\n              </button>\r\n            </div>\r\n            <div class=\"brands__item swiper-slide\">\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"Леново\" />\r\n              <button class=\"brands__button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Далее\" />\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </article>\r\n        <div class=\"swiper-pagination\"></div>\r\n        <button class=\"brands__readMore\">Показать все</button>\r\n      </div>\r\n\r\n\r\n\r\n\r\n      <div class=\"tech-types\">\r\n        <div class=\"tech-types-shadow\"></div>\r\n        <div class=\"tech-types__title\">\r\n          <h1>Ремонт техники различных брендов</h1>\r\n        </div>\r\n        <div class=\"tech-types-swiper swiper\" data-mobile=\"false\">\r\n          <div class=\"tech-types__list swiper-wrapper closed\">\r\n            <div class=\"tech-types__item swiper-slide\">\r\n              <span>Ремонт ноутбуков</span>\r\n              <button class=\"tech-types__button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Далее\" />\r\n              </button>\r\n            </div>\r\n            <div class=\"tech-types__item swiper-slide\">\r\n              <span>Ремонт планшетов</span>\r\n              <button class=\"tech-types__button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Далее\" />\r\n              </button>\r\n            </div>\r\n            <div class=\"tech-types__item swiper-slide\">\r\n              <span>Ремонт ПК</span>\r\n              <button class=\"tech-types__button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Далее\" />\r\n              </button>\r\n            </div>\r\n            <div class=\"tech-types__item swiper-slide\">\r\n              <span>Ремонт мониторов</span>\r\n              <button class=\"tech-types__button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Далее\" />\r\n              </button>\r\n            </div>\r\n            <div class=\"tech-types__item swiper-slide\">\r\n              <span>Ремонт ноутбуков</span>\r\n              <button class=\"tech-types__button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Далее\" />\r\n              </button>\r\n            </div>\r\n            <div class=\"tech-types__item swiper-slide\">\r\n              <span>Ремонт планшетов</span>\r\n              <button class=\"tech-types__button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Далее\" />\r\n              </button>\r\n            </div>\r\n            <div class=\"tech-types__item swiper-slide\">\r\n              <span>Ремонт ПК</span>\r\n              <button class=\"tech-types__button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Далее\" />\r\n              </button>\r\n            </div>\r\n            <div class=\"tech-types__item swiper-slide\">\r\n              <span>Ремонт мониторов</span>\r\n              <button class=\"tech-types__button\">\r\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Далее\" />\r\n              </button>\r\n            </div>\r\n        <div class=\"swiper-pagination\"></div>\r\n        <button class=\"brands__readMore\">Показать все</button>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./img/Acer_logo.png":
/*!***************************!*\
  !*** ./img/Acer_logo.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Acer_logo.png";

/***/ }),

/***/ "./img/Apple_logo.png":
/*!****************************!*\
  !*** ./img/Apple_logo.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Apple_logo.png";

/***/ }),

/***/ "./img/Bosch__logo.png":
/*!*****************************!*\
  !*** ./img/Bosch__logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Bosch__logo.png";

/***/ }),

/***/ "./img/HP_logo.png":
/*!*************************!*\
  !*** ./img/HP_logo.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/HP_logo.png";

/***/ }),

/***/ "./img/Samsung_logo.png":
/*!******************************!*\
  !*** ./img/Samsung_logo.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Samsung_logo.png";

/***/ }),

/***/ "./img/Sony_logo.png":
/*!***************************!*\
  !*** ./img/Sony_logo.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Sony_logo.png";

/***/ }),

/***/ "./img/ViewSonic_logo.png":
/*!********************************!*\
  !*** ./img/ViewSonic_logo.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/ViewSonic_logo.png";

/***/ }),

/***/ "./img/_MG_3223.png":
/*!**************************!*\
  !*** ./img/_MG_3223.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/_MG_3223.png";

/***/ }),

/***/ "./img/icons/button.svg":
/*!******************************!*\
  !*** ./img/icons/button.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/button.svg";

/***/ }),

/***/ "./img/icons/checkstatus.svg":
/*!***********************************!*\
  !*** ./img/icons/checkstatus.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/checkstatus.svg";

/***/ }),

/***/ "./img/icons/logo.svg":
/*!****************************!*\
  !*** ./img/icons/logo.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/logo.svg";

/***/ }),

/***/ "./img/icons/message.svg":
/*!*******************************!*\
  !*** ./img/icons/message.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/message.svg";

/***/ }),

/***/ "./img/icons/phone.svg":
/*!*****************************!*\
  !*** ./img/icons/phone.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/phone.svg";

/***/ }),

/***/ "./img/icons/profile.svg":
/*!*******************************!*\
  !*** ./img/icons/profile.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/profile.svg";

/***/ }),

/***/ "./img/icons/repair.svg":
/*!******************************!*\
  !*** ./img/icons/repair.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/repair.svg";

/***/ }),

/***/ "./img/icons/search.svg":
/*!******************************!*\
  !*** ./img/icons/search.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/search.svg";

/***/ }),

/***/ "./img/lenovo_logo.png":
/*!*****************************!*\
  !*** ./img/lenovo_logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/lenovo_logo.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_focus-visible_dist_focus-visible_js-node_modules_html-loader_dist_runtim-ca966d"], () => (__webpack_require__("./js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map