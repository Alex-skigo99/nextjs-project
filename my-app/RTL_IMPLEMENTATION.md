# RTL Implementation Guide

## ✅ What's Been Implemented

### 1. RTL Utility Functions (`lib/rtl.ts`)

- `isRTLLocale(locale)` - Checks if a locale is RTL
- `getDirection(locale)` - Returns 'rtl' or 'ltr'
- Supports: ar, he, fa, ur, yi (add more as needed)

### 2. Updated Root Layout (`app/layout.tsx`)

- Dynamically sets `lang` attribute to current locale
- Sets `dir` attribute based on locale (rtl/ltr)
- Uses `getLocale()` from next-intl/server

### 3. CSS Logical Properties (`app/globals.css`)

Added utility classes for RTL-safe styling:

- **Margin Start/End**: `.ms-*`, `.me-*` (replaces left/right)
- **Padding Start/End**: `.ps-*`, `.pe-*` (replaces left/right)
- **Text Alignment**: `.text-start`, `.text-end` (replaces left/right)

## 📋 Next Steps & Best Practices

### Use Logical Properties Instead of Physical Position

Replace `left`/`right` with logical directions:

```tsx
// ❌ AVOID - Physical properties
<div className="ml-4 pl-8 text-left">

// ✅ BETTER - Logical properties
<div className="ms-4 ps-8 text-start">
```

### Common CSS Replacements

| Physical            | Logical                        | Meaning                         |
| ------------------- | ------------------------------ | ------------------------------- |
| `left`              | `inset-inline-start` / `start` | Start edge (L in LTR, R in RTL) |
| `right`             | `inset-inline-end` / `end`     | End edge (R in LTR, L in RTL)   |
| `margin-left`       | `margin-inline-start`          | Start margin                    |
| `margin-right`      | `margin-inline-end`            | End margin                      |
| `padding-left`      | `padding-inline-start`         | Start padding                   |
| `padding-right`     | `padding-inline-end`           | End padding                     |
| `text-align: left`  | `text-align: start`            | Align to start                  |
| `text-align: right` | `text-align: end`              | Align to end                    |
| `border-left`       | `border-inline-start`          | Start border                    |
| `border-right`      | `border-inline-end`            | End border                      |

### Components to Review & Update

1. **Sidebar Components** (`components/ui/sidebar.tsx`)
   - Check for hardcoded left/right positions
   - Use `start`/`end` logical properties

2. **Table Components** (`components/tables/GeneralTable.tsx`)
   - Verify column alignment (use `text-start`/`text-end`)
   - Check for directional indicators

3. **Input Components** (`components/inputs/SelectInput.tsx`)
   - Verify dropdown arrow direction
   - Check icon positioning

4. **Custom Components**
   - Review any CSS with `left:`, `right:`, `margin-left:`, `margin-right:`, `padding-left:`, `padding-right:`
   - Replace with logical equivalents

### Tailwind Configuration (if needed)

If using Tailwind with `direction: 'auto'`, it will automatically handle `dir` attribute changes. Your setup with `@import "tailwindcss"` should work great!

### Testing RTL

1. Switch to Hebrew locale in your app
2. Verify layout flips correctly
3. Check:
   - Sidebar positioning
   - Form alignment
   - Card layouts
   - Table column order

### Additional Features (Optional)

Add to `lib/rtl.ts` if needed:

```typescript
// Get flag emoji for locale
export function getLocaleFlag(locale: string): string {
  const flags: Record<string, string> = {
    en: "🇬🇧",
    es: "🇪🇸",
    it: "🇮🇹",
    he: "🇮🇱",
  };
  return flags[locale] || "🌐";
}

// Add more RTL locales as needed
const RTL_LOCALES = ["ar", "he", "fa", "ur", "yi", "ji", "iw", "ku", "ps"];
```

## 🔍 CSS Logical Properties Reference

For any custom CSS, use logical properties:

```css
/* Block axis (top/bottom) */
.mt-4 {
  margin-block-start: 1rem;
}
.mb-4 {
  margin-block-end: 1rem;
}

/* Inline axis (left/right) */
.ml-4 {
  margin-inline-start: 1rem;
} /* Start margin */
.mr-4 {
  margin-inline-end: 1rem;
} /* End margin */

/* Position */
.absolute.start-0 {
  inset-inline-start: 0;
} /* Like left: 0 in LTR */
.absolute.end-0 {
  inset-inline-end: 0;
} /* Like right: 0 in LTR */

/* Text alignment */
.text-left {
  text-align: start;
}
.text-right {
  text-align: end;
}
```

## 🚀 You're Ready to Go!

Your app now supports RTL! As you develop new components:

1. Use logical CSS properties from the start
2. Use the RTL utility functions for dynamic logic
3. Test with Hebrew and other RTL locales
