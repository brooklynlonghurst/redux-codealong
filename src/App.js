import {useSelector, useDispatch} from "react-redux"
import './App.css';

function App() {
  const name = useSelector((state) => state.name)
  const dispatch = useDispatch()

  function changeName() {
    dispatch({type: 'CHANGE_NAME', payload: "Mr. Wellington, beef"})
  }

  return (
    <div className="App">
      <h1>App</h1>
      <h2>{name}</h2>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default App;
