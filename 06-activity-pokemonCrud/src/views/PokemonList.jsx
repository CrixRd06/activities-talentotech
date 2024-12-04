import { useState, useEffect } from "react";
import { AppNavBar } from "../components/Navbar";
import { PokemonCard } from "../components/Pokemoncard";
import { getPokemonList } from "../services/api"
import { Container, Row } from "react-bootstrap";

export const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetchPokemons();
    }, []);

    const fetchPokemons = async () => {
        const data = await getPokemonList();
        setPokemons(data);
    };

    return (
        <>
            <AppNavBar />
            <Container>
                <Row>
                    {
                        pokemons.map((pokemon, index) => {
                            return (
                                <PokemonCard key={index} name={pokemon.name} imageUrl={pokemon.imageUrl} />
                            )

                        })
                    }
                </Row>
            </Container>

        </>
    )

}

