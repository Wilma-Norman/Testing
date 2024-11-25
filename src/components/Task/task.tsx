import React, { useState } from "react";
import styles from "./task.module.css";

interface TaskProps {
  id: string;
  description: string;
}

const Task = ({ id, description }: TaskProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const deleteButton = () => {
    setIsVisible(false); 
  };

  if (!isVisible) {
    return null; 
  }

  return (
    <div className={styles.container} key={id} data-testid="task-item">
      <div>{description}</div>
      <div className={styles.buttonwraper}>
        <button onClick={deleteButton} className={styles.deletebutton} data-testid="delete-task-button">
          X
        </button>
      </div>
    </div>
  );
};

export default Task;

