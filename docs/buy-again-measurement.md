# Buy It Again measurement guide (GTM / GA4)

The Buy It Again experience pushes custom events to:

1. `window.dataLayer` (the theme loads executable container `GTM-PJMTNH`)
2. `Shopify.analytics.publish(eventName, payload)` when that API exists

`GTM-W69NF44` appears only as a `<noscript>` iframe in `layout/theme.liquid`, so it cannot receive these JavaScript events unless its script is loaded elsewhere at runtime.

No order ID, order name, customer ID, email, product title, or order date is included in these events.

## Current placements

- `homepage`: enabled in `templates/index.json`; shown to a logged-in customer with a last order.
- `account`: a reorder-all control for each eligible order in the account order table.
- `order`: per-line add controls and a reorder-all control on an order detail page.

The homepage section setting is enabled. The account and order controls are in their Liquid templates and do not use that homepage setting as a kill switch.

## Shared card properties

| Property | Type | Notes |
| --- | --- | --- |
| `placement` | string | `homepage`, `account`, or `order`. |
| `source` | string | `past_order`, `something_new`, or `something_new_fallback`. |
| `product_id` | number | Current Shopify product ID. |
| `variant_id` | number or null | Exact past-order variant, or the submitted recommendation variant. |
| `price_cents` | number or null | Current variant/product price in rendered currency minor units, not the historic paid price. |
| `position` | number | Card position; order-detail line controls use the original line position. |

No currency code is sent. Do not combine monetary values across storefront currencies without adding currency context.

## Events

### `buy_again_impression`

The same event name has two payload shapes:

1. Past-order module impression, fired once when at least 25% of its root intersects the viewport:
   - `placement`, `source: "past_order"`
   - `item_count`: units that reorder-all would request after large-quantity caps
   - `value_cents`: current value of those units
   - `card_count`: rendered past-order cards
2. “Something new to try” card loaded:
   - shared card properties plus `item_count: 1`
   - no `card_count`

The second shape is currently dormant because `show_new` is false in the homepage template.

On the account page, each order-row reorder control can emit an impression as it enters the viewport. `card_count` is `0` there because the row has a reorder button rather than product cards.

### `buy_again_click`

Fires when a shopper follows a link inside a Buy It Again card. It carries the shared card properties.

Button interactions do not emit this event; they use the add or reorder-all events below.

### `buy_again_add_to_cart`

Fires before the request when a shopper adds one past-order line/card or the “Something new” card.

It carries the shared card properties plus:

| Property | Type | Notes |
| --- | --- | --- |
| `quantity` | number | Quantity requested. Past quantities at or above the configured threshold (currently 10) are capped to 1. |

This is add intent, not confirmed success. Failed requests still produce the event. Validate successful adds with Shopify’s native `add_to_cart` event or resulting cart state.

### `buy_again_reorder_all`

Fires after reorder-all attempts produce an outcome, including partial or item-level HTTP failures. A network rejection before an outcome is assembled goes to the UI error path without emitting this event.

| Property | Type | Notes |
| --- | --- | --- |
| `placement` | string | `homepage`, `account`, or `order`. |
| `source` | string | Always `past_order`. |
| `item_count` | number | Units successfully added. |
| `value_cents` | number | Current value of successfully added units. |
| `requested_count` | number | Distinct eligible variants requested, not units. |
| `added_count` | number | Distinct variants successfully added. |
| `skipped_count` | number | Distinct variants skipped because that variant was already in the cart. |
| `failed_count` | number | Distinct variants that failed to add. |

Unavailable products are shown in the UI but are not included in these counts. Gift cards, Ice Packs, subscriptions, `rec-exclude` products, corporate products, and products requiring option/personalization handling are excluded from reorder-all.

## Suggested GTM setup

1. Create Custom Event triggers for all four event names.
2. Create Data Layer Variables for the properties above.
3. Send the parameters to GA4. Register reportable custom dimensions such as `placement`, `source`, and `position`.
4. Treat `buy_again_add_to_cart` as intent. Treat `buy_again_reorder_all.added_count > 0` as a confirmed custom reorder-all outcome.
5. Use GTM Preview and GA4 DebugView before publishing.

## Recommended metrics

- Module reach: past-order module impressions divided by eligible logged-in sessions.
- Card click-through rate: `buy_again_click` divided by comparable card impressions.
- Single-add intent rate: `buy_again_add_to_cart` divided by comparable impressions.
- Reorder-all success rate: events with `added_count > 0` divided by `buy_again_reorder_all` events.
- Partial-failure rate: events with `failed_count > 0`.
- Skip rate: `skipped_count / requested_count`.
- Downstream conversion, items per order, and AOV for sessions with a Buy It Again interaction versus an experiment control.

The current impression event does not provide a clean card-level denominator for every placement, and successful single adds have no dedicated custom success event. Use native commerce events or extend the instrumentation before reporting those as confirmed conversion rates.

## QA smoke test

1. Log in as a customer with at least one eligible past order.
2. On the homepage, scroll until Buy It Again is 25% visible; expect one past-order `buy_again_impression`.
3. Click a product link; expect `buy_again_click`.
4. Add one product; expect `buy_again_add_to_cart` before the request, then verify the cart changed.
5. Use **Add all**; expect one `buy_again_reorder_all` after processing and verify all count fields.
6. Put one eligible variant in the cart and repeat; expect `skipped_count` to increase.
7. Repeat on the account and order-detail pages and verify `placement`.
