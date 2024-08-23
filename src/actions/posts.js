import { UPDATE_POSTS } from "./actionType";

export function fetchPosts() {
  return (dispatch) => {
    const url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=522c58ba5cce4566bde101b8acbd0675";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log("data: ", data.articles);
        dispatch(updatePosts(data.articles));
      });
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts
  };
}
