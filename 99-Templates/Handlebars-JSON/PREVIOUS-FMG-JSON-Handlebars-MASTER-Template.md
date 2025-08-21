{{#if (eq @importSettings.topField "pack.states")}}
---
alert: {{alert}}
aliases: {{name}}
area: {{totalArea area}}
burgs: {{burgs}}
campaign: {{@importDataRoot.info.thisCampaign}}
{{setvar "currentCapital" (getBurgName capital @importDataRoot.pack.burgs)}}capital: {{"currentCapital"}}
center: {{this.center}}
color: {{color}}
created: {{getDateTimestamp @importSettings}}
culture: {{getCultureName culture @importDataRoot.pack.cultures}}
emblem: {{@importDataRoot.info.mapName}} Emblem {{fullName}}.png
expansionism: {{expansionism}}
form: {{form}}
formName: {{formName}}
fullName: {{fullName}}
id: {{i}}
name: {{name}}
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
- {{@importDataRoot.info.thisCampaignShortCode}}
type: {{type}}
WBProcess: Imported
world: {{@importDataRoot.info.mapName}}
---

> [!metadata|metadata]- Metadata 
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

[[{{getCampaignHomeNote @importSettings}}]] | [[{{getCampaignAtlasNote @importSettings}}]]

%% During the import process, much of the data for the Leaflet fields should have been pulled in from the JSON. You will need to update the defaultZoom and (maybe) the coordinates values, but it should be pretty close - good enough to get a start with it. The goal is to cut down on the amount of manual effort you need to go through to pull your data in from the FMG JSON %% 

> [!metadata|map]+ {{name}} Map
> ```leaflet
> id: State-{{name}}
> image: [[{{@importDataRoot.info.mapName}} World Map.svg]]
> bounds: 
> - [0,0]
> - [{{@importDataRoot.info.mapHeight}},{{@importDataRoot.info.mapWidth}}]
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
> [Link to {{name}} on FMG Map]({{@importDataRoot.info.mapDropboxFMGLink}}&scale=3{{getFMGCellXY this.center @importDataRoot.pack.cells}})

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
> **Population** | `=this.totalPopulation` |
>  <span style="font-size:x-small">**Urban**<br>**Rural** </span>| <span style="font-size:x-small">`=this.urban`<br>`=this.rural`</span> |
> **Area (sq. mi)** | `=this.area` |
>  **Dominant Geographic Feature** | `=this.type` |
>  
> ###### Politics
>  |
> ---: | --- |
> **Capital** | `=link(this.capital)` |
> **Ruler(s)** | `=link(this.rulers)` |
> **Govt Type** | `=this.form` |
>**Dominant Culture** | `=link(this.culture)` |
> **Dominant Religion** | `=link(this.religion)` |
>
> ```dataview
> TABLE WITHOUT ID link(neighbors) as "Neighbors"
> FROM ""
> WHERE file.name = this.file.name
> ```
> ```dataview
> TABLE WITHOUT ID link(provinces) as "Provinces"
> FROM ""
> WHERE file.name = this.file.name
> ```

# **`=this.fullName`**

%% Below is the fancy callout box where you can place some basic info. Precede any new lines with a '>' & space to place them within the box. %%

> [!recite|no-t text-center]+ Introduction
> *`= this.shortDescription` *

%% GENERAL NOTES GO HERE - free-form text or images %%

### Zones/Regions

> [!note|no-t] Zones/Regions
>
>> [!note]- Burgs
>> ```dataview
>> TABLE WITHOUT ID file.link as "Burgs", link(provinceName) as "Province Name"
>> FROM #Burg and "{{@importDataRoot.info.thisCampaignPath}}/05-Atlas/States/{{i}}-{{name}}"
>> WHERE econtains(stateId,this.id)
>> SORT file.name ASC
>> ```

%% Zones & regions are any areas that need to be defined. See Points of Interest below as another place to add specific locations that are noteworthy. You can identify Zones/Regions in the properties above (metadata is searchable/indexable). And you can add specific info about any of them below. Use '[!note]- {Zone/Region name}' to place each one in it's own callout. %%

## History
Siginifcant Incidents in `=this.name`'s history:

| Name | Start Year | End Year |
| ---- | ---------- | -------- |
{{#each campaigns}} 
| {{name}} | {{start}} | {{end}} |
{{/each}}


## Military 
| Icon | Name | Infantry | Archers | Cavalry | Artillery | Fleet | Total |
| -----| ---- | -------- | ------- | ------- | --------- | ----- | ----- |
{{#each military}}
| {{icon}} | {{name}} | {{u.infantry}} | {{u.archers}} | {{u.cavalry}} | {{u.artillery}} | {{u.fleet}} | {{a}} |
{{/each}}

%% You can use the 'Timeline' Callout features of the ITS theme here to create a timeline of any important events. Remove the line below that reads '(delete this line to enable timeline)' and the trailing double percent signs & add a set of double percent signs here ->

> [!timeline|t-l] **`=this.fullname` Founded** _Date of founding._
> `=this.fullName` was founded by...

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

[[{{getCampaignHomeNote @importSettings}}]] | [[{{getCampaignAtlasNote @importSettings}}]]
{{/if}}
{{#if (eq @importSettings.topField "pack.provinces")}}
---
aliases: {{name}}
campaign: {{@importDataRoot.info.thisCampaign}}
color: {{color}}
created: {{getDateTimestamp @importSettings}}
emblem: {{@importDataRoot.info.mapName}} Emblem {{fullName}}.png
formName: {{formName}}
fullName: {{fullName}}
{{setvar "nameToPull" (getProvinceName i @importDataRoot.pack.provinces)}}pulledName: {{"nameToPull"}}
id: {{i}}
name: {{name}}
pronounced:
provincialCapital: {{getBurgName burg @importDataRoot.pack.burgs}}
religion: {{getReligionName this.center @importDataRoot.pack.cells @importDataRoot.pack.religions}}
rulers:
shortDescription:
state: {{getStateName state @importDataRoot.pack.states}}
tags:
- Province
- {{@importDataRoot.info.thisCampaignShortCode}}
- {{@importDataRoot.info.mapName}}
WBProgress: Imported
world: {{@importDataRoot.info.mapName}}
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
> **Rulers**|`INPUT[list:rulers]`|
> **Short Description**|`INPUT[textArea:shortDescription]`

[[{{getCampaignHomeNote @importSettings}}]] | [[{{getCampaignAtlasNote @importSettings}}]] | `=link(this.state)`

%% During the import process, much of the data for the Leaflet fields should have been pulled in from the JSON. You will need to update the defaultZoom and (maybe) the coordinates values, but it should be pretty close - good enough to get a start with it. The goal is to cut down on the amount of manual effort you need to go through to pull your data in from the FMG JSON %% 

> [!metadata|map]+ {{name}} - Province World Map
> ```leaflet
> id: Province-{{name}}
> image: [[{{@importDataRoot.info.mapName}} Provinces World Map.svg]]
> bounds: 
> - [0,0]
> - [{{@importDataRoot.info.mapHeight}},{{@importDataRoot.info.mapWidth}}]
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
> marker: prov_capital,{{getLeafletBurgXY burg @importDataRoot.pack.burgs @importDataRoot.info}},[[{{getBurgName burg @importDataRoot.pack.burgs}}]],{{name}} Provincial Capital
> ```
>  [Link to {{fullName}} on FMG Map]({{@importDataRoot.info.mapDropboxFMGLink}}&scale=3{{getFMGCellXY this.center @importDataRoot.pack.cells}})


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
> **State** |`=link(this.state)`|
> **Provincial Capital** | `=link(this.provincialCapital)` |
> **Ruler(s)** | `=link(this.rulers)` |
> **Dominant Culture** | `=link(this.culture)` |
> **Dominant Religion** | `=link(this.religion)` |
>
> ```dataview
> TABLE WITHOUT ID file.link as "Burgs", link(provinceName) as "Province Name"
> FROM #Burg and "{{@importDataRoot.info.thisCampaignPath}}/05-Atlas/States/{{i}}-{{name}}"
> WHERE econtains(provinceId,this.id)
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

[[{{getCampaignHomeNote @importSettings}}]] | [[{{getCampaignAtlasNote @importSettings}}]] | `=link(this.state)`
{{/if}}
{{#if (eq @importSettings.topField "pack.burgs")}}
---
aliases: {{name}}
burgMapLink: https://watabou.github.io{{getBurgMapLink this @importDataRoot.info.seed @importDataRoot.pack.cells @importDataRoot.settings @importDataRoot.grid}}
burgName: {{name}}
campaign: {{@importDataRoot.info.thisCampaign}}
capital: {{capital}}
cell: {{cell}}
citadel: {{citadel}}
cssclass: sixty-pct-width
culture: {{getCultureName culture @importDataRoot.pack.cultures}}
elevation: {{getHeight cell @importDataRoot.settings @importDataRoot.pack.cells}}
emblem: {{@importDataRoot.info.mapName}} Emblem {{name}}.png
feature: {{feature}}
id: {{i}}
plaza: {{plaza}}
population: {{calcPopulation population @importDataRoot.settings.populationRate}}
port: {{port}}
pronounced:
provinceId: {{getProvinceIdFromCell cell @importDataRoot.pack.cells}}
provinceName: {{burgProvinceLookup cell @importDataRoot.pack.cells @importDataRoot.pack.provinces}}
religion: {{getReligionName this.cell @importDataRoot.pack.cells @importDataRoot.pack.religions}}
rulers:
shanty: {{shanty}}
shortDescription:
stateId: {{state}}
stateName: {{getStateName state @importDataRoot.pack.states}}
temple: {{temple}}
temperature: {{getTemperature this @importDataRoot}}
temperatureLikeness: {{getTemperatureLikeness this @importDataRoot}}
tags:
- Burg
- {{@importDataRoot.info.mapName}}
- {{@importDataRoot.info.thisCampaignShortCode}}
type: {{type}}
walls: {{walls}}
WBProgress: Imported
world: {{@importDataRoot.info.mapName}}
x: {{x}}
y: {{y}}
---

%% You can copy the line below and paste it into this Burg's State and/or Province Leaflet map block and it will add a marker for this burg to that map that will also link back to this note. Copy this line:
marker: burg,{{getLeafletBurgXY this.i @importDataRoot.pack.burgs @importDataRoot.info}},[[{{name}}]]
%%

> [!metadata|metadata]- Metadata 
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

[[{{getCampaignHomeNote @importSettings}}|Campaign Home]] | [[{{getCampaignAtlasNote @importSettings}}|Campaign Atlas]] | State: `=link(this.stateName)` | Province: `=link(this.provinceName)`

%% If you want to place the image for the Burg in the Map(Interactive) window below, you can use Fantasy Map Generator's link to Watabou's Fantasy City or Village Generator - see the `infobox` link or the `burgMapLink` URL up in the properties of this note. You can save the map image somewhere in the vault (`01-Campaign/{{@importDataRoot.info.thisCampaign}}/98-{{@importDataRoot.info.thisCampaign}} Assets`, for instance) and it will show up in this window. The name for this image is pre-populated with info from the JSON Import. The filename should be the Burg's id value and the Burg's burgName - both available up in the frontmatter.

You may also use the Meta-Bind button at the bottom of the callout to open the burgMapLink in a browser window and save it there. On clicking that button, you will open the Burg's URL (City or Village) and then it will set this Burg's index and name on the clipboard like this: {id}-{burgName} - you can then just paste that in to the file name field of the save file dialog window, once you navigate to the vault folder you want to save them into.

There is an elaborate method (see [[JSON Import How To#Wrangling FMG Burg Maps]]) to save all the maps so you can have them locally and make use of the data that was placed here on import from the JSON.%% 

%%InteractiveMapTOP%%

> [!metadata|map]- Burg Map (Interactive)
> ```leaflet
> id: Burg-{{name}}
> image: [[{{i}}-{{name}}.webp]]
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
> [Link to {{name}} on FMG Map]({{@importDataRoot.info.mapDropboxFMGLink}}&scale=6{{getFMGCellXY this.cell @importDataRoot.pack.cells}})| Generator Link: `BUTTON[mapLink-to-download]`

```meta-bind-js-view
{burgMapLink} as mapLink
{burgName} as name
{id} as id
---
let fileName = context.bound.id + "-" + context.bound.name;
navigator.clipboard.writeText(fileName);
let url = context.bound.mapLink;
return engine.markdown.create(`
~~~meta-bind-button
label: Open
id: mapLink-to-download
style: primary
hidden: true
tooltip: Click this button to open the Burg's map on the generator page to download. The name this note expects to see will be saved to clipboard (ID-Name). Save and place in "01-Campaigns/{{@importDataRoot.info.thisCampaign}}/98-{{@importDataRoot.info.thisCampaign}} Assets" folder
action:
 type: open
 link: ${url}
~~~
`)
```

%%InteractiveMapTAIL%%

%% City Maps may need Scale adjusting - see `unit: feet` line above in Leaflet block (around line 80-81) The `scale` setting of `1` is arbitrary. It seems to work for the Burg maps - City or Village. By default the CityGen maps will likely have the `scale bar` visible. I recommend hiding it. The City Gen uses meters. The Village Gen has no scale defined. Once you hide it in the CityGen Settings, it should stay hidden for several visits to these maps.%%

> [!metadata]- Burg Map (Live from Web)
> ```custom-frames
> frame: Watabou-Procgen Arcana
> style: height: 1000px;
> urlSuffix: {{getBurgMapLink this @importDataRoot.info.seed @importDataRoot.pack.cells @importDataRoot.settings @importDataRoot.grid}}
> ```
>  `=elink(this.burgMapLink,"Visit Burg Map")`
>

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
>  **State** |`=link(this.stateName)`|
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

[[{{getCampaignHomeNote @importSettings}}|Campaign Home]] | [[{{getCampaignAtlasNote @importSettings}}|Campaign Atlas]] | State: `=link(this.stateName)` | Province: `=link(this.provinceName)`

Special controls for this note:
`BUTTON[hide_int_map]` | `BUTTON[show_int_map]`
{{/if}}
{{#if (eq @importSettings.topField "pack.cultures")}}
---
aliases:
campaign: "{{@importDataRoot.info.thisCampaign}}"
cultureName: "{{name}}"
code: {{code}}
color: {{color}}
center: {{center}}
created: {{getDateTimestamp @importSettings}}
expansionism: {{expansionism}}
id: {{i}}
leaders: 
namesbase: {{base}}
origins: {{origins}}
pronounced:
shortDescription:
shield: {{shield}}
tags:
- Culture
type: {{type}}
WBProcess: Imported
world: {{@importDataRoot.info.mapName}}
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

[[{{getCampaignHomeNote @importSettings}}]] | [[{{getCampaignAtlasNote @importSettings}}]]

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

[[{{getCampaignHomeNote @importSettings}}]] | [[{{getCampaignAtlasNote @importSettings}}]]
{{/if}}
{{#if (eq @importSettings.topField "pack.religions")}}
---
aliases:
area: 
campaign: "{{@importDataRoot.info.thisCampaign}}"
center: {{this.center}}
code: {{code}}
color: {{color}}
culture: {{getCultureName culture @importDataRoot.pack.cultures}}
created: {{getDateTimestamp @importSettings}}
deity: {{deity}}
expansion: {{expansion}}
expansionism: {{expansionism}}
followers: {{getReligionFollowers this @importDataRoot.pack.cells @importDataRoot.pack.burgs @importDataRoot.settings}}
form: {{form}}
id: {{i}}
leaders:
origins: {{origins}}
pronounced:
religionName: "{{name}}"
shortDescription:
tags:
- Religion
- {{@importDataRoot.info.mapName}}
type: {{type}}
WBProgress: Imported
world: {{@importDataRoot.info.mapName}}
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

[[{{getCampaignHomeNote @importSettings}}]] | [[{{getCampaignAtlasNote @importSettings}}]]

%% During the import process, much of the data for the Leaflet fields should have been pulled in from the JSON. You will need to update the defaultZoom and (maybe) the coordinates values, but it should be pretty close - good enough to get a start with it. The goal is to cut down on the amount of manual effort you need to go through to pull your data in from the FMG JSON %% 

> [!metadata|map]- {{name}} Religions Map
> ```leaflet
> id: Religion-{{name}}
> image: [[{{@importDataRoot.info.mapName}} Religions World Map.svg]]
> bounds: 
> - [0,0]
> - [{{@importDataRoot.info.mapHeight}},{{@importDataRoot.info.mapWidth}}]
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
> <div style="width: 250px; height: 50px; background-color: {{color}}; display: flex; justify-content: center; align-items: center; font-size: 24px; color: {{color}};">▮</div>
> The area shown in the color above is the reach of {{religionName}}


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
[[{{getCampaignHomeNote @importSettings}}]] | [[{{getCampaignAtlasNote @importSettings}}]]
{{/if}}
{{#if (eq @importSettings.topField "")}}
---
alias:
campaign: {{@importDataRoot.info.thisCampaign}}
created: {{getDateTimestamp @importSettings}}
cssclass: wider
tags: 
- linked-atlas
- {{@importDataRoot.info.thisCampaignShortCode}}
- {{@importDataRoot.info.mapName}}
WBProcess: FALSE
world: {{@importDataRoot.info.mapName}}
---

# `=this.campaign` Linked Atlas
[[{{getCampaignHomeNote @importSettings}}]] | [[{{@importDataRoot.info.thisCampaign}}-Simple Atlas]]

**(Edit this page in source mode to see comments about some manual edits that you may need to perform after the import is completed.)**

 %% Feel free to delete or comment the line above if you wish. See comments below for editing instructions. Use `find` to search for double percentage characters to find each of the comment sections. %%

%% This Leaflet map block is created out of the elements added to the JSON file before import %%

> [!metadata|map]+ {{name}} World Map
> ```leaflet
> id: State-{{name}}
> image: [[{{@importDataRoot.info.mapName}} World Map.svg]]
> bounds: 
> - [0,0]
> - [{{@importDataRoot.info.mapHeight}},{{@importDataRoot.info.mapWidth}}]
> coordinates: [{{divide @importDataRoot.info.mapHeight 2}},{{divide @importDataRoot.info.mapWidth 2}}]
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
> [Link to {{name}} on FMG Map]({{@importDataRoot.info.mapDropboxFMGLink}})

%% If you created a Dropbox Link to your FMG map, you can save that into the Modded JSON file and it will appear in the link above. %%

# States

%% The "Neutral" item doesn't have a Capital because it is an unorganized territory. If there is a significant Burg or location in the Neutral territory, you can link to its note where the empty square brackets are.%%

| ID | State | Capital |
| -- | ----- | ------- |
{{#each pack.states}}
| {{i}} | [[{{../info.thisCampaignPath}}/05-Atlas/States/{{i}}-{{name}}/{{name}}\|{{name}}]] | [[{{getBurgName capital ../pack.burgs}}]] |
{{/each}}

# Provinces

%% The Neutral peoples of this world have no State, hence the empty field. Also, any Capital fields that contain `[[]]` mean that that province does not have a Provincial Capital.

%%

| ID  | Province | Capital | State |
| --- | -------- | --------- | ----- |
{{#each pack.provinces}}
| {{i}} | [[{{../info.thisCampaignPath}}/05-Atlas/States/{{state}}-{{getStateName state ../pack/states}}/{{i}}-{{fullName}}/{{fullName}}\|{{fullName}}]] | [[{{getBurgName burg ../pack.burgs}}]] | [[{{../info.thisCampaignPath}}/05-Atlas/States/{{state}}-{{getStateName state ../pack/states}}/{{getStateName state ../pack.states}}\|{{getStateName state ../pack.states}}]] |
{{/each}}

# Burgs

| ID  | Name | Population | State | Province |
| --- | ---- | ---------- | ----- | -------- |
{{#each pack.burgs}}
| {{i}} | [[{{../info.thisCampaignPath}}/05-Atlas/States/{{state}}-{{getStateName state ../pack/states}}/{{getProvinceIdFromCell cell ../pack.cells}}-{{burgProvinceLookup cell ../pack.cells ../pack.provinces}}/{{name}}\|{{name}}]] | {{calcPopulation population ../settings.populationRate}} | [[{{../info.thisCampaignPath}}/05-Atlas/States/{{state}}-{{getStateName state ../pack/states}}/{{getStateName state ../pack.states}}\|{{getStateName state ../pack.states}}]] | [[{{../info.thisCampaignPath}}/05-Atlas/States/{{state}}-{{getStateName state ../pack/states}}/{{getProvinceIdFromCell cell ../pack.cells}}-{{burgProvinceLookup cell ../pack.cells ../pack.provinces}}/{{burgProvinceLookup cell ../pack.cells ../pack.provinces}}\|{{burgProvinceLookup cell ../pack.cells ../pack.provinces}}]] |
{{/each}}

# Diplomacy

%% The entries on the first line of this table are items related to the wars stories of this world. You can extract them and refactor those cells to access those element in a more useful way. Eventually, we'd like to figure out how those elements are used and refactor it in a similar fashion to how it use in a FMG map. %%

| STATES {{#each pack.states}}| {{name}} {{/each}}|
| - | - {{#each pack.states}}| - {{/each}}|
{{#each pack.states}}| {{name}} {{#each diplomacy}}| {{this}} {{/each}}|
{{/each}}

# Cultures

%% The Wildlands have no culture because they are not organized into any kind of substantial societal structure. Feel free to construct sub-groups or animal societies on the Wildlands note to flesh out the non-traditional societal aspects of this world. %%

| ID  | Name | Code | Type |
| --- | ---- | -----| ---- |
{{#each pack.cultures}}
| {{i}} | [[{{../info.thisCampaignPath}}/05-Atlas/Cultures/{{name}}\|{{name}}]] | {{code}} | {{type}} |
{{/each}}

# Religions

%% The Wildlands have no organized religion but, again feel free to make note of non-traditional spiritual practices that exist in the lands beyond traditional cultures and societies. 

Also, Religions with "Unknown" Cultures are older religions that may not have many adherents or followers but are the parent religions to others.%%

| ID  | Name | Code | Type | Form | Culture | Deity |
| --- | ---- | -----| ---- | ---- | ------- | ----- |
{{#each pack.religions}}
| {{i}} | [[{{../info.thisCampaignPath}}/05-Atlas/Religions/{{name}}\|{{name}}]] | {{code}} | {{type}} | {{form}} | [[{{../info.thisCampaignPath}}/05-Atlas/Cultures/{{getCultureName i ../pack.cultures}}\|{{getCultureName i ../pack.cultures}}]] | {{deity}} |
{{/each}}

{{/if}}