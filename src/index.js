import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";

const App = () => {
  return (
    <BrowserRouter>
     <SiteHeader />
      <Routes>
        <Route path="/movies/favourites" element={<FavouriteMoviesPage/>}/>
        <Route path="/movies/upcoming" element={<UpcomingMoviesPage/>}/>
        <Route path="/movies/:id" element={<MoviePage/>} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/reviews/:id" element={<MovieReviewPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));