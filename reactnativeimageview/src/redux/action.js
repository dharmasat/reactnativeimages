export const FETCH_IMAGES_PENDING = 'FETCH_IMAGES_PENDING';
export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS';
export const FETCH_IMAGES_ERROR = 'FETCH_IMAGES_ERROR';

//Action Types for Pending, Success and failure 
export const fetchImagesPending = () => {
    return {
        type: FETCH_IMAGES_PENDING
    }
}

export const fetchImagesSuccess = (images) => {
    return {
        type: FETCH_IMAGES_SUCCESS,
        payload: images
    }
}

export const fetchImagesError = (error) => {
    return {
        type: FETCH_IMAGES_ERROR,
        error: error
    }
}