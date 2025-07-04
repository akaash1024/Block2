import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import ThemeApp from "../Q1/ThemeApp.jsx";
import QuoteGenerator from "../Q2/QuoteGenerator.jsx";
import UserProfiles from "../Q3/UserProfiles.jsx";
import Stopwatch from "../Q4/Stopwatch.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeApp />
    <QuoteGenerator />
    <UserProfiles />
    <Stopwatch />
  </StrictMode>
);
