---
alert: 2.83
aliases: 
- Oakhambia
area: 579,114
burgs: 28
campaign: Raid on the Eternal Tower
capitalName: Exted
capitalFile: 01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Oakhambia/Provinces/Seamersia County/Burgs/Exted
cells: 194
center: 1636
color: #cdd660
created: 2026-07-08-18:14
cssclasses: sixty-pct-width
culture: Cliford
emblem: Hitchton Emblem Kingdom of Oakhambia.png
expansionism: 4.4
fileName: _Kingdom of Oakhambia-10
form: Monarchy
formName: Kingdom
fullName: Kingdom of Oakhambia
id: 10
mapName: Hitchton
name: Oakhambia
nameID: Oakhambia-10
neighbors:
- Stapia
- Padstedgia
- Birbotia
- Horsteria
- Casthamia
- Linia
- Penland
pronounced: ""
provinces:
- Seamersia County
- Prested County
- Westheton County
- Oakburgh County
- Swalering Shire
- Dudfordgia County
- Coroughia Shire
- Searesto County
- Maveternia Region
- Titon Land
totalPopulation: 1,424,870
religion: Religion of the Dead Antelope of Snow
rulers:
rural: 1,234,664
shortDescription: A short description of this state.
treasury: 455.52
salesTax: 0.18
pollTax: 0.15
urban: 190,206
tags:
- State
- Hitchton
- roet
templateVersion: 7.6
type: River
WBProcess: Imported
---

[[01-Campaigns/Raid on the Eternal Tower/Raid on the Eternal Tower Home|Raid on the Eternal Tower Home]] | [[01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/Hitchton-Linked Atlas|Hitchton-Linked Atlas]] | Capital: `=link(this.capitalFile,this.capitalName)`

# **`=this.fullName`**
*`=this.shortDescription`*

---
> [!column|3 no-t] `=this.fullName` Information
>> ### Emblem of `=this.fullName`
>> ![[Hitchton Emblem Kingdom of Oakhambia.png]]
>
>> ### Information
>> **Pronounced:** "`=this.pronounced`"
>> **Population:** `=this.totalPopulation`
>> <span style="font-size:x-small">**Urban:** `=this.urban` | **Rural:** `=this.rural`</span>
>> **Area:** `=this.area` sq. miles
>> **Dominant Geographic Feature:** `=this.type`
>> **Capital:** `=link(this.capitalFile, this.capitalName)`
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

%%LeafletMapTOP-

