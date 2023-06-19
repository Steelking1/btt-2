import { backtoTop } from "/Public/Assets/Js/Modules/Modules.js";
new backtoTop('active', 'back-to-top').go();

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
        audio.src = '/Public/Assets/audio/zapsplat_multimedia_button_click_004_78081.mp3'
        audio.play();
    }))
}
LoginModals();

function scrollspy() {
    
    let section = document.querySelectorAll('.main-content > section');
    let navLinks = document.querySelectorAll('.navbar__link > a');

    window.onscroll = ()=> {
        section.forEach(sect => {
            let top = window.scrollY;
            let offset = sect.offsetTop + 150;
            let height = sect.offsetHeight;
            let id = sect.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('activera');
                    document.querySelector('.navbar__link > a[href*='+ id +']').classList.add('activera');
                })

            }
        });
}

}
scrollspy();

const swiper = new Swiper('.swiper', {
    //direction: 'vertical',
    speed: 600,
    loop: true,
    autoplay: {
    delay: 4000,
    disableOnInteraction: true
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },

    slidesPerView: 'auto',

    breakpoints: {
        420: {
            slidesPerView: 1,
            spaceBetween: 20
        },

        620: {
            slidesPerView: 2,
            spaceBetween: 20
        },

        820: {
            slidesPerView: 3,
            spaceBetween: 20
        },
    }
});