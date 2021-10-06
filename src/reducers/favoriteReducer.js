
const initialState = {
    favorites: [],
    displayFavorites: false
}

const reducer= (state = initialState, action) =>{
    switch(action.type){
        case 'TOGGLE_FAVORITE': //true/false display favorite
            return {
                ...state, 
                displayFavorites: !state.displayFavorites
            }
        case 'ADD_FAVORITE': //adds new movie obj into fav list
            return {
                ...state,
                favorites: [...state.favorites, {...action.payload}]
            }
        case 'REMOVE_FAVORITE': // removes movie obj from fav list
            return{
                ...state,
                movies: state.favorites.filter(item=>(action.payload !== item.id))
            }
        default:
            return state;
    }
}

export default reducer;

