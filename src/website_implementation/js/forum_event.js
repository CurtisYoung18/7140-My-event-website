/* global constant variables */
const photoFileInputLabel = document.getElementById('photo-file-input-label');
const photoFileInput = document.getElementById('photo-file-input');

/* constant functions */
const triggerFileInput = () => {
    photoFileInput.click();
};

const handleFileChange = () => {
    let fileName = photoFileInput.files[0].name;

    if (fileName.length > 20) {
        fileName = fileName.substring(0, 17) + '...';
    }

    photoFileInputLabel.textContent = fileName;
};

/* event listeners */
photoFileInputLabel.addEventListener('click', triggerFileInput);
photoFileInput.addEventListener('change', handleFileChange);
