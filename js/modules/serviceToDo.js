import {createRow} from './createElements.js';
import {getRowNum, createID, confirm} from './utils.js';
import {addTaskDataStorage, removeStorage,
  addTaskStatusStorage, changeTaskTitleStorage}
  from './serviceStorage.js';

export const addTask =
(form, inputForm, selectForm, tbody, table, buttonSubmitForm, userName) => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const rowNum = getRowNum(table);
    const task = inputForm.value;
    const taskId = createID();
    const taskUrgency = selectForm.value;
    addTaskDataStorage(task, taskId, taskUrgency, userName);
    tbody.append(createRow(task, rowNum, taskId, taskUrgency));
    form.reset();
    buttonSubmitForm.disabled = true;
  });
};

export const delTask = (table, userName) => {
  table.addEventListener('click', e => {
    const target = e.target;

    if (target.closest('.btn-danger')) {
      if (confirm()) {
        target.closest('.table__row').remove();
        const tr = target.closest('.table__row');
        const targetId = Number(tr.querySelector('.id').textContent);
        removeStorage(targetId, userName);
        const allNumTd = table.querySelectorAll('.num');
        let counter = 1;
        allNumTd.forEach(element => {
          element.textContent = counter;
          counter++;
        });
      }
    }
  });
};

export const finishTask = (table, userName) => {
  table.addEventListener('click', e => {
    const target = e.target;

    if (target.closest('.btn-success')) {
      const tr = target.closest('.table__row');
      tr.classList.add('table-success');
      tr.classList.remove('table-light');
      tr.classList.remove('table-warning');
      tr.classList.remove('table-danger');
      const status = tr.querySelector('.status');
      status.textContent = 'Выполнена';
      const task = tr.querySelector('.task');
      if (task) {
        task.classList.add('text-decoration-line-through');
        task.classList.remove('task');
        const taskId = Number(tr.querySelector('.id').textContent);
        addTaskStatusStorage(taskId, userName);
      }
    }
  });
};

export const editTask = (table, userName) => {
  let task = '';
  table.addEventListener('click', e => {
    const target = e.target;
    if (target.closest('.btn-info')) {
      const tr = target.closest('.table__row');
      if (tr.classList.contains('table-success')) {
        task = tr.querySelector('.text-decoration-line-through');
      } else {
        task = tr.querySelector('.task');
      }
      task.setAttribute('contenteditable', 'true');
      task.classList.add('table-secondary');
      task.addEventListener('blur', () => {
        const editedTask = target.closest('.table__row');
        const editedTaskTitle = task.textContent;
        const editedTaskId =
          Number(editedTask.querySelector('.id').textContent);
        changeTaskTitleStorage(editedTaskTitle, editedTaskId, userName);
        task.removeAttribute('contenteditable');
        task.classList.remove('table-secondary');
      });
    }
  });
};

export const resetForm = (form, buttonSubmitForm) => {
  form.addEventListener('click', e => {
    const target = e.target;

    if (target.closest('.form__reset')) {
      form.reset();
      buttonSubmitForm.disabled = true;
    }
  });
};
