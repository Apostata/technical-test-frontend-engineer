import React from "react";
import { Container } from "react-bootstrap";
import VideoItem from "../VideoItem/VideoItem";
import Styles from "./VideoList.module.css";

interface IVideoList {
  videos: IYoutubeItem[];
  artist: ITMAtraction;
  ativo: boolean;
}

export default function VideoList({ videos, artist, ativo }: IVideoList) {
  return (
    <Container className={[Styles.VideoList, ativo && Styles.ativo].join(" ")}>
      {videos.map((video, idx) => (
        <VideoItem
          key={video.id.videoId}
          video={video}
          artist={artist}
          indice={idx + 1}
        />
      ))}
    </Container>
  );
}
