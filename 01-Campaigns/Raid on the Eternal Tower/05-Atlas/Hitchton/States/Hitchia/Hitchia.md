---
alert: 0.83
aliases: 
- Hitchia
area: 231,255
burgs: 21
campaign: Raid on the Eternal Tower
capitalName: Kiver
capitalFile: 01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Hitchia/Provinces/Frampland Landgrave/Burgs/Kiver
cells: 85
center: 3597
color: #66c2a5
created: 2026-07-04-08:22
cssclasses: sixty-pct-width
culture: Daling
emblem: Hitchton Emblem Grand Duchy of Hitchia.png
expansionism: 3
fileName: _Grand Duchy of Hitchia-1
form: Monarchy
formName: Grand Duchy
fullName: Grand Duchy of Hitchia
id: 1
mapName: Hitchton
name: Hitchia
nameID: Hitchia-1
neighbors:
- Manch
- Birbotia
- Oakland
- Louthwarkia
pronounced: ""
provinces:
- Frampland Landgrave
- Calney Landgrave
- Rothwarkia County
- Lympstondon County
- Skipton County
- Midbury County
totalPopulation: 1,334,964
religion: Word of Stapton
rulers:
rural: 1,144,722
shortDescription: A short description of this state.
treasury: 469.44
salesTax: 0.15
pollTax: 0.21
urban: 190,242
tags:
- State
- Hitchton
- roet
templateVersion: 7.0
type: Naval
WBProcess: Imported
---

[[01-Campaigns/Raid on the Eternal Tower/Raid on the Eternal Tower Home|Raid on the Eternal Tower Home]] | [[01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/Hitchton-Linked Atlas|Hitchton-Linked Atlas]] | Capital: `=link(this.capitalFile,this.capitalName)`

# **`=this.fullName`**
*`=this.shortDescription`*

---
> [!column|3 no-t] `=this.fullName` Information
>> ### Emblem of `=this.fullName`
>> ![[Hitchton Emblem Grand Duchy of Hitchia.png]]
>
>> ### Information
>> **Pronounced:** "`=this.pronounced`"
>> **Population:** `=this.totalPopulation`
>> <span style="font-size:x-small">**Urban:** `=this.urban` | **Rural:** `=this.rural`</span>
>> **Area:** `=this.area` sq. miles
>> **Dominant Geographic Feature:** `=this.type`
>> **Capital:** `=link(this.capitalFile, this.capitalName)`
>> 
>> ```dataview
>> TABLE WITHOUT ID link(provinces) as "Provinces"
>> FROM ""
>> WHERE file.name = this.file.name
>> ```
>
>> ### Politics
>> **Ruler(s):** `=link(this.rulers)`
>> **Govt Type:** `=this.form`
>> **Dominant Culture:** `=link(this.culture)`
>> **Dominant Religion:** `=link(this.religion)`
>>
>> ### Economy
>> **Treasury:** `=this.treasury`
>> **Sales Tax Rate:** `=this.salesTax`
>> **Poll Tax Rate:** `=this.pollTax`

---

%% During the import process, much of the data for the Leaflet fields should have been pulled in from the JSON. You will need to update the defaultZoom and (maybe) the coordinates values, but it should be pretty close - good enough to get a start with it. The goal is to cut down on the amount of manual effort you need to go through to pull your data in from the FMG JSON %%

%%LeafletMapTOP%%

