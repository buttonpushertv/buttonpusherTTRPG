---
aliases:
- Lindorough
- Lindorough-177
burgMapLink: https://watabou.github.io/city-generator/?name=Lindorough&population=11465&size=33&seed=5827453500177&river=1&coast=1&farms=0&citadel=0&urban_castle=0&hub=1&plaza=0&temple=0&walls=1&shantytown=0&greens=0&style=natural
burgName: Lindorough
burgNameID: Lindorough-177
campaign: Raid on the Eternal Tower
capital: 0
cell: 2570
citadel: 0
cssclasses: seventy-pct-width
culture: Chisbute
elevation: 266 ft
emblem: Hitchton Emblem Lindorough.png
group: town
feature: 2
id: 177
mapName: Hitchton
marketId: 9
marketName: Oakley-market
plaza: 0
population: 11,465
port: 1
product: 43.23
pronounced: ""
provinceId: 65
provinceName: Binland Earldom
religion: Salton Faith
rulers:
shanty: 0
shortDescription: A short description of the burg.
stateId: 5
stateName: Oakland
stateNotePath: "01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Oakland/Oakland"
tags:
- Burg
- Hitchton
- roet
- town
- Binland-Earldom
- Oakland
temple: 0
temperature: 82°F
temperatureLikeness: Panama City (Panama)
templateVersion: 7.5
treasury: 33.48
type: Naval
walls: 1
WBProgress: Imported
x: 2035.06
y: 615.2
---

%% You can copy the line below and paste it into this Burg's State and/or Province Leaflet map block and it will add a marker for this burg to that map that will also link back to this note. Copy this line:
marker: burg,702.800,2035.060,[[Lindorough]]
%%

[[01-Campaigns/Raid on the Eternal Tower/Raid on the Eternal Tower Home|Raid on the Eternal Tower Home]] | [[01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/Hitchton-Linked Atlas|Hitchton-Linked Atlas]] | State: `=link(this.stateNotePath,this.stateName)` | Province: `=link(this.provinceName)`


# **`=this.burgName`**
*`=this.shortDescription`*

---

> [!column|3 no-t] `=this.burgName` Information
>> ### Emblem of `=this.burgName`
>> ![[Hitchton Emblem Lindorough.png]]
>
>> ### Information
>> **Pronounced:**: "`=this.pronounced`"
>> **Population:**  `=this.population` 
>> **State:** `=link(this.stateNotePath,stateName)`
>> **Province:** `=link(this.provinceName)`
>> **Elevation:**  `=this.elevation`
>> **Annual Avg. Temp:**  `=this.temperature` 
>> <span style="font-size:x-small">**Temps Like**</span> <span style="font-size:x-small">`=this.temperatureLikeness`</span>
>
>> ### Politics
>> **Ruler(s):**  `=link(this.rulers)` 
>> **Dominant Culture:**  `=link(this.culture)` 
>> **Dominant Religion:**  `=link(this.religion)`
>> **Market:**  `=link(this.marketName)`

---

%%WebMapTOP%%

