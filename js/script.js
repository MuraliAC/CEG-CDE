
function toggleMobileNavigation() {
    const hiddenNav = document.getElementById("hidden-nav");
    const navButtons = document.getElementById("nav-buttons");
    // const mobileMenu = document.getElementById("mobile-menu-icon")

    hiddenNav.style.display = hiddenNav.style.display === "block" ? "none" : "block";
    // navButtons.style.display = navButtons.style.display === "flex" ? "none" : "flex";
}

function handleWindowResize() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 810) {
        document.getElementById("hidden-nav").style.display = "none";
        // document.getElementById("nav-buttons").style.display = "none";
    } else {
        document.getElementById("hidden-nav").style.display = "none";
        // document.getElementById("nav-buttons").style.display = "flex";
    }
}
let imageCount = 0, time = 0, fullImg = null;

document.getElementById("mobile-menu-icon").addEventListener("click", toggleMobileNavigation);

document.getElementById("main-logo").addEventListener("click", () => {
    let currentTime = new Date().getTime();
    if (currentTime - time > 2000) imageCount = 0

    imageCount++;
    time = currentTime;

    if (imageCount >= 7) {
        fullImg = document.createElement("img");
        fullImg.src = "https://muraliac.github.io/ourimage/mainImg.jpg";
        fullImg.alt = "Image";
        fullImg.id = "ourImage"
        document.body.appendChild(fullImg);
        imageCount = 0;
    } else if (fullImg) document.body.removeChild(fullImg);

})

handleWindowResize();

window.addEventListener("resize", handleWindowResize);

const wrapper = document.querySelector('.carousel-wrapper');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function updateCarousel() {
    const itemWidth = items[0].offsetWidth;
    wrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < items.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

updateCarousel();



