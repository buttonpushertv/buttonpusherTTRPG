---
alert: 1.79
aliases: 
- Arestia
area: 693,837
burgs: 51
campaign: Raid on the Eternal Tower
capitalName: Aresto
capitalFile: 01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Arestia/Provinces/Aresto Parish/Burgs/Aresto
center: 1260
color: #fc8d62
created: 2026-06-26-18:02
cssclasses: sixty-pct-width
culture: Cowey
emblem: Hitchton Emblem See of Arestia.png
expansionism: 4.6
fileName: _See of Arestia-2
form: Theocracy
formName: See
fullName: See of Arestia
id: 2
mapName: Hitchton
name: Arestia
nameID: Arestia-2
neighbors:
- Thaxted
- Birbotia
- Buckeria
- Oakland
pronounced: ""
provinces:
- Aresto Parish
- Shersterpor Parish
- Sarestole Parish
- Padstoveria Parish
- Grambe Parish
- Westester Parish
- Kinehamia Parish
- Altonmouth Parish
- Brampoundia Parish
- Westheteria Parish
- Swafordge Parish
- Totham Parish
- Padsia Parish
- Torkhamia Parish
- Kingratonce Parish
- Brampsearen Territory
- King Territory
- Balistedia Territory
totalPopulation: 2,372,430
religion: Salton Faith
rulers:
rural: 1,902,176
shortDescription:
treasury: 1024.2
salesTax: 0.25
pollTax: 0.11
urban: 470,254
tags:
- State
- Hitchton
- roet
templateVersion: 4.4
type: River
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

[[01-Campaigns/Raid on the Eternal Tower/Raid on the Eternal Tower Home|Raid on the Eternal Tower Home]] | [[01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/Hitchton-Linked Atlas|Hitchton-Linked Atlas]] | Capital: `=link(this.capitalFile,this.capitalName)`

%% During the import process, much of the data for the Leaflet fields should have been pulled in from the JSON. You will need to update the defaultZoom and (maybe) the coordinates values, but it should be pretty close - good enough to get a start with it. The goal is to cut down on the amount of manual effort you need to go through to pull your data in from the FMG JSON %%

%%LeafletMapTOP%%

> [!metadata|map]+ Arestia Map
> ```leaflet
> id: State-Arestia
> image: [[Hitchton World Map.svg]]
> bounds:
> - [0,0]
> - [1318,2612]
> coordinates: [923.000,1908.000]
> height: 600px
> width: 100%
> minZoom: -3
> maxZoom: 5
> defaultZoom: .5
> zoomDelta: 0.25
> unit: mi
> scale: 5
> darkMode: false
> marker: capital,914.190,2048.890,[[]],Arestia Capital
> ```
> [Link to Arestia on FMG Map](https://azgaar.github.io/Fantasy-Map-Generator/?maplink=https://dl.dropboxusercontent.com/scl/fi/l7dpjh1fb1v053mc7izmw/Hitchton-2026-06-21-15-36.map?rlkey=zrhhfmejskvk1cpgiizmjbrfl&dl=0&scale=3&x=2046.8&y=409.6)

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
>> ![[Hitchton Emblem See of Arestia.png]]
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
| Buckerian Rebellion | 1270 | 1275 |
| Draxtedan War | 1375 | 1380 |
| Oaklish War | 1491 | 1492 |
| Birbotian Conquest | 1577 | 1578 |

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
> FROM #Burg and #Arestia
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
> | ⚔️ | 1st (Aresto) Regiment | 1939 | 1061 | 761 | 118 |  | 3879 |
> 
> | ⚔️ | 2nd (Westheteria) Regiment | 1432 | 689 | 903 | 39 |  | 3063 |
> 
> | ⚔️ | 3rd (Sarestole) Regiment | 1542 | 743 | 645 | 56 |  | 2986 |
> 
> | ⚔️ | 4th (Torkhamia) Regiment | 1147 | 530 | 855 | 27 |  | 2559 |
> 
> | 🐴 | 5th (Kinehamia) Regiment | 254 | 238 | 1213 | 3 |  | 1708 |
> 
> | 🐴 | 6th (Padstoveria) Regiment | 465 | 343 | 756 | 14 |  | 1578 |
> 
> | ⚔️ | 7th (Padsia) Regiment | 720 | 313 | 382 | 16 |  | 1431 |
> 
> | 🌊 | 1st Fleet |  |  |  |  | 57 | 57 |
> 
> | 🌊 | 2nd Fleet |  |  |  |  | 7 | 7 |
> 

---

[[01-Campaigns/Raid on the Eternal Tower/Raid on the Eternal Tower Home|Raid on the Eternal Tower Home]] | [[01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/Hitchton-Linked Atlas|Hitchton-Linked Atlas]] | Capital: `=link(this.capitalFile,this.capitalName)`