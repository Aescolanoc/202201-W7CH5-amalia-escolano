import { render } from "../utils/test-utils";
import { screen } from "@testing-library/react";

import { RelationButton } from "./relation-butoon";

describe("RelationButton Component", () => {
  test("should be rendered", () => {
    render(<RelationButton />);
    expect(screen.findAllByAltText(/Cambiar relacion/i));
  });
});
