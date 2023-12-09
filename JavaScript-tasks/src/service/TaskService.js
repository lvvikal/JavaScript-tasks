import { Status } from "../components/const.js";
import { tasks } from "../mock/tasks.js";

export class TasksService {
  #boardTasks = tasks;
  

  getTasksByStatus(status) {
    const tasksStatus = this.#boardTasks.filter(function (task) {
      return task.status == status;
    });
    return (tasksStatus)
  }
  
  create({ id = '', title, status = Status.BACKLOG }) {
    id = this.generateId();
    this.#boardTasks.push({ id, title, status });
    window.dispatchEvent(new CustomEvent("create-task"));
  }

  deleteAll() {
    this.#boardTasks.length = 7;
  }

  getTasks() {
    return this.#boardTasks;
  }
  generateId() {
    return crypto.randomUUID();
  }
}
