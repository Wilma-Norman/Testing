import styles from './tasklist.module.css'
import { Tasktype } from '../utils/types'
import Task from '../Task/task';

type TaskListProps = {
    taskItems: Tasktype[] | null
}

const TaskList = ({taskItems}:TaskListProps) => {

    return(
        <div className={styles.taskContainer} data-testid="task-list">
            {taskItems && taskItems.map((item, i) => <Task key={i} {...item}/>)}
        </div>
    )
}

export default TaskList