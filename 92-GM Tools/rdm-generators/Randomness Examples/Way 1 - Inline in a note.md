# Way 1 — Inline in a note

> [!tip] Switch to Reading view first!
> Inline rolls only come alive in **Reading view**. Press
> **Ctrl/Cmd-E** (or click the open-book icon in the top-right of this
> tab) to switch. In editing view you'll just see the plain text —
> that's normal.

The trick: write a tiny code-span that starts with **rdm:** — like
`rdm:[@Greeting]` — right inside a sentence, and Randomness swaps in
a random result.

The little tables that power this note live in the grey box at the
very bottom. Don't delete it — these sentences need it!

## Try these

The hero walked into the town of `rdm:[@Town]` at sunset.

A stranger named `rdm:[@Person]` waved and called out.

> Hover over a result. The 🎲 button rolls it again. The 🔒 button
> **locks** the result so it stays the same forever (it quietly writes
> the answer into your note).

## Same roll, different answers

These three are the exact same code, but each gets its own answer:

- `rdm:[@Person]`
- `rdm:[@Person]`
- `rdm:[@Person]`

## Make a result fancy (filters)

Add `>> upper` to make it UPPERCASE, or `>> proper` for Proper Case:

- normal: `rdm:[@Town]`
- shouting: `rdm:[@Town >> upper]`
- tidy: `rdm:[@Town >> proper]`

---

This is the powering codeblock — the engine room of this note. The
sentences above borrow these tables:

```randomness
Table: Town
Stonewatch
Riverbend
Greenhollow
Ashpoint
Thornhaven

Table: Person
Old Brannic
Mira Thornhaven
Pip Ferrowclaw
Selene Coalheart

Table: Greeting
Well met, traveller!
What news from the road?
Mind yourself out there.
A fine day to you.
```
