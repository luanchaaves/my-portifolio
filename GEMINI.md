# Linear Visual Design System Rules — Portfolio Luan Chaves

Sempre que você criar, modificar ou refatorar qualquer arquivo HTML, CSS ou JavaScript neste projeto, você é **OBRIGADO** a seguir rigorosamente as regras visuais da skill `portfolio-linear-design`:

1. **Paleta de Cores Padrão:**
   - Background Principal (Void): `#0a0e17`
   - Superfície dos Cards (Carbon): `#111827`
   - Superfícies Elevadas (Obsidian): `#162032`
   - Console / Terminal: `#070a10`
   - Textos: `#f8fafc` (Títulos/Primary), `#94a3b8` (Body/Secondary), `#64748b` (Muted)
   - Acento Único de Ação / CTA: `#00e5ff` (Electric Cyan)
   - Bordas Hairline: `rgba(255, 255, 255, 0.08)` e `rgba(255, 255, 255, 0.12)`

2. **Tipografia & Tracking:**
   - Fonte principal: Inter Variable / Inter / sans-serif.
   - Fonte de código/metadados: JetBrains Mono / Berkeley Mono / monospace.
   - Pesos permitidos: 300, 400, 510, 590. **PROIBIDO usar pesos >= 700.**
   - Tracking negativo obrigatório: -0.022em em títulos >= 32px e -0.012em em subtítulos.

3. **Vocabulário Estrito de Border-Radius:**
   - Cards e painéis: estritamente **12px** (PROIBIDO usar 16px, 20px ou 28px em cards).
   - Botões e inputs: **6px**.
   - Badges e tags: **4px**.
   - Pills de status: **9999px**.

4. **Elevação e Sombras:**
   - A elevação é definida por bordas hairline sutis (0.5px / 1px) e contraste entre camadas escuras (#0a0e17 -> #111827 -> #162032).
   - PROIBIDO usar sombras difusas excessivas, gradientes decorativos em botões ou glows desnecessários.

5. **Ação Única (Single Focus):**
   - No máximo 1 botão primário colorido em cyan por visão. Todos os outros botões devem ser neutros ou ghost/outline.