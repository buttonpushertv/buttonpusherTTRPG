> [!ERROR] OLDER PROCESS WARNING
> These instructions have not been fully updated to reflect all the changes in the process made for Wyrmling-v.0.6, where Batch Importing was added.
> 
> I hope to update these instructions at a future date.
> 
> For now, once imported, each Burg note, contains the code for the Leaflet and a live Web View of the Burg's map from FMG. You can easily save those maps, one-at-a-time, to your campaign's asset folder. Just expand the callout for either map and you will see the link code & a button that will pre-load the correct filename for that Burg's map to your clipboard, to make saving a little easier.

# Wrangling FMG Burg Maps
FMG includes connections to Watabou's [Medieval Fantasy City Generator](https://watabou.github.io/city-generator/?size=25&seed=981800034&greens=0&citadel=1&urban_castle=1&plaza=1&temple=1&walls=0&shantytown=0&coast=1&river=0&gates=-1&sea=0.2) and [Village Generator](https://watabou.github.io/village-generator/?seed=1714876149&tags=no%20square,highway). The URL links to maps for each of your map's Burgs is available to extract from the JSON, but it does not exist in a JSON field as the URL. It has to be extracted via some HelperJS functions in `_Helpers-FMG-JSON.js`.

You don't need to do anything to get that info. The URLs that link to the same maps directly out of the FMG map are extracted here as a part of the import process. There will be a link to the map in the info box on each Burg's individual note.

There are two ways to get the map itself to appear as part of the Burg's note.

### The Custom Frames Method
Pros: 
- "live" URL you can access on demand
- no extra work to do to implement this

Cons: 
- Internet connection required
- Cannot add any pins or other details within Obsidian 

This feature is created as a part of the import process. You can use it if you want or you can remove it. It makes use of the extracted URL and the Custom Frames plugin included in the vault. It should just be there on each Burg note after the import.

Click on the `Burg Map (live from Web)` callout to open that map in a small window. This is a mini browser, using the `Custom Frames` plugin.

