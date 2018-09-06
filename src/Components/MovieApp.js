import React from "react";
import { Component } from "react";
import './MovieApp.css';
import MovieList from './MovieList';
import TitleFilter from './TitleFilter';
import RatingFilter from './RatingFilter';
class MovieApp extends Component{
    render(){
        return(
            <div className="movie-app">
                <header className="movie-app-header">
                <TitleFilter/>
                <RatingFilter />
                </header>
                <main className="movie-app-main">
                <MovieList/>
                </main>
            </div>
        )
    }
}

export default MovieApp;