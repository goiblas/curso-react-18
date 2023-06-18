import { getPokemons } from "../services/pokemon"
import { useEffect, useState } from "react"
import Card from "./Card"
// import { useShopping } from "../contexts/ShoppingContext";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/shoppingSlice";

function ProductsList() {
  const [pokemons, setPokemons] = useState([])
  const dispatch = useDispatch();

  // const { addToCart } = useShopping();

  console.log("render")

  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data)
    })
  }, [])

  return (
      <div className="list">
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id}
            {...pokemon}
            onClick={() => dispatch(addToCart(pokemon)) } />
        ))}
      </div>
  )
}

export default ProductsList
