import { getTasksList } from './taskOperations.js';

const updateTaskStatus = (index) => {
  const tasksList = getTasksList();
  tasksList[index].completed === true ? tasksList[index].completed = false : tasksList[index].completed = true;
  localStorage.setItem('tasks: ', JSON.stringify(tasksList));
};

export default updateTaskStatus;