import './App.css';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <h1>ToDo Application In REDUX</h1>
      <TaskList />
      <AddTask />
    </div>
  );
}

export default App;
