# Changelog

## Wyrmling Edition

### -.0.7.0 - released
- Updated FMG import process to include some of the new Economy & Markets data introduced int FMG
- Large refactor of the FMG Handlebar Templates to use for importing FMG maps
- Added TTRPG Tools - Maps (ZoomMaps) plugin to start replacing Leaflet - (Leaflet is also in the Vault, so you can choose)
- Replaced Javalent's Dice Tools with TTRPG Tools - Randomness plugin - assets for the plugin also installed
- import of FMG's `nameBases` now implemented - The FMG nameBases are imported and stored now as tables, which should also be available as rollable tables of those names. The `nameBase` notes appear under a FMG map's imported notes, in the `_NameBases` folder under `05-Atlas/{mapName}/Cultures`. Each Culture should also have the related namebase embedded on its page as well. You can add any of the `nameBase` rolltables by simply adding a block like this: 
  ```text
  `rdm:[[English#^nmebse-English]]`
  ```
The `rdm:` part is what gets the Randomness plugin to see it as a rolltable. Then you use double brackets (`[[]]`) and then the name of the namebase note, followed by `#^` and then the rolltable's code. They should all follow a similar pattern: `nmebse-` first, followed by the name of the note. Here is what that will look like, embedded in your note: `rdm:[[English#^nmebse-English]]`

### -v.0.6.1 - released 2025-11-07-2221EST
-Fixed an error creating the Leaflet Map Marker to the Provincial Capital Note

### -v.0.6 - released 2025-Sep-05-1730EST
An update to deal with changes to the FMG JSON data after new features were added and things were reworked (e.g.- v1.99 (Routes rework))

### -v.0.5 - released 2024-Apr-23-1700EST
An updated version with a few fixes (of course you always find the glitches and bugs *after* you release your first version).

This now includes a Sample Imported FMG map - see `01-Campaigns/Test Campaign Ladonia` for the kinds of things the import process will create.

### -v.0.3 - released 2024-Apr-23-1600EST
Early Alpha version. First share with the community.
Seeking reactions and input from others who may find it useful or have things to contribute.

#### -v.0.1 & -v.0.2
Pre-pre-alpha versions that were almost ready for sharing

# JSON ELEMENTS INCORPORATED

[[FMG JSON SCHEMA]]

#### JSON ELEMENTS
Checked items means they've been incorporated into a handlebar template.
Unchecked are elements that would be nice to import.

- [x] pack.burgs (with links to states, provinces, cultures, and religions)
- [x] pack.provinces (with links to states, provinces, cultures, and religions)
- [x] pack.states (with links to states, provinces, cultures, and religions)
- [x] pack.cultures
- [x] pack.religions
- [ ] pack.rivers (includes names - find links to locations where they run?)
- [ ] pack.markers
- [ ] notes (unordered array with notes for various elements)
- [x] nameBases (referenced by cultures to generate names - reverse engineer that name gen function?)


## TO DO

- [ ] Is there a way to pull all the marker data for each State, Province, and Burg to create sections of Leaflet map markers?

- [ ] What happens if you try to import a map where you have deleted any of the following *after* FMG generates the map:
  - [ ] State
  - [x] Province (will show up in 01-Campaign/your_campaign/States/unDefined - can delete without harm)
  - [ ] Burg
  - [ ] Culture
  - [ ] Religion

- [ ] make use of the `full-width` cssclass where needed...if we want. 
	- [ ] make other not-quite-full-width classes?

### TO DO (Archives)

- [x] Refactor all the handlebar helpers to make use of just the `@importDataRoot` object and pass it to all the helpers as `allData` & remove all the other different subsets using that (like `@importDataRoot.pack.cells`, etc)
- [x] Import process uses subfolder hierarchy to deal with duplicate items from FMG JSON - is this clean enough?

(This doesn't easily work - I think the Templater code has a priority issue with the JSON/CSV Importer code)
- [ ] ~~Refactor with the Templater code found at the top of [[sessionNotesTemplate]] to pull in the campaign specific info from the frontmatter of the campaign home note - that works with JSON/CSV Importer and can bring over those values to insert into the notes created on Import~~
	- [ ] ~~Need to replace `{{VALUE:thisCampaignHomeNote}}` with the name of the campaign's home note...how to do this if we don't add stuff to the JSON file before import? Maybe using js in that block as in the helper `getCampaignName`...or just use that helper, since it pulls the name from the paths...(this is the way)~~
	- [ ] ~~Does that mean I don't need to make changes to the FMG JSON export? Can I eliminate needing to add those items in to the file?~~
 - [x] create URLs that can open an FMG map to the cell of States(center), Provinces(center), and Burgs(cell) in the handlebar templates - use the Dropbox share link out of FMG
 - [x] get the `mapDropboxFMGLink` into the [[newCampaignTemplate]] metadata - use it in [[newCampaignSimpleAtlasTemplate]] as well
- [x] Rework the "adding a map" section in the [[newCampaignSimpleAtlasTemplate]] - we can now make use of data in the JSON to calculate the scale units