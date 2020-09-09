const createProject = (project) => {
  const projectContainer = document.createElement('div');
  projectContainer.classList.add('project');

  const projectButton = document.createElement('button');
  projectButton.setAttribute('aria-label', 'Select Project');

  const projectIcon = document.createElement('img');
  projectIcon.src = `./${project.icon}`;
  projectIcon.alt = 'Project Icon';
  projectButton.appendChild(projectIcon);

  const projectAbbr = document.createElement('span');
  const splittedProjectName = project.name.split(' ');
  // Initials of Project Name
  projectAbbr.textContent = `${
    splittedProjectName[0][0] + splittedProjectName[1][0]
  }`;
  projectButton.appendChild(projectAbbr);

  const projectName = document.createElement('span');
  projectName.textContent = project.name;

  projectContainer.appendChild(projectButton);
  projectContainer.appendChild(projectName);

  return projectContainer;
};

export default createProject;
