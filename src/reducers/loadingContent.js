

const loadingContent = (state =true , action) => {
    if (action.type==='SET_LOADING'){
        return (action.loading ) 
    }
    else if (action.type==='EDIT_LOADING'){
        {
        return (action.loading=false ) }
    }
    return state
    }
    export default loadingContent;
    