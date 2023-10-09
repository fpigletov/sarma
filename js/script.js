(()=>{"use strict";var __webpack_modules__={"./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/()=>{eval("\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  var header = document.querySelector('.header');\n  var wrapper = document.querySelector('.wrapper');\n  var scrollWidth = window.innerWidth - wrapper.offsetWidth + 'px';\n  var headerActiveBtns = document.querySelectorAll('.active-btn');\n  var headerSubmenu = document.querySelectorAll('.header-submenu');\n  var catalogTabs = document.querySelectorAll('.catalog-header__tab-btn');\n  var headerSearchInput = document.querySelector('.search-header__input');\n  var clearSearchBtn = document.querySelector('.search-form__btn--clear');\n  var headerSearchResult = document.querySelector('.search-header__result');\n  var modal = document.querySelector('.modal');\n  var headerSearch = document.querySelector('.center-header__search'); //Preloader and Header on scroll\n  // function headerOnScroll() {\n  //   if (window.scrollY > 0) {\n  //     header.classList.add('active');\n  //   } else {\n  //     header.classList.remove('active');\n  //   }\n  // }\n  // window.addEventListener('scroll', () => {\n  //   headerOnScroll();\n  // });\n  // window.addEventListener('load', () => {\n  //   headerOnScroll();    \n  // });\n  // Header Btns \n\n  headerActiveBtns.forEach(function (item) {\n    item.addEventListener('click', function (e) {\n      e.preventDefault();\n      var target = e.currentTarget;\n      headerActiveBtns.forEach(function (el) {\n        if (el !== target) {\n          el.classList.remove('active');\n\n          if (el.nextElementSibling) {\n            el.nextElementSibling.classList.remove('active');\n          }\n        }\n      });\n      item.classList.toggle('active');\n\n      if (item.nextElementSibling) {\n        item.nextElementSibling.classList.toggle('active');\n      }\n\n      setTabActive();\n    });\n  }); //Header Menu Actions\n  // function headerMenuActions() {\n  //   if (headerMenu.classList.contains('active')) {\n  //     document.body.style.paddingRight = scrollWidth;\n  //     header.style.paddingRight = scrollWidth;\n  //     document.body.classList.add('hidden');\n  //   } else {\n  //     function removeHidden() {\n  //       document.body.classList.remove('hidden');\n  //       document.body.style.paddingRight = '';\n  //       header.style.paddingRight = '';\n  //     }\n  //     setTimeout(removeHidden, 300);\n  //   }\n  // }\n\n  function setTabActive() {\n    if (catalogTabs) {\n      for (var i = 0; i < catalogTabs.length; i++) {\n        catalogTabs[i].classList.remove('active');\n        catalogTabs[0].classList.add('active');\n      }\n    }\n  }\n\n  document.addEventListener('keydown', function (e) {\n    if (e.code === 'Escape') {\n      removeActiveClass();\n      setTabActive();\n      clearHeaderInput();\n    }\n  });\n\n  function removeActiveClass() {\n    headerActiveBtns.forEach(function (btn) {\n      if (btn.classList.contains('active')) {\n        btn.classList.remove('active');\n      }\n    });\n    headerSubmenu.forEach(function (menu) {\n      if (menu.classList.contains('active')) {\n        menu.classList.remove('active');\n      }\n    });\n  }\n\n  document.addEventListener('click', function (e) {\n    var target = e.target;\n\n    if (target.classList.contains('header-link')) {\n      removeActiveClass();\n    }\n\n    if (!target.closest('.header-submenu') && !target.closest('.active-btn')) {\n      removeActiveClass();\n    }\n\n    if (!target.closest('.center-header__search')) {\n      clearHeaderInput();\n    }\n  }); //Catalog Tabs\n\n  function actionsOnTabs(parentSelector, tabsSelector, contentSelector, tabClass) {\n    var tabsParent = document.querySelector(parentSelector);\n    var tabs = document.querySelectorAll(tabsSelector);\n    var tabsContents = document.querySelectorAll(contentSelector);\n\n    function showContent() {\n      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n      tabsContents[index].classList.add('show', 'fade');\n      tabsContents[index].classList.remove('hide');\n      tabs[index].classList.add('active');\n    }\n\n    function hideContent() {\n      tabsContents.forEach(function (content) {\n        content.classList.add('hide');\n        content.classList.remove('show', 'fade');\n      });\n      tabs.forEach(function (tab) {\n        return tab.classList.remove('active');\n      });\n    }\n\n    hideContent();\n    showContent();\n    tabsParent.addEventListener('click', function (event) {\n      if (event.target && event.target.classList.contains(tabClass)) {\n        tabs.forEach(function (tab, index) {\n          if (event.target === tab) {\n            hideContent();\n            showContent(index);\n          }\n        });\n      }\n    });\n  }\n\n  if (document.querySelector('.catalog-header__wrapper')) {\n    actionsOnTabs('.catalog-header__tabs', '.catalog-header__tab-btn', '.catalog-header__item', 'catalog-header__tab-btn');\n  }\n\n  function clearHeaderInput() {\n    clearSearchBtn.classList.remove('active');\n    headerSearchResult.classList.remove('active');\n    headerSearchInput.value = '';\n  } //Search \n\n\n  if (headerSearchInput) {\n    clearSearchBtn.addEventListener('click', function () {\n      clearHeaderInput();\n    });\n    headerSearchInput.addEventListener('input', function () {\n      var inputValue = headerSearchInput.value;\n\n      if (inputValue.length > 0) {\n        clearSearchBtn.classList.add('active');\n        headerSearchResult.classList.add('active');\n      } else {\n        clearHeaderInput();\n      }\n    });\n  } //Hero Sliders\n\n\n  if (document.querySelector('.slider-left__body')) {\n    new Swiper('.slider-left__body', {\n      observer: true,\n      observeParents: true,\n      slidesPerView: 1,\n      speed: 800,\n      loop: true,\n      loopAdditionalSlides: 5,\n      preloadImages: false,\n      grabCursor: true,\n      autoplay: {\n        delay: 4000\n      },\n      pagination: {\n        el: '.slider-left__pagination',\n        type: 'progressbar'\n      },\n      navigation: {\n        nextEl: '.slider-left__btn--next',\n        prevEl: '.slider-left__btn--prev'\n      }\n    });\n  }\n\n  if (document.querySelector('.slider-right__body')) {\n    new Swiper('.slider-right__body', {\n      observer: true,\n      observeParents: true,\n      slidesPerView: 1,\n      speed: 800,\n      loop: true,\n      loopAdditionalSlides: 5,\n      preloadImages: false,\n      grabCursor: true,\n      autoplay: {\n        delay: 4000\n      },\n      pagination: {\n        el: '.slider-right__pagination',\n        type: 'progressbar'\n      }\n    });\n  } //Subcategories Slider\n\n\n  if (document.querySelector('.subcategories__slider')) {\n    new Swiper('.subcategories__slider', {\n      observer: true,\n      observeParents: true,\n      spaceBetween: 24,\n      slidesPerView: 8.65,\n      speed: 800,\n      loop: true,\n      loopAdditionalSlides: 5,\n      preloadImages: false,\n      grabCursor: true,\n      autoplay: {\n        delay: 4000\n      }\n    });\n  }\n});\n\n//# sourceURL=webpack://gulpstarter/./src/js/script.js?")}},__webpack_exports__={};__webpack_modules__["./src/js/script.js"]()})();
//# sourceMappingURL=script.js.map
