"use client";

import { useEffect, useState } from "react";

interface ITodo {
  id: number;
  name: string;
  status: boolean;
}

function TODO() {
  const [tasks, setTasks] = useState<ITodo[]>([]);
  const [tasktext, setTaskText] = useState("");

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },[tasks]);

  const addTask = () => {
    if (tasktext.trim() === "") return;

    const newTask = {
      id: Date.now(),
      name: tasktext,
      status: false,
    };
    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
      <div className="px-4 py-2">
        <h1 className="text-gray-800 font-bold text-2xl uppercase">
          To-Do List
        </h1>
      </div>
      <form className="w-full max-w-sm mx-auto px-4 py-2">
        <div className="flex items-center border-b-2 border-teal-500 py-2">
          <input
            onChange={(e) => setTaskText(e.target.value)}
            value={tasktext}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Add a task"
          />
          <button
            onClick={addTask}
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
          >
            Add
          </button>
        </div>
      </form>
      <ul className="divide-y divide-gray-200 px-4">
        {tasks.map((task) => (
          <li key={task.id} className="py-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={task.status}
                onChange={() => toggleTask(task.id)}
                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              <span
                className={`ml-3 block text-lg font-medium ${
                  task.status ? "line-through text-gray-400" : "text-gray-900"
                }`}
              >
                {task.name}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TODO;
