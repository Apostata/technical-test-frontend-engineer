/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import SearchItem from "./SearchItem";
import userEvent from "@testing-library/user-event";

describe("<SearchItem />", () => {
  test("Should render the component without problems", () => {
    const setQueryStingMock = jest.fn();

    render(<SearchItem setQuerySting={setQueryStingMock} ativo={true} />);
    const searchInput = screen.getByRole("textbox");
    const searchButton = screen.getByRole("button");

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  test("Should call submit function when click in submit button", () => {
    const setQueryStingMock = jest.fn();
    render(<SearchItem setQuerySting={setQueryStingMock} ativo={true} />);
    const searchInput = screen.getByRole("textbox");
    const searchButton = screen.getByRole("button");

    userEvent.clear(searchInput);
    userEvent.type(searchInput, "iron maiden");
    userEvent.click(searchButton);
    expect(setQueryStingMock).toBeCalledTimes(1);
  });
});
