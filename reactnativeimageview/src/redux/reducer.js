import {FETCH_IMAGES_PENDING, FETCH_IMAGES_SUCCESS, FETCH_IMAGES_ERROR} from './action';

const initialState = {
    pending: false,
    images: [],
    error: null
}

//To modify the data where from action
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_IMAGES_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_IMAGES_SUCCESS:
            return {
                ...state,
                pending: false,
                images: action.payload
            }
        case FETCH_IMAGES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

//to define parts of state by selectors
export const getImages = state => state.images;
export const getImagesPending = state => state.pending;
export const getImagesError = state => state.error;