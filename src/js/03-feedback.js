import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const KEY_LOCAL = "feedback-form-state";
const email = form.elements.email;
const message = form.elements.message;
let dataForm = { email: `${form.elements.email.value }`,
message: `${form.elements.message.value}`
};

form.addEventListener("input", lodash(onFormInput, 500));
form.addEventListener("submit", onFormSubmit);

function onFormInput(){
    if(!email.value || !message.value){
        return;
    }
    localStorage.setItem(KEY_LOCAL, JSON.stringify(dataForm));
};
function onFormSubmit(event){
event.preventDefault();
localStorage.removeItem(KEY_LOCAL);
form.requestFullscreen();
}
console.log(dataForm);
