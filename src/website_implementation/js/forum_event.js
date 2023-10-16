/* global constant variables */
const photoFileInputLabel = document.getElementById('photo-file-input-label');
const photoFileInput = document.getElementById('photo-file-input');
const eventForm = document.getElementById('eventForm');
const myInput = document.querySelector("#date_time");
const fp = flatpickr(myInput, {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
});
const baseURLCommunityEvents = "https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/community_events/";
const postCommunityEvnetMethod = 'POST';
const eventsContainer = document.getElementById('events-container');

const queryString = new URLSearchParams(queryParams).toString();
const urlWithParams = baseURLCommunityEvents+"?"+queryString;

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

const handleFormSubmit = event => {
    event.preventDefault();

    let formData = new FormData(event.target);
    formData.append("website_code", my_website_code);

    const requestOptions = {
        method: postCommunityEvnetMethod,
        body: formData,
        redirect: 'follow'
    }

    fetch(baseURLCommunityEvents, requestOptions)
    .then(response => response.json().then(data => {
        if (!response.ok) {
            console.log("Sever response:", data);
            throw new Error("Network response was not ok");    
        }
        return data;
    }))
    .then(data => {
        console.log(data.description);
        eventForm.reset();
        photoFileInputLabel.textContent = "Add a photo (Optional)";
        alert(`Your event "${data.description}" has been added to our website! Thanks!`);
    })
    .catch(error => {
        console.error("There was a problem with the fetch operation:", error.message);
        alert("Error submitting event. Please try again.");
    });
};

// fetching events from Community Events API
const getCommunityEvents = () => {
    const queryParams = {
        website_code: my_website_code,
    }
    const queryString = new URLSearchParams(queryParams).toString();
    const urlWithParams = baseURLCommunityEvents+"?"+queryString;
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }

    fetch(urlWithParams, requestOptions)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(events => {
        console.log(events);
        while (eventsContainer.firstChild) {
            eventsContainer.removeChild(eventsContainer.firstChild);
        }
        events.forEach(event => {
            const eventTemplet = `
                <article class="col-12 col-md-12 col-lg-6">
                    <div class="card" role="group" aria-labelledby="card${event.id}-title" aria-describedby="card${event.id}-desc">
                        <h2 class="card-header p-2" id="card${event.id}-title">${event.name}</h2>
                        <img class="card-banner-image" src="${event.photo}" alt="${event.name}">
                        <p class="card-body-text p-2">${event.description}</p>
                        <p class="card-body-text px-2"><strong>Location:</strong>${event.location}</p>
                        <p class="card-body-text px-2"><strong>Organiser:</strong>${event.organiser}</p>
                        <p class="card-body-text px-2"><strong>Event Type:</strong>${event.event_type}</p>
                        <p class="card-body-text px-2"><strong>Date & Time:</strong>${new Date(event.date_time).toLocaleString()}</p>
                    </div>
                </article>
            `;
            eventsContainer.innerHTML += eventTemplet;
        })
    })
    .catch(error => {
        console.error("Error processing events:", error.message);
        alert("There was a problem loading events. Please refresh the page to try again.");
    });
};

/* event listeners */
photoFileInputLabel.addEventListener('click', triggerFileInput);
photoFileInput.addEventListener('change', handleFileChange);
eventForm.addEventListener("submit", handleFormSubmit);

/* page setup on first load */
getCommunityEvents();