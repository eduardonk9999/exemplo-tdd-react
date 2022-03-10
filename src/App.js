import './App.css';
import Todo from './components/todo';

function App() {
  const todos = [
    { id: 1, title: 'task 1', completed: false},
    { id: 2, title: 'task 2', completed: true},  
  ]
  return (
    <div className="App">
      <h1>Todos</h1>
      { todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default App;
