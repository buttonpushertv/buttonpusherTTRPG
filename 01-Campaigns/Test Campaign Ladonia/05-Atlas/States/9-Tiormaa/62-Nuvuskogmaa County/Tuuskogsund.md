---
aliases: Tuuskogsund
burgMapLink: https://watabou.github.io/city-generator/?name=Tuuskogsund&population=9370&size=30&seed=9151100960094&river=1&coast=0&farms=1&citadel=0&urban_castle=0&hub=false&plaza=1&temple=0&walls=0&shantytown=0&gates=-1
burgName: Tuuskogsund
campaign: Test Campaign Ladonia
capital: 0
cell: 3494
citadel: 0
culture: Soumi
elevation: 472 ft
emblem: TCL-Ladonia Emblem Tuuskogsund.png
feature: 5
id: 94
plaza: 1
population: 9,370
port: 0
pronounced:
provinceId: 62
provinceName: Nuvuskogmaa County
religion: Witnesses of Saucedavas
rulers:
shanty: 0
shortDescription:
stateId: 9
stateName: Tiormaa
temple: 0
temperature: 86°F
temperatureLikeness: Austin (Texas - Summer)
tags:
- Burg
- Ladonia
- TCL
type: Generic
walls: 0
WBProgress: Imported
world: Ladonia
x: 2201.7
y: 576.69
---

%% You can copy the line below and paste it into this Burg's State and/or Province Leaflet map block and it will add a marker for this burg to that map that will also link back to this note. Copy this line:
marker: burg,740.310,2201.700,[[Tuuskogsund]]
%%

> [!metadata|metadata]- Metadata 
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
> **Aliases** | `INPUT[list:aliasese]` |
> **Rulers**|`INPUT[list:rulers]`|
> **Short Description**|`INPUT[textArea:shortDescription]`

[[Test Campaign Ladonia Home]] | [[Test Campaign Ladonia-Linked Atlas]] | `=link(this.stateName)` | `=link(this.provinceName)`

%% If you want to place the image for the Burg in the Map(Interactive) window below, you can use Fantasy Map Generator's link to Watabou's Fantasy City or Village Generator - see the `infobox` link or the `burgMapLink` URL up in the properties of this note. You can save the map image somewhere in the vault (`91-Assets/your_campaign_subfolder`, for instance) and it will show up in this window. The name for this image is pre-populated with info from the JSON Import. The filename should be the Burg's id value and the Burg's burgName - both available up in the frontmatter.

You may also use the Meta-Bind button at the bottom of the callout to open the burgMapLink in a browser window and save it there. On clicking that button, you will open the Burg's URL (City or Village) and then it will set this Burg's index and name on the clipboard like this: {id}-{burgName} - you can then just paste that in to the file name field of the save file dialog window, once you navigate to the vault folder you want to save them into.

