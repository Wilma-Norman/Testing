import {render, screen, fireEvent} from '@testing-library/react'
import NewTask from '../components/NewTask/newtask'
import { Tasktype } from '@/components/utils/types'

describe("If the new task renders correctly", () => {
    it("See if the input field renders correctly", () => {
        render(<NewTask updateFunction={function (newTask: Tasktype): void {
            throw new Error('Function not implemented.')
    }}/>)

        const userInput = screen.getByTestId("task-input")
        const button = screen.getByRole('button');

        expect(userInput).toBeInTheDocument()
        expect(button).toBeInTheDocument()
    })

    it("user input is saved in state", () => {
        render(<NewTask updateFunction={function (newTask: Tasktype): void {
            throw new Error('Function not implemented.')
        } } />)
        const mockTask = "Feed the fish"

        let userInput = screen.getByTestId("task-input")
        expect((userInput as HTMLInputElement).value).toBe('')

        fireEvent.change(userInput, {target: {value: mockTask}})

        userInput = screen.getByTestId("task-input")
        expect((userInput as HTMLInputElement).value).toBe(mockTask)
    })
})