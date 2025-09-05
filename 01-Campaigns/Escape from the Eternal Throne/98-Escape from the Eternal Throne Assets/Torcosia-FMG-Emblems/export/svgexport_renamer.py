import os
import re

# Get the current working directory
directory_path = os.getcwd()

# Get the list of files in the current directory
files = [f for f in os.listdir(directory_path) if re.match(r'svgexport-\d+\.png', f)]

# Output the directory path for debugging
print(f"Checking directory: {directory_path}")

# Check if any files are found
if not files:
    print("No files found matching the pattern.")
else:
    print(f"Files found: {len(files)}")

# Loop through each file
for file_name in files:
    # Extract the number from the file name
    match = re.search(r'svgexport-(\d+)\.png', file_name)
    if match:
        number = match.group(1)

        # Pad the number with leading zeroes
        padded_number = number.zfill(3)

        # Construct the new file name
        new_file_name = f"svgexport-{padded_number}.png"

        # Output the old and new file names for debugging
        print(f"Renaming {file_name} to {new_file_name}")

        # Rename the file
        old_file_path = os.path.join(directory_path, file_name)
        new_file_path = os.path.join(directory_path, new_file_name)
        os.rename(old_file_path, new_file_path)
