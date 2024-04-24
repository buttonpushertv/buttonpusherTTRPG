---
aliases: Harviva
burgMapLink: https://watabou.github.io/city-generator/?name=Harviva&population=6150&size=26&seed=9151100960472&river=0&coast=0&farms=1&citadel=0&urban_castle=0&hub=false&plaza=1&temple=0&walls=0&shantytown=0&gates=-1
burgName: Harviva
campaign: Test Campaign Ladonia
capital: 0
cell: 4821
citadel: 0
culture: Soumi
elevation: 4738 ft
emblem: TCL-Ladonia Emblem Harviva.png
feature: 5
id: 472
plaza: 1
population: 6,150
port: 0
pronounced:
provinceId: 22
provinceName: Varmu County
religion: Soumi Beliefs
rulers:
shanty: 0
shortDescription:
stateId: 4
stateName: Kunkania
temple: 0
temperature: 75°F
temperatureLikeness: Palm Springs (California)
tags:
- Burg
- Ladonia
- TCL
type: Generic
walls: 0
WBProgress: Imported
world: Ladonia
x: 2206.96
y: 943.16
---

%% You can copy the line below and paste it into this Burg's State and/or Province Leaflet map block and it will add a marker for this burg to that map that will also link back to this note. Copy this line:
marker: burg,373.840,2206.960,[[Harviva]]
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

%% If you want to place the image for the Burg in the Map(Interactive) window below, you can use Fantasy Map Generator's link to Watabou's Fantasy City or Village Generator - see the `infobox` link or the `burgMapLink` URL up in the properties of this note. You can save the map image somewhere in the vault (`91-Assets/your_campaign_subfolder`, for instance) and it will show up in this window. There is an elaborate method (see [[JSON Import How To#Wrangling FMG Burg Maps]]) to save all the maps so you can have them locally and make use of the data that was placed here on import from the JSON.%% 

> [!metadata|map]- Burg Map (Interactive)
> ```leaflet
> id: Burg-Harviva
> image: [[Harviva.webp]]
> height: 600px
> width: 100%
> minZoom: -3.5
> maxZoom: 2.25
> defaultZoom: -1.5
> zoomDelta: 0.25
> unit: meters
> scale: .5
> darkMode: false
> ```
> `=elink(this.burgMapLink,"Visit Burg Map")`
> > [!Note]- City Maps may need Scale adjusting
> > The `scale` setting of `.5` is arbitrary. It seems to work for Village maps. There is no scale, but by setting the unit (in the Leaflet block above) to `feet` things seem to feel about the right size.
> > 
> > If it's a City Generator map, there is a scale legend, but they don't seem to have a uniform sizing. The scale can be different, even between multiple maps with a `0-200m` scale legend. It's annoying, and can probably be ignored, but if you *want* to get it close, you can adjust it.
> > 
> >  In Leaflet, zoom in to the corner where the scale legend is and, by Shift-Clicking, you can create a measurement tool. Start at '0' and measure over to the first increment. Adjust the `scale` value in the Leaflet block above so that the measurement tool is accurate. It's difficult to get it exactly precise. Once you start adjusting them, though you begin to develop a sense of which way to go to get it dialed.
> >
> > Oh, and *yes*, it is annoying that Villages work in `feet` and Cities are in `meters`. These are *your* maps though. There's nothing to say you can't set City maps to all be in `yards` instead of `meters`. The distances will be near enough.
> 
> [Link to Harviva on FMG Map](https://azgaar.github.io/Fantasy-Map-Generator/?maplink=https://dl.dropboxusercontent.com/scl/fi/s1ildj50q943p20hgqsvz/Ladonia-2024-04-13-18-07.map?rlkey=tt7j7x4gqbhxu043p5q2f2ucx&dl=0&scale=3&x=2206.96&y=943.16)

> [!metadata]+ Burg Map (Live from Web)
> ```custom-frames
> frame: Watabou-Procgen Arcana
> style: height: 1000px;
> urlSuffix: /city-generator/?name=Harviva&population=6150&size=26&seed=9151100960472&river=0&coast=0&farms=1&citadel=0&urban_castle=0&hub=false&plaza=1&temple=0&walls=0&shantytown=0&gates=-1
> ```
>  `=elink(this.burgMapLink,"Visit Burg Map")`

%% All the info in this 'infobox' will appear in the panel to the right. Most of these values are pulled from the metadata in the properties above. %%

> [!infobox]
> ![[TCL-Ladonia Emblem Harviva.png]]
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