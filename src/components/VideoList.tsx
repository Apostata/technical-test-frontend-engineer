import React from "react";
interface IVideoList {
  videos: IYoutubeItem[];
  artist: ITMAtraction;
}

function VideoList({ videos, artist }: IVideoList) {
  return <article>{videos.map((video) => {})}</article>;
}
