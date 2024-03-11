import { createContext } from "react";
import { ITaskList } from "../types";

interface ITaskListContext {
  taskList: Array<ITaskList>;
  updateTask: (newTaskList: Array<ITaskList>) => void;
}

export const TaskListContext = createContext<ITaskListContext | null>(null);