> [!metadata]+ Burg Map (Live from Web)
> ```custom-frames
> frame: Watabou-Procgen Arcana
> style: height: 1000px;
> urlSuffix: https://watabou.github.io/city-generator/?name=Lindorough&population=11465&size=33&seed=5827453500177&river=1&coast=1&farms=0&citadel=0&urban_castle=0&hub=1&plaza=0&temple=0&walls=1&shantytown=0&greens=0&style=natural
> ```
>
>  `=elink(this.burgMapLink,"Visit Burg Map on MCFG")` | [Link to Lindorough on FMG Map](https://azgaar.github.io/Fantasy-Map-Generator/?maplink=https://dl.dropboxusercontent.com/scl/fi/l7dpjh1fb1v053mc7izmw/Hitchton-2026-06-21-15-36.map?rlkey=zrhhfmejskvk1cpgiizmjbrfl&dl=0&scale=6&x=2034.71&y=615.69) | Download Helper Link: `BUTTON[mapLink-to-download]`

%%WebMapTAIL%%

%% If you want to place the image for the Burg in the Map(Interactive) window below, you can use Fantasy Map Generator's link to Watabou's Fantasy City or Village Generator - see the `infobox` link or the `burgMapLink` URL up in the properties of this note. You can save the map image somewhere in the vault (`01-Campaign/Raid on the Eternal Tower/98-Raid on the Eternal Tower Assets`, for instance) and it will show up in this window. The name for this image is pre-populated with info from the JSON Import. The filename should be the Burg's id value and the Burg's burgName - both available up in the frontmatter.

You may also use the Meta-Bind button at the bottom of the callout to open the burgMapLink in a browser window and save it there. On clicking that button, you will open the Burg's URL (City or Village) and then it will set this Burg's index and name on the clipboard like this: {id}-{burgName} - you can then just paste that in to the file name field of the save file dialog window, once you navigate to the vault folder you want to save them into.

There is an elaborate method (see [[JSON Import How To#Wrangling FMG Burg Maps]]) to save all the maps so you can have them locally and make use of the data that was placed here on import from the JSON.%%

%% Leaflet Code Block is hidden by default. To unhide, you can use the button in the Metadata section to show it.%%

%%LeafletMapTOP-

> [!metadata|map]- Burg Map (Interactive)
> ```leaflet
> id: Burg-Lindorough
> image: [[Lindorough-177.png]]
> height: 800px
> width: 100%
> minZoom: -3.5
> maxZoom: 2.25
> defaultZoom: -1
> zoomDelta: 0.25
> unit: feet
> scale: 1
> darkMode: false
> ```
>
>  `=elink(this.burgMapLink,"Visit Burg Map on MCFG")` | [Link to Lindorough on FMG Map](https://azgaar.github.io/Fantasy-Map-Generator/?maplink=https://dl.dropboxusercontent.com/scl/fi/l7dpjh1fb1v053mc7izmw/Hitchton-2026-06-21-15-36.map?rlkey=zrhhfmejskvk1cpgiizmjbrfl&dl=0&scale=6&x=2034.71&y=615.69) | Download Helper Link: `BUTTON[mapLink-to-download]`

-LeafletMapTAIL%%

%% City Maps may need Scale adjusting - see `unit: feet` line above in Leaflet block (around line 80-81) The `scale` setting of `1` is arbitrary. It seems to work for the Burg maps - City or Village. By default the CityGen maps will likely have the `scale bar` visible. I recommend hiding it. The City Gen uses meters. The Village Gen has no scale defined. Once you hide it in the CityGen Settings, it should stay hidden for several visits to these maps.%%

%%TTRPGMapTOP-

> [!metadata|map]- Lindorough Burg Map
> ```zoommap
> imageBases:
>   - path: 01-Campaigns/Raid on the Eternal Tower/98-Raid on the Eternal Tower Assets/burg-maps/Lindorough-177.png
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
> id: map-Lindorough-177
> view:
>   zoom: .5
>   centerX: .5
>   centerY: .5
> ```
> [Link to Lindorough on FMG Map](https://azgaar.github.io/Fantasy-Map-Generator/?maplink=https://dl.dropboxusercontent.com/scl/fi/l7dpjh1fb1v053mc7izmw/Hitchton-2026-06-21-15-36.map?rlkey=zrhhfmejskvk1cpgiizmjbrfl&dl=0&scale=3)

-TTRPGMapTAIL%%

%%
ZOOMMAP-DATA id=map-Lindorough-177
{
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
    }
  ],
  "bases": [
    {
      "path": "01-Campaigns/Raid on the Eternal Tower/98-Raid on the Eternal Tower Assets/burg-maps/Lindorough-177.png"
    }
  ],
  "overlays": [],
  "activeBase": "01-Campaigns/Raid on the Eternal Tower/98-Raid on the Eternal Tower Assets/burg-maps/Lindorough-177.png",
  "measurement": {
    "displayUnit": "m",
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
Below are any notable zones or regions within `=this.burgName`

%% Zones & regions are any areas that need to be defined. See Points of Interest below as another place to add specific locations that are noteworthy. You can identify Zones/Regions in the properties above (metadata is searchable/indexable). And you can add specific info about any of them below. Use '[!note]- {Zone/Region name}' to place each one in it's own callout. %%

### History

%% The Timeline below can be edited and expanded. Each entry should start with a line like this: '>> [!timeline]'. To place items to the left, add '|t-l' to the code above. Use '|t-r' to show item on right. And then you can add 't-1' up to 't-10' to add spacing between successive entries. The Timeline lives within a callout. Each Timeline item should appear after double greater than signs (>>) and then single greater than lines (>) will divide the items. Make sure there are no blank lines to keep the callout working properly. More info about ITS+Theme's Timeline Callout: [Callout - Timeline - SlRvb's Documentation - Obsidian Publish](https://publish.obsidian.md/slrvb-docs/ITS+Theme/Callouts/Callout+-+Timeline) To hide the Timeline on this page, follow instructions on the line below that starts '(double percents) <- To hide...' & remove the double percent signs here -> %%

> [!timeline|t-l] **`=this.burgName` Founded** _Date of founding._
> `=this.burgName` was founded by...

> [!timeline|t-r] **Something Happened** *A significant event.*
> Something momentous occurred on this day.

> [!timeline|t-l] **Another thing happened** *Less significant this time.*
> Today was only a moderately important day.

%% <- To hide Timeline also remove *only* the double percent signs to the left on this line %%

## Notes

%% Further notes. These 2 callouts will be hidden by default. Change the '-' after the closing square bracket to a '+' to have it be expanded by default. %%

> [!hint]- Plot Hooks
> Plot Hooks go here...

> [!question]- Hidden Details
> Hidden Details go here...

## More Details

%% GENERAL NOTES GO HERE - free-form text or images %%

---

[[01-Campaigns/Raid on the Eternal Tower/Raid on the Eternal Tower Home|Raid on the Eternal Tower Home]] | [[01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/Hitchton-Linked Atlas|Hitchton-Linked Atlas]] | State: `=link(this.stateNotePath,this.stateName)` | Province: `=link(this.provinceName)`

```meta-bind-js-view
{burgMapLink} as mapLink
{burgName} as name
{id} as id
---
let fileName = context.bound.name + "-" + context.bound.id;
navigator.clipboard.writeText(fileName);
let url = context.bound.mapLink;
return engine.markdown.create(`
~~~meta-bind-button
label: Open
id: mapLink-to-download
style: primary
hidden: true
tooltip: Click this button to open the Burg's map on the generator page to download. The name this note expects to see will be saved to clipboard (ID-Name). Save and place in "01-Campaigns/Raid on the Eternal Tower/98-Raid on the Eternal Tower Assets" folder
action:
 type: open
 link: ${url}
~~~
`)
```

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
>> [!metadata|metadataoption]- Controls
>> These buttons control various portions of this page. They only change things on this page.
>>
>> Currently, the Burg Map from Watabou's Medieval Fanstasy City Generator and Village Generator are the default map options for Burgs. The Leaflet map display code is in the note, but it is hidden by default because the burg maps haven't been downloaded.
>> 
>> #### Controls
>>  |
>> ---|---|
>> **cssClass** |`INPUT[cssClass][inlineSelect:cssclasses]` |
>> **Leaflet Map** | `BUTTON[hide_leaf_map]` - `BUTTON[show_leaf_map]`
>> **TTRPG Tools Map** | `BUTTON[hide_ttrpg_map]` - `BUTTON[show_ttrpg_map]`
>> **Interactive Map** | `BUTTON[hide_web_map]` - `BUTTON[show_web_map]`