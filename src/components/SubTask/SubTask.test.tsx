import { render, fireEvent } from "@testing-library/react";
import SubTask from "./SubTask";

describe("SubTask component", () => {
  it("renders SubTask component correctly", () => {
    const mockLabel = "Sample Task";
    const { getByText } = render(
      <SubTask label={mockLabel} isChecked={false} onToggle={() => {}} />
    );

    expect(getByText(mockLabel)).toBeInTheDocument();
  });

  it("calls onToggle when the checkbox container is clicked", () => {
    const mockLabel = "Sample Task";
    const mockOnToggle = jest.fn();
    const { getByText } = render(
      <SubTask label={mockLabel} isChecked={false} onToggle={mockOnToggle} />
    );

    fireEvent.click(getByText(mockLabel));
    expect(mockOnToggle).toHaveBeenCalled();
  });

  it("displays a checked checkbox when isChecked is true", () => {
    const mockLabel = "Sample Task";
    const { container } = render(
      <SubTask label={mockLabel} isChecked={true} onToggle={() => {}} />
    );

    const checkbox = container.querySelector("input[type='checkbox']");
    expect(checkbox).toHaveAttribute("checked");
  });

  it("displays an unchecked checkbox when isChecked is false", () => {
    const mockLabel = "Sample Task";
    const { container } = render(
      <SubTask label={mockLabel} isChecked={false} onToggle={() => {}} />
    );

    const checkbox = container.querySelector("input[type='checkbox']");
    expect(checkbox).not.toHaveAttribute("checked");
  });
});
