import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../reducer/store";
import { UsersList } from "./user-list";

describe("user-list Component", () => {
  test("should be rendered", async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <UsersList />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.findAllByAltText(/Lista de usuarios/i));
  });
});
