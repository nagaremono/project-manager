import '../components/project-detail';

const createProjectDetail = (project) => {
  const projectDetail = document.createElement('project-detail');
  projectDetail.project = project;

  return projectDetail;
};

export default createProjectDetail;
