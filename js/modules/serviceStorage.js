export const getStorage = (userName) =>
  JSON.parse(localStorage.getItem(userName)) || [];

const setStorage = (toDoList, userName) => {
  localStorage.setItem(userName, JSON.stringify(toDoList));
};

export const addTaskDataStorage = (task, taskId, taskUrgency, userName) => {
  const toDoList = getStorage(userName);
  const newTask = {
    'id': taskId,
    'title': task,
    'taskIsFinished': '',
    'urgency': taskUrgency,
  };
  toDoList.push(newTask);
  setStorage(toDoList, userName);
};

export const addTaskStatusStorage = (taskId, userName) => {
  const toDoList = getStorage(userName);
  const newtoDoList = [];

  toDoList.forEach(task => {
    if (task.id === taskId) {
      task.taskIsFinished = true;
    }
    newtoDoList.push(task);
  });

  setStorage(newtoDoList, userName);
};

export const changeTaskTitleStorage =
(editedTaskTitle, editedTaskId, userName) => {
  const toDoList = getStorage(userName);
  const newtoDoList = [];

  toDoList.forEach(task => {
    if (task.id === editedTaskId) {
      task.title = editedTaskTitle;
    }
    newtoDoList.push(task);
  });

  setStorage(newtoDoList, userName);
};

export const removeStorage = (taskId, userName) => {
  const toDoList = getStorage(userName);
  const newtoDoList = toDoList.filter(item => item.id !== taskId);
  setStorage(newtoDoList, userName);
};
