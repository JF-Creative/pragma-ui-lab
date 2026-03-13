# Sponsor Rotator

A lightweight React component that rotates sponsor logos at a fixed interval.

---

## Description

`SponsorRotator` displays one logo at a time and automatically switches to the next logo after a specified interval.

It is designed for event modules, landing pages, or promotional widgets where multiple sponsors need to be displayed within a limited space.

The component cycles through the provided logos continuously.

---

## Usage

```jsx
import { SponsorRotator } from "../modules/sponsor-rotator";

function App() {

  const sponsors = [
    "/logos/aqua.png",
    "/logos/alcaldia.png",
    "/logos/gobernacion.png"
  ];

  return (
    <SponsorRotator logos={sponsors} interval={2000} />
  );
}
```

---

## Props

| Prop | Type | Description |
|-----|-----|-----|
| logos | array | Array of image URLs to rotate |
| interval | number | Time between logo changes in milliseconds |

Example:

```
interval={2000}
```

---

## Styling

The component renders a single `<img>` element that updates automatically.

You can style the container or the image using your own CSS.

Example:

```css
.sponsor-rotator img {
  max-height: 40px;
}
```

---

## Demos

Examples of usage can be found in:

```
/demos
```

These demonstrate how the component can be integrated into different UI scenarios.

---

## Design Goals

This component was created with the following principles:

- **Simplicity** — minimal logic and easy integration  
- **Lightweight** — no external dependencies  
- **Reusable** — suitable for event modules and promotional widgets  

---

## Status

Experimental component developed as part of **PRAGMA UI LAB**.

---

## License

MIT License. See the `LICENSE` file for details.