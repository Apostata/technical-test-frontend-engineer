import React, { useEffect, useState } from "react";
import SearchItem from "../components/SearchItem";
import { useTMContext } from "../providers/tocketMaster.provider";
import { useYouTubeContext } from "../providers/youtube.provider";

export default function FormPage() {
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
    if (videos.length !== 0 && !loadedArtist) {
      getArtist(queryString as string);
    }
  }, [videos]);

  useEffect(() => {
    if (artist && !loadedArtist) {
      setLoadedArtist(true);
    }
  }, [artist]);

  const setQuerySting = (queryStrting: string) => {
    const newString = queryStrting.trim().toLowerCase();
    if (newString) {
      setQueryString(newString);
      setLoadedArtist(false);
    } else {
      setQueryString(null);
      setLoadedArtist(true);
    }
  };

  return (
    <>
      <SearchItem setQuerySting={setQuerySting} />
      <h1>Teste {videos.length}</h1>
      {artist && <p>{artist?.name}</p>}
    </>
  );
}
