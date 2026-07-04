---
alert: 0.19
aliases: 
- Stapia
area: 833,409
burgs: 50
campaign: Raid on the Eternal Tower
capitalName: Newleigh
capitalFile: 01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Stapia/Provinces/Newleigh County/Burgs/Newleigh
cells: 283
center: 757
color: #f7d658
created: 2026-07-04-08:22
cssclasses: sixty-pct-width
culture: Cliford
emblem: Hitchton Emblem Kingdom of Stapia.png
expansionism: 3.9
fileName: _Kingdom of Stapia-16
form: Monarchy
formName: Kingdom
fullName: Kingdom of Stapia
id: 16
mapName: Hitchton
name: Stapia
nameID: Stapia-16
neighbors:
- Thaxted
- Dunsteria
- Padstedgia
- Oakhambia
- Neutrals
- Birbotia
pronounced: ""
provinces:
- Newleigh County
- Kilkwarwick County
- Mamerstoney Earldom
- Picker Earldom
- Mourland County
- Amerling County
- Newcesleby Earldom
- Causheadge County
- Witonmouth Margrave
- Bertontery Earldom
- Gramburghel County
- Flokhampia Earldom
- Wararen Earldom
- Knasingsbu Earldom
- Sidgewes Territory
- Yeorough Land
totalPopulation: 2,723,192
religion: Perslehamism
rulers:
rural: 2,395,625
shortDescription: A short description of this state.
treasury: 749.73
salesTax: 0.18
pollTax: 0.16
urban: 327,567
tags:
- State
- Hitchton
- roet
templateVersion: 7.0
type: River
WBProcess: Imported
---

[[01-Campaigns/Raid on the Eternal Tower/Raid on the Eternal Tower Home|Raid on the Eternal Tower Home]] | [[01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/Hitchton-Linked Atlas|Hitchton-Linked Atlas]] | Capital: `=link(this.capitalFile,this.capitalName)`

# **`=this.fullName`**
*`=this.shortDescription`*

---
> [!column|3 no-t] `=this.fullName` Information
>> ### Emblem of `=this.fullName`
>> ![[Hitchton Emblem Kingdom of Stapia.png]]
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

> [!metadata|map]+ Stapia Map
> ```leaflet
> id: State-Stapia
> image: [[Hitchton World Map.svg]]
> bounds:
> - [0,0]
> - [1318,2612]
> coordinates: [1022.000,1547.000]
> height: 600px
> width: 100%
> minZoom: -3
> maxZoom: 5
> defaultZoom: .5
> zoomDelta: 0.25
> unit: mi
> scale: 5
> darkMode: false
> marker: capital,1012.420,1473.330,[[01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Stapia/Provinces/Newleigh County/Burgs/Newleigh|Newleigh]],Stapia Capital
> ```
> [Link to Stapia on FMG Map](https://azgaar.github.io/Fantasy-Map-Generator/?maplink=https://dl.dropboxusercontent.com/scl/fi/l7dpjh1fb1v053mc7izmw/Hitchton-2026-06-21-15-36.map?rlkey=zrhhfmejskvk1cpgiizmjbrfl&dl=0&scale=3&x=1473.33&y=305.58)

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
>> [!timeline|t-r] **Rockingan Conquest** *1364-1372*
>> (info about this campaign)
>
>> [!timeline|t-l] **Thaxtedan Campaign** *1453-1461*
>> (info about this campaign)
>
>> [!timeline|t-r] **Memasings War** *1548-1549*
>> (info about this campaign)
>
>> [!timeline|t-l] **Dunsterian Rebellion** *1577-1582*
>> (info about this campaign)
>
>> [!timeline|t-r] **Padstedgian Rebellion** *1577-1582*
>> (info about this campaign)
>
>> [!timeline|t-l] **Birbotian Invasion** *1577-1578*
>> (info about this campaign)
>

> [!NOTE]- History Table
> This table is imported from data in the JSON file.
>
> | Name | Start Year | End Year |
> | ---- | ---------- | -------- |
> | Rockingan Conquest | 1364 | 1372 |
> | Thaxtedan Campaign | 1453 | 1461 |
> | Memasings War | 1548 | 1549 |
> | Dunsterian Rebellion | 1577 | 1582 |
> | Padstedgian Rebellion | 1577 | 1582 |
> | Birbotian Invasion | 1577 | 1578 |

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
> | 👑 | 1st (Newleigh) Regiment | 701 | 352 | 236 | 5 |  | 1294 |
> | ⚔️ | 2nd (Bertontery) Regiment | 195 | 91 | 82 | 6 |  | 374 |
> | ⚔️ | 3rd (Mamerstoney) Regiment | 213 | 91 | 62 | 3 |  | 369 |

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