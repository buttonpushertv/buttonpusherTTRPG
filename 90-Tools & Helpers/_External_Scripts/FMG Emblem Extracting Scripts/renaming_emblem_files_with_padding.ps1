# Get the list of files
$files = Get-ChildItem -Path "path_to_directory" -Filter "svgexport-*.png"

# Loop through each file
foreach ($file in $files) {
	# Get the current file name and extract the number
	$fileName = $file.Name
	$number = $fileName -replace 'svgexport-(\d+).png', '$1'

	# Pad the number with leading zeroes
	$paddedNumber = $number.PadLeft(3, '0')

	# Construct the new file name
	$newFileName = "svgexport-$paddedNumber.png"

	# Rename the file
	Rename-Item -Path $file.FullName -NewName $newFileName
}