import {createElement} from '../render.js';


function createFormBoard() {
    return (
        `<section id="board" class="class1"> </section>`
      );
}


export class Board {
  getTemplate() {
    return createFormBoard();
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
