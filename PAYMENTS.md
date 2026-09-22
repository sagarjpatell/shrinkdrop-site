# ShrinkDrop payment setup

## Offer

- Product: ShrinkDrop for macOS.
- Price: CA$79 for CAD checkout or US$79 for USD checkout.
- Billing: one-time purchase; no subscription or renewal.
- Checkout: Dodo Payments hosted links, with Dodo acting as Merchant of Record for supported sales.
- Licensing: Dodo License Key entitlement with automatic key delivery.

The website shows the planned price, but its purchase button stays disabled. Do not accept payment until app license activation and the signed public installer are ready.

## Purchase flow

1. Create a one-time product and hosted checkout link for each currency in the Dodo dashboard.
2. Attach a License Key entitlement. Dodo can generate and email a key after payment and supports activation limits, validation, deactivation, and refund revocation.
3. The customer enters the emailed key in ShrinkDrop. The app calls Dodo's public license activation and validation endpoints; no Dodo API key belongs in the desktop app or website.
4. After successful activation, the customer downloads the signed and notarized macOS build.
5. Dodo's entitlement events can feed support or license-status handling if the app later needs extra server-side fulfillment.

See [Dodo's License Keys guide](https://docs.dodopayments.com/features/license-keys) and [Dodo quick start](https://docs.dodopayments.com/guides/login).

## Before enabling checkout

- Implement the license entry, activation, validation, and recovery UI in ShrinkDrop.
- Choose and document how many Macs one purchase may activate; configure the same limit in Dodo.
- Sign and notarize both Apple silicon and Intel DMGs; publish stable download URLs.
- Confirm Dodo accepts the business/product and confirm applicable account pricing, currency conversion, payout, refund, and dispute fees in the dashboard.
- Create the CAD and USD one-time products/links and test purchase, email delivery, activation, deactivation, refund revocation, and customer support steps.
- Publish business contact, privacy notice, purchase terms, and refund policy before taking live payments.
- Replace the disabled website button with the Dodo checkout links after the above steps are complete.

## Security

This GitHub Pages site is static. It may link to Dodo's hosted checkout, but it must not contain Dodo server API keys, webhook secrets, or other credentials. License activation endpoints are public according to Dodo's documentation, so verify key status through those endpoints rather than trusting a success-page URL.
