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
> If you have modified your map after the FMG webapp generated it, in particular, if you have ***removed*** any *States, Provinces, Burgs, Cultures, or Religions* (as in they no longer exist in the world map from FMG), they may cause issues on import.
> 
> Usually this will show up in a folder named `undefined-Unknown` wherever your current import process is currently storing the files it is generating. This appears most often in the `{thisCampaignAtlas}/States` folder.
> 
> You *should* be able to just delete those items, since they are not going to be referred to by anything (or at least they shouldn't be). 

## Export an SVG of the FMG map itself
In FMG, under Options, choose the Layers Preset you would like to use. Using the Political Map layer preset works well for the world map. You can enable the Relief layer if you want to give your map a little extra detail. 

Export an SVG of the map. It will be useful to check the box that says "Show all labels" - this will show all the names of the States and Burgs on the map. Rename the SVG with the name `{thisCampaignName} World Map.svg` (obviously, you'd use the Campaign Name you chose up above.)

You can create a second map to export that shows the Provinces. In FMG Options, choose the Layers Preset called Provinces map. FMG does not currently have labels for the Provinces similar to States or Burgs. There are labels that exist in another place though. Under Options, click on the Tools tab and click to configure the Provinces and open that tool. Click on the letter A icon at the bottom to toggle the Province Labels on. They are a little different than the others, but they'll server our purpose. Rename the SVG file as `{thisCampaignName} Provinces World Map.svg`

### Modifications to FMG Full JSON file
There are some things that need to be modified in the `FMGJSON` file for the Handlebar Templates and Helpers to work properly. It's a good idea to work from a copy of the raw JSON export from FMG. That will give you a backup of what you get out of FMG and you can revert to the original data, if needed. Make a duplicate of the JSON file and add something like `"-MODDED"` or `"-forIMPORT"` to the filename. Open this copied JSON file in a text editor. **Be very careful to keep the JSON valid for this to work.**

### Modifications to make

We need to add some info to the JSON file to allow the JSON/CSV Importer to name and place files in the correct location.

We are going to use a Python script to add a new JSON object with a few child items to the top of the FMG JSON file you've just exported.

1. Make sure you have Python v3 installed on your system. Check [the python website](https://www.python.org/) to find a version that is compatible with your system.
2. Copy the base script below to the clipboard:
   
```
import json

# New JSON object to be added
new_data = {
    "importInfo":{
    "thisCampaign": "{thisCampaignName}",
    "thisCampaignPath": "{thisCampaignPath}",
    "thisCampaignShortCode": "{thisCampaignShortCode}",
    "mapDroboxFMGLink": "{FMGDropboxLink}"
    }
}
# UPDATE THIS INFO
# ONLY change the value of the lines *after* `"import-info":{`
# You will be making edits on lines 6 to 9 *ONLY*.
# CAREFULLY edit data values, within the quote marks on the right side of each line.
# Do not leave any curly braces within those values behind.
# Do not change the formatting of any of the lines.

# Path to the existing JSON file
# UPDATE THIS INFO
# must end with `.json` extension.
# KEEP the single quotes around this file name
input_file_path = 'path_to_your_existing_FMGjson_file.json'

# Path to the new JSON file where the merged data will be saved
# UPDATE THIS INFO
# append '-MODDED' or '-forIMPORT' to file name
# must end with `.json` extension.
# KEEP the single quotes around this file name
output_file_path = 'path_to_your_output_FMGjson_file.json'

# Read the existing JSON file with UTF-8 encoding
with open(input_file_path, 'r', encoding='utf-8') as file:
    existing_data = json.load(file)

# Merge the new data into the existing data
merged_data = {**new_data, **existing_data}

# Write the merged data to the new JSON file with UTF-8 encoding
with open(output_file_path, 'w', encoding='utf-8') as file:
    json.dump(merged_data, file, indent=4)

print("Merged JSON data saved to a new file successfully.") 
```

3. Create a new script file in `{thisCampaignAssets}` folder and name it `{thisCampaignName}-FMG-JSON-modder.py`.
4. Open the script to edit and change the values around where you see the `# UPDATE THIS INFO:` comments & follow any instructions there:
	1. Line 6: `{thisCampaignName}` - the name of your Campaign. The one entered when creating the campaign.
	2. Line 7: `{thisCampaignPath}` - the path to your Campaign's data within the vault. It should start with `01-Campaigns`.
	3. Line 8: `{thisCampaignShortCode}` - the shortcode you created when you created the Campaign.
	4. In case you didn't write that info down, all 3 of the above pieces of info can be found in a note called: `"{thisCampaign} Home"`
	5. Line 9: `{FMGDropboxLink}` - There is a cool feature on the FMG map you've created, where you can choose to save your map to your Dropbox and then FMG will create a link to this file. This allows access directly to your FMG map by anyone show has the link and is code into the templates for this import so you will have location-specific links directly to the places on your FMG map in the notes. [^1]
	6. Line 23: Put the name of your `FMGJSON` file in place of `path_to_your_existing_FMGjson_file.json`
	7. Line 30: Edit the value of `path_to_your_output_FMGjson_file.json` with the name you wish to use for output. I usually use the exported `FMGJSON` file name and add `-MODDED` or `-forIMPORT` to the end. 
5. Save these changes _without_ messing up the formatting of those lines.
6. Run the script (using Python) and it will create the output file in the same folder.[^2]
7. The MODDED JSON file will now be the file you use for the import process in the next step.
8. Copy the MODDED JSON file to this folder of the vault: `99-Templates\Handlebars-JSON`[^3]


> [!INFO]
> Using Notepad++ with the JSON View plugin makes this process easier and can help protect the structure of the JSON data.

---

Previous Step: [[01-The First Steps]] | Next Step: [[03-Importing the FMG JSON Data]]

[^1]: This access will be read-only. Only the owner of the Dropbox will be able to save changes back to the Dropbox, *however* those saved changes will result in a new Dropbox link being created, so if you must make changes, you will need to use a tool to 'find & replace' the old link with the new link. Therefore, its a good idea to *not* change your FMG map _after_ the import to Obsidian is done.

[^2]: To run a Python script, generally you type `python3 your_script_name_here` on to a commandline or terminal. For this script, you *need* to be sitting in the folder where the script and the JSON files are located.

[^3]: The reason for copying it into that templates folder is because the JSON/CSV Importer does not retain the paths you load into the top fields (Source File, Handlebar Template, and Helper JS File), so you need to re-select those on each pass. I have found it's easiest to just store the MODDED JSON in this folder, as well, so you don't need to keep navigating to different locations for these items each time you do an import pass.
	
	*However, the batch import process makes this less important now.*
