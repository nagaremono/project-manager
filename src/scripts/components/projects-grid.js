import './project-item';

class ProjectsGrid extends HTMLElement {
  set projects(projects) {
    this._projects = projects;
    this.render();
  }

  render() {
    this.classList.add('projects-grid');

    this.innerHTML = `
      <h2>Projects<span>(${this._projects.length})</span></h2>
    `;

    this._projects.forEach((project, index) => {
      if (index > 4) return;
      const projectItem = document.createElement('project-item');
      projectItem.project = project;

      this.appendChild(projectItem);
    });

    const moreProjectButton = document.createElement('button');
    moreProjectButton.textContent = `${this._projects.length - 5}+`;
    this.appendChild(moreProjectButton);
  }
}

customElements.define('projects-grid', ProjectsGrid);
