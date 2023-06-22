const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

const mapDtoToPokemon = (dto) => ({
    id: dto.id,
    name: dto.name,
    image: dto.sprites.front_default,
    types: dto.types.map(({ type }) => type.name),
    price: Math.floor(Math.random() * 100),
})

export async function getPokemons() {
    const response = await fetch(`${BASE_URL}?limit=20`)
    const { results } = await response.json()

    const promises = results.map(async ({ url }) => {
        const response = await fetch(url)
        const pokemon = await response.json()
        return pokemon
    })

    const pokemonResponses = await Promise.all(promises)

    return pokemonResponses.map(mapDtoToPokemon)
}