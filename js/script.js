
function toggleMobileNavigation() {
    const hiddenNav = document.getElementById("hidden-nav");
    const navButtons = document.getElementById("nav-buttons");

    hiddenNav.style.display = hiddenNav.style.display === "block" ? "none" : "block";
}

function handleWindowResize() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 810) {
        document.getElementById("hidden-nav").style.display = "none";
    } else {
        document.getElementById("hidden-nav").style.display = "none";
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
    } else if (fullImg !== null) document.body.removeChild(fullImg);

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
    // if (currentIndex < items.length - 1) {
    currentIndex++;
    currentIndex %= items.length
    updateCarousel();
    // }
});

updateCarousel();

// admission page and administration page

function handleAdmissionClick(identity) {
    let tags = document.querySelectorAll(".admission-section-left")

    for (let tag of tags) {
        if (tag === document.getElementById(identity)) tag.style.display = "block"
        else tag.style.display = "none"
    }
}

// navigation bar dropdown

let dropdown = document.querySelectorAll(".dropdown-parent")
let dropdownContent = document.querySelectorAll(".dropdown-content")

function handleDropdownClick(index) {
    dropdownContent[index].style.display = dropdownContent[index].style.display === "block" ? "none" : "block"
}

dropdown.forEach((elem, index) => {
    elem.addEventListener("click", function () { handleDropdownClick(index) })
})


