interface Tarefa {
    id: string;
    title: string;
}

export default function useContadorDeTarefas(tarefas: Tarefa[]) {
    return tarefas.length;
}
