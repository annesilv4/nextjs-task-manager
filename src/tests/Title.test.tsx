import { render, screen } from "@testing-library/react";
import Title from "@/app/components/Title";
import "@testing-library/jest-dom"

test("Renderiza o título com o texto correto", async () => {
    render(<Title title="Lista de Tarefas" />);
    const elementTitle = await screen.findByText("Lista de Tarefas");
    expect(elementTitle).toBeInTheDocument();
})
