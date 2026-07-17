# 02 - Random Tables In Your Notes

Any markdown table or list becomes rollable when you give it a
name. The name goes on the line under the table, starting with
`^` (that's an Obsidian "block id").

## A simple table

| Tavern |
| ------ |
| The Prancing Pony |
| The Rusty Bucket |
| The Laughing Ghost |
| The Drunken Goblin |
^taverns

Tonight you sleep at `rdm:[@taverns]`.

Roll three at once: `rdm:3[[02 - Random Tables In Your Notes^taverns]]`

## Lists work too

- it starts to rain
- a dog follows you
- you smell fresh bread
- someone is watching
^events

On the way: `rdm:[@events]`

## Tables with columns

| Name  | Job       | Secret |
| ----- | --------- | ------ |
| Alia  | baker     | afraid of yeast |
| Borin | guard     | writes poetry |
| Cass  | herbalist | can't smell anything |

^npcs

- Whole row: `rdm:[@npcs]`
- Just a name: `rdm:[@npcs.Name]`
- Any random cell: `rdm:[@npcs.xy]`

## Lookup tables (roll dice, read the row)

Make the first column a dice formula and give rows number ranges:

| dice: 1d20 | What happens |
| ---------- | ------------ |
| 1-2        | Ambush! {1d4} bandits jump out |
| 3-10       | A quiet mile |
| 11-17      | A traveller waves hello |
| 18-20      | You find {2d6} coins on the road |

^road

On the road: `rdm:[@road]`

Notice the `{1d4}` inside a row — tables can roll dice (and even
other tables) inside their results. Rollers all the way down.

## Rolling from other notes

From any other note, name the note too:

```text
`rdm:[[02 - Random Tables In Your Notes^taverns]]`
```

Next: [[03 - Lock It In]]
