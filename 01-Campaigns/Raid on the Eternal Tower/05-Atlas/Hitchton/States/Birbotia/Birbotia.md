---
alert: 1.6
aliases: 
- Birbotia
area: 890,370
burgs: 27
campaign: Raid on the Eternal Tower
capitalName: Presfield
capitalFile: 01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Birbotia/Provinces/Presfield County/Burgs/Presfield
cells: 285
center: 2559
color: #e28edb
created: 2026-07-09-21:36
cssclasses: seventy-pct-width
culture: Penkneth
emblem: Hitchton Emblem Birbotian Empire.png
expansionism: 3.7
fileName: _Birbotian Empire-19
form: Monarchy
formName: Empire
fullName: Birbotian Empire
id: 19
mapName: Hitchton
name: Birbotia
nameID: Birbotia-19
neighbors:
- Stapia
- Neutrals
- Thaxted
- Arestia
- Oakhambia
- Casthamia
- Oakland
- Manch
- Hitchia
pronounced: ""
provinces:
- Presfield County
- Bitonzan Landgrave
- Gasingswest Seneschalty
- Skiple County
- Albroleton Seneschalty
- Waldonia County
- Blandland County
- Kingleytes Earldom
- Wistore Dependency
- Stapingle Dependency
totalPopulation: 1,605,167
religion: Salton Faith
rulers:
rural: 1,468,585
shortDescription: A short description of this state.
treasury: 621.83
salesTax: 0.15
pollTax: 0.26
urban: 136,582
tags:
- State
- Hitchton
- roet
templateVersion: 7.6
type: Highland
WBProcess: Imported
---

[[01-Campaigns/Raid on the Eternal Tower/Raid on the Eternal Tower Home|Raid on the Eternal Tower Home]] | [[01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/Hitchton-Linked Atlas|Hitchton-Linked Atlas]] | Capital: `=link(this.capitalFile,this.capitalName)`

# **`=this.fullName`**
*`=this.shortDescription`*

---
> [!column|3 no-t] `=this.fullName` Information
>> ### Emblem of `=this.fullName`
>> ![[Hitchton Emblem Birbotian Empire.png]]
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

> [!metadata|map]- Birbotia Map
> ```leaflet
> id: State-Birbotia
> image: [[Hitchton World Map.svg]]
> bounds:
> - [0,0]
> - [1318,2612]
> coordinates: [727.000,1753.000]
> height: 600px
> width: 100%
> minZoom: -3
> maxZoom: 5
> defaultZoom: .5
> zoomDelta: 0.25
> unit: mi
> scale: 5
> marker:
> - capital,693.500,1820.510,[[01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Birbotia/Provinces/Presfield County/Burgs/Presfield|Presfield]],Birbotia Capital
> darkMode: false
> ```
> [Link to Birbotia on FMG Map](https://azgaar.github.io/Fantasy-Map-Generator/?maplink=https://dl.dropboxusercontent.com/scl/fi/l7dpjh1fb1v053mc7izmw/Hitchton-2026-06-21-15-36.map?rlkey=zrhhfmejskvk1cpgiizmjbrfl&dl=0&scale=3&x=1820.51&y=624.5)

-LeafletMapTAIL%%

%%TTRPGMapTOP%%

> [!metadata|map]+ Birbotia Map
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
> id: map-Birbotia-19
> view:
>   zoom: 1.175
>   centerX: 0.6711332312404288
>   centerY: 0.44840667678300455
> ```
> [Link to Birbotia on FMG Map](https://azgaar.github.io/Fantasy-Map-Generator/?maplink=https://dl.dropboxusercontent.com/scl/fi/l7dpjh1fb1v053mc7izmw/Hitchton-2026-06-21-15-36.map?rlkey=zrhhfmejskvk1cpgiizmjbrfl&dl=0&scale=3&x=1820.51&y=624.5)

%%TTRPGMapTAIL%%

%%
ZOOMMAP-DATA id=map-Birbotia-19
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
      "id": "marker_Presfield_19",
      "x": 0.69697932618683,
      "y": 0.47382397572078905,
      "layer": "default",
      "link": "01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Birbotia/Provinces/Presfield County/Burgs/Presfield",
      "iconKey": "pinRed",
      "tooltip": "Birbotia Capital - Presfield"
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
>> [!timeline|t-r] **Arestian Conflict** *1134-1143*
>> (info about this campaign)
>
>> [!timeline|t-l] **Casthamian Intervention** *1266-1272*
>> (info about this campaign)
>
>> [!timeline|t-r] **Stapian Conflict** *1331-1332*
>> (info about this campaign)
>
>> [!timeline|t-l] **Oakhambian War** *1454-1455*
>> (info about this campaign)
>
>> [!timeline|t-r] **Kirtish War** *1463-1464*
>> (info about this campaign)
>
>> [!timeline|t-l] **Hitchian War** *1519-1520*
>> (info about this campaign)
>
>> [!timeline|t-r] **Oaklish Rebellion** *1566-1570*
>> (info about this campaign)
>
>> [!timeline|t-l] **Thaxted War** *1577-1578*
>> (info about this campaign)
>
>> [!timeline|t-r] **Manchan Campaign** *1577-1581*
>> (info about this campaign)
>

> [!NOTE]- History Table
> This table is imported from data in the JSON file.
>
> | Name | Start Year | End Year |
> | ---- | ---------- | -------- |
> | Arestian Conflict | 1134 | 1143 |
> | Casthamian Intervention | 1266 | 1272 |
> | Stapian Conflict | 1331 | 1332 |
> | Oakhambian War | 1454 | 1455 |
> | Kirtish War | 1463 | 1464 |
> | Hitchian War | 1519 | 1520 |
> | Oaklish Rebellion | 1566 | 1570 |
> | Thaxted War | 1577 | 1578 |
> | Manchan Campaign | 1577 | 1581 |

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
> | ⚔️ | 1st (Bitonzan) Regiment | 1481 | 1045 | 583 | 43 |  | 3152 |
> | ⚔️ | 2nd (Bitonzan) Regiment | 1059 | 793 | 338 | 23 |  | 2213 |
> | 🐴 | 3rd (Blandland) Regiment | 367 | 513 | 1082 | 11 |  | 1973 |
> | 🐴 | 4th (Kingleytes) Regiment | 207 | 329 | 671 | 7 |  | 1214 |

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