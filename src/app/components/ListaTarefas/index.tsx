"use client";

import { useEffect, useState } from "react";
import type { Tarefa } from "@/types/tarefas";
import { getTarefasExtras } from "@/lib/tarefasExtras";
import Grid from "../Grid";

type ListaTarefasProps = {
    tarefasIniciais: Tarefa[];
};

export default function ListaTarefas({ tarefasIniciais }: ListaTarefasProps) {
    const [tarefas, setTarefas] = useState(tarefasIniciais);

    useEffect(() => {
        const extras = getTarefasExtras();
        if (extras.length > 0) {
            setTarefas([...tarefasIniciais, ...extras]);
        }
    }, [tarefasIniciais]);

    return <Grid tarefas={tarefas} />;
}
