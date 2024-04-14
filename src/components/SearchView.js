import { Link } from 'react-router-dom';
import Hero from './Hero';

const MovieCard = ({ movie }) => {
  const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Poster+Available';
  const detailUrl = `/movies/${movie.id}`;

  return(
      <div className="col-lg-3 col-md-3 col-2 my-4 ">
          <div className="card">
              {movie.poster_path ? (
                  <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
              ) : (
                  <div className="card-body">
                      <h5 className="card-title">{movie.original_title}</h5>
                      <p className="card-text">No poster available</p>
                  </div>
              )}
              <div className="card-body">
                  <Link to={detailUrl} className="btn btn-primary btn-show-details" >Show Details</Link>
              </div>
          </div>
      </div>
  );
}



const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;
  
  let resultsHtml;
  if (searchResults.length === 0) {
      resultsHtml = (
          <div className="container my-5">
              <p className="lead">No movies found for '{keyword}'</p>
          </div>
      );
  } else {
      resultsHtml = (
          <div className='container'>
              <div className='row'>
                  {searchResults.map((obj, i) => (
                      <MovieCard movie={obj} key={i} />
                  ))}
              </div>
          </div>
      );
  }
  
  return (
      <>
          <Hero text={title}/>
          {resultsHtml}
      </>
  );
}

export default SearchView;
