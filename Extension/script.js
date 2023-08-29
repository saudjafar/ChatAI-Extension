document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("messageInput");
    const sendIcon = document.getElementById("sendMessageIcon");
    const errorMessage = document.getElementById("errorMessage");

    const responseText = document.getElementById("responseText");
    const questionText = document.getElementById("questionText");
    const loadingSpinner = document.getElementById("loadingSpinner");
    const qrContainer = document.getElementById("qrContainer");

    function callAPI(message) {
        const apiUrl = 'http://localhost:3000/ask';

        const requestData = {
            question: message
        };

        setTimeout(() => {

            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then(data => {

                    responseText.textContent = data.response;
                    loadingSpinner.style.display = "none";
                    qrContainer.style.display = "block";
                    console.log('Response:', data.response);
                })
                .catch(error => {

                    loadingSpinner.style.display = "none";
                    qrContainer.style.display = "block";
                    responseText.textContent = "Error fetching data";
                    console.log('Error:', error);
                });
        }, 700);


    }

    function sendMessage() {
        const message = inputField.value;
        if (message) {
            errorMessage.style.display = "none"; //hide error message
            inputField.value = ""; // Clear the input field
            responseText.textContent = ""; // Clear the response
            questionText.textContent = ""; // Clear the question
            qrContainer.style.display = "none"; //hide question-response container

            //display loading spinner 
            loadingSpinner.style.display = "inline-block";


            questionText.textContent = message;

            console.log("Sending message:", message);

            //call API
            callAPI(message);


        }
        else {
            errorMessage.style.display = "block";
            // qrContainer.style.display = "none"; //hide question-response container

        }
    }

    sendIcon.addEventListener("click", sendMessage);

    inputField.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});
