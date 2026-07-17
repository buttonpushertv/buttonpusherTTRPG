# Fantasy Hub Shops (PF2e)

A set of random shop generators for a fantasy hub town, built for
Pathfinder 2e. Drop this whole `shops` folder anywhere in your vault.

## Roll a random shop

```randomness
Use: shop.rdm
[@TF-Shop]
```

## Roll a specific shop type

```randomness
Use: shop.rdm
[@TF-WeaponShop]
```

Swap `[@TF-WeaponShop]` for any of: `[@TF-GeneralShop]`, `[@TF-WeaponShop]`,
`[@TF-ArmorShop]`, `[@TF-AlchemyShop]`, `[@TF-MagicShop]`.

## Roll just a person (the reusable NPC generator)

```randomness
Use: people.rdm
[@Person]
```

## Inline rolls

Once a `randomness` codeblock above has imported `shop.rdm`, you can
roll inline anywhere in this note: a passing merchant is
`rdm:[@Person]`, and the market square holds `rdm:[@TF-Shop]`.

---

## Generating clean shop notes from a template (Templater)

This is the recommended way to spin up a permanent shop note whose
contents are rolled once and frozen as text (no live references that
re-roll on every open). Put this in a Templater template:

```javascript
<%*
const api = app.plugins.plugins["randomness"].api;
const shop = await api.rollUnscoped("TF-Shop");
tR += shop.result;
%>
```

`rollUnscoped` finds the `TF-Shop` table anywhere in your vault
and follows all the `Use:` imports automatically — no scope wiring
needed, because the new note has no scope yet.

### Passing the town and shop name in

The shops accept three optional inputs via `promptValues`, so a
note-generating plugin (or you) can feed context the shop will use:
`town`, `shopType` (display only), and `shopName`. Pass a `shopName`
and the shop uses it; leave it blank and the shop rolls its own. The
`town` is woven into the shop's header.

```javascript
<%*
const api = app.plugins.plugins["randomness"].api;
const shop = await api.rollUnscoped("TF-Shop", {
  promptValues: {
    town: "{{town}}",      // substituted by the calling plugin
    shopType: "{{type}}",
    shopName: "{{name}}"
  }
});
tR += shop.result;
%>
```

A roll then reads, for example:
`**The Whistling Herbalist** *(general goods in Lythwen)*` — using
the name and town passed in.

---

## How it's organised

- **people.rdm** — reusable NPC generator (names, PF2e ancestries,
  personalities). Imported by every shop for owners and customers.
- **customers.rdm** — "someone currently shopping," reuses people.rdm.
- **prices.rdm** — PF2e coin formatting (cp/sp/gp) + a markup/discount
  system so the same shop reads a little differently each roll.
- **shop-general / -weapon / -armor / -alchemy / -magic.rdm** — the
  five shop types. Each imports people, customers, and prices.
- **shop.rdm** — picks a random shop type; imports all five.

## A note on prices

PF2e Core Rulebook prices are used for weapons, armor, and basic
gear where known. Alchemy and magic items are marked `(~)` because
PF2e prices those by item level — treat them as starting points and
adjust to your party's level.

---

## Locations beyond shops (v2)

Nine more location types, same `promptValues` scheme (town / shopType /
shopName) so Town Forge drives them identically. Call each via
`rollUnscoped`:

**Commercial** (proprietor, priced offerings, customer, hook):
- `TF-Inn` — rooms, board, common-room scene, a patron
- `TF-Stable` — mounts & tack, the stalls, a customer
- `TF-Market` — 3-5 distinct stalls, square life, a shopper

**Institutional** (authority figure, the people under them, a situation):
- `TF-Temple` — a PF2e deity + portfolio, clergy, services (some free,
  some donation), a worshipper
- `TF-Castle` — ruler, garrison, defences, a court intrigue (no prices)

**Working sites** (overseer, what's produced, the hands, a hook):
- `TF-Barracks` — commander, the unit, readiness
- `TF-Dock` — harbourmaster, ships & cargo, dockhands
- `TF-Mill` — miller, the works, the hands
- `TF-Farm` — farmer, the land, the household

**Umbrella picker** (in `location.rdm`):
- `TF-Location` — a random location of ANY type (shop or otherwise)
- `TF-Place` — a random NON-shop location

```javascript
<%*
const api = app.plugins.plugins["randomness"].api;
const fm = tp.frontmatter;
// Swap "TF-Inn" for any type, or "TF-Location" for anything at all.
const r = await api.rollUnscoped("TF-Inn", {
  promptValues: { town: fm.town, shopType: fm.type, shopName: fm.name }
});
tR += r.result;
%>
```

---

## Guilds

A guild organised by CATEGORY, each spanning a moral SLANT (good /
murky / dark). A military order might be a noble company or a brutal
outfit; a religious guild devout or fanatical; a merchant guild fair
or a predatory cartel. Roll random, target a category, and/or bias the
slant.

Categories (each rollable directly):
- `TF-GuildCraft` — smiths, masons, weavers, goldsmiths...
- `TF-GuildReligious` — temple-orders and militant faiths
- `TF-GuildMilitary` — knightly orders, free companies
- `TF-GuildCriminal` — thieves, smugglers, fences, fixers
- `TF-GuildArcane` — mages, scholars, diviners
- `TF-GuildCivic` — physicians, scribes, explorers, engineers
- `TF-Guild` — random category

Bias the morality with a 4th promptValue, `slant`: `"good"`,
`"murky"`, `"dark"`, or `"any"` (default). Works on the random roll
or any category.

```javascript
<%*
const api = app.plugins.plugins["randomness"].api;
const fm = tp.frontmatter;
const r = await api.rollUnscoped("TF-GuildMilitary", {
  promptValues: {
    town: fm.town, shopType: fm.type, shopName: fm.name,
    slant: "good"   // or "dark", "murky", "any"
  }
});
tR += r.result;
%>
```

Legit-leaning guilds show dues and fair-rate services; dark ones show
"encouraged" dues, protection, and discreet work. Every guild ends
with a deliberately murky hook.

---

## More locations (v3)

Four more types, same `promptValues` scheme:

- `TF-Tavern` — a drinking & social hub, distinct from the inn: house
  specialty, the crowd, entertainment, regulars (no lodging)
- `TF-Tower` — a lone wizard's tower: the mage, their study, household,
  familiar, and the strangeness of the work (no prices)
- `TF-Undertaker` — the death trades: funeral services, the grounds,
  who's in their care, and a quietly unquiet hook
- `TF-Manor` — a noble household and its intrigues, smaller than a
  castle: the family, the staff, the talk of the house (no prices)

All folded into `TF-Location` / `TF-Place`.
