import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NovaTarefa from "@/app/components/NovaTarefa";
import { getTarefasExtras } from "@/lib/tarefasExtras";
import "@testing-library/jest-dom";

const mockPush = jest.fn();

jest.mock("next/navigation", () => ({
    useRouter() {
        return {
            push: mockPush,
        };
    },
}));

beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
});

test("Renderiza os campos do formulário", () => {
    render(<NovaTarefa />);

    expect(screen.getByLabelText("Título")).toBeInTheDocument();
    expect(screen.getByLabelText("Descrição")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /criar tarefa/i })).toBeInTheDocument();
});

test("Exibe erro quando o título está vazio", async () => {
    const user = userEvent.setup();
    render(<NovaTarefa />);

    await user.click(screen.getByRole("button", { name: /criar tarefa/i }));
    expect(screen.getByRole("alert")).toHaveTextContent("O título é obrigatório");
});

test("chama onAdicionar com título e descrição ao enviar", async () => {
    const onAdicionar = jest.fn();
    const user = userEvent.setup();
    render(<NovaTarefa onAdicionar={onAdicionar} />);

    await user.type(screen.getByLabelText("Título"), "Nova tarefa");
    await user.type(screen.getByLabelText("Descrição"), "Descrição teste");
    await user.click(screen.getByRole("button", { name: /criar tarefa/i }));

    expect(onAdicionar).toHaveBeenCalledWith({
        title: "Nova tarefa",
        description: "Descrição teste",
    });
});

test("limpa os campos após envio com sucesso", async () => {
    const onAdicionar = jest.fn();
    const user = userEvent.setup();
    render(<NovaTarefa onAdicionar={onAdicionar} />);

    const inputTitulo = screen.getByLabelText("Título");
    const inputDescricao = screen.getByLabelText("Descrição");

    await user.type(inputTitulo, "Tarefa");
    await user.type(inputDescricao, "Detalhes");
    await user.click(screen.getByRole("button", { name: /criar tarefa/i }));

    expect(inputTitulo).toHaveValue("");
    expect(inputDescricao).toHaveValue("");
});

test("salva a tarefa e redireciona quando onAdicionar não é passado", async () => {
    const user = userEvent.setup();
    render(<NovaTarefa />);

    await user.type(screen.getByLabelText("Título"), "Tarefa extra");
    await user.type(screen.getByLabelText("Descrição"), "Desc extra");
    await user.click(screen.getByRole("button", { name: /criar tarefa/i }));

    const tarefasSalvas = getTarefasExtras();
    expect(tarefasSalvas).toHaveLength(1);
    expect(tarefasSalvas[0]).toMatchObject({
        title: "Tarefa extra",
        description: "Desc extra",
        status: "pending",
    });
    expect(mockPush).toHaveBeenCalledWith("/");
});