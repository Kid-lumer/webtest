// Firebase configuration from your Firebase console
const firebaseConfig = {
    apiKey: "AIzaSyCDhWV4JdbDM4cH50hMIOrN7RIeQzxAwn8",
    authDomain: "database-5a7a0.firebaseapp.com",
    projectId: "database-5a7a0",
    storageBucket: "database-5a7a0.appspot.com",
    messagingSenderId: "758513476809",
    appId: "1:758513476809:web:1ef967cb1d4aff0c615918",
    measurementId: "G-GQK93BP60Z"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    const responseMessage = document.getElementById('response-message');

    const contactRef = database.ref('contacts').push();
    contactRef.set({
        name: name,
        email: email,
        message: message,
    })
    .then(() => {
        responseMessage.style.display = 'block';
        responseMessage.innerHTML = "Thank you for your message, " + name + "! We will get back to you shortly.";
        responseMessage.style.color = "green";
        document.getElementById('contact-form').reset();
    })
    .catch((error) => {
        console.error('Error:', error);
        responseMessage.style.display = 'block';
        responseMessage.innerHTML = "Error sending message.";
        responseMessage.style.color = "red";
    });
});