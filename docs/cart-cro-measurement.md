# Cart CRO measurement guide (GTM / GA4)

This theme pushes custom events for the free-shipping progress bar, PDP shipping teaser, and cart recommendations. Events are sent to:

1. `window.dataLayer` (Google Tag Manager — containers `GTM-PJMTNH` and `GTM-W69NF44` are already on the storefront)
2. `Shopify.analytics.publish(eventName, payload)` when that API exists (for custom web pixels)

Theme toggles (Theme settings → Cart):

- **Enable free shipping progress bar** (`enable_shipping_encouragement`) — bar + PDP teaser + progress events
- **Enable cart recommendations** (`enable_cart_recommendations`) — recommendation module + rec events

Both default **off**. Use a duplicate theme to A/B test without shipping code.

---

## How events are pushed

### dataLayer

```js
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'free_shipping_progress_viewed',
  gap_amount: 12.5,
  gap_cents: 1250,
  // ...other properties
});
```

In GTM, create a **Custom Event** trigger where **Event name** equals the `event` value below. Create Data Layer Variables for each property you need.

### Shopify analytics (optional)

```js
Shopify.analytics.publish('free_shipping_progress_viewed', {
  gap_amount: 12.5,
  gap_cents: 1250
  // ...same payload without the `event` key
});
```

Subscribe in a custom web pixel if you use Shopify’s customer events pipeline. Payload keys match the tables below (no `event` field).

---

## Location property

The drawer and the cart page send the **same event names**. Every progress and recommendation event carries a `location` property so you can split them:

| Property | Type | Values |
| --- | --- | --- |
| `location` | string | `"drawer"` \| `"cart_page"` |

`free_shipping_pdp_teaser_viewed` has no `location` (it only fires on product pages).

---

## Events

### `free_shipping_progress_viewed`

| When | Once per cart drawer open, or once per cart page load (not on every quantity tick). |
| --- | --- |
| Requires | Progress bar enabled and cart not empty. |

| Property | Type | Example | Notes |
| --- | --- | --- | --- |
| `gap_amount` | number | `12.5` | Remaining dollars (presentment). `0` if unlocked. |
| `gap_cents` | number | `1250` | Remaining in cents. |
| `threshold_cents` | number | `8500` | Free-shipping threshold in presentment cents. |
| `flat_rate_cents` | number | `1500` | Flat-rate under threshold. |
| `qualifying_cents` | number | `7250` | Cart total after discounts, Ice Pack lines excluded. |
| `currency` | string | `"USD"` | Presentment currency code. |
| `unlocked` | boolean | `false` | Whether threshold is already met. |
| `location` | string | `"cart_page"` | `"drawer"` or `"cart_page"`. |

**GTM:** Trigger = Custom Event `free_shipping_progress_viewed`. Map to GA4 event e.g. `free_shipping_progress_viewed`.

---

### `free_shipping_threshold_reached`

| When | Qualifying total crosses **from below to at/above** the threshold (upward only). |
| --- | --- |
| Requires | Progress bar enabled. |

| Property | Type | Example |
| --- | --- | --- |
| `threshold_cents` | number | `8500` |
| `qualifying_cents` | number | `8900` |
| `currency` | string | `"USD"` |
| `location` | string | `"drawer"` |

**Do not treat this as a purchase.** It is a micro-conversion toward free shipping.

---

### `free_shipping_pdp_teaser_viewed`

| When | Once per product page view when the teaser is rendered. |
| --- | --- |
| Requires | Progress bar enabled. |

| Property | Type | Example |
| --- | --- | --- |
| `threshold` | string | Truncated teaser text (debug / content check) |

---

### `cart_recommendation_impression`

| When | Recommended products are rendered in the drawer (up to 2) or cart page (up to 4). Deduped per location + product + position + cart state. |
| --- | --- |
| Requires | Cart recommendations enabled. |

