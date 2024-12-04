export const getPokemonList = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=99');
        const data = await response.json();

        return data.results.map((pokemon, index) => ({
            name: pokemon.name,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`,

        }));
    } catch (error) {
        console.error("Error con el API': ", error);
        return [];
    }
}