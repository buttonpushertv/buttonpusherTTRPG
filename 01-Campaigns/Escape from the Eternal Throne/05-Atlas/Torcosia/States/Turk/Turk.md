---
alert: 3.18
aliases: 
- Turk
area: 782,073
burgs: 43
campaign: Escape from the Eternal Throne
capitalName: Epepesen
capitalFile: 01-Campaigns/Escape from the Eternal Throne/05-Atlas/Torcosia/States/Turk/Provinces/Epepesen Earldom/Burgs/Epepesen
center: 1253
color: #a6d854
created: 2025-09-05-10:13
cssclasses: sixty-pct-width
culture: Turchian
emblem: Torcosia Emblem Turk Khaganate.png
expansionism: 4.7
fileName: _Turk Khaganate-5
form: Monarchy
formName: Khaganate
fullName: Turk Khaganate
id: 5
mapName: Torcosia
name: Turk
nameID: Turk-5
neighbors:
- Vuzerlyurt
- Gorgania
- Aykutyurt
- Rifsosia
- Eschbrinia
- Kapech
pronounced:
provinces:
- Epepesen Earldom
- Bobakyurt Earldom
- Rigninoia County
- Algesyurt County
- Kozozobaya County
- Dolu County
- Denekibi County
- Castte County
- Marma County
- Erbe County
- New Dolu Colony
- Dezet Land
totalPopulation: 2,901,928
religion: Turchian Beliefs
rulers:
rural: 2,614,666
shortDescription:
urban: 287,261
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

> [!metadata|map]+ Turk Map
> ```leaflet
> id: State-Turk
> image: [[Torcosia World Map.svg]]
> bounds:
> - [0,0]
> - [1294,2560]
> coordinates: [754.000,1596.000]
> height: 600px
> width: 100%
> minZoom: -3
> maxZoom: 5
> defaultZoom: .5
> zoomDelta: 0.25
> unit: mi
> scale: 3
> darkMode: false
> marker: capital,847.430,1615.810,[[]],Turk Capital
> ```
> [Link to Turk on FMG Map](https://azgaar.github.io/Fantasy-Map-Generator/?maplink=https://dl.dropboxusercontent.com/scl/fi/3c12q0t9xwt4csjxms7gl/Torcosia-2025-09-03-19-29.map?rlkey=1bbb807rrcdrl7pj6p5h9qu93&dl=0&scale=3&x=1621.6&y=457.3)

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
>> ![[Torcosia Emblem Turk Khaganate.png]]
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
| Alpkor Campaign | 627 | 630 |
| Vuzerlyurt Invasion | 650 | 655 |
| Eschbrinian Crusade | 738 | 747 |
| Aykutyurt War | 804 | 806 |
| Eyoguzan War | 842 | 856 |
| Gorganian War | 956 | 961 |
| Turk-Aykutyurtian War | 962 |  |

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
> FROM #Burg and "01-Campaigns/Escape from the Eternal Throne/Torcosia/05-Atlas/States/Turk"
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
> | ⚔️ | 1st (Epepesen) Regiment | 2342 | 1219 | 1108 | 27 |  | 4696 |
> 
> | ⚔️ | 2nd (Erbe) Regiment | 2025 | 989 | 962 | 5 |  | 3981 |
> 
> | ⚔️ | 3rd (Erbe) Regiment | 1848 | 1000 | 918 | 29 |  | 3795 |
> 
> | ⚔️ | 4th (Kozozobaya) Regiment | 1657 | 1371 | 548 | 21 |  | 3597 |
> 
> | ⚔️ | 5th (Denekibi) Regiment | 1650 | 975 | 707 | 14 |  | 3346 |
> 
> | 🏹 | 6th (Kozozobaya) Regiment | 1139 | 1435 | 178 | 32 |  | 2784 |
> 
> | ⚔️ | 7th (Algesyurt) Regiment | 1362 | 759 | 638 | 8 |  | 2767 |
> 
> | ⚔️ | 8th (Epepesen) Regiment | 1288 | 954 | 478 | 14 |  | 2734 |
> 
> | 👑 | 9th (Epepesen) Regiment | 1061 | 1073 | 268 | 46 |  | 2448 |
> 
> | ⚔️ | 10th (Denekibi) Regiment | 880 | 554 | 823 | 24 |  | 2281 |
> 
> | ⚔️ | 11th (Marma) Regiment | 700 | 380 | 309 | 9 |  | 1398 |
> 
> | ⚔️ | 12th (Algesyurt) Regiment | 401 | 234 | 165 | 12 |  | 812 |
> 
> | 🌊 | 1st Fleet |  |  |  |  | 6 | 6 |
> 
> | 🌊 | 2nd Fleet |  |  |  |  | 3 | 3 |
> 
> | 🌊 | 3rd Fleet |  |  |  |  | 1 | 1 |
> 
> | 🌊 | 4th Fleet |  |  |  |  | 1 | 1 |
> 

---

[[01-Campaigns/Escape from the Eternal Throne/Escape from the Eternal Throne Home|Escape from the Eternal Throne Home]] | [[01-Campaigns/Escape from the Eternal Throne/05-Atlas/Torcosia/Torcosia-Linked Atlas|Torcosia-Linked Atlas]] | Capital: `=link(this.capitalFile,this.capitalName)`