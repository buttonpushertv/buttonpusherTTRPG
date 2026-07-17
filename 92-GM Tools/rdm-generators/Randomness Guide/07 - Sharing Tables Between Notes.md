# 07 - Sharing Tables Between Notes

Made a great table? Use it everywhere.

## The zero-setup way

If a table lives in a `.rdm` file under your **Generator root**
(Settings → Randomness), just call it by name from any note:

```text
`rdm:[@TavernName]`
```

Randomness finds the file for you. Type `rdm:[@` and a popup even
suggests every table it knows — pick one and any needed imports
are added automatically.

## Borrowing tables from another note

A note's block-id tables come along when you name the note:

```text
`rdm:[[Locations/Taverns^taverns]]`
```

Or bring ALL of another note's tables into this note with a
`randomness` codeblock. Add a `Use:` line naming the note (shown
here indented so it displays instead of running):

    ```randomness
    Use: [[Locations/Taverns]]
    Tonight: [@taverns]
    ```

After that `Use:` line, inline calls in the same note can see
those tables too.

## The browser pane

Click the dice ribbon icon. Every generator in your vault, in a
folder tree: **Roll** to try a table, 📋 to copy a ready-made
inline call, 📍 to pin favourites to the top.

Next: [[08 - Coming From Dice Roller]]
