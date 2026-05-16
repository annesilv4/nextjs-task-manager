import { render, screen } from "@testing-library/react";
import DefaultButton from "@/app/components/DefaultButton";
import "@testing-library/jest-dom";

test("Renderiza o botão com o texto correto", () => {
    render(<DefaultButton>Clique aqui</DefaultButton>);
    const elementButton = screen.getByText("Clique aqui");
    expect(elementButton).toBeInTheDocument();
});