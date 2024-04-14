import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';
import NotFound from './components/NotFound';
import {Route, Routes } from 'react-router-dom';

const apiKey = process.env.REACT_APP_API_KEY; //use your own api key.


function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if(searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=${apiKey}`)
      .then(Response => Response.json())
      .then(data => {
        setSearchResults(data.results);
      })
    }
    
  }, [searchText])

  return (
    <div>
      <Navbar searchText={searchText} setSearchText = {setSearchText} />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults} />} />
        <Route path="/movies/:id" element={<MovieView />} />
        <Route path="*" element={<NotFound />} /> {/* Wildcard route for 404 page */}
      </Routes>
    </div>
  );
}

export default App;


