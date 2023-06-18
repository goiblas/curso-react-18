import '@testing-library/jest-dom'
import { vi, describe, test, expect } from "vitest";
import App from "../App";
import { render, screen } from "../test-utils";
import * as pokemonService from "../services/pokemon";
import userEvent from '@testing-library/user-event'

const PIKACHU = {
    id: 25,
    name: "pikachu",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    types: ["electric"],
    price: 10
}

vi.spyOn(pokemonService, "getPokemons").mockResolvedValue([
    PIKACHU
]);

describe("App", () => {
    test("should render a list of cards", async () => {
        render(<App />);
        const pikachu = await screen.findByText("pikachu");
        expect(pikachu).toBeInTheDocument();
    });

    test("should add a card to the cart", async () => {
        const user = userEvent.setup();

        render(<App />);
        const button = await screen.findByRole("button", { name: "Add to cart" });
        user.click(button);

        const cartItem = await screen.findByText("1 - pikachu");
        const total = await screen.findByText("Total: 10");

        expect(total).toBeInTheDocument();
        expect(cartItem).toBeInTheDocument();
    })
})