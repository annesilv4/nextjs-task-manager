import { render, screen } from "@testing-library/react";
import Footer from "@/app/components/Footer";
import "@testing-library/jest-dom";

test("Renderiza o footer com o texto correto", async () => {
    render(<Footer />);
    const elementFooter = await screen.findByText(`TaskFlow | 2026 - Todos os direitos reservados`);
    expect(elementFooter).toBeInTheDocument();
})