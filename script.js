// Change navbar background on scroll
window.addEventListener("scroll", function() {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#ff5500";
    } else {
        navbar.style.backgroundColor = "#ff7300";
    }
});

