import '../scss/style.scss';
import createProjects from './components/createProjects';
import DATA from './data/projects.json';

const dashboard = document.querySelector('.dashboard');

dashboard.appendChild(createProjects(DATA.projects));
