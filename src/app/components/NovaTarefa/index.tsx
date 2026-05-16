"use client";

import { useState, type SubmitEvent } from "react";
import { useRouter } from "next/navigation";
import DefaultButton from "../DefaultButton";
import { salvarTarefaExtra } from "@/lib/tarefasExtras";
import type { Tarefa } from "@/types/tarefas";
import Style from "./NovaTarefa.module.css";

export type NovaTarefaPayload = Pick<Tarefa, "title" | "description">;

type NovaTarefaProps = {
    onAdicionar?: (tarefa: NovaTarefaPayload) => void;
};

const NovaTarefa = ({ onAdicionar }: NovaTarefaProps) => {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [erro, setErro] = useState("");

    function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        const titulo = title.trim();
        if (!titulo) {
            setErro("O título é obrigatório.");
            return;
        }

        const novaTarefa: NovaTarefaPayload = {
            title: titulo,
            description: description.trim(),
        };

        if (onAdicionar) {
            onAdicionar(novaTarefa);
        } else {
            salvarTarefaExtra({
                id: crypto.randomUUID(),
                ...novaTarefa,
                status: "pending",
            });
            router.push("/");
        }

        setTitle("");
        setDescription("");
        setErro("");
    }

    return (
        <form className={Style.form} onSubmit={handleSubmit} noValidate>
            {erro && <p role="alert">{erro}</p>}
            <div className={Style.form__title}>
                <label htmlFor="title">Título</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
            </div>
            <div className={Style.form__description}>
                <label htmlFor="description">Descrição</label>
                <textarea
                    id="description"
                    name="description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
            </div>
            <div className={Style.form__button}>
                <DefaultButton type="submit">Criar Tarefa</DefaultButton>
            </div>
        </form>
    );
};

export default NovaTarefa;
