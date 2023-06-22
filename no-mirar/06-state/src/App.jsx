import ProductsList from './Components/ProductsList'
import ShoppingCart from './Components/ShoppingCart'
// import ShoppingProvider from './Components/ShoppingProvider'

import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    // <ShoppingProvider>
      <Provider store={store}>
        <div className="container">
          <div className='layout'>
            <ShoppingCart />
            <ProductsList />
          </div>
        </div>
      </Provider>
    // </ShoppingProvider>
  )
}

export default App
