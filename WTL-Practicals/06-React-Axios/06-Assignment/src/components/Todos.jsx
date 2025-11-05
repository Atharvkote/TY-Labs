import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";
import Loader from "../utils/Loader";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/todos");
      setTodos(response.data.todos || []);
      toast.success("Todos data fetched successfully!");
    } catch (error) {
      console.error("Error fetching todos data:", error);
      toast.error("Error fetching todos data!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="todos-container">
      <h2>Todos List</h2>
      <p className="news-sub">You Pending Task...</p>
      {loading ? (
        <Loader/>
      ) : todos.length === 0 ? (
        <div className="empty">No todos found.</div>
      ) : (
        <table className="todos-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Todo</th>
              <th>Completed</th>
              <th>User ID</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.todo}</td>
                <td>{todo.completed ? "Done !!!!" : "Not Done Yet..."}</td>
                <td>{todo.userId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Todos;
