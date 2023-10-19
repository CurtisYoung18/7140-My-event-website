/* Acknowledegment of ChatGpt

I acknowledge the use of ChatGPT (https://chat.openai.com/) to
help me perform the functions of zooming photos.

The prompts used and the response from ChatGPT are included
in Appendix 1.

The output from these prompts was JavaScript codes
which has the function of zooming images, fetching dynamic contents.
I only apply the codes related to the zooming function.  

This was used as below.

*/

/*
DOM Manipulation and Usability Enhancements
Image Zoom Functionality for gallery.html
*/
document.addEventListener('DOMContentLoaded', function() {
    let galleryItems = document.querySelectorAll('.gallery-item img');
    let modal = document.createElement('div');
    let modalContent = document.createElement('div');  // Create the modal content div
    let modalImage = document.createElement('img');
    
    modal.classList.add('image-modal');
    modalContent.classList.add('modal-content');  // Add the class to the modal content div
    modalImage.classList.add('modal-img');

    modalContent.appendChild(modalImage);  // Append the image to the modal content
    document.body.appendChild(modal);
    document.body.appendChild(modalContent);  // Append the modal content to the body

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            modalImage.src = item.src;
            modal.style.display = 'block';
            modalContent.style.display = 'block';  // Show the modal content
        });
    
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            closeModal();
        }
    });
        
    });
    
    // Close the modal when clicking anywhere
    const closeModal = () => {
        modal.style.display = 'none';
        modalContent.style.display = 'none';  // Hide the modal content
    };

    modal.addEventListener('click', closeModal);
    modalContent.addEventListener('click', closeModal);  // Close when clicking on modal content
    modalImage.addEventListener('click', closeModal);    // Close when clicking on the image itself
});
