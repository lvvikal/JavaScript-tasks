import {createElement} from '../render.js';
import { AbstractComponent } from './AbstractComponent.js';


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


export class FormAddTaskComponent extends AbstractComponent{
  getTemplate() {
    return createFormAddTaskComponentTemplate();
  }
}
