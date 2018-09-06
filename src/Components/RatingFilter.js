import React from "react";
import { Component } from "react";
import './MovieApp.css';
import Rating from './Rating';
import {connect} from "react-redux"
class RatingFilter extends Component{
    render(){
       const {onChange=()=>{},count=0}=this.props
        return(
                <div className="rating-filter">
                    <span className="rating-filter-text">Minimum rating</span>
                    <span><Rating 
                    onChangeRating={(newRating)=>onChange(newRating)} 
                    count={count}
                    />
                    </span>
                </div>
        )}}
const mapStateToProps = state =>{
    return {
        count:state.minRatingFilter
    }
}   
const mapDispatchToProps = dispatch =>{
    return {
        onChange:(newRating)=>{
            dispatch({
                type:"SET_RATING_FILTER",
                rating:newRating
            })
        }
    }
}                               
const RatingFilterContainer = connect (mapStateToProps,mapDispatchToProps)(RatingFilter)
export default RatingFilterContainer;

