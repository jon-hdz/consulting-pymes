# CSS Variables to Tailwind Mapping Reference

**Version**: 1.0  
**Last Updated**: 2026-04-26  
**Purpose**: Single source of truth for converting CSS variables to Tailwind utility classes

---

## 🎨 Color Mapping

### Primary Colors

| CSS Variable | Hex Value | Tailwind Class | Usage | Example |
|--------------|-----------|----------------|-------|---------|
| `--brand` | `#2d6cff` | `bg-blue-600`, `text-blue-600`, `border-blue-600` | Primary brand color, CTAs, active states | Button, focus ring, primary text |
| `--accent` | `#22c55e` | `bg-green-500`, `text-green-500` | Success, confirmations, positive feedback | Success button, checkmark, badges |
| `--bg-dark` | `#0b1530` | `bg-slate-950`, `text-slate-950` | Hero backgrounds, dark sections | Dark hero section, dark text |

### Text & Semantic Colors

| CSS Variable | Hex Value | Tailwind Class | Usage | Example |
|--------------|-----------|----------------|-------|---------|
| `--ink` | `#0b1530` | `text-slate-950` | Primary text, headers | Body text, h1-h6, labels |
| `--muted` | `#5b6678` | `text-gray-600` | Secondary text, descriptions | Placeholder text, descriptions, muted labels |
| `--line` | `#e4e9f1` | `border-gray-200` | Borders, dividers | Input borders, horizontal rules |

### Light Colors

| CSS Variable | Hex Value | Tailwind Class | Usage | Example |
|--------------|-----------|----------------|-------|---------|
| `--bg` | `#ffffff` | `bg-white` | Default background | Cards, modals, form backgrounds |
| — | `#f8fafc` | `bg-slate-50` | Subtle background | Hover states, light backgrounds |
| — | `#f0f4f9` | `bg-blue-50` | Blue-tinted background | Info boxes, blue badges |

### Error & Validation Colors

| CSS Variable | Hex Value | Tailwind Class | Usage | Example |
|--------------|-----------|----------------|-------|---------|
| — | `#ef4444` | `text-red-500`, `border-red-500`, `bg-red-50` | Errors, invalid states | Error text, error borders, error backgrounds |
| — | `#ea580c` | `text-orange-600` | Warnings, cautions | Warning messages, attention needed |

---

## 📝 Typography Mapping

### Font Sizes

| CSS Variable / Name | Tailwind Class | Pixel Size | Usage | Example |
|--------------------|----------------|-----------|-------|---------|
| `text-12` (custom) | `text-xs` | 12px | Small labels, timestamps, badges | Badge text, small labels, captions |
| `text-13` (custom) | `text-sm` | 14px | Descriptions, secondary text, helper text | Form descriptions, secondary captions |
| `text-15` (custom) | `text-base` | 16px | Body text, form labels, standard content | Labels, body text, standard content |
| (standard) | `text-lg` | 18px | Secondary headings | Section subtitles |
| (standard) | `text-xl` | 20px | Medium headings | Form section titles |
| (standard) | `text-2xl` | 24px | Large headings | Page titles, hero titles |
| (standard) | `text-3xl` | 30px | Extra large headings | Main hero headings |
| (standard) | `text-4xl` | 36px | Jumbo headings | Landing page hero titles |

### Font Weights & Styles

| Name | Tailwind Class | Font Weight | Usage | Example |
|------|----------------|-------------|-------|---------|
| Regular | `font-normal` | 400 | Body text, descriptions | Standard paragraph text |
| Medium | `font-medium` | 500 | Emphasized text, buttons | Button text, medium emphasis |
| Semibold | `font-semibold` | 600 | Labels, subheadings | Form labels, section headers |
| Bold | `font-bold` | 700 | Headers, strong emphasis | H1-H3, strong emphasis |

### Font Families

| Purpose | CSS | Tailwind Classes | Font | Usage |
|---------|-----|------------------|------|-------|
| Headings | `font-serif` | `font-serif` | Instrument Serif | h1, h2, h3, page titles |
| Body | `font-sans` | `font-sans` | Plus Jakarta Sans | Body text, labels, descriptions |

---

## 🔲 Spacing Mapping

### Standard Spacing Values

| Tailwind Class | Pixels | CSS Variable | Usage |
|----------------|--------|--------------|-------|
| `p-0` | 0 | — | No padding |
| `p-2` | 8px | — | Tight spacing |
| `p-3` | 12px | — | Compact spacing |
| `p-4` | 16px | — | Standard padding |
| `p-5` | 20px | — | Comfortable padding |
| `p-6` | 24px | — | Generous padding |
| `p-8` | 32px | — | Large padding |
| `px-4 py-3` | 16px / 12px | — | Input padding (width/height) |
| `px-6 py-3` | 24px / 12px | — | Button padding |

### Gap & Margin Values

| Tailwind Class | Pixels | Usage | Example |
|----------------|--------|-------|---------|
| `gap-2` | 8px | Tight gaps | Icon + text |
| `gap-3` | 12px | Compact gaps | Form field group |
| `gap-4` | 16px | Standard gaps | Section elements |
| `gap-6` | 24px | Large gaps | Major sections |
| `gap-8` | 32px | Extra large gaps | Page sections |
| `mb-2` | 8px | Small margin below | Inline spacing |
| `mb-6` | 24px | Standard margin below | Form fields |
| `mb-8` | 32px | Large margin below | Form sections |

---

## 🎛️ Border & Radius Mapping

### Border Radius

