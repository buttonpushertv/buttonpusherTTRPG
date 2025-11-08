---
alert: 3.75
aliases: 
- Gorgania
area: 798,795
burgs: 40
campaign: Escape from the Eternal Throne
capitalName: Gorgan
capitalFile: 01-Campaigns/Escape from the Eternal Throne/05-Atlas/Torcosia/States/Gorgania/Provinces/Gorgan Deanery/Burgs/Gorgan
center: 535
color: #eab2c2
created: 2025-11-07-22:18
cssclasses: sixty-pct-width
culture: Elladan
emblem: Torcosia Emblem Patriarchate of Gorgania.png
expansionism: 5.1
fileName: _Patriarchate of Gorgania-10
form: Theocracy
formName: Patriarchate
fullName: Patriarchate of Gorgania
id: 10
mapName: Torcosia
name: Gorgania
nameID: Gorgania-10
neighbors:
- Piniacia
- Pseikon
- Turk
- Tydolisia
- Rifsosia
pronounced:
provinces:
- Gorgan Deanery
- Celevigia Deanery
- Giucania Deanery
- Valvicerelvi Deanery
- Tempia Deanery
- Pyrmia Deanery
- Grottero Deanery
- Iarathory Parish
- Farvianoro Deanery
- Spervo Deanery
- Wiganland Territory
- Dipomisia Island
totalPopulation: 3,757,743
religion: Toporicos Church
rulers:
rural: 3,376,948
shortDescription:
urban: 380,795
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

> [!metadata|map]+ Gorgania Map
> ```leaflet
> id: State-Gorgania
> image: [[Torcosia World Map.svg]]
> bounds:
> - [0,0]
> - [1294,2560]
> coordinates: [851.000,1161.000]
> height: 600px
> width: 100%
> minZoom: -3
> maxZoom: 5
> defaultZoom: .5
> zoomDelta: 0.25
> unit: mi
> scale: 3
> darkMode: false
> marker: capital,951.700,850.000,[[]],Gorgania Capital
> ```
> [Link to Gorgania on FMG Map](https://azgaar.github.io/Fantasy-Map-Generator/?maplink=https://dl.dropboxusercontent.com/scl/fi/3c12q0t9xwt4csjxms7gl/Torcosia-2025-09-03-19-29.map?rlkey=1bbb807rrcdrl7pj6p5h9qu93&dl=0&scale=3&x=850.08&y=347.92)

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
>> ![[Torcosia Emblem Patriarchate of Gorgania.png]]
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
| Pseikon Crusade | 763 | 764 |
| Tydolisian Invasion | 948 | 949 |
| Rifsosian Conquest | 948 | 951 |
| Piniacian Invasion | 956 | 961 |
| Turkan Campaign | 956 | 957 |
| Rifsosia-Gorganian War | 959 |  |

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
> FROM #Burg and "01-Campaigns/Escape from the Eternal Throne/Torcosia/05-Atlas/States/Gorgania"
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
> | 🏹 | 1st (Gorgan) Regiment | 2336 | 2915 | 376 | 51 |  | 5678 |
> 
> | ⚔️ | 2nd (Gorgan) Regiment | 2014 | 1267 | 838 | 9 |  | 4128 |
> 
> | ⚔️ | 3rd (Tempia) Regiment | 1873 | 912 | 966 | 2 |  | 3753 |
> 
> | ⚔️ | 4th (Tempia) Regiment | 1660 | 850 | 776 | 1 |  | 3287 |
> 
> | ⚔️ | 5th (Pyrmia) Regiment | 1527 | 1077 | 587 | 14 |  | 3205 |
> 
> | ⚔️ | 6th (Tempia) Regiment | 1136 | 712 | 799 | 38 |  | 2685 |
> 
> | 🏹 | 7th (Iarathory) Regiment | 1095 | 1332 | 189 | 8 |  | 2624 |
> 
> | ⚔️ | 8th (Spervo) Regiment | 1195 | 660 | 520 | 16 |  | 2391 |
> 
> | 🏹 | 9th (Giucania) Regiment | 951 | 959 | 239 | 14 |  | 2163 |
> 
> | 🏹 | 10th (Gorgan) Regiment | 737 | 999 | 89 | 52 |  | 1877 |
> 
> | ⚔️ | 11th (Pyrmia) Regiment | 877 | 509 | 365 | 25 |  | 1776 |
> 
> | 🐴 | 12th (Tempia) Regiment | 560 | 342 | 595 | 10 |  | 1507 |
> 
> | 🏹 | 13th (Wiganland) Regiment | 43 | 46 | 3 |  |  | 92 |
> 
> | 🌊 | 1st Fleet |  |  |  |  | 22 | 22 |
> 
> | 🌊 | 2nd Fleet |  |  |  |  | 2 | 2 |
> 
> | 🌊 | 3rd Fleet |  |  |  |  | 1 | 1 |
> 
> | 🌊 | 4th Fleet |  |  |  |  | 1 | 1 |
> 

---

[[01-Campaigns/Escape from the Eternal Throne/Escape from the Eternal Throne Home|Escape from the Eternal Throne Home]] | [[01-Campaigns/Escape from the Eternal Throne/05-Atlas/Torcosia/Torcosia-Linked Atlas|Torcosia-Linked Atlas]] | Capital: `=link(this.capitalFile,this.capitalName)`