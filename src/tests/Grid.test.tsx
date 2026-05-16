import { render, screen } from "@testing-library/react";
import Grid from "@/app/components/Grid";
import "@testing-library/jest-dom"

// MOCK DO USE ROUTER
jest.mock('next/navigation', () => ({
    useRouter() {
        return {
            push: jest.fn()
        }
    }
}));

// MOCK CARD
jest.mock('../app/components/Card', () => {
    return function MockCard({ tarefa }: { tarefa: any }) {
        return <div data-testid="card">{tarefa.title}</div>;
    };
});

// MOCK DEFAULT BUTTON
jest.mock('../app/components/DefaultButton', () => {
    return function MockDefaultButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
        return <button onClick={onClick}>{children}</button>;
    };
});

const tarefasMock = [
    { id: '1', title: 'Tarefa 1', description: 'Desc 1', status: 'pending' as const },
    { id: '2', title: 'Tarefa 2', description: 'Desc 2', status: 'completed' as const },
];

test("deve renderizar os cards para cada tarefa", () => {
    render(<Grid tarefas={tarefasMock} />);
    const cards = screen.getAllByTestId('card');
    expect(cards).toHaveLength(2);
});

test("exibe o total de tarefas retornado pelo hook useContadorDeTarefas", () => {
    render(<Grid tarefas={tarefasMock} />);
    expect(screen.getByText("Você possuí 2 tarefas")).toBeInTheDocument();
});

test("deve exibir o título de cada tarefa nos cards", () => {
    render(<Grid tarefas={tarefasMock} />);
    expect(screen.getByText('Tarefa 1')).toBeInTheDocument();
    expect(screen.getByText('Tarefa 2')).toBeInTheDocument();
})

test("deve renderizar o botão de adicionar tarefa", () => {
    render(<Grid tarefas={tarefasMock} />);
    expect(screen.getByText('Adicionar Tarefa')).toBeInTheDocument();
})

test("deve renderizar sem cards quando a lista de tarefas estiver vazia", () => {
    render(<Grid tarefas={[]} />);
    expect(screen.queryByTestId('card')).not.toBeInTheDocument();
})