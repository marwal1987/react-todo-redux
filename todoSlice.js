import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  title: "",
  isEditing: false,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    updateTodo: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setIsEditing: (state, action) => {
      state.isEditing = action.payload;
    },
  },
});

export const { addTodo, updateTodo, removeTodo, setTitle, setIsEditing } =
  todoSlice.actions;
export default todoSlice.reducer;
