# Amore Wedding & Specialty Events — Website

A React + Vite mockup for the Amore Wedding & Specialty Events site.

## Running it in VS Code

1. Open this folder in VS Code.
2. Open a terminal (Terminal → New Terminal) and run:
   ```
   npm install
   npm run dev
   ```
3. Open the local URL it prints (usually http://localhost:5173).

## Two color directions in one app

There's a small **Ivory / Blue** toggle pinned to the top-right corner of the page.
It's a preview tool only — it lets you flip between the two color directions the
client is choosing between:

- **Ivory** — off-white background, dusty blue accents
- **Blue** — dusty blue background, off-white accents

Once the client picks one, open `src/App.jsx`, delete the `<ThemeSwitcher />` line
and its import, and hard-code `data-theme="ivory"` (or `"blue"`) directly on the
`<div className="site" ...>`. Then you can also delete
`src/components/ThemeSwitcher.jsx`.

## Project structure

```
src/
  App.jsx / App.css     — page shell + all styling (theme tokens at the top of App.css)
  main.jsx               — React entry point
  components/
    Navbar.jsx
    Hero.jsx
    Welcome.jsx
    Services.jsx
    About.jsx             — "Our Story" + Meet the Owners (Lynn & Stewart)
    Experience.jsx        — Personal / Polished / Present + quote
    Gallery.jsx
    Footer.jsx             — contact info, social links, Book Now
    ThemeSwitcher.jsx      — preview-only toggle, see above
  assets/                  — logo + photos pulled from the client's flyers
```

## Booking button

The "Book Now" buttons (nav, hero, footer) are styled and in place but **not wired
up** — they don't currently link anywhere. When the client picks a booking tool
(Calendly, HoneyBook, a custom form, etc.), point them at it, e.g.:

```jsx
<a href="https://your-booking-link.com" className="btn btn--primary">
  Book Now
</a>
```

## Content still needed from the client

- Confirmed social media URLs (Facebook / Instagram / Pinterest are placeholders
  in `Footer.jsx`)
- Final gallery photos, if they'd like to swap in their own work instead of the
  stock/sample images currently in `src/assets`
"# amore" 
