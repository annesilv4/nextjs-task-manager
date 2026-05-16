import { render, screen } from "@testing-library/react";
import Card from "@/app/components/Card";
import "@testing-library/jest-dom";

test("Renderiza o card com o texto correto", () => {
    const task = {
        id: "1",
        title: "Tarefa 1",
        description: "Desc 1",
        status: "pending" as const,
    };
    render(<Card tarefa={task} />);
    const elementTitle = screen.getByText("Tarefa 1");
    expect(elementTitle).toBeInTheDocument();
})