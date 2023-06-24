import {getInputClass} from './utils.js';

export const createH1 = () => {
  const h1 = document.createElement('h1');
  h1.textContent =
  `Для запуска приложения контроля задач введите имя пользователя:`;
  h1.style.cssText = `
    margin-bottom: 21px;
    color: #6e6893;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 10%;
    text-transform: uppercase;
  `;

  return h1;
};

export const createLabelFormModal = () => {
  const labelFormModal = document.createElement('label');
  labelFormModal.className = 'me-2';
  return labelFormModal;
};

export const createInputFormModal = () => {
  const inputFormModal = document.createElement('input');
  inputFormModal.className = 'form-control';
  inputFormModal.setAttribute('name', 'inputFormModal');
  inputFormModal.setAttribute('type', 'text');
  inputFormModal.setAttribute('placeholder', 'имя пользователя');

  return inputFormModal;
};

export const createSubmitFormModal = () => {
  const submitFormModal = document.createElement('button');
  submitFormModal.setAttribute('name', 'modalButtonSubmit');
  submitFormModal.className = 'btn btn-primary modal-window__submit';
  submitFormModal.setAttribute('type', 'submit');
  submitFormModal.textContent = 'К приложению';
  submitFormModal.setAttribute('disabled', '');

  return submitFormModal;
};

export const createFormModal = () => {
  const formModal = document.createElement('form');
  formModal.className = 'modal-window__form';

  return formModal;
};

export const createDivModal = () => {
  const divModal = document.createElement('div');
  divModal.className = 'modal__window';
  divModal.style.cssText = `
  position: absolute;
  top: 150px;
  left: 550px;
  margin-right: auto;
  margin-left: auto;
  padding: 50px 70px 39px;
  width: 792px;
  min-height: 613px;
  box-shadow: 0px 0px 5px 0px #00000033;
  background-color: #f4f2ff;;
  text-align: center;
  `;

  return divModal;
};

export const createH3 = () => {
  const h3 = document.createElement('h3');
  h3.textContent = 'Todo App';
  return h3;
};

export const createRow = (task, rowNum, taskId, urgency) => {
  const tr = document.createElement('tr');
  const urgencyClassName = getInputClass(urgency);
  tr.className = `table__row ${urgencyClassName}`;
  tr.insertAdjacentHTML(
      'beforeend',
      `<td class="num">${rowNum}</td>
      <td class="task">
        ${task}
      </td>
      <td class ="status">В процессе</td>
      <td>
        <button class="btn btn-danger">
          Удалить
        </button>
        <button class="btn btn-success">
          Завершить
        </button>
        <button class="btn btn-info">
          Редактировать
        </button>
      </td>
      <td class="id" hidden>${taskId}</td>`,
  );

  return tr;
};

export const createFinishedRow = (task, rowNum, taskId, urgency) => {
  const tr = document.createElement('tr');
  const urgencyClassName = getInputClass(urgency);
  tr.className = `table__row table-success ${urgencyClassName}`;
  tr.insertAdjacentHTML(
      'beforeend',
      `<td class="num">${rowNum}</td>
      <td class="text-decoration-line-through">
        ${task}
      </td>
      <td class ="status">Выполнена</td>
      <td>
        <button class="btn btn-danger">
          Удалить
        </button>
        <button class="btn btn-success">
          Завершить
        </button>
        <button class="btn btn-info">
          Редактировать
        </button>
      </td>
      <td class="id" hidden>${taskId}</td>`,
  );

  return tr;
};

export const createForm = () => {
  const form = document.createElement('form');
  form.className = 'd-flex align-items-center mb-3 form';

  return form;
};

export const createInputForm = () => {
  const input = document.createElement('input');
  input.setAttribute('name', 'input');
  input.className = 'form-control form__input me-1';
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'ввести задачу');

  return input;
};

export const createSelectForm = () => {
  const select = document.createElement('select');
  select.setAttribute('name', 'select');
  select.className = 'form__select';
  return select;
};

export const createSelectOption = (text) => {
  const option = document.createElement('option');
  option.textContent = text;

  return option;
};

export const createLabelForm = () => {
  const label = document.createElement('label');
  label.setAttribute('name', 'label');
  label.className = 'form-group me-3 mb-0 d-flex';

  return label;
};

export const createButtonSubmitForm = () => {
  const buttonSubmitForm = document.createElement('button');
  buttonSubmitForm.setAttribute('name', 'buttonSubmit');
  buttonSubmitForm.className = 'btn btn-primary me-3 form__submit';
  buttonSubmitForm.setAttribute('type', 'submit');
  buttonSubmitForm.textContent = 'Сохранить';
  buttonSubmitForm.setAttribute('disabled', '');

  return buttonSubmitForm;
};

export const createButtonResetForm = () => {
  const buttonResetForm = document.createElement('button');
  buttonResetForm.setAttribute('name', 'buttonReset');
  buttonResetForm.className = 'btn btn-warning form__reset';
  buttonResetForm.setAttribute('type', 'reset');
  buttonResetForm.textContent = 'Очистить';

  return buttonResetForm;
};

export const createDivTableWrapper = () => {
  const divTableWrapper = document.createElement('div');
  divTableWrapper.className = 'table-wrapper';

  return divTableWrapper;
};

export const createThead = () => {
  const thead = document.createElement('thead');
  thead.insertAdjacentHTML(
      'beforeend',
      `<tr>
      <th>№</th>
      <th>Задача</th>
      <th>Статус</th>
      <th>Действия</th>
      </tr>`,
  );

  return thead;
};

export const createTbody = () => {
  const tbody = document.createElement('tbody');
  tbody.className = 'table__tbody';

  return tbody;
};

export const createTable = () => {
  const table = document.createElement('table');
  table.className = 'table table-hover table-bordered';

  return table;
};

export const addClassAppContainer = (appContainer) => {
  appContainer.className =
  `app-container vh-100 w-100 d-flex align-items-center
  justify-content-center flex-column`;
};
