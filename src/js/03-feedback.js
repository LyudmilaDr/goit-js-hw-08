import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const KEY_LOCAL = "feedback-form-state";
initForm();

form.addEventListener("input", throttle(onFormInput, 500));
form.addEventListener("submit", onFormSubmit);

function initForm(){ 
let savedData = localStorage.getItem(KEY_LOCAL);
if (savedData) {
    savedData = JSON.parse(savedData);
        Object.entries(savedData).forEach(([name, value]) => {
          form.elements[name].value = value;
        });
      }
    }

function onFormInput(evt){
    let savedData = localStorage.getItem(KEY_LOCAL);
    savedData = savedData ? JSON.parse(savedData) : {};
    savedData[evt.target.name] = evt.target.value;
    localStorage.setItem(KEY_LOCAL, JSON.stringify(savedData));
};

function onFormSubmit(event){
event.preventDefault();
const dataObject = {};
const formData = new FormData(form);
formData.forEach((value, name) => (dataObject[name] = value));
console.log( dataObject );
localStorage.removeItem(KEY_LOCAL);
evt.currentTarget.reset();
};






// initForm();

// filterForm.addEventListener('submit', evt => {
//   evt.preventDefault();
//   const formData = new FormData(filterForm);
//   formData.forEach((value, name) => console.log(value, name));
// });

// filterForm.addEventListener('change', evt => {
//   let persistedFilters = localStorage.getItem(LOCALSTORAGE_KEY);
//   persistedFilters = persistedFilters ? JSON.parse(persistedFilters) : {};
//   persistedFilters[evt.target.name] = evt.target.value;
//   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(persistedFilters));
// });

// filterForm.addEventListener('reset', () => {
//   localStorage.removeItem(LOCALSTORAGE_KEY);
// });

// function initForm() {
//   let persistedFilters = localStorage.getItem(LOCALSTORAGE_KEY);
//   if (persistedFilters) {
//     persistedFilters = JSON.parse(persistedFilters);
//     Object.entries(persistedFilters).forEach(([name, value]) => {
//       filterForm.elements[name].value = value;
//     });
//   }
// }
