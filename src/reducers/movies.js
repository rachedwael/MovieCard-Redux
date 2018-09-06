const movies = (state=[],action)=>{
   switch (action.type){
       case 'ADD_MOVIE':{
            return state.concat(action.movie)
       }
       case 'EDIT_MOVIE':{
        return state.map(el=>{
            if (el.id===action.id){
                return action.movie
            }
            return el
        })
   }
        case 'DELETE_MOVIE':{
            return state.filter(el=>{
                if (el.id===action.id){
                    return false
                }
                return true
            })
        }
        default:
        return state
   }
   
  

    }

    export default movies;
