// gallery page

const titleContainers = document.querySelectorAll('.title-container');
const imageContainer = document.querySelector('.image-container');

// Define arrays for image names corresponding to each title
const imagesForTitles = [
    ["images/a.jpg", "images/b.jpg"],
    ["images/c.jpg", "images/d.jpg"],
    ["images/e.jpg", "images/a.jpg"],
    ["images/b.jpg", "images/c.jpg"],
    ["images/d.jpg", "images/e.jpg"]
    // Add more arrays for other titles as needed
];

// Function to create a thumbnail for each title
function createThumbnails() {
    titleContainers.forEach((container, index) => {
        const thumbnail = container.querySelector('.thumbnail');
        const firstImage = imagesForTitles[index][0];
        thumbnail.src = firstImage;
    });
}

// Function to display or remove images based on the selected title
function toggleImages(images, title) {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    images.forEach((imageName) => {
        const image = document.createElement('img');
        image.classList.add('image');
        image.src = imageName;
        imageContainer.appendChild(image);
    });

    // Insert the new image container after the clicked title
    titleContainers.forEach((container, index) => {
        if (container.querySelector('.title') === title) {
            // If the image container exists, remove it
            if (container.nextElementSibling && container.nextElementSibling.classList.contains('image-container')) {
                container.parentNode.removeChild(container.nextElementSibling);
            } else {
                // If the image container doesn't exist, create it and display images
                container.parentNode.insertBefore(imageContainer, container.nextSibling);
            }
        }
    });
}

// Add click event listeners to titles
titleContainers.forEach((container, index) => {
    container.addEventListener('click', () => {
        const title = container.querySelector('.title');
        toggleImages(imagesForTitles[index], title);
    });
});

// Initialize thumbnails
createThumbnails();