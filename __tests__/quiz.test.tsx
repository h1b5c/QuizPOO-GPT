import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { screen, fireEvent } from "@testing-library/dom";
import { act } from "react";
import Home from "../app/page";
import questoes from "../data/questoes.json";

const QS = questoes as { id: string; discursiva: boolean }[];

beforeEach(() => { try { (globalThis as any).localStorage.clear(); } catch {} });
afterEach(() => cleanup());

describe("quiz App", () => {
  it("abre direto na primeira questao de 64", async () => {
    const { container } = render(<Home />);
    expect(await screen.findByText("Quiz POO — ENADE")).toBeTruthy();
    expect(container.textContent).toContain("64");
  });
  it("navegacao anterior/proxima funciona", async () => {
    const { container } = render(<Home />);
    expect(await screen.findByText("Quiz POO — ENADE")).toBeTruthy();
    const before = container.textContent;
    fireEvent.click(screen.getByText("Próxima"));
    await screen.findByText("Quiz POO — ENADE");
    const after = container.textContent;
    expect(after).not.toBe(before);
    fireEvent.click(screen.getByText("Anterior"));
    expect(container.textContent).toBe(before);
  });
  it("resumo exibe nota 0-10 so sobre objetivas e aviso", async () => {
    const idx = QS.length - 1;
    act(() => { (globalThis as any).localStorage.setItem("quizpoo-v1", JSON.stringify({ resp: {}, idx, finished: false })); });
    render(<Home />);
    fireEvent.click(await screen.findByText("Ver resumo"));
    expect(await screen.findByText(/Nota referente somente às questões objetivas/)).toBeTruthy();
  });
  it("discursiva tem textarea e botao Ver gabarito", async () => {
    const idx = QS.findIndex((q) => q.discursiva);
    act(() => { (globalThis as any).localStorage.setItem("quizpoo-v1", JSON.stringify({ resp: {}, idx, finished: false })); });
    render(<Home />);
    expect(await screen.findByLabelText(/Sua resposta/)).toBeTruthy();
    fireEvent.click(screen.getByText("Ver gabarito"));
    expect(await screen.findByText(/Padrão de resposta/)).toBeTruthy();
  });
});
