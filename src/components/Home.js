import { useState, useEffect } from 'react';
import Hero from './Hero';

const Home = () => {
    const [featuredMovies, setFeaturedMovies] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=1e77157cdc2fb9c12ac77c06839e1f72`)
            .then(response => response.json())
            .then(data => {
                setFeaturedMovies(data.results.slice(0, 16)); // Displaying only 16 featured movies
            })
            .catch(error => console.error('Error fetching featured movies:', error));
    }, []);

    return (
        <>
            <Hero text="Discover Your Next Favorite Movie" />
            <div className="container my-5">
                <h2 className="mb-4 text-center">Trending Now</h2>
                <div className="row">
                    {featuredMovies.map(movie => (
                        <div key={movie.id} className="col-md-3 mb-4">
                            <div className="card h-100">
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.original_title}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;
