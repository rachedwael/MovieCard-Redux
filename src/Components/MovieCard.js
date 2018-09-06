import React from "react";
import { Component } from "react";
import './MovieApp.css';
import Rating from './Rating';
import {connect} from 'react-redux'


class MovieCard extends Component{
    constructor(props)
    {
        super(props)
    }
    render(){
    const {movie = {}} = this.props
    const {
        id,
        title = '',
        year = '',
        image = 'https://www.mearto.com/assets/no-image-83a2b680abc7af87cfff7777d0756fadb9f9aecd5ebda5d34f8139668e0fc842.png',
        rating = 0
          } = movie


    const {deleteMovie=()=>{},editMovie=()=>{}}=this.props

        return(  
            <div className="movie-card" >
                <div className="movie-delete-button" onClick={()=>deleteMovie(id)}>X</div>
                <div className="movie-edit-button" onClick={()=>editMovie(movie)}>Edit</div>
                <div className="movie-rating"><Rating count={rating} /></div>
                <div
                    className="movie-image"
                    style={{
                    backgroundImage:
                        `url('${image}')`
                    }}
                />
                <div className="movie-description">{title} - {year}</div>
            </div>
        )}}


const mapDispatchToProps = dispatch =>{
            return{
                deleteMovie : (idMovie)=>{
                    dispatch ({
                        type:'DELETE_MOVIE',
                        id:idMovie
                    })
                },
                editMovie : (movie)=>{
                    dispatch ({
                        type:'EDIT_MOVIE',
                        id:movie.id,
                        movie:{
                            id:movie.id,
                            title:prompt('donner le nom',movie.title) ,
                            rating:prompt('donner le raiting',movie.rating),
                            image:prompt('donner le image',movie.image),
                            year:prompt('donner le anneé',movie.year)
                        }
                    })
                }

                
            }
}

const  MovieCardContainer = connect(null,mapDispatchToProps)(MovieCard)
export default MovieCardContainer;




