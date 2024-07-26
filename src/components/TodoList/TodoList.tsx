import React, { useState } from "react";
import { useTodoStore } from "../../hooks/useStore";
import { MagicExit, MagicMotion } from "react-magic-motion";
import { CheckIcon, PlusIcon, TrashIcon } from "@heroicons/react/16/solid";

export default function TodoList() {
  const todos = useTodoStore((state) => state.todos);
  const { addTodo, deleteTodo, updateTodo } = useTodoStore();

  const [todoText, setTodoText] = useState("");

  const onSubmit = () => {
    addTodo({ text: todoText, completed: false });
    setTodoText("");
  };

  return (
    <MagicMotion>
      <div className="text-white max-w-md w-full">
        <div className="pb-3">
          <h1 className="text-2xl font-semibold">Another To-do List</h1>
        </div>
        <div className="space-y-3">
          <MagicExit exit={{ opacity: 0 }}>
            {todos.map((todo, idx) => (
              <div
                className="bg-gray-600 rounded-md px-3 py-2 flex justify-between"
                key={idx}
              >
                <div className={`${todo.completed ? "line-through" : ""}`}>
                  {todo.text}
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    className="bg-green-500 p-1.5 rounded-md hover:bg-green-600"
                    onClick={() => updateTodo(idx)}
                  >
                    <CheckIcon className="h-4 w-4 text-white" />
                  </button>
                  <button
                    className="bg-red-500 p-1.5 rounded-md hover:bg-red-600"
                    onClick={() => deleteTodo(idx)}
                  >
                    <TrashIcon className="h-4 w-4 text-white" />
                  </button>
                </div>
              </div>
            ))}
          </MagicExit>
        </div>
        <div className="flex space-x-2 text-sm pt-3">
          <input
            className="bg-gray-600 rounded-md w-full px-3 py-2"
            onChange={(e) => setTodoText(e.target.value)}
            value={todoText}
          />
          <button
            className="px-3 py-2 rounded-md bg-blue-500 font-semibold hover:bg-blue-700 flex items-center space-x-2"
            onClick={onSubmit}
          >
            Submit
            <PlusIcon className="h-4 w-4 ml-2" />
          </button>
        </div>
      </div>
    </MagicMotion>
  );
}