| CSS Variable | Tailwind Class | Pixels | Usage | Example |
|--------------|----------------|--------|-------|---------|
| `--radius` | `rounded-lg` | 8px | Standard radius | Cards, containers |
| — | `rounded-[12px]` | 12px | Inputs, buttons | Form inputs, buttons |
| — | `rounded-[14px]` | 14px | Modals, panels | Modals, large containers |
| — | `rounded-full` | 50% | Pills, badges | Badges, pill buttons, avatars |

### Borders

| Style | Tailwind Class | Usage | Example |
|-------|----------------|-------|---------|
| 1px solid | `border` | Standard borders | Input borders |
| 2px solid | `border-2` | Stronger borders | Active states, emphasis |
| — | `border-gray-200` | Light borders | Input borders, dividers |
| — | `border-gray-300` | Medium borders | Hover state borders |
| — | `border-blue-600` | Brand borders | Focus states, brand elements |

---

## 💫 Shadow Mapping

### Box Shadows

| CSS Variable | Tailwind Class | Usage | Example |
|--------------|----------------|-------|---------|
| `--shadow-sm` | `shadow-sm` | Subtle elevation | Hover states on cards |
| `--shadow-md` | `shadow-md` | Medium elevation | Active inputs, dropdowns |
| — | `shadow-lg` | Large elevation | Modals, dropdown menus |
| — | `shadow-2xl` | Extra large elevation | Large modals, tooltips |

### Custom Shadow Values

From `globals.css`:
```css
--shadow-sm: 0 1px 2px rgba(11,21,48,0.04), 0 1px 3px rgba(11,21,48,0.08);
--shadow-md: 0 6px 20px rgba(11,21,48,0.06), 0 1px 3px rgba(11,21,48,0.04);
```

---

## ⚡ Transition Mapping

### Standard Transitions

| Tailwind Class | Duration | Usage | Example |
|----------------|----------|-------|---------|
| `transition-all` | — | All property transitions | Smooth color/shadow changes |
| `duration-200` | 200ms | Standard transition speed | Hover states, form interactions |
| `duration-300` | 300ms | Slower transition | Bigger state changes |
| `ease-in-out` | — | Smooth timing function | Default for interactions |

### Combined Usage

```jsx
className='transition-all duration-200'  // Smooth 200ms transition
className='hover:shadow-md transition-all duration-200'  // Hover effect
className='focus:ring-2 focus:ring-offset-2 transition-all duration-200'  // Focus effect
```

---

## 🚫 Anti-Patterns (What NOT to Do)

### ❌ WRONG - Do NOT use CSS variable names as class names

```jsx
// DON'T DO THIS
className='text-brand'  // ❌ Not a valid Tailwind class
className='border-line'  // ❌ Not a valid Tailwind class
className='text-muted'  // ❌ Not a valid Tailwind class
className='text-15'     // ❌ Not a valid Tailwind class
className='rounded-pill' // ❌ Not a valid Tailwind class
className='bg-chip'     // ❌ Not a valid Tailwind class
```

### ✅ CORRECT - Use proper Tailwind utilities

```jsx
// DO THIS INSTEAD
className='text-blue-600'      // ✅ Valid Tailwind class
className='border-gray-200'    // ✅ Valid Tailwind class
className='text-gray-600'      // ✅ Valid Tailwind class
className='text-base'          // ✅ Valid Tailwind class
className='rounded-full'       // ✅ Valid Tailwind class
className='bg-blue-50'         // ✅ Valid Tailwind class
```

---

## 📋 Quick Reference Checklist

When creating or modifying components, use this checklist:

- [ ] All text color uses `text-slate-950`, `text-gray-600`, `text-blue-600`, or other valid Tailwind colors
- [ ] All background colors use valid Tailwind classes like `bg-white`, `bg-blue-50`, `bg-slate-950`
- [ ] All borders use `border-gray-200`, `border-gray-300`, `border-blue-600`, or similar
- [ ] All font sizes use `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, etc. (NOT `text-12`, `text-15`)
- [ ] All rounded corners use `rounded-lg`, `rounded-[12px]`, `rounded-full` (NOT `rounded-pill`)
- [ ] All shadows use `shadow-sm`, `shadow-md`, `shadow-lg` or valid Tailwind utilities
- [ ] All transitions use `transition-all duration-200` or similar valid classes
- [ ] Component tested in browser before marking "done"
- [ ] No custom class names invented without Tailwind verification

---

## 🔧 For Future Tailwind Config Enhancement (Plan C)

To make this mapping more foolproof, the `tailwind.config.ts` can be extended to recognize CSS variables:

```typescript
// This will be added in Plan C
extend: {
  colors: {
    'brand': 'var(--brand)',
    'muted': 'var(--muted)',
    'ink': 'var(--ink)',
    'line': 'var(--line)',
  },
  fontSize: {
    '12': ['12px', { lineHeight: '16px' }],
    '13': ['13px', { lineHeight: '18px' }],
    '15': ['15px', { lineHeight: '20px' }],
  },
}
```

This would then allow the "intuitive" approach to work:
```jsx
className='text-brand' // Would work after Plan C config update
```

---

## 📚 Related Documentation

- [`/docs/COMPONENT_DEV_CHECKLIST.md`](./COMPONENT_DEV_CHECKLIST.md) - Developer guidelines
- [`/docs/BRIEF_FORM_CSS_CRISIS_RESOLUTION.md`](./BRIEF_FORM_CSS_CRISIS_RESOLUTION.md) - What went wrong and why
- [`/tailwind.config.ts`](../tailwind.config.ts) - Tailwind configuration file
- [`/app/globals.css`](../app/globals.css) - CSS variables definitions

---

**Document Owner**: Design System Team  
**Last Updated**: 2026-04-26  
**Next Update**: When Plan C enhancements are implemented
