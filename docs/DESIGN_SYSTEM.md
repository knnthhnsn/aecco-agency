# æccoo - Design System

## Vision: Sustainable Futurism
A premium, high-performance aesthetic that minimizes carbon footprint through OLED-optimized dark modes and lightweight assets, while delivering a "cutting-edge" feel using glassmorphism and neon accents.

---

## Color Palette
| Name | Hex/RGBA | Usage | Sustainability Note |
| :--- | :--- | :--- | :--- |
| **Deep Carbon** | `#050505` | Primary Background | Peak OLED efficiency (0% pixel power). |
| **Lumen Green** | `#a3ff00` | Primary Highlight / CTAs | High visibility, limited pixel usage. |
| **Glass Base** | `rgba(255,255,255,0.05)` | Card Backgrounds | Minimal opacity for depth. |
| **Muted Grey** | `#444444` | Secondary Text / Borders | Low contrast for reduced eye strain. |
| **Pure White** | `#FFFFFF` | Primary Text | Maximum readability. |

---

## Typography
- **Primary Font**: `Inter` (Variable)
- **Fallback**: `system-ui, -apple-system, Segoe UI, sans-serif`
- **Scale**:
  - `h1`: 3rem (700 weight, tight tracking)
  - `h2`: 2rem (600 weight)
  - `body`: 1rem (400 weight, 1.6 line-height)

---

## Visual Effects

### Glassmorphism
The signature "frosted glass" look used for cards and menus.
- **Background**: `rgba(255, 255, 255, 0.03)`
- **Blur**: `backdrop-filter: blur(12px) saturate(180%)`
- **Border**: `1px solid rgba(255, 255, 255, 0.1)`

### The Neon Glow
Used for status indicators and active hovers.
- **Shadow**: `box-shadow: 0 0 15px rgba(163, 255, 0, 0.4)`
- **Border**: `1px solid #a3ff00`

---

## UI Components

### 1. The Interactive Card
A multi-layered glass panel that reacts to hover.
- **Normal**: Muted border, 5% opacity.
- **Hover**: Lumen Green border, subtle glow, increased saturation.

### 2. Segmented Navigation
Dark, pill-shaped backgrounds with text that transitions to Lumen Green on active state.

### 3. Isometric Assets
- **Style**: Lightweight SVG line art (3D perspective).
- **Colors**: White lines with `Lumen Green` focal points.

---

## Implementation Checklist
- [x] Set CSS Variables in `theme.css`.
- [x] Use `backdrop-filter` for all overlay surfaces.
- [x] Apply `border-radius: 12px` to all cards.
- [x] Keep SVGs under 10KB.
