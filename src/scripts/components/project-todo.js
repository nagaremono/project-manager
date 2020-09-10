class ProjectToDo extends HTMLElement {
  set todo(todo) {
    this._todo = todo;
    this.render();
  }

  render() {
    console.log(this._todo);
    const checked = this._todo.checked ? 'checked' : '';

    const statusClass = this._todo.status.replace(' ', '-');

    this.innerHTML = `
      <li>
        <input type="checkbox" ${checked}/>
        <label>${this._todo.content}</label>
        <span class=${statusClass}>${this._todo.status}</span>
      </li>
    `;
  }
}

customElements.define('project-todo', ProjectToDo);
