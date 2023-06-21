import { getAllTodos } from "@/api";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

export default async function Home() {
  const tasks = await getAllTodos();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col max-w-4xl max-auto mt-4 justify-center m-auto w-[70%]">
        <div className='text-center items-center my-5 flex flex-col gap-4'>
          <h1 className='text-2xl font-bold'>Todo App</h1>
          <AddTask />
        </div>
        <TodoList tasks={tasks} />
      </main>
      <footer className="bg-gray-200 py-4 text-center">
       <Footer />
      </footer>
    </div>
  );
}
