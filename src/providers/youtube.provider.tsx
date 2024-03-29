import React from "react";
import { createContext, useState, useContext, ReactChild } from "react";
import { searchYoutubeVideos } from "../services/youtube.service";
import { youtubeMock } from "../mocks/youtube.mock";
// criando contexto

interface ContextValue {
  videos: IYoutubeItem[];
  getVideos: (queryString: string) => Promise<void>;
  clearVideos: () => void;
}

export const YouTubeContext = createContext<ContextValue | null>(null);

export const YouTubeProvider = ({ children }: { children: ReactChild }) => {
  const [videos, setVideos] = useState<IYoutubeItem[]>([]);

  const getVideos = async (queryString: string): Promise<void> => {
    clearVideos();
    try {
      const resp = await searchYoutubeVideos(queryString);
      // const resp = await youtubeMock.items;
      setVideos(resp ?? []);
    } catch (error) {
      console.log(error);
    }
  };

  const clearVideos = () => {
    setVideos([]);
  };

  return (
    <YouTubeContext.Provider value={{ videos, getVideos, clearVideos }}>
      {children}
    </YouTubeContext.Provider>
  );
};

export const useYouTubeContext = () => {
  const context = useContext(YouTubeContext);
  if (!context) {
    throw new Error("Must be used within an YouTubeContext!");
  }

  return context;
};
