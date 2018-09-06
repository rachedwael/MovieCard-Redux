import React from "react";
import { Component } from "react";
import './MovieApp.css';


class Rating extends Component{
    constructor(props)
    {
        super(props)
    }
    render(){
        const {count,onChangeRating=()=>{}}=this.props
        let stars=[]
        for(let i=0; i< 5;i++)
        {if (i<count)
            {stars.push(<span key={i} onClick={()=>onChangeRating(i+1)}>★</span>)}
        else stars.push(<span key={i} onClick={()=>onChangeRating(i+1)}>☆</span>)
        }
        return(
        <div className="">
       {stars}
        </div>
       

        )
    }
}
export default Rating;
