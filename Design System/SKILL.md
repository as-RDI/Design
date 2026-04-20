---
name: rdi-technologies-design
description: Use this skill to generate well-branded interfaces and assets for RDI Technologies (Motion Amplification®, Iris aiOne™, TrueSight™), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation

- **README.md** — full brand context, content fundamentals, visual foundations, iconography
- **colors_and_type.css** — drop-in CSS with all tokens + semantic classes (`rdi-hero`, `rdi-h1`, `rdi-btn`, etc.)
- **assets/** — logo (black/white) + iris brand glyph
- **ui_kits/marketing/** — rditechnologies.com-style components (Nav, Hero, FeatureTriad, StatsBar, ProductCards, Testimonial, CTA, Footer)
- **ui_kits/truesight/** — TrueSight product app chrome (Toolbar, AssetList, VideoCanvas, SpectrumPanel, InspectorPanel, StatusFooter)
- **preview/** — token/component reference cards

## Quick rules (read README.md for full detail)

- **Tone:** engineer-to-engineer. Scientific. Never whimsical. No emoji.
- **Headlines:** `Barlow Condensed`, heavy, ALL CAPS, tracked +0.02em.
- **Body:** Inter. Measurements/readouts: JetBrains Mono with tabular figures.
- **Trademarks:** Always `Motion Amplification®`, `Iris M™`, `TrueSight™`.
- **Accent:** RDI red `#E01E1E` (signal/CTA). Secondary: instrument cyan `#06B6D4` (measurement/HUD).
- **Dark theme is primary.** Deep `#0A0C0F` hero.
- **Icons:** Lucide, 1.75px stroke, monochrome. No emoji, no unicode glyphs as icons.
- **Radii are tight** (2–4px for data, 8+ only for marketing CTAs).
- **Shadows minimal.** No colored glows.
- **Motion is slow and deliberate.** No bounce.
