// navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop
    const toTop = document.querySelector('#to-top');
    // isi variabel fixedNav diambil dari jarak posisi header terhadap top nya
    // jarak saat ini 0, maka isi dari fixedNav adalah 0

    if (window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.add('flex');
        toTop.classList.remove('hidden');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.add('hidden');
        toTop.classList.remove('flex');
    }
    // window.scrollY = jarak scroll dengan sumbu Y yang sedang dilakukan
    // jika semakin digeser/scroll, maka jaraknya terus bertambah
    // cara bacanya: jika jarak scroll lebih besar dengan jarak fixedNav(0), maka tambahkan class navbar-fixed
    // namun jika sudah berada di paling atas (else), maka buang kelas navbar-fixed 
}

// hamburger 
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// CLose navbar ketika di klik diluar hamburger menu & navbar
window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
    // darkToggle.checked ? html.classList.add('dark') : html.classList.remove('dark');
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// Atur posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}
