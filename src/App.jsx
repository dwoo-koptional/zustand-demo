import "./App.css";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex justify-center items-center">
      <div className="max-w-md w-full">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
