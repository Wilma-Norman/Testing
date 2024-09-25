import {fireEvent, render, screen} from '@testing-library/react'
import Task from '../components/Task/task'


test("The props are rendered correctly", () => {
    const mockData = {id: '1', description: "Does this work??"}

    render(<Task {...mockData} />)

    const task = screen.getByTestId("task-item")
    const deleteButton = screen.getByRole('button')

    expect(task).toHaveTextContent(mockData.description)
    expect(deleteButton).toBeInTheDocument();

    
})
