---
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

[[{{@importDataRoot.importInfo.thisCampaignPath}}/{{@importDataRoot.importInfo.thisCampaign}} Home|{{@importDataRoot.importInfo.thisCampaign}} Home]] | [[{{@importDataRoot.importInfo.thisCampaignPath}}/05-Atlas/{{@importDataRoot.info.mapName}}/{{@importDataRoot.info.mapName}}-Linked Atlas|{{@importDataRoot.info.mapName}}-Linked Atlas]] | Capital: `=link(this.capitalFile,this.capitalName)`
