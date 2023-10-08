// DOM Manipulation and Usability Enhancements

// Image Zoom Functionality for gallery.html
document.addEventListener('DOMContentLoaded', function() {
    // choose all the images
    let galleryItems = document.querySelectorAll('.gallery-item img');
    // create new div and img elements for modal box and image.
    let modal = document.createElement('div');
    let modalImage = document.createElement('img');
    
    modal.classList.add('image-modal');
    modalImage.classList.add('modal-img');
    modal.appendChild(modalImage);
    document.body.appendChild(modal);
    

    // For each image in the gallery, an event listener is added to listen for click events. 
    // When an image is clicked, the src attribute of the image in the modal is set to the src of the clicked image, 
    // and the modal is then displayed.
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            modalImage.src = item.src;
            modal.style.display = 'block';
        });
    });
    
    // click anywhere on the modal box will close it.
    modal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
});