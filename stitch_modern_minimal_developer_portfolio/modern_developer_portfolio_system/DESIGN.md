---
name: Modern Developer Portfolio System
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#a4c9ff'
  on-secondary: '#00315d'
  secondary-container: '#0267b8'
  on-secondary-container: '#d6e5ff'
  tertiary: '#ffb786'
  on-tertiary: '#502400'
  tertiary-container: '#df7412'
  on-tertiary-container: '#461f00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#d4e3ff'
  secondary-fixed-dim: '#a4c9ff'
  on-secondary-fixed: '#001c39'
  on-secondary-fixed-variant: '#004883'
  tertiary-fixed: '#ffdcc6'
  tertiary-fixed-dim: '#ffb786'
  on-tertiary-fixed: '#311400'
  on-tertiary-fixed-variant: '#723600'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  code:
    fontFamily: monospace
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 80px
  gutter: 24px
  margin: 32px
---

## Brand & Style

The design system is engineered for the modern technical professional. It balances high-performance aesthetics with extreme clarity, evoking a sense of precision, innovation, and technical mastery. The interface is intentionally minimalist to let the work—the code and the projects—take center stage.

We utilize a **Glassmorphic** style layered over a deep, monochromatic foundation. This creates a sense of spatial depth without the clutter of traditional skeuomorphism. To add a tactile, high-end feel, a subtle grain texture is applied across the background, breaking the digital "perfection" with a cinematic quality. The overall experience should feel like a high-end IDE or a sophisticated command center: dark, focused, and responsive.

## Colors

The palette is anchored in a true-dark `#0a0a0a` neutral space, providing an infinite canvas for the Electric Blue accent.

- **Primary (Electric Blue):** Used for critical actions, active states, and highlights. It is the singular source of energy in the UI.
- **Secondary (Sky Blue):** Used for subtle gradients or supporting highlights within the primary blue spectrum.
- **Neutral/Surface:** We utilize a tiered system of semi-transparent blacks. Surfaces are not solid; they are "glass" layers that allow the background grain and occasional glow effects to bleed through.
- **Borders:** Extremely thin (1px) and low-opacity white or blue are used to define edges within the dark environment.

## Typography

This design system uses a dual-font strategy to contrast technicality with readability.

- **Space Grotesk (Headlines):** This geometric sans-serif brings a futuristic, "tech" character to the portfolio. It should be used for all headers and display text.
- **Inter (Body):** A highly legible, systematic sans-serif for long-form content, descriptions, and UI labels.
- **Monospace (Fallback):** For snippets of code or technical metadata, use a standard system monospace font to reinforce the developer identity.

Maintain tight tracking (letter-spacing) on large headings and generous line heights for body text to ensure a premium editorial feel.

## Layout & Spacing

The layout is built on a strict **8px grid system**, ensuring mathematical harmony across all components.

- **Grid Model:** A 12-column fluid grid for desktop (max-width: 1440px), transitioning to 8 columns for tablets and 4 columns for mobile.
- **Rhythm:** Use `3xl` (64px) or `4xl` (80px) for vertical section spacing to maintain a high-end, spacious feel.
- **Alignment:** Content should predominantly be left-aligned to mirror code structure, though centered layouts are acceptable for hero sections.
- **Gaps:** Use `md` (16px) for small component gaps and `lg` (24px) for standard gutters between cards.

## Elevation & Depth

Depth in this design system is achieved through transparency and light rather than shadows.

- **Z-Index 0 (Background):** Solid `#0a0a0a` with a 3% opacity grain texture overlay.
- **Z-Index 1 (Cards/Surfaces):** A "Glass" layer using `backdrop-filter: blur(12px)`. The background of the surface should be a semi-transparent dark grey (`rgba(23, 23, 23, 0.6)`).
- **Edge Definition:** Every elevated surface must have a 1px solid border. Use a low-opacity white for standard states and the primary Electric Blue for active/hover states.
- **Vibrant Glows:** Use "Light Sources" (radial gradients) positioned behind cards. On hover, these glows should intensify or follow the cursor to create a dynamic, high-tech reaction.

## Shapes

The shape language is "Soft-Modern." While the brand is technical, we avoid sharp 90-degree corners to ensure the UI remains approachable and contemporary.

- **Base Radius:** 0.5rem (8px) for standard components like input fields and small buttons.
- **Container Radius:** 1rem (16px) for cards and main layout containers.
- **Interactive Elements:** Buttons may use the base radius or be fully rounded (pill) if they are secondary floating actions.

## Components

### Buttons
- **Primary:** Solid Electric Blue with white or very dark blue text. On hover, apply a `box-shadow` of 0 0 20px `rgba(59, 130, 246, 0.5)`.
- **Ghost/Glass:** Transparent background with the 1px border. Backdrop blur should be applied if placed over complex backgrounds.

### Cards
- **Construction:** Use the Z-Index 1 glass properties.
- **Hover State:** The 1px border transitions from `rgba(255,255,255,0.1)` to the primary blue. A subtle radial gradient glow should appear behind the card.

### Input Fields
- **Style:** Minimalist. Only a bottom border or a very subtle glass container. 
- **Focus:** The border glows Electric Blue, and the label (if floating) scales down.

### Chips/Tags
- **Style:** Small, pill-shaped, with a subtle blue tint background (`rgba(59, 130, 246, 0.1)`) and blue text. Used for tech stack labels (e.g., "React", "TypeScript").

### Lists
- **Style:** Clean, no dividers. Use `8px` spacing between items. Icons should be monochrome unless hovered.

### Scrollbars
- **Style:** Custom thin scrollbars. Thumb: `rgba(255,255,255,0.2)`. Track: transparent.