import React from "react";
import { createContext, useState, useContext, ReactChild } from "react";
import { searchTmArtist } from "../services/ticketMaster.service";
import { tikectMasterMock } from "../mocks/tikcetMaster.mock";
interface ContextValue {
  artist: ITMAtraction | null;
  getArtist: (queryString: string) => Promise<void>;
}

export const TMContext = createContext<ContextValue | null>(null);

export const TMProvider = ({ children }: { children: ReactChild }) => {
  const [artist, setArtist] = useState<ITMAtraction | null>(null);

  const getArtist = async (queryString: string): Promise<void> => {
    clearArtist();
    try {
      const resp = await searchTmArtist(queryString);
      // const resp = await tikectMasterMock._embedded.attractions[0];
      setArtist(resp as ITMAtraction);
    } catch (error) {
      console.log(error);
    }
  };

  const clearArtist = () => {
    setArtist(null);
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
