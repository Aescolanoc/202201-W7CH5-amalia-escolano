import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../reducer/store";
import { SessionInfo } from "./session-info";

describe("user-list Component", () => {
  test("should be rendered", async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <SessionInfo />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.findAllByAltText(/Bienvenid@/i));
    expect(screen.findAllByRole("figure"));
  });
});
