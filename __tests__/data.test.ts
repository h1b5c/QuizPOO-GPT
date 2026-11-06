import { describe, it, expect } from "vitest";
import questoes from "../data/questoes.json";
import fs from "node:fs";
import path from "node:path";

const QS = questoes as {
  id: string; ano: number; prova: string; numero: number; discursiva: boolean;
  pagina: number; enunciado: string;
  alternativas: { letra: string; texto: string }[]; gabarito: string | null;
  anulada: boolean; padrao: string | null; imagem: string | null;
}[];

describe("questoes.json integridade", () => {
  it("tem 64 entradas", () => {
    expect(QS).toHaveLength(64);
  });
  it("tem IDs unicos", () => {
    const ids = new Set(QS.map((q) => q.id));
    expect(ids.size).toBe(QS.length);
  });
  it("tem 54 objetivas e 10 discursivas", () => {
    expect(QS.filter((q) => !q.discursiva)).toHaveLength(54);
    expect(QS.filter((q) => q.discursiva)).toHaveLength(10);
  });
  it("tem exatamente 1 anulada fora da nota e 53 objetivas validas", () => {
    expect(QS.filter((q) => q.anulada)).toHaveLength(1);
    expect(QS.filter((q) => !q.discursiva && !q.anulada)).toHaveLength(53);
  });
  it("todas tem enunciado nao vazio e imagem existente", () => {
    for (const q of QS) {
      expect(q.enunciado.trim().length, q.id).toBeGreaterThan(40);
      expect(q.imagem, q.id).toBeTruthy();
      const imgPath = path.join(process.cwd(), "public", q.imagem!);
      expect(fs.existsSync(imgPath), `${q.id} ${imgPath}`).toBe(true);
    }
  });
  it("objetivas validas tem gabarito A-E", () => {
    for (const q of QS.filter((x) => !x.discursiva && !x.anulada)) {
      expect(["A", "B", "C", "D", "E"], q.id).toContain(q.gabarito);
    }
  });
  it("objetivas com texto tem 5 alternativas A-E; sem texto, usa imagem (fallback A-E)", () => {
    const withText = QS.filter((q) => !q.discursiva && q.alternativas.length >= 2);
    for (const q of withText) {
      expect(q.alternativas.map((a) => a.letra)).toEqual(["A", "B", "C", "D", "E"]);
    }
    const withoutText = QS.filter((q) => !q.discursiva && q.alternativas.length < 2);
    for (const q of withoutText) {
      expect(q.imagem, q.id).toBeTruthy(); // fallback: responder pela letra via imagem
    }
  });
  it("discursivas nao exigem gabarito nem alternativas", () => {
    for (const q of QS.filter((x) => x.discursiva)) {
      expect(q.gabarito).toBeNull();
      expect(q.alternativas).toEqual([]);
    }
  });
});
