# PDP recommendations measurement guide (GTM / GA4)

The “You may also like” shelf on product pages pushes custom events when a recommendation is shown, clicked, or added. Events are sent to:

1. `window.dataLayer` (Google Tag Manager — containers `GTM-PJMTNH` and `GTM-W69NF44` are already on the storefront)
2. `Shopify.analytics.publish(eventName, payload)` when that API exists (for custom web pixels)

Theme control (product template → **You may also like**):

- **Show recommendations** (`enable`) — shelf + these events
- **Recommendation type** (`intent`) — `related` (default) or `complementary`
- **Fallback collection** — used only after related results and the matching Shop by Taste collection run short

The section is on the default product template, the custom-sleeve template, and the not-purchasable template. Flavorful Fan Favorites stays in those templates with the section **disabled**, so a Rollouts variant can turn it back on and turn this shelf off.

These events are separate from the cart drawer events in [cart-cro-measurement.md](cart-cro-measurement.md). A PDP quick add can also open the drawer and then fire cart-drawer events. Do not add the two impression streams together.

---

## How events are pushed

### dataLayer

```js
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'pdp_recommendation_impression',
  section: 'pdp_you_may_also_like',
  intent: 'related',
  source: 'related',
  product_id: 7404277399724,
  variant_id: 41234567890,
  price_cents: 2695,
  position: 1,
  seed_product_id: 7404277498028
});
```

In GTM, create a **Custom Event** trigger where **Event name** equals the `event` value below. Create Data Layer Variables for each property you need.

### Shopify analytics (optional)

```js
Shopify.analytics.publish('pdp_recommendation_impression', {
  section: 'pdp_you_may_also_like',
  intent: 'related',
  source: 'related',
  product_id: 7404277399724,
  variant_id: 41234567890,
  price_cents: 2695,
  position: 1,
  seed_product_id: 7404277498028
});
```

Subscribe in a custom web pixel if you use Shopify’s customer events pipeline. Payload keys match the tables below (no `event` field).

---

## Shared properties

| Property | Type | Example | Notes |
| --- | --- | --- | --- |
| `section` | string | `"pdp_you_may_also_like"` | `pdp_you_may_also_like` for related. `pdp_pairs_well` if a complementary instance is enabled later. |
| `intent` | string | `"related"` | `related` or `complementary`. This is the section setting, not the fallback that filled the card. |
| `source` | string | `"related"` | Where this card came from. See values below. |
| `product_id` | number | `7404277399724` | Recommended product. |
| `variant_id` | number | `41234567890` | First available variant on impressions and clicks. On add, the variant submitted with the form. |
| `price_cents` | number | `2695` | Product price in the shop currency’s cents. |
| `position` | number | `1` | 1-based position in the shelf. |
| `seed_product_id` | number | `7404277498028` | Product page the shopper is on. |

`source` values:

| Value | Meaning |
| --- | --- |
| `related` | Search & Discovery related recommendations. |
| `complementary` | Search & Discovery complementary recommendations. No taste or favorites fill is added. |
| `fallback_taste` | Shop by Taste collection for this product: fruity, dark chocolate, sweet and salty, nutty, then milk chocolate. |
| `fallback_favorites` | The fallback collection setting, default `customer-favorites`. |

---

## Events

### `pdp_recommendation_impression`

| When | Once per recommended product and position on a product page, after the shelf HTML has loaded. |
| --- | --- |
| Requires | Section enabled, and at least one product left after exclusions. |

Fired when the injected cards render. Not fired again for the same product, position, section, and seed product during that page view. The shelf loads only as the shopper approaches it, so an impression means the section was near the viewport, not merely present in the template.

**GTM:** Trigger = Custom Event `pdp_recommendation_impression`. Map to a GA4 event of the same name.

---

### `pdp_recommendation_click`

| When | Shopper clicks the product image, title, or **View options** link. |
| --- | --- |
| Requires | Section enabled. |

**View options** is a click, not an add. Quick add does not also emit this event.

**GTM:** Trigger = Custom Event `pdp_recommendation_click`.

---

### `pdp_recommendation_add_to_cart`

| When | Shopper uses **Add to cart** on a single-variant recommendation. |
| --- | --- |
| Requires | Section enabled. |

Fired when the add is submitted, before the cart request returns. This does not replace Shopify’s native `add_to_cart` event. Pair them in GA4 if you want revenue.

The add uses the same cart path as the product grid: `cart/add.js`, then the theme refreshes the cart drawer. On this store the drawer opens and the free-shipping bar updates. A following cart-drawer recommendation impression is a separate event from [cart-cro-measurement.md](cart-cro-measurement.md).

