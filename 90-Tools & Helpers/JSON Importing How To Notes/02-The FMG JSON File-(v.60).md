Previous Step: [[01-The First Steps]] | Next Step: [[03-Importing the FMG JSON Data]]

---

# Here's where the fun begins

In these steps we will export the JSON file from FMG and export the main map images to use with the imported data.

## Major Tasks in  this Note
1. [[#Export Full JSON from FMG]]
2. [[#Export an SVG of the FMG map itself]]

> [!WARNING]
> **Finalize any changes to your FMG map *before* attempting this process!**
> 
> While you certainly can make changes to your world map after doing this import process, and those changes can be imported into your vault, this import process is *destructive* and previous files may and will get overwritten.
> 
> Additionally, any pieces of the previously imported FMG map that you have fully deleted may still be left behind because the import process only overwrites the files. It does not remove files that reference places or locations no longer in your FMG map.
> 
> So, make as many changes to your FMG map *before* you do this import. 

## Export Full JSON from FMG
Export the "Full JSON" File from Fantasy Map Generator.

In case you're curious, here is the JSON schema of an FMG JSON - [[FMG JSON SCHEMA]]. More info can be found in the [Data model · Azgaar/Fantasy-Map-Generator Wiki · GitHub](https://github.com/Azgaar/Fantasy-Map-Generator/wiki/Data-model) page.

> [!DANGER]- Read this if you have modified your FMG map *after generation*
> If you have modified your map after the FMG webapp generated it, in particular, you have ***removed*** any *States, Provinces, Burgs, Cultures, or Religions* (as in they no longer exist in the world map from FMG), they may cause issues on import.
> 
> Usually this will show up in a folder named `undefined-Unknown` wherever your current import process is currently storing the files it is generating. This appears most often in the `01-Campaigns/(specific_campaign_name)/05-Atlas/States` folder.
> 
> You *should* be able to just delete those items, since they are not going to be referred to by anything (or at least they shouldn't be). 

## Export an SVG of the FMG map itself
In FMG, under Options, choose the Layers Preset you would like to use. Using the Political Map layer preset works well for the world map. You can enable the Relief layer if you want to give your map a little extra detail. 

Export an SVG of the map. It will be useful to check the box that says "Show all labels" - this will show all the names of the States and Burgs on the map. Rename the SVG with the name "Campaign Name World Map.svg" (obviously, you'd use the Campaign Name you chose up above.)

You can create a second map to export that shows the Provinces. In FMG Options, choose the Layers Preset called Provinces map. FMG does not currently have labels for the Provinces similar to States or Burgs. There are labels that exist in another place though. Under Options, click on the Tools tab and click to configure the Provinces and open that tool. Click on the letter A icon at the bottom to toggle the Province Labels on. They are a little different than the others, but they'll server our purpose. Rename the SVG file as "Campaign Name Provinces World Map.svg"

### Modifications to FMG Full JSON file
There are some things that need to be modified in the FMG JSON file for the Handlebar Templates and Helpers to work properly. It's a good idea to work from a copy of the raw JSON export from FMG. That will give you a backup of what you get out of FMG and you can revert to the original data, if needed. Make a duplicate of the JSON file and add something like "-MODDED" or "-forIMPORT" to the filename. Open this copied JSON file in a text editor. **Be very careful to keep the JSON valid for this to work.**

> [!INFO]
> Using Notepad++ with the JSON View plugin makes this process easier and can help protect the structure of the JSON data.

### Modifications to make
Under the `info` element, add some Campaign specific stuff. _You should modify this info for each campaign you wish to import this JSON into. It will create some relative path info needed in the various notes you will be creating._

This is the block of code you will be adding to the JSON file:

```
        "thisCampaign": "name_here",
        "thisCampaignPath": "01-Campaigns/name_here"
        "thisCampaignShortCode": "shortcode_here",
        "mapWidth": "map_width_here",
        "mapHeight": "map_height_here",
        "mapDroboxFMGLink": "dropbox_FMG_map_link"
```

You can copy and paste that into the JSON file and then follow the instructions below to fill in the info.

IMPORTANT - the code block above has the correct number of spaces at the start of each line. JSON files require very specific spacing of lines containing elements. Make certain that this new block of code lines up with the elements above it.

Steps to follow to change & update the new code for your campaign:
1. First you'll need to grab the name of your campaign. This is the _exact_ name under `01-Campaigns` from your vault.
2. After the `"mapId"` element, add a comma and then press enter to create a new line
3. Enter `"thisCampaign": "name_here",` - place the campaign name from above inside the quotes, replacing `name_here`  & add a comma to the end of the line - outside the double quotes. _Make sure to surround items in double quotations like other elements._
4. On another new line enter `"thisCampaignPath": "01-Campaigns/name_here",` - replace the `name_here` part with the name above. Don't forget the comma.
5. On another new line, enter `"thisCampaignShortCode": "shortcode_here",` - replace the `shortcode_here` part with the campaign's short code. Again, add a comma after you close the double quotes.
6. On another new line, enter `"mapWidth": map_width_here,` - replace the `map_width_here` with the width of your map from FMG. You can find the value under `Options`->`Canvas Size` of your map. Remember the comma.
7. On another new line, enter `"mapHeight": map_height_here,` - replace the `map_height_here` with the width of your map from FMG. You can find the value under `Options`->`Canvas Size` of your map. Again with the comma.
8. On another new line, add an element called `"mapDropboxFMGLink": dropbox_FMG_map_link`. To obtain this Dropbox link, you will need to save your FMG map to your own Dropbox (under FMG's Options->Save dialog). **DO NOT ADD A COMMA TO THIS LINE'S END**
9. Make sure that after whatever final line you add, you do not have a comma at the end of that last line. It will mess up the JSON if you do.
10. Save your MODDED JSON file. Be sure to add `-MODDED` or something to the file name so you can tell it from the original.

> [!INFO] Storing the MODDED JSON file - a suggested location
> When you save the MODDED JSON file from FMG, it's probably a good idea to store it in this folder of this vault: `01-Campaigns/(specific_campaign_name)/98-(specific_campaign_name) Assets`. and then make a copy of the file over to this vault folder: `99-Templates\Handlebars-JSON`.
> 
> The reason for copying it into that templates folder is because the JSON/CSV Importer does not retain the paths you load into the top fields (Source File, Handlebar Template, and Helper JS File), so you need to re-select those on each pass. We have found it's easiest to just store the MODDED JSON in this folder so you don't need to keep navigating to different locations for these items each time you do an import pass.

---

Previous Step: [[01-The First Steps]] | Next Step: [[03-Importing the FMG JSON Data]]