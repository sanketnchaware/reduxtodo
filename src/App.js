import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { Provider } from "react-redux"
import store from "../src/store/store"
function App() {
  return (

    <Provider store={store}>
      <div className=" border-2 border-gray-500 sm:w-6/12 w-full m-auto  bg-[url('https://images.unsplash.com/photo-1657674206192-c20a0ed80b3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60')] h-screen">


        <div className="backdrop-blur-sm bg-white/30  h-screen pt-2 ">
          <p className="text-white text-center font-bold ">TO DO APP USING REDUX</p>
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </Provider>

  );
}

export default App;
