import { UPDATE_POSTS } from "./actionType";
import { API_URL } from "../helpers/urls";

export function fetchPosts() {
  return (dispatch) => {
    const url = API_URL.fetchPost();
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log("data: ", data.articles);
        dispatch(updatePosts(data));
      });
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts
  };
}
