# RTL Quick Reference - Copy & Paste Guide

## 🎯 Common Component Updates

### 1. Form Inputs (Input with Icon)

```tsx
// ❌ Before
<div className="relative">
  <Input placeholder="Search..." className="pl-10" />
  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2" />
</div>

// ✅ After
<div className="relative">
  <Input placeholder="Search..." className="ps-10" />
  <SearchIcon className="absolute start-3 top-1/2 transform -translate-y-1/2" />
</div>
```

### 2. List Items with Margin

```tsx
// ❌ Before
<ul className="space-y-2 ml-4">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

// ✅ After
<ul className="space-y-2 ms-4">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

### 3. Badges/Labels (Right-aligned)

```tsx
// ❌ Before
<div className="flex justify-between items-center">
  <span>Product Name</span>
  <Badge>In Stock</Badge>
</div>

// ✅ After (Flexbox auto-handles RTL)
<div className="flex justify-between items-center">
  <span>Product Name</span>
  <Badge>In Stock</Badge>
</div>
```

### 4. Text Alignment

```tsx
// ❌ Before
<p className="text-left">Start text</p>
<p className="text-right">End text</p>

// ✅ After
<p className="text-start">Start text</p>
<p className="text-end">End text</p>
```

### 5. Checkboxes / Radio Buttons

```tsx
// ❌ Before
<input type="checkbox" className="mr-2" />
<label>Remember me</label>

// ✅ After
<input type="checkbox" className="me-2" />
<label>Remember me</label>
```

### 6. Breadcrumbs with Separators

```tsx
// ❌ Before
<nav className="flex items-center gap-2">
  <Link href="/">Home</Link>
  <span className="text-muted-foreground">/</span>
  <Link href="/products">Products</Link>
  <span className="text-muted-foreground">/</span>
  <span>Details</span>
</nav>

// ✅ After (No changes needed - flexbox handles it!)
<nav className="flex items-center gap-2">
  <Link href="/">Home</Link>
  <span className="text-muted-foreground">/</span>
  <Link href="/products">Products</Link>
  <span className="text-muted-foreground">/</span>
  <span>Details</span>
</nav>
```

### 7. Card with Image

```tsx
// ❌ Before
<Card className="flex">
  <img src="..." className="w-32 h-32 mr-4" />
  <div>
    <h3>Title</h3>
    <p>Description</p>
  </div>
</Card>

// ✅ After
<Card className="flex">
  <img src="..." className="w-32 h-32 me-4" />
  <div>
    <h3>Title</h3>
    <p>Description</p>
  </div>
</Card>
```

## 🎨 Tailwind Classes to Use

### Margin Start/End

Use these instead of `ml-*` / `mr-*`:

- `ms-1`, `ms-2`, `ms-3`, `ms-4`, `ms-6`, `ms-8`
- `me-1`, `me-2`, `me-3`, `me-4`, `me-6`, `me-8`

### Padding Start/End

Use these instead of `pl-*` / `pr-*`:

- `ps-1`, `ps-2`, `ps-3`, `ps-4`, `ps-6`, `ps-8`
- `pe-1`, `pe-2`, `pe-3`, `pe-4`, `pe-6`, `pe-8`

### Text Alignment

Use these instead of `text-left` / `text-right`:

- `text-start`
- `text-end`
- `text-center` (no change needed)

## ⚡ CSS Inline Styles

When you need inline styles, prefer logical properties:

```tsx
// ❌ Avoid
<div style={{ marginLeft: '1rem', paddingRight: '2rem' }}>
  Content
</div>

// ✅ Better - Use Tailwind classes instead
<div className="ms-4 pe-8">
  Content
</div>

// If absolutely necessary with inline styles:
<div style={{ marginInlineStart: '1rem', paddingInlineEnd: '2rem' }}>
  Content
</div>
```

## 🔍 Checklist for New Components

When creating a new component:

- [ ] Replace `ml-*` with `ms-*`
- [ ] Replace `mr-*` with `me-*`
- [ ] Replace `pl-*` with `ps-*`
- [ ] Replace `pr-*` with `pe-*`
- [ ] Replace `text-left` with `text-start`
- [ ] Replace `text-right` with `text-end`
- [ ] Use `flex` or `grid` for layouts (they auto-handle RTL)
- [ ] For absolute positioning, use logical properties
- [ ] Test with Hebrew locale enabled

## 🚀 Usage in Your App

```tsx
import { getDirection, isRTLLocale } from "@/lib/rtl";
import { getLocale } from "next-intl/server";

// In Server Component
export default async function MyComponent() {
  const locale = await getLocale();
  const isRTL = isRTLLocale(locale);
  const direction = getDirection(locale);

  return <div>{isRTL && <span>This is right-to-left</span>}</div>;
}

// In Client Component
("use client");
import { useLocale } from "next-intl";
import { isRTLLocale } from "@/lib/rtl";

export default function MyComponent() {
  const locale = useLocale();
  const isRTL = isRTLLocale(locale);

  return <div>{isRTL && <span>This is right-to-left</span>}</div>;
}
```
