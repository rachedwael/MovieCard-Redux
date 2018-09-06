import {createStore , combineReducers} from 'redux'
import moviesReducers from './reducers/movies'
import titleFilterReducers from './reducers/titleFilter'
import ratingFilterReducers from './reducers/ratingFilter'
import loadingReducers from './reducers/loadingContent'


const store = createStore(combineReducers({
    movies  :moviesReducers,
    minRatingFilter : ratingFilterReducers,
    titleFilter : titleFilterReducers,
    loadingContent:loadingReducers
}))
store.subscribe(() => console.log('this is my Movies Card!!'))
console.log(store.getState())

store.dispatch({
    type:"ADD_MOVIE",
    movie:{
        id:"MATRIX",
        title:"MATRIX",
        rating:3,
        image:"http://fr.web.img6.acsta.net/medias/04/34/49/043449_af.jpg",
        year:"2003"
    }
})
// console.log(store.getState())
// store.dispatch({
//     type:"SET_LOADING",
//     loading:false
// })
// console.log(store.getState())

// store.dispatch({
//     type:"ADD_MOVIE",
//     movie:{
//         id:"JAC WISH",
//         title:"JAC WISH",
//         rating:4,
//         image:"https://images-na.ssl-images-amazon.com/images/I/919OrcB4cZL._SY445_.jpg",
//         year:"2016"
//     }
// })
// console.log(store.getState())
// store.dispatch({
//     type:"ADD_MOVIE",
//     movie:{
//         id:"wael",
//         title:"wael",
//         rating:5,
//         year:"2016"
//     }
// })
export default store
