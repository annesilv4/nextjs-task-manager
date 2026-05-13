import { getTarefas } from "@/data/tarefas";
import Title from "./components/Title";
import Grid from "./components/Grid";

export default async function Home() {
  const tasks = await getTarefas();

  return (
    <>
      <Title title="Lista de Tarefas" />
      <Grid tarefas={tasks} />
    </>
  );
}
