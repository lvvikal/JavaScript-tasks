import { tasks } from "../mock/tasks.js";
export class TasksService {
  #boardTasks = tasks;
  
  getTasksByStatus(status){
      const tasksStatus = this.#boardTasks.filter(function(task) {
          return task.status == status;
      });
      return(tasksStatus)
  }
}