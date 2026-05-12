"use client"

import type { Tarefa } from "@/types/tarefas";
import Style from "./Grid.module.css";
import Card from "../Card";
import DefaultButton from "../DefaultButton";
import { useRouter } from "next/navigation";

type GridProps = {
    tarefas: Tarefa[];
}

const Grid = ({ tarefas }: GridProps) => {
    const router = useRouter();

    return (
        <>
            <div className={Style.btnAdd}>
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