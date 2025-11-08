{{#if (eq @importSettings.topField "")}}---
aliases:
campaign: {{@importDataRoot.importInfo.thisCampaign}}
created: {{getDateTimestamp @importSettings}}
cssclasses: sixty-pct-width
mapName: {{@importDataRoot.info.mapName}}
tags:
- linked-atlas
- {{@importDataRoot.importInfo.thisCampaignShortCode}}
- {{@importDataRoot.info.mapName}}
templateVersion: 5.1
WBProcess: FALSE
---

# `=this.campaign` Linked Atlas
[[{{@importDataRoot.importInfo.thisCampaignPath}}/{{@importDataRoot.importInfo.thisCampaign}} Home|{{@importDataRoot.importInfo.thisCampaign}} Home]] | [[{{@importDataRoot.importInfo.thisCampaign}}-Simple Atlas]]

**(Edit this page in source mode to see comments about some manual edits that you may need to perform after the import is completed.)**

 %% Feel free to delete or comment the line above if you wish. See comments below for editing instructions. Use `find` to search for double percentage characters to find each of the comment sections. %%

%% This Leaflet map block is created out of the elements added to the JSON file before import %%

> [!metadata|map]+ {{name}} Map
> ```leaflet
> id: State-{{name}}
> image: [[{{@importDataRoot.info.mapName}} World Map.svg]]
> bounds:
> - [0,0]
> - [{{@importDataRoot.info.height}},{{@importDataRoot.info.width}}]
> coordinates: [{{divide @importDataRoot.info.height 2}},{{divide @importDataRoot.info.width 2}}]
> height: 600px
> width: 100%
> minZoom: -3
> maxZoom: 5
> defaultZoom: -0.75
> zoomDelta: 0.25
> unit: {{@importDataRoot.settings.distanceUnit}}
> scale: {{@importDataRoot.settings.distanceScale}}
> darkMode: false
> ```
> [Link to {{name}} on FMG Map]({{@importDataRoot.importInfo.mapDropboxFMGLink}})

%% If you created a Dropbox Link to your FMG map, you can save that into the Modded JSON file and it will appear in the link above. %%


> [!callout]- **States**
> 
> %% The "Neutral" item doesn't have a Capital because it is an unorganized territory. If there is a significant Burg or location in the Neutral territory, you can link to its note where the empty square brackets are.%%
>
> | ID | State | Capital |
> | -- | ----- | ------- |
{{#each pack.states}}
> | {{i}} | [[{{../importInfo.thisCampaignPath}}/05-Atlas/{{../info.mapName}}/States/{{name}}/{{name}}\|{{name}}]] | [[{{getBurgName capital ../pack.burgs}}\|{{getBurgName capital ../pack.burgs}}]] |
{{/each}}


> [!callout]- **Provinces**
> 
>%% The Neutral peoples of this map have no State, hence the empty field. Also, any Capital fields that contain `[[]]` mean that that province does not have a Provincial Capital.%%
>
>| ID  | Province | Capital | State |
>| --- | -------- | --------- | ----- |
{{#each pack.provinces}}
>| {{i}} | [[{{../importInfo.thisCampaignPath}}/05-Atlas/{{../info.mapName}}/States/{{getStateName state ../pack.states}}/Provinces/{{fullName}}/{{fullName}}\|{{fullName}}]] | [[{{../importInfo.thisCampaignPath}}/05-Atlas/{{../info.mapName}}/States/{{getStateName state ../pack.states}}/Provinces/{{fullName}}/Burgs/{{getBurgName burg ../pack.burgs}}\|{{getBurgName burg ../pack.burgs}}]] | [[{{../importInfo.thisCampaignPath}}/05-Atlas/{{../info.mapName}}/States/{{getStateName state ../pack/states}}/{{getStateName state ../pack.states}}\|{{getStateName state ../pack.states}}]] |
{{/each}}

> [!callout]- **Burgs**
> 
> | ID  | Name | Population | State | Province |
> | --- | ---- | ---------- | ----- | -------- |
{{#each pack.burgs}}
> | {{i}} | [[{{../importInfo.thisCampaignPath}}/05-Atlas/{{../info.mapName}}/States/{{getStateName state ../pack/states}}/Provinces/{{burgProvinceNameLookup cell ../pack.cells ../pack.provinces}}/Burgs/{{name}}\|{{name}}]] | {{calcPopulation population ../settings.populationRate}} | [[{{../importInfo.thisCampaignPath}}/05-Atlas/{{../info.mapName}}/States/{{getStateName state ../pack/states}}/{{getStateName state ../pack.states}}\|{{getStateName state ../pack.states}}]] | [[{{../importInfo.thisCampaignPath}}/05-Atlas/{{../info.mapName}}/States/{{getStateName state ../pack/states}}/Provinces/{{burgProvinceNameLookup cell ../pack.cells ../pack.provinces}}/{{burgProvinceNameLookup cell ../pack.cells ../pack.provinces}}\|{{burgProvinceNameLookup cell ../pack.cells ../pack.provinces}}]] |
{{/each}}


> [!callout]- **Diplomacy**
> 
> %% The entries on the first line of this table are items related to the wars stories of this map. You can extract them and refactor those cells to access those element in a more useful way. Eventually, we'd like to figure out how those elements are used and refactor it in a similar fashion to how it use in a FMG map. %%
> 
> | STATES {{#each pack.states}}| {{name}} {{/each}}|
> | - | - {{#each pack.states}}| - {{/each}}|
{{#each pack.states}}
> | {{name}} {{#each diplomacy}}| {{this}} {{/each}}|
{{/each}}


> [!callout]- **Cultures**
> 
> %% The Wildlands have no culture because they are not organized into any kind of substantial societal structure. Feel free to construct sub-groups or animal societies on the Wildlands note to flesh out the non-traditional societal aspects of this map. %%
>
> | ID  | Name | Code | Type |
> | --- | ---- | -----| ---- |
{{#each pack.cultures}}
>| {{i}} | [[{{../importInfo.thisCampaignPath}}/05-Atlas/{{../info.mapName}}/Cultures/{{name}}\|{{name}}]] | {{code}} | {{type}} |
{{/each}}


> [!callout]- **Religions**
> 
> %% The Wildlands have no organized religion but, again feel free to make note of non-traditional spiritual practices that exist in the lands beyond traditional cultures and societies.
> 
> Also, Religions with "Unknown" Cultures are older religions that may not have many adherents or followers but are the parent religions to others.%%
>
> | ID  | Name | Code | Type | Form | Culture | Deity |
> | --- | ---- | -----| ---- | ---- | ------- | ----- |
{{#each pack.religions}}
> | {{i}} | [[{{../importInfo.thisCampaignPath}}/05-Atlas/{{../info.mapName}}/Religions/{{name}}\|{{name}}]] | {{code}} | {{type}} | {{form}} | [[{{../importInfo.thisCampaignPath}}/05-Atlas/{{../info.mapName}}/Cultures/{{getCultureName i ../pack.cultures}}\|{{getCultureName i ../pack.cultures}}]] | {{deity}} |
{{/each}}

> [!EXAMPLE]- {{@importDataRoot.info.mapName}} Settings
> These are the settings from this FMG map
>
> #### Info Section:
> | Setting | Value |
> | ------- | ----- |
> | Version: | {{@importDataRoot.info.version}} |
> | Description: | {{@importDataRoot.info.description}} |
> | Exported At: | {{@importDataRoot.info.exportedAt}} |
> | Map Name: | {{@importDataRoot.info.mapName}} |
> | Map Width: | {{@importDataRoot.info.width}} |
> | Map Height: | {{@importDataRoot.info.height}} |
> | Map Seed: | {{@importDataRoot.info.seed}} |
> | Map ID: | {{@importDataRoot.info.mapId}} |
>
> #### Settings Section:
> | Setting | Value |
> | ------- | ----- |
> | Distance Unit: | {{@importDataRoot.settings.distanceUnit}} |
> | Distance Scale: | {{@importDataRoot.settings.distanceScale}} |
> | Area Unit: | {{@importDataRoot.settings.areaUnit}} |
> | Height Unit: | {{@importDataRoot.settings.heightUnit}} |
> | Height Exponent: | {{@importDataRoot.settings.heightExponent}} |
> | Temperature Scale: | {{@importDataRoot.settings.temperatureScale}} |
> | Population Rate: | {{@importDataRoot.settings.populationRate}} |
> | Urbanization: | {{@importDataRoot.settings.urbanization}} |
> | Map Size: | {{@importDataRoot.settings.mapSize}} |
> | Latitude: | {{@importDataRoot.settings.latitude}} |
> | Longitude: | {{@importDataRoot.settings.longitude}} |
> | Prec: | {{@importDataRoot.settings.prec}} |
> | Options: | |
> | Pin Notes: | {{@importDataRoot.settings.options.pinNotes}} |
> | Temperature Equator: | {{@importDataRoot.settings.options.temperatureEquator}} |
> | Temperature North Pole: | {{@importDataRoot.settings.options.temperatureNorthPole}} |
> | Temperature South Pole: | {{@importDataRoot.settings.options.temperatureSouthPole}} |
> | State Labels Mode: | {{@importDataRoot.settings.options.stateLabelsMode}} |
> | Show Burg Preview: | {{@importDataRoot.settings.options.showBurgPreview}} |
> | Village Max Population: | {{@importDataRoot.settings.options.villageMaxPopulation}} |
> | Year: | {{@importDataRoot.settings.options.year}} |
> | Era: | {{@importDataRoot.settings.options.era}} |
> | Era Short: | {{@importDataRoot.settings.options.eraShort}} |
> | Map Name: | {{@importDataRoot.settings.mapName}} |
> | Hide Labels: | {{@importDataRoot.settings.hideLabels}} |
> | Style Preset: | {{@importDataRoot.settings.stylePreset}} |
> | Rescale Labels: | {{@importDataRoot.settings.rescaleLabels}} |
> | Urban Density: | {{@importDataRoot.settings.urbanDensity}} |{{/if}}{{#if (eq @importSettings.topField "pack.states")}}---
alert: {{alert}}
aliases: 
- {{name}}
area: {{totalArea area}}
burgs: {{burgs}}
campaign: {{@importDataRoot.importInfo.thisCampaign}}
{{setvar "currentCapitalName" (getBurgName capital @importDataRoot.pack.burgs)}}capitalName: {{"currentCapitalName"}}
{{setvar "capitalPath" (getcapitalFile capital i @importDataRoot)}}capitalFile: {{"capitalPath"}}
center: {{this.center}}
color: {{color}}
created: {{getDateTimestamp @importSettings}}
cssclasses: sixty-pct-width
culture: {{getCultureName culture @importDataRoot.pack.cultures}}
emblem: {{@importDataRoot.info.mapName}} Emblem {{fullName}}.png
expansionism: {{expansionism}}
fileName: _{{fullName}}-{{i}}
form: {{form}}
formName: {{formName}}
fullName: {{fullName}}
id: {{i}}
mapName: {{@importDataRoot.info.mapName}}
name: {{name}}
nameID: {{name}}-{{i}}
neighbors:
{{#each neighbors}}
- {{getStateName this @importDataRoot.pack.states}}
{{/each}}
pronounced:
provinces:
{{#each provinces}}
- {{getProvinceName this @importDataRoot.pack.provinces}}
{{/each}}
totalPopulation: {{totalPopulation rural urban @importDataRoot.settings.populationRate}}
religion: {{getReligionName this.center @importDataRoot.pack.cells @importDataRoot.pack.religions}}
rulers:
rural: {{calcPopulation rural @importDataRoot.settings.populationRate}}
shortDescription:
urban: {{calcPopulation urban @importDataRoot.settings.populationRate}}
tags:
- State
- {{@importDataRoot.info.mapName}}
- {{@importDataRoot.importInfo.thisCampaignShortCode}}
templateVersion: 4.4
type: {{type}}
WBProcess: Imported
---

> [!metadata|metadata]- Metadata & Page Controls
>> [!metadata|metadataoption]- System
>> #### System
>>  |
>> ---|---|
>> **Tags** | `INPUT[Tags][inlineListSuggester:tags]` |
>> **World Building Progress**| `INPUT[WBProgress][inlineSelect:wbprogress]`
>>> [!note]- Tracking World Building Progress
>>> Update the World Building Progress property as you update any info on the page. Your choices are `Imported`, `In Progress`, `Game-ready`, `Nearly Complete,` and `Done`.
>>>
>>> This allows sorting based on what has & hasn't had world building stuff done for it. There are Dataviews setup on the campaign home page that sort by these progress key words.
>
>> [!metadata|metadataoption]- Info
>> #### Info
>>  |
>> ---|---|
> **Pronounced** |  `INPUT[text:pronounced]`
> **Aliases** | `INPUT[list:aliases]` |
> **Rulers**|`INPUT[list:rulers]`|
> **Short Description**|`INPUT[textArea:shortDescription]`
>
>> [!metadata|metadataoption]- Controls
>> These buttons control various portions of this page. They only change things on this page.
>> 
>> #### Controls
>>  |
>> ---|---|
>> Leaflet Map| `BUTTON[hide_leaf_map]`  - `BUTTON[show_leaf_map]`

[[{{@importDataRoot.importInfo.thisCampaignPath}}/{{@importDataRoot.importInfo.thisCampaign}} Home|{{@importDataRoot.importInfo.thisCampaign}} Home]] | [[{{@importDataRoot.importInfo.thisCampaignPath}}/05-Atlas/{{@importDataRoot.info.mapName}}/{{@importDataRoot.info.mapName}}-Linked Atlas|{{@importDataRoot.info.mapName}}-Linked Atlas]] | Capital: `=link(this.capitalFile,this.capitalName)`

%% During the import process, much of the data for the Leaflet fields should have been pulled in from the JSON. You will need to update the defaultZoom and (maybe) the coordinates values, but it should be pretty close - good enough to get a start with it. The goal is to cut down on the amount of manual effort you need to go through to pull your data in from the FMG JSON %%

%%LeafletMapTOP%%

> [!metadata|map]+ {{name}} Map
> ```leaflet
> id: State-{{name}}
> image: [[{{@importDataRoot.info.mapName}} World Map.svg]]
> bounds:
> - [0,0]
> - [{{@importDataRoot.info.height}},{{@importDataRoot.info.width}}]
> coordinates: [{{getPoleLeafletXY this @importDataRoot.info}}]
> height: 600px
> width: 100%
> minZoom: -3
> maxZoom: 5
> defaultZoom: .5
> zoomDelta: 0.25
> unit: {{@importDataRoot.settings.distanceUnit}}
> scale: {{@importDataRoot.settings.distanceScale}}
> darkMode: false
> marker: capital,{{getLeafletBurgXY capital @importDataRoot.pack.burgs @importDataRoot.info}},[[{{"currentCapital"}}]],{{name}} Capital
> ```
> [Link to {{name}} on FMG Map]({{@importDataRoot.importInfo.mapDropboxFMGLink}}&scale=3{{getFMGCellXY this.center @importDataRoot.pack.cells}})

%%LeafletMapTAIL%%

%% All the info in this 'infobox' will appear in the panel to the right. Most of these values are pulled from the metadata in the properties above. %%

> [!infobox]+
>
>  |
>  --- |
> 
>> [!note|no-t text-center]
>> **Emblem of**
>> **`=this.fullName`**
>> ![[{{@importDataRoot.info.mapName}} Emblem {{fullName}}.png]]
>>
>
>  |
>  --- |
> 
> ## <p align="left"><font color="#c00000">Info</font></p>
>
>  |
>  ---: | --- |
> **Population** | `=this.totalPopulation` |
>  <span style="font-size:x-small">**Urban**<br>**Rural** </span>| <span style="font-size:x-small">`=this.urban`<br>`=this.rural`</span> |
> **Area (sq. mi)** | `=this.area` |
>  **Dominant Geographic Feature** | `=this.type` |
> 
>  |
>  --- |
> 
> ## <p align="left"><font color="#c00000">Politics</font></p>
>
>  |
> ---: | --- |
> **Capital** | `=link(this.capitalFile, this.capitalName)` |
> **Ruler(s)** | `=link(this.rulers)` |
> **Govt Type** | `=this.form` |
>**Dominant Culture** | `=link(this.culture)` |
> **Dominant Religion** | `=link(this.religion)` |
>
>  |
>  --- |
> 
> ```dataview
> TABLE WITHOUT ID link(neighbors) as "Neighbors"
> FROM ""
> WHERE file.name = this.file.name
> ```


# **`=this.fullName`**

**Pronounced:** "`=this.pronounced`"

%% Below is the fancy callout box where you can place some basic info. Precede any new lines with a '>' & space to place them within the box. %%

> [!recite|no-t text-center]+ Introduction
> *`= this.shortDescription` *

%% GENERAL NOTES GO HERE - free-form text or images %%

## History
Significant incidents in `=this.name`'s history:

| Name | Start Year | End Year |
| ---- | ---------- | -------- |
{{#each campaigns}}
| {{name}} | {{start}} | {{end}} |
{{/each}}

> [!note]- Timeline
> (Edit this doc to update the timeline - and remove this line, too.)
>
>> [!timeline|t-l] **`=this.fullname` Founded** _Date of founding._
>> `=this.fullName` was founded by...
>
>> [!timeline|t-r] **Something Happened** *A significant event.*
>> Something momentous occurred on this day.
>
>> [!timeline|t-l t-2] **Another thing happened** *Less significant this time.*
>> Today was only a moderately important day.
>

## Notes

%% Further notes. These 2 callouts will be hidden by default. Change the '-' after the closing square bracket to a '+' to have it be expanded by default. %%

> [!hint]- Plot Hooks
>

> [!question]- Hidden Details
>

### Zones/Regions

%% Zones & regions are any areas that need to be defined. See Points of Interest below as another place to add specific locations that are noteworthy. You can identify Zones/Regions in the properties above (metadata is searchable/indexable). And you can add specific info about any of them below. Use '[!note]- {Zone/Region name}' to place each one in it's own callout. %%

## Related Links

> [!note|wmed]- Burgs
> ```dataview
> TABLE WITHOUT ID file.link as "Burgs", link(provinceName) as "Province Name"
> FROM #Burg and "{{@importDataRoot.importInfo.thisCampaignPath}}/{{@importDataRoot.info.mapName}}/05-Atlas/States/{{name}}"
> WHERE econtains(stateId,this.id)
> SORT file.name ASC
> ```

> [!NOTE|wmed]- Neighbors
> ```dataview
> TABLE WITHOUT ID link(neighbors) as "Neighbors"
> FROM ""
> WHERE file.name = this.file.name
> ```

> [!NOTE|wmed]- Provinces
> ```dataview
> TABLE WITHOUT ID link(provinces) as "Provinces"
> FROM ""
> WHERE file.name = this.file.name
> ```

#### Other Information

> [!note]- Military
> ### Military Units of `=this.name`
> | Icon | Name | Infantry | Archers | Cavalry | Artillery | Fleet | Total |
> | -----| ---- | -------- | ------- | ------- | --------- | ----- | ----- |
> {{#each military}}
> | {{icon}} | {{name}} | {{u.infantry}} | {{u.archers}} | {{u.cavalry}} | {{u.artillery}} | {{u.fleet}} | {{a}} |
> {{/each}}

---

[[{{@importDataRoot.importInfo.thisCampaignPath}}/{{@importDataRoot.importInfo.thisCampaign}} Home|{{@importDataRoot.importInfo.thisCampaign}} Home]] | [[{{@importDataRoot.importInfo.thisCampaignPath}}/05-Atlas/{{@importDataRoot.info.mapName}}/{{@importDataRoot.info.mapName}}-Linked Atlas|{{@importDataRoot.info.mapName}}-Linked Atlas]] | Capital: `=link(this.capitalFile,this.capitalName)`{{/if}}{{#if (eq @importSettings.topField "pack.provinces")}}---
aliases:
- {{name}}
campaign: {{@importDataRoot.importInfo.thisCampaign}}
color: {{color}}
created: {{getDateTimestamp @importSettings}}
cssclasses: sixty-pct-width
emblem: {{@importDataRoot.info.mapName}} Emblem {{fullName}}.png
formName: {{formName}}
fullName: {{fullName}}{{ log "PROVINCES - fullName: " fullName }}
{{setvar "nameToPull" (getProvinceName i @importDataRoot.pack.provinces)}}pulledName: {{"nameToPull"}}
id: {{i}}
name: {{name}}
nameID: {{name}}-{{i}}
mapName: {{@importDataRoot.info.mapName}}
pronounced:
{{setvar "currentCapitalName" (getBurgName burg @importDataRoot.pack.burgs)}}provincialCapital: {{"currentCapitalName"}}
{{setvar "capitalPath" (getcapitalFile burg state @importDataRoot)}}capitalFile: {{"capitalPath"}}
religion: {{getReligionName this.center @importDataRoot.pack.cells @importDataRoot.pack.religions}}
rulers:
shortDescription:
state: {{getStateName state @importDataRoot.pack.states}}
stateNotePath: "{{@importDataRoot.importInfo.thisCampaignPath}}/05-Atlas/{{@importDataRoot.info.mapName}}/States/{{getStateName state @importDataRoot.pack.states}}/{{getStateName state @importDataRoot.pack.states}}"
tags:
- Province
- {{@importDataRoot.importInfo.thisCampaignShortCode}}
- {{@importDataRoot.info.mapName}}
templateVersion: 4.4
WBProgress: Imported
---
> [!metadata|metadata]- Metadata & Page Controls
>> [!metadata|metadataoption]- System
>> #### System
>>  |
>> ---|---|
>> **Tags** | `INPUT[Tags][inlineListSuggester:tags]` |
>> **World Building Progress**| `INPUT[WBProgress][inlineSelect:WBProgress]`|
>>> [!note]- Tracking World Building Progress
>>> Update the World Building Progress property as you update any info on the page. Your choices are `Imported`, `In Progress`, `Game-ready`, `Nearly Complete,` and `Done`.
>>>
>>> This allows sorting based on what has & hasn't had world building stuff done for it. There are Dataviews setup on the campaign home page that sort by these progress key words.
>
>> [!metadata|metadataoption]- Info
>> #### Info
>>  |
>> ---|---|
> **Pronounced** |  `INPUT[text:pronounced]`
> **Aliases** | `INPUT[list:aliases]` |
> **Rulers**|`INPUT[list:rulers]`|
> **Short Description**|`INPUT[textArea:shortDescription]`
>
>> [!metadata|metadataoption]- Controls
>> These buttons control various portions of this page. They only change things on this page.
>> 
>> #### Controls
>>  |
>> ---|---|
>> Leaflet Map| `BUTTON[hide_leaf_map]` - `BUTTON[show_leaf_map]`

[[{{@importDataRoot.importInfo.thisCampaignPath}}/{{@importDataRoot.importInfo.thisCampaign}} Home|{{@importDataRoot.importInfo.thisCampaign}} Home]] | [[{{@importDataRoot.importInfo.thisCampaignPath}}/05-Atlas/{{@importDataRoot.info.mapName}}/{{@importDataRoot.info.mapName}}-Linked Atlas|{{@importDataRoot.info.mapName}}-Linked Atlas]] | State: `=link(this.stateNotePath,this.stateName)`

%% During the import process, much of the data for the Leaflet fields should have been pulled in from the JSON. You will need to update the defaultZoom and (maybe) the coordinates values, but it should be pretty close - good enough to get a start with it. The goal is to cut down on the amount of manual effort you need to go through to pull your data in from the FMG JSON %%

%%LeafletMapTOP%%

> [!metadata|map]+ {{name}} - Province World Map
> ```leaflet
> id: Province-{{name}}
> image: [[{{@importDataRoot.info.mapName}} Provinces World Map.svg]]
> bounds:
> - [0,0]
> - [{{@importDataRoot.info.height}},{{@importDataRoot.info.width}}]
> coordinates: [{{getCellLeafletXY this.center @importDataRoot.pack.cells @importDataRoot.info}}]
> height: 600px
> width: 100%
> minZoom: -3
> maxZoom: 5
> defaultZoom: .5
> zoomDelta: 0.25
> unit: {{@importDataRoot.settings.distanceUnit}}
> scale: {{@importDataRoot.settings.distanceScale}}
> darkMode: false
> marker: prov_capital,{{getLeafletBurgXY burg @importDataRoot.pack.burgs @importDataRoot.info}},[[{{getcapitalFile burg state @importDataRoot}}]],{{name}} Provincial Capital
> ```
>  [Link to {{fullName}} on FMG Map]({{@importDataRoot.importInfo.mapDropboxFMGLink}}&scale=3{{getFMGCellXY this.center @importDataRoot.pack.cells}})

%%LeafletMapTAIL%%

%% All the info in this 'infobox' will appear in the panel to the right. Most of these values are pulled from the metadata in the properties above. %%

> [!infobox]
> ![[{{@importDataRoot.info.mapName}} Emblem {{fullName}}.png]]
>
>  |
>  --- |
>
>  # **Pronounced:**
>  # "`=this.pronounced`"
>
>  |
>  --- |
> 
>> [!note|title-center c-gray] ### Info
>
>  |
>  ---: | --- |
> 
> ###### Politics
>  |
> ---: | --- |
> **State** |`=link(this.stateNotePath,stateName)`|
> **Provincial Capital** | `=link(this.provincialCapital)` |
> **Ruler(s)** | `=link(this.rulers)` |
> **Dominant Culture** | `=link(this.culture)` |
> **Dominant Religion** | `=link(this.religion)` |
>
> ```dataview
> TABLE WITHOUT ID file.link as "Burgs", link(provinceName) as "Province Name"
> FROM #Burg and "{{@importDataRoot.importInfo.thisCampaignPath}}/{{@importDataRoot.info.mapName}}/05-Atlas"
> WHERE contains(provinceId,this.id)
> SORT file.name ASC
> ```

# **`=this.fullName`**

%% Below is the fancy callout box where you can place some basic info. Precede any new lines with a '>' & space to place them within the box. %%
> [!recite|no-t text-center]+ Introduction
> *`= this.shortDescription` *

%% GENERAL NOTES GO HERE - free-form text or images %%

### Zones/Regions

%% Zones & regions are any areas that need to be defined. See Points of Interest below as another place to add specific locations that are noteworthy. You can identify Zones/Regions in the properties above (metadata is searchable/indexable). And you can add specific info about any of them below. Use '[!note]- {Zone/Region name}' to place each one in it's own callout. %%

## History
Siginifcant Incidents in `=this.name`'s history:

| Name | Start Year | End Year |
| ---- | ---------- | -------- |
{{#each campaigns}}
| {{name}} | {{start}} | {{end}} |
{{/each}}

%% You can use the 'Timeline' Callout features of the ITS theme here to create a timeline of any important events. Remove the line below that reads '(delete this line to enable timeline)' and the trailing double percent signs & add a set of double percent signs here ->

> [!timeline|t-l] **`=this.name` Founded** _Date of founding._
> `=this.name` was founded by...

> [!timeline|t-r] **Something Happened** *A significant event.*
> Something momentous occurred on this day.

> [!timeline|t-l t-2] **Another thing happened** *Less significant this time.*
> Today was only a moderately important day.

(delete this line to enable timeline) %%

## Notes

%% Further notes. These 2 callouts will be hidden by default. Change the '-' after the closing square bracket to a '+' to have it be expanded by default. %%

> [!hint]- Plot Hooks
>

> [!question]- Hidden Details
>

---

[[{{@importDataRoot.importInfo.thisCampaignPath}}/{{@importDataRoot.importInfo.thisCampaign}} Home|{{@importDataRoot.importInfo.thisCampaign}} Home]] | [[{{@importDataRoot.importInfo.thisCampaignPath}}/05-Atlas/{{@importDataRoot.info.mapName}}/{{@importDataRoot.info.mapName}}-Linked Atlas|{{@importDataRoot.info.mapName}}-Linked Atlas]] | State: `=link(this.stateNotePath,this.stateName)`{{/if}}{{#if (eq @importSettings.topField "pack.burgs")}}---
aliases:
- {{name}}
burgMapLink: https://watabou.github.io{{getBurgMapLink this @importDataRoot.info.seed @importDataRoot.pack.cells @importDataRoot.settings @importDataRoot.grid}}
burgName: {{name}}
burgNameID: {{name}}-{{i}}
campaign: {{@importDataRoot.importInfo.thisCampaign}}
capital: {{capital}}
cell: {{cell}}
citadel: {{citadel}}
cssclasses: sixty-pct-width
culture: {{getCultureName culture @importDataRoot.pack.cultures}}
elevation: {{getHeight cell @importDataRoot.settings @importDataRoot.pack.cells}}
emblem: {{@importDataRoot.info.mapName}} Emblem {{name}}.png
feature: {{feature}}
id: {{i}}
mapName: {{@importDataRoot.info.mapName}}
plaza: {{plaza}}
population: {{calcPopulation population @importDataRoot.settings.populationRate}}
port: {{port}}
pronounced:
provinceId: {{getProvinceIdFromCell cell @importDataRoot.pack.cells}}
provinceName: {{burgProvinceNameLookup cell @importDataRoot.pack.cells @importDataRoot.pack.provinces}}
religion: {{getReligionName this.cell @importDataRoot.pack.cells @importDataRoot.pack.religions}}
rulers:
shanty: {{shanty}}
shortDescription:
stateId: {{state}}
stateName: {{getStateName state @importDataRoot.pack.states}}
stateNotePath: "{{@importDataRoot.importInfo.thisCampaignPath}}/05-Atlas/{{@importDataRoot.info.mapName}}/States/{{getStateName state @importDataRoot.pack.states}}/{{getStateName state @importDataRoot.pack.states}}"
tags:
- Burg
- {{@importDataRoot.info.mapName}}
- {{@importDataRoot.importInfo.thisCampaignShortCode}}
- {{getBurgType this @importDataRoot.settings}}
- {{burgProvinceNameLookupTag cell @importDataRoot.pack.cells @importDataRoot.pack.provinces}}
- {{getStateName state @importDataRoot.pack.states}}
temple: {{temple}}
temperature: {{getTemperature this @importDataRoot}}
temperatureLikeness: {{getTemperatureLikeness this @importDataRoot}}
templateVersion: 5.0
type: {{type}}
walls: {{walls}}
WBProgress: Imported
x: {{x}}
y: {{y}}
---

%% You can copy the line below and paste it into this Burg's State and/or Province Leaflet map block and it will add a marker for this burg to that map that will also link back to this note. Copy this line:
marker: burg,{{getLeafletBurgXY this.i @importDataRoot.pack.burgs @importDataRoot.info}},[[{{name}}]]
%%

> [!metadata|metadata]- Metadata & Page Controls
>> [!metadata|metadataoption]- System
>> #### System
>>  |
>> ---|---|
>> **cssClass**|`INPUT[cssClass][inlineSelect:cssclass]` |
>> **Tags** | `INPUT[Tags][inlineListSuggester:tags]` |
>> **World Building Progress**| `INPUT[WBProgress][inlineSelect:WBProgress]`|
>>> [!note]- Tracking World Building Progress
>>> Update the World Building Progress property as you update any info on the page. Your choices are `Imported`, `In Progress`, `Game-ready`, `Nearly Complete,` and `Done`.
>>>
>>> This allows sorting based on what has & hasn't had world building stuff done for it. There are Dataviews setup on the campaign home page that sort by these progress key words.
>
>> [!metadata|metadataoption]- Info
>> #### Info
>>  |
>> ---|---|
> **Pronounced** |  `INPUT[text:pronounced]`
> **Aliases** | `INPUT[list:aliasese]` |
> **Rulers**|`INPUT[list:rulers]`|
> **Short Description**|`INPUT[textArea:shortDescription]`
>
>> [!metadata|metadataoption]- Controls
>> These buttons control various portions of this page. They only change things on this page.
>> 
>> #### Controls
>>  |
>> ---|---|
>> Leaflet Map| `BUTTON[hide_leaf_map]` - `BUTTON[show_leaf_map]`
>> Interactive Map | `BUTTON[hide_web_map]` - `BUTTON[show_web_map]`

[[{{@importDataRoot.importInfo.thisCampaignPath}}/{{@importDataRoot.importInfo.thisCampaign}} Home|{{@importDataRoot.importInfo.thisCampaign}} Home]] | [[{{@importDataRoot.importInfo.thisCampaignPath}}/05-Atlas/{{@importDataRoot.info.mapName}}/{{@importDataRoot.info.mapName}}-Linked Atlas|{{@importDataRoot.info.mapName}}-Linked Atlas]] | State: `=link(this.stateNotePath,this.stateName)` | Province: `=link(this.provinceName)`

%% If you want to place the image for the Burg in the Map(Interactive) window below, you can use Fantasy Map Generator's link to Watabou's Fantasy City or Village Generator - see the `infobox` link or the `burgMapLink` URL up in the properties of this note. You can save the map image somewhere in the vault (`01-Campaign/{{@importDataRoot.importInfo.thisCampaign}}/98-{{@importDataRoot.importInfo.thisCampaign}} Assets`, for instance) and it will show up in this window. The name for this image is pre-populated with info from the JSON Import. The filename should be the Burg's id value and the Burg's burgName - both available up in the frontmatter.

You may also use the Meta-Bind button at the bottom of the callout to open the burgMapLink in a browser window and save it there. On clicking that button, you will open the Burg's URL (City or Village) and then it will set this Burg's index and name on the clipboard like this: {id}-{burgName} - you can then just paste that in to the file name field of the save file dialog window, once you navigate to the vault folder you want to save them into.

There is an elaborate method (see [[JSON Import How To#Wrangling FMG Burg Maps]]) to save all the maps so you can have them locally and make use of the data that was placed here on import from the JSON.%%

%%LeafletMapTOP%%

> [!metadata|map]- Burg Map (Interactive)
> ```leaflet
> id: Burg-{{name}}
> image: [[{{name}}-{{i}}.webp]]
> height: 800px
> width: 100%
> minZoom: -3.5
> maxZoom: 2.25
> defaultZoom: -1
> zoomDelta: 0.25
> unit: feet
> scale: 1
> darkMode: false
> ```
>
> [Link to {{name}} on FMG Map]({{@importDataRoot.importInfo.mapDropboxFMGLink}}&scale=6{{getFMGCellXY this.cell @importDataRoot.pack.cells}}) | Download Helper Link: `BUTTON[mapLink-to-download]`

%%LeafletMapTAIL%%

%% City Maps may need Scale adjusting - see `unit: feet` line above in Leaflet block (around line 80-81) The `scale` setting of `1` is arbitrary. It seems to work for the Burg maps - City or Village. By default the CityGen maps will likely have the `scale bar` visible. I recommend hiding it. The City Gen uses meters. The Village Gen has no scale defined. Once you hide it in the CityGen Settings, it should stay hidden for several visits to these maps.%%

%%WebMapTOP%%

> [!metadata]- Burg Map (Live from Web)
> ```custom-frames
> frame: Watabou-Procgen Arcana
> style: height: 1000px;
> urlSuffix: {{getBurgMapLink this @importDataRoot.info.seed @importDataRoot.pack.cells @importDataRoot.settings @importDataRoot.grid}}
> ```
>
>  `=elink(this.burgMapLink,"Visit Burg Map")` | Generator Link: `BUTTON[mapLink-to-download]`

%%WebMapTAIL%%

%% All the info in this 'infobox' will appear in the panel to the right. Most of these values are pulled from the metadata in the properties above. %%

> [!infobox]
> ![[{{@importDataRoot.info.mapName}} Emblem {{name}}.png]]
>
>  |
>  --- |
>
>  # **Pronounced**
>  # "`=this.pronounced`"
>
>  |
>  --- |
> 
>> [!note|title-center c-gray] ### Info
>
>  |
>  ---: | --- |
> **Population** | `=this.population` |
> **Annual Avg. Temp** | `=this.temperature` |
> <span style="font-size:x-small">**Temps Like**</span> |<span style="font-size:x-small">`=this.temperatureLikeness`</span>|
>  **Elevation** | `=this.elevation`|
>  **State** |`=link(this.stateNotePath,stateName)`|
>  **Province** |`=link(this.provinceName)`|
> 
> ###### Politics
>  |
> ---: | --- |
> **Ruler(s)** | `=link(this.rulers)` |
>**Dominant Culture** | `=link(this.culture)` |
> **Dominant Religion** | `=link(this.religion)` |
>

# **`=this.burgName`**

> [!recite|no-t text-center]+ Introduction
> *`=this.shortDescription`*

%% GENERAL NOTES GO HERE - free-form text or images %%

### Zones/Regions/Neighborhoods
Below are any notable zones or regions within `=this.burgName`

%% Zones & regions are any areas that need to be defined. See Points of Interest below as another place to add specific locations that are noteworthy. You can identify Zones/Regions in the properties above (metadata is searchable/indexable). And you can add specific info about any of them below. Use '[!note]- {Zone/Region name}' to place each one in it's own callout. %%

### History

%% You can use the 'Timeline' Callout features of the ITS theme here to create a timeline of any important events. Remove the line below that reads '(delete this line to enable timeline)' and the trailing double percent signs & add a set of double percent signs here ->

> [!timeline|t-l] **`=this.burgName` Founded** _Date of founding._
> `=this.burgName` was founded by...

> [!timeline|t-l t-2] **Something Happened** *A significant event.*
> Something momentous occurred on this day.

> [!timeline|t-r t-2] **Another thing happened** *Less significant this time.*
> Today was only a moderately important day.

(delete this line to enable timeline) %%

## Notes

%% Further notes. These 2 callouts will be hidden by default. Change the '-' after the closing square bracket to a '+' to have it be expanded by default. %%

> [!hint]- Plot Hooks
>

> [!question]- Hidden Details
>

## More Details

---

[[{{@importDataRoot.importInfo.thisCampaignPath}}/{{@importDataRoot.importInfo.thisCampaign}} Home|{{@importDataRoot.importInfo.thisCampaign}} Home]] | [[{{@importDataRoot.importInfo.thisCampaignPath}}/05-Atlas/{{@importDataRoot.info.mapName}}/{{@importDataRoot.info.mapName}}-Linked Atlas|{{@importDataRoot.info.mapName}}-Linked Atlas]] | State: `=link(this.stateNotePath,this.stateName)` | Province: `=link(this.provinceName)`

```meta-bind-js-view
{burgMapLink} as mapLink
{burgName} as name
{id} as id
---
let fileName = context.bound.name + "-" + context.bound.id;
navigator.clipboard.writeText(fileName);
let url = context.bound.mapLink;
return engine.markdown.create(`
~~~meta-bind-button
label: Open
id: mapLink-to-download
style: primary
hidden: true
tooltip: Click this button to open the Burg's map on the generator page to download. The name this note expects to see will be saved to clipboard (ID-Name). Save and place in "01-Campaigns/{{@importDataRoot.importInfo.thisCampaign}}/98-{{@importDataRoot.importInfo.thisCampaign}} Assets" folder
action:
 type: open
 link: ${url}
~~~
`)
```{{/if}}{{#if (eq @importSettings.topField "pack.cultures")}}---
aliases:
campaign: "{{@importDataRoot.importInfo.thisCampaign}}"
cultureName: "{{name}}"
code: {{code}}
color: {{color}}
center: {{center}}
created: {{getDateTimestamp @importSettings}}
cssclasses: sixty-pct-width
expansionism: {{expansionism}}
id: {{i}}
leaders:
mapName: {{@importDataRoot.info.mapName}}
namesbase: {{base}}
origins: {{origins}}
pronounced:
shortDescription:
shield: {{shield}}
tags:
- Culture
- {{@importDataRoot.info.mapName}}
templateVersion: 3.2
type: {{type}}
WBProcess: Imported
---

> [!metadata|metadata]- Metadata
>> [!metadata|metadataoption]- System
>> #### System
>>  |
>> ---|---|
>> **Tags** | `INPUT[Tags][inlineListSuggester:tags]` |
>> **World Building Progress**| `INPUT[WBProgress][inlineSelect:wbprogress]`|
>>> [!note]- Tracking World Building Progress
>>> Update the World Building Progress property as you update any info on the page. Your choices are `Imported`, `In Progress`, `Game-ready`, `Nearly Complete,` and `Done`.
>>>
>>> This allows sorting based on what has & hasn't had world building stuff done for it. There are Dataviews setup on the campaign home page that sort by these progress key words.
>
>> [!metadata|metadataoption]- Info
>> #### Info
>>  |
>> ---|---|
> **Pronounced** |  `INPUT[text:pronounced]`
> **Aliases** | `INPUT[list:aliases]` |
> **Leaders**|`INPUT[list:leaders]`|
> **Short Description**|`INPUT[textArea:shortDescription]`

[[{{@importDataRoot.importInfo.thisCampaignPath}}/{{@importDataRoot.importInfo.thisCampaign}} Home|{{@importDataRoot.importInfo.thisCampaign}} Home]] | [[{{@importDataRoot.importInfo.thisCampaignPath}}/05-Atlas/{{@importDataRoot.info.mapName}}/{{@importDataRoot.info.mapName}}-Linked Atlas|{{@importDataRoot.info.mapName}}-Linked Atlas]]

%% All the info in this 'infobox' will appear in the panel to the right. Most of these values are pulled from the metadata in the properties above. %%

> [!infobox]
> ###### Info
>
>  |
>  --- |
>
>  # **Pronounced:**
>  # "`=this.pronounced`"
>
>  |
>  --- |
> 
>> [!note|title-center c-gray] ### Info
>
> 
>

# **`=this.cultureName`**

> [!recite|no-t text-center]+ Introduction
> *`=this.shortDescription`*

%% GENERAL NOTES GO HERE - free-form text or images %%

### Zones/Regions/Neighborhoods
Below are any notable zones or regions within `=this.cultureName`

%% Zones & regions are any areas that need to be defined. See Points of Interest below as another place to add specific locations that are noteworthy. You can identify Zones/Regions in the properties above (metadata is searchable/indexable). And you can add specific info about any of them below. Use '[!note]- {Zone/Region name}' to place each one in it's own callout. %%

### History

%% You can use the 'Timeline' Callout features of the ITS theme here to create a timeline of any important events. Remove the line below that reads '(delete this line to enable timeline)' and the trailing double percent signs & add a set of double percent signs here ->

> [!timeline|t-l] **`=this.cultureName` Founded** _Date of founding._
> `=this.cultureName` was founded by...

> [!timeline|t-l t-2] **Something Happened** *A significant event.*
> Something momentous occurred on this day.

> [!timeline|t-r t-2] **Another thing happened** *Less significant this time.*
> Today was only a moderately important day.

(delete this line to enable timeline) %%

## Notes

%% Further notes. These 2 callouts will be hidden by default. Change the '-' after the closing square bracket to a '+' to have it be expanded by default. %%

> [!hint]- Plot Hooks
>

> [!question]- Hidden Details
>

## More Details

%% The metadata sections below allow you to add some detailed info about NPCs, Groups, Points of Interest, and Shops & Services.

Change the '-' after the closing square bracket of each callout line (starts with open bracket followed by an exclamation point) to a '+' to have it be expanded by default.
%%


---

[[{{@importDataRoot.importInfo.thisCampaignPath}}/{{@importDataRoot.importInfo.thisCampaign}} Home|{{@importDataRoot.importInfo.thisCampaign}} Home]] | [[{{@importDataRoot.importInfo.thisCampaignPath}}/05-Atlas/{{@importDataRoot.info.mapName}}/{{@importDataRoot.info.mapName}}-Linked Atlas|{{@importDataRoot.info.mapName}}-Linked Atlas]]{{/if}}{{#if (eq @importSettings.topField "pack.religions")}}---
aliases:
area:
campaign: "{{@importDataRoot.importInfo.thisCampaign}}"
center: {{this.center}}
code: {{code}}
color: {{color}}
created: {{getDateTimestamp @importSettings}}
cssclasses: sixty-pct-width
culture: {{getCultureName culture @importDataRoot.pack.cultures}}
deity: {{deity}}
expansion: {{expansion}}
expansionism: {{expansionism}}
followers: {{getReligionFollowers this @importDataRoot.pack.cells @importDataRoot.pack.burgs @importDataRoot.settings}}
form: {{form}}
id: {{i}}
leaders:
mapName: {{@importDataRoot.info.mapName}}
origins: {{origins}}
pronounced:
religionName: "{{name}}"
shortDescription:
tags:
- Religion
- {{@importDataRoot.info.mapName}}
type: {{type}}
templateVersion: 5.0
WBProgress: Imported
---

> [!metadata|metadata]- Metadata
>> [!metadata|metadataoption]- System
>> #### System
>>  |
>> ---|---|
>> **Tags** | `INPUT[Tags][inlineListSuggester:tags]` |
>> **World Building Progress**| `INPUT[WBProgress][inlineSelect:WBProgress]`|
>>> [!note]- Tracking World Building Progress
>>> Update the World Building Progress property as you update any info on the page. Your choices are `Imported`, `In Progress`, `Game-ready`, `Nearly Complete,` and `Done`.
>>>
>>> This allows sorting based on what has & hasn't had world building stuff done for it. There are Dataviews setup on the campaign home page that sort by these progress key words.
>
>> [!metadata|metadataoption]- Info
>> #### Info
>>  |
>> ---|---|
> **Pronounced** |  `INPUT[text:pronounced]`
> **Aliases** | `INPUT[list:aliases]` |
> **Leaders**|`INPUT[list:leaders]`|
> **Short Description**|`INPUT[textArea:shortDescription]`

[[{{@importDataRoot.importInfo.thisCampaignPath}}/{{@importDataRoot.importInfo.thisCampaign}} Home|{{@importDataRoot.importInfo.thisCampaign}} Home]] | [[{{@importDataRoot.importInfo.thisCampaignPath}}/05-Atlas/{{@importDataRoot.info.mapName}}/{{@importDataRoot.info.mapName}}-Linked Atlas|{{@importDataRoot.info.mapName}}-Linked Atlas]]

%% During the import process, much of the data for the Leaflet fields should have been pulled in from the JSON. You will need to update the defaultZoom and (maybe) the coordinates values, but it should be pretty close - good enough to get a start with it. The goal is to cut down on the amount of manual effort you need to go through to pull your data in from the FMG JSON %%

> [!metadata|map]- {{name}} Religions Map
> ```leaflet
> id: Religion-{{name}}
> image: [[{{@importDataRoot.info.mapName}} Religions World Map.svg]]
> bounds:
> - [0,0]
> - [{{@importDataRoot.info.height}},{{@importDataRoot.info.width}}]
> coordinates: [{{getCellLeafletXY center @importDataRoot.pack.cells @importDataRoot.info}}]
> height: 600px
> width: 100%
> minZoom: -3
> maxZoom: 5
> defaultZoom: .5
> zoomDelta: 0.25
> unit: {{@importDataRoot.settings.distanceUnit}}
> scale: {{@importDataRoot.settings.distanceScale}}
> darkMode: false
> marker: religion,{{getCellLeafletXY center @importDataRoot.pack.cells @importDataRoot.info}},,Religion's Center
> ```
> <div style="width: 500px; height: 20px; background-color: {{color}}; display: flex; justify-content: center; align-items: center; font-size: 24px; color: {{color}};">▮</div>
> The area shown in the color above is the reach of {{name}}

%% All the info in this 'infobox' will appear in the panel to the right. Most of these values are pulled from the metadata in the properties above. %%

> [!infobox]
>  |
>  --- |
>
>  # **Pronounced:**
>  # "`=this.pronounced`"
>
>  |
>  --- |
> 
>> [!note|title-center c-gray] ### Info
>
>  |
>  ---: | --- |
> **Deity** | `=this.deity` |
> **Form** | `=this.form`|
> **Culture** | `=this.culture`|
> **Leaders** | `=this.leaders`|
> **Followers** | `=this.followers`|
> 

# **`=this.religionName`**

> [!recite|no-t text-center]+ Introduction
> *`=this.shortDescription`*

%% GENERAL NOTES GO HERE - free-form text or images %%

### Zones/Regions/Neighborhoods
Below are any notable zones or regions within `=this.religionName`

%% Zones & regions are any areas that need to be defined. See Points of Interest below as another place to add specific locations that are noteworthy. You can identify Zones/Regions in the properties above (metadata is searchable/indexable). And you can add specific info about any of them below. Use '[!note]- {Zone/Region name}' to place each one in it's own callout. %%

### History

%% You can use the 'Timeline' Callout features of the ITS theme here to create a timeline of any important events. Remove the line below that reads '(delete this line to enable timeline)' and the trailing double percent signs & add a set of double percent signs here ->

> [!timeline|t-l] **`=this.religionName` Founded** _Date of founding._
> `=this.religionName` was founded by...

> [!timeline|t-l t-2] **Something Happened** *A significant event.*
> Something momentous occurred on this day.

> [!timeline|t-r t-2] **Another thing happened** *Less significant this time.*
> Today was only a moderately important day.

(delete this line to enable timeline) %%

## Notes

%% Further notes. These 2 callouts will be hidden by default. Change the '-' after the closing square bracket to a '+' to have it be expanded by default. %%

> [!hint]- Plot Hooks
>

> [!question]- Hidden Details
>

## More Details

%% The metadata sections below allow you to add some detailed info about NPCs, Groups, Points of Interest, and Shops & Services.

Change the '-' after the closing square bracket of each callout line (starts with open bracket followed by an exclamation point) to a '+' to have it be expanded by default.
%%
---
[[{{@importDataRoot.importInfo.thisCampaignPath}}/{{@importDataRoot.importInfo.thisCampaign}} Home|{{@importDataRoot.importInfo.thisCampaign}} Home]] | [[{{@importDataRoot.importInfo.thisCampaignPath}}/05-Atlas/{{@importDataRoot.info.mapName}}/{{@importDataRoot.info.mapName}}-Linked Atlas|{{@importDataRoot.info.mapName}}-Linked Atlas]]{{/if}}