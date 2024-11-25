import { render, screen } from "@testing-library/react";
import TaskList from "../components/TaskList/tasklist";
import { Tasktype } from "../components/utils/types";

describe("TaskList component", () => {
  const mockTasks: Tasktype[] = [
    { id: "1", description: "Task 1" },
    { id: "2", description: "Task 2" },
    { id: "3", description: "Task 3" },
  ];

  test("renders the task list container", () => {
    render(<TaskList taskItems={mockTasks} />);
    const taskList = screen.getByTestId("task-list");
    expect(taskList).toBeInTheDocument();
  });

  test("renders the correct number of tasks", () => {
    render(<TaskList taskItems={mockTasks} />);
    const tasks = screen.getAllByTestId("task-item");
    expect(tasks.length).toBe(mockTasks.length);
  });

  test("renders the correct descriptions for tasks", () => {
    render(<TaskList taskItems={mockTasks} />);
    mockTasks.forEach((task) => {
      expect(screen.getByText(task.description)).toBeInTheDocument();
    });
  });

  test("renders nothing when taskItems is null", () => {
    render(<TaskList taskItems={null} />);
    const taskList = screen.queryByTestId("task-list");
    expect(taskList).toBeInTheDocument();
    expect(taskList?.children.length).toBe(0);
  });

  test("renders nothing when taskItems is an empty array", () => {
    render(<TaskList taskItems={[]} />);
    const taskList = screen.queryByTestId("task-list");
    expect(taskList).toBeInTheDocument();
    expect(taskList?.children.length).toBe(0);
  });
});
