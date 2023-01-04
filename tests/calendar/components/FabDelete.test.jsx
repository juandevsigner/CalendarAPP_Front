import { fireEvent, render, screen } from "@testing-library/react";
import { FabDelete } from "../../../src/calendar/components/FabDelete";
import { useCalendarStore } from "../../../src/hooks";
jest.mock("../../../src/hooks/useCalendarStore");

describe("Test FabDelete Button", () => {
  const mockStartDelete = jest.fn();
  beforeEach(() => jest.clearAllMocks());

  it("Should show component correctly", () => {
    useCalendarStore.mockReturnValue({
      hasEventSelected: false,
    });
    render(<FabDelete />);
    const btn = screen.getByLabelText("btn-delete");
    expect(btn.classList).toContain("btn");
    expect(btn.classList).toContain("btn-danger");
    expect(btn.classList).toContain("fab-danger");
    expect(btn.style.display).toBe("none");
  });

  it("Should show button if there is an event active", () => {
    useCalendarStore.mockReturnValue({
      hasEventSelected: true,
    });
    render(<FabDelete />);
    const btn = screen.getByLabelText("btn-delete");
    expect(btn.style.display).toBe("");
  });
  it("should call function when clicked", () => {
    useCalendarStore.mockReturnValue({
      hasEventSelected: true,
      startDeletingEvent: mockStartDelete,
    });
    render(<FabDelete />);
    const btn = screen.getByLabelText("btn-delete");
    fireEvent.click(btn);
    expect(mockStartDelete).toHaveBeenCalled();
  });
});
