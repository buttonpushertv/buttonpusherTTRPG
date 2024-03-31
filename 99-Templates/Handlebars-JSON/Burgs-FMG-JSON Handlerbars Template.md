---
alias:
burgMapLink: {{getBurgMapLink this @importDataRoot.info.seed @importDataRoot.pack.cells @importDataRoot.settings @importDataRoot.grid}}
campaign: "{{getCampaignName @importSettings}}"
capital: {{capital}}
cityGeneratorLink: {{getMfcgURL this @importDataRoot.info.seed @importDataRoot.pack.cells @importDataRoot.settings}}
created: {{getDateTimestamp @importSettings}}
culture: {{getCultureName culture @importDataRoot.pack.cultures}}
elevation: {{getHeight cell @importDataRoot.settings @importDataRoot.pack.cells}}
emblem: "{{getCampaignName @importSettings}} Emblem {{name}}.png"
id: {{i}}
burgName: {{name}}
population: {{calcPopulation population}}
pronounced: 
province: "{{burgProvinceLookup cell @importDataRoot.pack.cells @importDataRoot.pack.provinces}}"
rulers: 
shortDescription: 
state: {{getStateName state @importDataRoot.pack.states}}
x: {{x}}
y: {{y}}
tags:
- Burg
template: "[[Burgs-FMG-JSON Handlerbars Template]]"
templateVersion: 1
type: {{type}}
WBProcess: FALSE
world: {{@importdataRoot.info.mapName}}
---

%% Change the World Building Process (WBProcess) property to true once you have placed/updated any info onto the page. Basically this allows sorting based on what has & hasn't had world building stuff done for it. %%

[[{{getCampaignHomeNote @importSettings}}]] | [[{{getCampaignAtlasNote @importSettings}}]] | `=link(this.state)` | `=link(this.province)`

%% For Burgs, you'll probably want to update the value of 'image' to a map of the Burg itself. At the top of the 'infobox' is the Fantasy Map Generator's link to Watabou's Fantasy City Generator.%% 
> [!metadata|map]- Map
> ```leaflet
> id: Burg-{{name}}
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

%% All the info in this 'infobox' will appear in the panel to the right. Most of these values are pulled from the metadata in the properties above. %%

> [!infobox]
> ![[{{Emblem}}]]
> ###### Info
>  |
>  ---: | --- |
>  **Pronounced:**| "`=this.pronounced`"
> **Population** | `=this.population` |
>  **Elevation:** | `=this.elevation`|
>  **Burg Map Link:**|`=elink(this.burgMapLink,"Burg Map")`
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

[[{{getCampaignHomeNote @importSettings}}]] | [[{{getCampaignAtlasNote @importSettings}}]] | `=link(this.state)` | `=link(this.province)`
