import type { Tarefa } from "@/types/tarefas";

const STORAGE_KEY = "taskflow-tarefas-extras";

export function getTarefasExtras(): Tarefa[] {
    if (typeof window === "undefined") return [];

    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? (JSON.parse(raw) as Tarefa[]) : [];
    } catch {
        return [];
    }
}

export function salvarTarefaExtra(tarefa: Tarefa): void {
    const extras = getTarefasExtras();
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...extras, tarefa]));
}
