import {
  onCloseDateModal,
  onOpenDateModal,
  uiSlice,
} from "../../../src/store/ui/uiSlice";

describe("Test Ui Slice", () => {
  it("Should default state", () => {
    expect(uiSlice.getInitialState()).toEqual({ isDateModalOpen: false });
  });

  it("Should change isDateModalOpen correctly", () => {
    let state = uiSlice.getInitialState();
    state = uiSlice.reducer(state, onOpenDateModal());
    expect(state).toBeTruthy();
    state = uiSlice.reducer(state, onCloseDateModal());
    expect(state.isDateModalOpen).toBeFalsy();
  });
});
