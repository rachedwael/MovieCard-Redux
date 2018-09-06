

const ratingFilter = (state =0 , action) => {
if (action.type==='SET_RATING_FILTER'){
    
    if(!action.rating) 
    return state
    
    return action.rating
    
}
return state
}
export default ratingFilter;
