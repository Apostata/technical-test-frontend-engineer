/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import VideoList from "./VideoList";
import { youtubeMock } from "../../mocks/youtube.mock";
import { tikectMasterMock } from "../../mocks/tikcetMaster.mock";

describe("<VideoList>", () => {
  test("Should return 20 itens with the given data", () => {
    render(
      <VideoList
        videos={youtubeMock.items}
        artist={tikectMasterMock._embedded.attractions[0]}
        ativo={true}
      />
    );
    const videoItens = screen.getAllByRole("img");
    expect(videoItens.length).toBe(20);
  });
});
