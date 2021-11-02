/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import VideoItem from "./VideoItem";
import { youtubeMock } from "../../mocks/youtube.mock";
import { tikectMasterMock } from "../../mocks/tikcetMaster.mock";

describe("<VideoItem>", () => {
  test("Should render the item without problems", () => {
    render(
      <VideoItem
        video={youtubeMock.items[0]}
        artist={tikectMasterMock._embedded.attractions[0]}
      />
    );
    const videoItens = screen.getByRole("img");
    expect(videoItens).toBeInTheDocument();
  });
});
