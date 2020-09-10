import '../components/project-todo';
import randomTodos from '../globals/randomToDos';
import status from '../globals/status';

const createRandomToDo = () => {
  function randomNumberInIntervals(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const todo = {
    checked: false,
    content: randomTodos[randomNumberInIntervals(0, 3)],
    status: status[randomNumberInIntervals(0, 3)],
  };

  const todoItem = document.createElement('project-todo');
  todoItem.todo = todo;

  return todoItem;
};

export default createRandomToDo;
