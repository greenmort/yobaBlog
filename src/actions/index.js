import axios from 'axios';

const key = 'p0m3h66cayIYX8ryhHxg';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';
export const FETCH_POSTS = 'FETCH_POSTS';
export const NOT_FOUND = 'NOT_FOUND';

function onGetData(response) {
  return {
    type: FETCH_POSTS,
    payload: response
  };
}

function onGetError(err) {
  return {
    type: NOT_FOUND,
    payload: err
  };
}

export function fetchPosts() {
  const url = `${ROOT_URL}?key=${key}`;
  return function(dispatch) {
    axios
      .get(url)
      .then(response => {
        dispatch(onGetData(response));
      })
      .catch(err => {
        dispatch(onGetError(err));
      });
  };
}
