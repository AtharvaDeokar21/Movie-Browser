import { useState } from "react";
import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const apiKey = process.env.REACT_APP_API_KEY;

const MovieView = () => {
    const {id} = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                setMovieDetails(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching movie details:', error);
                setIsLoading(false);
            });
    }, [id]);

    function renderMovieDetails() {
        if (isLoading) {
            return <Hero text="Loading..." />;
        }
        if (movieDetails) {
            const backdropUrl = movieDetails.backdrop_path ? `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}` : 'https://via.placeholder.com/500x750?text=No+Poster+Available';
            return (
                <>
                    <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-3">
                                {movieDetails.poster_path ? (
                                    <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.original_title} className="img-fluid shadow rounded" />
                                ) : (
                                    <img src="https://via.placeholder.com/500x750?text=No+Poster+Available" alt="Generic Poster" className="img-fluid shadow rounded" />
                                )}
                            </div>
                            <div className="col-md-9">
                                <h2>{movieDetails.original_title}</h2>

                                <p className="lead">{movieDetails.overview}</p>
                                <p><strong>Release Date:</strong> {movieDetails.release_date}</p>
                                <p><strong>Genres:</strong> {movieDetails.genres.map(genre => genre.name).join(', ')}</p>
                                <p><strong>Runtime:</strong> {movieDetails.runtime} minutes</p>

                                {movieDetails.tagline && <p><strong>Tagline:</strong> {movieDetails.tagline}</p>}

                                {movieDetails.spoken_languages.length > 0 && <p><strong>Languages:</strong> {movieDetails.spoken_languages.map(lang => lang.name).join(', ')}</p>}
                                
                                {movieDetails.production_countries.length > 0 && <p><strong>Production Countries:</strong> {movieDetails.production_countries.map(country => country.name).join(', ')}</p>}
                            </div>
                        </div>
                    </div>
                </>
            );
        }
    }

    return renderMovieDetails();
}

export default MovieView;
