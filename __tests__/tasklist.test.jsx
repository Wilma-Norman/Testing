import {render, screen} from '@testing-library/react'
import {startTask} from '../components/utils/defaultTasks'
import TaskList from '../components/TaskList/tasklist'

describe("The Task List is rendered correctly", () => {
    it("Checks the task list is rendered", () => {
        render(<TaskList taskItems={startTask}/>)

        const taskList = screen.getByTestId("task-list")
        expect(taskList).toBeInTheDocument()
    })

    it("Checks that 3 default tasks are rendered", () => {
        render(<TaskList taskItems={startTask}/>)
        const defaultTasks = screen.queryAllByTestId("task-item")
        expect(defaultTasks.length).toBe(3)
    })

    it("Checks that the second default task has a spefific title", () => {
        render(<TaskList taskItems={startTask}/>)
        const defaultTasks = screen.queryAllByTestId("task-item")
    })
})