---
aliases:
- Taringley
burgMapLink: https://watabou.github.io/city-generator/?name=Taringley&population=4210&size=22&seed=5827453500304&river=0&coast=0&farms=1&citadel=0&urban_castle=0&hub=0&plaza=0&temple=0&walls=0&shantytown=0&greens=0&style=natural
burgName: Taringley
burgNameID: Taringley-304
campaign: Raid on the Eternal Tower
capital: 0
cell: 900
citadel: 0
cssclasses: sixty-pct-width
culture: Bivenil
elevation: 472 ft
emblem: Hitchton Emblem Taringley.png
group: town
feature: 2
id: 304
mapName: Hitchton
marketId: 3
marketName: Ormster-market
plaza: 0
population: 4,210
port: 
product: 17.02
pronounced: ""
provinceId: 98
provinceName: Thaxtedge Earldom
religion: Bivenil Pantheon
rulers:
shanty: 0
shortDescription: A short description of the burg.
stateId: 8
stateName: Wodminia
stateNotePath: "01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Wodminia/Wodminia"
tags:
- Burg
- Hitchton
- roet
- town
- Thaxtedge-Earldom
- Wodminia
temple: 0
temperature: 46°F
temperatureLikeness: Milwaukee (Wisconsin)
templateVersion: 7.2
treasury: 11.73
type: Generic
walls: 0
WBProgress: Imported
x: 447.12
y: 336.59
---

%% You can copy the line below and paste it into this Burg's State and/or Province Leaflet map block and it will add a marker for this burg to that map that will also link back to this note. Copy this line:
marker: burg,981.410,447.120,[[Taringley]]
%%

[[01-Campaigns/Raid on the Eternal Tower/Raid on the Eternal Tower Home|Raid on the Eternal Tower Home]] | [[01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/Hitchton-Linked Atlas|Hitchton-Linked Atlas]] | State: `=link(this.stateNotePath,this.stateName)` | Province: `=link(this.provinceName)`


# **`=this.burgName`**
*`=this.shortDescription`*

---

> [!column|3 no-t] `=this.burgName` Information
>> ### Emblem of `=this.burgName`
>> ![[Hitchton Emblem Taringley.png]]
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

%% If you want to place the image for the Burg in the Map(Interactive) window below, you can use Fantasy Map Generator's link to Watabou's Fantasy City or Village Generator - see the `infobox` link or the `burgMapLink` URL up in the properties of this note. You can save the map image somewhere in the vault (`01-Campaign/Raid on the Eternal Tower/98-Raid on the Eternal Tower Assets`, for instance) and it will show up in this window. The name for this image is pre-populated with info from the JSON Import. The filename should be the Burg's id value and the Burg's burgName - both available up in the frontmatter.

You may also use the Meta-Bind button at the bottom of the callout to open the burgMapLink in a browser window and save it there. On clicking that button, you will open the Burg's URL (City or Village) and then it will set this Burg's index and name on the clipboard like this: {id}-{burgName} - you can then just paste that in to the file name field of the save file dialog window, once you navigate to the vault folder you want to save them into.

There is an elaborate method (see [[JSON Import How To#Wrangling FMG Burg Maps]]) to save all the maps so you can have them locally and make use of the data that was placed here on import from the JSON.%%

%% Leaflet Code Block is hidden by default. To unhide, you can use the button in the Metadata section to show it.%%

%%LeafletMapTOP-

> [!metadata|map]- Burg Map (Interactive)
> ```leaflet
> id: Burg-Taringley
> image: [[Taringley-304.png]]
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
>  `=elink(this.burgMapLink,"Visit Burg Map on MCFG")` | [Link to Taringley on FMG Map](https://azgaar.github.io/Fantasy-Map-Generator/?maplink=https://dl.dropboxusercontent.com/scl/fi/l7dpjh1fb1v053mc7izmw/Hitchton-2026-06-21-15-36.map?rlkey=zrhhfmejskvk1cpgiizmjbrfl&dl=0&scale=6&x=447.12&y=336.59) | Download Helper Link: `BUTTON[mapLink-to-download]`

-LeafletMapTAIL%%

%% City Maps may need Scale adjusting - see `unit: feet` line above in Leaflet block (around line 80-81) The `scale` setting of `1` is arbitrary. It seems to work for the Burg maps - City or Village. By default the CityGen maps will likely have the `scale bar` visible. I recommend hiding it. The City Gen uses meters. The Village Gen has no scale defined. Once you hide it in the CityGen Settings, it should stay hidden for several visits to these maps.%%

%%WebMapTOP%%

> [!metadata]+ Burg Map (Live from Web)
> ```custom-frames
> frame: Watabou-Procgen Arcana
> style: height: 1000px;
> urlSuffix: https://watabou.github.io/city-generator/?name=Taringley&population=4210&size=22&seed=5827453500304&river=0&coast=0&farms=1&citadel=0&urban_castle=0&hub=0&plaza=0&temple=0&walls=0&shantytown=0&greens=0&style=natural
> ```
>
>  `=elink(this.burgMapLink,"Visit Burg Map on MCFG")` | [Link to Taringley on FMG Map](https://azgaar.github.io/Fantasy-Map-Generator/?maplink=https://dl.dropboxusercontent.com/scl/fi/l7dpjh1fb1v053mc7izmw/Hitchton-2026-06-21-15-36.map?rlkey=zrhhfmejskvk1cpgiizmjbrfl&dl=0&scale=6&x=447.12&y=336.59) | Download Helper Link: `BUTTON[mapLink-to-download]`

%%WebMapTAIL%%

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
>> **cssClass**|`INPUT[cssClass][inlineSelect:cssclasses]` |
>> Leaflet Map| `BUTTON[hide_leaf_map]` - `BUTTON[show_leaf_map]`
>> Interactive Map | `BUTTON[hide_web_map]` - `BUTTON[show_web_map]`