**GTM:** Trigger = Custom Event `pdp_recommendation_add_to_cart`.

---

## Suggested GTM setup checklist

1. **Variables** — Data Layer Variables for: `section`, `intent`, `source`, `product_id`, `variant_id`, `price_cents`, `position`, `seed_product_id`.
2. **Triggers** — one Custom Event trigger per event name above. Do not reuse the `cart_recommendation_*` triggers.
3. **Tags** — GA4 Event tags firing on those triggers. Pass the variables as event parameters. Register the custom dimensions/parameters in GA4 before expecting them in reports.
4. **Preview** — GTM Preview on a product page: scroll to the shelf, click a title, click View options on a multi-variant product, and add a single-variant product. Confirm the drawer opens and the event order below.
5. **DebugView** — confirm GA4 receives the same names and parameters before publishing the container.

Expected order for a quick add:

1. `pdp_recommendation_impression` for each visible card
2. `pdp_recommendation_add_to_cart` for the card that was added
3. Cart drawer events (`free_shipping_progress_viewed`, and `cart_recommendation_impression` if the drawer module is enabled)

A title or image click stops at `pdp_recommendation_click`.

---

## Metrics

| Metric | Definition |
| --- | --- |
| **Impressions** | `pdp_recommendation_impression` events. |
| **Click-through rate** | Clicks ÷ impressions, using `product_id` + `position` + `seed_product_id` so one shelf view is not counted twice. |
| **Quick-add rate** | `pdp_recommendation_add_to_cart` ÷ impressions. |
| **Attach rate** | Orders that contain both the seed product and a product added from this shelf, ÷ orders that viewed a PDP with an impression. GA4 alone cannot see the seed after navigation unless `seed_product_id` is kept on the add and joined to the purchase. |
| **Items per order** | Primary commercial outcome. |
| **AOV** | Secondary commercial outcome. |

Segment by `source`, `position`, device, and template. `fallback_favorites` is the old bestsellers shelf showing up only when related and taste results were thin. If most impressions are `fallback_favorites`, the personalized shelf is not what shoppers are seeing.

---

## Baseline metrics (capture before launch)

Pull at least **one full business week** (weekdays + weekend) with Fan Favorites still enabled, or from the control theme in an A/B. Then compare after this shelf is on.

| Metric | Why |
| --- | --- |
| **Items per order** | Primary outcome. The shelf should help shoppers add a second product. |
| **AOV** | Commercial outcome. A higher items-per-order with lower AOV means cheaper add-ons replaced a larger item. |
| **PDP add-to-cart rate** | Guardrail for the product the shopper came to buy. Split main-product adds from recommendation adds if the report allows. |
| **PDP exit rate** | Guardrail. The shelf should not become a dead end. |
| **Fan Favorites click-through** | Only if GTM already records those clicks. Otherwise this shelf’s CTR starts at zero and the test leans on items per order and AOV. |

Do not stop the test early because an early slice looks better. Note the date the section setting or the Rollouts split changed.

Optional segments: mobile vs desktop, `source`, position 1 vs later positions, orders with vs without a recommendation add.

---

## Feature on vs off

| Method | Use when |
| --- | --- |
| **Show recommendations** checkbox | Kill switch on the live theme. Off removes the shelf and these events. |
| Disabled Fan Favorites section | Turn the previous shelf back on in the theme editor without recreating it. Do not run both sections at once unless the test is explicitly comparing them stacked. |
| Duplicate theme or Rollouts | Clean experiment: one variant shows You may also like, the other shows Fan Favorites. |

---

## QA smoke test for analytics

1. Preview the theme with **Show recommendations** on and Fan Favorites disabled.
2. Open GTM Preview.
3. Open Milk Chocolate Covered Pretzels. Before scrolling to the shelf, these PDP events should not have fired.
4. Scroll to **You may also like**. Expect one `pdp_recommendation_impression` per card. `seed_product_id` is the pretzels product. The pretzels product itself, Ice Pack, sold-out products, and anything tagged `rec-exclude` are absent.
5. Click a product title. Expect `pdp_recommendation_click` and no add event.
6. On a multi-variant card, click **View options**. Expect `pdp_recommendation_click` only.
7. On a single-variant card, click **Add to cart**. Expect `pdp_recommendation_add_to_cart`, the cart drawer to open, and the free-shipping bar to refresh. Expect no second click event for that same click.
8. With cart recommendations enabled, confirm `cart_recommendation_*` still fires inside the drawer and is not labeled `pdp_recommendation_*`.
9. Open a product whose related list is empty in a case you can force (or disable the section). The heading and the empty gap go away. No impression events.
