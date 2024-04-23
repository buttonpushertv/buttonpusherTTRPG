# FMG JSON Import

> [!WARNING] BEWARE! NOT A SIMPLE TASK!
> Heed this warning, o' brave adventurer! Importing this data from FMG is *not* a trivial endeavor. There are multiple steps that must be performed correctly or things will break. It's not *impossible*. It just needs things to be done carefully and (for some steps) in the proscribed order.
> 
> Additionally, until the [[VERSION]] shows that this vault is the "Dragonling Edition" - not "Wyrmling Edition" - this vault should very much be considered pre-pre-Alpha. It is not complete and things are changing. The "Wyrmling Edition" is more a proof of concept. Once it has progressed to be worthy of opening it up for broader user, we will switch to the "Dragonling Edition"

These instructions are a guide for importing the content from Azgaar's Fantasy Map Generator(FMG) into Obsidian Notes via the Full JSON file that can be exported from FMG (accessed under the "Export" option reached by opening the main menu in the upper left of FMG).

# Create a Campaign in this Obsidian Vault First
Before you do any importing of data from the FMG JSON file, you need to create a campaign in this Obsidian vault. Use this button to do that now if you haven't already:

`BUTTON[new-campaign]`

> [!DANGER] - DO NOT IMPORT WITHOUT CREATING A CAMPAIGN FIRST
> 


# Campaign Info Needed 
In the step above, when you created you campaign, you entered some info. You will need to know the following before proceeding:
 - Campaign Name 
	 - appears on the Campaign's Home Note - look in properties/metadata to get the exact name
 - Campaign Path 
	 - if you are creating this within the buttonpusherTTRPG vault, then all campaigns will be stored as sub-folders of the folder `01-Campaigns`
 - Campaign Short Code
	 - Again, you entered this when you created the campaign. It also can be found in the metadata/properties of the campaign's home note.

# Export Full JSON from FMG
Export the "Full JSON" File from Fantasy Map Generator.

# Export an SVG of the FMG map itself
In FMG, under Options, choose the Layers Preset you would like to use. Using the Political Map layer preset works well for the world map. You can enable the Relief layer if you want to give your map a little extra detail. 

