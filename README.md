# ShrinkDrop website

This repository contains the static marketing site only. ShrinkDrop's Electron app source remains in its separate private repository.

The site is plain HTML, CSS, and JavaScript. GitHub Pages can publish it for free from the `main` branch with the workflow in `.github/workflows/pages.yml`.

## Payment plan

- One macOS product with a one-time price of CA$79 or US$79, depending on checkout currency.
- No recurring subscription.
- Stripe Payment Links for the hosted checkout.
- Checkout stays disabled until the app can securely issue and activate licenses, and the public DMG is signed and notarized.

See `PAYMENTS.md` for the fulfillment flow and launch requirements. No Stripe keys or app source belong in this repository.
