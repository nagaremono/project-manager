import './projectTodos';

class ProjectDetail extends HTMLElement {
  set project(project) {
    this._project = project;
    this.render();
  }

  render() {
    this.classList.add('project-detail');

    this.innerHTML = `
      <div class="project-info">
        <div>
          <h2>${this._project.name}<h2>
          <p>${this._project.description || null}</p>
        </div>
        <div class="project-people"></div>
        <button>+</button>
      </div>
    `;

    const projectPeople = this.querySelector('.project-people');

    console.log(this._project.people);

    this._project.people.forEach((people) => {
      const peoplePhoto = document.createElement('img');
      peoplePhoto.src = `./${people.photo || ''}`;
      peoplePhoto.alt = 'Project Member';

      projectPeople.appendChild(peoplePhoto);
    });

    const projectToDos = document.createElement('project-todos');
    projectToDos.toDos = this._project.todos;
    this.appendChild(projectToDos);

    const addToDoButton = document.createElement('button');
    addToDoButton.textContent = '+';
    this.appendChild(addToDoButton);
  }
}

customElements.define('project-detail', ProjectDetail);