Export an SVG of the map. It will be useful to check the box that says "Show all labels" - this will show all the names of the States and Burgs on the map. Rename the SVG with the name "Campaign Name World Map.svg" (obviously, you'd use the Campaign Name you chose up above.)

You can create a second map to export that shows the Provinces. In FMG Options, choose the Layers Preset called Provinces map. FMG does not currently have labels for the Provinces similar to States or Burgs. There are labels that exist in another place though. Under Options, click on the Tools tab and click to configure the Provinces and open that tool. Click on the letter A icon at the bottom to toggle the Province Labels on. They are a little different than the others, but they'll server our purpose. Rename the SVG file as "Campaign Name Provinces World Map.svg"

# Modifications to FMG Full JSON file
There are some things that need to be modified in the FMG JSON file for the Handlebar Templates and Helpers to work properly. It's a good idea to work from a copy of the raw JSON export from FMG. That will give you a backup of what you get out of FMG and you can revert to the original data, if needed. Make a duplicate of the JSON file and add something like "-MODDED" or "-forIMPORT" to the filename. Open this copied JSON file in a text editor. **Be very careful to keep the JSON valid for this to work.**

> [!INFO]
> Using Notepad++ with the JSON View plugin makes this process easier and can help protect the structure of the JSON data.

### Modifications to make
1. Under the `info` element, add some Campaign specific stuff. _You should modify this info for each campaign you wish to import this JSON into. It will create some relative path info needed in the various notes you will be creating._
	1. First you'll need to grab the name of your campaign. This is the _exact_ name under `01-Campaigns` from your vault.
	2. After the `"version"` element, add a comma and then press enter to create a new line
	3. Enter `"thisCampaign": "name_here",` - place the campaign name from above inside the quotes, replacing `name_here`  & add a comma to the end of the line - outside the double quotes. _Make sure to surround items in double quotations like other elements._
	4. On another new line enter `"thisCampaignPath": "01-Campaigns/name_here",` - replace the `name_here` part with the name above. Don't forget the comma.
	5. On another new line, enter `"thisCampaignShortCode": "shortcode_here",` - replace the `shortcode-here` part with the campaign's short code. Again, add a comma after you close the double quotes.
	6. On another new line, enter `"mapWidth": map_width_here,` - replace the `mapwidth_here` with the width of your map from FMG. You can find the value under `Options`->`Canvas Size` of your map. Remember the comma.
	7. On another new line, enter `"mapWidth": map_width_here,` - replace the `mapwidth_here` with the width of your map from FMG. You can find the value under `Options`->`Canvas Size` of your map. Again with the comma.
	8. On another new line, add an element called `"mapDropboxFMGLink": dropbox_FMG_map_link`. To obtain this Dropbox link, you will need to save your FMG map to your own Dropbox (under FMG's Options->Save dialog). **DO NOT ADD A COMMA TO THIS LINE'S END**
	9. Make sure that after whatever final line you add, you do not have a comma at the end of that last line. It will mess up the JSON if you do.
	10. Save your MODDED JSON file.

> [!INFO] Storing the MODDED JSON file - a suggested location
> When you save the MODDED JSON file from FMG, it's probably a good idea to store it in this folder of this vault: `99-Templates\Handlebars-JSON`.
> 
> The reason is because the JSON/CSV Importer does not retain the paths you load into the top fields (Source File, Handlebar Template, and Helper JS File), so you need to re-select those on each pass. We have found it's easiest to just store the MODDED JSON in this folder so you don't need to keep navigating to different locations for these items each time you do an import pass.
 

# Handlebar Helper
In order to process the data from FMG's JSON file, the data needs to be processed to convert numeric values for things like IDs into human-readable elements. I've reverse engineered a lot of the functions from the FMG code to recreate similar data. The Handlebar Helper for this import is on the larger side and contains many functions. All import passes will need to make use of the Handlebar Helper file at: `99-Templates/Handlebars-JSON/Helpers-FMG-JSON.js`

To view the contents of the above helper .js file, you can open it in a text editor.

# Importing Issues
The JSON/CSV Importer plugin requires some different settings for each pass of the import. You can't just run it once and import each item you want to extract. Below are the settings needed for each of the various types of imports. There are a  minimum of 6 import passes to import the content from an FMG JSON file to get the major pieces into Obsidian as notes.

**It is important to maintain the sub-folder structure for each of the import passes because the Atlas import pass (the final one below) makes use of these paths to find and link to the correct files**

Here are the individual import passes you'll need to run to import the data:

1. Importing [[JSON Import How To#States|States]]
2. Importing [[JSON Import How To#Provinces|Provinces]]
3. Importing [[JSON Import How To#Burgs|Burgs]]
4. Importing [[JSON Import How To#Cultures]]
5. Importing [[JSON Import How To#Religions]]
6. Importing [[JSON Import How To#Atlas]]

## Dealing with Duplicated Names 

FMG can and does create locations with duplicate names, not a lot, but it happens, particularly in regions that use the same Culture & namebase. In my experience working with it and testing different worlds, I often see Burgs located in different States getting duplicate names. Once or twice I have seen a Burg name duplicated within the same State, but not usually within the same Province in the same State.

Thankfully, the JSON/CSV Importer plugin can handle these sorts of duplicates. Read the section below for info on how the duplicate names are currently handled in the Handlebar templates. 

> [!INFO] CURRENT DUPLICATE NAME PROCEDURE
> As of Wyrmling Edition v0.3, the current process for dealing with duplicate names is this:
> 1. We are going to create a folder hierarchy of subfolders for each State with their Provinces inside those State subfolders, and then the individual Burgs inside their respective Province subfolders.
> 2. All of this can be created during the import process and is coded into the Handlebar Templates and the Helpers.
> 3. We will be using an advanced method in the JSON/CSV Importer setting `Field to use as Note Name`. We will be using a combination on extracting data from fields and the limited JavaScript capabilities (added in release 0.35.0).
> 4. Follow the instructions down below for each of the passes to set up the naming scheme properly.
> 5. As a back up, you can check the box for the JSON/CSV Importer setting to "Add suffix on duplicate Note Names," as a precaution. It will append a numeral after any names that show up duplicated, but I think that should be a rare occurrence with the way we're doing the naming now. 

The section below this goes through the other methods for handling duplicates in more detail. Expand the sections you wish to learn more about. You would need to modify some of the Handlebar Template code in the Burgs, Provinces, & States template files to remove the hard-coding of names discussed in the callout above.

### Other Duplicate Handling Methods
To handle duplicates, the JSON/CSV Importer has two features. You can use a combination of fields to name the notes on import OR you can append a numeric suffix to the duplicate notes on import.

> [!NOTE]- Appending field data to note name
> To use a combination of fields from the data on import, you can construct the name by entering the field names and any separators into the `Field to use as note name` on the JSON/CSV Importer's dialog.
>
>> [!quote|author] [JSON/CSV Importer Release 0.35.0](https://github.com/farling42/obsidian-import-json/releases/tag/0.35.0)
>> Allow the notename to be constructed from more than one field. The "Field Name" can contain either a single field name, or a more complex format with field names surrounded by `"${...}"`, for example `"${country}-${name}"` (without the double-quotes).
>
>Because FMG JSON data is lean, the data representing the State and Province where a Burg lies are stored as numeric values (the Javascript Helper has lookups to find the names represented by these id's). JSON/CSV Importer does not execute JS helpers on values passed via the import dialog, there's not an easy way to look these values up and cross-reference the ID to the names.
>
> That means your pages would end up being named things like: `burgname-457-1`. It isn't quite helpful to figure out what those numbers mean. You would want to use a small bit of JS code in the JSON Import dialog to turn those numbers into human-readable names. Here is an example that should import the state names as a part of the name field
>> ```@{return `${(this.state > 0) && dataRoot.pack.states.find(state => state.i === this.state)?.name || "Unknown" }-${this.name}`}```
>
> **THE METHOD ABOVE IS THE CURRENT RECOMMENDED METHOD FOR DUPE HANDLING. SEE EACH SECTION BELOW FOR DETAILED INSTRUCTIONS.**
>
>> [!QUESTION]- JSON/CSV Importer Helpers on Import Feature Request
>> A feature request for having Custom Helpers run on fields within the import dialog box was made. The reply was that in an updated version, there is now an ability to run limited JS helpers directly in the field. So, the feature is sort of added in version [0.36.0](https://github.com/farling42/obsidian-import-json/releases/tag/0.36.0) of the JSON/CSV Importer, but the accessing the full `Helpers-FMG-JSON.js` from the import dialog is not likely to be included.
>> 
>> Issue on Gihub: [Process helpers on fieldname values from import dialog? · Issue #68 · farling42/obsidian-import-json · GitHub](https://github.com/farling42/obsidian-import-json/issues/68)

> [!NOTE]- Adding numeric suffix on duplicate note names
> 
>> [!quote|author] [JSON/CSV Importer Release 0.35.0](https://github.com/farling42/obsidian-import-json/releases/tag/0.35.0)
>> Provide an additional option "Add suffix on duplicate Note Names" which will append a number to the end of a Note if its name matches the name of a Note that was created during this import (it will NOT look for existing Notes in the vault before the import was started).
>
> The second duplicate handling is the method I find that works best (at least for now) is to check the option *Add suffix on duplicate note names*. Just use the `name` (or `fullName`) field in the `Field to use as note name` by itself. This option, when checked, will append a number on the end of any note's filename if a duplicate is encountered. 
>
> Keep in mind that the number starts at `1` and is applied to the first duplicate name the the importer encounters. That means that the first name in each pass will have no suffix appended by this duplicates naming option.
>
> For example, if you have three Burgs named, `Townville` in your JSON, the first note imported will be `Townville`, the second note of that name will be `Townville1`, and the third note will be named `Townville2`. My guess is that this stems from the way arrays work in JS - the first item is always index `0`, so it has no suffix appended. Just something to keep in mind

> [!Info]- De-duplication of names by FMG is not likely
> A feature request was made for the FMG to have an option or setting for removing or not creating duplicates at the map creation process or within the FMG app. Due to the procedural nature of name generation within FMG, it is not possible to have FMG create maps with no dupes. At least as of April 2024.
> 
> Feature request: [Prevent duplicate names from being generated across map? · Issue #1062 · Azgaar/Fantasy-Map-Generator · GitHub](https://github.com/Azgaar/Fantasy-Map-Generator/issues/1062)

So, to sum up, you can either use the new feature in [0.36.0](https://github.com/farling42/obsidian-import-json/releases/tag/0.36.0) of the JSON/CSV Importer OR just use the *Add suffix on duplicate note names* checkbox and contend with duplicates that way. Unfortunately, there is bound to be some amount of manual effort to deal with the items that get duplicated.



## Import first, Edit later
These importing processes are **destructive**. They will overwrite or append existing files. You will want to complete each import process to your satisfaction **before** you start editing and adding your own content to the files that get created. There is no undo for this process, so be aware of that.

> [!TIP] How to Handle Existing Notes Option - REPLACE or APPEND?
> In short, use **REPLACE**. 
>
>> [!NOTE]- (An explanation)
>> The JSON/CSV Importer plugin has options for creating notes that may already exist. Care should be taken to understand how these options work. _REPLACE_ will overwrite any exitsing notes with the same name as what is being imported (as in, you will lose any data contained within those files - see above). _APPEND_ will append a fresh interpretation of the templates onto the end of an existing file with the same name. When doing imports, most of the time you will want to use _REPLACE_.

## Delete is your friend 
In the process of importing, you may discover that you need to repeat the import steps more than once. In testing, I have found that it is sometimes most helpful to fully delete all the files that a previous import process created before re-running it, particularly if there are lots of errors in the console.

Due to the nature of nested subfolders we will generate on import, if things get messed up, the only way to reset back a step, will be to delete everything and start over. In testing, one solution that came in handy was to make back up copies of the campaign's `..05-Atlas\States` folder after the States and the Provinces passes. That way, if either the Provinces or Burgs import pass goes wrong, you can delete the messed up version and restore to a known good pass.

# Import Passes
Handlebars Templates and Helpers reside in the folder: ***99-Templates\Handlebars-JSON***

> [!warning]- AutoHotKey Helper (Windows automation) - OPTIONAL
> The JSON/CSV Importer import process cannot be automated within Obsidian. There is no way to save the settings for the upper three fields we set on each import pass: `Choose JSON/CSV file`, `Choose TEMPLATE file`, and `Choose HELPERS file`. This is a limitation in the method the plugin creator has to interact with local files. As of yet, it doesn't seem likely to change in the future.
> 
> The hassle is that, because we are running multiple passes, you end up needing to click around a bunch to setup the JSON Import Dialog on each pass. To that end, there is an optional AutoHotKey scripti, if you're on Windows,  that can help to add some automation to this import process.
> 
> You can find the script in the 90-Tool & Helpers\_External_Scripts. It is setup to open the JSON Importer Dialog via the hotkey `Control-Alt-J`, which you will need to set up in Obsidian. Also, it works best if you open it once manually, before triggering a hotkey, and navigate to the folder where you have stored the FMG JSON File, the Handlebar Templates & the Helper js file.
>
> This script sets up hotkeys for the States, Provinces, Burgs, Cultures, Religions, and Linked Atlas passes. It does this via keyboard only, so it shouldn't require moving the mouse or clicking anywhere. Once it has completed, it will end with the `Name of the Destination Folder` field highlighted and will copy that passes destination path to the clipboard. If everything looks good, you can paste that path in and start the import.
> 
> 
> **Caveat Emptor!**

> [!TIP] Keyboard Maestro (Mac automation) - OPTIONAL - COMING SOON
> It's on my ToDo list...eventually.


## States
The States Notes pass will create individual notes for each State in the JSON file. 

To import the States Notes, here are the settings for the "Import JSON/CSV dialog":

| Setting | Option to Choose |
| ------- | ---------------- |
|         |                  |
| Choose JSON/CSV file|**_(FMG Full JSON file)_** |
| Specify URL to JSON data|**_Leave blank_** |
| Data contains multiple JSON objects|**_Leave blank_** |
| Choose TEMPLATE file|**_[[States-FMG-JSON Handlebars Template]]_** |
| Choose HELPERS file|**_Helpers-FMG-JSON.js_** |
| Field containing the data|**_pack.states_** |
| Each subfield is a separate note|**_unchecked_** |
| Field to use as Note Name|**_(see code block below - must be copy/pasted *exactly* as is)_** |
| Add suffix on duplicate Note Names|**_checked_** |
| Note name prefix/suffix|**_leave both blank_** |
| Allow paths in Note Name|**_CHECKED_** |
| How to Handle Existing Notes|**_REPLACE_** (see note above) |
| Name of Destination Folder in Vault|**_01-Campaigns/(specific Campaign Path)/05-Atlas/States_** (sub-folder will be created)|

##### States Note Name Code
Copy/paste _exactly_ as is:
```js
State-${name}/${name}
```


# Provinces 
The Provinces Notes pass will create individual notes for each Province in the JSON file. 

To import the Provinces Notes, here are the settings for the "Import JSON/CSV dialog":

| Setting | Option to Choose |
| ------- | ---------------- |
|         |                  |
| Choose JSON/CSV file|**_(FMG Full JSON file)_** |
| Specify URL to JSON data|**_Leave blank_** |
| Data contains multiple JSON objects|**_Leave blank_** |
| Choose TEMPLATE file|**_[[Provinces-FMG-JSON Handlebars Template]]_** |
| Choose HELPERS file|**_Helpers-FMG-JSON.js_** |
| Field containing the data|**_pack.provinces_** |
| Each subfield is a separate note|**_unchecked_** |
| Field to use as Note name| **_(see code block below - must be copy/pasted *exactly* as is)_** |
| Add suffix on duplicate note names|**_checked_** (OPTIONAL - use as a just-in-case) |
| Note name prefix/suffix|**_leave both blank_** |
| Allow paths in Note name|**_CHECKED_** |
| How to Handle Existing Notes|**_REPLACE_** (see note above) |
| Name of Destination Folder in Vault|**_01-Campaigns/(specific Campaign Path)/05-Atlas/States_** (sub-folders for each State's Provinces will be created as `id-fullProvinceName` within the respective State subfolder)|

##### Provinces Note Name Code
Copy/paste *exactly* as is:
```js
@{return `${this.state}-${(this.state > 0) && dataRoot.pack.states.find(state => state.i === this.state)?.name || "Unknown" }/${this.i}-${(this.i > 0) && this.fullName || "Unknown"}/${this.fullName}`}
```

# Burgs
The Burgs Notes pass will create individual notes for each Burg in the JSON file. 

To import the Burg Notes, here are the settings for the "Import JSON/CSV dialog":

| Setting | Option to Choose |
| ------- | ---------------- |
|         |                  |
| Choose JSON/CSV file|**_(FMG Full JSON file)_** |
| Specify URL to JSON data|**_Leave blank_** |
| Data contains multiple JSON objects|**_Leave blank_** |
| Choose TEMPLATE file|**_[[Burgs-FMG-JSON Handlerbars Template]]_** |
| Choose HELPERS file|**_Helpers-FMG-JSON.js_** |
| Field containing the data|**_pack.burgs_** |
| Each subfield is a separate note|**_unchecked_** |
| Field to use as Note name|**_(see code block below - must be copy/pasted *exactly* as is)_** |
| Add suffix on duplicate note names|**_checked_** (OPTIONAL - use as a just-in-case) |
| Note name prefix/suffix|**_leave both blank_** |
| Allow paths in Note name|**_CHECKED**
| How to Handle Existing Notes|**_REPLACE_** (see note above) |
| Name of Destination Folder in Vault|**_01-Campaigns/(specific Campaign Path)/05-Atlas/States_** (notes will be created within the respective Provinces subfolders within the Respective State subfolders)|

##### Burgs Note Name Code
Copy/paste *exactly* as is:
```js
@{return `${this.state}-${(this.state > 0) && dataRoot.pack.states.find(state => state.i === this.state)?.name || "Unknown" }/${dataRoot.pack.cells.find(c => c.i === this.cell)?.province}-${dataRoot.pack.provinces.find(p => p.i === dataRoot.pack.cells.find(c => c.i === this.cell)?.province)?.fullName}/${this.name}`}
```

# Cultures 
The Cultures Notes pass will create individual notes for each Culture in the JSON file. 

To import the Culture Notes, here are the settings for the "Import JSON/CSV dialog":

| Setting | Option to Choose |
| ------- | ---------------- |
|         |                  |
| Choose JSON/CSV file|**_(FMG Full JSON file)_** |
| Specify URL to JSON data|**_Leave blank_** |
| Data contains multiple JSON objects|**_Leave blank_** |
| Choose TEMPLATE file|**_[[Cultures-FMG-JSON Handlebars Template]]_** |
| Choose HELPERS file|**_Helpers-FMG-JSON.js_** |
| Field containing the data|**_pack.cultures_** |
| Each subfield is a separate note|**_unchecked_** |
| Field to use as Note name|**_name_** |
| Add suffix on duplicate note names|**_checked_** |
| Note name prefix/suffix|**_leave both blank_** |
| Allow paths in Note name|**_unchecked_**
| How to Handle Existing Notes|**_REPLACE_** (see note above) |
| Name of Destination Folder in Vault|**_01-Campaigns/(specific Campaign Path)/05-Atlas/Cultures_** (sub-folder will be created)|

# Religions 
The Religion Notes pass will create individual notes for each Religion in the JSON file. 

To import the Religion Notes, here are the settings for the "Import JSON/CSV dialog":

| Setting | Option to Choose |
| ------- | ---------------- |
|         |                  |
| Choose JSON/CSV file|**_(FMG Full JSON file)_** |
| Specify URL to JSON data|**_Leave blank_** |
| Data contains multiple JSON objects|**_Leave blank_** |
| Choose TEMPLATE file|**_[[Religions-FMG-JSON Handlebars Template]]_** |
| Choose HELPERS file|**_Helpers-FMG-JSON.js_** |
| Field containing the data|**_pack.reilgions_** |
| Each subfield is a separate note|**_unchecked_** |
| Field to use as Note name|**_name_** |
| Add suffix on duplicate note names|**_checked_** |
| Note name prefix/suffix|**_leave both blank_** |
| Allow paths in Note name|**_unchecked_**
| How to Handle Existing Notes|**_REPLACE_** (see note above) |
| Name of Destination Folder in Vault|**_01-Campaigns/(specific Campaign Path)/05-Atlas/Religions_** (sub-folder will be created)|

# Atlas
The Atlas Note pass will create a single note from multiple elements in the JSON file. This will contain tables of the States, Provinces, Burgs, Cultures, and Religions from the JSON data. They will be grouped by category and sorted, within their respective tables, by ID (the `{i}` element from each grouping within FMG JSON data).

This Atlas file will be distinct from the Campaign Specifc Atlas file (named `campaign_name-Simple Atlas`) that is setup when you create a new campaign. That file pulls data from the various groups by use of Dataview blocks and allows for some more robust sorting options. The links in the Dataview results, however, can get confused by duplicated names across the vault and the links can point to incorrect notes

There is no easy way to edit or fix this within the Dataview generated link results, however, so it will have some mis-linked notes if there are multiple versions of the same name used for notes across the vault.

To import the Atlas Note, here are the settings for the "Import JSON/CSV dialog":

| Setting | Option to Choose |
| ------- | ---------------- |
|         |                  |
| Choose JSON/CSV file|**_(FMG Full JSON file)_** |
| Specify URL to JSON data|**_Leave blank_** |
| Data contains multiple JSON objects|**_Leave blank_** |
| Choose TEMPLATE file|**_[[Atlas-FMG-JSON Handlebars Template]]_** |
| Choose HELPERS file|**_Helpers-FMG-JSON.js_** |
| Field containing the data|**_(leave blank)_** (you will be pulling from the entire JSON file) |
| Each subfield is a separate note|**_unchecked_** |
| Field to use as Note name|**_info.thisCampaign_** |
| Add suffix on duplicate note names|**_unchecked_** (only creating a single note)|
| Note name prefix/suffix|**_Prefix: blank / Suffix: "-Linked Atlas"_** |
| Allow paths in Note name|**_unchecked_**
| How to Handle Existing Notes|**_REPLACE_** (see note above) |
| Name of Destination Folder in Vault|**_01-Campaigns/(specific Campaign Path)/05-Atlas/_** |


# Wrangling the FMG Emblems

Steps undertaken to wrangle the FMG emblems connected to each State, Province, and Burg:
(instruction documentation still in-progress)

1. In Azgaar's FMG, under `Tools`, open the `Emblems` dialog.
2. Along the bottom there is an icon that looks like 3 stacked squares, that will download an HTML file that contains all the Emblems as SVG data.
3. In Chrome, install and enable the [SVG Export](https://chromewebstore.google.com/detail/svg-export/naeaaedieihlkmdajjefioajbbdbdjgp?hl=en-US&utm_source=ext_sidebar) plugin - this will allow you to save all the Emblems in the above HTML file as stand-alone SVGs, JPGs, or PNGs. (FWIW, SVG-grabber & SVG-Gobble do not work or at least don't do what SVG Export does - allows export of the merged SVG as one file).
4. Open the HTML file and export all Emblems to your file format of choice. JPG or PNG rasterize them. SVG allows them to be resized without as much quality loss. SVG Export will download a Zip file of all the emblems.
5. Expand the Zip of the Emblems to `91-Assets/campaign_name_assets`, where `campaign_name_assets` is a subfolder where you can store (and keep somewhat organized) the campaign specific assets.
6. The downloaded Emblems will be named ` svgexport-1`, `svgexport-2` and so on. We will rename them, after we extract the needed info in the next few steps.
7. Since the Emblems are exported in the order they appear in the file, we can extract the names that correspond to the Emblems from the HTML file. Using the python script below, you can scrape all the `<figcaption>` tags from the HTML doc and that will give you a CSV of just those tags.

> 	from bs4 import BeautifulSoup
> 	import requests
> 	
> 	# Opening the html file. If the file
> 	# is present in different location,
> 	# exact location need to be mentioned
> 	HTMLFileToBeOpened = open("path_to_Emblem_HTML_file", "r")
> 	
> 	# with the help of beautifulSoup and html parser create soup
> 	soup = BeautifulSoup(HTMLFileToBeOpened, "html.parser")
> 	
> 	# Search by text with the help of lambda function
> 	gfg = soup.find_all(lambda tag: tag.name == "figcaption")
> 	
> 	print(gfg)

> [!TIP]- Python & Dependencies
> For the above script to work, you will need to install the `BeautifulSoup` and `requests` extensions to your Python. Use `pip` to do this - `pip install bs4` (for BeautifulSoup) and `pip install requests`. You'll need to make sure Python is up-to-date, etc.
> 
> Here are some links to pages that helped:
> - [BeautifulSoup - Search by text inside a tag - GeeksforGeeks](https://www.geeksforgeeks.org/beautifulsoup-search-by-text-inside-a-tag/?ref=lbp)
> - [A Practical Introduction to Web Scraping in Python – Real Python](https://realpython.com/python-web-scraping-practical-introduction/#scrape-and-parse-text-from-websites)
> - (FOR FUTURE LEARNING) [Web Scraping With Javascript and Node.js Guide](https://brightdata.com/blog/how-tos/web-scraping-with-node-js)

7. Once you have created that script, run it in your Python environment and export the output to a file you can find. (i.e.- in Windows WSL, run the script with `python3 your_script.py>output_file.txt` to pipe the output to a file). The output will be a comma-separated list of all the `<figcaption>` tags which will contain the names of all the elements *(the names that appear above each emblem in the HTML file)*
8. Next, you'll want to rename the `svgexport` files so that they fully sort properly based on their name and numbering. In Windows, because the digits aren't padded, they don't sort correctly. Using the following PowerShell script, you can rename the files so that the digits are padded out to 3 characters (adding zeroes to 1- and 2-digit numbers):

> ```
> # Get the list of files
> $files = Get-ChildItem -Path "path_to_directory" -Filter "svgexport-*.png"
> 
> # Loop through each file
> foreach ($file in $files) {
> 	# Get the current file name and extract the number
> 	$fileName = $file.Name
> 	$number = $fileName -replace 'svgexport-(\d+).png', '$1'
> 
> 	# Pad the number with leading zeroes
> 	$paddedNumber = $number.PadLeft(3, '0')
> 
> 	# Construct the new file name
> 	$newFileName = "svgexport-$paddedNumber.png"
> 
> 	# Rename the file
> 	Rename-Item -Path $file.FullName -NewName $newFileName
> }

9. Replace `"path_to_directory"` with the actual path to the directory containing your files. This script will rename the files according to your specifications: single-digit numbers will have two leading zeroes added, and double-digit numbers will have one leading zero added, resulting in all files having three digits in the filename tail. Save the file to the folder where the images are and give a `.ps1` extension. Run it by using `.\your_script.ps1` and rename the files.
9. Now that you have a document with the `figcaption` values and have renamed the Emblem image files, you are ready to create yet another script to rename the files so that they match up. Due to things being saved in the order they appear in that HTML document, this renaming should be trivial.
2. Obtain a listing of the `svgexport` image files as a text file. I use [Freecommander](https://freecommander.com/en/summary/) and you can get this by simply selecting all the files in the folder and pressing `alt-c` to copy all the file names to the clipboard.
3. Paste the file listing into the first column of a spreadsheet (Google Sheets works fine).
4. Open the `output_file.txt` you created back in step 7 in a text editor. Do a search & replace to remove the `<figcaption>` & `</figcaption>` tag codes. And then do a replace on the pattern `, ` (note the space after the comma) and convert them to newline codes (using Notepad++ for instance, `Ctrl-H`, enable the *Extended* Search Mode option, find `, ` (comma space pattern) and replace with `\n`). 
5. Once you have done step 12, you should now have a listing of the State, Provinces, and Burgs from FMG with one item per line.
6. Paste that name data into the same spreadsheet from step 11, in the second column.
7. In the spreadsheet, create a `CONCATENATE` function in the first cell of the 3rd column. Ultimately, after following the above steps, the command should look like this: 

	=CONCATENATE("rename ", A778, " ", CHAR(34),"campaign_name OR world_name Emblem ", B778, ".png", CHAR(34)
The `CHAR(34)` code will insert double quote marks to wrap the filename that will have spaces. The `campaign_name OR world_name` portion can be whatever you want to use. If you've followed importing steps at the top of this document, the templates are setup to use the `campaignShortCode` you entered when you created a new campaign. The frontmatter field called `emblem` within States, Provinces, and Burgs should pre-populate with an item that is formatted like this: `campaignShortCode-world_name Emblem location_name.png` - where `location_name` will be whatever you're locations are named and `world_name` is the name of the FMG world taken from the JSON element at `info.mapName`.
8. Once you have created this listing via `CONCATENATE`, select that column and copy it to the clipoard.
9. Navigate to the folder where you've saved the FMG Emblems, and open a command line window.
10. Create a new `.bat` file, call it `emblem-rename.bat` and open it for editing and paste the `CONCATENATE` column results into the file and save it.
11. Running that `.bat` file now will rename all your FMG Emblem files so that they should match the emblem with the State/Province/Burg it goes with.
12. (OPTIONAL - you could add `state`, `province`, and `burg` to the respective file names. )
13. (Dealing with duplicated names - If you had any dupe files with suffix added, the files that would have been renamed to an existing duplicate name are still named `svgexport-???.png` - use the id numbers to find what they should be named - rename to create a unique filname. You could add  `-stateName` to any of the dupes. You will need to correct these manually after import.)

# Wrangling FMG Burg Maps
FMG includes connections to Watabou's [Medieval Fantasy City Generator](https://watabou.github.io/city-generator/?size=25&seed=981800034&greens=0&citadel=1&urban_castle=1&plaza=1&temple=1&walls=0&shantytown=0&coast=1&river=0&gates=-1&sea=0.2) and [Village Generator](https://watabou.github.io/village-generator/?seed=1714876149&tags=no%20square,highway). The URL links to maps for each of your map's Burgs is available to extract from the JSON, but it does not exist in a JSON field as the URL. It has to be extracted via some HelperJS functions in [[Helpers-FMG-JSON.js]].

You don't need to do anything to get that info. The URLs that link to the same maps directly out of the FMG map are extracted here as a part of the import process. There will be a link to the map in the info box on each Burg's individual note.

There are two ways to get the map itself to appear as part of the Burg's note.

### The Custom Frames Method
Pros: 
- "live" URL you can access on demand
- no extra work to do to implement this
Cons: 
- Internet connection required
- Cannot add any pins or other details within Obsidian 

This feature is created as a part of the import process. You can use it if you want or you can remove it.

It makes use of the extracted URL and the Custom Frames plugin included in the vault. It should just be there on each Burg note after the import.

### The Local Map Image Method
Pros:
- Using Obsidian Leaflet, you can add pins and other info to the map
- lock in the way the Burg looks - as Watabou and FMG are updated, sometimes the maps will procedurally generate differently from the first time you may have seen them. Or things could change with out you realizing it.
- Locally serving the images means you do not need an active connection to the Internet (once you've got them all downloaded)
Cons:
- Extracting the URLs can be a bit of a chore - it's fairly automated, but the steps must be done precisely or it will likely fairly (see below for the steps).
- Have to use PNG images for this because the SVGs from Watabou's apps have some formatting issues that make them not so pretty or useful (City Generator text has giant strokes around all the letters that obscure map beneath & Village Generator does not scale the text based on the window size - a small viewport will be mostly the Village Name - Azgaar blanks out the name on the FMG site because of this)

Pulling down the images of all the Burgs consists of using a Dataview within Obsidian to filter the Burg URLs. Then using the Table to CSV Exporter to export the results of that Dataview to a CSV file. Using an external script, AutoHotKey V1 in this case, to automatically pull down all the images for all the Burg URLs.

This is a fiddly process and it is not to be undertaken lightly. It does work, but it has to be done just so to work correctly.

Here are the steps to this process:
(instruction documentation still in-progress)

1. Import the Burgs from your FMG map as described above [[JSON Import How To#Burgs]]
2. Create a new note with this Dataview code on it (and nothing else):
```
(first line with 3 ticks & 'dataview')
TABLE WITHOUT ID file.link as "Name", burgMapLink as "burgMapLink"
FROM #Burg and "01-Campaigns/specific_campaign_name"
SORT file.name ASC
(close with 3 tick marks)
```
You need to include a `specific_campaign_name` or it will pull in all the Burg URLs from every Burg note in the vault.
3. Use the Table to CSV Exporter plugin to export this note to a CSV file. It will likely store the exported file in the root of the vault and call it something like `table-export-001.csv`.
4. Import the CSV into an app where you can access the individual columns. We *want to keep* the Burg Name and URL relationship intact, at least, somewhere. This will be helpful if there are issues with missing files.
5. (the AutoHotKey script - in 90-Tools & Helpers/_External_Scripts)
6. (sorting the CSV lines by the URL field to separate the City and Village URLs)
7. (saving the URLs only to `city-urls.csv` and `village-urls.csv` in the same folder as the AHK script)
8. (Running the AHK script - using Firefox seems to avoid the CityGen-PNG bug where it loses some map elements - they just don't display)
9. (Let it cook)
10. (Move the files to 91-Assets & within a subfolder for the specific campaign)
11. (renaming files to be hashed out next)
