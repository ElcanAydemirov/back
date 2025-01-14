import { createSlice } from '@reduxjs/toolkit'

export const basketSlice = createSlice({
    name: "basket slice",
    initialState: { basket: [] },
    reducers: {
        checkBasket(state, action) {
            const found = state.basket.find((b) => {
                return b._id == action.payload._id
            })
            console.log(found);

            if (found) {
                found.quantity++
                return
            }
            state.basket.push({ ...action.payload, quantity: 1 })
        },

        clearBasket(state) {
            state.basket = []
        }
    }
})

export const { checkBasket, clearBasket } = basketSlice.actions
export default basketSlice.reducer