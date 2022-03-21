import { Route, Routes, useLocation } from "react-router-dom";

import { globalCss } from "./stitches.config";
import { Layout } from "./components/Layout";
import { HomePage } from "./routes/HomePage";
import { AnimalPage } from "./routes/AnimalPage";

const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  html: {
    fontFamily: "$Rubik",
    backgroundColor: "$pink2",
  },
});

export default function App() {
  const location = useLocation();

  // The `backgroundLocation` state is the location that we were at when one of
  // the gallery links was clicked. If it's there, use it as the location for
  // the <Routes> so we show the gallery in the background, behind the modal.
  const state = location.state as { backgroundLocation?: Location };

  globalStyles();

  return (
    <Layout>
      <Routes location={state?.backgroundLocation || location}>
        <Route index element={<HomePage />} />
      </Routes>

      {/* Show the modal when a `backgroundLocation` is set */}
      {state?.backgroundLocation && (
        <Routes>
          <Route path="/:id" element={<AnimalPage />} />
        </Routes>
      )}
    </Layout>
  );
}
