import React from "react";
import { createContext, useState, useContext, ReactChild } from "react";
import { searchTmArtist } from "../services/ticketMaster.service";

interface ContextValue {
  artist: ITMAtraction | null;
  getArtist: (queryString: string) => Promise<void>;
}

export const TMContext = createContext<ContextValue | null>(null);

export const TMProvider = ({ children }: { children: ReactChild }) => {
  const [artist, setArtist] = useState<ITMAtraction>({} as ITMAtraction);

  const getArtist = async (queryString: string): Promise<void> => {
    try {
      const resp = await searchTmArtist(queryString);
      setArtist(resp as ITMAtraction);
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TMContext.Provider value={{ artist, getArtist }}>
      {children}
    </TMContext.Provider>
  );
};

export const useTMContext = () => {
  const context = useContext(TMContext);
  if (!context) {
    throw new Error("Must be used within an TMContext!");
  }

  return context;
};
