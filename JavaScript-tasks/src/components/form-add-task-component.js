import { createElement } from '../render.js';
import { AbstractComponent } from './AbstractComponent.js';


function createFormAddTaskComponentTemplate() {
  return (
    `<form class="task class2">
        <h2>Новая задача</h2>
        <div class="class2">
            <input id="add-task" class="inputclass" type="text" placeholder="Название задачи.." required/>
            <Button class="addButton" type="submit"> &#43; Добавить</Button>
        </div>
    </form>`
  );
}


export class FormAddTaskComponent extends AbstractComponent {
  #taskService = null;

  constructor(taskService) {
    super();
    this.#taskService = taskService;
    this.getElement().addEventListener(`submit`, this.formSubmitHandler.bind(this));
  }

  getTemplate() {
    return createFormAddTaskComponentTemplate();
  }
  
  formSubmitHandler(evt) {
    evt.preventDefault();
    const inputElement = this.getElement().querySelector(`#add-task`);
    const title = inputElement.value.trim();
    this.#taskService.create({ title });
    inputElement.value = ``;
  }
}