> [!metadata|map]+ Hitchia Map
> ```leaflet
> id: State-Hitchia
> image: [[Hitchton World Map.svg]]
> bounds:
> - [0,0]
> - [1318,2612]
> coordinates: [465.000,1902.000]
> height: 600px
> width: 100%
> minZoom: -3
> maxZoom: 5
> defaultZoom: .5
> zoomDelta: 0.25
> unit: mi
> scale: 5
> darkMode: false
> marker: capital,473.820,1952.830,[[01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Hitchia/Provinces/Frampland Landgrave/Burgs/Kiver|Kiver]],Hitchia Capital
> ```
> [Link to Hitchia on FMG Map](https://azgaar.github.io/Fantasy-Map-Generator/?maplink=https://dl.dropboxusercontent.com/scl/fi/l7dpjh1fb1v053mc7izmw/Hitchton-2026-06-21-15-36.map?rlkey=zrhhfmejskvk1cpgiizmjbrfl&dl=0&scale=3&x=1949.5&y=838.1)

%%LeafletMapTAIL%%

%% GENERAL NOTES GO HERE - free-form text or images %%
### Zones/Regions

%% Zones & regions are any areas that need to be defined. See Points of Interest below as another place to add specific locations that are noteworthy. You can identify Zones/Regions in the properties above (metadata is searchable/indexable). And you can add specific info about any of them below. Use '[!note]- {Zone/Region name}' to place each one in it's own callout. %%

> [!note]- Burgs
> ```dataview
> TABLE WITHOUT ID file.link as "Burgs", link(provinceName) as "Province Name"
> FROM #Burg and #roet
> WHERE econtains(stateId,this.id)
> SORT file.name ASC
> ```

> [!NOTE]- Provinces
> ```dataview
> TABLE WITHOUT ID link(provinces) as "Provinces"
> FROM ""
> WHERE file.name = this.file.name
> ```

> [!NOTE]- Neighbors
> ```dataview
> TABLE WITHOUT ID link(neighbors) as "Neighbors"
> FROM ""
> WHERE file.name = this.file.name
> ```

## History
Significant incidents in `=this.name`'s history:

%% The Timeline below can be edited and expanded. Each entry should start with a line like this: '>> [!timeline]'. To place items to the left, add '|t-l' to the code above. Use '|t-r' to show item on right. And then you can add 't-1' up to 't-10' to add spacing between successive entries. The Timeline lives within a callout. Each Timeline item should appear after double greater than signs (>>) and then single greater than lines (>) will divide the items. Make sure there are no blank lines to keep the callout working properly. More info about ITS+Theme's Timeline Callout: [Callout - Timeline - SlRvb's Documentation - Obsidian Publish](https://publish.obsidian.md/slrvb-docs/ITS+Theme/Callouts/Callout+-+Timeline) %%

> [!note]+ Timeline. 
> Edit the doc to see instructions for the Timeline feature.
>
>> [!timeline|t-l] **`=this.fullname` Founded** _Date of founding._
>> `=this.fullName` was founded by...
>
>> [!timeline|t-r] **Birbotian Rebellion** *1378-1380*
>> (info about this campaign)
>
>> [!timeline|t-l] **Manchan Campaign** *1471-1477*
>> (info about this campaign)
>
>> [!timeline|t-r] **Oaklish War** *1491-1504*
>> (info about this campaign)
>
>> [!timeline|t-l] **Dunsheadian Campaign** *1506-1507*
>> (info about this campaign)
>

> [!NOTE]- History Table
> This table is imported from data in the JSON file.
>
> | Name | Start Year | End Year |
> | ---- | ---------- | -------- |
> | Birbotian Rebellion | 1378 | 1380 |
> | Manchan Campaign | 1471 | 1477 |
> | Oaklish War | 1491 | 1504 |
> | Dunsheadian Campaign | 1506 | 1507 |

## Notes

%% Further notes. These 2 callouts will be hidden by default. Change the '-' after the closing square bracket to a '+' to have it be expanded by default. %%

> [!hint]- Plot Hooks
> Plot Hooks go here...

> [!question]- Hidden Details
> Hidden Details go here...

> [!note]- Military
> ### Military Units of `=this.name`
> | Icon | Name | Infantry | Archers | Cavalry | Artillery | Fleet | Total |
> | -----| ---- | -------- | ------- | ------- | --------- | ----- | ----- |
> | 🏹 | 1st (Calney) Regiment | 808 | 867 | 98 | 18 |  | 1791 |
> | 👑 | 2nd (Frampland) Regiment | 746 | 886 | 74 | 53 |  | 1759 |
> | 🌊 | 1st Fleet |  |  |  |  | 4 | 4 |
> | 🌊 | 2nd Fleet |  |  |  |  | 3 | 3 |

## More Details

%% GENERAL NOTES GO HERE - free-form text or images %%

---

[[01-Campaigns/Raid on the Eternal Tower/Raid on the Eternal Tower Home|Raid on the Eternal Tower Home]] | [[01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/Hitchton-Linked Atlas|Hitchton-Linked Atlas]] | Capital: `=link(this.capitalFile,this.capitalName)`

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
>> **cssClass**|`INPUT[cssClass][inlineSelect:cssclasses]` |
>> **Leaflet Map**| `BUTTON[hide_leaf_map]` - `BUTTON[show_leaf_map]`