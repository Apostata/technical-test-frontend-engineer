import React from "react";
import { YouTubeProvider } from "./providers/youtube.provider";
import { TMProvider } from "./providers/tocketMaster.provider";
import FormPage from "./pages/FormPage";

function App() {
  return (
    <YouTubeProvider>
      <TMProvider>
        <FormPage />
      </TMProvider>
    </YouTubeProvider>
  );
}

export default App;
