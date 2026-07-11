---
aliases:
area:
campaign: "Raid on the Eternal Tower"
center: 1260
code: SF
color: #ffdf94
created: 2026-07-10-17:46
cssclasses: seventy-pct-width
culture: Cowey
deity: Sorough, The Scary Enlightened Being
expansion: global
expansionism: 4.8
extinct: false
followers: 4,142,168
form: Pantheism
id: 12
leaders:
mapName: Hitchton
origins: 
- Cowey Forefathers
pronounced: ""
religionName: "Salton Faith"
shortDescription: A short description of this religion.
tags:
- Religion
- Hitchton
type: Organized
templateVersion: 7.4
WBProgress: Imported
---

[[01-Campaigns/Raid on the Eternal Tower/Raid on the Eternal Tower Home|Raid on the Eternal Tower Home]] | [[01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/Hitchton-Linked Atlas|Hitchton-Linked Atlas]]

# **`=this.religionName`**
*`=this.shortDescription`*

---

> [!column|3 no-t] `=this.religonName` Information
>> ### Symbols of `=this.religionName`
>> <span style="font-size:x-small">This section is where you could place imagry, icons, or symbols of this faith.</span>
>
>> ### Information
>> **Pronounced:** "`=this.pronounced`"
>> **Deity:** `=this.deity`
>> **Leaders:** `=this.leaders`
>> **Followers:** `=this.followers`
>> **Form:** `=this.form`
>
>> ### Additional Info
>> **Culture:** `=this.culture`
>> **Expands via:** `=this.expansion`
>> **Origins:**
>> ```dataview
>> LIST WITHOUT ID 
>> link(origins)
>> FLATTEN origins
>> WHERE file.name = this.file.name
>> ```

%%LeafletMapTOP-

> [!metadata|map]- Salton Faith Religions Map
> ```leaflet
> id: Religion-Salton Faith
> image: [[Hitchton Religions World Map.svg]]
> bounds:
> - [0,0]
> - [1318,2612]
> coordinates: [908.400,2046.800]
> height: 600px
> width: 100%
> minZoom: -3
> maxZoom: 5
> defaultZoom: .5
> zoomDelta: 0.25
> unit: mi
> scale: 5
> darkMode: false
> marker: religion,908.400,2046.800,,Religion's Center
> ```
> <div style="width: 500px; height: 20px; background-color: #ffdf94; display: flex; justify-content: center; align-items: center; font-size: 24px; color: #ffdf94;">▮</div>
> The area shown in the color above is the reach of Salton Faith
>
> [Link to Salton Faith on FMG Map](https://azgaar.github.io/Fantasy-Map-Generator/?maplink=https://dl.dropboxusercontent.com/scl/fi/l7dpjh1fb1v053mc7izmw/Hitchton-2026-06-21-15-36.map?rlkey=zrhhfmejskvk1cpgiizmjbrfl&dl=0&scale=3&x=2046.8&y=409.6)
> 

-LeafletMapTAIL%%

%%TTRPGMapTOP%%

> [!metadata|map]+ Salton Faith Map
> ```zoommap
> imageBases:
>   - path: 01-Campaigns/Raid on the Eternal Tower/98-Raid on the Eternal Tower Assets/Hitchton Religions World Map.svg
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
> id: map-religion-SaltonFaith-12
> view:
>   zoom: 1
>   centerX: 0.783614088820827
>   centerY: 0.31077389984825493
> ```
> <div style="width: 500px; height: 20px; background-color: #ffdf94; display: flex; justify-content: center; align-items: center; font-size: 24px; color: #ffdf94;">▮</div>
> The area shown in the color above is the reach of Salton Faith
>
> [Link to Salton Faith on FMG Map](https://azgaar.github.io/Fantasy-Map-Generator/?maplink=https://dl.dropboxusercontent.com/scl/fi/l7dpjh1fb1v053mc7izmw/Hitchton-2026-06-21-15-36.map?rlkey=zrhhfmejskvk1cpgiizmjbrfl&dl=0&scale=3&x=2046.8&y=409.6)

%%TTRPGMapTAIL%%

%%
ZOOMMAP-DATA id=map-religion-SaltonFaith-12
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
      "id": "marker_SaltonFaith_center",
      "x": 0.783614088820827,
      "y": 0.31077389984825493,
      "layer": "default",
      "link": "",
      "iconKey": "pinRed",
      "tooltip": "Salton Faith Center"
    }
  ],
  "bases": [
    {
      "path": "01-Campaigns/Raid on the Eternal Tower/98-Raid on the Eternal Tower Assets/Hitchton Religions World Map.svg"
    }
  ],
  "overlays": [],
  "activeBase": "01-Campaigns/Raid on the Eternal Tower/98-Raid on the Eternal Tower Assets/Hitchton Religions World Map.svg",
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

