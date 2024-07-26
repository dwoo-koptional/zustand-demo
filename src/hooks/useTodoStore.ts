import { create } from "zustand";

type Todo = {
  text: string;
  completed: boolean;
};

export interface TodoState {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  deleteTodo: (idx: number) => void;
  updateTodo: (idx: number) => void;
}

export const useTodoStore = create<TodoState>((set) => {
  return {
    todos: [],
    addTodo: (todo) =>
      set(({ todos: prevTodos }) => ({ todos: [...prevTodos, todo] })),
    deleteTodo: (idx) =>
      set(({ todos: prevTodos }) => ({
        todos: prevTodos.filter((_, index) => idx !== index),
      })),
    updateTodo: (idx) =>
      set(({ todos: prevTodos }) => ({
        todos: prevTodos.map((todo, index) =>
          idx === index ? { ...todo, completed: !todo.completed } : todo
        ),
      })),
  };
});
