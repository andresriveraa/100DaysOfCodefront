export const traerPosts = () => async (dispatch) => {
  let postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())
  console.log(postsResponse);
  
  dispatch({
    type: 'traer_posts',
    payload: postsResponse
  })
}