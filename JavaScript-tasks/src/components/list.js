import { StatusLabel } from './const.js';
import {createElement} from '../render.js';
import { AbstractComponent } from './AbstractComponent.js';


function createList(status) {
    return (
        `<div class="obl">
            <div id="list" class="class3">
                <div class="class1 list${status}">${StatusLabel[status]}</div>
            </div>
        </div>`
      );
}


export class List  extends AbstractComponent{
  #status = null;

    constructor({status}){
        super();
        this.#status = status;
    }
      
    getTemplate() {
        return createList(this.#status);
    }
}