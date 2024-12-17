// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const header = document.querySelector('#header');
const headerContainer = header.querySelector('.container'); // Elemen kontainer header

menuToggle.addEventListener('click', () => {
    header.classList.toggle('open');
    if (header.classList.contains('open')) {
        // Tampilkan konten setelah header terbuka
        setTimeout(() => {
            headerContainer.style.opacity = '1';
        }, 500); // Sinkron dengan durasi animasi CSS (0.5s)
    } else {
        // Sembunyikan konten sebelum header menutup
        headerContainer.style.opacity = '0';
    }
});

// Show header by default on load
window.addEventListener('load', () => {
    header.classList.add('open');
    // Tampilkan konten setelah header selesai membuka
    setTimeout(() => {
        headerContainer.style.opacity = '1';
    }, 500); // Sinkron dengan durasi animasi CSS (0.5s)
});
