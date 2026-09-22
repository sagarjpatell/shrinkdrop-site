# ShrinkDrop payment setup

## Offer

- Product: ShrinkDrop for macOS.
- Price: CA$79 for CAD checkout or US$79 for USD checkout.
- Billing: one-time payment; no subscription or renewal.
- Checkout provider: Stripe Payment Links, one link per currency.

The website displays the planned price, but the purchase button is deliberately disabled. Do not publish a live payment link until license fulfillment and the public installer are ready.

## Purchase flow

1. A customer chooses the CAD or USD Stripe Payment Link. Stripe hosts the checkout and collects the order email.
2. A server-side webhook verifies Stripe's signature and confirms the checkout is paid. The static site must never receive a Stripe secret key.
3. The fulfillment service issues a unique ShrinkDrop license and sends the license plus the signed, notarized macOS download link to the customer.
4. ShrinkDrop validates/activates that license. The app must not rely on a success-page URL as proof of payment.
5. Support can resend a purchase email or deactivate/reissue a license after a verified support request.

## Before enabling checkout

- Implement and secure license issuance, delivery, activation, and recovery.
- Sign and notarize both Apple silicon and Intel DMGs; publish stable download URLs.
- Create the product and fixed one-time CAD/USD prices in the owner's Stripe account, then create the two Payment Links.
- Configure and verify the payment webhook and email delivery in test mode, then switch to live mode.
- Publish the business contact, privacy notice, purchase terms, and refund/cancellation policy. Confirm the business's tax setup before enabling tax collection.
- Replace the disabled website button with the correct currency-specific checkout links and add a post-purchase help page.

## Fees

Stripe's current Canadian standard pricing lists 2.9% + CA$0.30 for a successful domestic online card transaction. On CA$79, that is about CA$2.59 in processing fees and CA$76.41 before tax, refunds, disputes, or other applicable fees. International cards and currency conversion can cost more; verify the account's actual rates before setting margins.
