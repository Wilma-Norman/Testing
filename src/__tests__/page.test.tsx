import {render, screen, fireEvent, within} from '@testing-library/react'
import Home from '@/app/page'

let mockTaskInput = 'mocktaskinput'

describe('testing page functionality', ()=> {
    it('accepts input and renders a task', ()=> {
      render(<Home/>)
      
      let taskInput = screen.getByTestId('task-input')
      let addTaskButton = screen.getByTestId('task-add-button')
      let taskList = screen.getByTestId('task-list')

      expect(taskList.children.length).toBe(0)

      fireEvent.change(taskInput, {target: {value: mockTaskInput}})

      fireEvent.click(addTaskButton)

      expect(within(taskList).getByTestId('task-item')).toBeInTheDocument()
    })

    it('test if task is rendered with correct title', ()=>{
        render(<Home/>)
        let taskInput = screen.getByTestId('task-input')
        let addTaskButton = screen.getByTestId('task-add-button')
        let taskList = screen.getByTestId('task-list')

        fireEvent.change(taskInput, {target: {value: mockTaskInput}})

        fireEvent.click(addTaskButton)

        expect(within(taskList).getByText(mockTaskInput)).toBeInTheDocument()
  
    })
    it('test if task is rendered with a deletebutton', () => {

        render(<Home/>)
        let taskInput = screen.getByTestId('task-input')
        let addTaskButton = screen.getByTestId('task-add-button')
        let taskList = screen.getByTestId('task-list')

        fireEvent.change(taskInput, {target: {value: mockTaskInput}})

        fireEvent.click(addTaskButton)

        expect(within(screen.getByTestId('task-item')).getByTestId('delete-task-button')).toBeInTheDocument()
    })
    it('check if a task is deleted', () => {
        render(<Home/>)
        let taskInput = screen.getByTestId('task-input')
        let addTaskButton = screen.getByTestId('task-add-button')
        let taskList = screen.getByTestId('task-list')

        fireEvent.change(taskInput, {target: {value: mockTaskInput}})
        fireEvent.click(addTaskButton)

        let task = within(taskList).getByTestId('task-item')
        expect(task).toBeInTheDocument()

        let deleteButton = within(task).getByTestId('delete-task-button')

        fireEvent.click(deleteButton)

        expect(task).not.toBeInTheDocument()
    })
    
    it('check if correct task is deleted', () => {
        render(<Home/>)
        let mockTask1 = 'mock task 1'
        let mockTask2 = 'mock task 2'
        let mockTask3 = 'mock task 3'

        let mockTasks = [mockTask1, mockTask2, mockTask3]

        let taskInput = screen.getByTestId('task-input')
        let addTaskButton = screen.getByTestId('task-add-button')
        let taskList = screen.getByTestId('task-list')

        mockTasks.forEach((mockTask)=>{

        fireEvent.change(taskInput, {target: {value: mockTask}})
        fireEvent.click(addTaskButton)
        })

        let tasks = within(taskList).getAllByTestId('task-item')

        expect(tasks).toHaveLength(mockTasks.length)
       
        let deleteButton = within(tasks[1]).getByTestId('delete-task-button')
        fireEvent.click(deleteButton)

        expect(within(taskList).getAllByTestId('task-item')).toHaveLength(mockTasks.length - 1)

        expect(within(taskList).queryByText(mockTask2)).not.toBeInTheDocument()
    })
})