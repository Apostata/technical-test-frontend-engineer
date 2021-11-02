import React from "react";
import { YouTubeProvider } from "./providers/youtube.provider";
import { TMProvider } from "./providers/tocketMaster.provider";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <YouTubeProvider>
      <TMProvider>
        <HomePage />
      </TMProvider>
    </YouTubeProvider>
  );
}

export default App;
