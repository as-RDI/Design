# RDI Technologies Design System

A modernized, scientific design system for **RDI Technologies** — the Knoxville, TN company pioneering *the camera as the sensor of the future* via their patented **Motion Amplification®** technology.

> "Seeing is believing. Visualizing motion. Finding solutions."

RDI does not currently have a formal design system. This system is a **modernized scientific direction** derived from the cues on rditechnologies.com (logo wordmark, dark hero with video backgrounds, red/orange accent, heavy all-caps headlines, sober technical body copy) — pushed toward a more contemporary, instrument-grade aesthetic that reflects the precision of their measurement tools.

---

## Company & Product Context

**RDI Technologies** makes hardware + software for non-contact vibration monitoring and motion analysis. Their cameras turn every pixel into a displacement sensor, and their software amplifies sub-visible motion into something the human eye can see — a communication bridge between vibration engineers and everyone else.

### Product line (as of Apr 2026)
- **Iris aiOne™** — flagship all-in-one ecosystem (MA camera + TrueSight analysis). Launched Feb 2026. *The Complete Picture of Motion.*
- **TrueSight™** — AI-powered analysis engine. Sub-modules:
  - **TrueSight ID** — auto-identifies assets & measurement points
  - **TrueSight Limit** — pass/fail against vibration standards
  - **TrueSight Modal** — Operating Deflection Shape / modal analysis
  - **TrueSight Accel** — accelerometer + video fusion
  - **TrueSight Rotate** — rotational diagnostics
  - **TrueSight HighSpeed** — transient event capture
- **Iris MA™** — ruggedized field camera, runs Live MA on-device
- **Iris M™ / MX™ / CM™** — earlier generation cameras (Iris M superseded by aiOne)
- **Iris Explorer** — Spot robot payload
- **Iris Edge** — edge deployment
- **CableView Tension Meter** — cell tower guy-wire tension
- **Fastec Imaging** — subsidiary (high-speed imaging)

### Customers
38+ industries, 650+ corporate clients, 62+ countries, 5,000+ certified analysts. Industries: Aerospace/Defense, Automotive, Cement, Manufacturing, Medical, Metals/Mining, Oil & Gas, Power Generation, Pulp & Paper, Structures, Telecom, Test & Measurement, Wastewater. Heavy industrial — these are reliability engineers, plant managers, vibration analysts.

### Testimonial voice
Customers say things like *"game-changer with acceptance testing… video proof has suppliers scurrying"* and *"actionable information back to my mechanical engineers."* — it's practical, results-oriented, engineer-to-engineer.

---

## Sources

All research pulled from the public web (April 2026). No codebase, Figma, or decks were attached.

- https://rditechnologies.com/ — homepage
- https://rditechnologies.com/iris-aione — current flagship
- https://rditechnologies.com/truesight — analysis software
- https://rditechnologies.com/models/iris-m/ — legacy camera
- https://rditechnologies.com/motion-amplification/ — tech explainer
- Third-party coverage: rms-reliability.com, vims.de, vision-systems.com

> **Caveat:** No direct image/logo downloads — the site blocks cross-origin fetches. The logo in this system is a **reconstructed wordmark** based on observation, not the official SVG. Swap with official assets when available.

---

## Content Fundamentals

### Tone
**Engineer-to-engineer, confident, scientific, outcome-focused.** Never whimsical. Never "friendly startup." This is precision-instrument copywriting.

- Leads with **capability**, backs with **proof**.
- Uses **"we" / "our"** sparingly; prefers **product name** as subject ("Iris M™ takes millions of measurements…").
- Addresses the reader as **"you"** — a working engineer.
- **No emoji. Ever.** This is a tool for industrial reliability work.
- **Trademarks matter.** Always `Motion Amplification®`, `Iris M™`, `TrueSight™`. Preserve registration marks.

