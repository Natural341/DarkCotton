# Dark Cotton - Next.js Version

Vintage-inspired handmade bags e-commerce site built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Features

- 🚀 **Next.js 15** with App Router
- ⚛️ **React 19** with Server and Client Components
- 🎨 **Tailwind CSS** for styling
- 🖼️ **Next.js Image Optimization**
- 🛒 **Shopping Cart** with Context API
- 📱 **Fully Responsive** design
- 🎭 **Interactive Product Cards** with hover effects
- 🔍 **Product Filtering** by category
- 📄 **Dynamic Routes** for products

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
nextjs-darkcotton/
├── app/
│   ├── catalog/          # Product catalog page
│   ├── checkout/         # Shopping cart page
│   ├── context/          # React Context (Cart)
│   ├── journal/          # Journal page
│   ├── our-story/        # About page
│   ├── product/[id]/     # Dynamic product detail pages
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── icons/            # Icon components
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── InteractiveProductCard.tsx
│   ├── MainMenu.tsx
│   └── ShopMenu.tsx
├── constants.ts          # Product data
├── types.ts              # TypeScript types
├── next.config.ts        # Next.js config
├── tailwind.config.ts    # Tailwind config
└── tsconfig.json         # TypeScript config
```

## Key Differences from Vite Version

1. **Routing**: Uses Next.js App Router instead of client-side routing
2. **Images**: Uses `next/image` for automatic optimization
3. **Components**: Marked as `'use client'` where needed for interactivity
4. **Links**: Uses Next.js `<Link>` component for navigation
5. **State Management**: Uses React Context API for cart state
6. **SEO**: Built-in metadata support for better SEO

## Technologies

- Next.js 15
- React 19
- TypeScript 5.8
- Tailwind CSS 3.4
- ESLint

## License

This is a fictional concept site for demonstration purposes.
