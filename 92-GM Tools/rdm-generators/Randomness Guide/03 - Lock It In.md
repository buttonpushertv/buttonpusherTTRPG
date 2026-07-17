# 03 - Lock It In

Rolls change every time a note re-renders. When you get a result
you want to KEEP — a name, a shop, a plot twist — lock it.

## Try it

Your rival's name is `rdm:[@rivals]`.

| Rival |
| ----- |
| Ember the Unpaid |
| Sir Reginald Crumb |
| Two Ferrets In A Coat |
| Madame Halibut |

^rivals

Hover the result and click 🔒. Done — that result is now written
into your note itself. It survives closing Obsidian, syncing to
your phone, everything. Click 🎲 on a locked roll to unlock and
roll fresh.

Peek at this note in source mode after locking: you'll see the
result stored right in the text, after a `⟹` arrow. It's your
note, not hidden plugin data.

## Lock everything at once

Two commands (Ctrl/Cmd+P):

- **Lock all rdm: in current note** — locks every unfilled roll,
  keeping exactly what's on screen.
- **Reroll all rdm: in current note** — unlocks everything for a
  fresh start.

## Rolls that lock themselves

`dice-mod:` rolls once and locks immediately — the first time the
note renders, the result is written in and stays:

```text
Treasure: `dice-mod: 2d6 * 10` gold
```

Great for loot you generate once and never want to change.

Next: [[04 - Random Lines, Blocks and Tags]]
