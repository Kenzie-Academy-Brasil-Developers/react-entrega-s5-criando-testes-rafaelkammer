import React from "react";
import { render, screen } from "@testing-library/react";

import { Input } from "semantic-ui-react";

describe("Input component", () => {
  test("Should be able to render an input", () => {
    render(<Input type="number" placeholder="Insira o CEP" />);

    expect(screen.getByPlaceholderText("Insira o CEP")).toBeTruthy();
  });
});
