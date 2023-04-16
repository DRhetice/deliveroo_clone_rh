import { configureStore } from '@reduxjs/toolkit'
import  basketReducer  from './features/BasketSlice'
import restaurantReducer from './features/restaurantSlice'

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
  },
})