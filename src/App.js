import { useDispatch, useSelector } from "react-redux";
import { addCashAction, getCashAction } from "./store/cashReducer";
import { addCustomerAction, addManyCustomersAction, removeCustomerAction } from "./store/customerReducer";
import { fetchCustomers } from "./asyncActions/customers";

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customer.customers)

  const addCash = (cash) => {
    dispatch(addCashAction(cash))
  }

  const removeCash = (cash) => {
    dispatch(getCashAction(cash))
  }

  const addCustomer = (name) => {
    const customer = {
      id: Date.now(),
      name
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
      <div style={{ display: 'flex', flexDirection: 'column', width: 200 }}>
        <p>{cash}</p>
        <button onClick={() => addCash(Number(prompt('How much cash do you want to add?')))}>Add money</button>
        <button onClick={() => removeCash(Number(prompt('How much cash do you want to remove?')))}>Remove money</button>
        <hr />
        <button onClick={() => addCustomer(prompt('What is client name?'))}>Add client</button>
        <button onClick={() => dispatch(fetchCustomers())}>Add clients from server</button>
      </div>
      {
        customers.length ?
          <div>
            {
              customers.map(item =>
                <h3 key={item.id}
                  onClick={() => removeCustomer(item)}>
                  {item.name}
                </h3>
              )
            }
          </div>
          :
          <div>
            <h2>Clients are abcent!</h2>
          </div>
      }
    </div>
  );
}

export default App;
