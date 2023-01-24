import React, { Component } from "react";
import { movies_data,IMG_URL } from "./constant";
export default class Favourites extends Component {
  
  constructor(){
    super();
    this.state = {
      genres: [],
      currGen: 'All Genre',
      favMovies : []
    }
  }

  handelDelete = (movie)=>{
    console.log('delete ',movie)
    let storedData = JSON.parse(localStorage.getItem('movies'));
    console.log(storedData,'   storeddata before  delete')
    storedData = storedData?.filter((m)=>m.id!==movie.id );
    console.log(storedData,'   storeddata')
    this.setState({
      favMovies : storedData
    })
    localStorage.setItem('movies',JSON.stringify(storedData));
    //change the state of fav movies as we delete it
    //when we are redering fav moives from local storage we should also set it in a state variable
  }
  
  render() {
    let movies = JSON.parse(localStorage.getItem('movies')|| "[]")
    // let movies = movies_data.results;
    
    let genreids = { 28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary',  18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History', 27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-fi', 10770: 'TV', 53: 'Thriller', 10752: 'War', 37: 'Western' };
    let temp = [];
    movies.map((movie)=>{
      if(!temp.includes(genreids[movie.genre_ids[0]])){
        temp.push(genreids[movie.genre_ids[0]]);
      }
    });
    temp.unshift('All Genre');
    // this.setState({                 may be if state changes then render method will be called and infinite loop willl run
    //   genres: [...temp]
    // })
    console.log(temp,' temp')
    return (
      
      <div className="favourite">
        <h3 style={{marginBottom: "30px"}}>Favourites</h3>
        <div className="container">
          <div className="row">
            <div className="col-3 ">
              <ul className="list-group">
                {
                  temp.map((genre)=>{
                     return this.state.currGen===genre ? <li className="list-group-item" key={genre} style={{backgroundColor: '#4064AC',color:'white',fontWeight:'bold'}}>{genre}</li>:
                     <li className="list-group-item" key={genre} style={{ color:'#4064AC'}}>{genre}</li>
                  })
                }
                
              </ul>
            </div>
            <div className="col-9 ">
              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    placeholder="Search"
                    className="form-control"
                  />
                </div>
                <div className="col-6">
                  <input
                    type="number"
                    placeholder="Top N records"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Genre</th>
                      <th scope="col">Popularity</th>
                      <th scope="col">Rating</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      movies.map((movie)=>{
                        {/* console.log(movie) */}
                        return (
                          <tr key={movie.id}>   
                            <td><img style={{width:"50px"}} src={IMG_URL + movie.poster_path} alt="movieImage" /> {movie.title}</td>
                            <td>{genreids[movie.genre_ids[0]] }</td>
                            <td>{movie.popularity}</td>
                            <td>{movie.vote_average}</td>
                            <td><button className="btn btn-danger" onClick={()=>{this.handelDelete(movie)}}>Delete</button></td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div style={{display:"flex" ,justifyContent: "center"}}>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item"><a className="page-link" href="#">Previous</a></li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
