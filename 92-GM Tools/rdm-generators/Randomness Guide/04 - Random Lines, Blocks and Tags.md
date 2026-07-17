# 04 - Random Lines, Blocks and Tags

You don't even need a table. Randomness can pick from whole
notes.

## A random line or paragraph from a note

```text
`rdm:[[Rumour Mill|line]]`    one random line from that note
`rdm:[[Rumour Mill|block]]`   one random paragraph
`rdm:3[[Rumour Mill|line]]`   three random lines
```

Make a note called "Rumour Mill", fill it with one rumour per
line, and those calls work anywhere in your vault.

## A random note with a tag

Tag some notes `#rumour` (in the text or in frontmatter). Then:

```text
`rdm:#rumour`        a random paragraph from a random tagged note
`rdm:#rumour|link`   a link to a random tagged note
```

No extra plugins needed — tags come from Obsidian itself.

## Narrowing by tags and properties

Running several campaigns in one vault? Filter the candidates with
extra pipe segments — more tags, or frontmatter properties:

```text
`rdm:#npc|universe=Eldara|link`   only NPCs whose `universe` property
                                  is Eldara
`rdm:#npc|#merchant`              notes with BOTH tags
`rdm:#npc,#monster`               notes with EITHER tag
`rdm:#npc|universe=Eldara,Vex`    property is Eldara OR Vex
`rdm:*|universe=Eldara|link`      any note with the property, no tag
```

Values match case-insensitively, lists in frontmatter match if any
entry hits, and link-style values (`universe: "[[Eldara]]"`) match
their note name. `prop=*` means "the property exists".

## Why this is handy

- A `#quest-hook` tag across your campaign notes = instant
  session starter.
- A "Overheard in the market" note + `|line` = endless flavour.
- `#npc|link` = "who shows up?" without building anything.

Next: [[05 - Your First Generator File]]
