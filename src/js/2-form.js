import '../css/styles.css';

const formData = {
    email: "",
    message: ""
};

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

const savedFormData = localStorage.getItem('feedback-form-state');
if (savedFormData) {
    const parsedData = JSON.parse(savedFormData);
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";
    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
}

form.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }

    console.log(formData);

    localStorage.removeItem('feedback-form-state');
    formData.email = "";
    formData.message = "";
    form.reset();
});