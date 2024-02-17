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
    updateTodoTitle: (state, action) => {
      const { id, title } = action.payload;
      const todoToUpdate = state.todos.find((todo) => todo.id === id);
      todoToUpdate && (todoToUpdate.title = title);
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
    toggleTodoDone: (state, action) => {
      const { id, done } = action.payload;
      const todoToUpdate = state.todos.find((todo) => todo.id === id);
      todoToUpdate && (todoToUpdate.done = done);
    },
  },
});

export const {
  addTodo,
  updateTodoTitle,
  removeTodo,
  setTitle,
  setEditTitle,
  setIsEditing,
  setEditingTodoId,
  toggleTodoDone,
} = todoSlice.actions;
export default todoSlice.reducer;
