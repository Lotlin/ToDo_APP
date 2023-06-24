import {
  createH1, createLabelFormModal, createInputFormModal, createSubmitFormModal,
  createFormModal, createDivModal, createH3, createLabelForm, createRow,
  createButtonSubmitForm, createButtonResetForm, createForm,
  createDivTableWrapper, createSelectOption, createTable, createFinishedRow,
  createInputForm, createSelectForm, createThead, createTbody,
} from './createElements.js';
import {getStorage} from './serviceStorage.js';
import {getRenderedElements} from './getElements.js';
import {getRowNum} from './utils.js';
import {addClassAppContainer} from './createElements.js';

const renderLabelFormModal = () => {
  const label = createLabelFormModal();
  const input = createInputFormModal();

  label.append(input);

  return label;
};

const renderFormModal = () => {
  const formModal = createFormModal();
  const label = renderLabelFormModal();
  const submitFormModal = createSubmitFormModal();

  formModal.append(label);
  formModal.append(submitFormModal);

  return formModal;
};

const renderModalDiv = () => {
  const modal = createDivModal();
  const h1 = createH1();
  const formModal = renderFormModal();

  modal.append(h1);
  modal.append(formModal);

  return modal;
};

export const renderModal = (body) => {
  const modal = renderModalDiv();

  body.append(modal);
};

const renderLabelForm = () => {
  const select = createSelectForm();
  const option1 = createSelectOption('обычная');
  option1.classList = 'bg-primary';
  const option2 = createSelectOption('важная');
  option1.classList2 = 'bg-warning';
  const option3 = createSelectOption('срочная');
  option1.classList3 = 'bg-danger';

  select.append(option1);
  select.append(option2);
  select.append(option3);

  const input = createInputForm();
  const label = createLabelForm();

  label.append(input);
  label.append(select);

  return label;
};

const renderForm = () => {
  const form = createForm();
  const label = renderLabelForm();
  const buttonSubmit = createButtonSubmitForm();
  const buttonReset = createButtonResetForm();

  form.append(label);
  form.append(buttonSubmit);
  form.append(buttonReset);

  return form;
};

const renderThead = () => {
  const thead = createThead();

  return thead;
};

const renderTbody = () => {
  const tbody = createTbody();

  return tbody;
};

const renderTable = () => {
  const table = createTable();
  const thead = renderThead();
  const tbody = renderTbody();

  table.append(thead);
  table.append(tbody);

  return table;
};

const renderDivTableWrapper = () => {
  const divTableWrapper = createDivTableWrapper();
  const table = renderTable();

  divTableWrapper.append(table);

  return divTableWrapper;
};

export const renderApp = (appContainer, userName) => {
  addClassAppContainer(appContainer);
  const h3 = createH3();
  const form = renderForm();
  const divDivTableWrapper = renderDivTableWrapper();

  appContainer.append(h3);
  appContainer.append(form);
  appContainer.append(divDivTableWrapper);

  const taskList = getStorage(userName);

  if (taskList) {
    taskList.forEach(task => {
      const table = getRenderedElements().table;
      const tbody = getRenderedElements().tbody;
      const rowNum = getRowNum(table);
      if (task.taskIsFinished) {
        tbody.append(createFinishedRow(task.title, rowNum, task.id));
      } else {
        tbody.append(createRow(task.title, rowNum, task.id, task.urgency));
      }
    });
  }
};
