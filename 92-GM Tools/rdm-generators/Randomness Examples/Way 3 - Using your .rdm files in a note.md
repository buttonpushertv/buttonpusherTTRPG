# Way 3 — Using your .rdm files in a note

The `.rdm` files in this folder (like **02-tavern.rdm**) are little
recipe books full of tables. The best part: you can use those tables
from **any note**, so you never have to copy them.

There are two ways to do it.

## A) Name the file with `Use:` (this always works)

Add a `Use:` line that names the file, then roll any table inside it.
This works no matter where this note lives, because Randomness looks
for the file sitting right next to this note. Click the box to roll
**TavernName** from **02-tavern.rdm**:

```randomness
Use: 02-tavern.rdm
[@TavernName]
```

## B) The shortcut — let Randomness find it for you

If your generators live inside your **Generator Root** folder, you can
skip the `Use:` line and just name the table. Randomness searches your
generator files and finds it:

```randomness
[@TavernName]
```

> [!note] Seeing "Unknown table: TavernName"?
> That just means this folder isn't inside your Generator Root yet, so
> the shortcut can't see the file. Two easy fixes: move this folder
> into your Generator Root (Settings → Randomness → Generator root), or
> simply use the `Use:` line from method A — that one always works.

## It works inline too

Just like Way 1, an inline roll can borrow from your `.rdm` files
(switch to **Reading view** to see it):

You arrive at `rdm:[@TavernName]` and decide to stay the night.

## Why this is great

Write a table once in a `.rdm` file, then use it in a hundred notes.
Fix a typo in the file and **every** note updates at once. That's the
whole reason to keep generators in their own files.
