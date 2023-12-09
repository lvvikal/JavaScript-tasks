import { Status, StatusLabel } from './const.js';
import { RenderPosition, createElement } from '../render.js';
import { AbstractComponent } from './AbstractComponent.js';
import { render } from '../render.js';
import { Task } from './task.js';
import { ClearBtn } from './clear-btn-component.js';
import { CardStubComponent } from './task-stub-card-component.js';


function createList(status) {
    return (
        `<div class="obl">
            <div id="list" class="class3 list">
                <div class="class1 list${status}">${StatusLabel[status]}</div>
            </div>
        </div>`
    );
}


export class List extends AbstractComponent {
    #status = null;
    #taskService = null;
    #tasks = null;

    constructor(status, taskService) {
        super();
        this.#status = status;
        this.#taskService = taskService;
        this.#tasks = taskService.getTasksByStatus(status);
        window.addEventListener("create-task", () => this.#reRenderTasks(this.#status, this.#taskService));
    }


    #reRenderTasks(status, taskService) {
        this.#tasks = this.#taskService.getTasksByStatus(this.#status);
        this.#removeTasks();
        let disabledBtn = false;
        if (this.#taskService.getTasks().length < 1)
            disabledBtn = true;
        if (this.#tasks.length < 1) {
            render(new CardStubComponent(), this.getElement());
        }
        this.#tasks.forEach(task => {
            const taskComponent = new Task({ id: task.id, title: task.title, status: task.status });
            render(taskComponent, this.getElement(), RenderPosition.BEFOREEND);
        });
        if (status === Status.BASKET) {
            render(new ClearBtn(taskService, disabledBtn), this.getElement());
        }
    }

    #removeTasks() {
        const childElements = Array.from(this.getElement().children);
        childElements.forEach(childElement => {
            if (!childElement.matches('.taskCardHeader')) {
                childElement.remove();
            }
        });
    }

    getTemplate() {
        return createList(this.#status);
    }
}