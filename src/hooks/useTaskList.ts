import { useContext } from "react";
import { TaskListContext } from "../context/TaskContext";

export const useTaskList = () => {
  const context = useContext(TaskListContext);
  if (!context) {
    throw new Error("TaskList must be used within a ContextProvider");
  }
  return context;
};
