import { render, screen } from "@testing-library/react";
import Header from "@/app/components/Header";
import "@testing-library/jest-dom"

test("Renderiza o header com o texto correto", async () => {
    render(<Header />);
    const elementTitle = await screen.findByText("TaskFlow");
    expect(elementTitle).toBeInTheDocument();
});

test("Renderiza a descrição do header", async () => {
    render(<Header />);
    const elementDescription = await screen.findByText("Seu gerenciador de tarefas.");
    expect(elementDescription).toBeInTheDocument();
});
