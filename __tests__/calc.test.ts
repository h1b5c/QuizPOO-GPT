import { describe, it, expect } from "vitest";
import questoes from "../data/questoes.json";

const QS = questoes as { id: string; discursiva: boolean; gabarito: string | null; anulada: boolean }[];
const OBJ = QS.filter((q) => !q.discursiva && !q.anulada);

export function calcNota(acertos: number, total: number) {
  return total ? (10 * acertos) / total : 0;
}

describe("nota", () => {
  it("total de objetivas validas e 53", () => {
    expect(OBJ).toHaveLength(53);
  });
  it("nota e proporcional 0-10", () => {
    expect(calcNota(0, 53)).toBe(0);
    expect(calcNota(53, 53)).toBe(10);
    expect(calcNota(27, 53)).toBeCloseTo(5.094, 3);
  });
  it("anulado e discursivas fora da conta", () => {
    expect(QS.filter((q) => q.anulada)).toHaveLength(1);
    expect(QS.filter((q) => q.discursiva)).toHaveLength(10);
  });
});
