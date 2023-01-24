import React from "react";

const Banner = () => {
  let movies= '';
  return (
    <>
    { movies === 'vb' ? 
    <div>Loader</div>:
    <div className="card banner" >
      <img className="card-img-top" src="https://i.ytimg.com/vi/P-LjBzcd6jU/maxresdefault.jpg" alt="Card image cap" />
      <div className="card-body">
        <h1 className="card-title title">Drishyam 2</h1>
        <p className="card-text">
        Drishyam 2 is a 2022 Indian Hindi-language crime thriller film directed by Abhishek Pathak, based on the 2021 Malayalam film of the same name, and a sequel to the 2015 film Drishyam, which in turn was adapted from the 2013 eponymous Malayalam film.
        </p>
        
      </div>
    </div>}
    </>
  );
};

export default Banner;
//https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jurassic-park-movies-in-order-2018-jurassic-world-fallen-kingdom-1655123535.jpeg