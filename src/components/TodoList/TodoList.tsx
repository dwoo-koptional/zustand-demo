import React, { useState } from "react";
import { useTodoStore } from "../../hooks/useStore";
import { MagicExit, MagicMotion } from "react-magic-motion";
import { CheckIcon, PlusIcon, TrashIcon } from "@heroicons/react/16/solid";

export default function TodoList() {
  const { todos, addTodo, deleteTodo, updateTodo } = useTodoStore();
  const [todoText, setTodoText] = useState("");

  return (
    <div className="text-white">
      <div className="space-y-2">
        <div className="font-semibold text-xl">Another To-do List</div>
        <MagicMotion>
          <div className="flex flex-col space-y-2">
            <MagicExit exit={{ opacity: 0 }}>
              {todos.map((todo, idx) => {
                return (
                  <div className="flex items-center justify-between bg-gray-800 rounded-md px-3 py-2.5 outline-none text-sm">
                    <div
                      className={`font-semibold ${
                        todo.completed ? "line-through" : ""
                      }`}
                    >
                      {todo.text}
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        onClick={() => updateTodo(idx)}
                        className="rounded-md bg-green-600 p-1.5 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                      >
                        <CheckIcon className="h-4 w-4" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteTodo(idx)}
                        className="rounded-md bg-red-600 p-1.5 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                      >
                        <TrashIcon className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </MagicExit>
          </div>
        </MagicMotion>
        <div className="flex items-center space-x-3">
          <input
            className="bg-gray-800 rounded-md px-3 py-2.5 outline-none text-sm font-semibold w-full"
            onChange={(e) => setTodoText(e.target.value)}
            value={todoText}
          />
          <button
            type="button"
            onClick={() => {
              addTodo({ text: todoText, completed: false });
              setTodoText("");
            }}
            className="rounded-md bg-blue-600 p-1.5 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            <PlusIcon className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
