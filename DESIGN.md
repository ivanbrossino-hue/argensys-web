# DESIGN.md — Argensys IT Services

Documento de dirección visual. **No se escribe HTML/CSS hasta que esto se apruebe.**

---

## 0. Diagnóstico de partida

Las dos versiones anteriores comparten el mismo error: ambas son **sitios oscuros, centrados y simétricos**.

| | WordPress original | Versión anterior (rechazada) |
|---|---|---|
| Canvas | Claro/corporativo genérico | Fondo navy oscuro global |
| Hero | Texto centrado + badge "20 años" | Texto centrado "Tus amenazas son reales" + 2 CTAs |
| Servicios | Grilla de cards | Grilla de 4 cards con emoji (🖥️🛟🛡️⚡) |
| Datos | Badges de certificación | Barra de stats grande centrada (+20 / 24/7 / 100%) |
| Proceso | — | Timeline vertical 01–04 |
| Tipografía | System / genérica | Sans genérica (tipo Inter/Poppins) |

El cliente aprobó **solo dos cosas**: la **paleta** y la **animación de intro**. Todo lo demás se reinventa.

**Tesis del rediseño:** una consultora de infraestructura y monitoreo de 20 años no se ve como una startup oscura con neón. Se ve como un **documento de ingeniería**: claro, anotado, preciso, con datos reales en los márgenes. Invertimos los tres reflejos del diseño anterior:

1. Fondo oscuro → **canvas claro "papel técnico"**; el navy pasa a ser **tinta y paneles estructurales**, no el lienzo.
2. Centrado y simétrico → **layout asimétrico de dos columnas** con una "espina" lateral.
3. Stats grandes centradas → **telemetría monoespaciada en el margen**, leída como una consola de monitoreo.

---

## 1. Paleta exacta (aprobada — se respeta)

Los azules son los aprobados por el cliente. Lo que cambia es **el rol**: el navy deja de ser fondo global y se vuelve tinta + panel; el azul se usa con medida, no como neón.

| Nombre | Hex | Rol |
|---|---|---|
| **Tinta** | `#0d1526` | Color de texto principal (titulares y cuerpo sobre claro). Color de paneles estructurales: header, footer, bandas de producto. |
| **Noche** | `#0a0f1e` | El navy más profundo. Fondo de la animación de intro y de la banda hero más oscura. |
| **Señal** | `#2563eb` | Azul acento primario. Links, estados interactivos, eyebrow activo, énfasis en titulares. Uso **medido** (≈5–8% de la superficie). |
| **Señal viva** | `#1e90ff` | Azul brillante. Solo para indicadores de estado "en vivo" (puntos de telemetría), hover y micro-acentos. Nunca como relleno de área. |
| **Papel** | `#F4F6FA` | Canvas principal del sitio. Off-white **frío** (no crema). Fondo dominante de secciones de contenido. |
| **Papel hueso** | `#FFFFFF` | Blanco puro para tarjetas/superficies elevadas puntuales y formularios. |
| **Grafito** | `#5B6573` | Gris neutro frío para texto secundario, etiquetas y metadatos. |
| **Trazo** | `#D8DEE9` | Gris claro para hairlines, divisores y bordes de 1px. |

