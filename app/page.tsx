import { getAllTodos } from "@/api";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

export default async function Home() {
  const tasks = await getAllTodos();  
  return (
    <main className="flex flex-col max-w-4xl max-auto mt-4 justify-center m-auto">
      <div className='text-center items-center my-5 flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Todo App</h1>
        <AddTask />
      </div>
      <TodoList tasks={tasks} />
    </main>
  );
}
