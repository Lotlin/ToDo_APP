export const getRowNum = table => {
  let i = 1;
  table.childNodes[1].childNodes.forEach(child => {
    i++;
  });

  return i;
};

export const createID = () => Date.parse(new Date());

export const confirm = () => {
  const corfim =
    prompt('Удалить задачу? Нет - отмена/cancel, да - любой символ');
  if (corfim === null) {
    return false;
  }

  return true;
};

export const getInputClass = (urgency) => {
  let className = '';

  switch (urgency) {
    case 'обычная':
      className = 'table-light';
      break;
    case 'важная':
      className = 'table-warning';
      break;
    case 'срочная':
      className = 'table-danger';
      break;
  }

  return className;
};
