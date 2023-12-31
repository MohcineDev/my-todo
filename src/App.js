import './App.css';
import Todo from './components/todo';

function App() {


  const todos = [
    {
      id: 1, title: "workout", completed: false,
    },
    {
      id: 2, title: "shopping", completed: true
    }
  ]
  return (
    <div className="App">

      {
        todos.map((todo, index ) => {
          return <Todo key={index} todo={todo} />
        })
      }
    </div>
  );
}

export default App;
