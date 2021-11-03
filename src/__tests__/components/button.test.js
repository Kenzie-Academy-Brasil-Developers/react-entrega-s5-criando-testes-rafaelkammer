import React from "react";
import { render, screen } from "@testing-library/react";

import { Button } from "semantic-ui-react";

describe("Input component", () => {
  test("Should be able to render an button", () => {
    render(<Button>Buscar pelo CEP</Button>);

    expect(screen.getByText("Buscar pelo CEP")).toBeInTheDocument();
  });
});
