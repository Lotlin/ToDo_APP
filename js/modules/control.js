export const submitFormModalControl = (inputFormModal, submitFormModal) => {
  inputFormModal.addEventListener('input', () => {
    inputFormModal.value ?
      submitFormModal.disabled = false : submitFormModal.disabled = true;
  });
};

export const buttonSubmitFormControl = (inputForm, buttonSubmitForm) => {
  inputForm.addEventListener('input', () => {
    inputForm.value ?
      buttonSubmitForm.disabled = false : buttonSubmitForm.disabled = true;
  });
};
