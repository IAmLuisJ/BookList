import jsonPlaceholder from "../api/jsonPlaceholder";

export const FetchPosts = () => {
    return async function fetch(dispatch, getState) {
        const response = await jsonPlaceholder.get('/posts');
        dispatch({ type: "FETCH_POSTS", payload: response.data })
    };
}
 
export const FetchAuthor = (id) => {
return async function fetch(dispatch, getState) {
    const response = await jsonPlaceholder.get('/users/'+ id);
    dispatch({ type: 'FETCH_USER', payload: response.data})
};
}