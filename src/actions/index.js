import axios from "axios";
export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';

const ROOT_URL = `http://reduxblog.herokuapp.com/api`
const API_KEY = '?key=mahi8341'
const url = `${ROOT_URL}/posts${API_KEY}`;

export function fetchPosts() {
  const request = axios.get(url);

  return {
    type: FETCH_POSTS,
    payload: request
  }  
}

export function createPost(values, callback) {
  const request = axios.post(url, values).then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  }
}