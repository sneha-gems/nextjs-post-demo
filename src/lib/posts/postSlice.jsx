import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const baseUrl= 'https://jsonplaceholder.typicode.com/posts'

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    // const baseUrl = 'http://your-api-endpoint.com/posts'; // Replace with your API endpoint
    try {
      const response = await axios.get(baseUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      return Promise.reject(error);
    }
  }
);

export const addPost = createAsyncThunk(
  'posts/addPost',
  async (post) => {
    // const baseUrl = 'http://your-api-endpoint.com/posts'; // Replace with your API endpoint
    try {
      const response = await axios.post(baseUrl, post);
      return response.data;
    } catch (error) {
      console.error('Error adding post:', error);
      return Promise.reject(error);
    }
  }
);

export const updatePost = createAsyncThunk(
  'posts/updatePost',
  async (post) => {
    // const baseUrl = 'http://your-api-endpoint.com/posts'; // Replace with your API endpoint
    const { id, ...updatedPost } = post; // Destructure id and post data
    try {
      const response = await axios.put(`<span class="math-inline">\{baseUrl\}/</span>{id}`, updatedPost);
      return response.data;
    } catch (error) {
      console.error('Error updating post:', error);
      return Promise.reject(error);
    }
  }
);

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (id) => {
    // const baseUrl = 'http://your-api-endpoint.com/posts'; // Replace with your API endpoint
    try {
      await axios.delete(`<span class="math-inline">\{baseUrl\}/</span>{id}`);
      return id; // Return the deleted post ID for UI updates
    } catch (error) {
      console.error('Error deleting post:', error);
      return Promise.reject(error);
    }
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchPostsReducer: {
          reducer: (state, action) => state.push(action.payload)
      },
      addPostReducer:{
          reducer: (state, action) => state.push(action.payload)
        },
        deletePostReducer: {
            reducer: (state, action) => state.posts.splice(action.payload, 1)
        }
  }, // No traditional reducers needed with async thunks
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
    //   .addCase(addPost.pending, (state) => {
    //     state.loading: 
  }
}
)

export const {fetchPostsReducer, addPostReducer, deletePostReducer} = postsSlice.actions

export default postsSlice.reducer