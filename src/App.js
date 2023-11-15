import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  console.log(cash)

  const addCash = (cash) => {
    dispatch({ type: 'ADD_CASH', payload: cash })
  }

  const removeCash = (cash) => {
    dispatch({ type: 'GET_CASH', payload: cash })
  }

  return (
    <div className="App">
      <div>
        <p>{cash}</p>
        <button onClick={() => addCash(Number(prompt('How much cash do you want to add?')))}>Add money</button>
        <button onClick={() => removeCash(Number(prompt('How much cash do you want to remove?')))}>Remove money</button>
      </div>
    </div>
  );
}

export default App;
