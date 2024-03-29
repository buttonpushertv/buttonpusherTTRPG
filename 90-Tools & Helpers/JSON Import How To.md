These instructions are a guide for importing the content from Azgaar's Fantasy Map Generator(FMG) into Obsidian Notes via the Full JSON file that can be exported from FMG (accessed under the "Export" option reached by opening the main menu in the upper left of FMG).

# Export Full JSON from FMG
Export the "Full JSON" File from Fantasy Map Generator.

# Modifications to FMG Full JSON file
There are some things that need to be modified in the FMG JSON file for the Handlebar Templates and Helpers to work properly. It's a good idea to work from a copy of the raw JSON export from FMG. That will give you a backup of what you get out of FMG and you can revert to the original data, if needed. Make a duplicate of the JSON file and add something like "-MODDED" or "-forIMPORT" to the filename. Open this copied JSON file in a text editor. **Be very careful to keep the JSON valid for this to work.**

> [!INFO]
> Using Notepad++ with the JSON View plugin makes this process easier and can help protect the structure of the JSON data.

### Modifications to make
1. Under the `info` element, add some Campaign specific stuff. _You should modify this info for each campaign you wish to import this JSON into. It will create some relative path info needed in the various notes you will be creating._
	1. First you'll need to grab the name of your campaign. This is the _exact_ name under `01-Campaigns` from your vault.
	2. After the `"version"` element, add a comma and then press enter to create a new line
	3. Enter `"thisCampaign": "name_here"` - place the campaign name from above inside the quotes, replacing `name_here`  & add a comma to the end of the line. _Make sure to surround items in double quotations like other elements._
	4. On a second new line enter `"thisCampaignPath": "01-Campaigns/name_here"` - replace the `name_here` part with the name above.

2. The JSON object `pack.provinces` is missing some child elements that will cause the JSON/CSV Importer to fail.
	1. Navigate to the `pack.provinces` object.
	2. This element has a `[0]` child element that contains no values.
	3. You will need to add valid element here for JSON/CSV Importer to succeed.
	4. Use this code & paste it into the `pack.provinces`

> [! NOTE] Code to place into `pack.provinces[0]` element
> ```js
> {
> 	"burg": 0,
> 	"color": "#ffffff",
> 	"formName": "Neutral",
> 	"fullName": "Neutral",
> 	"i": 0,
> 	"name": "Neutral",
> 	"state": 0
> },```

5. Paste it where you see the lone `0,` before the `[1]` element - replacing the `0,` entirely.
6. Make sure there is a comma after the final curly bracket so that the JSON Importer reads it as an array element.

# Handlebar Helper
In order to process the data from FMG's JSON file, the data needs to be processed to convert numeric values for things like IDs into human-readable elements. I've reverse engineered a lot of the functions from the FMG code to recreate similar data. The Handlebar Helper for this import is on the larger side and contains many functions. All import passes will need to make use of the Handlebar Helper file at: 99-Templates/Handlebars-JSON/Helpers-FMG-JSON.js

To view the contents of the above helper .js file, you can open it in a text editor.

# Importing Issues
The JSON/CSV Importer plugin requires some different settings for each pass of the import. You can't just run it once and import each item you want to extract. Below are the settings needed for each of the various types of imports. There are a  minimum of 4 import passes to import the content from an FMG JSON file to get the major pieces into Obsidian as notes. Here are the individual import passes you'll need to run to import the data:

