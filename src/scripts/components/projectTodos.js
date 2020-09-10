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
      const toDoItem = document.createElement('li');

      const checked = todo.checked ? 'checked' : '';

      toDoItem.innerHTML = `
        <input type="checkbox" ${checked}/>
        <label>${todo.content}</label>
        <span>${todo.status}</span>
      `;

      toDoList.appendChild(toDoItem);
    });

    this.appendChild(toDoList);
  }
}

customElements.define('project-todos', ProjectToDos);
