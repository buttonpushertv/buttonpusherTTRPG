---
alert: 0.61
aliases: 
- Kapech
area: 1,332,369
burgs: 50
campaign: Escape from the Eternal Throne
capitalName: Dorogoga
capitalFile: 01-Campaigns/Escape from the Eternal Throne/05-Atlas/Torcosia/States/Kapech/Provinces/Dubkia County/Burgs/Dorogoga
center: 5471
color: #8cbbb7
created: 2025-11-07-22:18
cssclasses: sixty-pct-width
culture: Slovan
emblem: Torcosia Emblem Tsardom of Kapech.png
expansionism: 3.8
fileName: _Tsardom of Kapech-12
form: Monarchy
formName: Tsardom
fullName: Tsardom of Kapech
id: 12
mapName: Torcosia
name: Kapech
nameID: Kapech-12
neighbors:
- Turk
- Vuzerlyurt
- Telyilia
- Eschbrinia
- Neutrals
pronounced:
provinces:
- Dubkia County
- Vria Shire
- Ternozelsk Seneschalty
- Titin Shire
- Rshia County
- Izhok County
- Bryan County
- Dubk Seneschalty
- Vyhov Seneschalty
- Meres County
- Pronshe County
- Bered County
- Turnikia Territory
totalPopulation: 5,356,235
religion: Delilno Cult
rulers:
rural: 4,960,536
shortDescription:
urban: 395,699
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

> [!metadata|map]+ Kapech Map
> ```leaflet
> id: State-Kapech
> image: [[Torcosia World Map.svg]]
> bounds:
> - [0,0]
> - [1294,2560]
> coordinates: [442.000,1835.000]
> height: 600px
> width: 100%
> minZoom: -3
> maxZoom: 5
> defaultZoom: .5
> zoomDelta: 0.25
> unit: mi
> scale: 3
> darkMode: false
> marker: capital,277.530,1908.980,[[]],Kapech Capital
> ```
> [Link to Kapech on FMG Map](https://azgaar.github.io/Fantasy-Map-Generator/?maplink=https://dl.dropboxusercontent.com/scl/fi/3c12q0t9xwt4csjxms7gl/Torcosia-2025-09-03-19-29.map?rlkey=1bbb807rrcdrl7pj6p5h9qu93&dl=0&scale=3&x=1907.98&y=1017.47)

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
>> ![[Torcosia Emblem Tsardom of Kapech.png]]
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
| Vuzerlyurt Campaign | 772 | 779 |
| Lubechian Rebellion | 834 | 837 |
| Turkan Intervention | 911 | 921 |
| Vobylese Campaign | 939 | 943 |
| Eschbrinian War | 956 | 961 |

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
> FROM #Burg and "01-Campaigns/Escape from the Eternal Throne/Torcosia/05-Atlas/States/Kapech"
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
> | ⚔️ | 1st (Vria) Regiment | 1426 | 743 | 821 | 12 |  | 3002 |
> 
> | ⚔️ | 2nd (Bered) Regiment | 1249 | 783 | 554 | 11 |  | 2597 |
> 
> | ⚔️ | 3rd (Izhok) Regiment | 1058 | 539 | 537 | 9 |  | 2143 |
> 
> | ⚔️ | 4th (Meres) Regiment | 866 | 480 | 632 | 11 |  | 1989 |
> 
> | ⚔️ | 5th (Ternozelsk) Regiment | 951 | 552 | 410 | 11 |  | 1924 |
> 
> | ⚔️ | 6th (Bryan) Regiment | 809 | 484 | 411 | 6 |  | 1710 |
> 
> | ⚔️ | 7th (Titin) Regiment | 530 | 379 | 191 | 6 |  | 1106 |
> 
> | ⚔️ | 8th (Vyhov) Regiment | 429 | 242 | 381 | 4 |  | 1056 |
> 

---

[[01-Campaigns/Escape from the Eternal Throne/Escape from the Eternal Throne Home|Escape from the Eternal Throne Home]] | [[01-Campaigns/Escape from the Eternal Throne/05-Atlas/Torcosia/Torcosia-Linked Atlas|Torcosia-Linked Atlas]] | Capital: `=link(this.capitalFile,this.capitalName)`