> [!metadata|map]- Oakhambia Map
> ```leaflet
> id: State-Oakhambia
> image: [[Hitchton World Map.svg]]
> bounds:
> - [0,0]
> - [1318,2612]
> coordinates: [780.000,1253.000]
> height: 600px
> width: 100%
> minZoom: -3
> maxZoom: 5
> defaultZoom: .5
> zoomDelta: 0.25
> unit: mi
> scale: 5
> marker:
> - capital,832.400,1123.210,[[01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Oakhambia/Provinces/Seamersia County/Burgs/Exted|Exted]],Oakhambia Capital
> darkMode: false
> ```
> [Link to Oakhambia on FMG Map](https://azgaar.github.io/Fantasy-Map-Generator/?maplink=https://dl.dropboxusercontent.com/scl/fi/l7dpjh1fb1v053mc7izmw/Hitchton-2026-06-21-15-36.map?rlkey=zrhhfmejskvk1cpgiizmjbrfl&dl=0&scale=3&x=1127.2&y=478)

-LeafletMapTAIL%%

%%TTRPGMapTOP%%

> [!metadata|map]+ Oakhambia Map
> ```zoommap
> imageBases:
>   - path: 01-Campaigns/Raid on the Eternal Tower/98-Raid on the Eternal Tower Assets/Hitchton World Map.svg
> markerLayers:
>   - Default
> minZoom: 0.50
> maxZoom: 8
> wrap: false
> responsive: false
> width: 100%
> height: 600px
> resizable: false
> resizeHandle: native
> render: dom
> align: center
> id: map-Oakhambia-10
> view:
>   zoom: 1.175
>   centerX: 0.47970903522205205
>   centerY: 0.40819423368740515
> ```
> [Link to Oakhambia on FMG Map](https://azgaar.github.io/Fantasy-Map-Generator/?maplink=https://dl.dropboxusercontent.com/scl/fi/l7dpjh1fb1v053mc7izmw/Hitchton-2026-06-21-15-36.map?rlkey=zrhhfmejskvk1cpgiizmjbrfl&dl=0&scale=3&x=1127.2&y=478)

%%TTRPGMapTAIL%%

%%
ZOOMMAP-DATA id=map-Oakhambia-10
{
  "size": {
    "w": 2612,
    "h": 1318
  },
  "layers": [
    {
      "id": "default",
      "name": "Default",
      "visible": true,
      "locked": false
    }
  ],
  "markers": [
    {
      "type": "pin",
      "id": "marker_Exted_10",
      "x": 0.4300191424196019,
      "y": 0.3684370257966616,
      "layer": "default",
      "link": "01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Oakhambia/Provinces/Seamersia County/Burgs/Exted",
      "iconKey": "pinRed",
      "tooltip": "Oakhambia Capital - Exted"
    }
  ],
  "bases": [
    {
      "path": "01-Campaigns/Raid on the Eternal Tower/98-Raid on the Eternal Tower Assets/Hitchton World Map.svg"
    }
  ],
  "overlays": [],
  "activeBase": "01-Campaigns/Raid on the Eternal Tower/98-Raid on the Eternal Tower Assets/Hitchton World Map.svg",
  "measurement": {
    "displayUnit": "mi",
    "scales": {},
    "customUnitPxPerUnit": {},
    "travelTimePresetIds": [],
    "travelDaysEnabled": false
  },
  "pinSizeOverrides": {},
  "grids": [],
  "panClamp": false,
  "drawLayers": [],
  "drawings": [],
  "textLayers": [],
  "secondScreen": {
    "showGrids": true
  }
}
/ZOOMMAP-DATA
%%

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
>> [!timeline|t-r] **Padstedgian Intervention** *1271-1280*
>> (info about this campaign)
>
>> [!timeline|t-l] **Stapian Expedition** *1516-1523*
>> (info about this campaign)
>
>> [!timeline|t-r] **Casthamian Campaign** *1550-1551*
>> (info about this campaign)
>
>> [!timeline|t-l] **Birbotian War** *1577-1582*
>> (info about this campaign)
>
>> [!timeline|t-r] **Horsterian Intervention** *1577-1582*
>> (info about this campaign)
>
>> [!timeline|t-l] **Linian Conflict** *1577-1581*
>> (info about this campaign)
>
>> [!timeline|t-r] **Penlish War** *1577-1580*
>> (info about this campaign)
>

> [!NOTE]- History Table
> This table is imported from data in the JSON file.
>
> | Name | Start Year | End Year |
> | ---- | ---------- | -------- |
> | Padstedgian Intervention | 1271 | 1280 |
> | Stapian Expedition | 1516 | 1523 |
> | Casthamian Campaign | 1550 | 1551 |
> | Birbotian War | 1577 | 1582 |
> | Horsterian Intervention | 1577 | 1582 |
> | Linian Conflict | 1577 | 1581 |
> | Penlish War | 1577 | 1580 |

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
> | ⚔️ | 1st (Seamersia) Regiment | 2123 | 1038 | 1148 | 54 |  | 4363 |
> | ⚔️ | 2nd (Oakburgh) Regiment | 1517 | 728 | 430 | 35 |  | 2710 |
> | 🐴 | 3rd (Westheton) Regiment | 312 | 270 | 1308 | 3 |  | 1893 |
> | ⚔️ | 4th (Oakburgh) Regiment | 1073 | 450 | 331 | 23 |  | 1877 |
> | ⚔️ | 5th (Searesto) Regiment | 873 | 482 | 262 | 17 |  | 1634 |
> | 🌊 | 1st Fleet |  |  |  |  | 16 | 16 |

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
>> **TTRPG Tools Map**| `BUTTON[hide_ttrpg_map]` - `BUTTON[show_ttrpg_map]`