### The Local Map Image Method
Pros:
- Using Obsidian Leaflet, you can add pins and other info to the map
- lock in the way the Burg looks - as Watabou and FMG are updated, sometimes the maps will procedurally generate differently from the first time you may have seen them. Or things could change with out you realizing it.
- Locally serving the images means you do not need an active connection to the Internet (once you've got them all downloaded)

Cons:
- Extracting the URLs can be a bit of a chore - it's fairly automated, but the steps must be done precisely or it will likely fail (see below for the steps).
- Have to use PNG images for this because the SVGs from Watabou's apps have some formatting issues that make them not so pretty or useful (City Generator text has giant strokes around all the letters that obscure map beneath & Village Generator does not scale the text based on the window size - a small viewport will be mostly the Village Name - Azgaar blanks out the name on the FMG site because of this)

### Simple, download-as-you-go Map Method

As of Wyrmling 0.5, there is simple method you can employ to pull down individual maps, per Burg, with some helpers built into the burg's generated page. This is a method for pulling down only those few maps for burgs you want to have locally. If you want to have *all* the burg maps, see the [[00-JSON Importing How To Guide#Download All the Maps]] section below.

To make use of the simple, one-burg-at-a-time method, follow these steps:

1. Open any generated burg note.
2. Click on the `Burg Map (Interactive)` callout to open it.
3. Obsidian may fuss at you about not being able to load an image - well, of course, because it isn't there....yet.
4. At the bottom of that opened callout, you should see a link to the burg that will open it directly in FMG - while that's a cool feature, we don't need that link for this.
5. At the bottom, there is also a Metabind button that will open the burg map on the Watabou generator page it comes from. This link should have all the same settings as the link you can open within the FMG map directly.
6. Clicking that button will open the burg's map *and also* copy the `id`-`name` on to the clipboard.
7. You can then go to the map's page, right-click and choose `Export>PNG` to download the map.
8. It will download to where ever your browser downloads files.
9. Go to that folder and replace the name of that file with the name on the clipboard - just fo to rename the file and paste the new name in.
10. Move that renamed file to a location in your vault. I'd suggest `01-Campaigns/(specific_campaign_name)/98-(specfic_campaign_name Assets`, and put into a subfolder there named `FMG-cities-PNG` (for a `city-generator` map) or `FMG-villages-PNG` (for a `village-generator` map).
11. The new map should show up on the burg page in that callout. You may need to reload the vault or at least the page to get it to update.


### Complex, Download All the Maps method

Pulling down the images of all the Burgs consists of using a Dataview within Obsidian to filter the Burg URLs. Then using the Table to CSV Exporter to export the results of that Dataview to a CSV file. Using an external script, AutoHotKey V1 in this case, to automatically pull down all the images for all the Burg URLs.

This is a fiddly process and it is not to be undertaken lightly. It does work, but it has to be done just so to work correctly.

Here are the steps to this process:
(instruction documentation still in-progress)

1. Import the Burgs from your FMG map as described above [[JSON Import How To#Burgs]]
2. When you created your Campaign, there was a note created called, `(specific_campaign_name)-Burg-URLs-Listing` in the `05-Atlas` folder of that campaign. Open that note now.
3. Use the Table to CSV Exporter plugin to export this note to a CSV file. It will likely store the exported file in the root of the vault and call it something like `table-export-001.csv`.
4. I like to move that file to the campaign's `98-(specific_campaign_name) Assets` folder and rename it to something more useful, like: `(specific_campaign_shortcode)-FMG-Burg-URLs-RAW-export.csv`.
5. Import the CSV into an app where you can access the individual columns. I prefer to use Google Sheets OR Excel. We *want to keep* the Burg Name, ID, and URL relationship intact, at least, somewhere. This will be helpful if there are issues with missing files, so putting this into a spreadsheet will allow us to manipulate the data in chunks to keep everything connected.
6. Name your new spreadsheet with a name you can connect to your campaign, like `(specific_campaign_name)-FMG Burg URLs for downloads` & you can include a date if you think you might want to keep tabs on when the data was exported.
7. Once you have the full `burg` list imported into a spreadsheet, we can add some new columns to help further process the data. On import, you should now have 3 columns in the spreadsheet: A: `Name`, B: `id`, and C: `burgMapLink`
8. First, rename this first sheet in your document to `FMG Burgs - ALL`. 
9. In column D, put this formula to convert the `Name` to a lower case version we'll need later:

```
=LOWER(A2) 
```

10. In column E, enter the formula below. This is going to create a line of code we will use to rename the files after we've downloaded them. (It's not easy to rename the files as we save them, so we'll use this to create a batch file that will do that for use near the end of this process.)
```
=CONCATENATE("rename ", CHAR(34), D2, ".png", CHAR(34), " " , CHAR(34), B2, "-", A2, ".png", CHAR(34))
```

11. Once last formatting thing to do will help you find any burgs that have duplicate names with other burgs on your FMG world map. If you are using Google Sheets, here is a way to flag duplicate names, and then we can deal with them.
	1. Select all the values in column D - the lowercase burg names.
	2. Open the `Conditional Formatting` pane and click `+ Add another rule`.
	3. Make sure `Apply to range` covers the full range of values in column D.
	4. Under `Format rules`, where it says `Format cells if...`, choose ` Custom formula is` from that pull down menu.
	5. Enter this formula: 
	```
	=COUNTIF(D:D,D2)>1
	```
	6. Change the `Formatting style` to something you'll be able to catch - I like a red color.
	7. Click `Done` to save that rule.
	8. Click `+ Add another rule` to add a second rule.
	9. This time we are going to check for spaces in the burg names. When saving the map images from the generators, via this method, any names with spaces in them will have those spaces removed. The scripts and templates do not account for that, so we'll want to add them back in.
	10. Under this new rule, make sure  `Apply to range` covers the full range of values in column D.
	11. Under `Format rules`, where it says `Format cells if...`, choose ` Custom formula is` from that pull down menu.
	12. Enter this formula: 
	```
	=REGEXMATCH(D1, " ")
	```
	13. Change the `Formatting style` to something different than the first rule - I usually choose blue.
	14. Click `Done` to save that rule.
	15. Now scroll through the full list and you can see any burgs that have the same name, highlighted in column D with a red cell background. And any burg names that contain spaces will be highlighted in blue. 
	16. Even if you find duplicate names, double check to see if they are both being pulled from the same generator. Look over in column C to see if they are both from the `city-generator` or `village-generator`. If they are different, then it won't be an issue. If they are the same, when they get saved, any dupes after the first instance of that name will get a number, in parenthesis, added onto their names.
	17. You could certainly, pre-emptively, "fix" those issues by manually editing the names with issues. 
	18. What I like to do is copy the full "rename" command from column E for the problem name.
	19. Then, in Column F, I paste the "values" only. In Google Sheets, you can press `Crtl-Shift-V` to do that, or right-click and choose `Paste Special>Values only`.
	20. Now, you can edit the command manually to correct the issues.
	21. For dupe names, you can add a space + '(1)' for the second duplicate name, add '(2)' if there's a third dupe name, and so on. Add that new bit just before the '.png' in the first name, the lowercase one, and only that name. Leave the second name, the one that starts with a number alone.
	22. For names with spaces, you should just remove any spaces in the lowercase version of the name, the item, in quotes, just after `rename`. Don't remove the spaces from the second part, the name that begins with a number - out burg pages will be looking for the file name to still contain those spaces.
	23. Once you have edited those names, you can just drag or cut & paste the "fixed" command back over to the left, to column E, and replace the `CONCATENATE`-created command there. That way, when you are ready to copy the commands from that column, you'll already have fixed the issues.
	24. If you don't want to make that change (or you forget to - more likely), that's OK. You will be able to spot the problem files pretty quickly after you run the renaming `.bat` files at the very end of the process. Read down below for more info.

12. Now, you can create two duplicates of the `FMG Burgs - ALL` sheet. Name one `FMG Villages` and the second, `FMG Cities`.
13. You can also delete the very top row in each duplicate - the headers (`Name`,`id`, & `burgMapLink`). They are not needed in these two copies. I like to keep the headers in the `FMG Burgs - ALL` sheet.
14. In `FMG Villages`, start by sorting the whole sheet by the `burgMapLink` column. In Google Sheets, select all then choose *Data>Sort range>Advanced range sorting options* from the menu.
15. Once `FMG Villages` is sorted by `burgMapLink`, you see that the urls in the upper part of column C all start with `https://watabou.github.io/city-generator/` followed by a bunch of parameters. Further down the list, you will see other urls that contain, `https://watabou.github.io/village-generator/` - these are the ones we want to keep in this sheet. Select all the rows with `city-generator` in them and delete them. This should leave you with only the urls for the villages. Get rid of any empty rows to clean up the sheet.
16. Now switch over to `FMG Cities`, and repeat the sorting process. In Google Sheets, select all then choose *Data>Sort range>Advanced range sorting options* from the menu.
17. This time, scroll to the bottom and select all the rows where the `burgMapLink` begins with `https://watabou.github.io/village-generator` and delete all those rows. You should be left with only items that have `city-generator` in the `burgMapLink`. Get rid of any empty rows to clean up the sheet.
18. Finally, in `FMG Cities`, we will add one more column - I like to use column G, so leave column F empty. Add the formula below into the first cell in column G. This is going to create a list of `burgMapLink`s that should automatically download a PNG export of that city map when you load the URL. We will use this to save the maps for these city `burgMapLink`s in a little bit.

```
=CONCATENATE( C1, "&export=png")
```

19. Lastly, we need to export some of this data so we can automate the process of getting the files. 
	1. From `FMG Villages`, select all the cells with URLs in column C and save them to a text file called `_village-urls.txt`. I usually store it in a folder, under the specific campaign called `98-(specific_campaign_name) Assets`.
	2. Repeat this process for the `FMG Cities` and save it as a file called `_city-urls.txt`. Put it in the campaign assets folder.
	3. Copy both of these `.txt` files to the vault folder: `90-Tools & Helpers/_External_Scripts` - there are two AutoHotKey scripts in that folder that will make the process of downloading the maps automated.
	4. We had you name the files above with an underscore `_` because are going to create a couple test files below, with only a few `burgMapLink`s in them to test your setup and make sure it's all working properly before we process the hundreds of URLs we might need to download.
	5. While you're in the export-to-scripts mode, you can also export two additional files that will be of use at the very end of this process. Back in an earlier step, we had you create a `CONCATENATE` formula in column E. From each sheet, select all the cells in column E and save them to separate `.bat` files. Save them into `98-(specific_campaign_name) Assets`. We will come back to them later.
20. Once you have everything copied to `90-Tools & Helpers/_External_Scripts`, we are ready to use the AutoHotKey scripts to download these Burg maps.
21. Open your text editor and open one of the `txt` files you created above - `_village-urls.txt` or `_city-urls.txt`.
22. Select the first 3-5 lines of the file you opened and copy to clipboard.
23. Create a new text file and paste those few `burgMapLink`s into the new file.
24. Save that new file to the corresponding name, only this time leave out the underscore at the front. New names will be `village-urls.txt` or `city-urls.txt`.
25. Repeat the previous four steps with whichever file you didn't start with.
26. You should now have four files in `90-Tools & Helpers/_External_Scripts` (there may be others, but these are the ones we should now have created):
   
```
_village-urls.txt
_city-urls.txt
village-urls.txt
city-urls.txt
```

26. If you have AutoHotKey installed and ready to use, you should be able to now just launch either one of these two scripts and it will begin the automated download process:

```
FMG-cities-map-downloader.ahk
FMG-villages-map-downloader.ahk
```

27. Before you run either script, let's go through what each script does. Here is what the `FMG-villages-map-downloader.ahk` script will do:
    1. When the "Process URLs" button is clicked, the script reads URLs from a file named `village-urls.txt`, where each line contains a URL for the Watabou Village Generator.
    2. It opens each URL in a new Chrome window, waits for the page to load, and then saves the village map as a PNG file using simulated mouse movements and clicks.
    3. The script closes each tab after processing the URL and repeats the process for all URLs in the file.
    4. Once all URLs are processed, a message box will pop up to tell you that the script has finished.
28. And here is what the `FMG-cities-map-downloader.ahk` script will do:
	1. When the "Process URLs" button is clicked, the script reads URLs from a file named `city-urls.txt`, where each line contains a URL for the Watabou City Generator.
	2. It opens each URL in a new Chrome window, waits for the page to load, and then closes the tab. Unlike the village script, this script does not save images but simply processes the URLs, however because we tacked `&export=png` onto the tail of each `burgMapLink`, simply opening the URL will export the corresponding map file.
	3. The script closes each tab after processing the URL and repeats the process for all URLs in the file.
	4. Once all URLs are processed, a message box will pop up to tell you that the script has finished.
29. Also, because each of the full lists of `burgMapLink`s from a FMG map could be hundreds of files, we want to test things and make sure they are working with your system first before we set it loose on the whole list. That's why we made those underscore named version of the full list and those shorter versions which the scripts can process, as a test run, first to make sure it's working.
30. Open both of the AHK scripts in your text editor and take a look at the sections that are commented with the phrase "; OPTION TO CONFIGURE" first. Make adjustments, where needed, to suit your system's setup. There are about 5 places in each script that you may need to customize.

> [!NOTE]- Tips for getting the AHK scripts working on your system
> Getting the AHK scripts working on your system requires a little bit of trial and error. Here are a few tips that should help you figure out what you need to adjust on your end to get it working:
> 
> 	1. Do open the scripts and have a look at what its doing and those OPTION TO CONFIGURE places.
> 	2. When you run the script for the first time, make sure you followed the steps to create those shorter test versions of the URL files at first. It will make your life a lot easier if you don't have to figure out how to crash out of the script if it goes awry.
> 	3. After the first URL is processed, you will see a dialog box pop up where you can double check if things are working properly. You only have 8 seconds to make a choice before it will timeout and begin to process the next URL. If you want to force it to process the next URL and display this message again, press 'Try Again'. If you need to make changes or something is wrong, click 'Cancel' to stop the script and exit. Click 'Continue' to continue processing the rest of the URLs and hide the message until script completes. It will display again, the next time you run the script anew. Think of it as a little extra precaution.

31. Once you're satisfied that the scripts should work with your system, you can run one of the two scripts. Just from Windows Explorer, just double-click either `FMG-cities-map-downloader.ahk` or `FMG-villages-map-downloader.ahk`. The script will launch and process the smaller `burgMapLink` links we put into the `city-urls.txt` and `village-urls.txt` files.
32. After you verify that those shorter testing versions of the 2 `.txt` files have everything working as it should, you rename them to something like `test-city-urls.txt` and `test-village-urls.txt` and then remove the underscore from the full list files to prepare to download all the maps for the burgs in your FMG world.
33. Launch one of the two scripts and let it cook.
34. Once you launch the first script, you will need to let it do its work. Sadly, you cannot do anything else on your system while it is grabbing the map files. The AHK scripts need to control the mouse and keyboard. You can't do other stuff while it's working because the active window control has to stay under AHK's control. There are some commands within the scripts to block user input while running, but you should just run the script and let it do its work while you do something else. NOTE - as long as you don't have some other window come to the foreground and take focus, you can probably leave a streaming window open as it works, but I haven't tested that, so YMMV.
35. As the message informs you after each script completes its run, the files you have downloaded will be stored where ever your browser stores its downloads. IMPORTANT - Once you have run one of the scripts, wrangle all those files into a folder and move it to your vault - `01-Campaigns/(specific_campaign_name)/98-(specific_campaign_name) Assets` would be a good place. If you get them mixed up, it can be a giant pain to get them split back out to their proper groups again. For the cities files, name your subfolder something like `FMG-cities-PNG` and for the villages, use `FMG-villages-PNG`
36. Once you have copied over both sets of `burgMapLink` files, saved into separate subfolders, you are ready to run those `.bat` files we created way back when we were getting stuff out of the spreadsheet. They should be sitting in the root of `01-Campaigns/(specific_campaign_name)/98-(specific_campaign_name) Assets`. Move each `.bat` file into the corresponding subfolder and go ahead and run each of them from within those folders. The `.bat` file will rename all of those map files with the `id` and `name` that corresponds with each burg in your world.
37. After you've renamed the burg maps, you may see that some of the rename commands returned an error or that you may still have a few files that didn't get renamed. These are, most likely, duplicate burg names. When they were downloaded in the AHK scripts, the browser would have just tacked a `(1)` ,and so on, to the end of each duped name (after the first one downloaded). You should be able to look back at your spreadsheet to determine what the file is expected to be named. You'll want to rename it with its `id`, a hyphen, and then its name.
38. Finally, you can open your campaign's Burg pages and these maps should appear in the top expandable callout - `Burg Map (Interactive)`.