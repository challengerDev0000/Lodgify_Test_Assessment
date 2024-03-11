import { ITaskList } from "../types";

export const calculateTotalPoints = (tasks: Array<ITaskList>) =>
  tasks.flatMap((task) => task.tasks).reduce((sum, task) => sum + task.value, 0);

export const calculateCompletedPoints = (tasks: Array<ITaskList>) =>
  tasks
    .flatMap((task) => task.tasks.filter((t) => t.checked))
    .reduce((sum, task) => sum + task.value, 0);