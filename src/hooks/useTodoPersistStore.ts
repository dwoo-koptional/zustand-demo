import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Todo = {
  text: string;
  completed: boolean;
};

export interface TodoState {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
}

export const useTodoPersistStore = create<TodoState>()(
  persist(
    (set) => ({
      todos: [],
      addTodo: (todo: Todo) =>
        set(({ todos: prevTodos }) => ({ todos: [...prevTodos, todo] })),
    }),
    { name: "todo-storage", storage: createJSONStorage(() => localStorage) }
  )
);
