import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  updateTodo,
  removeTodo,
  setTitle,
  setIsEditing,
} from "../todoSlice";
import { SlPlus, SlPencil, SlTrash } from "react-icons/sl";

export default function Todo() {
  const { todos, title, isEditing } = useSelector((state) => state.todos);
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

  function handleTitleChange(event) {
    dispatch(setTitle(event.target.value));
  }

  function handleToggleEditing() {
    dispatch(setIsEditing(!isEditing));
  }

  function handleChangeTodo(updatedTodo) {
    dispatch(updateTodo(updatedTodo));
  }

  function handleDeleteTodo(todoId) {
    dispatch(removeTodo(todoId));
  }

  function handleSave(todo, newTitle) {
    dispatch(updateTodo({ ...todo, title: newTitle }));
    dispatch(setIsEditing(false));
  }

  return (
    <div>
      <h1>ToDo-list</h1>
      <div id="addTodo">
        <input
          placeholder="Add task"
          value={title}
          onChange={handleTitleChange}
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
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={todo.title}
                    onChange={(e) => handleSave(todo, e.target.value)}
                  />
                  <button onClick={() => handleSave(todo, todo.title)}>
                    Save
                  </button>
                </>
              ) : (
                <>
                  {todo.title}
                  <button
                    onClick={handleToggleEditing}
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
