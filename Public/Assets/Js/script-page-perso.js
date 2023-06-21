import { backtoTop, ScrollSpy, apparitionOnscroll } from "./Modules/Modules.js";
new backtoTop('active', 'back-to-top').go();
new ScrollSpy('activera', '.main-content > section').go();
new apparitionOnscroll('reveal').go();
new apparitionOnscroll('reveal-left').go();


function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    const navbarLink = document.querySelectorAll('.navbar__link');
    burger.addEventListener('click', (e) => {
        navbar.classList.toggle('show-nav');
    });
    //enlever le menu lors du click
    navbarLink.forEach(link =>{ 
    link.addEventListener('click', function(event) {
        if (!event.target.matches('.burger') && navbar.classList.contains('show-nav')) {
            navbar.classList.toggle('show-nav')
            }
        }
    )
})
    //bloquer le scroll
    window.addEventListener('scroll', ()=> {
        if ( navbar.className === 'navbar dark-mode show-nav' ) {
            window.scrollTo(0,0)
        }
    })
}
toggleMenu();

function MenuCollant() { 
    const body = document.body;
    let lastScroll = 0;

    window.addEventListener('scroll', ()=>{
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
            body.classList.remove('scroll-up');
            return;
        }

        if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
            body.classList.remove('scroll-up');
            body.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && body.classList.contains('scroll-down')) {
            body.classList.remove('scroll-down');
            body.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    })
}
MenuCollant();

function LoginModals() {
    var btnLogModals = document.querySelectorAll('.login')
    var Modals = document.querySelector('.modals-container')
    btnLogModals.forEach(btn => btn.addEventListener('click', () => {
        Modals.classList.toggle('active')
        window.addEventListener('scroll', ()=>{
            if (Modals.className === 'modals-container active') {
                window.scrollTo(0,0);
            }
        });
        const audio = new Audio();
        audio.src = '../audio/zapsplat_multimedia_button_click_004_78081.mp3';
        audio.play();
    }))
}
LoginModals();

const swiper = new Swiper('.swiper', {
    //direction: 'vertical',
    //speed: 600,
    //loop: true,
    autoplay: {
    delay: 5000,
    disableOnInteraction: true
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },

    slidesPerView: 1,
    spaceBetween: 15,

    breakpoints: {
        420: {
            slidesPerView: 1,
            spaceBetween: 20
        },

        820: {
            slidesPerView: 2,
            spaceBetween: 20
        },

        1120: {
            slidesPerView: 3,
            spaceBetween: 20
        },
    }
});