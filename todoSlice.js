import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  title: "",
  editTitle: "",
  isEditing: false,
  editingTodoId: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    updateTodo: (state, action) => {
      const { id, title } = action.payload;
      const todoToUpdate = state.todos.find((todo) => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.title = title; // Uppdatera titeln för den specifika uppgiften
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setEditTitle: (state, action) => {
      state.editTitle = action.payload;
    },
    setIsEditing: (state, action) => {
      state.editingTodoId = action.payload;
    },
    setEditingTodoId: (state, action) => {
      state.editingTodoId = action.payload;
    },
  },
});

export const {
  addTodo,
  updateTodo,
  removeTodo,
  setTitle,
  setEditTitle,
  setIsEditing,
  setEditingTodoId,
} = todoSlice.actions;
export default todoSlice.reducer;
