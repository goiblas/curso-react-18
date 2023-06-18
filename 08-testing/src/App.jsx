import ProductsList from './Components/ProductsList'
import ShoppingCart from './Components/ShoppingCart'

function App() {
  return (
        <div className="container">
          <div className='layout'>
            <ShoppingCart />
            <ProductsList />
          </div>
        </div>
  )
}

export default App
