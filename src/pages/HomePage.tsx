import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Header } from "../components/Header/Header";
import SearchItem from "../components/SearchItem/SearchItem";
import VideoList from "../components/VideoList/VideoList";
import { useTMContext } from "../providers/tocketMaster.provider";
import { useYouTubeContext } from "../providers/youtube.provider";

export default function HomePaage() {
  const { videos, getVideos } = useYouTubeContext();
  const { artist, getArtist } = useTMContext();
  const [queryString, setQueryString] = useState<string | null>(null);
  const [loadedArtist, setLoadedArtist] = useState(false);

  useEffect(() => {
    if (queryString) {
      getVideos(queryString);
    }
  }, [queryString]);

  useEffect(() => {
    console.log(videos);
    if (videos.length !== 0) {
      getArtist(queryString as string);
      setLoadedArtist(false);
    }
  }, [videos]);

  useEffect(() => {
    console.log(artist);
    if (artist) {
      setLoadedArtist(true);
    }
  }, [artist]);

  const setQuerySting = (queryStrting: string) => {
    const newString = queryStrting.trim().toLowerCase();
    if (newString) {
      setQueryString(newString);
    } else {
      setQueryString(null);
      setLoadedArtist(false);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <SearchItem setQuerySting={setQuerySting} ativo={loadedArtist} />
        {artist && (
          <VideoList videos={videos} artist={artist} ativo={loadedArtist} />
        )}
      </Container>
    </>
  );
}
