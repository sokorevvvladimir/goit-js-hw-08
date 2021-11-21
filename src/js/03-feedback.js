import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const inputRef = document.querySelector('[name="email"]');
const textAreaRef = document.querySelector('[name="message"]');

formRef.addEventListener('input', throttle(callback, 500));

function callback() {
    localStorage.setItem("feedback-form-state", JSON.stringify({ "email": inputRef.value, "message": textAreaRef.value }));
};

formRef.addEventListener('submit', onSubmitHandler);

function onSubmitHandler(e) {
    e.preventDefault();
    const {
        elements: { email, message }
    } = e.currentTarget;
    
    const curObj = { login: `${ email.value }`, message: `${ message.value }` }
    console.log(curObj);
    
    localStorage.removeItem("feedback-form-state");
    e.currentTarget.reset();
}

const currentLocalStorage = JSON.parse(localStorage.getItem("feedback-form-state"));

// (currentLocalStorage) ? inputRef = currentLocalStorage.email && textAreaRef = currentLocalStorage.message : null


