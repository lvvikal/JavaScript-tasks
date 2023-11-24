import {createElement} from '../render.js';


function createList() {
    return (
        `<div class="obl">
        <div id="list" class="class3">
        <div class="title1">Тема</div>
        </div>
        </div>`
      );
}


export class List {
  getTemplate() {
    return createList();
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