import { getTarefas } from "@/data/tarefas";
import Title from "./components/Title";
import ListaTarefas from "./components/ListaTarefas";

export default async function Home() {
  const tasks = await getTarefas();

  return (
    <>
      <Title title="Lista de Tarefas" />
      <ListaTarefas tarefasIniciais={tasks} />
    </>
  );
}
