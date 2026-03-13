# Countdown Demo — Caballitos de Palo Event

This demo showcases a simple event module built using components from **PRAGMA UI LAB**.

The layout simulates a promotional widget for a children's event, combining a countdown timer and a rotating sponsor display.

---

## Background

The demo is inspired by **Caballitos de Palo**, a children's event organized annually in Ibagué, Colombia, by RCN Radio.

The activity takes place during the city's festivities and was created as a family-friendly alternative to the traditional horse parade ("cabalgata"). In this version, children participate using toy stick horses instead of real animals.

The first edition of the event achieved a **Guinness World Record**, and the activity has been organized every year since then with strong public participation.

This demo recreates a promotional module used for the **13th edition** of the event.

---

## Demo Layout

The module is designed as a compact event widget and includes:

1. Background image from a previous event
2. Event logo
3. Countdown timer
4. Sponsor logo display
5. A promotional banner for the radio stations involved in the event

The layout mimics a standalone module that could be embedded inside a webpage.

---

## Components Used

This demo integrates two simple UI components.

### Countdown

Displays the remaining time until the event date.

Source:

```
modules/countdown
```

---

### Sponsor Logo Display

Cycles through sponsor logos at fixed time intervals.

The component updates the displayed logo based on a timer and React state.

---

## Purpose of this Demo

This example demonstrates how small UI components can be combined to create a self-contained event module.

The goal is to illustrate practical integration scenarios for components developed in **PRAGMA UI LAB**.

---

## Preview

The demo layout includes:

* event branding
* countdown timer
* rotating sponsor logos
* promotional imagery

---

## Related Modules

```
modules/countdown
```
