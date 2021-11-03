import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Search from "../../components/Search";
import api from "../../services";
import MockAdapter from "axios-mock-adapter";
import Providers from "../../providers";

const apiMock = new MockAdapter(api);

describe("Search", () => {
  test("Should be able to search an adress with a cep", async () => {
    apiMock.onPost("/cep").replyOnce(200, []);
    render(
      <Providers>
        <Search />
      </Providers>
    );
    const input = screen.getByPlaceholderText("Insira o CEP");
    fireEvent.change(input, { target: { value: 81940080 } });

    const button = screen.getByText("Buscar pelo CEP");
    fireEvent.click(button);

    await waitFor(() => {
      expect(input).toHaveValue(81940080);
    });
  });
});
