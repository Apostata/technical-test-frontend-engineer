/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("<Header />", () => {
  test("Should render the component without problems", () => {
    const setQueryStingMock = jest.fn();

    render(<Header />);
    const searchLogo = screen.getByTestId("logo");

    expect(searchLogo).toBeInTheDocument();
  });
});
