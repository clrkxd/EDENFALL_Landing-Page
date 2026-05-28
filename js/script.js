window.addEventListener("load", function () {

    setTimeout(function () {

        const preloader = document.getElementById("preloader");

        if(preloader){
            preloader.classList.add("hide");
        }

    }, 2000);

});

// function refreshPage(){
//     // window.location.href = "#home";
//     window.location.reload();
// } 

const aboutSection = document.querySelector("#about");
const scroller = document.querySelector(".scroll-track");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {

            // Restart animation every time section becomes visible
            scroller.style.animation = "none";
            void scroller.offsetWidth; // force reflow

            scroller.style.animation = "scrol 20s linear infinite";

        } else {

            // Stop animation when leaving section
            scroller.style.animation = "none";
        }
    });
}, {
    threshold: 0.5
});

observer.observe(aboutSection);



const menuIcon = document.querySelector('#menuicon');
const closeIcon = document.querySelector('#closeicon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

// OPEN MENU
menuIcon.addEventListener('click', () => {
    navbar.classList.add('active');
    document.body.classList.add('menu-open');
});

// CLOSE MENU
closeIcon.addEventListener('click', () => {
    navbar.classList.remove('active');
    document.body.classList.remove('menu-open');
});

// CLOSE WHEN CLICKING OUTSIDE
document.addEventListener('click', (e) => {

    const clickedInsideNavbar = navbar.contains(e.target);
    const clickedMenuIcon = menuIcon.contains(e.target);
    const clickedCloseIcon = closeIcon.contains(e.target);

    if (
        !clickedInsideNavbar &&
        !clickedMenuIcon &&
        !clickedCloseIcon &&
        navbar.classList.contains('active')
    ) {
        navbar.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

// CLOSE WHEN CLICKING NAVBAR LINKS
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
});