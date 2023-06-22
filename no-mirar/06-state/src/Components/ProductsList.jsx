import { getPokemons } from "../services/pokemon"
import { useEffect, useState } from "react"
import Card from "./Card"
import { useShopping } from "../hooks/useShopping"

function ProductsList() {
  const [pokemons, setPokemons] = useState([])
  const { addToCart, cart } = useShopping()

  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data)
    })
  }, [])

  const hasInCart = (id) => {
    return cart.some((item) => item.id === id)
  }

  return (
      <div className="list">
        {pokemons.map((pokemon) => (
            <Card
              key={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              types={pokemon.types}
              price={pokemon.price}
              disabled={hasInCart(pokemon.id)}
              onClick={() => addToCart(pokemon)}
            />
        ))}
      </div>
  )
}

export default ProductsList
