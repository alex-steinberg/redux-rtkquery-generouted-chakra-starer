// sort.js
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  field: "title", // default sort field
  direction: "descending", // default sort direction
}

export const sort = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSortConfig: (state, action) => {
      state.field = action.payload.field
      state.direction = action.payload.direction
    },
  },
})

export const { setSortConfig } = sort.actions
export default sort.reducer
