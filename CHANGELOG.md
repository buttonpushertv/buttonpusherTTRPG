# Changelog

(Once I get this to a place where I feel like it's ready to share, I'll start tracking changes here)


## TO DO
- [ ] get the `mapDropboxFMGLink` into the [[newCampaignTemplate]] metadata - use it in [[newCampaignSimpleAtlasTemplate]] as well
- [ ] Rework the "adding a map" section in the [[newCampaignSimpleAtlasTemplate]] - we can now make use of data in the JSON to calculate the scale units
- [ ] Is there a way to pull all the marker data for each State, Province, and Burg to create sections of Leaflet map markers?
- [ ] Refactor all the handlebar helpers to make use of just the `@importDataRoot` object and pass it to all the helpers as `allData` & remove all the other different subsets using that (like `@importDataRoot.pack.cells`, etc)
- [ ] make use of the `full-width` cssclass where needed...if we want. 
	- [ ] make other not-quite-full-width classes?



### TO DO (Archives)

(This doesn't easily work - I think the Templater code has a priority issue with the JSON/CSV Importer code)
- [x] ~~Refactor with the Templater code found at the top of [[sessionNotesTemplate]] to pull in the campaign specific info from the frontmatter of the campaign home note - that works with JSON/CSV Importer and can bring over those values to insert into the notes created on Import~~
	- ~~[ ] Need to replace `{{VALUE:thisCampaignHomeNote}}` with the name of the campaign's home note...how to do this if we don't add stuff to the JSON file before import? Maybe using js in that block as in the helper `getCampaignName`...or just use that helper, since it pulls the name from the paths...(this is the way)~~
	- ~~[ ] Does that mean I don't need to make changes to the FMG JSON export? Can I eliminate needing to add those items in to the file?~~
 - [x] create URLs that can open an FMG map to the cell of States(center), Provinces(center), and Burgs(cell) in the handlebar templates - use the Dropbox share link out of FMG