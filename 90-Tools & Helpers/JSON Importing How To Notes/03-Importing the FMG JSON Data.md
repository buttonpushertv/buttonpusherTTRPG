---
tags:
- JSON
- Guide
- Importing
---

Previous Step: [[02-The FMG JSON File]] | Nest Step: [[04-Wrangling FMG Emblems]]

---

# OK, Now it's getting hairy!!

In this note, you will find instructions for importing the FMG JSON to create notes that will represent all the States, Provinces, Burgs, Cultures, and Religions[^1] found in your FMG world map file.

As of, Wyrmling v.0.6, this process can now be done in a batch import thanks to the Batch Import feature of the JSON/CSV Importer Plugin. There is a [[03b-Multi-step Importing Process|multi-step importing process]] that also works, but is much more fiddly and requires a lot of patience. I whole-heartedly recommend using the batch import process.

> [!INFO] Underscores in filenames?
> Several of the files we'll be using for the Batch Import process have an underscore character at the start of their names. This is just to allow those specific files to bubble to the top of the listings, so they are easy to find.

Using these files, you can set up an import that can all be done in one fell swoop. Here are the files we will use:

#### MASTER Template File
[[_FMG-JSON-Handlebars-MASTER-Template|99-Templates/Handlebars-JSON/_FMG-JSON-Handlebars-MASTER-Template]] - This is the master template to create all the different notes. There are also individual template files for each note type, if you want (or need) to import (or re-import) one particular category of note, you can make use of those individual templates - learn more about that in the [[03b-Multi-step Importing Process|multi-step importing process]] note.

If *you do make changes* to any of the individual template files, you can easily concatenate them into the master Handlebar template file by running the Python script called `_full-template-maker.py` that lives in the `99-Templates/Handlebars-JSON.` It will *delete* the previous version of `_FMG-JSON-Handlebars-MASTER-Template` and create a new one from the Handlebar template files sitting in that folder.

Here are the individual Handlebar template files and what they deal with:


| Handlebar Template File | Formats Notes Imported From? |
| --- | --- |
| [[States-FMG-JSON Handlebars Template]] | Importing & Creating FMG-States Notes |
| [[Provinces-FMG-JSON Handlebars Template]] | Importing & Creating FMG-Provinces Notes |
| [[Burgs-FMG-JSON Handlebars Template]] | Importing & Creating FMG-Burgs Notes |
| [[Cultures-FMG-JSON Handlebars Template]] | Importing & Creating FMG-Cultures Notes |
| [[Religions-FMG-JSON Handlebars Template]] | Importing & Creating FMG-Religion Notes |
| [[Atlas-FMG-JSON Handlebars Template]] | Importing & Creating an Atlas Note of all the data that is imported for the FMG map |
| [[_FMG-JSON-Handlebars-MASTER-Template]] | The master Handlebar template for all of the above note types. Required for the [[#The Batch Import Process]] process described below |
| _Helpers-FMG-JSON.js | Several helper functions that process all the JSON data for importing and formatting by the Handlebar templates |


#### Handlebar Helper JavaScript File
`99-Templates/Handlebars-JSON/_Helpers-FMG-JSON.js` - not linkable because it's a JavaScript file. Open it in your favorite text editor if you want to take a look at it. The Handlebar Templates will create many links between related locations and it *should* make your life, as worldbuilder, a little easier and more fun.

In order to process the data from FMG's JSON file, the data needs to be processed to convert numeric values for things like IDs into human-readable elements. I've reverse engineered a lot of the functions from the FMG code to recreate similar data. The Handlebar Helper for this import is on the larger side and contains many functions

You can learn more about handlebar helpers here: [Handlebars](https://handlebarsjs.com/)

#### Batch Import JSON Control File
`99-Templates/Handlebars-JSON/_FMG-Import-Batch.JSON` - it's a JSON file - same issue as the Helpers file above. This is where the magic of batch importing comes together. You could certainly do the process the [[03b-Multi-step Importing Process|hard way]], but this really does make it so much quicker.


## The Batch Import Process

Here are the steps for doing a batch import of the FMG JSON you prepped in the previous step:

> [!TIP] Open the Console
> Ctrl-Shift-I(PC) or Command-Option-I(Mac) opens the console - you can see what's happening with the import process there. You will see any errors there too.


1. Open the JSON/CSV Importer - `BUTTON[openJSONImporter]`
2. In the JSON/CSV Importer panel, fill in these fields:
	1. In the top section - "Choose JSON File" - click "Choose Files" and select your FMG Map JSON file. (see - [[02-The FMG JSON File]])
	2. If you placed the to-be-imported version of your FMG map's JSON file in the folder, `99-Templates/Handlebars-JSON`, you will conveniently be placed into that same folder for the next three file chooser steps below.
	3. Leave "Specify URL to JSON data" & "Data contains multiple JSON objects" *empty* - not even a "space" should be in there.
	4. Move to section - "Choose TEMPLATE File" - click "Choose File" and select the master template file `_FMG-JSON-Handlebars-MASTER-Template`
	5. Move to section - "Choose HELPERS File" - click "Choose File" and select the helpers script: `_Helpers-FMG-JSON.js`
	6. Move to section - "Choose BATCH File" - click "Choose File" and select the JSON Batch Import control file: `_FMG-Import-Batch.JSON`
	7. In the field next to "Field containing the data", make sure to delete any value there (there may be a value left there from the most previous import). Truly delete any value there. Do not leave *a space* in this field - it will mess up the import.
	8. Uncheck "Each subfield is a separate note"
	9. Clear out any values in "Field to use as Note name" as well. Should be nothing there.
	10. Check "Add suffix on duplicate Note names"
	11. Clear all values from "Note name prefix/suffix"
	12. Check "Allow paths in Note name" - if you don't check this, your notes will be saved in an odd location.
	13. Select `REPLACE` under "How to handle existing Notes"
	14. The "Name of Destination Folder in Vault" should be `01-Campaigns`. The specific campaign and location where notes are saved will be determined by what you entered when you modified the FMG JSON file (see [[02-The FMG JSON File#Modifications to FMG Full JSON file]] )
3. Once you have the info above all filled in, you can click "Import" and it will import your FMG map data.
   
## Summary
If everything went smoothly, you should now have all of the FMG data imported.

What you have now should certainly get you started with extending the world-building process.

---

Previous Step: [[02-The FMG JSON File]] | Nest Step: [[04-Wrangling FMG Emblems]]

[^1]: I hope to add some of the other content in the FMG map at some point. The data for Markers, Rivers, and lots of other stuff is all in there and would be cool to extract as well. Someday...