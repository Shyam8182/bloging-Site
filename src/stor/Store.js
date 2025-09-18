import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlieses';



const store = configureStore({
    reducer:{
              auth : authSlice,
    }
})


export default store;
