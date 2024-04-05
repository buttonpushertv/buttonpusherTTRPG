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
	5. On a third line, enter `"thisCampaignShortCode": "shortcode_here"` - replace the `shortcode-here` part with the campaign's short code.

> [!INFO] Storing the MODDED JSON file - a suggested location
> When you save the MODDED JSON file from FMG, it's probably a good idea to store it in this folder of this vault: `99-Templates\Handlebars-JSON`.
> 
> The reason is because the JSON/CSV Importer does not retain the paths you load into the top fields (Source File, Handlebar Template, and Helper JS File), so you need to re-select those on each pass. We have found it's easiest to just store the MODDED JSON in this folder so you don't need to keep navigating to different locations for these items each time you do an import pass.
 

# Handlebar Helper
In order to process the data from FMG's JSON file, the data needs to be processed to convert numeric values for things like IDs into human-readable elements. I've reverse engineered a lot of the functions from the FMG code to recreate similar data. The Handlebar Helper for this import is on the larger side and contains many functions. All import passes will need to make use of the Handlebar Helper file at: 99-Templates/Handlebars-JSON/Helpers-FMG-JSON.js

To view the contents of the above helper .js file, you can open it in a text editor.

# Importing Issues
The JSON/CSV Importer plugin requires some different settings for each pass of the import. You can't just run it once and import each item you want to extract. Below are the settings needed for each of the various types of imports. There are a  minimum of 6 import passes to import the content from an FMG JSON file to get the major pieces into Obsidian as notes.

**It is important to maintain the sub-folder structure for each of the import passes because the Atlas import pass (the final one below) make use of these paths to find and link to the correct files**

Here are the individual import passes you'll need to run to import the data:

