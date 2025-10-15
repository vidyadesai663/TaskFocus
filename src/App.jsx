import Progresstracker from "./Components/Progresstracker";
import Taskform from "./Components/Taskform";
import TaskList from "./Components/TaskList";

function App() {
  return (
    <div>
      <h1> Task Focus </h1>
      <p> Our friendly TaskManager</p>
      <Taskform/>
      <TaskList/>
      <Progresstracker/>
      <button> Clear All</button>
    </div>
  )
  }

  export default App;