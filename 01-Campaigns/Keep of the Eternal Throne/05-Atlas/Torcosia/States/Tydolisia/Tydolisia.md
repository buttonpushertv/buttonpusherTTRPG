---
alert: 1.28
aliases: 
- Tydolisia
area: 980,235
burgs: 36
campaign: Keep of the Eternal Throne
capitalName: Tydolis
capitalFile: 01-Campaigns/Keep of the Eternal Throne/05-Atlas/Torcosia/States/Tydolisia/Provinces/Phaisosia County/Burgs/Tydolis
center: 3225
color: #bbf55d
created: 2026-06-20-23:49
cssclasses: sixty-pct-width
culture: Elladan
emblem: Torcosia Emblem Kingdom of Tydolisia.png
expansionism: 3.8
fileName: _Kingdom of Tydolisia-14
form: Monarchy
formName: Kingdom
fullName: Kingdom of Tydolisia
id: 14
mapName: Torcosia
name: Tydolisia
nameID: Tydolisia-14
neighbors:
- Huecavia
- Gorgania
- Piniacia
- Lorumia
- Rifsosia
- Baken
pronounced:
provinces:
- Phaisosia County
- Encszentgia County
- Fotymarosia County
- Ablos County
- Malastarc County
- Teglas County
- Theododo County
- Piraly Landgrave
- Modunumpe Landgrave
- Zalintnokia Territory
totalPopulation: 2,961,053
religion: Toporicos Church
rulers:
rural: 2,786,503
shortDescription:
treasury: 717.29
salesTax: 0.16
pollTax: 0.18
urban: 174,550
tags:
- State
- Torcosia
- koet
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

[[01-Campaigns/Keep of the Eternal Throne/Keep of the Eternal Throne Home|Keep of the Eternal Throne Home]] | [[01-Campaigns/Keep of the Eternal Throne/05-Atlas/Torcosia/Torcosia-Linked Atlas|Torcosia-Linked Atlas]] | Capital: `=link(this.capitalFile,this.capitalName)`

%% During the import process, much of the data for the Leaflet fields should have been pulled in from the JSON. You will need to update the defaultZoom and (maybe) the coordinates values, but it should be pretty close - good enough to get a start with it. The goal is to cut down on the amount of manual effort you need to go through to pull your data in from the FMG JSON %%

%%LeafletMapTOP%%

> [!metadata|map]+ Tydolisia Map
> ```leaflet
> id: State-Tydolisia
> image: [[Torcosia World Map.svg]]
> bounds:
> - [0,0]
> - [1294,2560]
> coordinates: [632.000,464.000]
> height: 600px
> width: 100%
> minZoom: -3
> maxZoom: 5
> defaultZoom: .5
> zoomDelta: 0.25
> unit: mi
> scale: 3
> darkMode: false
> marker: capital,584.400,695.290,[[]],Tydolisia Capital
> ```
> [Link to Tydolisia on FMG Map](https://azgaar.github.io/Fantasy-Map-Generator/?maplink=https://dl.dropboxusercontent.com/scl/fi/3c12q0t9xwt4csjxms7gl/Torcosia-2025-09-03-19-29.map?rlkey=1bbb807rrcdrl7pj6p5h9qu93&dl=0&scale=3&x=691.3&y=720.9)

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
>> ![[Torcosia Emblem Kingdom of Tydolisia.png]]
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
> **Treasury** | `=this.treasury` |
> **Sales Tax Rate** | `=this.salesTax` |
> **Poll Tax Rate** | `=this.pollTax` |
> **Dominant Culture** | `=link(this.culture)` |
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
| Piniacian War | 722 | 725 |
| Gorganian Rebellion | 812 | 816 |
| Rifsosian Crusade | 884 | 893 |
| Huecavian War | 956 | 959 |
| Lorumian Crusade | 956 | 961 |
| Bakenese Conquest | 956 | 961 |

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
> FROM #Burg and "01-Campaigns/Keep of the Eternal Throne/Torcosia/05-Atlas/States/Tydolisia"
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
> | 👑 | 1st (Phaisosia) Regiment | 1492 | 862 | 780 | 13 |  | 3147 |
> 
> | ⚔️ | 2nd (Phaisosia) Regiment | 1337 | 670 | 776 | 5 |  | 2788 |
> 
> | ⚔️ | 3rd (Ablos) Regiment | 1194 | 626 | 555 | 15 |  | 2390 |
> 
> | ⚔️ | 4th (Malastarc) Regiment | 663 | 384 | 523 | 8 |  | 1578 |
> 
> | ⚔️ | 5th (Malastarc) Regiment | 408 | 266 | 192 | 1 |  | 867 |
> 
> | ⚔️ | 6th (Ablos) Regiment | 137 | 134 | 37 | 1 |  | 309 |
> 
> | 🌊 | 1st Fleet |  |  |  |  | 1 | 1 |
> 
> | 🌊 | 2nd Fleet |  |  |  |  | 1 | 1 |
> 

---

[[01-Campaigns/Keep of the Eternal Throne/Keep of the Eternal Throne Home|Keep of the Eternal Throne Home]] | [[01-Campaigns/Keep of the Eternal Throne/05-Atlas/Torcosia/Torcosia-Linked Atlas|Torcosia-Linked Atlas]] | Capital: `=link(this.capitalFile,this.capitalName)`