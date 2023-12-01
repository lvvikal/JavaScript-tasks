import {createElement} from '../render.js';
import { AbstractComponent } from './AbstractComponent.js';



function createHeaderComponentTemplate() {
    return (
        `<header class="board-app__header">
          <div class="board-app__inner">
            <h1>Список задач</h1>
          </div>
        </header>`
      );
}


export class HeaderComponent extends AbstractComponent{
  getTemplate() {
    return createHeaderComponentTemplate();
  }
}
