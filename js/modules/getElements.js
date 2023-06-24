export const body = document.querySelector('body');
export const appContainer = body.querySelector('.app-container');

export const getModalFormElements = () => {
  const formModal = document.querySelector('.modal-window__form');
  const inputFormModal = formModal.elements.inputFormModal;
  const submitFormModal = formModal.elements.modalButtonSubmit;
  const modalWindow = document.querySelector('.modal__window');

  return {
    formModal,
    inputFormModal,
    submitFormModal,
    modalWindow,
  };
};

export const getRenderedElements = () => {
  const table = document.querySelector('.table');
  const tbody = table.querySelector('.table__tbody');
  const delBtns = table.querySelectorAll('.btn-danger');

  return {
    table,
    tbody,
    delBtns,
  };
};

export const getFormElements = () => {
  const form = document.querySelector('.form');
  const inputForm = form.elements.input;
  const selectForm = form.elements.select;
  const buttonSubmitForm = form.elements.buttonSubmit;
  const buttonResetForm = form.elements.buttonReset;

  return {
    form,
    inputForm,
    selectForm,
    buttonSubmitForm,
    buttonResetForm,
  };
};
