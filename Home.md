# buttonpusherTTRPG Home Page

> [!TLDR] Version Info
> Wyrmling Edition - v. 0.0.0


## TO DO ITEMS
(This doesn't easily work - I think the Templater code has a priority issue with the JSON/CSV Importer code)
- [x] ~~Refactor with the Templater code found at the top of [[sessionNotesTemplate]] to pull in the campaign specific info from the frontmatter of the campaign home note - that works with JSON/CSV Importer and can bring over those values to insert into the notes created on Import~~
	- ~~[ ] Need to replace `{{VALUE:thisCampaignHomeNote}}` with the name of the campaign's home note...how to do this if we don't add stuff to the JSON file before import? Maybe using js in that block as in the helper `getCampaignName`...or just use that helper, since it pulls the name from the paths...(this is the way)~~
	- ~~[ ] Does that mean I don't need to make changes to the FMG JSON export? Can I eliminate needing to add those items in to the file?~~
- [ ] Refactor all the handlebar helpers to make use of just the `@importDataRoot` object and pass it to all the helpers as `allData` & remove all the other different subsets using that (like `@importDataRoot.pack.cells`, etc)
- [x] create URLs that can open an FMG map to the cell of States(center), Provinces(center), and Burgs(cell) in the handlebar templates - use the Dropbox share link out of FMG
- [ ] make use of the `full-width` cssclass where needed...if we want. 
	- [ ] make other not-quite-full-width classes?

![random|sban+hmicro](https://source.unsplash.com/random?sand)

## Campaign Index

`BUTTON[new-campaign]`

![[Campaign Index]]

![random|sban+hmicro](https://source.unsplash.com/random?abstract,clouds)

## Tools & Helpers
`BUTTON[reload-vault]` | `BUTTON[load-workspace]`

![[Command Reminders]]

![random|sban+hmicro](https://source.unsplash.com/random?abstract,dirt)

## Docs for Plugins
[Calendarium](https://github.com/javalent/the-calendarium)
[Core plugins - Obsidian Help](https://help.obsidian.md/Plugins/Core+plugins)
[Dataview Docs](https://blacksmithgu.github.io/obsidian-dataview/)
[Dice Roller](https://github.com/javalent/dice-roller)
[JSON/CSV Importer plugin](https://github.com/farling42/obsidian-import-json)
[Meta Bind Docs](https://www.moritzjung.dev/obsidian-meta-bind-plugin-docs/)
[Obsidian Leaflet](https://github.com/javalent/obsidian-leaflet)
[QuickAdd](https://quickadd.obsidian.guide)
[Templater](https://silentvoid13.github.io/Templater/)

![random|sban+hmicro](https://source.unsplash.com/random?abstract,water)
