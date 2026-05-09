export type StatusTarefa =
    | "pending"
    | "completed";

export interface Tarefa {
    id: string;
    title: string;
    description: string;
    status: StatusTarefa;
}