1. Importing/creating [[JSON Import How To#States|States]]
2. Importing/creating [[JSON Import How To#Provinces|Provinces]]
3. Importing/creating [[JSON Import How To#Burgs|Burgs]]
4. Importing/creating [[JSON Import How To#Cultures]]
5. Religions

## Dealing with Duplicated Names 
FMG can and does create locations with duplicate names, not a lot, but it happens, particularly in regions that use the same Culture & namebase. In my experience working with it and testing different worlds, I often see Burgs located in different States getting duplicate names. Once or twice I have seen a Burg name duplicated within the same State, but not usually within the same Province in the same State. I don't know if there is any code within the generator to prevent duplicate names from being created. Thankfully, the JSON/CSV Importer plugin can handle these sorts of duplicates.

To handle any duplicates, the JSON/CSV Importer has two features. You can use a combination of fields to name the notes on import OR you can append a numeric suffix to the duplicate notes on import.

> [!Question]
> Will also ask Azgaar if FMG could have an option to prevent duplicate names from being generated.
> 
> Feature requested: [Prevent duplicate names from being generated across map? · Issue #1062 · Azgaar/Fantasy-Map-Generator · GitHub](https://github.com/Azgaar/Fantasy-Map-Generator/issues/1062)

### Appending field data to note name
To use a combination of fields from the data on import, you can construct the name by entering the field names and any separators into the `Field to use as note name` on the JSON/CSV Importer's dialog.

> [!quote|author] [JSON/CSV Importer Release 0.35.0](https://github.com/farling42/obsidian-import-json/releases/tag/0.35.0)
> Allow the notename to be constructed from more than one field. The "Field Name" can contain either a single field name, or a more complex format with field names surrounded by `"${...}"`, for example `"${country}-${name}"` (without the double-quotes).

Because FMG JSON data is lean, the data representing the State and Province where a Burg lies are stored as numeric values (the Javascript Helper has lookups to find the names represented by these id's). JSON/CSV Importer does not execute JS helpers on values passed via the import dialog, there's not an easy way to look these values up and cross-reference the ID to the names.

That means your pages would end up being named things like: `burgname-457-1`. It isn't quite helpful to figure out what those numbers mean.

> [!QUESTION]
> It would be cool to figure out how to get those numbers to parse into their respective names. As a last ditch effort, we could ask the dev of JSON/CSV Importer to process helpers on that field, but I don't know how hard that would be.
>
> Dev has been asked: [Process helpers on fieldname values from import dialog? · Issue #68 · farling42/obsidian-import-json · GitHub](https://github.com/farling42/obsidian-import-json/issues/68)

### Adding numeric suffix on duplicate note names

> [!quote|author] [JSON/CSV Importer Release 0.35.0](https://github.com/farling42/obsidian-import-json/releases/tag/0.35.0)
> Provide an additional option "Add suffix on duplicate Note Names" which will append a number to the end of a Note if its name matches the name of a Note that was created during this import (it will NOT look for existing Notes in the vault before the import was started).

The second duplicate handling is the method I find that works best (at least for now) is to check the option *Add suffix on duplicate note names*. Just use the `name` (or `fullName`) field in the `Field to use as note name` by itself. This option, when checked, will append a number on the end of any note's filename if a duplicate is encountered. 

Keep in mind that the number starts at `1` and is applied to the first duplicate name the the importer encounters. That means that the first name in each pass will have no suffix appended by this duplicates naming option.

For example, if you have three Burgs named, `Townville` in your JSON, the first note imported will be `Townville`, the second note of that name will be `Townville1`, and the third note will be named `Townville2`. My guess is that this stems from the way arrays work in JS - the first item is always index `0`, so it has no suffix appended. Just something to keep in mind.

## Import first, Edit later
These importing processes are **destructive**. They will overwrite or append existing files. You will want to complete each import process to your satisfaction **before** you start editing and adding your own content to the files that get created. There is no undo for this process, so be aware of that.

## How to Handle Existing Notes Option - REPLACE or APPEND?
The JSON/CSV Importer plugin has options for creating notes that may already exist. Care should be taken to understand how these options work. _REPLACE_ will overwrite any exitsing notes with the same name as what is being imported (as in, you will lose any data contained within those files - see above). _APPEND_ will append a fresh interpretation of the templates onto the end of an existing file with the same name. When doing imports, most of the time you will want to use _REPLACE_.

In the process of importing, you may discover that you need to repeat the import steps more than once. In testing, I have found that the best workflow is to fully delete all the files that a previous import process created before re-running it.

## States
The States Notes pass will create individual notes for each State in the JSON file. 
Handlebars Templates and Helpers reside in the folder: ***99-Templates\Handlebars-JSON***

To import the States Notes, here are the settings for the "Import JSON/CSV dialog":

Choose JSON/CSV file: **_(FMG Full JSON file)_**
Specify URL to JSON data: **_Leave blank_**
Data contains multiple JSON objects: **_Leave blank_**
Choose TEMPLATE file: **_Handlebar - FMG - State JSON Template.md_** (see below)
Choose HELPERS file: **_Handlebar - FMG - JSON Custom Helpers.js_** (see below)
Field containing the data: **_pack.states_** (using the entire JSON file - helps with the cross-referencing)
Each subfield is a separate note: **_unchecked_**
Field to use as Note name: **_name_**
Add suffix on duplicate note names:**_checked_**
Note name prefix/suffix: ***(prefix leave blank) | (suffix leave blank)***
Allow paths in Note name: **_unchecked_**
How to Handle Existing Notes: **_REPLACE_** or **_APPEND_** (see note below)
Name of Destination Folder in Vault: **_01_Campaigns/(specific Campaign Path)/10-Atlas/States/_**

#### Handlebar for JSON import of States
[[Handlebar - FMG - States JSON Template]]

# Provinces 
The Provinces Notes pass will create individual notes for each Province in the JSON file. 
Handlebars Templates and Helpers reside in the folder: ***99-Templates\Handlebars-JSON***

To import the Provinces Notes, here are the settings for the "Import JSON/CSV dialog":

Choose JSON/CSV file: **_(FMG Full JSON file)_**
Specify URL to JSON data: **_Leave blank_**
Data contains multiple JSON objects: **_Leave blank_**
Choose TEMPLATE file: **_Handlebar - FMG - Provinces JSON Template.md_** (see below)
Choose HELPERS file: **_Handlebar - FMG - JSON Custom Helpers.js_** (see below)
Field containing the data: **_pack.provinces** (using the entire JSON file - helps with the cross-referencing)
Each subfield is a separate note: **_unchecked_**
Field to use as Note name: **_name_**
Add suffix on duplicate note names:**_checked_**
Note name prefix/suffix: ***(prefix leave blank) | (suffix leave blank)***
Allow paths in Note name: **_unchecked_**
How to Handle Existing Notes: **_REPLACE_** or **_APPEND_** (see note below)
Name of Destination Folder in Vault: **_01_Campaigns/(specific Campaign Path)/10-Atlas/Provinces/_**

#### Handlebar for JSON import of States
[[Handlebar - FMG- Provinces JSON Template]]

# Burgs
The Burgs Notes pass will create individual notes for each Burg in the JSON file. 
Handlebars Templates and Helpers reside in the folder: ***99-Templates\Handlebars-JSON***

To import the Provinces Notes, here are the settings for the "Import JSON/CSV dialog":

Choose JSON/CSV file: **_(FMG Full JSON file)_**
Specify URL to JSON data: **_Leave blank_**
Data contains multiple JSON objects: **_Leave blank_**
Choose TEMPLATE file: **_Handlebar - FMG - Burgs JSON Template.md_** (see below)
Choose HELPERS file: **_Handlebar - FMG - JSON Custom Helpers.js_** (see below)
Field containing the data: **_pack.burgs** (using the entire JSON file - helps with the cross-referencing)
Each subfield is a separate note: **_unchecked_**
Field to use as Note name: **_name_**
Add suffix on duplicate note names:**_checked_**
Note name prefix/suffix: ***(prefix leave blank) | (suffix leave blank)***
Allow paths in Note name: **_unchecked_**
How to Handle Existing Notes: **_REPLACE_** or **_APPEND_** (see note below)
Name of Destination Folder in Vault: **_01_Campaigns/(specific Campaign Path)/10-Atlas/Burgs/_**

# Cultures 

# Religions 

