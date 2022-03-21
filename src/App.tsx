import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { globalCss } from "./stitches.config";
import { Layout } from "./components/Layout";
import { Home } from "./routes/Home";
import { setAnimalsOnLoad } from "./util/localStorage";

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
  useEffect(() => {
    console.log("App useEffect");
    setAnimalsOnLoad();
  }, []);

  globalStyles();

  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}
