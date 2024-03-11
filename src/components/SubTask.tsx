import React from "react";
import "./SubTask.css";

interface ISubTaskProps {
  label: string;
  isChecked: boolean;
  onToggle: () => void;
}

const SubTask: React.FC<ISubTaskProps> = ({ label, isChecked, onToggle }) => {
  return (
    <div className="checkbox-container" onClick={onToggle}>
      <input type="checkbox" checked={isChecked} readOnly />
      <label>{label}</label>
    </div>
  );
};

export default SubTask;
