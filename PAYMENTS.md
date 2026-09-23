# ShrinkDrop payment setup

## Offer

- Product: ShrinkDrop for macOS.
- Price: CA$5 for CAD checkout or US$5 for USD checkout.
- Billing: one-time purchase; no subscription or renewal.
- Checkout: Dodo Payments hosted links, with Dodo acting as Merchant of Record for supported sales.
- Licensing: Dodo License Key entitlement with automatic key delivery; the app activates and validates the key with Dodo before allowing compression.

The app's activation-key flow is implemented. The website purchase button stays disabled until the Dodo products and checkout links are configured and the signed, notarized public installer is ready.

## Purchase flow

1. Create a one-time product and hosted checkout link for each currency in the Dodo dashboard.
2. Attach a License Key entitlement. Dodo can generate and email a key after payment and supports activation limits, validation, deactivation, and refund revocation.
3. The customer enters the emailed key in ShrinkDrop's activation screen. The app calls Dodo's public license activation and validation endpoints, and stores the key encrypted with macOS secure storage. Development builds use Dodo test mode; packaged builds use live mode. No Dodo API key belongs in the desktop app or website.
   - The app revalidates periodically and has a 14-day offline grace period after a successful check.
4. After successful activation, the customer downloads the signed and notarized macOS build.
5. Dodo's entitlement events can feed support or license-status handling if the app later needs extra server-side fulfillment.

See [Dodo's License Keys guide](https://docs.dodopayments.com/features/license-keys) and [Dodo quick start](https://docs.dodopayments.com/guides/login).

## Before enabling checkout

- Verify the license entry, activation, validation, deactivation, and recovery flow against Dodo test mode.
- Confirm the app's 14-day offline grace behavior and that a refunded/revoked key is rejected at the next online validation.
- Choose and document how many Macs one purchase may activate; configure the same limit in Dodo.
- Sign and notarize both Apple silicon and Intel DMGs; publish stable download URLs.
- Confirm Dodo accepts the business/product and confirm applicable account pricing, currency conversion, payout, refund, and dispute fees in the dashboard.
- Create the CA$5 and US$5 one-time products/links, attach the auto-fulfillment License Key entitlement, and test purchase, email delivery, activation, deactivation, refund revocation, and customer support steps.
- Publish business contact, privacy notice, purchase terms, and refund policy before taking live payments.
- Replace the disabled website button with the Dodo checkout links after the above steps are complete.

## Security

This GitHub Pages site is static. It may link to Dodo's hosted checkout, but it must not contain Dodo server API keys, webhook secrets, or other credentials. License activation endpoints are public according to Dodo's documentation, so verify key status through those endpoints rather than trusting a success-page URL.
