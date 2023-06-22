import ProductsList from './Components/ProductsList'
import ShoppingCart from './Components/ShoppingCart'
import ShoppingProvider from './Components/ShoppingProvider'

function App() {
  return (
    <ShoppingProvider>
        <div className="container">
          <div className='layout'>
            <ShoppingCart />
            <ProductsList />
          </div>
        </div>
    </ShoppingProvider>
  )
}

export default App
