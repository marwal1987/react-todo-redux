import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleComplete, deleteTodo } from "../todoSlice";

function Todo() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  function handleInputChange(e) {
    setText(e.target.value);
  }

  function handleAddTodo() {
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
  }

  function handleToggleComplete(id) {
    dispatch(toggleComplete(id));
  }

  function handleDeleteTodo(id) {
    dispatch(deleteTodo(id));
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />{" "}
      <button onClick={handleAddTodo}> Add Todo </button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
            <button onClick={() => handleToggleComplete(todo.id)}>
              {todo.completed ? "Mark Incomplete" : "Mark Complete"}
            </button>
            <button onClick={() => handleDeleteTodo(todo.id)}> Delete </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
