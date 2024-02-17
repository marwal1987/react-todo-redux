import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  updateTodo,
  removeTodo,
  setTitle,
  setIsEditing,
  setEditTitle,
} from "../todoSlice";
import { SlPlus, SlPencil, SlTrash } from "react-icons/sl";

export default function Todo() {
  const { todos, title, editTitle, editingTodoId } = useSelector(
    (state) => state.todos
  );
  const dispatch = useDispatch();

  function handleAddTodo() {
    if (title.trim() !== "") {
      dispatch(
        addTodo({
          id: Date.now(),
          title,
          done: false,
        })
      );
      dispatch(setTitle(""));
    }
  }

  function handleToggleEditing(todoId) {
    const todo = todos.find((todo) => todo.id === todoId);
    dispatch(setEditTitle(todo.title));
    dispatch(setIsEditing(todoId === editingTodoId ? null : todoId));
  }

  function handleChangeTodo(updatedTodo) {
    dispatch(updateTodo(updatedTodo));
  }

  function handleDeleteTodo(todoId) {
    dispatch(removeTodo(todoId));
  }

  function handleSave(todo, newTitle) {
    dispatch(updateTodo({ ...todo, title: newTitle }));
    dispatch(setIsEditing(null));
  }

  return (
    <div>
      <h1>ToDo-list</h1>
      <div id="addTodo">
        <input
          placeholder="Add task"
          value={title}
          onChange={(e) => dispatch(setTitle(e.target.value))}
        />
        <button onClick={handleAddTodo} style={{ color: "goldenrod" }}>
          <SlPlus />
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={(e) =>
                  handleChangeTodo({ ...todo, done: e.target.checked })
                }
              />
              {editingTodoId === todo.id ? (
                <>
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => dispatch(setEditTitle(e.target.value))}
                  />
                  <button onClick={() => handleSave(todo, editTitle)}>
                    Save
                  </button>
                </>
              ) : (
                <>
                  {todo.title}
                  <button
                    onClick={() => handleToggleEditing(todo.id)}
                    style={{ color: "goldenrod" }}
                  >
                    <SlPencil />
                  </button>
                </>
              )}
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                style={{ color: "red" }}
              >
                <SlTrash />
              </button>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
