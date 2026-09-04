---
name: portfolio-linear-design
description: >-
  Sistema de design 'Midnight Precision Instrument' (baseado no Linear Design System)
  adaptado para o portfólio de Luan Chaves. Força a IA a seguir rigorosamente a escala
  tipográfica com tracking negativo, pesos contidos (300-590), raio de borda estrito
  (12px cards, 6px botões, 9999px pills), elevação por bordas hairline (0.5px-1px)
  e paleta de cores corporativa escura com destaque Cyan elétrico (#00e5ff).
---

# Portfolio Linear Design System — Skill & Guidelines

> **Filosofia:** *Midnight Precision Instrument* — Superfícies escuras técnicas, tipografia milimétrica e nítida com letter-spacing negativo, pesos contidos (sem pesos pesados > 590), bordas *hairline* precisas e um único acento cromático funcional (*Electric Cyan #00e5ff*).

Toda alteração de layout, componentes, CSS ou HTML neste projeto **DEVE** seguir rigorosamente as regras visuais e restrições descritas neste documento.

---

## 1. Tokens de Cores (Paleta Padrão do Portfólio)

Mantém 100% da identidade visual atual do portfólio (Dark & Technical Cyan):

| Nome | Valor | Token CSS | Função no Sistema |
| :--- | :--- | :--- | :--- |
| **Void (Canvas)** | `#0a0e17` | `--bg-main` | Fundo principal da página (canvas full-bleed). |
| **Surface (Carbon)** | `#111827` | `--bg-surface` | Superfície de cards, painéis e containers principais. |
| **Elevated (Obsidian)** | `#162032` | `--bg-surface-elevated` | Superfícies elevadas e painéis secundários destacados. |
| **Terminal / Deep** | `#070a10` | `--bg-terminal` | Áreas de terminal, consoles de código e blocos de código. |
| **Surface Alt** | `#0d1320` | `--bg-surface-alt` | Variação de fundo para seções alternadas. |
| **Header Tint** | `rgba(10, 14, 23, 0.88)` | `--bg-header` | Fundo do header fixo com backdrop blur. |
| **Paper (Primary Text)** | `#f8fafc` | `--text-primary` | Títulos principais, hero e textos com ênfase máxima. |
| **Mist (Secondary Text)** | `#94a3b8` | `--text-secondary` | Corpo de texto, subtítulos e labels principais. |
| **Ash / Fog (Muted Text)** | `#64748b` | `--text-muted` | Metadados, datas, ícones inativos e textos terciários. |
| **Inverse Text** | `#0a0e17` | `--text-inverse` | Texto em botões com fundo sólido claro/cyan. |
| **Electric Cyan (CTA)** | `#00e5ff` | `--cyan-primary` | **Acento de Ação Principal:** botão de ação prioritário e indicador ativo. |
| **Cyan Hover** | `#38bdf8` | `--cyan-hover` | Estado hover de links e elementos interativos. |
| **Cyan Border** | `rgba(0, 229, 255, 0.35)` | `--cyan-border` | Bordas ativas ou de destaque dos cards principais. |
| **Indigo Accent** | `#6366f1` | `--indigo-accent` | Acento auxiliar para tags, badges e categorias. |
| **Purple Accent** | `#a855f7` | `--purple-accent` | Acento auxiliar para tags secundárias. |
| **Emerald Success** | `#10b981` | `--emerald-success` | Indicadores de status de sucesso, métricas e telemetria. |
| **Amber Warning** | `#f59e0b` | `--amber-warning` | Indicadores de status em progresso / atenção. |
| **Rose Danger** | `#f43f5e` | `--rose-danger` | Indicadores de erro ou criticidade. |
| **Border Subtle (Hairline)** | `rgba(255, 255, 255, 0.08)` | `--border-subtle` | Borda estrutural sutil (0.5px / 1px). |
| **Border Card** | `rgba(255, 255, 255, 0.12)` | `--border-card` | Borda de definição de cartões e painéis. |

---

## 2. Tipografia e Escala de Texto

A tipografia deve transmitir precisão cirúrgica de engenharia:

### Fontes
- **UI / Headings / Body:** `'Inter Variable'`, `'Inter'`, system-ui, sans-serif (`--font-body`).
  - *OpenType Features recomendadas:* `"cv01" on, "ss03" on, "zero" on`.
- **Código / Monospace / Metadados:** `'JetBrains Mono'`, `'Berkeley Mono'`, `'Fira Code'`, monospace (`--font-mono`).

### Pesos Tipográficos Permitidos
- **Light:** `300`
- **Regular:** `400`
- **Medium (Precision):** `510`
- **Semi-Bold / Emphasis:** `590`
- 🚫 **PROIBIDO:** Não utilizar pesos ultra-pesados (`bold 700`, `extra-bold 800`, `black 900`). O design Linear limita intencionalmente os pesos em até `590`.

### Escala Tipográfica & Tracking (Letter-Spacing Negativo Obrigatório)

| Papel | Tamanho | Peso | Line Height | Letter Spacing | Token / Aplicação |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display** | `72px` | `510` | `1.0` | `-1.584px (-0.022em)` | Hero display text |
| **Hero Title** | `64px` | `510` | `1.0` | `-1.408px (-0.022em)` | Hero primary title |
| **Section Title** | `48px` | `510` | `1.0` | `-1.056px (-0.022em)` | Títulos de seção (`h2`) |
| **Subheading** | `32px` | `400` | `1.13` | `-0.704px (-0.022em)` | Títulos de cases / cards (`h3`) |
| **Heading SM** | `24px` | `400` | `1.33` | `-0.288px (-0.012em)` | Títulos de blocos menores |
| **Body Emphasis** | `20px` | `590` | `1.33` | `-0.240px (-0.012em)` | Chamadas de destaque |
| **Body Large** | `17px` | `590` | `1.60` | `normal` | Textos introdutórios |
| **Body Regular** | `16px` | `400` | `1.50` | `normal` | Parágrafos e descrições |
| **Body Small** | `15px` | `400` | `1.60` | `-0.165px (-0.011em)` | Textos de cards e listas |
| **Caption / Nav** | `13px` | `400` | `1.20` | `normal` | Links de navegação e notas |
| **Badge / Label** | `12px` | `400` | `1.40` | `normal` | Tags, status e chips |
| **Micro** | `10px` | `510` | `1.50` | `normal` | Código mono e indicadores |

---

## 3. Escala de Espaçamento e Formas

- **Unidade Base:** `4px`
- **Escala de Espaçamento:** `4px`, `8px`, `12px`, `16px`, `20px`, `24px`, `28px`, `32px`, `36px`, `40px`, `48px`, `56px`, `64px`, `80px`, `96px`, `128px`.
- **Section Gap:** `96px` (espaçamento vertical generoso entre seções).
- **Card Padding:** `24px` a `32px`.
- **Element Gap:** `8px` a `16px`.
- **Page Max Width:** `1200px` centralizado.

### Vocabulário Estrito de Border Radius (Apenas 5 Raios Permitidos)

| Elemento | Raio (Radius) | Descrição |
| :--- | :--- | :--- |
| **Cards & Containers** | `12px` | Raio máximo permitido para qualquer painel ou card. |
| **Buttons & Inputs** | `6px` | Raio padrão para botões de ação e campos de formulário. |
| **Badges & Tags** | `4px` | Raio compacto para badges e tags técnicas. |
| **Micro Elements** | `2px` | Raio para detalhes minuciosos e indicadores. |
| **Pills & Status Dots** | `9999px` | Raio completo para pílulas de status e tags circulares. |
| 🚫 **PROIBIDO** | `> 12px em cards` | Nunca usar bordas de 16px, 20px ou 28px em cards e containers. |

---

## 4. Elevação, Sombras e Bordas Hairline

A separação de superfícies no estilo Linear é construída por **bordas finas e contraste de cores de fundo**, e **NUNCA** por sombras volumosas ou neons excessivos:

- **Bordas Hairline (0.5px / 1px):** Usar `border: 1px solid var(--border-subtle)` ou `box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08)`.
- **Sombras Sutis:**
  - `sm`: `rgba(0, 0, 0, 0.4) 0px 2px 4px 0px`
  - `md`: `rgba(0, 0, 0, 0.2) 0px 0px 12px 0px inset`
  - `xl`: `rgba(8, 9, 10, 0.6) 0px 4px 32px 0px`
- 🚫 **PROIBIDO:** Não utilizar sombras projetadas exageradas, múltiplos `box-shadow: 0 0 50px ...` ou gradientes chamativos em cards e textos.

---

## 5. Regras de Componentes

### 1. Botão de Ação Primária (Electric Cyan CTA)
- **Fundo:** `#00e5ff` (Cyan Primário).
- **Texto:** `#0a0e17` (Escuro, legibilidade máxima).
- **Borda:** `6px` radius.
- **Padding:** `10px 16px`.
- **Tipografia:** `Inter 14px`, peso `510`, letter-spacing `-0.011em`.
- **Regra de Ouro:** Deve existir **no máximo UM** botão primário preenchido por área de foco visual para guiar a atenção com precisão.

### 2. Botão Ghost / Outline
- **Fundo:** Transparente (ou `rgba(255,255,255,0.02)`).
- **Borda:** `1px solid var(--border-subtle)`.
- **Texto:** `#94a3b8` (hover: `#f8fafc`).
- **Radius:** `6px`.

### 3. Pill Status Tag
- **Fundo:** `rgba(255, 255, 255, 0.05)`.
- **Borda:** `1px solid var(--border-subtle)`.
- **Radius:** `9999px`.
- **Padding:** `4px 12px`.
- **Fonte:** `Inter 12px`, peso `400`.

### 4. Card Técnico (Product / Case Card)
- **Fundo:** `#111827` (`--bg-surface`).
- **Borda:** `1px solid var(--border-card)` com radius de `12px`.
- **Padding:** `24px` a `32px`.
- **Conteúdo:** Focado em arquitetura, diagramas, dados reais, métricas e resoluções técnicas. Sem fotos genéricas de banco de imagens.

---

## 6. Checklist de Validação para a IA (Do's and Don'ts)

### ✅ FAZER (DO)
1. Aplicar sempre tracking negativo (`letter-spacing: -0.022em`) em títulos a partir de 32px.
2. Manter pesos de fonte contidos na faixa `300` a `590`.
3. Usar estritamente os raios de borda padronizados: `12px` (cards), `6px` (botões/inputs), `4px` (badges), `9999px` (pills).
4. Usar bordas *hairline* de 1px/0.5px e contrastes de superfície (`#0a0e17` → `#111827` → `#162032`) para hierarquia.
5. Manter `#00e5ff` como a cor de ação funcional prioritária.
6. Garantir responsividade e alinhamento em grid/flex sem sobreposição de elementos.

### ❌ NÃO FAZER (DON'T)
1. ❌ **NÃO USAR pesos 700, 800 ou 900** (evite fontes excessivamente pesadas).
2. ❌ **NÃO USAR `border-radius` de 16px, 20px ou 24px em cards** (o limite é `12px`).
3. ❌ **NÃO USAR gradientes decorativos coloridos** em botões, textos ou fundos de cartões.
4. ❌ **NÃO USAR sombras difusas e glows exagerados** que poluam o ambiente escuro.
5. ❌ **NÃO USAR fotos de banco de imagens genéricas**; o portfólio prioriza diagramas técnicos, prints de produto/dashboard, métricas e código.
6. ❌ **NÃO MISTURAR cores de acento concorrentes** na mesma ação; o Cyan é o condutor principal de foco.