### Zones/Regions/Neighborhoods
Below are any notable zones or regions within `=this.religionName`

%% Zones & regions are any areas that need to be defined. See Points of Interest below as another place to add specific locations that are noteworthy. You can identify Zones/Regions in the properties above (metadata is searchable/indexable). And you can add specific info about any of them below. Use '[!note]- {Zone/Region name}' to place each one in it's own callout. %%

### History

%% The Timeline below can be edited and expanded. Each entry should start with a line like this: '>> [!timeline]'. To place items to the left, add '|t-l' to the code above. Use '|t-r' to show item on right. And then you can add 't-1' up to 't-10' to add spacing between successive entries. The Timeline lives within a callout. Each Timeline item should appear after double greater than signs (>>) and then single greater than lines (>) will divide the items. Make sure there are no blank lines to keep the callout working properly. More info about ITS+Theme's Timeline Callout: [Callout - Timeline - SlRvb's Documentation - Obsidian Publish](https://publish.obsidian.md/slrvb-docs/ITS+Theme/Callouts/Callout+-+Timeline) To hide the Timeline on this page, use the buttons in the MetaData>System callout at the bottom of this note. %%

%% TimelineTOP %%

> [!timeline|t-l] **`=this.religionName` Founded** _Date of founding._
> `=this.religionName` was founded by...

> [!timeline|t-r] **Something Happened** *A significant event.*
> Something momentous occurred on this day.

> [!timeline|t-l] **Another thing happened** *Less significant this time.*
> Today was only a moderately important day.

%% TimelineTAIL %%

## Notes

%% Further notes. These 2 callouts will be hidden by default. Change the '-' after the closing square bracket to a '+' to have it be expanded by default. %%

> [!hint]- Plot Hooks
> Plot Hooks go here...

> [!question]- Hidden Details
> Hidden Details go here...

## More Details

%% GENERAL NOTES GO HERE - free-form text or images %%

---
[[01-Campaigns/Raid on the Eternal Tower/Raid on the Eternal Tower Home|Raid on the Eternal Tower Home]] | [[01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/Hitchton-Linked Atlas|Hitchton-Linked Atlas]]

> [!metadata|metadata]- Metadata & Page Controls
>> [!metadata|metadataoption]+ System
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
>> [!metadata|metadataoption]+ Info
>> #### Info
>>  |
>> ---|---|
> **Pronounced** |  `INPUT[text:pronounced]`
> **Aliases** | `INPUT[list:aliases]` |
> **Rulers**|`INPUT[list:rulers]`|
> **Short Description**|`INPUT[textArea:shortDescription]`
>
>> [!metadata|metadataoption]+ Controls
>> These buttons control various portions of this page. They only change things on this page.
>> 
>> #### Controls
>>  |
>> ---|---|
>> **cssClass** |`INPUT[cssClass][inlineSelect:cssclasses]` |
>> **Leaflet Map** | `BUTTON[hide_leaf_map]` - `BUTTON[show_leaf_map]`
>> **TTRPG Tools Map** | `BUTTON[hide_ttrpg_map]` - `BUTTON[show_ttrpg_map]`


