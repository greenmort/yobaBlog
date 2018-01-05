import axios from 'axios';

const API_KEY = 'p0m3h66cayIYX8ryhHxg';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const NOT_FOUND = 'NOT_FOUND';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

function onGetIndex(response) {
  return {
    type: FETCH_POSTS,
    payload: response
  };
}

function onGetPost(response) {
  return {
    type: FETCH_POST,
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
  const url = `${ROOT_URL}?key=${API_KEY}`;
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

export function fetchPost(id) {
  const url = `${ROOT_URL}/${id}?key=${API_KEY}`;
  return function(dispatch) {
    axios
      .get(url)
      .then(response => {
        dispatch(onGetPost(response));
      })
      .catch(err => {
        dispatch(onGetError(err));
      });
  };
}

export function createPost(props) {
  const url = `${ROOT_URL}?key=${API_KEY}`;
  const response = axios.post(url, props);
  return {
    type: CREATE_POST,
    payload: response
  };
}

export function deletePost(id) {
  const url = `${ROOT_URL}/${id}?key=${API_KEY}`;
  const response = axios.delete(url);
  return {
    type: DELETE_POST,
    payload: response
  };
}
