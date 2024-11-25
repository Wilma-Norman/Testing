import { render, screen, fireEvent } from "@testing-library/react";
import Task from "../components/Task/task";

describe("Task component", () => {
  const taskProps = {
    id: "1",
    description: "Test Task",
  };

  test("renders the task with the correct description", () => {
    render(<Task {...taskProps} />);
    const taskItem = screen.getByTestId("task-item");
    expect(taskItem).toBeInTheDocument();
    expect(screen.getByText("Test Task")).toBeInTheDocument();
  });

  test("removes the task when the delete button is clicked", () => {
    render(<Task {...taskProps} />);
    const taskItem = screen.getByTestId("task-item");
    const deleteButton = screen.getByTestId("delete-task-button");
    expect(taskItem).toBeInTheDocument();
    fireEvent.click(deleteButton);    
    expect(taskItem).not.toBeInTheDocument();
  });
});


