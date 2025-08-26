@echo off
setlocal
set output="_FMG-JSON-Handlebars-MASTER-Template.md"

:: Remove previous output file if it exists
if exist %output% (
    echo Deleting previous output file...
    del %output%
)

echo Starting concatenation of Handlebars JSON templates...

:: This line starts the Atlas section. Append that to the output file.
echo {{#if (eq @importSettings.topField "")}} >> %output%
:: Append the content of Atlas to the output file
type "Atlas-FMG-JSON Handlebars Template.md" >> %output%
:: Close the if statement & append to the output file
echo {{/if}} >> %output%
:: This line starts the States section. Append that to the output file.
echo {{#if (eq @importSettings.topField "pack.states")}} >> %output%
:: Apend the content of States to the output file.
type "States-FMG-JSON Handlebars Template.md" >> %output%
:: Close the if statement & append to the output file
echo {{/if}} >> %output%
:: This line starts the Provinces section. Append that to the output file
echo {{#if (eq @importSettings.topField "pack.provinces")}} >> %output%
:: Append the content of Provinces to the output file
type "Provinces-FMG-JSON Handlebars Template.md" >> %output%
:: Close the if statement & append to the output file
echo {{/if}} >> %output%
:: This line starts the Burgs section. Append that to the output file
echo {{#if (eq @importSettings.topField "pack.burgs")}} >> %output%
:: Append the content of Provinces to the output file
type "Burgs-FMG-JSON Handlebars Template.md" >> %output%
:: Close the if statement & append to the output file
echo {{/if}} >> %output%
:: This line starts the Cultures section. Append that to the output file
echo {{#if (eq @importSettings.topField "pack.cultures")}} >> %output%
:: Append the content of Provinces to the output file
type "Cultures-FMG-JSON Handlebars Template.md" >> %output%
:: Close the if statement & append to the output file
echo {{/if}} >> %output%
:: This line starts the Religions section. Append that to the output file
echo {{#if (eq @importSettings.topField "pack.religions")}} >> %output%
:: Append the content of Provinces to the output file
type "Religions-FMG-JSON Handlebars Template.md" >> %output%
:: Close the if statement & append to the output file
echo {{/if}} >> %output%

echo Files have been concatenated into %output%

pause 
endlocal