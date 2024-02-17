import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  updateTodoTitle,
  removeTodo,
  setTitle,
  setIsEditing,
  setEditTitle,
  toggleTodoDone,
} from "../todoSlice";
import { SlPlus, SlPencil, SlTrash } from "react-icons/sl";

export default function Todo() {
  const { todos, title, editTitle, editingTodoId } = useSelector(
    (state) => state.todos
  );
  const dispatch = useDispatch();

  return (
    <div>
      <h1>ToDo-list</h1>
      <div id="addTodo">
        <input
          placeholder="Add task"
          value={title}
          onChange={(e) => dispatch(setTitle(e.target.value))}
        />
        <button
          onClick={() => {
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
          }}
          style={{ color: "goldenrod" }}
        >
          <SlPlus />
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={(e) =>
                  !editingTodoId
                    ? dispatch(
                        toggleTodoDone({ id: todo.id, done: e.target.checked })
                      )
                    : null
                }
              />
              {editingTodoId === todo.id ? (
                <>
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => dispatch(setEditTitle(e.target.value))}
                  />
                  <button
                    onClick={() => {
                      dispatch(updateTodoTitle({ ...todo, title: editTitle }));
                      dispatch(setIsEditing(null));
                    }}
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  {todo.title}
                  <button
                    onClick={() => {
                      const todoToUpdate = todos.find((t) => t.id === todo.id);
                      dispatch(setEditTitle(todoToUpdate.title));
                      dispatch(setIsEditing(todo.id));
                    }}
                    style={{ color: "goldenrod" }}
                  >
                    <SlPencil />
                  </button>
                </>
              )}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
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
