const formElements = document.querySelectorAll('.popup__form');

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add('popup__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_type_error');
    errorElement.classList.remove('popup__input-error_active');
    errorElement.textContent = '';
};

//функция отключения кнопки
const disableSubmitButton = (submitButton, inactiveButtonClass) => {
    submitButton.classList.add(inactiveButtonClass)
    submitButton.setAttribute('disabled', true);
}

//функция включения кнопки
const enableSubmitButton = (submitButton, inactiveButtonClass) => {
    submitButton.classList.remove(inactiveButtonClass)
    submitButton.removeAttribute('disabled')
}

const isValid = (formElement, inputElement) => {
    const formSubmit = formElement.querySelector('.popup__save-button');
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
        formSubmit.classList.add('popup__save-button_inactive');
        formSubmit.setAttribute('disabled',true);
    } else {
        hideInputError(formElement, inputElement);
        formSubmit.classList.remove('popup__save-button_inactive');
        formSubmit.removeAttribute('disabled');
    }
};

formElements.forEach(
    (fe) => {
        fe.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
    });

formElements.forEach(
    (fe) => {
        const formInputs = fe.querySelectorAll('.popup__input');
        formInputs.forEach(
            (fi) => {
                fi.addEventListener('input', () => {
                    isValid(fe, fi);
                }
            )}
        )
    }
);