> **Por qué papel frío y no crema:** el crema cálido (#F4F1EA) + serif + terracota es justamente uno de los clichés de "diseño IA" más reconocibles. Nos mantenemos en la familia fría/azul aprobada por el cliente, lo que además da coherencia con el navy.

Contraste verificado: Tinta sobre Papel ≈ 15:1; Grafito sobre Papel ≈ 5.3:1; Señal sobre Papel ≈ 5.4:1. Todo AA/AAA.

---

## 2. Tipografía

Tres roles, una decisión con argumento en cada uno. **Nada de Inter ni Roboto.**

### Display — `Fraunces` (Google Fonts, variable)
Para titulares de hero y encabezados de sección, en pesos altos y tamaño óptico grande.
- **Por qué:** transmite **trayectoria y solidez** (es un serif con herencia editorial, no decorativo). Sus ejes `opsz`/`SOFT`/`WONK` le dan carácter propio sin caer en lo "fashion". Una consultora de 20 años se beneficia de la gravedad de un serif; las dos versiones anteriores eran 100% sans y por eso se sentían intercambiables con cualquier SaaS.
- **Uso con restricción:** solo en H1/H2 y una cita destacada. Nunca en cuerpo.

### Cuerpo y UI — `IBM Plex Sans` (Google Fonts)
Texto corrido, navegación, botones, listas.
- **Por qué (elección con significado):** Argensys es **IBM Business Partner**. Plex es la familia que IBM diseñó para sí misma: un grotesco humanista de grado corporativo, técnico y legible, con personalidad pero sin moda. La elección no es arbitraria — está anclada en el mundo real del cliente. Y no es ninguno de los defaults de IA.

### Telemetría / datos — `IBM Plex Mono` (Google Fonts)
Etiquetas técnicas, códigos de sección, datos de la "consola" (años, SLA, tiempos, tiers de partner), eyebrows.
- **Por qué:** superfamilia coherente con Plex Sans. El monoespaciado lee como **lectura de un sistema de monitoreo / NOC**, que es literalmente lo que Argensys hace (infra 24/7, Sentinel). El dato se vuelve textura, no adorno.

**Escala tipográfica (desktop, base 18px / 1.6):**
```
Display XL  64px  Fraunces 600   -0.5 letter   (H1 hero)
Display L   44px  Fraunces 600   -0.4          (H2 sección)
Title       26px  Plex Sans 600  -0.1          (H3)
Body L      20px  Plex Sans 400  intro/lead
Body        18px  Plex Sans 400  cuerpo
Meta        13px  Plex Mono 500   1.5 tracking UPPER  (eyebrows/labels)
Telemetría  14px  Plex Mono 400   datos de consola
```
Mobile: Display XL → 36px, Display L → 30px.

---

## 3. Concepto de layout

### Principio rector — la "espina" asimétrica
Cada página se construye sobre una grilla de **dos columnas de ancho desigual**:

```
 ┌──────────┬──────────────────────────────────────────┐
 │  ESPINA  │              CONTENIDO                     │
 │  (~26%)  │              (~74%)                        │
 │          │                                            │
 │ §03      │   Titular grande en Fraunces               │
 │ INFRA    │   Párrafo lead en Plex Sans                │
 │ ──────   │                                            │
 │ EST.2006 │   ...contenido de la sección...            │
 │ SLA 99.9 │                                            │
 │ ● ONLINE │                                            │
 └──────────┴──────────────────────────────────────────┘
```

La **espina** (columna izquierda, angosta) lleva: código de sección (§01…), etiqueta en mono, hairline, y **telemetría** real. La columna derecha lleva el contenido editorial. En mobile la espina colapsa arriba como una fila de metadatos. El ancho de la espina **varía sutilmente entre secciones** para reforzar la asimetría (no es una grilla rígida).

### Home (`index.html`) — wireframe

```
┌───────────────────────────────────────────────────────────┐
│ [intro animation: navy Noche, isologo se ensambla] (1 vez) │  ← se conserva
├───────────────────────────────────────────────────────────┤
│ HEADER  isologo · Servicios Infra Soporte Ciber Bitrix     │  ← panel Tinta
│         Partners Nosotros Sentinel Blog · [Contacto →]     │     sobrio, sticky
├──────────┬────────────────────────────────────────────────┤
│ ESPINA   │  HERO — banda Noche                             │
│ EST.2006 │  "Infraestructura que no se cae.                │  ← Fraunces, credible
│ ● 24/7   │   Soporte que atiende."                         │     no "espectacular"
│ BA · AR  │  lead Plex Sans + [Hablar con un ingeniero]     │
│          │  ┌── esquema SVG inline: rack/red/nube ──┐      │  ← blueprint, NO orbs
│          │  │  dibujo técnico a trazo en Señal      │      │     NO partículas
│          │  └──────────────────────────────────────┘      │
├──────────┴────────────────────────────────────────────────┤
│ FRANJA PARTNERS — logos reales en hilera, escala gris→color│  ← Fortinet IBM Lenovo
│ con tier en mono:  IBM ·BUSINESS  FORTINET ·ADVANCED ...    │     Bitrix24 Cato
├──────────┬────────────────────────────────────────────────┤
│ §SERV    │  SERVICIOS — no son cards. Es un CATÁLOGO/LEDGER:│
│ 05 áreas │  ┌─────────────────────────────────────────┐   │
│          │  │ §01  Infraestructura IT      Lenovo   →  │   │  ← filas full-width
│          │  ├─────────────────────────────────────────┤   │     hairline divisoria
│          │  │ §02  Soporte & Help Desk     SLA      →  │   │     hover: se abre
│          │  │ §03  Ciberseguridad          Fortinet →  │   │     detalle + tinta
│          │  │ §04  Bitrix24 & CRM          Silver   →  │   │
│          │  │ §05  Sentinel (monitoreo)    propio   →  │   │
│          │  └─────────────────────────────────────────┘   │
├──────────┴────────────────────────────────────────────────┤
│ BANDA TINTA — "20 años" como prosa con datos en el margen, │  ← NO 3 números
│ no como contador centrado. Texto + telemetría lateral.     │     grandes centrados
├──────────┬────────────────────────────────────────────────┤
│ §NOS     │  Por qué Argensys — 3 puntos en lista vertical  │
│          │  asimétrica (ancho variable), sin íconos emoji.  │
├──────────┴────────────────────────────────────────────────┤
│ CTA contacto: WhatsApp +54 9 11 5731-7988 · email          │
├───────────────────────────────────────────────────────────┤
│ FOOTER — panel Tinta. Mapa del sitio + telemetría + redes  │
└───────────────────────────────────────────────────────────┘
```

### Hero — esquema técnico (spec fijo)
El gráfico del hero es un **SVG inline estático, estilo plano de ingeniería**:
- **Trazo de 1px**, líneas **ortogonales** (sin curvas orgánicas ni diagonales decorativas).
- Motivo: un **rack de servidor conectado a una nube** mediante líneas ortogonales (rack → red → nube).
- Color de trazo: **Señal `#2563eb`** sobre fondo **Noche `#0a0f1e`** (banda hero).
- **Prohibido:** degradados, animaciones, esferas/orbs, relleno difuso, partículas. Es un dibujo técnico, no una ilustración.
- Etiquetas opcionales en **Plex Mono** sobre los nodos (ej. `RACK`, `LAN`, `CLOUD`) si refuerzan la lectura de "plano".

### Páginas internas
Misma espina. El hero interno es una **cabecera-ficha**: §código + nombre de sección en Fraunces + lead + telemetría específica (ej. en Ciberseguridad: `FORTINET ·ADVANCED`, `SOC 24/7`, `● MONITOREANDO`). El contenido usa el sistema ledger y bandas Tinta intercaladas. Páginas de servicio enlazan a partners y a Sentinel donde corresponde.

---

## 4. El elemento firma — "La Consola"

**Una capa persistente de telemetría monoespaciada que recorre el sitio como las anotaciones al margen de un documento de ingeniería / la lectura de un sistema de monitoreo.**

- Vive en la **espina** izquierda y reaparece en franjas (partners, banda 20 años, footer).
- Muestra **solo datos reales y verdaderos** de la empresa: `EST.2006`, `SLA 99.9%`, `BA · ARGENTINA`, tiers de partner (`IBM ·BUSINESS`, `FORTINET ·ADVANCED`, `LENOVO ·AUTHORIZED`, `BITRIX24 ·SILVER`, `CATO ·SASE`), `● 24/7/365`.
- Un punto `●` en **Señal viva** con un latido sutil (respeta `prefers-reduced-motion`) sugiere "sistema en línea" — guiño directo a Sentinel y al monitoreo 24/7, sin partículas ni redes flotantes.

**Por qué es inconfundible y por qué le pertenece a Argensys:** el motivo *es* su negocio (infra monitoreada, help desk 24/7, Sentinel). No es decoración importada; es el producto convertido en lenguaje visual. Reemplaza directamente el cliché de "3 números grandes centrados".

---

## 5. Qué hace diferente este diseño (vs. las dos versiones)

| Eje | Versiones anteriores | Este diseño |
|---|---|---|
| Canvas | Oscuro global (la rechazada) | **Papel frío claro**; navy = tinta + paneles |
| Composición | Centrada y simétrica | **Asimétrica de 2 columnas** con espina |
| Servicios | Grilla de cards con emoji | **Catálogo/ledger** de filas full-width |
| Datos | Stats grandes centradas | **Telemetría mono en el margen** ("La Consola") |
| Tipografía | Sans genérica única | **Fraunces + IBM Plex Sans + Plex Mono** |
| Íconos | Emoji 🖥️🛟🛡️ | **Esquemas SVG a trazo** (blueprint) + sin íconos donde no aportan |
| Proceso | Timeline 01–04 | Sin timeline; el numerado §01… es índice real de catálogo, no decoración |
| Acento azul | Neón sobre oscuro | Azul **medido** sobre claro |

### Antipatrones del brief — checklist de cumplimiento
- ✅ Sin gradient orbs / esferas difusas
- ✅ Sin cards radius-grande + sombra suave + ícono centrado
- ✅ Sin grilla simétrica de 3 columnas para servicios (es ledger)
- ✅ Sin timeline vertical con puntos numerados (§ es índice, no secuencia decorativa)
- ✅ Sin Inter / Roboto
- ✅ Sin "fondo oscuro + único neón" (canvas claro; navy estructural; azul medido)
- ✅ Sin separadores diagonales / curvas SVG genéricas (divisiones por banda de color y hairline recta)
- ✅ Sin partículas / red de conexiones en el hero (esquema técnico estático)
- ✅ Sin stats grandes centradas en columnas iguales (telemetría al margen)

### Riesgo asumido y cómo se controla
El sistema "documento de ingeniería con hairlines y mono" podría rozar el cliché de *broadsheet/periódico* (otro look IA). Se evita con: **whitespace generoso** (no columnas densas), **color** (paneles navy + azul, no blanco/negro de diario), **titulares serif Fraunces** (no grotesca de periódico) y un **radius pequeño y consistente (3px)** en superficies — ni cero-radius como declaración, ni radius grande de SaaS.

---

## 6. Stack y entrega (sin cambios respecto al brief)
HTML5 + CSS3 puro · JS vanilla · sin build · Google Fonts (Fraunces, IBM Plex Sans, IBM Plex Mono) · mobile-first desde 320px · paths relativos para GitHub Pages · logos de partners reales + SVG inline, sin stock. Piso de calidad: foco de teclado visible, `prefers-reduced-motion` respetado, navegación consistente en las 11 páginas.

---

---

## 7. Revisión post-investigación (R1–R6) — aprobada

Tras investigar competencia directa argentina (TalSoft, Delta Protect, RAN Security, Sueños Digitales), referencias de marca/enterprise (Computacenter, NTT Data, Fortinet, Cato) y vanguardia (Awwwards Sites of the Month + tendencias 2026), se confirma el concepto base y se incorporan seis refinamientos.

**Hallazgos clave:**
- El default del rubro es genérico (grilla de 3 cards + stats gigantes + sans de sistema). Le ganamos fácil evitándolo.
- Lo que separa "real" de "AI" en este rubro **no es el wow visual: es la especificidad** — copy honesto + assets propios + pruebas verificables (TalSoft y Delta Protect ganan por eso).
- Enterprise serio = **restraint + pruebas** (Computacenter: cero display innecesario, autoridad vía casos/premios/logos).
- **Navy oscuro NO es el problema** (NTT y Cato son oscuros y creíbles). El error de la versión rechazada era navy + neón + emoji + cards simétricas. → Usar navy como recurso estructural recurrente con confianza.
- Ilustración técnica > fotografía de stock (Cato/Fortinet usan diagramas). Valida nuestro blueprint.

**R1 — Capa de pruebas/credibilidad.** Banda de confianza (navy) con sectores atendidos + métricas reales (`+20 años`, `~10 ingenieros`, `5 partners certificados`, `365 días`) renderizadas como **telemetría inline, nunca como 3 números gigantes centrados**. Más un **testimonio real** con atribución y la tira de certificaciones jerarquizada.

**R2 — "Argensys Blueprints" como sistema.** Cada página/servicio tiene su propio diagrama técnico a trazo (1px, ortogonal, Señal sobre Noche): rack+red (Infra), topología SOC/firewall (Ciber), flujo de backup (Soporte), pipeline de nodos (Bitrix24), consola de monitoreo (Sentinel). Lenguaje visual propio e inimitable.

**R3 — Movimiento sobrio con propósito.** Scroll-reveal suave al entrar cada sección + trazado animado por única vez (`stroke-dashoffset`) de los blueprints internos al entrar al viewport. Hero estático. Todo bajo `prefers-reduced-motion`.

**R4 — Ritmo navy/claro decidido.** Canvas claro dominante, pero bandas navy recurrentes (trayectoria/pruebas, Sentinel, footer) que dan estructura y peso. Validado por NTT/Cato.

**R5 — Disciplina tipográfica.** Fraunces es el diferenciador (todos los competidores son sans). Se mantiene en H1, H2 de sección y una cita destacada por página; nunca en H3/sub ni cuerpo. Todo lo demás, IBM Plex Sans.

**R6 — Copy como arma anti-AI.** Específico, plain, español argentino, sin clichés de marketing de seguridad. Confianza por concreción, no por adjetivos.

### Header (spec definitivo, dos filas)
- **Fila superior:** `#0d1526`, 34px, telemetría mono pequeña: `EST.2006 · BUENOS AIRES · ● 24/7/365 · FORTINET ADVANCED · IBM BUSINESS`.
- **Fila principal:** `#0d1526`, logo presente a la izquierda + nav centrado con separadores `·` entre ítems + botón "Contacto" con **borde Señal**.

### Métrica de éxito del index.html
Primera impresión al abrir en browser = **"consultora seria de Buenos Aires"**, no "SaaS oscuro / startup tech". Si el screenshot se ve como producto SaaS, se revisa antes de continuar.

---

**→ DESIGN.md aprobado con R1–R6. Generando `index.html`.**
```
