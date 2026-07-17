# 05 - Your First Generator File

Tables in notes are great. But when a generator gets big — or you
want to use it in every vault — put it in a **generator file**.

## What is a .rdm file?

Just a text file. Nothing magic. The `.rdm` ending tells
Randomness "this whole file is tables". Obsidian opens and edits
them like any note.

## The easy way to make one

Press Ctrl/Cmd+P and run **"Create new generator file"**. That's
it — Randomness makes the file (in your Generator root folder, if
you set one), fills in a starter template, and opens it for
editing.

## The manual way

If you'd rather do it by hand: create a text file anywhere in
your vault and make sure its name ends in `.rdm` (not `.md`, and
not `.rdm.txt`!).

> **Windows tip:** Windows hides file endings by default, so your
> "MyTables.rdm" might secretly be "MyTables.rdm.txt". In File
> Explorer, turn on **View → File name extensions**, then rename.
> Or skip all that and use the command above.

## What goes inside

```text
// Lines starting with // are comments.
Table: Weather
sunny and warm
grey drizzle
howling wind
thick fog

Table: Mood
cheerful
grumpy
suspiciously quiet
```

`Table:` starts a table; every line under it is one possible
result. The FIRST table in the file is the main one — rolling the
file rolls that table.

## Rolling it

Anywhere in any note:

```text
`rdm:[@Weather]`
```

No setup needed — Randomness finds tables by name anywhere under
your Generator root. (Set that folder in Settings → Randomness;
it keeps your generators tidy in one place.)

Or roll from the sidebar: dice ribbon icon → find your file →
**Roll**.

Next: [[06 - Bigger Generators]]
