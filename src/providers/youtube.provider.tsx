import React from "react";
import { createContext, useState, useContext, ReactChild } from "react";
import { searchYoutubeVideos } from "../services/youtube.service";
// criando contexto

interface ContextValue {
  videos: IYoutubeItem[];
  getVideos: (queryString: string) => Promise<void>;
}

export const YouTubeContext = createContext<ContextValue | null>(null);

export const YouTubeProvider = ({ children }: { children: ReactChild }) => {
  const [videos, setVideos] = useState<IYoutubeItem[]>([]);

  const getVideos = async (queryString: string): Promise<void> => {
    try {
      const resp = await searchYoutubeVideos(queryString);
      setVideos(resp ?? []);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <YouTubeContext.Provider value={{ videos, getVideos }}>
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
