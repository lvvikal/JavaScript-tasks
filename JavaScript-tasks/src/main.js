import { HeaderComponent } from './components/header-component.js';
import { FormAddTaskComponent } from './components/form-add-task-component.js';
import { render, RenderPosition } from './render.js';
import { Board } from './components/board.js';
import { List } from './components/list.js';
import { Task } from './components/task.js';

const bodyContainer = document.querySelector('.board-app');
const formContainer = document.querySelector('.add-task');
const boardContainer = document.querySelector('.add-task');



render(new HeaderComponent(), bodyContainer, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), formContainer,  RenderPosition.BEFOREEND);
render(new Board(), boardContainer, RenderPosition.AFTEREND);
const listContainer = document.getElementById('board');
let i=0;
while (i<4){
render(new List(), listContainer, RenderPosition.AFTERBEGIN);
const task = document.getElementById('list');
render(new Task(), task, RenderPosition.BEFOREEND);
render(new Task(), task, RenderPosition.BEFOREEND);
render(new Task(), task, RenderPosition.BEFOREEND);
i++}