export const traerTodos = () => async (dispatch) => {
  let usersResponse = await fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())
  dispatch({
    type: 'traer_usuarios',
    payload: usersResponse
  })
}