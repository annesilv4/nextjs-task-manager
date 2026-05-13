import type { Tarefa } from "@/types/tarefas";
import Style from "./Card.module.css";

interface CardProps {
    tarefa: Tarefa;
}

const Card = ({ tarefa }: CardProps) => {
    const { title, description, status } = tarefa;

    return (
        <div className={Style.card}>
            <div className={Style.card__info}>
                <input type="checkbox" defaultChecked={status === "completed"} />
                <h3 className={Style.card__title}>{title}</h3>
                <p className={Style.card__description}>{description}</p>
            </div>
        </div>
    )
}

export default Card;