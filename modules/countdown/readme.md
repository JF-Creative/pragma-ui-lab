# Countdown

Countdown component from **PRAGMA UI LAB**. A simple React countdown component for events and deadlines.

## Description

`Countdown` is a lightweight React component that displays the remaining time until a specified date.

It updates automatically every second and shows the remaining time divided into:

* Months
* Days
* Hours
* Minutes
* Seconds

The component is intended to be flexible and easily integrated into event pages, landing pages, or interactive UI experiments.

---

## Usage

```jsx
import { Countdown } from "../modules/countdown";

function App() {
  return (
    <Countdown deadTime="2026-12-31T23:59:59" />
  );
}
```

---

## Props

| Prop     | Type   | Description                                 |
| -------- | ------ | ------------------------------------------- |
| deadTime | string | Target date for the countdown in ISO format |

Example value:

```
2026-12-31T23:59:59
```

---

## Styling

The component includes default CSS styles.

Main class names used internally:

```
.timer
.bloqTime
```

You can override these styles from your own stylesheet if needed.

Example:

```css
.timer {
  font-family: monospace;
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

This component was designed with the following principles:

* **Simplicity** — minimal logic and easy integration
* **Lightweight** — no external dependencies
* **Reusability** — can be used across different UI scenarios
* **Customizable styling** — default styles can be overridden easily

---

## Status

Experimental component developed as part of **PRAGMA UI LAB**.

---

## Future Improvements

Potential enhancements for future iterations:

* Display custom messages when the event is about to start
* Detect when the event has started and replace the timer with a live message
* Detect when the event has finished and display a closing message
* Allow configurable thresholds for these states

---

## License

MIT License. See the `LICENSE` file for details.