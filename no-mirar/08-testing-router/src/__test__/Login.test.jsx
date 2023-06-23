import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { describe, test, expect, beforeEach } from "vitest";
import routerConfig from "../routerConfig";
import { HelmetProvider } from "react-helmet-async";
import UserProvider from "../components/UserProvider";

const router = createMemoryRouter(routerConfig, {
    initialEntries: ["/login"]
});

describe("Login", () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test("renders login page", async () => {
        render(
            <UserProvider>
                <HelmetProvider>
                    <RouterProvider router={router} />
                </HelmetProvider>
            </UserProvider>
        );

        const user = userEvent.setup();
        const signInButton = await screen.findByRole("button", {name: "Iniciar sesión"});

        const nameInput = await screen.findByLabelText("Nombre");
        const lastnameInput = await screen.findByLabelText("Apellidos");

        await user.type(nameInput, "test");
        await user.type(lastnameInput, "test");
        
        await user.click(signInButton);

        const dashboardHeading = await screen.findByRole("heading", { name: "Dashboard" });
        expect(dashboardHeading).toBeInTheDocument();
    });

    test("save user to localstorage", async () => {
        render(
            <UserProvider>
                <HelmetProvider>
                    <RouterProvider router={router} />
                </HelmetProvider>
            </UserProvider>
        );

        const user = userEvent.setup();
        const signInButton = await screen.findByRole("button", {name: "Iniciar sesión"});

        const nameInput = await screen.findByLabelText("Nombre");
        const lastnameInput = await screen.findByLabelText("Apellidos");

        await user.type(nameInput, "test");
        await user.type(lastnameInput, "test");
        
        await user.click(signInButton);
        
        const userFromLocalStorage = localStorage.getItem("user")
        const userObject = JSON.parse(userFromLocalStorage);

        expect(userObject).toEqual({
            name: "test",
            lastname: "test"
        });
    });
})