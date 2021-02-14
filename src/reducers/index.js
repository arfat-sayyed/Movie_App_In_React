import { ADD_MOVIES, ADD_FAV, REMOVE_FROM_FAV, SET_SHOW_FAV } from '../actions';


const initialMoviesState = {
    list: [],
    favourites: [],
    showFav: false
}

export default function movies (state = initialMoviesState, action) {
    // if (action.type === ADD_MOVIES) {
    //     return {
    //         ...state,
    //         list: action.movies
    //     }
    // }

    // return state;

    switch (action.type) {
        case ADD_MOVIES:
            return{
                ...state,
                list: action.movies
            }
            case ADD_FAV:
                return{
                    ...state,
                    favourites: [action.movie, ...state.favourites]
                }
            case REMOVE_FROM_FAV:
                const filteredArray = state.favourites.filter(
                    movie => movie.Title !== action.movie.Title
                );
                return{
                    ...state,
                    favourites: filteredArray
                };
            case SET_SHOW_FAV:
                return{
                    ...state,
                    showFav: action.val
                }
            default:
                return state;
    }
}

