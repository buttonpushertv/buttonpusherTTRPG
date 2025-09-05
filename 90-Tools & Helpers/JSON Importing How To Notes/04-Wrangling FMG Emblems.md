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
10. Next, you'll want to rename the `svgexport` files so that they fully sort properly based on their name and numbering. When you save the files from the above export, the digits aren't padded and they don't sort correctly. Using the following Python script, you can rename the files so that the digits are padded out to 3 characters (adding zeroes to 1- and 2-digit numbers). This script will rename files that are sitting in the same directory as the script when run:

> ```
> import os
> import re
> 
> # Get the current working directory
> directory_path = os.getcwd()
> 
> # Get the list of files in the current directory
> files = [f for f in os.listdir(directory_path) if re.match(r'svgexport-\d+\.svg', f)]
> 
> # Output the directory path for debugging
> print(f"Checking directory: {directory_path}")
> 
> # Check if any files are found
> if not files:
>     print("No files found matching the pattern.")
> else:
>     print(f"Files found: {len(files)}")
> 
> # Loop through each file
> for file_name in files:
>     # Extract the number from the file name
>     match = re.search(r'svgexport-(\d+)\.svg', file_name)
>     if match:
>         number = match.group(1)
> 
>         # Pad the number with leading zeroes
>         padded_number = number.zfill(3)
> 
>         # Construct the new file name
>         new_file_name = f"svgexport-{padded_number}.svg"
> 
>         # Output the old and new file names for debugging
>         print(f"Renaming {file_name} to {new_file_name}")
> 
>         # Rename the file
>         old_file_path = os.path.join(directory_path, file_name)
>         new_file_path = os.path.join(directory_path, new_file_name)
>         os.rename(old_file_path, new_file_path)
>    ```

11. Save the file to the folder where the images are and give it a `.py` extension. Run it by using `python3 .\your_script.py`, while sitting in the folder where they are saved and rename the files.
12. Now that you have a document with the `figcaption` values and have renamed the Emblem image files, you are ready to create yet another script to rename the files so that they match up. Due to things being saved in the order they appear in that HTML document, this renaming should be trivial.
13. Obtain a listing of the `svgexport` image files as a text file. From the Commandline in Windows, you can get this by entering:

 ```
 dir /b /a-d > emblem_filenames.txt
 ```
 
 Or, if you're on a Mac, enter this in Terminal:

 ```
 ls -1F > emblem_filenames.txt
 ```

14. We are going to assemble our various files into a commandline entry for each location with an emblem. Create a new spreadsheet in your favorite spreadsheet program. (Google Sheets works fine - you may need to tweak the formulas below if you are using another app).
15. In cell A1, enter `mapName`
16. In cell B2, enter the `{FMGmapName}` for your map. The `{FMGmapName}` portion can be whatever you want to use. When using the imported FMG notes, the frontmatter field called `emblem` within States, Provinces, and Burgs should pre-populate with an item that is formatted like this: `{FMGmapName} Emblem location_name.png` - where `location_name` will be whatever your locations are named and `{FMGmapName}` is the name of the FMG world taken from the JSON element at `info.mapName`. It's also the name of the folder that got created under `01-Campaigns/05-Atlas` on import.
17. Starting at cell A2, paste the file listing into the first column of a spreadsheet.
18. Open the `output_file.txt` you created back in step 9 in a text editor. Do a search & replace to remove the `<figcaption>` & `</figcaption>` tag codes. And then do a replace on the pattern `, ` (note the space after the comma) and convert them to newline codes (using Notepad++ for instance, `Ctrl-H`, enable the *Extended* Search Mode option, find `, ` (comma space pattern) and replace with `\n`). NOTE: There will also be an open square bracket as the first character, and a close square bracket as the very last character - remove those as well. 
19. Once you have done step 18, you should now have a listing of the State, Provinces, and Burgs from FMG with one item per line. These names should also be in an order that matches the order of the `svgexport` filenames.
20. Paste that name data into the same spreadsheet from step 4, in the second column, starting at cell B2.
21. Let's create one last column where we will format the name for each of the new files. In the third column, enter this formula into cell C2 & then fill it down to the end of your list of location - one for each file/location:

```
=CONCATENATE($B$1, " Emblem ", B2, ".png",)
```

22. We can also do a check to see if there are any files that may end up with the same name.
	1. Select all the values in column C - the to-be-renamed filenames.
	2. Open the `Conditional Formatting` pane and click `+ Add another rule`.
	3. Make sure `Apply to range` covers the full range of values in column D.
	4. Under `Format rules`, where it says `Format cells if...`, choose ` Custom formula is` from that pull down menu.
	5. Enter this formula: 
	```
	=COUNTIF(C:C,C2)>1
	```
	6. Change the `Formatting style` to something you'll be able to catch - I like a red color.
	7. Click `Done` to save that rule.
	8. Any cells that now have a duplicate name will be colored to the color you chose in step 6.
	9. You could certainly, pre-emptively, "fix" those issues by manually editing the names with issues.
	10. What I like to do is copy the full "rename" command from column E for the problem name.
	11. Then, over in Column F (just as a safety), I paste the "values" only. In Google Sheets, you can press `Crtl-Shift-V` to do that, or right-click and choose `Paste Special>Values only`.
	12. Now, you can edit the command manually to correct the issues.
	13. Once corrected, you can drag that new value over to the same row of column C and replace the name with your new one.
	14. You *will* need to edit the notes that point to ay of the files where you've changed the names so that they point to the correct files.
23. Starting at cell D2, create a `CONCATENATE` function. Look at the code below to copy what you need. Here's an explanation of what it should contain: The `CHAR(34)` code will insert double quote marks to wrap the filename that will have spaces. 

For Windows, use this:
```
=CONCATENATE("rename ", CHAR(34), A2, CHAR(34)," ", CHAR(34), C2, CHAR(34))
```

On a Mac, use this:
```
=CONCATENATE("mv ", CHAR(34), A2, CHAR(34)," ", CHAR(34), C2, CHAR(34))
```

24. Once you have the `CONCATENATE` formula creating the new combined fields correctly, fill them down to the end of your list. 
25. Once you have them all created, select that column and copy it to the clipboard.
26. Navigate to the folder where you've saved the FMG Emblems, and open a command line window.
27. If you're on Windows, create a new `.bat` file, call it `emblem-rename.bat` and open it for editing and paste the `CONCATENATE` column results into the file and save it - use the first example above.
28. If you're on a Mac, create a new `.sh` file, call it `emblem-rename.sh` and open it for editing and paste the `CONCATENATE` column results into the file and save it - use the second example above. You will need to change the permissions on the script so that it can be run. In the Terminal, enter `chmod +x emblem-rename.sh` for that file and it should now be able to run.
29. Running that script file now will rename all your FMG Emblem files so that they should match the emblem with the State/Province/Burg it goes with. Again, since the files were exported in order, they should all line up.

> [!INFO] Converting to WEBP
> You could certainly convert all the files to WEBP from PNG. That would save space. See [[06-Converting Images to WEBP Format]] for more info.
> 
> You will need to change the `.png` to `.webp` in all the notes where the Emblems are referenced. It may be easier to just make a change in the Handlebar Templates and redo the import, if you opt to go that route.
