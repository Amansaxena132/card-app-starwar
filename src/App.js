import React from "react";

import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
const Home = lazy(() => import("./Pages/Home"));
const Characters = lazy(() => import("./Pages/Characters"));
const CharacterDetailsPage = lazy(() =>
  import("./Components/CharacterDetailsPage")
);
// const ProductDetails = lazy(() => import('./Pages/ProductDetails'));
//const NoMatch = lazy(() => import('./Components/NoMatch'));

const App = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<div className="container">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/char" element={<Characters />} />
          <Route path="/chars" element={<CharacterDetailsPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
