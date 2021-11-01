/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import { ReactElement } from "react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

// const renderWithRouter = (ui: ReactElement, { route = "/" } = {}) => {
//   window.history.pushState({}, "Home", route);

//   return render(ui, { wrapper: MemoryRouter });
// };

test("Render Home", async () => {
  //   renderWithRouter(<App />);
  render(<App />);
  const titulo = await screen.findByRole(`heading`, {
    name: /Teste/i,
  });
  expect(titulo).toBeInTheDocument();
});
