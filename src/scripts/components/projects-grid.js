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

    this._projects.forEach((project) => {
      const projectItem = document.createElement('project-item');
      projectItem.project = project;

      this.appendChild(projectItem);
    });
  }
}

customElements.define('projects-grid', ProjectsGrid);
