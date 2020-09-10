import '../components/project-item';

const createProject = (project) => {
  const projectItem = document.createElement('project-item');
  projectItem.project = project;

  return projectItem;
};

export default createProject;
