export interface ISubTask {
  description: string;
  value: number;
  checked: boolean;
}

export interface ITaskList {
  name: string;
  tasks: Array<ISubTask>;
}
