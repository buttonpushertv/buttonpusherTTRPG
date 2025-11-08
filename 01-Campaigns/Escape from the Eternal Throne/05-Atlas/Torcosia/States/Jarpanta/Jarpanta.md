---
alert: 2.46
aliases: 
- Jarpanta
area: 693,873
burgs: 46
campaign: Escape from the Eternal Throne
capitalName: Tus
capitalFile: 01-Campaigns/Escape from the Eternal Throne/05-Atlas/Torcosia/States/Jarpanta/Provinces/Tukvemia Parish/Burgs/Tus
center: 1416
color: #e78ac3
created: 2025-11-07-22:18
cssclasses: sixty-pct-width
culture: Soumi
emblem: Torcosia Emblem Jarpantan Theocracy.png
expansionism: 2.9
fileName: _Jarpantan Theocracy-4
form: Theocracy
formName: Theocracy
fullName: Jarpantan Theocracy
id: 4
mapName: Torcosia
name: Jarpanta
nameID: Jarpanta-4
neighbors:
- Valkeama
- Vuzerlyurt
- Pupunmaa
- Telyilia
pronounced:
provinces:
- Tukvemia Parish
- Bunsey Parish
- Stanydon Parish
- Vakia Parish
- Hirvi Parish
- Sidmin Parish
- Hautiokia Parish
- Kemimamo Parish
- Vaiviesmaa Parish
- Palvajmaa Parish
- Kauma Parish
totalPopulation: 3,503,604
religion: Delilno Cult
rulers:
rural: 3,260,272
shortDescription:
urban: 243,331
tags:
- State
- Torcosia
- efet
templateVersion: 4.4
type: Generic
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

> [!metadata|map]+ Jarpanta Map
> ```leaflet
> id: State-Jarpanta
> image: [[Torcosia World Map.svg]]
> bounds:
> - [0,0]
> - [1294,2560]
> coordinates: [876.000,2106.000]
> height: 600px
> width: 100%
> minZoom: -3
> maxZoom: 5
> defaultZoom: .5
> zoomDelta: 0.25
> unit: mi
> scale: 3
> darkMode: false
> marker: capital,820.940,2143.790,[[]],Jarpanta Capital
> ```
> [Link to Jarpanta on FMG Map](https://azgaar.github.io/Fantasy-Map-Generator/?maplink=https://dl.dropboxusercontent.com/scl/fi/3c12q0t9xwt4csjxms7gl/Torcosia-2025-09-03-19-29.map?rlkey=1bbb807rrcdrl7pj6p5h9qu93&dl=0&scale=3&x=2144.79&y=472.06)

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
>> ![[Torcosia Emblem Jarpantan Theocracy.png]]
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
| Valkeaman War | 797 | 798 |
| Pupunmaan Expedition | 815 | 816 |
| Vuzerlyurt Conquest | 934 | 935 |
| Telyilian Conquest | 956 | 961 |
| Jarpanta-Pupunmian War | 960 |  |

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
> FROM #Burg and "01-Campaigns/Escape from the Eternal Throne/Torcosia/05-Atlas/States/Jarpanta"
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
> | ⚔️ | 1st (Tukvemia) Regiment | 2073 | 1931 | 636 | 12 |  | 4652 |
> 
> | ⚔️ | 2nd (Vakia) Regiment | 1603 | 1204 | 620 | 21 |  | 3448 |
> 
> | ⚔️ | 3rd (Palvajmaa) Regiment | 1412 | 1121 | 490 | 11 |  | 3034 |
> 
> | 🏹 | 4th (Hirvi) Regiment | 1139 | 1383 | 197 | 9 |  | 2728 |
> 
> | ⚔️ | 5th (Kauma) Regiment | 1256 | 767 | 536 | 2 |  | 2561 |
> 
> | 🏹 | 6th (Tukvemia) Regiment | 1060 | 1149 | 246 | 17 |  | 2472 |
> 
> | ⚔️ | 7th (Hautiokia) Regiment | 1116 | 867 | 388 | 22 |  | 2393 |
> 
> | 🏹 | 8th (Hirvi) Regiment | 883 | 943 | 205 | 16 |  | 2047 |
> 
> | ⚔️ | 9th (Vaiviesmaa) Regiment | 569 | 433 | 209 |  |  | 1211 |
> 
> | 🌊 | 1st Fleet |  |  |  |  | 2 | 2 |
> 
> | 🌊 | 2nd Fleet |  |  |  |  | 1 | 1 |
> 
> | 🌊 | 3rd Fleet |  |  |  |  | 1 | 1 |
> 
> | 🌊 | 4th Fleet |  |  |  |  | 1 | 1 |
> 

---

[[01-Campaigns/Escape from the Eternal Throne/Escape from the Eternal Throne Home|Escape from the Eternal Throne Home]] | [[01-Campaigns/Escape from the Eternal Throne/05-Atlas/Torcosia/Torcosia-Linked Atlas|Torcosia-Linked Atlas]] | Capital: `=link(this.capitalFile,this.capitalName)`