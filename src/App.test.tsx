/**
 * @jest-environment jsdom
 */

import React, { ComponentType, ReactElement } from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { YouTubeProvider } from "./providers/youtube.provider";
import { TMProvider } from "./providers/tocketMaster.provider";
import userEvent from "@testing-library/user-event";

const WhithAllProviders = ({ children }: { children: ReactElement }) => {
  return (
    <YouTubeProvider>
      <TMProvider>{children}</TMProvider>
    </YouTubeProvider>
  );
};

describe("<App />", () => {
  test("Should render Home page without error", () => {
    render(<App />, {
      wrapper: WhithAllProviders as ComponentType<{}>,
    });
    const searchInput = screen.getByRole("textbox");
    const searchButton = screen.getByRole("button");
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  test("[Integration] Should retrieve 20 itens on submit a search in Home page", async () => {
    render(<App />, {
      wrapper: WhithAllProviders as ComponentType<{}>,
    });
    const searchInput = screen.getByRole("textbox");
    const searchButton = screen.getByRole("button");

    userEvent.clear(searchInput);
    userEvent.type(searchInput, "iron maiden");
    userEvent.click(searchButton);

    const videoItens = await screen.findAllByRole("img");
    expect(videoItens.length).toBe(20);
  });
});
