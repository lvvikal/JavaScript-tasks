import {createElement} from '../render.js';
import { AbstractComponent } from './AbstractComponent.js';


function createFormBoard() {
    return (
        `<section id="board" class="class1"> </section>`
      );
}


export class Board  extends AbstractComponent{
  getTemplate() {
    return createFormBoard();
  }
}
