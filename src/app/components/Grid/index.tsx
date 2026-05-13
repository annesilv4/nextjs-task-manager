"use client"

import type { Tarefa } from "@/types/tarefas";
import Style from "./Grid.module.css";
import Card from "../Card";
import DefaultButton from "../DefaultButton";
import { useRouter } from "next/navigation";
import useContadorDeTarefas from "@/hooks/useContadorDeTarefas";

type GridProps = {
    tarefas: Tarefa[];
}

const Grid = ({ tarefas }: GridProps) => {
    const router = useRouter();
    const totalTarefas = useContadorDeTarefas(tarefas);

    return (
        <>

            <div className={Style.info}>
                <h2 className={Style.total}>Você possuí {totalTarefas} tarefas</h2>
                <DefaultButton onClick={() => router.push("/new-task")}>Adicionar Tarefa</DefaultButton>
            </div>
            <section className={Style.grid}>
                {tarefas.map((tarefa) => (
                    <Card key={tarefa.id} tarefa={tarefa} />
                ))}
            </section>
        </>
    )
}

export default Grid;