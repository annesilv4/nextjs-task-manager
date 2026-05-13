import { render, renderHook, screen } from "@testing-library/react";
import useContadorDeTarefas from "@/hooks/useContadorDeTarefas";
import "@testing-library/jest-dom";

test("Renderiza a quantidade de tarefas", () => {
    const tarefas = [
        {
            id: '1',
            title: 'Tarefa 1',
        },
        {
            id: '2',
            title: 'Tarefa 2',
        }
    ];

    const { result } = renderHook(() => useContadorDeTarefas(tarefas));
    expect(result.current).toBe(2);
})