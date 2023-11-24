import {createElement} from '../render.js';


function createFormAddTaskComponentTemplate() {
    return (
        `<form class="task class2">
        <h2>Новая задача</h2>
        <div class="class2">
            <input class="inputclass" type="text" placeholder="Название задачи.." />
            <Button class="addButton"> &#43; Добавить</Button>
        </div>
    </form>`
      );
}


export class FormAddTaskComponent {
  getTemplate() {
    return createFormAddTaskComponentTemplate();
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
