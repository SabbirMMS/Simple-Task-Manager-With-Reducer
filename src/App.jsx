import AddTask from "./components/AddTask.jsx";
import TaskList from "./components/TaskList.jsx";
import Counter from "./components/Counter.jsx";
import reducer from "./reducers/reducer.js";
import { initialState } from "./initialState/initialState.js";
import { addTask, changeTask, decrement, deleteTask, increment } from "./actions/actions.js";
import { useImmerReducer } from "use-immer";

export default function TaskApp() {
  
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  function handleAddTask(text) {
    addTask(text, dispatch);
  }

  function handleChangeTask(task) {
    changeTask(task, dispatch)
  }

  function handleDeleteTask(taskId) {
    deleteTask(taskId, dispatch);
  }

  const handleIncrement = () => {
    increment(dispatch);
  };

  const handleDecrement = () => {
    decrement(dispatch);
  };

  return (
    <>
      <div className="flex">
        <div>
          <h1>Task Manager</h1>
          <AddTask onAddTask={handleAddTask} />
          <TaskList
            tasks={state.tasks}
            onChangeTask={handleChangeTask}
            onDeleteTask={handleDeleteTask}
          />
        </div>
        <div>
          <h1>Counter</h1>
          <Counter
            count={state.counter}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        </div>
      </div>
    </>
  );
}
