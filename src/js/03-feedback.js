import throttle from "lodash.throttle";

const KEY_LOCALSTORAGE = "feedback-form-state";

const formObject = {
    email: document.querySelector("input"),
    message: document.querySelector("textarea"),
    form: document.querySelector(".feedback-form"),
};
const options = {};

formObject.form.addEventListener("input", throttle(onFormInput, 500));
formObject.form.addEventListener("submit", onFormSubmit);

function onFormInput(e) {
    options[e.target.name] = e.target.value;

    localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(options));
    
};

function onFormSubmit(e) {
    e.preventDefault();
    console.log({options});

    e.currentTarget.reset();
    localStorage.removeItem(KEY_LOCALSTORAGE);
    
};

function getStorageData() {
    const saveData = localStorage.getItem(KEY_LOCALSTORAGE);
    const parseData = JSON.parse(saveData);

    if(parseData) {
        if (parseData.email) {
        formObject.email.value  = parseData.email
    };
        if(parseData.message) {  
        formObject.message.value = parseData.message
}
};

getStorageData();

}


