import '../scss/style.scss';
import DATA from './data/projects.json';
import createProjectsGrid from './renderer/createProjectsGrid';
import createProjectDetail from './renderer/createProjectDetail';

const renderElement = (parent, element) => {
  parent.appendChild(element);
};

const dashboard = document.querySelector('.dashboard');
const main = document.querySelector('.main-content');

const project = createProjectsGrid(DATA.projects);
const projectDetai = createProjectDetail(DATA.projects[1]);

renderElement(dashboard, project);
renderElement(main, projectDetai);
