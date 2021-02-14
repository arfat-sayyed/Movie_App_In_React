// {
//     type: 'ADD_MOVIES'
// }

// {
//     type: 'DECREASE_COUNT'
// }

export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FROM_FAV = 'REMOVE_FROM_FAV';
export const SET_SHOW_FAV = 'SET_SHOW_FAV';

export function addMovies (movies) {
    return {
        type: ADD_MOVIES,
        movies
    }
}

export function addFav (movie) {
    return {
        type: ADD_FAV,
        movie
    }
}

export function removeFromFav (movie) {
    return {
        type: REMOVE_FROM_FAV,
        movie
    }
}

export function setShowFav (val) {
    return {
        type: SET_SHOW_FAV,
        val
    }
}