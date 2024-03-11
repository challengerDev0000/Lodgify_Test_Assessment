import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import ProgressBar from "./components/ProgressBar";
import { TaskListContext } from "./context/TaskContext";
import { ITaskList } from "./types";
import { getTaskLists } from "./utils/api.service";

function App() {
  const [taskList, setTaskList] = useState<Array<ITaskList>>([]);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const tasks = await getTaskLists();
      const totalPoints = calculateTotalPoints(tasks);
      setTaskList(tasks);
      setTotalPoints(totalPoints);
      setCurrentProgress(calculateCompletedPoints(tasks));
    };

    fetchData();
  }, []);

  const calculateTotalPoints = useCallback(
    (tasks: Array<ITaskList>): number =>
      tasks
        .flatMap((task) => task.tasks)
        .reduce((sum, task) => sum + task.value, 0),
    []
  );

  const calculateCompletedPoints = useCallback(
    (tasks: Array<ITaskList>): number =>
      tasks
        .flatMap((task) => task.tasks.filter((t) => t.checked))
        .reduce((sum, task) => sum + task.value, 0),
    []
  );

  const updateTask = useCallback(
    (newTaskList: Array<ITaskList>) => {
      setTaskList(newTaskList);
      setCurrentProgress(calculateCompletedPoints(taskList));
    },
    [taskList]
  );

  return (
    <TaskListContext.Provider value={{ taskList, updateTask }}>
      <div className="container mt-30">
        <div className="progress-header">
          <h1>Lodgify Grouped Tasks</h1>
          {currentProgress >= 0 && (
            <ProgressBar
              progress={Math.floor((currentProgress / totalPoints) * 100)}
            />
          )}
        </div>
        <Accordion items={taskList} />
      </div>
    </TaskListContext.Provider>
  );
}

export default App;
