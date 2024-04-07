---
alias: Abderikast
burgMapLink: https://watabou.github.io/city-generator/?name=Abderikast&population=17951&size=39&seed=9151100960451&river=0&coast=0&farms=1&citadel=0&urban_castle=0&hub=false&plaza=1&temple=0&walls=1&shantytown=0&gates=-1
campaign: "Test Campaign Ladonia"
capital: 0
culture: Elladan
elevation: 2953 ft
emblem: "TCL-Ladonia Emblem Abderikast.png"
id: 451
burgName: Abderikast
population: 17,951
pronounced: 
province: "Abderikast County"
rulers: 
shortDescription: 
state: Thas
x: 1140.72
y: 1229.54
tags:
- Burg
- Ladonia
- TCL
type: Generic
WBProcess: FALSE
world: Ladonia
---

%% Change the World Building Process (WBProcess) property to true once you have placed/updated any info onto the page. Basically this allows sorting based on what has & hasn't had world building stuff done for it. %%

[[Test Campaign Ladonia Home]] | [[Test Campaign Ladonia-Linked Atlas]] | `=link(this.state)` | `=link(this.province)`

%% For Burgs, you'll probably want to update the value of 'image' to a map of the Burg itself. At the top of the 'infobox' is the Fantasy Map Generator's link to Watabou's Fantasy City Generator.%% 

> [!metadata|map]- Map
> ```leaflet
> id: Burg-Abderikast
> image: [[PlaceholderImage.png]]
> height: 600px
> width: 100%
> lat: 50
> long: 50
> minZoom: -3.5
> maxZoom: 2.25
> defaultZoom: -3
> zoomDelta: 0.25
> unit: miles
> scale: 1
> darkMode: false
> ```

> [!metadata]- City Map
> ```custom-frames
> frame: Watabou-City Generator
> style: height: 1000px;
> urlSuffix: ?name=Abderikast&population=17951&size=39&seed=9151100960451&river=0&coast=0&farms=1&citadel=0&urban_castle=0&hub=false&plaza=1&temple=0&walls=1&shantytown=0&gates=-1
> ```
>  `=elink(this.burgMapLink,"Visit Burg Map")`


%% All the info in this 'infobox' will appear in the panel to the right. Most of these values are pulled from the metadata in the properties above. %%

> [!infobox]
> ![[TCL-Ladonia Emblem Abderikast.png]]
> ###### Info
>  |
>  ---: | --- |
>  **Pronounced:**| "`=this.pronounced`"
> **Population** | `=this.population` |
>  **Elevation:** | `=this.elevation`|
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

[[Test Campaign Ladonia Home]] | [[Test Campaign Ladonia-Linked Atlas]] | `=link(this.state)` | `=link(this.province)`
