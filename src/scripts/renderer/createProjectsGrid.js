import '../components/projects-grid';

const createProjects = (projects) => {
  const projectsGrid = document.createElement('projects-grid');
  projectsGrid.projects = projects;

  return projectsGrid;
};

export default createProjects;