There is an elaborate method (see [[JSON Import How To#Wrangling FMG Burg Maps]]) to save all the maps so you can have them locally and make use of the data that was placed here on import from the JSON.%% 

> [!metadata|map]- Burg Map (Interactive)
> ```leaflet
> id: Burg-Tuuskogsund
> image: [[94-Tuuskogsund.png]]
> height: 600px
> width: 100%
> minZoom: -3.5
> maxZoom: 2.25
> defaultZoom: -1.5
> zoomDelta: 0.25
> unit: feet
> scale: 1
> darkMode: false
> ```
> `=elink(this.burgMapLink,"Visit Burg Map")`
>
> ```meta-bind-js-view
> {burgMapLink} as mapLink
> {burgName} as name
> {id} as id
> ---
> let fileName = context.bound.id + "-" + context.bound.name;
> console.log("##### - :", fileName);
> navigator.clipboard.writeText(fileName);
> let url = context.bound.mapLink;
> return engine.markdown.create(`
> ~~~meta-bind-button
> label: Open map in Browser to download
> style: primary
> action:
>  type: open
>  link: ${url}
> ~~~
> `)
> ```
> 
> [Link to Tuuskogsund on FMG Map](https://azgaar.github.io/Fantasy-Map-Generator/?maplink=https://dl.dropboxusercontent.com/scl/fi/s1ildj50q943p20hgqsvz/Ladonia-2024-04-13-18-07.map?rlkey=tt7j7x4gqbhxu043p5q2f2ucx&dl=0&scale=3&x=2202.2&y=576.19)

%% City Maps may need Scale adjusting - see `unit: feet` line above in Leaflet block (around line 80-81) The `scale` setting of `1` is arbitrary. It seems to work for the Burg maps - City or Village. By default the CityGen maps will likely have the `scale bar` visible. I recommend hiding it. The City Gen uses meters. The Village Gen has no scale defined. Once you hide it in the CityGen Settings, it should stay hidden for several visits to these maps.%%

> [!metadata]- Burg Map (Live from Web)
> ```custom-frames
> frame: Watabou-Procgen Arcana
> style: height: 1000px;
> urlSuffix: /city-generator/?name=Tuuskogsund&population=9370&size=30&seed=9151100960094&river=1&coast=0&farms=1&citadel=0&urban_castle=0&hub=false&plaza=1&temple=0&walls=0&shantytown=0&gates=-1
> ```
>  `=elink(this.burgMapLink,"Visit Burg Map")`
>

%% All the info in this 'infobox' will appear in the panel to the right. Most of these values are pulled from the metadata in the properties above. %%

> [!infobox]
> ![[TCL-Ladonia Emblem Tuuskogsund.png]]
>
>  |
>  --- |
> 
>  # **Pronounced**
>  # "`=this.pronounced`"
> 
>  |
>  --- |
>  
>> [!note|title-center c-gray] ### Info
> 
>  |
>  ---: | --- |
> **Population** | `=this.population` |
> **Annual Avg. Temp** | `=this.temperature` |
> <span style="font-size:x-small">**Temps Like**</span> |<span style="font-size:x-small">`=this.temperatureLikeness`</span>|
>  **Elevation** | `=this.elevation`|
>  **State** |`=link(this.stateName)`|
>  **Province** |`=link(this.provinceName)`|
>  
> ###### Politics
>  |
> ---: | --- |
> **Ruler(s)** | `=link(this.rulers)` |
>**Dominant Culture** | `=link(this.culture)` |
> **Dominant Religion** | `=link(this.religion)` |
>

# **`=this.burgName`**
 
> [!recite|no-t text-center]+ Introduction
> *`=this.shortDescription`*

%% GENERAL NOTES GO HERE - free-form text or images %%

### Zones/Regions/Neighborhoods
Below are any notable zones or regions within `=this.burgName`

%% Zones & regions are any areas that need to be defined. See Points of Interest below as another place to add specific locations that are noteworthy. You can identify Zones/Regions in the properties above (metadata is searchable/indexable). And you can add specific info about any of them below. Use '[!note]- {Zone/Region name}' to place each one in it's own callout. %%

### History

%% You can use the 'Timeline' Callout features of the ITS theme here to create a timeline of any important events. Remove the line below that reads '(delete this line to enable timeline)' and the trailing double percent signs & add a set of double percent signs here ->

> [!timeline|t-l] **`=this.burgName` Founded** _Date of founding._
> `=this.burgName` was founded by...

> [!timeline|t-l t-2] **Something Happened** *A significant event.*
> Something momentous occurred on this day.

> [!timeline|t-r t-2] **Another thing happened** *Less significant this time.*
> Today was only a moderately important day.

(delete this line to enable timeline) %%

## Notes

%% Further notes. These 2 callouts will be hidden by default. Change the '-' after the closing square bracket to a '+' to have it be expanded by default. %%

> [!hint]- Plot Hooks
>

> [!question]- Hidden Details
> 

## More Details

---

[[Test Campaign Ladonia Home]] | [[Test Campaign Ladonia-Linked Atlas]] | `=link(this.stateName)` | `=link(this.provinceName)`