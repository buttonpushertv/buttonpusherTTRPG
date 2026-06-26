---
aliases:
- {{name}}
campaign: {{@importDataRoot.importInfo.thisCampaign}}
color: {{color}}
created: {{getDateTimestamp @importSettings}}
cssclasses: sixty-pct-width
emblem: {{@importDataRoot.info.mapName}} Emblem {{fullName}}.png
formName: {{formName}}
fullName: {{fullName}}
{{setvar "nameToPull" (getProvinceName i @importDataRoot.pack.provinces)}}pulledName: {{"nameToPull"}}
id: {{i}}
name: {{name}}
nameID: {{name}}-{{i}}
mapName: {{@importDataRoot.info.mapName}}
pronounced: ""
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

[[{{@importDataRoot.importInfo.thisCampaignPath}}/{{@importDataRoot.importInfo.thisCampaign}} Home|{{@importDataRoot.importInfo.thisCampaign}} Home]] | [[{{@importDataRoot.importInfo.thisCampaignPath}}/05-Atlas/{{@importDataRoot.info.mapName}}/{{@importDataRoot.info.mapName}}-Linked Atlas|{{@importDataRoot.info.mapName}}-Linked Atlas]] | State: `=link(this.stateNotePath,this.stateName)`
