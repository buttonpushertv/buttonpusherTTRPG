# 01 - Roll Some Dice

Every example here is live. 🎲 re-rolls, 🔒 keeps the result.

## Plain rolls

- One d20: `dice: 1d20`
- With a bonus: `dice: 1d20 + 5`
- Lots of dice: `dice: 8d6` (fireball!)
- Don't know the die count? `dice: d20` means one d20.

## The famous ones

- **Advantage** (roll two d20, keep the best): `dice: 2d20kh`
- **Disadvantage** (keep the worst): `dice: 2d20kl`
- **Ability score** (roll 4d6, drop the lowest): `dice: 4d6dl1`
- **Exploding dice** (max roll = roll again and add): `dice: 3d6!`
- **Re-roll 1s once**: `dice: 2d6r`
- **Count successes** (how many dice rolled 5+): `dice: 6d6>=5`

## Special dice

- Percentile: `dice: d%`
- Traveller d66: `dice: 1d66%`
- Fate/Fudge dice: `dice: 4dF`

## Watch them tumble

Add `|render` and the dice animate: `dice: 4d6dl1|render`

(Turn animations on or off in Settings → Randomness →
Graphical dice.)

## See what each die rolled

Hover any roll — the tooltip shows every die's face (dropped
dice in parens). Want it right in the result, like `13 (7, 6)`?
Add `|dice`: `dice: 2d10|dice` — or flip **Settings → Randomness
→ Show dice breakdown** to make every roll do it. Perfect for
Ironsworn-style challenge dice, where the individual faces are
the whole point.

## Dice inside sentences and tables

Inside generator text, dice go in curly braces:

```randomness
Table: Loot
You find {2d6} gold coins and {1d4} shiny buttons.
```

## Name your favourite rolls

Open **Settings → Randomness → Dice formula aliases** and add:

```text
sneak = 4d6dl1
```

Now `dice: sneak` rolls it. The ★ button in the dice tray saves
formulas to the same list.

## Cheat sheet

| Write | Get |
| ----- | --- |
| `2d6 + 3` | two d6 plus 3 |
| `2d20kh` / `2d20kl` | keep highest / lowest |
| `4d6dl1` | drop the lowest die |
| `3d6!` | exploding sixes |
| `2d6r` | re-roll 1s once |
| `6d6>=5` | count dice showing 5+ |
| `d%`, `4dF`, `1d66%` | percentile, Fate, d66 |

Next: [[02 - Random Tables In Your Notes]]
