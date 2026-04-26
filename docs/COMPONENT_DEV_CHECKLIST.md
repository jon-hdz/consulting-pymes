# Component Development Checklist & Guidelines

**Version**: 1.0  
**Last Updated**: 2026-04-26  
**Purpose**: Ensure all components follow design system standards and avoid CSS styling issues

---

## 📋 Pre-Development Checklist

Before starting to build a new component, ensure you have:

- [ ] Read [`CSS_TAILWIND_MAPPING.md`](./CSS_TAILWIND_MAPPING.md) for color/typography reference
- [ ] Reviewed [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md) for overall design standards
- [ ] Understood the component's purpose and where it will be used
- [ ] Have design mockups or specifications ready
- [ ] Know the responsive breakpoints needed (mobile, tablet, desktop)

---

## ✍️ Component Creation Checklist

### Step 1: File Structure

- [ ] Created component in correct directory (`/app/components/`)
- [ ] File name is descriptive and PascalCase (`FormField.tsx`, `SuccessModal.tsx`)
- [ ] Component is exported as `default export`
- [ ] Component accepts TypeScript props interface
- [ ] Component is properly documented with JSDoc comments

### Step 2: Color & Typography

**Critical Section - This prevents the CSS crisis from recurring**

- [ ] ✅ **All text colors use ONLY these valid Tailwind classes:**
  - `text-slate-950` (for primary text / `--ink`)
  - `text-gray-600` (for secondary text / `--muted`)
  - `text-blue-600` (for brand/primary color / `--brand`)
  - `text-green-500` (for success / `--accent`)
  - Or other standard Tailwind colors (`text-red-500`, `text-orange-600`, etc.)
  - ❌ DO NOT use: `text-brand`, `text-ink`, `text-muted`, `text-15`, `text-13`, `text-12`

- [ ] ✅ **All background colors use ONLY these valid Tailwind classes:**
  - `bg-white` (default background)
  - `bg-blue-600` (brand background)
  - `bg-blue-50` (light blue background)
  - `bg-slate-950` (dark background)
  - `bg-red-50` (error background)
  - Or other standard Tailwind colors
  - ❌ DO NOT use: `bg-brand`, `bg-chip`, or CSS variable names

- [ ] ✅ **All border colors use ONLY these valid Tailwind classes:**
  - `border-gray-200` (light border)
  - `border-gray-300` (medium border)
  - `border-blue-600` (brand border)
  - `border-red-500` (error border)
  - Or other standard Tailwind colors
  - ❌ DO NOT use: `border-line`, `border-line-hover`, or CSS variable names

- [ ] ✅ **All font sizes use ONLY these valid Tailwind classes:**
  - `text-xs` (12px) - for small labels and captions
  - `text-sm` (14px) - for secondary text
  - `text-base` (16px) - for standard body text and labels
  - `text-lg` (18px) - for secondary headings
  - `text-xl` (20px) - for section titles
  - `text-2xl` (24px) - for headings
  - `text-3xl` (30px) - for large titles
  - `text-4xl` (36px) - for hero titles
  - ❌ DO NOT use: `text-15`, `text-13`, `text-12`, or custom pixel sizes

- [ ] ✅ **All font weights use ONLY these valid Tailwind classes:**
  - `font-normal` (400 weight)
  - `font-medium` (500 weight)
  - `font-semibold` (600 weight)
  - `font-bold` (700 weight)

- [ ] ✅ **All rounded corners use ONLY these valid Tailwind classes:**
  - `rounded-lg` (8px) - for standard containers
  - `rounded-[12px]` - for inputs and buttons
  - `rounded-[14px]` - for modals
  - `rounded-full` (50%) - for pills and badges
  - ❌ DO NOT use: `rounded-pill` or other custom radius names

- [ ] ✅ **All shadows use ONLY these valid Tailwind classes:**
  - `shadow-sm` - for subtle hover effects
  - `shadow-md` - for active/focus states
  - `shadow-lg` - for modals
  - `shadow-2xl` - for floating elements
  - ❌ DO NOT use: custom shadow names

### Step 3: Spacing & Layout

- [ ] Used consistent spacing from Tailwind scale (`p-4`, `p-6`, `gap-4`, `gap-6`, `mb-6`)
- [ ] Padding inside inputs: `px-4 py-3` (standard form padding)
- [ ] Padding inside buttons: `px-6 py-3` (standard button padding)
- [ ] Margin between form fields: `mb-6` (standard field spacing)
- [ ] Margin between sections: `mb-8` or `space-y-8` (large sections)
- [ ] Gap between flex/grid items: `gap-4` (standard), `gap-6` (larger sections)

### Step 4: Interactions & States

