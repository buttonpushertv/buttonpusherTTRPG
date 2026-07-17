# 👋 Start here — Randomness examples

Welcome! This folder was made for you by the **Randomness** plugin.
Every file in here is a small, friendly lesson. Read them in order and
you'll learn to build your own random generators — like rolling dice,
but for words.

## The four ways to use Randomness

Your random stuff can live in four kinds of places. This folder has an
example of each:

1. **Inline in a note** — drop a roll right into a sentence.
   👉 open **"Way 1 - Inline in a note"**
2. **In a codeblock** — a grey box in a note that you click to roll.
   👉 open **"Way 2 - A codeblock in a note"**
3. **In a `.rdm` file** — a reusable "recipe book" full of tables.
   👉 open any file ending in **.rdm** (start with **01-greetings.rdm**)
4. **Using a `.rdm` file from a note** — borrow a recipe book inside a
   note. 👉 open **"Way 3 - Using your .rdm files in a note"**

## The `.rdm` files (your recipe books)

These are plain text files full of **tables**. A table is just a list
of things to pick from. Read them in this order — each one teaches
something new:

| File | What it teaches |
| --- | --- |
| 01-greetings.rdm | The basics: one table, a list of items |
| 02-tavern.rdm | Tables that call other tables |
| 03-monster.rdm | Dice, questions (prompts), and quick lists |
| 04-shop.rdm | "Roll a d100" rarity tables |
| 05-treasure-dictionary.rdm | Look-up-by-name (dictionary) tables |

## How do I roll something?

Make a grey codeblock in any note like this:

````text
```randomness
[@Greeting]
```
````

Then click it. Randomness finds the table called **Greeting** inside
**01-greetings.rdm** for you — you don't even have to say which file
it's in. ✨

## Changing things

Every file here is plain text. Open one, change it, and save — your
changes work straight away, no reload needed. If you ever break a
file, the box that uses it shows a little error message; fix the file
and the error goes away on the next roll.

## All done?

When you've learned what you need, just delete this whole
**Randomness Examples** folder. Any generators of your own live
*outside* this folder, so they won't be touched.
