import { HeaderComponent } from './components/header-component.js';
import { FormAddTaskComponent } from './components/form-add-task-component.js';
import { render, RenderPosition } from './render.js';
import { Board } from './components/board.js';
import { List } from './components/list.js';
import { Task } from './components/task.js';
import { TasksService } from './service/TaskService.js';
import { Status } from './components/const.js';
import { ClearBtn } from './components/clearBtn-component.js';


const bodyContainer = document.querySelector('.board-app');
const formContainer = document.querySelector('.add-task');
const boardContainer = document.querySelector('.add-task');
const taskService = new TasksService();

let result = Object.keys(Status).map((key) => [key, Status[key]]);

render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), formContainer,  RenderPosition.BEFOREEND);
render(new Board(), boardContainer, RenderPosition.AFTEREND);


const listContainer = document.getElementById('board');
let i=0;
while (i<4)
    {
        const listComponent = new List({status: result[i][1]});
        render(listComponent, listContainer, RenderPosition.BEFOREEND);
        let tasks = taskService.getTasksByStatus(result[i][1]);
        tasks.forEach(task => {
            render(new Task({id: task.id, title: task.title, status: task.status}), listComponent.getElement());
        });
        if (i==3){
            render(new ClearBtn(), listComponent.getElement(), RenderPosition.BEFOREEND);
        }
        i++;
    }