- [ ] Hover state provided (color change, shadow, or border)
- [ ] Focus state provided (focus ring: `focus:ring-2 focus:ring-offset-2 focus:ring-blue-600`)
- [ ] Active/pressed state provided (scale, opacity, or color)
- [ ] Disabled state provided (opacity-50, cursor-not-allowed, or color change)
- [ ] Loading state provided (if applicable, e.g., spinner animation)
- [ ] Error state provided (red border, red text, red background)

### Step 5: Transitions & Animations

- [ ] Smooth transitions applied: `transition-all duration-200`
- [ ] No jarring instant state changes
- [ ] Hover effects use smooth transitions
- [ ] Focus states use smooth transitions
- [ ] Animations are performant (use `transform` and `opacity`, not `width`/`height`)

### Step 6: Responsive Design

- [ ] Mobile (375px) layout is usable
- [ ] Tablet (768px) layout is proper
- [ ] Desktop (1024px+) layout is optimal
- [ ] Used Tailwind responsive prefixes correctly (`sm:`, `md:`, `lg:`)
- [ ] No horizontal scrolling on mobile
- [ ] Touch targets are minimum 44x44px on mobile

### Step 7: Accessibility

- [ ] All images have `alt` text
- [ ] Form inputs have associated `<label>` elements
- [ ] Interactive elements have visible focus states
- [ ] Color is NOT the only indicator (also use icons, text, borders)
- [ ] Contrast ratio is at least 4.5:1 for normal text
- [ ] Keyboard navigation is possible (tab order makes sense)
- [ ] ARIA labels added for icon-only buttons

### Step 8: Browser Testing

- [ ] Tested in Chrome/Safari on macOS
- [ ] Tested in Chrome/Firefox on Windows
- [ ] Tested on iOS Safari (mobile)
- [ ] Tested on Android Chrome (mobile)
- [ ] No layout shifts during interactions
- [ ] Fonts load correctly
- [ ] No console errors or warnings

### Step 9: Component Documentation

- [ ] Component has TypeScript interface for props
- [ ] All props are documented with comments
- [ ] Component has JSDoc comment block
- [ ] Example usage provided in comments
- [ ] Related components referenced in comments

```typescript
/**
 * FormField - Reusable input component for forms
 * 
 * Features:
 * - Supports multiple input types (text, email, tel, number, textarea, select)
 * - Built-in validation error display
 * - Consistent styling with design system
 * - Smooth focus and hover transitions
 * 
 * @example
 * <FormField
 *   label="Company Name"
 *   name="company"
 *   type="text"
 *   value={value}
 *   onChange={handler}
 *   required
 * />
 */
```

---

## 🎨 Visual Verification Checklist

Before considering a component "done", verify these visuals in the browser:

### Colors
- [ ] Primary text is dark and readable (`text-slate-950`)
- [ ] Secondary text is muted and subtle (`text-gray-600`)
- [ ] Brand colors are bright and visible (`text-blue-600`, `bg-blue-600`)
- [ ] Error states are clearly red (`text-red-500`, `border-red-500`)
- [ ] Backgrounds are clean and not harsh white (`bg-white` or soft backgrounds)

### Typography
- [ ] Font sizes are appropriate for their purpose
- [ ] Font weights create proper hierarchy
- [ ] Line heights are comfortable for reading
- [ ] Text is not cut off or overlapping
- [ ] Serif fonts (Instrument Serif) used for headlines
- [ ] Sans-serif fonts (Plus Jakarta Sans) used for body text

### Spacing
- [ ] Padding inside containers looks balanced
- [ ] Margins between elements are consistent
- [ ] No overcrowding or excessive empty space
- [ ] Mobile spacing is tighter than desktop
- [ ] Vertical rhythm is maintained

### Interactions
- [ ] Hover effects are visible and smooth
- [ ] Focus states show a blue ring (for inputs)
- [ ] Active states provide clear feedback
- [ ] Disabled states are visually distinct
- [ ] Transitions are smooth (not too fast, not too slow)

### Layout
- [ ] Layout is responsive on all breakpoints
- [ ] No horizontal scrolling
- [ ] Elements don't overlap unexpectedly
- [ ] Alignment is clean and consistent

---

## ❌ Common Mistakes to Avoid

### Mistake 1: Using Invalid Color Class Names
```jsx
// ❌ WRONG
<div className='text-brand border-line bg-chip'>
  Content
</div>

// ✅ CORRECT
<div className='text-blue-600 border-gray-200 bg-blue-50'>
  Content
</div>
```

### Mistake 2: Using Custom Font Sizes
```jsx
// ❌ WRONG
<h1 className='text-24'>Title</h1>
<p className='text-13'>Description</p>

// ✅ CORRECT
<h1 className='text-3xl'>Title</h1>
<p className='text-sm'>Description</p>
```

