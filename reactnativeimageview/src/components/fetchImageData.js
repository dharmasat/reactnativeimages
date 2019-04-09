import { fetchImagesPending, fetchImagesSuccess, fetchImagesError } from '../redux/action';

//Fetching ImageList and put in the store
export default function fetchImages(searchText) {
    URI = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=3e7cc266ae2b0e0d78e279ce8e361736&format=json&nojsoncallback=1&safe_search=1&text='+searchText+'&page=10';
    return dispatch => {
      dispatch(fetchImagesPending());
      fetch(URI)
        .then(res => res.json())
        .then(res => {
          if (res.error) {
            throw (res.error)
          }
          //To get only 50 photos
          if(res.photos.photo.length > 50){
            res.photos.photo.length = 50;
          }
          dispatch(fetchImagesSuccess(res.photos.photo));
          return res.photos.photo;
        })
        .catch(error => {
          dispatch(fetchImagesError(error));
        })
  
    }
}