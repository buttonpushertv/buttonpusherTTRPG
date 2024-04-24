# Changelog

## Wyrmling Edition

#### -v.0.1 & -v.0.2
Pre-pre-alpha versions that were almost ready for sharing

### -v.0.3 - released 2024-Apr-23-1600EST
Early Alpha version. First share with the community.
Seeking reactions and input from others who may find it useful or have things to contribute.

### -v.0.5 - released 2024-Apr-23-1700EST
An updated version with a few fixes (of course you always find the glitches and bugs *after* you release your first version).

This now includes a Sample Imported FMG map - see `01-Campaigns/Test Campaign Ladonia` for the kinds of things the import process will create.



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
- [ ] nameBases (referenced by cultures to generate names - reverse engineer that name gen function?)


## TO DO

- [ ] Is there a way to pull all the marker data for each State, Province, and Burg to create sections of Leaflet map markers?
- [ ] Refactor all the handlebar helpers to make use of just the `@importDataRoot` object and pass it to all the helpers as `allData` & remove all the other different subsets using that (like `@importDataRoot.pack.cells`, etc)
- [ ] make use of the `full-width` cssclass where needed...if we want. 
	- [ ] make other not-quite-full-width classes?

### TO DO (Archives)

- [x] Import process uses subfolder hierarchy to deal with duplicate items from FMG JSON - is this clean enough?

(This doesn't easily work - I think the Templater code has a priority issue with the JSON/CSV Importer code)
- [ ] ~~Refactor with the Templater code found at the top of [[sessionNotesTemplate]] to pull in the campaign specific info from the frontmatter of the campaign home note - that works with JSON/CSV Importer and can bring over those values to insert into the notes created on Import~~
	- [ ] ~~Need to replace `{{VALUE:thisCampaignHomeNote}}` with the name of the campaign's home note...how to do this if we don't add stuff to the JSON file before import? Maybe using js in that block as in the helper `getCampaignName`...or just use that helper, since it pulls the name from the paths...(this is the way)~~
	- [ ] ~~Does that mean I don't need to make changes to the FMG JSON export? Can I eliminate needing to add those items in to the file?~~
 - [x] create URLs that can open an FMG map to the cell of States(center), Provinces(center), and Burgs(cell) in the handlebar templates - use the Dropbox share link out of FMG
 - [x] get the `mapDropboxFMGLink` into the [[newCampaignTemplate]] metadata - use it in [[newCampaignSimpleAtlasTemplate]] as well
- [x] Rework the "adding a map" section in the [[newCampaignSimpleAtlasTemplate]] - we can now make use of data in the JSON to calculate the scale units