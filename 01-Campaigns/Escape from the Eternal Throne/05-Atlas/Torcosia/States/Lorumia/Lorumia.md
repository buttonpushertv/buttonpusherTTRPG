---
alert: 1.83
aliases: 
- Lorumia
area: 978,507
burgs: 38
campaign: Escape from the Eternal Throne
capitalName: Nigripi
capitalFile: 01-Campaigns/Escape from the Eternal Throne/05-Atlas/Torcosia/States/Lorumia/Provinces/Nigripi Province/Burgs/Nigripi
center: 5509
color: #8da0cb
created: 2025-11-07-22:18
cssclasses: sixty-pct-width
culture: Romian
emblem: Torcosia Emblem Republic of Lorumia.png
expansionism: 4.8
fileName: _Republic of Lorumia-3
form: Republic
formName: Republic
fullName: Republic of Lorumia
id: 3
mapName: Torcosia
name: Lorumia
nameID: Lorumia-3
neighbors:
- Huecavia
- Tydolisia
- Baken
pronounced:
provinces:
- Nigripi Province
- Theliuscum Province
- Naiscavumia Department
- Vinium Province
- Dubriniumia Province
- Bolina Province
- Vicacalebu Province
- Raususia Province
- Parianisia Province
- Jaszsolca Territory
- Olmevil Territory
- Zsampapia Land
- Castesia Dependency
totalPopulation: 3,388,496
religion: Romian Druidism
rulers:
rural: 3,114,303
shortDescription:
urban: 274,192
tags:
- State
- Torcosia
- efet
templateVersion: 4.4
type: Lake
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

[[01-Campaigns/Escape from the Eternal Throne/Escape from the Eternal Throne Home|Escape from the Eternal Throne Home]] | [[01-Campaigns/Escape from the Eternal Throne/05-Atlas/Torcosia/Torcosia-Linked Atlas|Torcosia-Linked Atlas]] | Capital: `=link(this.capitalFile,this.capitalName)`

%% During the import process, much of the data for the Leaflet fields should have been pulled in from the JSON. You will need to update the defaultZoom and (maybe) the coordinates values, but it should be pretty close - good enough to get a start with it. The goal is to cut down on the amount of manual effort you need to go through to pull your data in from the FMG JSON %%

%%LeafletMapTOP%%

> [!metadata|map]+ Lorumia Map
> ```leaflet
> id: State-Lorumia
> image: [[Torcosia World Map.svg]]
> bounds:
> - [0,0]
> - [1294,2560]
> coordinates: [414.000,413.000]
> height: 600px
> width: 100%
> minZoom: -3
> maxZoom: 5
> defaultZoom: .5
> zoomDelta: 0.25
> unit: mi
> scale: 3
> darkMode: false
> marker: capital,265.380,606.100,[[]],Lorumia Capital
> ```
> [Link to Lorumia on FMG Map](https://azgaar.github.io/Fantasy-Map-Generator/?maplink=https://dl.dropboxusercontent.com/scl/fi/3c12q0t9xwt4csjxms7gl/Torcosia-2025-09-03-19-29.map?rlkey=1bbb807rrcdrl7pj6p5h9qu93&dl=0&scale=3&x=605.1&y=1029.62)

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
>> ![[Torcosia Emblem Republic of Lorumia.png]]
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
| Bakenese War | 779 | 780 |
| Tydolisian Campaign | 782 | 792 |
| Huecavian Rebellion | 918 | 919 |
| Lorumia-Huecavian War | 956 |  |

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
> FROM #Burg and "01-Campaigns/Escape from the Eternal Throne/Torcosia/05-Atlas/States/Lorumia"
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
> 
> | ⚔️ | 1st (Naiscavumia) Regiment | 1729 | 1261 | 462 | 38 |  | 3490 |
> 
> | 🏹 | 2nd (Nigripi) Regiment | 1138 | 1439 | 126 | 35 |  | 2738 |
> 
> | 🏹 | 3rd (Vicacalebu) Regiment | 1157 | 1398 | 142 | 16 |  | 2713 |
> 
> | ⚔️ | 4th (Dubriniumia) Regiment | 1277 | 1100 | 278 | 23 |  | 2678 |
> 
> | ⚔️ | 5th (Naiscavumia) Regiment | 1388 | 760 | 451 | 9 |  | 2608 |
> 
> | ⚔️ | 6th (Bolina) Regiment | 1149 | 961 | 261 | 7 |  | 2378 |
> 
> | ⚔️ | 7th (Theliuscum) Regiment | 1042 | 963 | 283 | 16 |  | 2304 |
> 
> | 🏹 | 8th (Raususia) Regiment | 966 | 1184 | 117 | 10 |  | 2277 |
> 
> | 🏹 | 9th (Parianisia) Regiment | 952 | 1183 | 109 | 19 |  | 2263 |
> 
> | ⚔️ | 10th (Naiscavumia) Regiment | 1099 | 660 | 485 | 4 |  | 2248 |
> 
> | 🌊 | 1st Fleet |  |  |  |  | 10 | 10 |
> 
> | 🌊 | 2nd Fleet |  |  |  |  | 2 | 2 |
> 
> | 🌊 | 3rd Fleet |  |  |  |  | 2 | 2 |
> 
> | 🌊 | 4th Fleet |  |  |  |  | 1 | 1 |
> 

---

[[01-Campaigns/Escape from the Eternal Throne/Escape from the Eternal Throne Home|Escape from the Eternal Throne Home]] | [[01-Campaigns/Escape from the Eternal Throne/05-Atlas/Torcosia/Torcosia-Linked Atlas|Torcosia-Linked Atlas]] | Capital: `=link(this.capitalFile,this.capitalName)`