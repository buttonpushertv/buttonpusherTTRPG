---
aliases:
- Seamersia
burg: 10
campaign: Raid on the Eternal Tower
center: 
color: #efd072
created: 2026-07-09-21:36
cssclasses: seventy-pct-width
emblem: Hitchton Emblem Seamersia County.png
formName: County
fullName: Seamersia County
pulledName: Seamersia County
id: 114
name: Seamersia
nameID: Seamersia-114
mapName: Hitchton
pronounced: ""
provincialCapital: Exted
capitalFile: 01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Oakhambia/Provinces/Seamersia County/Burgs/Exted
rulers:
shortDescription: A short description of the province.
state: Oakhambia
stateNotePath: "01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Oakhambia/Oakhambia"
tags:
- Province
- roet
- Hitchton
templateVersion: 7.3
WBProgress: Imported
---

[[01-Campaigns/Raid on the Eternal Tower/Raid on the Eternal Tower Home|Raid on the Eternal Tower Home]] | [[01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/Hitchton-Linked Atlas|Hitchton-Linked Atlas]] | State: `=link(this.stateNotePath,this.stateName)`

# **`=this.fullName`**
*`= this.shortDescription` *

---

> [!column|3 no-t] `=this.fullName` Information
>> ### Emblem of `=this.fullName`
>> ![[Hitchton Emblem Seamersia County.png]]
>
>> ### Information
>> **Pronounced:** "`=this.pronounced`"
>> **State** `=link(this.stateNotePath,stateName)`
>> **Provincial Capital** `=link(this.capitalFile,provincialCapital)`
>> ```dataview
>> TABLE WITHOUT ID file.link as "Province Burgs"
>> FROM #Burg and #roet
>> WHERE econtains(provinceId,this.id)
>> SORT file.name ASC
>> ```
>
>> ### Politics
>> **Ruler(s):** `=link(this.rulers)`
>> **Govt Type:** `=this.formName`

---

%% During the import process, much of the data for the Leaflet fields should have been pulled in from the JSON. You will need to update the defaultZoom and (maybe) the coordinates values, but it should be pretty close - good enough to get a start with it. The goal is to cut down on the amount of manual effort you need to go through to pull your data in from the FMG JSON %%

%%LeafletMapTOP-

> [!metadata|map]+ Seamersia County - Province World Map
> ```leaflet
> id: Province-Seamersia-114
> image: [[Hitchton Provinces World Map.svg]]
> bounds:
> - [0,0]
> - [1318,2612]
> coordinates: [840.000,1127.200]
> height: 600px
> width: 100%
> minZoom: -3
> maxZoom: 5
> defaultZoom: .5
> zoomDelta: 0.25
> unit: mi
> scale: 5
> darkMode: false
> marker: prov_capital,832.400,1123.210,[[01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Oakhambia/Provinces/Seamersia County/Burgs/Exted|Exted]],Seamersia Provincial Capital
> ```
>  [Link to Seamersia County on FMG Map](https://azgaar.github.io/Fantasy-Map-Generator/?maplink=https://dl.dropboxusercontent.com/scl/fi/l7dpjh1fb1v053mc7izmw/Hitchton-2026-06-21-15-36.map?rlkey=zrhhfmejskvk1cpgiizmjbrfl&dl=0&scale=3&x=1127.2&y=478)

-LeafletMapTAIL%%

%%TTRPGMapTOP%%

> [!metadata|map]+ Seamersia County Province Map
> ```zoommap
> imageBases:
>   - path: 01-Campaigns/Raid on the Eternal Tower/98-Raid on the Eternal Tower Assets/Hitchton Provinces World Map.svg
> markerLayers:
>   - Default
>   - Capital
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
> id: map-Seamersia-114
> view:
>   zoom: 1.5
>   centerX: 0.42572741194486985
>   centerY: 0.3490136570561457
> ```
> [Link to Seamersia on FMG Map](https://azgaar.github.io/Fantasy-Map-Generator/?maplink=https://dl.dropboxusercontent.com/scl/fi/l7dpjh1fb1v053mc7izmw/Hitchton-2026-06-21-15-36.map?rlkey=zrhhfmejskvk1cpgiizmjbrfl&dl=0&scale=3&x=1127.2&y=478)

%%TTRPGMapTAIL%%

%%
ZOOMMAP-DATA id=map-Seamersia-114
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
    },
    {
      "id": "capital",
      "name": "Capital",
      "visible": true,
      "locked": true
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
      "tooltip": "Seamersia County Capital - Exted"
    }
  ],
  "bases": [
    {
      "path": "01-Campaigns/Raid on the Eternal Tower/98-Raid on the Eternal Tower Assets/Hitchton Provinces World Map.svg"
    }
  ],
  "overlays": [],
  "activeBase": "01-Campaigns/Raid on the Eternal Tower/98-Raid on the Eternal Tower Assets/Hitchton Provinces World Map.svg",
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

### Zones/Regions

%% Zones & regions are any areas that need to be defined. See Points of Interest below as another place to add specific locations that are noteworthy. You can identify Zones/Regions in the properties above (metadata is searchable/indexable). And you can add specific info about any of them below. Use '[!note]- {Zone/Region name}' to place each one in it's own callout. %%

### History

%% The Timeline below can be edited and expanded. Each entry should start with a line like this: '>> [!timeline]'. To place items to the left, add '|t-l' to the code above. Use '|t-r' to show item on right. And then you can add 't-1' up to 't-10' to add spacing between successive entries. The Timeline lives within a callout. Each Timeline item should appear after double greater than signs (>>) and then single greater than lines (>) will divide the items. Make sure there are no blank lines to keep the callout working properly. More info about ITS+Theme's Timeline Callout: [Callout - Timeline - SlRvb's Documentation - Obsidian Publish](https://publish.obsidian.md/slrvb-docs/ITS+Theme/Callouts/Callout+-+Timeline) To hide the Timeline on this page, follow instructions on the line below that starts '(double percents) <- To hide...' & remove the double percent signs here -> %%

> [!timeline|t-l] **`=this.fullName` Founded** _Date of founding._
> `=this.burgName` was founded by...

> [!timeline|t-r] **Something Happened** *A significant event.*
> Something momentous occurred on this day.

> [!timeline|t-l] **Another thing happened** *Less significant this time.*
> Today was only a moderately important day.

%% <- To hide Timeline also remove *only* the double percent signs to the left on this line %%

## Notes

%% Further notes. These 2 callouts will be hidden by default. Change the '-' after the closing square bracket to a '+' to have it be expanded by default. %%

> [!hint]- Plot Hooks
>

> [!question]- Hidden Details
>

## More Details

%% GENERAL NOTES GO HERE - free-form text or images %%

---

[[01-Campaigns/Raid on the Eternal Tower/Raid on the Eternal Tower Home|Raid on the Eternal Tower Home]] | [[01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/Hitchton-Linked Atlas|Hitchton-Linked Atlas]] | State: `=link(this.stateNotePath,this.stateName)`

> [!metadata|metadata]- Metadata & Page Controls
>> [!metadata|metadataoption]- System
>> #### System
>>  |
>> ---|---|
>> **Tags** | `INPUT[Tags][inlineListSuggester:tags]` |
>> **World Building Progress**| `INPUT[WBProgress][inlineSelect:WBProgress]`|
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