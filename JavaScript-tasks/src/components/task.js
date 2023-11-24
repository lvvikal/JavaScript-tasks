import {createElement} from '../render.js';


function createTask() {
    return (
        `<div class="title5 task1">Выучить JS</div>`
      );
}


export class Task {
  getTemplate() {
    return createTask();
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }


    return this.element;
  }


  removeElement() {
    this.element = null;
  }
}