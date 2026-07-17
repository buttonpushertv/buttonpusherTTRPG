---
cssclasses: []
---

# Fantasy Hub — start here

Everything installed:

- **`92-GM Tools/rdm-generators/fantasy-hub/generators`** — the settlement tables
  (five stocked shop types, tavern, inn, temple, castle, guild,
  barracks, market and more). Roll them in codeblocks, inline, the
  browser pane, or from scripts.
- **`99-Templates/Fantasy Hub`** — standalone templates. Open an empty
  note → *Templater: Insert template* → pick a location (Tavern, Inn,
  Temple…). It asks for the town and size, rolls everything else, and
  renames the note.

## Stamp a whole town with Town Forge

[Town Forge](obsidian://show-plugin?id=town-forge) (1.0.4+) carries
its own copy of the place templates and installs them itself:

1. **Settings → Town Forge → Create place templates** — one click.
2. **Templater → "Trigger Templater on new file creation" → ON.**
   A per-device Templater setting (sync won't carry it) — it's what
   makes the template code run inside the notes Town Forge creates.
   Accept the warning; "Template matching mode" can stay **None**.
3. Generate a town and export — every shop, tavern, temple and
   barracks note arrives with a named, portraited keeper and coherent
   rolled text.

Crests on castles and guilds? Install
[Heraldry Weaver](obsidian://show-plugin?id=heraldry-weaver).

## No Town Forge? No problem

The standalone set needs nothing but Templater. The generators also
work raw — in any note:

```randomness
Use: shop.rdm
[@TF-Shop]
```

*(This note is rewritten when you re-run the Fantasy Hub install —
keep your own notes elsewhere.)*
