import { Children, cloneElement } from 'react'

function App({ children }) {
  const count = Children.count(children)

  return (
    <div className="App">
      <div>
        Numero: {count}
      </div>
      <ul>
        {Children.toArray(children).reverse().map((child, index) => (
          <li key={index}>{child}</li>
        ))}
        {/* {Children.map(children, (child, index) => (
          <li key={index}>{child}</li>
        ))} */}
      </ul>
    </div>
  )
}

export default App
