import {renderApp} from './render.js';
import {appContainer, getFormElements, getRenderedElements}
  from './getElements.js';
import {buttonSubmitFormControl} from './control.js';
import {addTask, delTask, resetForm, finishTask, editTask}
  from './serviceToDo.js';

export const initApp = (modalWindow, formModal, inputFormModal) => {
  formModal.addEventListener('submit', e => {
    e.preventDefault();
    const userName = inputFormModal.value;
    localStorage.setItem('ToDoListUserName', userName);
    modalWindow.classList.add('d-none');

    renderApp(appContainer, userName);

    const {
      form,
      inputForm,
      selectForm,
      buttonSubmitForm,
    } = getFormElements();

    const {
      table,
      tbody,
    } = getRenderedElements();

    buttonSubmitFormControl(inputForm, buttonSubmitForm);
    addTask(form, inputForm, selectForm,
        tbody, table, buttonSubmitForm, userName);
    delTask(table, userName);
    resetForm(form, buttonSubmitForm);
    finishTask(table, userName);
    editTask(table, userName);
  });
};
