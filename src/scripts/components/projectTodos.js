import './project-todo';

class ProjectToDos extends HTMLElement {
  set toDos(toDos) {
    this._toDos = toDos;
    this.render();
  }

  render() {
    this.classList.add('project-todos');

    const heading = document.createElement('h3');
    heading.textContent = 'Today';
    this.appendChild(heading);

    const toDoList = document.createElement('ul');

    this._toDos.forEach((todo) => {
      const toDoItem = document.createElement('project-todo');
      toDoItem.todo = todo;

      toDoList.appendChild(toDoItem);
    });

    this.appendChild(toDoList);
  }
}

customElements.define('project-todos', ProjectToDos);
