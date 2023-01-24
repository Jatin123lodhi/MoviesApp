import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Favourites from "./components/Favourites";
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/movie_details" element={<MovieDetails/>}  />
          <Route path="/" element={<div><Banner/><Movies/></div>} />
          <Route path="/favourites" element={<Favourites/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
