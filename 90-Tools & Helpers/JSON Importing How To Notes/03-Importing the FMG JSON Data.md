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

Using these files, you can set up an import that can all be done in one fell swoop. Here are the files we will use:

#### MASTER Template File
[[FMG-JSON-Handlebars-MASTER-Template|99-Templates/Handlebars-JSON/FMG-JSON-Handlebars-MASTER-Template]] - This is the master template to create all the different notes. There are also individual template files for each note type, if you want (or need) to import (or re-import) one particular category of note, you can make use of those individual templates - learn more about that in the [[03b-Multi-step Importing Process|multi-step importing process]] note.

#### Handlebar Helper JavaScript File
`99-Templates/Handlebars-JSON/Helpers-FMG-JSON.js` - not linkable because it's a JavaScript file. Open it in your favorite text editor if you want to take a look at it. The Handlebar Templates will create many links between related locations and it *should* make your life, as worldbuilder, a little easier and more fun.

In order to process the data from FMG's JSON file, the data needs to be processed to convert numeric values for things like IDs into human-readable elements. I've reverse engineered a lot of the functions from the FMG code to recreate similar data. The Handlebar Helper for this import is on the larger side and contains many functions

You can learn more about handlebar helpers here: [Handlebars](https://handlebarsjs.com/)

#### Batch Import JSON Control File
`99-Templates/Handlebars-JSON/FMG-Import-Batch.JSON` - it's a JSON file - same issue as the Helpers file above. This is where the magic of batch importing comes together. You could certainly do the process the [[03b-Multi-step Importing Process|hard way]], but this really does make it so much quicker.


## The Batch Import Process

Here are the steps for doing a batch import of the FMG JSON you prepped in the previous step:

1. (open JSON/CSV Importer)
2. (load the FMG JSON)
3. (load the MASTER template)
4. (load the HELPERS.js)
5. (load the Batch Import JSON File)
6. (clear out the other fields)
7. (do you need to set the import folder at all in a batch import?)
8. (start the import)
   
(tip - Ctrl-Shift-I opens the console - you can see what's happening with the import process there. You will see any errors there too.)

## Summary
(import should be done - check things like links etc.)
(next we'll discuss getting the emblems, maps, and other things into the vault)

---

Previous Step: [[02-The FMG JSON File]] | Nest Step: [[04-Wrangling FMG Emblems]]

[^1]: I hope to add some of the other content in the FMG map at some point. The Markers, Rivers, and Military info is all in there and would be cool to extract as well. Someday.