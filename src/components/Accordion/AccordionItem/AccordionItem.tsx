import { useCallback, useState } from "react";
import BOOK_IMAGE_COMPLETED from "../../../assets/images/booking-completed.png";
import BOOK_IMAGE from "../../../assets/images/booking.png";
import { useTaskList } from "../../../hooks/useTaskList";
import { ITaskList } from "../../../types";
import SubTask from "../../SubTask/SubTask";
import "./AccordionItem.css";
interface IAccordionItemProps {
  data: ITaskList;
  taskIdx: number;
}

const AccordionItem: React.FC<IAccordionItemProps> = ({ data, taskIdx }) => {
  const [isOpen, toggleOpen] = useState(false);
  const { taskList, updateTask } = useTaskList();

  const isCompleted = data.tasks.every((task) => task.checked);

  const handleCheckboxChange = useCallback(
    (subTaskIndex: number) => {
      taskList[taskIdx].tasks[subTaskIndex].checked =
        !taskList[taskIdx].tasks[subTaskIndex].checked;
      updateTask(taskList);
    },
    [data.tasks, taskIdx]
  );

  return (
    <li className="flex accordion-item">
      <div
        className="accordion-item-header flex"
        onClick={() => toggleOpen(!isOpen)}
      >
        <div
          className={`item-header-content flex ${
            isCompleted ? "completed" : ""
          }`}
        >
          <img
            src={isCompleted ? BOOK_IMAGE_COMPLETED : BOOK_IMAGE}
            alt="icon"
          />
          <span>{data.name}</span>
        </div>
        <div className="item-header-arrow-content flex">
          <span>{isOpen ? "Hide" : "Show"}</span>
          <button
            className={`accordion-item-btn flex ${isOpen ? "opened" : ""}`}
          ></button>
        </div>
      </div>
      {isOpen && (
        <div className="accordion-item-container">
          <div className="accordion-item-content flex">
            {data.tasks.map((subTask, subTaskIdx) => {
              return (
                <SubTask
                  key={`${data.name}-${subTaskIdx}`}
                  label={subTask.description}
                  isChecked={data.tasks[subTaskIdx].checked}
                  onToggle={() => handleCheckboxChange(subTaskIdx)}
                />
              );
            })}
          </div>
        </div>
      )}
    </li>
  );
};

export default AccordionItem;
