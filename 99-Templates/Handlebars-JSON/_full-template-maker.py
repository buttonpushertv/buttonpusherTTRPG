# This script concatenates multiple Handlebars JSON template files into a single master template file.
# Each section is wrapped in a conditional block based on the topField value.
# The output file is named "_FMG-JSON-Handlebars-MASTER-Template.md".
# The output file is overwritten if it already exists.

# Author: Ben Howard
# Date: 2024-06-26
# Version: 2.0

import os

output = "_FMG-JSON-Handlebars-MASTER-Template.md"

# Remove previous output file if it exists
if os.path.exists(output):
    print("Deleting previous output file...")
    os.remove(output)

print("Starting concatenation of Handlebars JSON templates...")

# Define the sections and their corresponding files
sections = [
    ("", "Atlas-FMG-JSON Handlebars Template.md"),
    ("pack.states", "States-FMG-JSON Handlebars Template.md"),
    ("pack.provinces", "Provinces-FMG-JSON Handlebars Template.md"),
    ("pack.burgs", "Burgs-FMG-JSON Handlebars Template.md"),
    ("pack.cultures", "Cultures-FMG-JSON Handlebars Template.md"),
    ("pack.religions", "Religions-FMG-JSON Handlebars Template.md"),
]

# Open the output file in append mode
with open(output, 'a') as outfile:
    for top_field, filename in sections:
        # Write the opening if statement and append the content of the current file
        with open(filename, 'r') as infile:
            content = infile.read().strip()  # Strip any leading/trailing whitespace
            outfile.write(f'{{{{#if (eq @importSettings.topField "{top_field}")}}}}{content}{{{{/if}}}}')

print(f"Files have been concatenated into {output}")