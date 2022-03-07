import React from "react";
import { render } from "./utils/test-utils";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

test("renders learn react link", () => {
  const { getByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(getByText(/FLUXBOOK/i)).toBeInTheDocument();
});
