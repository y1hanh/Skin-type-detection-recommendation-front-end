const ADD_NEW_POST = "http://127.0.0.1:5001/display_posts"
const GET_POSTS = "http://127.0.0.1:5001/display_posts"
const SEARCH_POSTS = "http://127.0.0.1:5001/search"

export function addPost(params) {
  return fetch(ADD_NEW_POST, {
    method: "POST", // *GET, POST, PUT, DELETE
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params), 
  })
}

export function getPost() {
  return fetch(GET_POSTS, {
    method: "GET", // *GET, POST, PUT, DELETE
  })
}

export function searchPost(params) {
  return fetch(SEARCH_POSTS +"?"+ new URLSearchParams({
    keyword: params
}).toString())
}