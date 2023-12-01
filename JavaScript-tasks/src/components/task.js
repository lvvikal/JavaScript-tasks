import { createElement } from "../render.js";
import { AbstractComponent } from "./AbstractComponent.js";


function createTask(status, title) {
    return (
        `<div class="title5 task${status}">${title}</div>`
      );
}

export class Task extends AbstractComponent{
  #id = null;
  #status = null;
  #title = null;

    constructor({id, title, status}){
        super();
        this.#id = id;
        this.#status = status;
        this.#title = title;
    }
      

    getTemplate() {
        return createTask(this.#status, this.#title);
    }
}
