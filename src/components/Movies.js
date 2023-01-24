import React, { Component } from "react";
import axios from "axios";
import { IMG_URL, MOVIE_API_URL } from "./constant";
import { Link } from "react-router-dom";
export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      hover: "",
      pageArr: [1],
      currPage: 1,
      movies: [],
      favourites: [],
    };
    // console.log("constructor");
  }
  async componentDidMount() {
    // here we do side effect work , like we will request and then wait   like async work
    const res = await axios.get(MOVIE_API_URL + this.state.currPage);
    // console.log(res.data.results, " &&&&&");
    this.setState({
      movies: [...res.data.results],
    });
  }

  changeMovies = async () => {
    // try calling componentdidmout
    const res = await axios.get(MOVIE_API_URL + this.state.currPage);
    // console.log(res.data.results, " &&&&&");
    this.setState({
      movies: [...res.data.results],
    });
  };

  handelNext = () => {
    if (this.state.currPage !== this.state.pageArr.length) {
      this.setState(
        {
          currPage: this.state.currPage + 1,
        },
        this.changeMovies
      );
    } else {
      let tempArr = [];
      for (let i = 1; i <= this.state.pageArr.length + 1; i++) {
        tempArr.push(i);
      }
      this.setState(
        {
          pageArr: [...tempArr],
          currPage: this.state.currPage + 1,
        },
        this.changeMovies
      );
      console.log(" handel Next called ");
      // this.changeMovies();
    }
  };
  handelPrev = () => {
    if (this.state.currPage !== 1) {
      this.setState(
        {
          currPage: this.state.currPage - 1,
        },
        this.changeMovies
      );
    }
  };

  handelFavourite = (movie) => {
    let oldData = JSON.parse(localStorage.getItem("movies") || "[]");
    //console.log(oldData);
    if (this.state.favourites.includes(movie.id)) {
      oldData = oldData.filter((m) => m.id !== movie.id);
    } else {
      oldData.push(movie);
    }
    localStorage.setItem("movies", JSON.stringify(oldData));

    let temp = oldData.map((m) => m.id);
    this.setState({
      favourites: [...temp],
    });
    //console.log(oldData);
  };

  handelClick = (val) => {
    // console.log(e.target.innerHTML)
    this.setState(
      {
        currPage: val,
      },
      this.changeMovies
    );
  };

  render() {
    // console.log("render");
    // console.log(this.state.movies,'  *****')
    return (
      <div className="body">
        <h1>Trending Movies</h1>
        {this.state.movies.length === 0 ? (
          <div>Loader</div>
        ) : (
          <div>
            {this.state.movies.map((movie) => {
              
              return (
                <div
                  className="movies"
                  key={movie.title}
                  onMouseLeave={() => {
                    this.setState({
                      hover: "",
                    });
                  }}
                  onMouseEnter={() => {
                    this.setState({
                      hover: movie.id,
                    });
                  }}
                >
                  <div className="movie_card">
                    <Link
                      to="/movie_details"
                      state = {{movieData: movie}}
                      
                      style={{ textDecoration: "none", color: "black" }}

                    >
                      <img src={IMG_URL + movie.poster_path} alt="movieImage" />
                    </Link>
                    <h5>{movie.title}</h5>
                    <h6>Release: {movie.release_date}</h6>
                    <h6>Rating {movie.vote_average}</h6>
                    {this.state.hover === movie.id && (
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          this.handelFavourite(movie);
                        }}
                      >
                        {this.state.favourites.includes(movie.id)
                          ? "Remove from Fav"
                          : "Add to Favourites"}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <div className="pagination">
          <button onClick={this.handelPrev}>Previous</button>

          {this.state.pageArr.map((no) => {
            return (
              <button key={no} onClick={() => this.handelClick(no)}>
                {no}
              </button>
            );
          })}
          <button onClick={this.handelNext}>Next</button>
        </div>
      </div>
    );
  }
}
