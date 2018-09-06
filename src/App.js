import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieApp from './Components/MovieApp';
import {connect} from 'react-redux';
import store from './store'

class App extends Component {
  render() {
 

    const {loading , onChangeLoading=()=>{}}=this.props
    
    return (

      <div className="App" onLoad={setTimeout(()=>onChangeLoading() , 3000)} >
      { 
       loading ? <div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
       :<div className="App"> 
         <MovieApp />
        </div>
      } 
      </div> 
    );
  }
  
}

const mapStateToProps=state=>{
  return{
   loading:state.loadingContent
  }
}
const mapDispatchToProps=dispatch=>{
  return{
  onChangeLoading:()=>{
    dispatch( {
      type:"EDIT_LOADING",
      loading:false
    })
    
  }
  }
}
const AppContainer=connect (mapStateToProps,mapDispatchToProps)(App)
export default AppContainer;
