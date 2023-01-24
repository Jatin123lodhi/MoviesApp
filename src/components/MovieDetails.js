import React, { Component } from "react";
import { IMG_URL } from "./constant";
import { useLocation } from "react-router-dom";
 const MovieDetails  = ()=> {
    
    const location = useLocation();
    // console.log('location Object ',location)
    const {movieData}  = location.state;
    console.log(movieData,'  movieData');
    return (
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-4">
               
              <img
                src={IMG_URL + movieData.backdrop_path}
                alt="movieImg"
                style={{ width: "90%",border:'1px solid grey',backgroundColor:'grey',height:'550px' }}
              />
            </div>
            {/* <div className="col-1"></div> */}
            
            <div className="col-8">
              <h1>{movieData.title}</h1>
              <p></p>
               
              <div className="container mb-5 mt-3">
                <div className="row">
                  <div className="col">Popularity</div>
                  <div className="col">Release Date</div>
                  <div className="col">Vote Avg</div>
                  <div className="col">Language</div>
                  <div className="col">Adult</div>
                </div>
                <div className="row">
                  <div className="col">{movieData.popularity}</div>
                  <div className="col">{movieData.release_date}</div>
                  <div className="col">{movieData.vote_average}</div>
                  <div className="col">{movieData.original_language}</div>
                  <div className="col">{ movieData.adult ? "Yes" : "No" }</div>
                </div>
              </div>
              <h4>Overview</h4>
              <p>
                 {movieData.overview}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  
}
export default MovieDetails