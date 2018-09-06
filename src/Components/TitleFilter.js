import React from "react";
import { Component } from "react";
import './MovieApp.css';
import {connect} from 'react-redux';

class TitleFilter extends Component{
        
    render(){
       const {onchange=()=>{}, value=''}=this.props
        return(
                <div className="name-filter">
                   
                   <input className="name-filter-text"  
                            type="text" 
                            value={value} 
                            onChange={(event)=>onchange(event.target.value)}  />
                 
                </div>
        )}}
const mapStateToProps = state =>{
      return{
             value:state.titleFilter 
            }  
}
const mapDispatchToProps = dispatch =>{
        return{
               onchange:(newTitleFilter)=>{
                        dispatch ({
                        type:'SET_TITLE_FILTER',
                        title:newTitleFilter
                        })
               }
              }  
  }
const TitleFilterContainer = connect(mapStateToProps,mapDispatchToProps)(TitleFilter)
export default TitleFilterContainer;