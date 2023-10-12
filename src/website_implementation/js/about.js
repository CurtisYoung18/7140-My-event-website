// get the subscribe form
const subscribeForm = document.getElementById('subscribe-form');

const handleInputChange = () => {
    let firstName = document.getElementById('firstName');
    let suburb = document.getElementById('suburb');
    let email = document.getElementById('email');
    let button = document.getElementById('subscribe-submit-button');

    if (firstName.value && suburb.value && email.value && email.validity.valid){
        button.classList.add('enabled');
        button.disabled = false;
    } else {
        button.classList.remove('enabled');
        button.disabled = true;
    }
};

const handleSubmit = (event) => {
    event.preventDefault();

    let firstName = document.getElementById('firstName').value;
    let suburb = document.getElementById('suburb').value;
    let email = document.getElementById('email').value;

    let responseMessage = document.getElementById('responseMessage');

    responseMessage.textContent = 'Sending your request ... please wait.';

    let payload = {
        subscriber_name: firstName,
        subscriber_suburb: suburb,
        subscriber_email: email
    };

    const url = 'https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/api/'
    const method = 'POST';
    const headers = {
        'Content-Type': 'application/json',
    };

    fetch(url, {
        method: method,
        headers: headers,
        body: JSON.stringify(payload)
    })
    .then((response) => response.text())
    .then((data) => {
        if (data === 'added') {
            responseMessage.textContent ='Subscription successful. Thank you for subscribing!';
        } else if (data === 'exists') {
            responseMessage.textContent = 'This email address has already been used to subscribe.';
        } else if (data == 'error') {
                responseMessage.textContent = 'An error occured with the API. Please try again later.';
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        responseMessage.textContent = 'An unexpected error occured. Please try again later.';
    });


};


subscribeForm.addEventListener('input',handleInputChange);
subscribeForm.addEventListener('submit', handleSubmit);