import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { FabDelete } from "../../../src/calendar/components/FabDelete";

describe("Test FabDelete Button", () => {
  it("Should show component correctly", () => {
    render(
      <Provider store={store}>
        <FabDelete />
      </Provider>
    );
  });

  it("", () => {});
});