| Property | Type | Example |
| --- | --- | --- |
| `product_id` | number | `123456789` |
| `variant_id` | number | `987654321` |
| `price_cents` | number | `1499` |
| `position` | number | `1` |
| `source` | string | `"complementary"` \| `"related"` \| `"collection"` |
| `location` | string | `"drawer"` \| `"cart_page"` |

---

### `cart_recommendation_click`

| When | Drawer: shopper clicks a recommendation title or “View”. Cart page: shopper clicks a card image, title/price or “View options”. |

| Property | Type | Example |
| --- | --- | --- |
| `product_id` | number | `123456789` |
| `position` | number | `1` |
| `source` | string | `"complementary"` |
| `location` | string | `"drawer"` \| `"cart_page"` |

---

### `cart_recommendation_add_to_cart`

| When | Shopper uses the drawer **Add** button or the cart page card **Add to cart** button (single-variant products). |

| Property | Type | Example |
| --- | --- | --- |
| `product_id` | number | `123456789` |
| `variant_id` | number | `987654321` |
| `position` | number | `1` |
| `source` | string | `"collection"` |
| `location` | string | `"drawer"` \| `"cart_page"` |

Pair with Shopify’s native `add_to_cart` / purchase funnels in GA4 if you want revenue attribution.

---

## Suggested GTM setup checklist

1. **Variables** — Data Layer Variables for: `gap_amount`, `gap_cents`, `threshold_cents`, `flat_rate_cents`, `qualifying_cents`, `currency`, `unlocked`, `product_id`, `variant_id`, `price_cents`, `position`, `source`, `location`.
2. **Triggers** — one Custom Event trigger per event name above.
3. **Tags** — GA4 Event tags (or your analytics of choice) firing on those triggers; pass the variables as event parameters.
4. **Preview** — GTM Preview: open drawer, change qty across $85, add a recommendation; confirm event order and parameters.
5. **DebugView** — confirm GA4 receives the same names/params before publishing the container.

---

## Baseline metrics (capture before launch)

Pull at least **one full business week** (weekdays + weekend) with the features **off**, then compare after enable (or against the control theme in an A/B).

| Metric | Why |
| --- | --- |
| **AOV** (average order value) | Primary commercial outcome of upsell-to-threshold. |
| **% of orders ≥ $85** (qualifying / merchandise total after discounts) | Direct measure of free-shipping unlock rate. Align definition with how you exclude Ice Packs in reporting if possible. |
| **Cart-to-checkout rate** | Guardrail: recommendations must not bury checkout. |
| **Checkout completion rate** | Guardrail: sticky UI / ship-date friction must not worsen. |
| **Items per order** (secondary) | Confirms add-on attach. |

Optional segments: mobile vs desktop, new vs returning, orders with vs without a recommendation add.

---

## Feature on vs off

| Method | Use when |
| --- | --- |
| Theme setting toggles | Soft launch / kill switch on the live theme. |
| Duplicate theme (A/B) | Clean experiment: Theme A toggles off, Theme B toggles on; split traffic in Shopify or your A/B tool. |

In analysis, do not mix weeks where toggles changed mid-week without noting the change date.

---

## Qualifying total note

Progress and threshold events use:

`cart.total_price` (after discounts, presentment currency) **minus** line totals for items whose product title contains `"Ice Pack"`.

If Shopify admin shipping rates use a different subtotal definition, document that gap for stakeholders.

---

## QA smoke test for analytics

1. Enable both toggles on a unpublished / preview theme.
2. Open GTM Preview + the storefront preview.
3. Visit a PDP → expect `free_shipping_pdp_teaser_viewed`.
4. Add to cart → drawer opens → expect `free_shipping_progress_viewed` (and recommendation impressions if products qualify).
5. Raise cart across $85 → expect `free_shipping_threshold_reached` once.
6. Lower below $85 → no second “reached” until you cross up again.
7. Click Add on a single-variant rec → `cart_recommendation_add_to_cart` + cart refresh.
8. Click View on a multi-variant rec → `cart_recommendation_click`.
9. Repeat 4–8 on `/cart` → same events with `location: "cart_page"`; quick add updates the line items without opening the drawer.