1. Importing [[JSON Import How To#States|States]]
2. Importing [[JSON Import How To#Provinces|Provinces]]
3. Importing [[JSON Import How To#Burgs|Burgs]]
4. Importing [[JSON Import How To#Cultures]]
5. Importing [[JSON Import How To#Religions]]
6. Importing [[JSON Import How To#Atlas]]

## Dealing with Duplicated Names 
FMG can and does create locations with duplicate names, not a lot, but it happens, particularly in regions that use the same Culture & namebase. In my experience working with it and testing different worlds, I often see Burgs located in different States getting duplicate names. Once or twice I have seen a Burg name duplicated within the same State, but not usually within the same Province in the same State. I don't know if there is any code within the generator to prevent duplicate names from being created. Thankfully, the JSON/CSV Importer plugin can handle these sorts of duplicates.

To handle any duplicates, the JSON/CSV Importer has two features. You can use a combination of fields to name the notes on import OR you can append a numeric suffix to the duplicate notes on import.

> [!Info]- De-duplication of names by FMG is not likely
> A feature request was made for the FMG to have an option or setting for removing or not creating duplicates at the map creation process or within the FMG app. Due to the procedural nature of name generation within FMG, it is not possible to have FMG create maps with no dupes. At least as of April 2024.
> 
> Feature request: [Prevent duplicate names from being generated across map? · Issue #1062 · Azgaar/Fantasy-Map-Generator · GitHub](https://github.com/Azgaar/Fantasy-Map-Generator/issues/1062)

### Appending field data to note name
To use a combination of fields from the data on import, you can construct the name by entering the field names and any separators into the `Field to use as note name` on the JSON/CSV Importer's dialog.

> [!quote|author] [JSON/CSV Importer Release 0.35.0](https://github.com/farling42/obsidian-import-json/releases/tag/0.35.0)
> Allow the notename to be constructed from more than one field. The "Field Name" can contain either a single field name, or a more complex format with field names surrounded by `"${...}"`, for example `"${country}-${name}"` (without the double-quotes).

Because FMG JSON data is lean, the data representing the State and Province where a Burg lies are stored as numeric values (the Javascript Helper has lookups to find the names represented by these id's). JSON/CSV Importer does not execute JS helpers on values passed via the import dialog, there's not an easy way to look these values up and cross-reference the ID to the names.

That means your pages would end up being named things like: `burgname-457-1`. It isn't quite helpful to figure out what those numbers mean.

> [!QUESTION]- JSON/CSV Importer Helpers on Import Feature Request
> A feature request for having Custom Helpers run on fields within the import dialog box was made. The reply was that in an updated version, there is now an ability to run limited JS helpers directly in the field. So, the feature is sort of added in version [0.36.0](https://github.com/farling42/obsidian-import-json/releases/tag/0.36.0) of the JSON/CSV Importer, but the accessing the full `Helpers-FMG-JSON.js` from the import dialog is not likely to be included.
> 
> Issue on Gihub: [Process helpers on fieldname values from import dialog? · Issue #68 · farling42/obsidian-import-json · GitHub](https://github.com/farling42/obsidian-import-json/issues/68)

### Adding numeric suffix on duplicate note names

> [!quote|author] [JSON/CSV Importer Release 0.35.0](https://github.com/farling42/obsidian-import-json/releases/tag/0.35.0)
> Provide an additional option "Add suffix on duplicate Note Names" which will append a number to the end of a Note if its name matches the name of a Note that was created during this import (it will NOT look for existing Notes in the vault before the import was started).

The second duplicate handling is the method I find that works best (at least for now) is to check the option *Add suffix on duplicate note names*. Just use the `name` (or `fullName`) field in the `Field to use as note name` by itself. This option, when checked, will append a number on the end of any note's filename if a duplicate is encountered. 

Keep in mind that the number starts at `1` and is applied to the first duplicate name the the importer encounters. That means that the first name in each pass will have no suffix appended by this duplicates naming option.

For example, if you have three Burgs named, `Townville` in your JSON, the first note imported will be `Townville`, the second note of that name will be `Townville1`, and the third note will be named `Townville2`. My guess is that this stems from the way arrays work in JS - the first item is always index `0`, so it has no suffix appended. Just something to keep in mind

So, to sum up, you can either use the new feature in [0.36.0](https://github.com/farling42/obsidian-import-json/releases/tag/0.36.0) of the JSON/CSV Importer OR just use the *Add suffix on duplicate note names* checkbox and contend with duplicates that way. Unfortunately, there is bound to be some amount of manual effort to deal with the items that get duplicated.

## Import first, Edit later
These importing processes are **destructive**. They will overwrite or append existing files. You will want to complete each import process to your satisfaction **before** you start editing and adding your own content to the files that get created. There is no undo for this process, so be aware of that.

> [!TIP] How to Handle Existing Notes Option - REPLACE or APPEND?
> In short, use **REPLACE**. 
>
>> [!NOTE]- (An explanation)
>> The JSON/CSV Importer plugin has options for creating notes that may already exist. Care should be taken to understand how these options work. _REPLACE_ will overwrite any exitsing notes with the same name as what is being imported (as in, you will lose any data contained within those files - see above). _APPEND_ will append a fresh interpretation of the templates onto the end of an existing file with the same name. When doing imports, most of the time you will want to use _REPLACE_.

## Delete is your friend 
In the process of importing, you may discover that you need to repeat the import steps more than once. In testing, I have found that the best workflow is to fully delete all the files that a previous import process created before re-running it.

# Import Passes

## States
The States Notes pass will create individual notes for each State in the JSON file. 
Handlebars Templates and Helpers reside in the folder: ***99-Templates\Handlebars-JSON***

To import the States Notes, here are the settings for the "Import JSON/CSV dialog":

| Setting | Option to Choose |
| ------- | ---------------- |
|         |                  |
| Choose JSON/CSV file|**_(FMG Full JSON file)_** |
| Specify URL to JSON data|**_Leave blank_** |
| Data contains multiple JSON objects|**_Leave blank_** |
| Choose TEMPLATE file|**_[[States-FMG-JSON Handlebars Template]]_** |
| Choose HELPERS file|**_Helpers-FMG-JSON.js_** (see below) |
| Field containing the data|**_pack.states_** |
| Each subfield is a separate note|**_unchecked_** |
| Field to use as Note name|**_name_** |
| Add suffix on duplicate note names|**_checked_** |
| Note name prefix/suffix|**_leave both blank_** |
| Allow paths in Note name|**_unchecked_**
| How to Handle Existing Notes|**_REPLACE_** (see note above) |
| Name of Destination Folder in Vault|**_01-Campaigns/(specific Campaign Path)/05-Atlas/States_** (sub-folder will be created)|

# Provinces 
The Provinces Notes pass will create individual notes for each Province in the JSON file. 
Handlebars Templates and Helpers reside in the folder: ***99-Templates\Handlebars-JSON***

To import the Provinces Notes, here are the settings for the "Import JSON/CSV dialog":

| Setting | Option to Choose |
| ------- | ---------------- |
|         |                  |
| Choose JSON/CSV file|**_(FMG Full JSON file)_** |
| Specify URL to JSON data|**_Leave blank_** |
| Data contains multiple JSON objects|**_Leave blank_** |
| Choose TEMPLATE file|**_[[Provinces-FMG-JSON Handlebars Template]]_** |
| Choose HELPERS file|**_Helpers-FMG-JSON.js_** (see below) |
| Field containing the data|**_pack.provinces_** |
| Each subfield is a separate note|**_unchecked_** |
| Field to use as Note name|**_fullName_** (this will create files named *"Provincename County"*, etc.) |
| Add suffix on duplicate note names|**_checked_** |
| Note name prefix/suffix|**_leave both blank_** |
| Allow paths in Note name|**_unchecked_**
| How to Handle Existing Notes|**_REPLACE_** (see note above) |
| Name of Destination Folder in Vault|**_01-Campaigns/(specific Campaign Path)/05-Atlas/Provinces_** (sub-folder will be created)|

# Burgs
The Burgs Notes pass will create individual notes for each Burg in the JSON file. 
Handlebars Templates and Helpers reside in the folder: ***99-Templates\Handlebars-JSON***

To import the Burg Notes, here are the settings for the "Import JSON/CSV dialog":

| Setting | Option to Choose |
| ------- | ---------------- |
|         |                  |
| Choose JSON/CSV file|**_(FMG Full JSON file)_** |
| Specify URL to JSON data|**_Leave blank_** |
| Data contains multiple JSON objects|**_Leave blank_** |
| Choose TEMPLATE file|**_[[Burgs-FMG-JSON Handlerbars Template]]_** |
| Choose HELPERS file|**_Helpers-FMG-JSON.js_** (see below) |
| Field containing the data|**_pack.burgs_** |
| Each subfield is a separate note|**_unchecked_** |
| Field to use as Note name|**_name_** |
| Add suffix on duplicate note names|**_checked_** |
| Note name prefix/suffix|**_leave both blank_** |
| Allow paths in Note name|**_unchecked_**
| How to Handle Existing Notes|**_REPLACE_** (see note above) |
| Name of Destination Folder in Vault|**_01-Campaigns/(specific Campaign Path)/05-Atlas/Burgs_** (sub-folder will be created)|


# Cultures 
The Cultures Notes pass will create individual notes for each Culture in the JSON file. 
Handlebars Templates and Helpers reside in the folder: ***99-Templates\Handlebars-JSON***

To import the Culture Notes, here are the settings for the "Import JSON/CSV dialog":

| Setting | Option to Choose |
| ------- | ---------------- |
|         |                  |
| Choose JSON/CSV file|**_(FMG Full JSON file)_** |
| Specify URL to JSON data|**_Leave blank_** |
| Data contains multiple JSON objects|**_Leave blank_** |
| Choose TEMPLATE file|**_[[Cultures-FMG-JSON Handlebars Template]]_** |
| Choose HELPERS file|**_Helpers-FMG-JSON.js_** (see below) |
| Field containing the data|**_pack.cultures_** |
| Each subfield is a separate note|**_unchecked_** |
| Field to use as Note name|**_name_** |
| Add suffix on duplicate note names|**_checked_** |
| Note name prefix/suffix|**_leave both blank_** |
| Allow paths in Note name|**_unchecked_**
| How to Handle Existing Notes|**_REPLACE_** (see note above) |
| Name of Destination Folder in Vault|**_01-Campaigns/(specific Campaign Path)/05-Atlas/Cultures_** (sub-folder will be created)|

# Religions 
The Religion Notes pass will create individual notes for each Reilgion in the JSON file. 
Handlebars Templates and Helpers reside in the folder: ***99-Templates\Handlebars-JSON***

To import the Reilgion Notes, here are the settings for the "Import JSON/CSV dialog":

| Setting | Option to Choose |
| ------- | ---------------- |
|         |                  |
| Choose JSON/CSV file|**_(FMG Full JSON file)_** |
| Specify URL to JSON data|**_Leave blank_** |
| Data contains multiple JSON objects|**_Leave blank_** |
| Choose TEMPLATE file|**_[[Religions-FMG-JSON Handlebars Template]]_** |
| Choose HELPERS file|**_Helpers-FMG-JSON.js_** (see below) |
| Field containing the data|**_pack.reilgions_** |
| Each subfield is a separate note|**_unchecked_** |
| Field to use as Note name|**_name_** |
| Add suffix on duplicate note names|**_checked_** |
| Note name prefix/suffix|**_leave both blank_** |
| Allow paths in Note name|**_unchecked_**
| How to Handle Existing Notes|**_REPLACE_** (see note above) |
| Name of Destination Folder in Vault|**_01-Campaigns/(specific Campaign Path)/05-Atlas/Religions_** (sub-folder will be created)|

# Atlas
The Atlas Note pass will create a single note from elements in the JSON file. This will contain tables of the States, Provinces, Burgs, Cultures, and Religions from the JSON data. They will be grouped by category and sorted, within their respective tables, by ID (the `{i}` element from each grouping within FMG JSON data).

This Atlas file will be distinct from the Campaign Specifc Atlas file (named `campaign_name-Simple Atlas`) that is setup when you create a new campaign. That file pulls data from the various groups by use of Dataview blocks and allows for sorting options. The links in the Dataview results, however, can get confused by duplicated names across the vault and the links can point to incorrect notes

There is no easy way to edit or fix this within the Dataview generated link results, however, so it will have some mis-linked notes if there are multiple versions of the same name used for notes across the vault.



Handlebars Templates and Helpers reside in the folder: ***99-Templates\Handlebars-JSON***

To import the Atlas Note, here are the settings for the "Import JSON/CSV dialog":

| Setting | Option to Choose |
| ------- | ---------------- |
|         |                  |
| Choose JSON/CSV file|**_(FMG Full JSON file)_** |
| Specify URL to JSON data|**_Leave blank_** |
| Data contains multiple JSON objects|**_Leave blank_** |
| Choose TEMPLATE file|**_[[Atlas-FMG-JSON Handlebars Template]]_** |
| Choose HELPERS file|**_Helpers-FMG-JSON.js_** (see below) |
| Field containing the data|**_(leave blank)_** (you will be pulling from the entire JSON file) |
| Each subfield is a separate note|**_unchecked_** |
| Field to use as Note name|**_${info.thisCampaign}_** |
| Add suffix on duplicate note names|**_unchecked_** (only creating a single note)|
| Note name prefix/suffix|**_Prefix: blank / Suffix: "-Linked Atlas"_** |
| Allow paths in Note name|**_unchecked_**
| How to Handle Existing Notes|**_REPLACE_** (see note above) |
| Name of Destination Folder in Vault|**_01-Campaigns/(specific Campaign Path)/05-Atlas/_** |


# Wrangling the FMG Emblems

Steps undertaken to wrangle the FMG emblems connected to each State, Province, and Burg:

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

