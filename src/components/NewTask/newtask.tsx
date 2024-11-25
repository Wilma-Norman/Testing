'use client'
import styles from './Newtask.module.css'
import { Tasktype } from '../utils/types'
import { HTMLInputTypeAttribute, SetStateAction, useState } from 'react'
import uuidGenerator from '../utils/uuid'

type NewTaskProps = {
    updateFunction: (newTask: Tasktype) => void
}

const NewTask = ({updateFunction}: NewTaskProps) => {
    const [inputValue, setInputValue]=useState<HTMLInputTypeAttribute>('')

    const handleChange = (e: { target: { value: SetStateAction<HTMLInputTypeAttribute> } }) => {
        setInputValue(e.target.value)
    }

    const handleClick = () => {
        if(inputValue !== '') { 
            const userTask = {id: uuidGenerator(6), description: inputValue}
            updateFunction(userTask);
            setInputValue('')
        }
    }

    return(
        <div className={styles.taskwraper}>
            <h4 className={styles.taskheading}>Create a new task</h4>
            <label htmlFor="user-input">Enter a task</label>
            <input onChange={handleChange} id="user-input" className={styles.inputfield} placeholder="create a new task..." value={inputValue} data-testid='task-input'/>
            <button onClick={handleClick} className={styles.taskbutton} data-testid={'task-add-button'}>Add Task</button>
        </div>
    )
}

export default NewTask