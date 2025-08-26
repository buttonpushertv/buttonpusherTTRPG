import json

# New JSON object to be added
new_data = {
    "import-info":{
    "thisCampaign": "Test Campaign Ladonia",
    "thisCampaignPath": "01-Campaigns/Test Campaign Ladonia",
    "thisCampaignShortCode": "TCL",
    "mapDroboxFMGLink": "https://azgaar.github.io/Fantasy-Map-Generator/?maplink=https://dl.dropboxusercontent.com/scl/fi/s1ildj50q943p20hgqsvz/Ladonia-2024-04-13-18-07.map?rlkey=tt7j7x4gqbhxu043p5q2f2ucx&dl=0"
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
input_file_path = 'Ladonia Full 2024-03-31-10-23.json'

# Path to the new JSON file where the merged data will be saved
# UPDATE THIS INFO
# append '-MODDED' or '-forIMPORT' to file name
# must end with `.json` extension.
# KEEP the single quotes around this file name
output_file_path = 'Ladonia Full 2024-03-31-10-23.json-MODDED.json'

# Read the existing JSON file with UTF-8 encoding
with open(input_file_path, 'r', encoding='utf-8') as file:
    existing_data = json.load(file)

# Merge the new data into the existing data
merged_data = {**new_data, **existing_data}

# Write the merged data to the new JSON file with UTF-8 encoding
with open(output_file_path, 'w', encoding='utf-8') as file:
    json.dump(merged_data, file, indent=4)

print("Merged JSON data saved to a new file successfully.") 