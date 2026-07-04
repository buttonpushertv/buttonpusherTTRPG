---
tags:
- JSON
- Guide
- Importing
---

> [!ERROR] OLDER PROCESS WARNING
> These instructions have not been fully updated to reflect all the changes in the process made for Wyrmling-v.0.6, where Batch Importing was added.
> 
> I hope to update these instructions at a future date.

# Why do you torture yourself so?

In this note, you will find the step-by-step instructions for importing the FMG JSON to create notes that will represent all the States, Provinces, Burgs, Cultures, and Religions[^1] found in your FMG world map file. The Handlebar Templates will create many links between related locations and it *should* make your life, as worldbuilder, a little easier and more fun.

Don't be daunted by the process of importing. These steps will guide you through the process.



## Importing Issues
The JSON/CSV Importer plugin requires some different settings for each pass of the import. You can't just run it once and import each item you want to extract[^2]. Below are the settings needed for each of the various types of imports. There are a  minimum of 6 import passes to import the content from an FMG JSON file to get the major pieces into Obsidian as notes.

**It is important to maintain the sub-folder structure for each of the import passes because the Atlas import pass (the final one below) makes use of these paths to find and link to the correct files**

Here are the individual import passes you'll need to run to import the data:
(also, you probably will want to perform these passes in the order laid out below)
1. Importing [[#States]]
2. Importing [[#Provinces]]
3. Importing [[#Burgs]]
4. Importing [[#Cultures]]
5. Importing [[#Religions]]
6. Importing [[#Atlas]]

### Dealing with Duplicated Names 

FMG can and does create locations with duplicate names, not a lot, but it happens, particularly in regions that use the same Culture & namebase. In my experience working with it and testing different worlds, I often see Burgs located in different States getting duplicate names. Once or twice I have seen a Burg name duplicated within the same State, but not usually within the same Province in the same State.

Thankfully, the JSON/CSV Importer plugin can handle these sorts of duplicates. Read the section below for info on how the duplicate names are currently handled in the Handlebar templates. 

> [!INFO] CURRENT DUPLICATE NAME PROCEDURE
> As of Wyrmling Edition v0.3, the current process for dealing with duplicate names is this:
> 1. We are going to create a folder hierarchy of subfolders for each State with their Provinces inside those State subfolders, and then the individual Burgs inside their respective Province subfolders.
> 2. All of this can be created during the import process and is coded into the Handlebar Templates and the Helpers.
> 3. We will be using an advanced method in the JSON/CSV Importer setting `Field to use as Note Name`. We will be using a combination of extracting data from fields and the limited JavaScript capabilities (added in release 0.35.0).
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
>> A feature request for having Custom Helpers run on fields within the import dialog box was made. The reply was that in an updated version, there is now an ability to run limited JS helpers directly in the field. So, the feature is sort of added in version [0.36.0](https://github.com/farling42/obsidian-import-json/releases/tag/0.36.0) of the JSON/CSV Importer, but the accessing the full `_Helpers-FMG-JSON.js` from the import dialog is not likely to be included.
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

### Import first, Edit later
These importing processes are **destructive**. They will overwrite or append existing files. You will want to complete each import process to your satisfaction **before** you start editing and adding your own content to the files that get created. There is no undo for this process, so be aware of that.

> [!TIP] How to Handle Existing Notes Option - REPLACE or APPEND?
> In short, use **REPLACE**. 
>
>> [!NOTE]- (An explanation)
>> The JSON/CSV Importer plugin has options for creating notes that may already exist. Care should be taken to understand how these options work. _REPLACE_ will overwrite any exitsing notes with the same name as what is being imported (as in, you will lose any data contained within those files - see above). _APPEND_ will append a fresh interpretation of the templates onto the end of an existing file with the same name. When doing imports, most of the time you will want to use _REPLACE_.

### Delete is your friend 
In the process of importing, you may discover that you need to repeat the import steps more than once. In testing, I have found that it is sometimes most helpful to fully delete all the files that a previous import process created before re-running it, particularly if there are lots of errors in the console.

Due to the nature of nested subfolders we will generate on import, if things get messed up, the only way to reset back a step, will be to delete everything and start over. In testing, one solution that came in handy was to make back up copies of the campaign's `05-Atlas\States` folder after the States and the Provinces passes. That way, if either the Provinces or Burgs import pass goes wrong, you can delete the messed up version and restore to a known good pass.

## Import Passes
Handlebars Templates and Helpers reside in the folder: ***99-Templates\Handlebars-JSON***

Importing should be done in this order based on the folders each step creates & subsequent steps will need those folder to exist:
1. [[#States]]
2. [[#Provinces]]
3. [[#Burgs]]
4. [[#Cultures]]
5. [[#Religions]]
6. [[#Atlas]]


> [!warning]- AutoHotKey Helper (Windows automation) - OPTIONAL
> The JSON/CSV Importer import process cannot be automated within Obsidian. There is no way to save the settings for the upper three fields we set on each import pass: `Choose JSON/CSV file`, `Choose TEMPLATE file`, and `Choose HELPERS file`. This is a limitation in the method the plugin creator has to interact with local files. As of yet, it doesn't seem likely to change in the future.
> 
> The hassle is that, because we are running multiple passes, you end up needing to click around a bunch to setup the JSON Import Dialog on each pass. To that end, there is an optional AutoHotKey scripti, if you're on Windows,  that can help to add some automation to this import process.
> 
> You can find the script in the 90-Tool & Helpers\_External_Scripts. It is setup to open the JSON Importer Dialog via the hotkey `Control-Alt-J`, which you will need to set up in Obsidian. Also, it works best if you open it once manually, before triggering a hotkey, and navigate to the folder where you have stored the FMG JSON File, the Handlebar Templates & the Helper js file.
>
> This script sets up hotkeys for the States, Provinces, Burgs, Cultures, Religions, and Linked Atlas passes. It does this via keyboard only, so it shouldn't require moving the mouse or clicking anywhere. Once it has completed, it will end with the `Name of the Destination Folder` field highlighted and will copy that passes destination path to the clipboard. If everything looks good, you can paste that path in and start the import.
> 
> Look at the script before running it. You will need to paste your info in on the lines where you see `; CUSTOMIZE THIS LINE WITH YOUR INFO` - put your paths in these places.
> 
> 
> **Caveat Emptor!**

> [!TIP] Keyboard Maestro (Mac automation) - OPTIONAL - COMING SOON
> It's on my ToDo list...eventually.

### States
The States Notes pass will create individual notes for each State in the JSON file. 

To import the States Notes, here are the settings for the "Import JSON/CSV dialog":

| Setting | Option to Choose |
| ------- | ---------------- |
|         |                  |
| Choose JSON/CSV file|**_(FMG Full JSON file)_** |
| Specify URL to JSON data|**_Leave blank_** |
| Data contains multiple JSON objects|**_Leave blank_** |
| Choose TEMPLATE file|**_[[States-FMG-JSON Handlebars Template]]_** |
| Choose HELPERS file|**__Helpers-FMG-JSON.js_** |
| Field containing the data|**_pack.states_** |
| Each subfield is a separate note|**_unchecked_** |
| Field to use as Note Name|**_(see code block below - must be copy/pasted *exactly* as is)_** |
| Add suffix on duplicate Note Names|**_checked_** |
| Note name prefix/suffix|**_leave both blank_** |
| Allow paths in Note Name|**_CHECKED_** |
| How to Handle Existing Notes|**_REPLACE_** (see note above) |
| Name of Destination Folder in Vault|**_01-Campaigns/_** (sub-folder will be created)|

##### States Note Name Code
Copy/paste _exactly_ as is:
```js
@{return `${dataRoot.importInfo.thisCampaign}/05-Atlas/${dataRoot.info.mapName}/States/${this.name}/${this.name}`}
```


### Provinces 
The Provinces Notes pass will create individual notes for each Province in the JSON file. 

To import the Provinces Notes, here are the settings for the "Import JSON/CSV dialog":

| Setting | Option to Choose |
| ------- | ---------------- |
|         |                  |
| Choose JSON/CSV file|**_(FMG Full JSON file)_** |
| Specify URL to JSON data|**_Leave blank_** |
| Data contains multiple JSON objects|**_Leave blank_** |
| Choose TEMPLATE file|**_[[Provinces-FMG-JSON Handlebars Template]]_** |
| Choose HELPERS file|**__Helpers-FMG-JSON.js_** |
| Field containing the data|**_pack.provinces_** |
| Each subfield is a separate note|**_unchecked_** |
| Field to use as Note name| **_(see code block below - must be copy/pasted *exactly* as is)_** |
| Add suffix on duplicate note names|**_checked_** (OPTIONAL - use as a just-in-case) |
| Note name prefix/suffix|**_leave both blank_** |
| Allow paths in Note name|**_CHECKED_** |
| How to Handle Existing Notes|**_REPLACE_** (see note above) |
| Name of Destination Folder in Vault|**_01-Campaigns/_** (sub-folders for each State's Provinces will be created as `id-fullProvinceName` within the respective State subfolder)|

##### Provinces Note Name Code
Copy/paste *exactly* as is
```js
@{return `${dataRoot.importInfo.thisCampaign}/05-Atlas/${dataRoot.info.mapName}/States/${(this.state > 0) && dataRoot.pack.states.find(state => state.i === this.state)?.name || 'Unknown' }/Provinces/${(this.i > 0) && this.fullName || 'Unknown'}/${this.fullName}`}
```
### Burgs
The Burgs Notes pass will create individual notes for each Burg in the JSON file. 

To import the Burg Notes, here are the settings for the "Import JSON/CSV dialog":

| Setting | Option to Choose |
| ------- | ---------------- |
|         |                  |
| Choose JSON/CSV file|**_(FMG Full JSON file)_** |
| Specify URL to JSON data|**_Leave blank_** |
| Data contains multiple JSON objects|**_Leave blank_** |
| Choose TEMPLATE file|**_[[Burgs-FMG-JSON Handlebars Template]]_** |
| Choose HELPERS file|**__Helpers-FMG-JSON.js_** |
| Field containing the data|**_pack.burgs_** |
| Each subfield is a separate note|**_unchecked_** |
| Field to use as Note name|**_(see code block below - must be copy/pasted *exactly* as is)_** |
| Add suffix on duplicate note names|**_checked_** (OPTIONAL - use as a just-in-case) |
| Note name prefix/suffix|**_leave both blank_** |
| Allow paths in Note name|**_CHECKED**
| How to Handle Existing Notes|**_REPLACE_** (see note above) |
| Name of Destination Folder in Vault|**_01-Campaigns/_** (notes will be created within the respective Provinces subfolders within the Respective State subfolders)|

##### Burgs Note Name Code
Copy/paste *exactly* as is:
```js
@{return `${dataRoot.importInfo.thisCampaign}/05-Atlas/${dataRoot.info.mapName}/States/${(this.state > 0) && dataRoot.pack.states.find(state => state.i === this.state)?.name || 'Unknown' }/Provinces/${dataRoot.pack.provinces.find(p => p.i === dataRoot.pack.cells.find(c => c.i === this.cell)?.province)?.fullName}/Burgs/${this.name}`}
```
### Cultures 
The Cultures Notes pass will create individual notes for each Culture in the JSON file. 

To import the Culture Notes, here are the settings for the "Import JSON/CSV dialog":

| Setting | Option to Choose |
| ------- | ---------------- |
|         |                  |
| Choose JSON/CSV file|**_(FMG Full JSON file)_** |
| Specify URL to JSON data|**_Leave blank_** |
| Data contains multiple JSON objects|**_Leave blank_** |
| Choose TEMPLATE file|**_[[Cultures-FMG-JSON Handlebars Template]]_** |
| Choose HELPERS file|**__Helpers-FMG-JSON.js_** |
| Field containing the data|**_pack.cultures_** |
| Each subfield is a separate note|**_unchecked_** |
| Field to use as Note name|**_(see code block below - must be copy/pasted *exactly* as is)_** |
| Add suffix on duplicate note names|**_checked_** |
| Note name prefix/suffix|**_leave both blank_** |
| Allow paths in Note name|**_unchecked_**
| How to Handle Existing Notes|**_REPLACE_** (see note above) |
| Name of Destination Folder in Vault|**_01-Campaigns/_** (sub-folder will be created)|

##### Cultures Note Name Code

Copy/paste _exactly_ as is:
```js
@{return `${dataRoot.importInfo.thisCampaign}/05-Atlas/${dataRoot.info.mapName}/Cultures/${this.name}`}
```


### Religions 
The Religion Notes pass will create individual notes for each Religion in the JSON file. 

To import the Religion Notes, here are the settings for the "Import JSON/CSV dialog":

| Setting | Option to Choose |
| ------- | ---------------- |
|         |                  |
| Choose JSON/CSV file|**_(FMG Full JSON file)_** |
| Specify URL to JSON data|**_Leave blank_** |
| Data contains multiple JSON objects|**_Leave blank_** |
| Choose TEMPLATE file|**_[[Religions-FMG-JSON Handlebars Template]]_** |
| Choose HELPERS file|**__Helpers-FMG-JSON.js_** |
| Field containing the data|**_pack.religions_** |
| Each subfield is a separate note|**_unchecked_** |
| Field to use as Note name|**_**_(see code block below - must be copy/pasted *exactly* as is)_**_** |
| Add suffix on duplicate note names|**_checked_** |
| Note name prefix/suffix|**_leave both blank_** |
| Allow paths in Note name|**_unchecked_**
| How to Handle Existing Notes|**_REPLACE_** (see note above) |
| Name of Destination Folder in Vault|**_01-Campaigns/** (sub-folder will be created)|

##### Religions Note Name Code

Copy/paste _exactly_ as is:
```js
@{return `${dataRoot.importInfo.thisCampaign}/05-Atlas/${dataRoot.info.mapName}/Religions/${this.name}`}
```

### Markets 
The Markets Notes pass will create individual notes for each Market in the JSON file, along with a table of the goods each specific market has (stock & price).

To import the Market Notes, here are the settings for the "Import JSON/CSV dialog":

| Setting | Option to Choose |
| ------- | ---------------- |
|         |                  |
| Choose JSON/CSV file|**_(FMG Full JSON file)_** |
| Specify URL to JSON data|**_Leave blank_** |
| Data contains multiple JSON objects|**_Leave blank_** |
| Choose TEMPLATE file|**_[[Markets-FMG-JSON Handlebars Template]]_** |
| Choose HELPERS file|**__Helpers-FMG-JSON.js_** |
| Field containing the data|**_pack.markets_** |
| Each subfield is a separate note|**_unchecked_** |
| Field to use as Note name|**_**_(see code block below - must be copy/pasted *exactly* as is)_**_** |
| Add suffix on duplicate note names|**_checked_** |
| Note name prefix/suffix|**_leave both blank_** |
| Allow paths in Note name|**_unchecked_**
| How to Handle Existing Notes|**_REPLACE_** (see note above) |
| Name of Destination Folder in Vault|**_01-Campaigns/** (sub-folder will be created)|

##### Markets Note Name Code

Copy/paste _exactly_ as is:
```js
@{return `${dataRoot.importInfo.thisCampaign}/05-Atlas/${dataRoot.info.mapName}/Markets/${(this.centerBurgId > 0) && dataRoot.pack.burgs.find(burg => burg.i === this.centerBurgId)?.name || 'Unknown' }`}
```


### Atlas
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
| Choose HELPERS file|**__Helpers-FMG-JSON.js_** |
| Field containing the data|**_(leave blank)_** (you will be pulling from the entire JSON file) |
| Each subfield is a separate note|**_unchecked_** |
| Field to use as Note name|**_(see code block below - must be copy/pasted *exactly* as is)_** |
| Add suffix on duplicate note names|**_unchecked_** (only creating a single note)|
| Note name prefix/suffix|**_Prefix: blank / Suffix: "-Linked Atlas"_** |
| Allow paths in Note name|**_checked_**
| How to Handle Existing Notes|**_REPLACE_** (see note above) |
| Name of Destination Folder in Vault|**_01-Campaigns/${import-info.thisCampaign}_** |

##### Atlas Note Name Code

Copy/paste _exactly_ as is:
```js
@{return `${dataRoot.importInfo.thisCampaign}/05-Atlas/${dataRoot.info.mapName}/${dataRoot.info.mapName}-Linked Atlas`}
```

### NameBases 
These are the names used to create locations on the map. They are based on real world & fantasy languages. This import step will create a series of notes that convert the comma-separated text string into a roll table of the names, so you can make use of them throughout the vault. 

To import the NameBase Notes, here are the settings for the "Import JSON/CSV dialog":

| Setting                             | Option to Choose                                                   |
| ----------------------------------- | ------------------------------------------------------------------ |
|                                     |                                                                    |
| Choose JSON/CSV file                | **_(FMG Full JSON file)_**                                         |
| Specify URL to JSON data            | **_Leave blank_**                                                  |
| Data contains multiple JSON objects | **_Leave blank_**                                                  |
| Choose TEMPLATE file                | **_[[NameBase-FMG-JSON Handlebars Template]]_**                    |
| Choose HELPERS file                 | **__Helpers-FMG-JSON.js_**                                         |
| Field containing the data           | **_nameBases_**                                                    |
| Each subfield is a separate note    | **_unchecked_**                                                    |
| Field to use as Note name           | **_(see code block below - must be copy/pasted *exactly* as is)_** |
| Add suffix on duplicate note names  | **_checked_**                                                      |
| Note name prefix/suffix             | **_leave both blank_**                                             |
| Allow paths in Note name            | **_unchecked_**                                                    |
| How to Handle Existing Notes        | **_REPLACE_** (see note above)                                     |
| Name of Destination Folder in Vault | **_01-Campaigns/_** (sub-folder will be created)                   |

##### NameBases Note Name Code

Copy/paste _exactly_ as is:
```js
@{return `${dataRoot.importInfo.thisCampaign}/05-Atlas/${dataRoot.info.mapName}/Cultures/_NameBases/${this.name}`}
```
