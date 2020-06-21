export const traerPosts = () => async (dispatch) => {
  try{
    let postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())
    dispatch({
      type: 'traer_posts',
      payload: postsResponse
    })
  }catch (error) {
    console.log(error);    
  }
  
}