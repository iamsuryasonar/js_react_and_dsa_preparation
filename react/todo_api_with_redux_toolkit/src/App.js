import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from './redux/slice/todo';


function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state)
  if (state.todo.isLoading) {
    return (
      <h1>Loading...</h1>
    );
  }
  return (
    <div className="App">
      <button onClick={e => dispatch(fetchTodos())}>Fetch Todos</button>
      {
        state.todo?.data?.map((e) => {
          return <li>{e.title}</li>
        })
      }
    </div>
  );
}

export default App;
