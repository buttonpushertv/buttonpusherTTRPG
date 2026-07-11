---
alert: 0.71
aliases: 
- Thaxted
area: 332,676
burgs: 10
campaign: Raid on the Eternal Tower
capitalName: Thaxted
capitalFile: 01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Thaxted/Provinces/Thaxted County/Burgs/Thaxted
cells: 130
center: 400
color: #959edd
created: 2026-07-09-21:36
cssclasses: seventy-pct-width
culture: Cliford
emblem: Hitchton Emblem Dominion of Thaxted.png
expansionism: 4.6
fileName: _Dominion of Thaxted-14
form: Monarchy
formName: Dominion
fullName: Dominion of Thaxted
id: 14
mapName: Hitchton
name: Thaxted
nameID: Thaxted-14
neighbors:
- Stapia
- Arestia
- Neutrals
- Birbotia
pronounced: ""
provinces:
- Thaxted County
- Bundorland Earldom
- Presfieldia County
- Rothburia Land
- Beria Area
totalPopulation: 629,876
religion: Perslehamism
rulers:
rural: 577,740
shortDescription: A short description of this state.
treasury: 194.75
salesTax: 0.17
pollTax: 0.22
urban: 52,136
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
>> ![[Hitchton Emblem Dominion of Thaxted.png]]
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

> [!metadata|map]- Thaxted Map
> ```leaflet
> id: State-Thaxted
> image: [[Hitchton World Map.svg]]
> bounds:
> - [0,0]
> - [1318,2612]
> coordinates: [1061.000,1746.000]
> height: 600px
> width: 100%
> minZoom: -3
> maxZoom: 5
> defaultZoom: .5
> zoomDelta: 0.25
> unit: mi
> scale: 5
> marker:
> - capital,1083.670,1701.700,[[01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Thaxted/Provinces/Thaxted County/Burgs/Thaxted|Thaxted]],Thaxted Capital
> darkMode: false
> ```
> [Link to Thaxted on FMG Map](https://azgaar.github.io/Fantasy-Map-Generator/?maplink=https://dl.dropboxusercontent.com/scl/fi/l7dpjh1fb1v053mc7izmw/Hitchton-2026-06-21-15-36.map?rlkey=zrhhfmejskvk1cpgiizmjbrfl&dl=0&scale=3&x=1702.3&y=234.4)

-LeafletMapTAIL%%

%%TTRPGMapTOP%%

> [!metadata|map]+ Thaxted Map
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
> id: map-Thaxted-14
> view:
>   zoom: 1.3156
>   centerX: 0.6684532924961715
>   centerY: 0.19499241274658574
> ```
> [Link to Thaxted on FMG Map](https://azgaar.github.io/Fantasy-Map-Generator/?maplink=https://dl.dropboxusercontent.com/scl/fi/l7dpjh1fb1v053mc7izmw/Hitchton-2026-06-21-15-36.map?rlkey=zrhhfmejskvk1cpgiizmjbrfl&dl=0&scale=3&x=1702.3&y=234.4)

%%TTRPGMapTAIL%%

%%
ZOOMMAP-DATA id=map-Thaxted-14
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
      "id": "marker_Thaxted_14",
      "x": 0.6514931087289434,
      "y": 0.17779210925644917,
      "layer": "default",
      "link": "01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Thaxted/Provinces/Thaxted County/Burgs/Thaxted",
      "iconKey": "pinRed",
      "tooltip": "Thaxted Capital - Thaxted"
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
>> [!timeline|t-r] **Newbutean Campaign** *1425-1433*
>> (info about this campaign)
>
>> [!timeline|t-l] **Birbotian Conflict** *1477-1479*
>> (info about this campaign)
>
>> [!timeline|t-r] **Stapian War** *1497-1498*
>> (info about this campaign)
>
>> [!timeline|t-l] **Westckean War** *1577-1582*
>> (info about this campaign)
>

> [!NOTE]- History Table
> This table is imported from data in the JSON file.
>
> | Name | Start Year | End Year |
> | ---- | ---------- | -------- |
> | Newbutean Campaign | 1425 | 1433 |
> | Birbotian Conflict | 1477 | 1479 |
> | Stapian War | 1497 | 1498 |
> | Westckean War | 1577 | 1582 |

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
> | ⚔️ | 1st (Bundorland) Regiment | 973 | 652 | 223 | 14 |  | 1862 |

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