import { HeaderComponent } from './components/header-component.js';
import { FormAddTaskComponent } from './components/form-add-task-component.js';
import { render, RenderPosition } from './render.js';
import { Board } from './components/board.js';
import { List } from './components/list.js';
import { Task } from './components/task.js';
import { TasksService } from './service/TaskService.js';
import { Status } from './components/const.js';
import { ClearBtn } from './components/clear-btn-component.js';
import { CardStubComponent } from './components/task-stub-card-component.js';


const bodyContainer = document.querySelector('.board-app');
const formContainer = document.querySelector('.add-task');
const boardContainer = document.querySelector('.add-task');
const taskService = new TasksService();
console.log(taskService);

const statuses = Object.values(Status);

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(taskService), formContainer, RenderPosition.BEFOREEND);
render(new Board(), boardContainer, RenderPosition.AFTEREND);


function renderTask(task, container) {
    const taskComponent = new Task({ id: task.id, title: task.title, status: task.status });
    render(taskComponent, container);
}

function renderList(cardListContainer, status) {
    const listComponent = new List (status, taskService);
    console.log(listComponent);
    render(listComponent, cardListContainer);
    return listComponent;
}

const cardListContainer = document.querySelector('.class1');
console.log(cardListContainer)
let disabledBtn = false;
if (taskService.getTasks().length < 1)
    disabledBtn = true;

function renderAllTasks() {
    for (const status of statuses) {
        const listComponent = renderList(cardListContainer, status);
        console.log(listComponent);
        const tasks = taskService.getTasksByStatus(status);
        if (tasks.length < 1) {
            render(new CardStubComponent(), listComponent.getElement());
        }

        tasks.forEach(task => {
            renderTask(task, listComponent.getElement())
        });
        if (status === Status.BASKET) {
            render(new ClearBtn(taskService, disabledBtn), listComponent.getElement());
        }
    }
}
renderAllTasks();