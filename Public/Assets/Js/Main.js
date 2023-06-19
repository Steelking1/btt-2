import { Menu_mobile, Menu_collant, ScrollSpy, apparitionOnscroll, backtoTop } from "./Modules/Modules.js";
new Menu_mobile('button-toggle', 'navbar-content').toggle();
new Menu_collant('scroll-up', 'scroll-down').MenuCollant();
new ScrollSpy('active', '[data-spy]').go();
new apparitionOnscroll('reveal').go();
new apparitionOnscroll('reveal-left').go();
new backtoTop('active', 'back-to-top').go();

const swiper_ = new Swiper('.ourteams', {
    // speed: 600,
    // loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: true
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      920: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
});
