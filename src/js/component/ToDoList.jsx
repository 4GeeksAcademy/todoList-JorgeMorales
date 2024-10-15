import React, { useState } from "react";

const ToDoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && task.trim() !== "") {
      setTasks([...tasks, task.trim()]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-5  ">
      <h2 className="text-center mb-4">To Do List</h2>
      <div className="row justify-content-center ">
        <div className="col-12 col-md-8 col-lg-6  shadow p-0 mb-0 bg-white rounded-0">
          <ul className="list-group  ">
            <li className="list-group-item p-0 border-0 border-dark rounded-0 ">
              <input
                type="text"
                placeholder="¿Qué necesitas?"
                value={task}
                className="form-control border-0 rounded-0"
                onChange={(e) => setTask(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </li>
            {tasks.map((t, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center border-bottom border-end-0 border-start-0 border-grey rounded-0"
              >
                {t}
                <span className="close text-danger" onClick={() => removeTask(index)} style={{ cursor: "pointer" }}>
                  ✖
                </span>
              </li>
            ))}
            <div className="m-0">{tasks.length} tareas</div>
          </ul>

          <div className="leaf-container">
            <div className="leaf-1 p-1 shadow">
            </div>
            <div className="leaf-2 p-1 shadow">
            </div>
            <div className="leaf-3 p-1 shadow">
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ToDoList;
