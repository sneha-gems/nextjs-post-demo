// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import {deletePostReducer, fetchPostsReducer, postReducer} from './posts/postSlice'

const makeStore = () => {
  return configureStore({
    reducer: {
      posts: fetchPostsReducer,
      addpost: addPostReducer,
      deletePost: deletePostReducer
    },
  })
}

// export const persistor = persistStore(makeStore);

export default makeStore;
