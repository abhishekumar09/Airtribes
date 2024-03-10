import { createSlice } from "@reduxjs/toolkit";
const listSlice = createSlice({
  name: "listSlice",
  initialState: {
    list: [],
  },
  reducers: {
    addList: (state, action) => {
      state.list.push(action.payload);
    },
    addCard: (state, action) => {
      state.list.forEach((item) => {
        if (item.id === action.payload.parentId) {
          if (Object.hasOwn(item, "children")) {
            item.children.push(action.payload);
          } else {
            item.children = [];
            item.children.push(action.payload);
          }
        }
      });
    },
    deleteList: (state, action) => {
      console.log("called",state)
      const itemIndex = state.list.findIndex(
        (item) => item.id === action.payload.id
      );
      if(itemIndex!==-1){
      state.list.splice(itemIndex,1)
      }
      //   const filteredList = state.list.filter((list) => {
      //     return list.id !== action.payload;
      //   });
      //   state.list = filteredList;
    },
    deleteChildList:(state,action)=>{
      const {id, parentId} = action.payload
      const itemIndex = state.list.findIndex(
        (item) => item.id === parentId
      );
      if(itemIndex!==-1){
        const childItemIndex = state.list[itemIndex].children.findIndex(
          (item) => item.id === id
        );
        if(childItemIndex!==-1){
          state.list[itemIndex].children.splice(childItemIndex,1)
        }
      }

    }
  },
});
export const { addList, addCard, deleteList,deleteChildList } = listSlice.actions;
export default listSlice.reducer;
