import createProject from './createProject';

const createProjects = (projects) => {
  const projectsContainer = document.createElement('div');
  projectsContainer.classList.add('projects');

  const projectsHeading = document.createElement('h2');
  projectsHeading.innerHTML = `Projects <span>(${projects.length})</span>`;
  projectsContainer.appendChild(projectsHeading);

  projects.forEach((project) => {
    const projectElement = createProject(project);
    console.log(projectElement);
    projectsContainer.appendChild(projectElement);
  });

  return projectsContainer;
};

export default createProjects;
