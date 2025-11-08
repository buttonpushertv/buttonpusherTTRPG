---
alert: 1.86
aliases: 
- Rifsosia
area: 1,059,228
burgs: 52
campaign: Escape from the Eternal Throne
capitalName: Lenene
capitalFile: 01-Campaigns/Escape from the Eternal Throne/05-Atlas/Torcosia/States/Rifsosia/Provinces/Sormelahia Margrave/Burgs/Lenene
center: 4637
color: #ffcf51
created: 2025-11-07-22:18
cssclasses: sixty-pct-width
culture: Norse
emblem: Torcosia Emblem Kingdom of Rifsosia.png
expansionism: 5.3
fileName: _Kingdom of Rifsosia-11
form: Monarchy
formName: Kingdom
fullName: Kingdom of Rifsosia
id: 11
mapName: Torcosia
name: Rifsosia
nameID: Rifsosia-11
neighbors:
- Piniacia
- Gorgania
- Turk
- Tydolisia
- Eschbrinia
- Baken
pronounced:
provinces:
- Sormelahia Margrave
- Drarasland Barony
- Capranolia Margrave
- Sorneske Margrave
- Neroyrika Margrave
- Monsa County
- Greseting Margrave
- Ocieno County
- Kjelmoenha County
- Lopsber County
- Alfsos County
- Pespo Margrave
- Aeleagiosia Island
totalPopulation: 4,465,841
religion: Skjerdalism
rulers:
rural: 4,065,961
shortDescription:
urban: 399,879
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

> [!metadata|map]+ Rifsosia Map
> ```leaflet
> id: State-Rifsosia
> image: [[Torcosia World Map.svg]]
> bounds:
> - [0,0]
> - [1294,2560]
> coordinates: [536.000,1191.000]
> height: 600px
> width: 100%
> minZoom: -3
> maxZoom: 5
> defaultZoom: .5
> zoomDelta: 0.25
> unit: mi
> scale: 3
> darkMode: false
> marker: capital,404.200,1037.040,[[]],Rifsosia Capital
> ```
> [Link to Rifsosia on FMG Map](https://azgaar.github.io/Fantasy-Map-Generator/?maplink=https://dl.dropboxusercontent.com/scl/fi/3c12q0t9xwt4csjxms7gl/Torcosia-2025-09-03-19-29.map?rlkey=1bbb807rrcdrl7pj6p5h9qu93&dl=0&scale=3&x=1037.7&y=895.5)

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
>> ![[Torcosia Emblem Kingdom of Rifsosia.png]]
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
| Tydolisian Campaign | 777 | 786 |
| Hnifsan Campaign | 812 | 813 |
| Turkan Conquest | 816 | 826 |
| Bakenese Conquest | 878 | 879 |
| Gorganian Campaign | 912 | 916 |
| Slevever Campaign | 956 | 961 |
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
> FROM #Burg and "01-Campaigns/Escape from the Eternal Throne/Torcosia/05-Atlas/States/Rifsosia"
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
> | ⚔️ | 1st (Greseting) Regiment | 2211 | 1303 | 662 | 23 |  | 4199 |
> 
> | ⚔️ | 2nd (Greseting) Regiment | 1637 | 1416 | 360 | 35 |  | 3448 |
> 
> | ⚔️ | 3rd (Kjelmoenha) Regiment | 1545 | 791 | 498 | 17 |  | 2851 |
> 
> | 🏹 | 4th (Drarasland) Regiment | 1169 | 1418 | 145 | 44 |  | 2776 |
> 
> | ⚔️ | 5th (Greseting) Regiment | 1300 | 1011 | 320 | 12 |  | 2643 |
> 
> | ⚔️ | 6th (Capranolia) Regiment | 1170 | 904 | 315 | 19 |  | 2408 |
> 
> | ⚔️ | 7th (Sorneske) Regiment | 995 | 586 | 296 | 13 |  | 1890 |
> 
> | 👑 | 8th (Sormelahia) Regiment | 605 | 774 | 63 | 22 |  | 1464 |
> 
> | ⚔️ | 9th (Ocieno) Regiment | 308 | 167 | 106 |  |  | 581 |
> 
> | 🌊 | 1st Fleet |  |  |  |  | 19 | 19 |
> 
> | 🌊 | 2nd Fleet |  |  |  |  | 9 | 9 |
> 
> | 🌊 | 3rd Fleet |  |  |  |  | 3 | 3 |
> 
> | 🌊 | 4th Fleet |  |  |  |  | 2 | 2 |
> 
> | 🌊 | 5th Fleet |  |  |  |  | 2 | 2 |
> 
> | 🌊 | 6th Fleet |  |  |  |  | 1 | 1 |
> 
> | 🌊 | 7th Fleet |  |  |  |  | 1 | 1 |
> 
> | 🌊 | 8th Fleet |  |  |  |  | 1 | 1 |
> 

---

[[01-Campaigns/Escape from the Eternal Throne/Escape from the Eternal Throne Home|Escape from the Eternal Throne Home]] | [[01-Campaigns/Escape from the Eternal Throne/05-Atlas/Torcosia/Torcosia-Linked Atlas|Torcosia-Linked Atlas]] | Capital: `=link(this.capitalFile,this.capitalName)`