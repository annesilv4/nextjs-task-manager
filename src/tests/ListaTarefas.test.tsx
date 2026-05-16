import { render, screen, waitFor } from "@testing-library/react";
import ListaTarefas from "@/app/components/ListaTarefas";
import { salvarTarefaExtra } from "@/lib/tarefasExtras";
import "@testing-library/jest-dom";

jest.mock("next/navigation", () => ({
    useRouter() {
        return { push: jest.fn() };
    },
}));

const tarefasIniciais = [
    {
        id: "1",
        title: "Tarefa inicial",
        description: "Desc",
        status: "pending" as const
    }
];

beforeEach(() => {
    localStorage.clear();
});

test("Renderiza as tarefas iniciais", () => {
    render(<ListaTarefas tarefasIniciais={tarefasIniciais} />);
    expect(screen.getByText("Tarefa inicial")).toBeInTheDocument();
});

test("inclui tarefas extras salvas no localStorage", async () => {
    salvarTarefaExtra({
        id: "99",
        title: "Tarefa extra",
        description: "Salva pelo formulário",
        status: "pending",
    });

    render(<ListaTarefas tarefasIniciais={tarefasIniciais} />);

    await waitFor(() => {
        expect(screen.getByText("Tarefa extra")).toBeInTheDocument();
    });
    expect(screen.getByText(/Você possuí 2 tarefas/)).toBeInTheDocument();
});