// Sticky navbar

const nav = document.getElementById('navbar'); 
const navTop = nav.offsetTop; 

function stickyNav() {
    if (window.scrollY >= navTop) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
}

window.addEventListener('scroll', stickyNav);