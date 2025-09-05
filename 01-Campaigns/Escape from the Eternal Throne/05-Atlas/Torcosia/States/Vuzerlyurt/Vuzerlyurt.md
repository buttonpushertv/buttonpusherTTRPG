---
alert: 3.08
aliases: 
- Vuzerlyurt
area: 596,250
burgs: 28
campaign: Escape from the Eternal Throne
capitalName: Kut
capitalFile: 01-Campaigns/Escape from the Eternal Throne/05-Atlas/Torcosia/States/Vuzerlyurt/Provinces/Kut County/Burgs/Kut
center: 1259
color: #f88c7e
created: 2025-09-05-10:13
cssclasses: sixty-pct-width
culture: Turchian
emblem: Torcosia Emblem Beylik of Vuzerlyurt.png
expansionism: 3.6
fileName: _Beylik of Vuzerlyurt-18
form: Monarchy
formName: Beylik
fullName: Beylik of Vuzerlyurt
id: 18
mapName: Torcosia
name: Vuzerlyurt
nameID: Vuzerlyurt-18
neighbors:
- Valkeama
- Turk
- Jarpanta
- Telyilia
- Kapech
pronounced:
provinces:
- Kut County
- Akarnyurt Margrave
- Ekinyurt Earldom
- Baymir County
- Eniztyurt County
- Anekereno Earldom
- Ykut County
totalPopulation: 2,524,213
religion: Turchian Beliefs
rulers:
rural: 2,313,967
shortDescription:
urban: 210,246
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

> [!metadata|map]+ Vuzerlyurt Map
> ```leaflet
> id: State-Vuzerlyurt
> image: [[Torcosia World Map.svg]]
> bounds:
> - [0,0]
> - [1294,2560]
> coordinates: [790.000,1810.000]
> height: 600px
> width: 100%
> minZoom: -3
> maxZoom: 5
> defaultZoom: .5
> zoomDelta: 0.25
> unit: mi
> scale: 3
> darkMode: false
> marker: capital,849.850,1743.580,[[]],Vuzerlyurt Capital
> ```
> [Link to Vuzerlyurt on FMG Map](https://azgaar.github.io/Fantasy-Map-Generator/?maplink=https://dl.dropboxusercontent.com/scl/fi/3c12q0t9xwt4csjxms7gl/Torcosia-2025-09-03-19-29.map?rlkey=1bbb807rrcdrl7pj6p5h9qu93&dl=0&scale=3&x=1742.58&y=443.15)

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
>> ![[Torcosia Emblem Beylik of Vuzerlyurt.png]]
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
| Jarpantan War | 707 | 712 |
| Turk Invasion | 797 | 803 |
| Telyilian Intervention | 869 | 874 |
| Valkeaman Conquest | 874 | 875 |
| Devrian Conquest | 889 | 901 |

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
> FROM #Burg and "01-Campaigns/Escape from the Eternal Throne/Torcosia/05-Atlas/States/Vuzerlyurt"
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
> | ⚔️ | 1st (Akarnyurt) Regiment | 2730 | 1467 | 1215 | 45 |  | 5457 |
> 
> | ⚔️ | 2nd (Kut) Regiment | 2578 | 1388 | 1150 | 34 |  | 5150 |
> 
> | ⚔️ | 3rd (Baymir) Regiment | 2384 | 1185 | 1124 | 11 |  | 4704 |
> 
> | ⚔️ | 4th (Ykut) Regiment | 1703 | 1405 | 567 | 16 |  | 3691 |
> 
> | ⚔️ | 5th (Kut) Regiment | 1714 | 860 | 913 | 7 |  | 3494 |
> 
> | ⚔️ | 6th (Anekereno) Regiment | 1452 | 1358 | 410 | 27 |  | 3247 |
> 
> | 🏹 | 7th (Anekereno) Regiment | 1243 | 1578 | 192 | 38 |  | 3051 |
> 
> | ⚔️ | 8th (Ekinyurt) Regiment | 1045 | 1013 | 290 | 22 |  | 2370 |
> 

---

[[01-Campaigns/Escape from the Eternal Throne/Escape from the Eternal Throne Home|Escape from the Eternal Throne Home]] | [[01-Campaigns/Escape from the Eternal Throne/05-Atlas/Torcosia/Torcosia-Linked Atlas|Torcosia-Linked Atlas]] | Capital: `=link(this.capitalFile,this.capitalName)`