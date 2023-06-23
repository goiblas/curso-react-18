import '@testing-library/jest-dom'
import { vi, describe, test, expect } from "vitest";
import App from "./App";
import { render, screen } from "@testing-library/react";
import * as pokemonService from "./services/pokemons";
import userEvent from "@testing-library/user-event";

const PIKACHU = {
    id: 25,
    name: "pikachu",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
}


describe("App", () => {
    test("should render a list of cards", async () => {
        vi.spyOn(pokemonService, "getPokemons").mockResolvedValue([
            PIKACHU
        ]);
        render(<App />);
        const user = userEvent.setup();

        const button = await screen.findByRole("button", { name: "Get Pokemons" });
        await user.click(button);

        const pikachu = await screen.findByText("pikachu");
        expect(pikachu).toBeInTheDocument();
    });

    test("should render error message", async () => {
        vi.spyOn(pokemonService, "getPokemons").mockRejectedValue(new Error("Error"));
        render(<App />);
        const user = userEvent.setup();

        const button = await screen.findByRole("button", { name: "Get Pokemons" });
        await user.click(button);

        const error = await screen.findByText("Error");
        expect(error).toBeInTheDocument();
    })
})