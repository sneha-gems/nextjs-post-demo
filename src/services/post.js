import axios from "axios"


export const getpost = async (postId) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    console.log('res', res)
    return res.data
}


export const createPost = async({title, body, userId}) => {
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {title, body, userId});
        
        return response.data;
      } catch (error) {
        console.error('Error adding post:', error);
        return Promise.reject(error);
      }
}