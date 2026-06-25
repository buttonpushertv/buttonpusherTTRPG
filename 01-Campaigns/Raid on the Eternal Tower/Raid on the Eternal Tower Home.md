---
campaignName: Raid on the Eternal Tower
campaignPath: 01-Campaigns/Raid on the Eternal Tower
campaignShortCode: roet
campaignHomeNote: Raid on the Eternal Tower Home
campaignSimpleAtlas: Raid on the Eternal Tower-Simple Atlas
campaignCalendar: Raid on the Eternal Tower-Calendar
campaignStatus: 
campaignSystem:
pageType: campaign-home
tags:
- campaign-home
- roet
---

> [!metadata|metadata]- Metadata 
>> [!metadata|metadataoption]+ System
>> #### System
>>  |
>> ---|---|
> **Tags** | `INPUT[Tags][inlineListSuggester:tags]` |
> **Game System**|`INPUT[textArea:campaignSystem]`
>
>> [!metadata|metadataoption]- Art
>> #### Art
>>  |
>> ---|---|
>> **Art** | `INPUT[imageSuggester(optionQuery("")):campaignArt]` |
>
>> [!metadata|metadataoption]+ Info
>> #### Info
>>  |
>> ---|---|
>> **Aliases** | `INPUT[list:aliases]` |
>> **Quick Notes** |  `INPUT[textArea:quicknote]`
>> **Status** | `INPUT[Status][:campaignStatus]` |



[[Campaign Index]]

# The World of Raid on the Eternal Tower

[[Raid on the Eternal Tower-Simple Atlas]]

```dataview
TABLE WITHOUT ID file.link as "Linked Atlases"
FROM #linked-atlas and "01-Campaigns/Raid on the Eternal Tower/05-Atlas"
SORT file.name ASC
```

## Player Characters

(PC info will go here)

---

## Sessions

%% This Session Hub file is part of a future idea. I hope to have the ability to create a session note for the 'next session'. And also have a button that will then pull up all the dates of the subsequent sessions along with their comments. Only partly implemented thus far. %%
![[Raid on the Eternal Tower Session Hub]]

(Session info will go here)

---
## Story Arcs

(Story Arc info will go here)

---

## Truths about the campaign/world

*Write down some facts about this campaign or the world that the characters find themselves in.*

## Custom rules

(Custom Rules info will go here)

> [!NOTE]- Fantasy Map Generator Helper Script
> The text below is a campaign-specific Python script that you will need to use to modify the FMG JSON file so that you can use it with the importing of the data from an FMG map.
>
> The pieces you will need to update are:
> 1. The `mapDropboxFMGLink` value. Replace `{FMGDropboxLink}` with the link to your map once you've saved it to your Dropbox account.
> 2. The value for `path_to_your_existing_FMGjson_file.json`. Put the name for your map's JSON file here.
> 3. THe value for `path_to_your_output_FMGjson_file.json`. Replace this value with a name for the new JSON file. I recommend tacking "-MODDED" onto the end of the filename, so you can keept track of where it came from and which one is the modded one.
>
> When you are ready, copy this text block and save it as a Python script to the folder where you've stored the FMG JSON file from your map. We will run that script to add this info to the top of your JSON file before import.
>
> ```
> import json
> 
> # New JSON object to be added
> new_data = {
>     "importInfo":{
>     "thisCampaign": "Raid on the Eternal Tower",
>     "thisCampaignPath": "01-Campaigns/Raid on the Eternal Tower",
>     "thisCampaignShortCode": "roet",
>     "mapDropboxFMGLink": "{FMGDropboxLink}"
>     }
> }
> # Some of the values above may already have the correct info for this campaign: Raid on the Eternal Tower
> # If you need to make manual edits:
> # ONLY change the value of the lines *after* `"importInfo":{`
> # You will be making edits on lines 6 to 9 *ONLY*.
> # CAREFULLY edit data values, within the quote marks on the right side of each line.
> # Do not leave any curly braces within those values behind.
> # Do not change the formatting of any of the lines.
> 
> # Path to the existing JSON file
> # UPDATE THIS INFO
> # must end with `.json` extension.
> # KEEP the single quotes around this file name
> input_file_path = 'path_to_your_existing_FMGjson_file.json'
> 
> # Path to the new JSON file where the merged data will be saved
> # UPDATE THIS INFO
> # append '-MODDED' or '-forIMPORT' to file name
> # must end with `.json` extension.
> # KEEP the single quotes around this file name
> output_file_path = 'path_to_your_output_FMGjson_file.json'
> 
> # Read the existing JSON file with UTF-8 encoding
> with open(input_file_path, 'r', encoding='utf-8') as file:
>     existing_data = json.load(file)
> 
> # Merge the new data into the existing data
> merged_data = {**new_data, **existing_data}
> 
> # Write the merged data to the new JSON file with UTF-8 encoding
> with open(output_file_path, 'w', encoding='utf-8') as file:
>     json.dump(merged_data, file, indent=4)
> 
> print("Merged JSON data saved to a new file successfully.") 