import React from "react";
import { Component } from "react";
import './MovieApp.css';
import MovieCard from './MovieCard';

import {connect} from 'react-redux'

class MovieList extends Component{

    render(){
        const {onAddMovie=()=>{},movies=[]}=this.props
        return(
            <div className="movie-list">
            {
                movies.map((el,i)=>{
  
                    return(
         
                        <MovieCard key={el.id} movie={el}/>
    
                    )
                    
                })
            }
            <div className="new-movie-card" 
            onClick={ onAddMovie}>
            +
            </div> 
        </div>
       

        )}}
const mapStateToProps = state =>{
            return{
                movies:state.movies.filter(
                            el => 
                            (el.rating >= state.minRatingFilter) 
                            &&
                            (el.title.toLowerCase().includes(state.titleFilter.toLowerCase().trim()))
                            )
            }
        }
        

 const mapDispatchToProps = dispatch => {
            return{
                onAddMovie : () => {
                    
                    dispatch ({
                                type:'ADD_MOVIE',
                                movie:{
                                    id:prompt('donner l id'),
                                    title:prompt('donner le nom') ,
                                    rating:prompt('donner le raiting'),
                                    image:prompt('donner le image'),
                                    year:prompt('donner le anneé')
                                }
                        })
                }
            }
        }

const MovieListContainer = connect (mapStateToProps,mapDispatchToProps)(MovieList)        
export default MovieListContainer;