### Mistake 3: Inventing Utility Classes
```jsx
// ❌ WRONG
<button className='rounded-pill bg-chip text-brand shadow-custom'>
  Button
</button>

// ✅ CORRECT
<button className='rounded-full bg-blue-50 text-blue-600 shadow-sm'>
  Button
</button>
```

### Mistake 4: Not Testing in Browser
```jsx
// ❌ WRONG: Assuming styles work without visual verification
// Write component, mark as "done", later discover styles don't work

// ✅ CORRECT: Test every change in the browser
// Write component → Save → Refresh browser → Verify visuals → Mark done
```

### Mistake 5: Inconsistent Spacing
```jsx
// ❌ WRONG
<div className='mb-3'>Item 1</div>
<div className='mb-6'>Item 2</div>
<div className='mb-4'>Item 3</div>

// ✅ CORRECT
<div className='mb-6'>Item 1</div>
<div className='mb-6'>Item 2</div>
<div className='mb-6'>Item 3</div>
```

### Mistake 6: Missing Accessibility
```jsx
// ❌ WRONG
<button className='bg-blue-600 text-white'>✓</button>

// ✅ CORRECT
<button 
  className='bg-blue-600 text-white' 
  aria-label="Confirm"
  title="Confirm"
>
  ✓
</button>
```

---

## 🚀 Definition of "Done"

A component is only considered "Done" when ALL of these are true:

1. ✅ All code is written and follows TypeScript/React best practices
2. ✅ All CSS classes are valid Tailwind utilities (verified against [`CSS_TAILWIND_MAPPING.md`](./CSS_TAILWIND_MAPPING.md))
3. ✅ Component is visually verified in browser (colors, spacing, interactions all look correct)
4. ✅ Component is responsive (tested on mobile, tablet, desktop)
5. ✅ Component is accessible (labels, contrast, keyboard navigation)
6. ✅ Component has no console errors or warnings
7. ✅ Component is documented (props, examples, purpose)
8. ✅ Component has been tested with at least one use case in the actual app
9. ✅ All files have been saved and server has recompiled without errors
10. ✅ A hard refresh shows all changes correctly rendered

**If any of these are not true, the component is NOT done.**

---

## 🔍 Pre-Commit Checklist (For Future Plan C)

When Plan C is implemented, this will be automated. For now, manually verify:

- [ ] Run `npm run lint` - no CSS class errors
- [ ] All Tailwind classes exist in official documentation
- [ ] No CSS variables used as class names
- [ ] Browser hard refresh shows all changes
- [ ] Component added to Storybook (if applicable)

---

## 📚 Reference Materials

Before coding, review these documents:

1. **[CSS_TAILWIND_MAPPING.md](./CSS_TAILWIND_MAPPING.md)** - Color & typography reference table
2. **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** - Overall design standards and guidelines
3. **[BRIEF_FORM_CSS_CRISIS_RESOLUTION.md](./BRIEF_FORM_CSS_CRISIS_RESOLUTION.md)** - Why we have these rules
4. **[tailwind.config.ts](../tailwind.config.ts)** - Tailwind configuration
5. **[app/globals.css](../app/globals.css)** - CSS variables and global styles

---

## 🎯 Quick Reference: The 5 Critical Rules

Memorize these to prevent 95% of CSS issues:

1. **Use ONLY valid Tailwind classes for colors**
   - `text-slate-950`, `text-gray-600`, `text-blue-600` ✅
   - `text-brand`, `text-ink`, `text-muted` ❌

2. **Use ONLY valid Tailwind classes for font sizes**
   - `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl` ✅
   - `text-12`, `text-13`, `text-15` ❌

3. **Use ONLY valid Tailwind classes for radius**
   - `rounded-lg`, `rounded-[12px]`, `rounded-full` ✅
   - `rounded-pill` ❌

4. **ALWAYS test in browser before marking done**
   - Hard refresh → see changes → verify appearance → done
   - NOT: write code → assume it works → mark done

5. **Use `transition-all duration-200` for interactions**
   - Smooth, professional feel
   - Consistent across all components

---

## 💬 Questions?

If you're unsure about a CSS class or color:

1. Check [`CSS_TAILWIND_MAPPING.md`](./CSS_TAILWIND_MAPPING.md)
2. Check official [Tailwind CSS documentation](https://tailwindcss.com)
3. Check [`BRIEF_FORM_CSS_CRISIS_RESOLUTION.md`](./BRIEF_FORM_CSS_CRISIS_RESOLUTION.md) for examples of wrong/right approaches
4. Ask in the team chat with a screenshot

**Better to ask than to ship broken styles.**

---

**Document Owner**: Architecture Team  
**Last Updated**: 2026-04-26  
**Next Update**: When Plan C pre-commit hooks are implemented
