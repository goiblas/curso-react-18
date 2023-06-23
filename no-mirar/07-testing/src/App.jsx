import { useState } from "react"
import { getPokemons } from "./services/pokemons"

export default function App() {
  const [pokemons, setPokemons] = useState([])
  const [error, setError] = useState(null)

  const handleGetPokemons = () => {
    getPokemons().then((pokemons) => {
      setPokemons(pokemons)
    }).catch((error) => {
      setError(error)
    })
  }

  return (
    <div className="app">
      <h1>Pokemons</h1>
      <button onClick={handleGetPokemons}>Get Pokemons</button>
      {error && <p>{error.message}</p>}
      
      {pokemons.length > 0 && (
        <ul className="pokemons">
        {pokemons.map((pokemon) => (
          <li key={pokemon.id} className="pokemon">
            <img src={pokemon.image} alt={pokemon.name} />
            <h2>{pokemon.name}</h2>
          </li>
        ))}
      </ul>
      )}
    </div>
  )
}
