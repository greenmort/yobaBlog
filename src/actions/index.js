import axios from 'axios';

const key = 'p0m3h66cayIYX8ryhHxg';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';
export const FETCH_POSTS = 'FETCH_POSTS';
export const NOT_FOUND = 'NOT_FOUND';
export const CREATE_POST = 'CREATE_POST';
export const POST_ERROR = 'POST_ERROR';

function onGetIndex(response) {
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
        dispatch(onGetIndex(response));
      })
      .catch(err => {
        dispatch(onGetError(err));
      });
  };
}

export function createPost(props) {
    const url = `${ROOT_URL}?key=${key}`;
    const response = axios.post(url, props);
    return {
        type: CREATE_POST,
        payload: response
    }
}
