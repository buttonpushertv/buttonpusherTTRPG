---
tags:
- JSON
- Guide
- Importing
---

# Cool emblems. I want them.

One the coolest things about FMG, IMHO, are the Emblems. Having them available to stick in your notes, gives your notes much more polish.

In this note, we will go through the steps you can take to save all the emblems locally. And then we will rename them so that the links to them that get inserted during the import notes creation will then link up to them correctly.

Yes, the data does exist within the JSON file to create the the emblems as SVG files directly, but that's a much harder task to do when importing from the JSON. Storing them as images locally means you can make use of them in a variety of places to share with your players.

## Wrangling the FMG Emblems

Steps undertaken to wrangle the FMG emblems connected to each State, Province, and Burgs: 

1. In Azgaar's FMG, under `Tools`, open the `Emblems` dialog.
2. Along the bottom there is an icon that looks like 3 stacked squares, that will download an HTML file that contains all the Emblems as SVG data.
3. In Chrome, install and enable the [SVG Export](https://chromewebstore.google.com/detail/svg-export/naeaaedieihlkmdajjefioajbbdbdjgp?hl=en-US&utm_source=ext_sidebar) plugin - this will allow you to save all the Emblems in the above HTML file as stand-alone SVGs, JPGs, or PNGs. (FWIW, SVG-grabber & SVG-Gobble do not work or at least don't do what SVG Export does - allows export of the merged SVG in one file).
4. Open the HTML file and export all Emblems to PNG (that is how the templates are setup to create the image links to those files.)
5. SVG Export will download a Zip file of all the emblems.
6. Expand the Zip of the Emblems to `01-Campaigns/98-(specific_campaign_name) Assets/FMG-emblems-PNG`.
7. The downloaded Emblems will be named ` svgexport-1`, `svgexport-2` and so on. We will rename them, after we extract the needed info in the next few steps.
8. Since the Emblems are exported in the order they appear in the file, we can extract the names that correspond to the Emblems from the HTML file. Using the python script below, you can scrape all the `<figcaption>` tags from the HTML doc and that will give you a CSV of just those tags.

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

9. Once you have created that script, run it in your Python environment and export the output to a file you can find. (i.e.- in Windows WSL, run the script with `python3 your_script.py>output_file.txt` to pipe the output to a file). The output will be a comma-separated list of all the `<figcaption>` tags which will contain the names of all the elements *(the names that appear above each emblem in the HTML file)*
10. Next, you'll want to rename the `svgexport` files so that they fully sort properly based on their name and numbering. In Windows, because the digits aren't padded, they don't sort correctly. Using the following PowerShell script, you can rename the files so that the digits are padded out to 3 characters (adding zeroes to 1- and 2-digit numbers):

> ```
> # Get the list of files
> $files = Get-ChildItem -Path "path_to_directory" -Filter "svgexport-*.svg" -Force
> 
> # Output the directory path for debugging
> Write-Host "Checking directory: .\emblems_export"
> 
> # Check if any files are found
> if ($files.Count -eq 0) {
>     Write-Host "No files found matching the pattern."
> } else {
>     Write-Host "Files found: $($files.Count)"
> }
> 
> # Loop through each file
> foreach ($file in $files) {
>     # Get the current file name and extract the number
>     $fileName = $file.Name
>     $number = $fileName -replace 'svgexport-(\d+).svg', '$1'
> 
>     # Pad the number with leading zeroes
>     $paddedNumber = $number.PadLeft(3, '0')
> 
>     # Construct the new file name
>     $newFileName = "svgexport-$paddedNumber.svg"
> 
>     # Output the old and new file names for debugging
>     Write-Host "Renaming $fileName to $newFileName"
> 
>     # Rename the file
>     Rename-Item -Path $file.FullName -NewName $newFileName
> }

11. Replace `"path_to_directory"` with the actual path to the directory containing your files. This script will rename the files according to your specifications: single-digit numbers will have two leading zeroes added, and double-digit numbers will have one leading zero added, resulting in all files having three digits in the filename tail. Save the file to the folder where the images are and give a `.ps1` extension. Run it by using `.\your_script.ps1` and rename the files.
12. Now that you have a document with the `figcaption` values and have renamed the Emblem image files, you are ready to create yet another script to rename the files so that they match up. Due to things being saved in the order they appear in that HTML document, this renaming should be trivial.
13. Obtain a listing of the `svgexport` image files as a text file. I use [Freecommander](https://freecommander.com/en/summary/) and you can get this by simply selecting all the files in the folder and pressing `alt-c` to copy all the file names to the clipboard.
14. Paste the file listing into the first column of a spreadsheet (Google Sheets works fine).
15. Open the `output_file.txt` you created back in step 9 in a text editor. Do a search & replace to remove the `<figcaption>` & `</figcaption>` tag codes. And then do a replace on the pattern `, ` (note the space after the comma) and convert them to newline codes (using Notepad++ for instance, `Ctrl-H`, enable the *Extended* Search Mode option, find `, ` (comma space pattern) and replace with `\n`). NOTE: There will also be an open square bracket as the first character, and a close square bracket as the very last character - remove those as well. 
16. Once you have done step 12, you should now have a listing of the State, Provinces, and Burgs from FMG with one item per line.
17. Paste that name data into the same spreadsheet from step 11, in the second column.
18. In the spreadsheet, create a `CONCATENATE` function in the first cell of the 3rd column. Look at the code below to copy what you need. Here's an explanation of what it should contain: The `CHAR(34)` code will insert double quote marks to wrap the filename that will have spaces. The `campaign_name OR world_name` portion can be whatever you want to use. If you've followed importing steps at the top of this document, the templates are setup to use the `campaignShortCode` you entered when you created a new campaign. The frontmatter field called `emblem` within States, Provinces, and Burgs should pre-populate with an item that is formatted like this: `campaignShortCode-world_name Emblem location_name.png` - where `location_name` will be whatever you're locations are named and `world_name` is the name of the FMG world taken from the JSON element at `info.mapName`. 

```
=CONCATENATE("rename ", CHAR(34), A1, CHAR(34)," ", CHAR(34),"cheia Emblem ", B1, ".png", CHAR(34))
```

8. Once you have the `CONCATENATE` formula creating the new combined fields correctly, fill every cell in that third column with the formula (click to select the first cell in the column, then scroll to the very end of your list and shift-click, then press Ctrl-D(Cmd-D on Mac) to create all the commands. (Google Sheets may even ask you to auto-populate the column). Once you have them all, select that column and copy it to the clipboard.
9. Navigate to the folder where you've saved the FMG Emblems, and open a command line window.
10. Create a new `.bat` file, call it `emblem-rename.bat` and open it for editing and paste the `CONCATENATE` column results into the file and save it.
11. Running that `.bat` file now will rename all your FMG Emblem files so that they should match the emblem with the State/Province/Burg it goes with. (OPTIONAL - you could add `state`, `province`, and `burg` to the respective file names. )
12. Dealing with duplicated names - If you had any dupe files with suffix added, the files that would have been renamed to an existing duplicate name are still named `svgexport-???.png` - use the id numbers to find what they should be named - rename to create a unique filname. You could add  `-stateName` to any of the dupes. You will need to correct these manually after import.
13. (OPTIONAL - converting PNG images of Burg maps to WEBP with ImageMagick - steps to come)