### Casing
- **ALL CAPS** for section headers and hero taglines (`THE POWER OF TECHNOLOGY` / `SEEING IS BELIEVING.`). Tracked out slightly.
- **Title Case** for product names (`Motion Amplification`, `TrueSight ID`).
- **Sentence case** for body copy.

### Structural patterns
- **Three-word taglines** (`Seeing is believing.`, `Visualizing motion. Finding solutions.`, `See everything, miss nothing.`). Often paired: a six-word poster with a period in the middle.
- **"The Power of X"** rhythm — used three in a row on the homepage (Motion Amp, Communication, Troubleshoot).
- **Numbers with unit labels in caps** as social proof: `62+ COUNTRIES`, `38+ INDUSTRIES SERVED`, `5000+ CERTIFIED ANALYSTS`.

### Example copy (real, from the site)
> "Pioneering the camera as the sensor of the future because visualization is faster, safer, and makes the complex more simple."

> "Making the Invisible, Undeniable."

> "From Complex Data to Clear Decisions, Instantly."

> "Don't miss the critical moment of impact."

### Don'ts
- No buzzwords like "delightful", "magical", "journey", "powered by AI" without substance.
- No marketing-speak that doesn't map to a specific capability.
- No casual contractions in hero copy (but OK in body).
- No sentence ending in a question mark in marketing hero (it's declarative branding).

---

## Visual Foundations

### Color vibe
**Deep industrial charcoal with a signal-red accent.** The website uses near-black backgrounds with video (factory pipes, concrete, tanks) behind bold white type. The RDI red (from the logo) is the single accent color — used for the dot on the "i" in the logo, for CTAs, and for alarm/alert states in the product.

Our modernized system extends this with:
- **True black** for hero backgrounds (sensor/lens feel)
- **Instrument cyan** as a secondary accent (measurement/calibration feel — think heads-up display, waveform overlay)
- **Amber** for warning/caution severity
- **Pure red** for alarm/exceeded-threshold
- **Technical greens** for pass/in-spec
- Desaturated neutrals otherwise — this is an engineering tool, not a consumer app.

### Typography
- **Display:** `Barlow Condensed` (Google Fonts, substitute for RDI's proprietary condensed industrial sans) — heavy, tracked, ALL CAPS for hero headlines. The Barlow family is a modern grotesque designed for clean screen rendering and works at massive display sizes.
- **Body:** `Inter` (substitute for site's sans-serif body) — neutral, crisp, reads at 14–18px.
- **Mono:** `JetBrains Mono` — for measurement values, spec readouts, serial numbers, waveform labels.
- **Numerics:** tabular lining figures everywhere values compare (measurement tables, spec cards).

> ⚠ **Font substitution flagged:** RDI's site appears to use a custom condensed sans + system-like body. Barlow Condensed and Inter are close Google Fonts equivalents. **If you have the official font files, drop them into `fonts/` and update `colors_and_type.css` to override.**

### Spacing
4-point base grid. Scale: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`. Products built on this system should feel **airy at the app chrome level** (lots of negative space around the imagery, which is the hero) and **dense in data regions** (spec tables, waveform overlays).

### Backgrounds & imagery
- **Full-bleed video/photography** for hero sections — always real industrial subjects (piping, concrete, tanks, machinery). Never stock illustrations.
- **Imagery is typically cool-leaning, desaturated, slightly cinematic** — matches the "serious instrument" feel.
- **Motion capture plates** (static frame + overlay of amplified motion vectors) are the signature visual — use these as decorative in product UI.
- **No hand-drawn illustrations. No 3D isometric cartoons. No gradient blobs.**
- Subtle **dot-grid texture** (sensor/pixel metaphor) is used at low opacity as section backgrounds.
- **Gradients are flat radial vignettes** behind product shots — not rainbow or brand gradients.

### Motion & animation
- **Slow, deliberate fades** (300–500ms, ease-out). Never bouncy.
- **Hero videos loop quietly** — auto-play, muted, low-contrast.
- **Number counters** tick up once on viewport entry (for stat blocks).
- **Hover on interactive elements:** 150ms ease. Subtle brightness bump (not scale). No wobble.
- **Waveform/chart animation** when data loads — left-to-right reveal, 400ms.
- **No parallax, no confetti, no spring physics.**

### Interaction states
- **Hover (buttons):** background lightens 8%, no scale change.
- **Press:** background darkens 6%, 1px inner shadow.
- **Focus:** 2px cyan outline, offset 2px. Never a blurry glow.
- **Disabled:** opacity 0.4, cursor not-allowed.

### Borders & corners
- **Corner radii:** `0, 2, 4, 8, 12`. Most UI uses **2 or 4 px** — this is instrument-panel territory, not friendly rounded cards. Only marketing CTAs and pills use 8+.
- **Borders:** 1px hairlines in `--border-1` (subtle) or `--border-2` (stronger). Occasional 2px for emphasis (selected row, active camera).

### Shadows & elevation
- **Shadows are minimal.** When used, tight and dark on dark surfaces:
  - `--shadow-1`: `0 1px 2px rgba(0,0,0,.3)` — card lift
  - `--shadow-2`: `0 4px 12px rgba(0,0,0,.4)` — modal
  - `--shadow-3`: `0 16px 40px rgba(0,0,0,.5)` — overlay
- **Inner shadows** used on recessed input fields and waveform gutters for a "panel-inset" feel.
- **No colored shadows.** No blurry glows. This isn't a SaaS app.

### Transparency & blur
- **Backdrop blur (12–20px)** on sticky nav over video hero.
- **Scrim gradients** (bottom-up black) over hero video to keep type legible.
- **Product UI panels use 85–95% opacity** over the video feed so you can still see the live camera behind the controls.

### Cards
- **Flat or 1px border.** No drop shadow by default.
- **Radius 2–4px** for data cards; 8px for marketing cards.
- **Padded 16–24px.** Dense.
- **Dividers** (1px `--border-1`) separate sections inside cards rather than nested cards.

### Layout rules
- **Fixed top nav** (64px), dark with backdrop blur.
- **Max content width:** 1440px for marketing, fluid for product.
- **12-column grid,** 24px gutters.
- **Sticky side rails** for product chrome (tool palette, asset list).

---

## Iconography

RDI's site uses a mix of simple outlined SVG icons (eye, ruler, lightbulb for the Visualize / Measure / Troubleshoot triad) in a flat stroke style, roughly 1.5–2px stroke weight.

**This system uses [Lucide](https://lucide.dev/)** — CDN-available, MIT-licensed, matches the stroke weight and geometry of RDI's existing site icons. Load via:
```html
<script src="https://unpkg.com/lucide@latest"></script>
```

**Rules:**
- **No emoji. Not in product, not in marketing.**
- **No unicode glyphs used as icons** (no ★ ✓ → — use the Lucide equivalents).
- **No colored icons in product chrome** — all icons are monochrome, tinted by their context.
- **Brand glyph** (an iris/aperture mark) is reserved for logo lockups only.
- **Icon sizes:** 16, 20, 24, 32. Default 20px inline, 24px in toolbars.
- **Product icons** (Motion Amplification, TrueSight, Iris MA) are custom mini-logomarks, stored in `assets/product-marks/`.

---

## Index

### Root files
- [`README.md`](./README.md) — this file
- [`SKILL.md`](./SKILL.md) — Agent Skill manifest (portable)
- [`colors_and_type.css`](./colors_and_type.css) — tokens + semantic classes

### Folders
- [`assets/`](./assets/) — logos, product marks, illustrations
- [`fonts/`](./fonts/) — webfonts (currently loaded from Google Fonts; drop official .woff2 here to override)
- [`preview/`](./preview/) — Design System tab cards
- [`ui_kits/marketing/`](./ui_kits/marketing/) — rditechnologies.com-style components
- [`ui_kits/truesight/`](./ui_kits/truesight/) — TrueSight product UI components

---
