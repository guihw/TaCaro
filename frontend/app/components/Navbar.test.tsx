import { describe, it, expect} from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import userEvent from "@testing-library/user-event";

describe('Navbar', () => {
    it('deve alternar entre abrir e fechar', async() => {
        const user = userEvent.setup();
        render(<Navbar />)
        const button = screen.getByRole('button', {name: 'abrir menu'});

        await user.click(button);
        expect(screen.getByRole('button', {name: 'fechar menu'})).toBeInTheDocument();
    });
});
