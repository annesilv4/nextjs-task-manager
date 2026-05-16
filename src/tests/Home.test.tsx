import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import "@testing-library/jest-dom";

jest.mock("next/navigation", () => ({
    useRouter() {
        return { push: jest.fn() };
    },
}));

beforeEach(() => {
    localStorage.clear();
});

test("Renderiza a home com tarefas do arquivo simulado", async () => {
    const ui = await Home();
    render(ui);

    expect(screen.getByText("Lista de Tarefas")).toBeInTheDocument();
    expect(screen.getByText("Criar estrutura do projeto")).toBeInTheDocument();
    expect(screen.getByText("Desenvolver componente de lista")).toBeInTheDocument();
    expect(screen.getByText(/Você possuí 15 tarefas/)).toBeInTheDocument();
    expect(
        screen.getByRole("button", { name: /adicionar tarefa/i })
    ).toBeInTheDocument();
});
