import '../scss/style.scss';
import DATA from './data/projects.json';
import createProjectsGrid from './renderer/createProjectsGrid';
import createProjectDetail from './renderer/createProjectDetail';
import createRandomToDo from './renderer/createRandomTodo';

const managerApp = (() => {
  const selectedProject = DATA.projects[1];

  const renderElement = (parent, element) => {
    parent.appendChild(element);
  };

  const dashboard = document.querySelector('.dashboard');
  const main = document.querySelector('.main-content');

  const projects = createProjectsGrid(DATA.projects);
  const projectDetail = createProjectDetail(selectedProject);

  renderElement(dashboard, projects);
  renderElement(main, projectDetail);

  const todoList = document.querySelector('project-todos ul');

  const addNewRandomToDo = () => {
    const newToDo = createRandomToDo();
    renderElement(todoList, newToDo);
  };

  return { addNewRandomToDo };
})();

document.querySelector('.add-todo').addEventListener('click', () => {
  managerApp.addNewRandomToDo();
});
