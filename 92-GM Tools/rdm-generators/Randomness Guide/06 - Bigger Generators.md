# 06 - Bigger Generators

Everything here works in `.rdm` files AND in `randomness`
codeblocks inside notes. The examples below are live codeblocks —
click the edit icon on any of them to see the source.

## Tables that call tables

```randomness
Table: Encounter
A [@Monster] guards a [@Treasure].

Table: Monster
grumpy troll
sleepy dragon
very small ghost

Table: Treasure
chest of buttons
golden sandwich
map to somewhere
```

## Make some results rarer

Put a number and a colon in front — higher numbers come up more:

```randomness
Table: Find
10: a plain rock
5: a shiny rock
1: THE KING OF ROCKS
```

## Remember things with variables

`Set:` remembers a roll so you can use it twice:

```randomness
Table: Villain
Set: name=[@Name]
{$name} raises an eyebrow. "Yes," says {$name}, "it was me."

Table: Name
Doctor Pickle
Lady Ravensworth
The Postman
```

## If this, then that

```randomness
Table: SavingThrow
Set: roll={1d20}
Rolled {$roll}: [when]{$roll}>=10[do]You made it![else]You fell in the mud.[end]
```

## Ask the reader

`Prompt:` adds a dropdown above the result:

```randomness
Prompt: Danger {Low|High} Low
Table: Cave
[when]{$Prompt1}=Low[do]Three bats and an echo.[else]The dragon is home. RUN.[end]
```

## Polish the output

Filters clean up results — chain them with `>>`:

```randomness
Table: Shout
[@Animal >> upper]!!!

Table: Animal
weasel
heron
capybara
```

Other useful filters: `proper` (Title Case), `a` (adds "a"/"an"),
`implode ", "` (joins multiple rolls with commas), `bold`.

There's more — lookup tables, dictionaries, deck picks that never
repeat — all in the full reference (Settings → Randomness → Open
reference).

Next: [[07 - Sharing Tables Between Notes]]
