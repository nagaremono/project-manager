class ProjectItem extends HTMLElement {
  set project(project) {
    this._project = project;
    this.render();
  }

  render() {
    const splittedProjectName = this._project.name.split(' ');
    const projectNameAbbr =
      splittedProjectName[0][0] + splittedProjectName[1][0];
    this.innerHTML = `
      <button aria-label="Select Project">
        <img src=${this._project.icon || null} alt="Project Icon" />
        <span>${projectNameAbbr}</span>
      </button>
      <span>${this._project.name}</span>
    `;
    this.classList.add('project-item');
  }
}

customElements.define('project-item', ProjectItem);
