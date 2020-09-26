import '../pages/index.css';

import Swiper, { Pagination } from 'swiper';
Swiper.use([Pagination]);

'use strict';

(function() {

  new Swiper('.reviews__swiper-container', {
    init: true,
    loop: true,
    grabCursor: true,
    wrapperClass: 'reviews__swiper-wrapper',
    slideClass: 'reviews__card',

    pagination: {
      el: '.reviews__pagination',
      type: 'bullets',
      clickable: true,
      bulletClass: 'reviews__pagination-item',
      bulletActiveClass: 'reviews__pagination-item_active',
    },
  })

})();