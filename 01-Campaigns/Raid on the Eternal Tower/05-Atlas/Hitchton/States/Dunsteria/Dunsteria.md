---
alert: 5
aliases: 
- Dunsteria
area: 104,040
burgs: 7
campaign: Raid on the Eternal Tower
capitalName: Dunster
capitalFile: 01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Dunsteria/Provinces/Dunster Barony/Burgs/Dunster
cells: 40
center: 380
color: #e58bd7
created: 2026-07-09-21:36
cssclasses: seventy-pct-width
culture: Cliford
emblem: Hitchton Emblem Duchy of Dunsteria.png
expansionism: 3.1
fileName: _Duchy of Dunsteria-15
form: Monarchy
formName: Duchy
fullName: Duchy of Dunsteria
id: 15
mapName: Hitchton
name: Dunsteria
nameID: Dunsteria-15
neighbors:
- Padstedgia
- Stapia
pronounced: ""
provinces:
- Dunster Barony
- Seaveters Seneschalty
- Axbrigh Region
totalPopulation: 348,762
religion: Perslehamism
rulers:
rural: 300,268
shortDescription: A short description of this state.
treasury: 86.4
salesTax: 0.11
pollTax: 0.15
urban: 48,494
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
>> ![[Hitchton Emblem Duchy of Dunsteria.png]]
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

> [!metadata|map]- Dunsteria Map
> ```leaflet
> id: State-Dunsteria
> image: [[Hitchton World Map.svg]]
> bounds:
> - [0,0]
> - [1318,2612]
> coordinates: [1077.000,1347.000]
> height: 600px
> width: 100%
> minZoom: -3
> maxZoom: 5
> defaultZoom: .5
> zoomDelta: 0.25
> unit: mi
> scale: 5
> marker:
> - capital,1088.650,1364.720,[[01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Dunsteria/Provinces/Dunster Barony/Burgs/Dunster|Dunster]],Dunsteria Capital
> darkMode: false
> ```
> [Link to Dunsteria on FMG Map](https://azgaar.github.io/Fantasy-Map-Generator/?maplink=https://dl.dropboxusercontent.com/scl/fi/l7dpjh1fb1v053mc7izmw/Hitchton-2026-06-21-15-36.map?rlkey=zrhhfmejskvk1cpgiizmjbrfl&dl=0&scale=3&x=1365.25&y=229.62)

-LeafletMapTAIL%%

%%TTRPGMapTOP%%

> [!metadata|map]+ Dunsteria Map
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
> id: map-Dunsteria-15
> view:
>   zoom: 2.3717
>   centerX: 0.5156967840735069
>   centerY: 0.18285280728376327
> ```
> [Link to Dunsteria on FMG Map](https://azgaar.github.io/Fantasy-Map-Generator/?maplink=https://dl.dropboxusercontent.com/scl/fi/l7dpjh1fb1v053mc7izmw/Hitchton-2026-06-21-15-36.map?rlkey=zrhhfmejskvk1cpgiizmjbrfl&dl=0&scale=3&x=1365.25&y=229.62)

%%TTRPGMapTAIL%%

%%
ZOOMMAP-DATA id=map-Dunsteria-15
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
      "id": "marker_Dunster_15",
      "x": 0.5224808575803982,
      "y": 0.17401365705614566,
      "layer": "default",
      "link": "01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Dunsteria/Provinces/Dunster Barony/Burgs/Dunster",
      "iconKey": "pinRed",
      "tooltip": "Dunsteria Capital - Dunster"
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
>> [!timeline|t-r] **Stapian Invasion** *1305-1310*
>> (info about this campaign)
>
>> [!timeline|t-l] **Padstedgian Rebellion** *1348-1352*
>> (info about this campaign)
>
>> [!timeline|t-r] **Padstedgia-Dunsterian War** *1583-undefined*
>> (info about this campaign)
>

> [!NOTE]- History Table
> This table is imported from data in the JSON file.
>
> | Name | Start Year | End Year |
> | ---- | ---------- | -------- |
> | Stapian Invasion | 1305 | 1310 |
> | Padstedgian Rebellion | 1348 | 1352 |
> | Padstedgia-Dunsterian War | 1583 |  |

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
> | 👑 | 1st (Dunster) Regiment | 2197 | 2011 | 253 | 75 |  | 4536 |
> | ⚔️ | 2nd (Seaveters) Regiment | 866 | 650 | 149 | 18 |  | 1683 |

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