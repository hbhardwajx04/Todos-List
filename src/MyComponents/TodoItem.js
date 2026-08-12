import React from "react";
import { useState } from "react";

export const TodoItem = ({ todo, onDelete, updateTodo, changeStatus }) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [desc, setDesc] = useState(todo.desc);
  const saveTodo = () => {
    updateTodo({
      ...todo,
      title,
      desc,
    });

    setEditing(false);
  };
  return (
    <>
      <div>
        {/* Heading */}
        {editing ? (
          <input
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h4>{todo.title}</h4>
        )}
        {/* Description */}
        {editing ? (
          <textarea
            className="form-control"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        ) : (
          <p>{todo.desc}</p>
        )}

        {/* Add three status button */}

        <button
          className="btn btn-sm btn-secondary me-2"
          onClick={() => changeStatus(todo, "Pending")}
        >
          Pending
        </button>

        <button
          className="btn btn-sm btn-warning me-2"
          onClick={() => changeStatus(todo, "In Progress")}
        >
          In Progress
        </button>

        <button
          className="btn btn-sm btn-success me-2"
          onClick={() => changeStatus(todo, "Done")}
        >
          Done
        </button>

        {/* Add button */}
        {editing ? (
          <button className="btn btn-success btn-sm me-2" onClick={saveTodo}>
            Save
          </button>
        ) : (
          <button
            className="btn btn-primary btn-sm me-2"
            onClick={() => setEditing(true)}
          >
            Edit
          </button>
        )}
        {/* Show Status */}
        <h6>
          <strong>Status:</strong> :
          <span className="badge bg-secondary">{todo.status}</span>
        </h6>

        <button
          className="btn btn-danger btn-sm me-2"
          onClick={() => onDelete(todo)}
        >
          Delete
        </button>
      </div>
      <hr />
    </>
  );
};
