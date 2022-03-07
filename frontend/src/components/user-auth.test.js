import { render, screen } from "../utils/test-utils";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../reducer/store";
import { UserAuth } from "./user-auth";
import userEvent from "@testing-library/user-event";

describe("user-auth Component", () => {
  test("should be rendered", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <UserAuth />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.findAllByAltText(/Introduzca sus datos/i));
    expect(screen.findAllByRole("button"));
  });
  test("testing buttons", () => {
    const button = screen.findByText("Cerrar sesion");

    expect(button).toBeTruthy();
  });
});
