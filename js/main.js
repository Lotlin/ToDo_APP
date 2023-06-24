import {body, getModalFormElements} from './modules/getElements.js';
import {renderModal} from './modules/render.js';
import {submitFormModalControl} from './modules/control.js';
import {initApp} from './modules/initApp.js';

{
  const init = () => {
    renderModal(body);

    const {
      formModal,
      inputFormModal,
      submitFormModal,
      modalWindow,
    } = getModalFormElements();

    submitFormModalControl(inputFormModal, submitFormModal);
    initApp(modalWindow, formModal, inputFormModal);
  };

  init();
}
