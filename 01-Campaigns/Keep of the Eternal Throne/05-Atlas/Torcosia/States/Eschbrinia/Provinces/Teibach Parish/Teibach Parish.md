---
aliases:
- Teibach
campaign: Keep of the Eternal Throne
color: #ffa56a
created: 2026-06-20-23:49
cssclasses: sixty-pct-width
emblem: Torcosia Emblem Teibach Parish.png
formName: Parish
fullName: Teibach Parish
pulledName: Teibach Parish
id: 67
name: Teibach
nameID: Teibach-67
mapName: Torcosia
pronounced:
provincialCapital: Zauernheim
capitalFile: 01-Campaigns/Keep of the Eternal Throne/05-Atlas/Torcosia/States/Eschbrinia/Provinces/Teibach Parish/Burgs/Zauernheim
religion: Eschbrinese Deities
rulers:
shortDescription:
state: Eschbrinia
stateNotePath: "01-Campaigns/Keep of the Eternal Throne/05-Atlas/Torcosia/States/Eschbrinia/Eschbrinia"
tags:
- Province
- koet
- Torcosia
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

[[01-Campaigns/Keep of the Eternal Throne/Keep of the Eternal Throne Home|Keep of the Eternal Throne Home]] | [[01-Campaigns/Keep of the Eternal Throne/05-Atlas/Torcosia/Torcosia-Linked Atlas|Torcosia-Linked Atlas]] | State: `=link(this.stateNotePath,this.stateName)`

%% During the import process, much of the data for the Leaflet fields should have been pulled in from the JSON. You will need to update the defaultZoom and (maybe) the coordinates values, but it should be pretty close - good enough to get a start with it. The goal is to cut down on the amount of manual effort you need to go through to pull your data in from the FMG JSON %%

%%LeafletMapTOP%%

> [!metadata|map]+ Teibach - Province World Map
> ```leaflet
> id: Province-Teibach
> image: [[Torcosia Provinces World Map.svg]]
> bounds:
> - [0,0]
> - [1294,2560]
> coordinates: [320.190,1584.410]
> height: 600px
> width: 100%
> minZoom: -3
> maxZoom: 5
> defaultZoom: .5
> zoomDelta: 0.25
> unit: mi
> scale: 3
> darkMode: false
> marker: prov_capital,320.190,1584.410,[[01-Campaigns/Keep of the Eternal Throne/05-Atlas/Torcosia/States/Eschbrinia/Provinces/Teibach Parish/Burgs/Zauernheim]],Teibach Provincial Capital
> ```
>  [Link to Teibach Parish on FMG Map](https://azgaar.github.io/Fantasy-Map-Generator/?maplink=https://dl.dropboxusercontent.com/scl/fi/3c12q0t9xwt4csjxms7gl/Torcosia-2025-09-03-19-29.map?rlkey=1bbb807rrcdrl7pj6p5h9qu93&dl=0&scale=3&x=1584.41&y=973.81)

%%LeafletMapTAIL%%

%% All the info in this 'infobox' will appear in the panel to the right. Most of these values are pulled from the metadata in the properties above. %%

> [!infobox]
> ![[Torcosia Emblem Teibach Parish.png]]
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
> FROM #Burg and "01-Campaigns/Keep of the Eternal Throne/Torcosia/05-Atlas"
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

[[01-Campaigns/Keep of the Eternal Throne/Keep of the Eternal Throne Home|Keep of the Eternal Throne Home]] | [[01-Campaigns/Keep of the Eternal Throne/05-Atlas/Torcosia/Torcosia-Linked Atlas|Torcosia-Linked Atlas]] | State: `=link(this.stateNotePath,this.stateName)`