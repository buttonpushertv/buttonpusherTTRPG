---
alias: {{name}}
campaign: "{{@importDataRoot.info.thisCampaign}}"
capital: "[[{{getBurgName burg @importDataRoot.pack.burgs}}]]"
color: {{color}}
created: {{getDateTimestamp @importSettings}}
emblem: "{{@importDataRoot.info.thisCampaignShortCode}}-{{@importDataRoot.info.mapName}} Emblem {{fullName}}.png"
formName: {{formName}}
fullName: {{fullName}}
id: {{i}}
name: {{name}}
pronounced:
rulers:
shortDescription:
state: "[[{{getStateName state @importDataRoot.pack.states}}]]"
tags:
- Province
- {{@importDataRoot.info.mapName}}
WBProcess: FALSE
world: {{@importDataRoot.info.mapName}}
---

%% Change the World Building Process (WBProcess) property to true once you have placed/updated any info onto the page. Basically this allows sorting based on what has & hasn't had world building stuff done for it. %%

[[{{getCampaignHomeNote @importSettings}}]] | [[{{getCampaignAtlasNote @importSettings}}]] | `=link(this.state)`

%% Edit the map data by updating the 'lat' & 'long' values to center the default map view one the location. %% 

> [!metadata|map]- Map
> ```leaflet
> id: State-{{State}}
> image: [[PlaceholderImage.png]]
> bounds: [[0,0],[4622.61,11965.22]]
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
> ![[{{@importDataRoot.info.thisCampaignShortCode}}-{{@importDataRoot.info.mapName}} Emblem {{fullName}}.png]]
> ###### Info
>  |
>  ---: | --- |
>  **Pronounced:**| "`=this.pronounced`"
>  
> ###### Politics
>  |
> ---: | --- |
> **Capital** | `=link(this.capital)` |
> **Ruler(s)** | `=link(this.rulers)` |
>

# **`=this.fullName`**

%% Below is the fancy callout box where you can place some basic info. Precede any new lines with a '>' & space to place them within the box. %%
> [!recite|no-t text-center]+ Introduction
> *`= this.shortDescription` *

%% GENERAL NOTES GO HERE - free-form text or images %%

### Zones/Regions

%% Zones & regions are any areas that need to be defined. See Points of Interest below as another place to add specific locations that are noteworthy. You can identify Zones/Regions in the properties above (metadata is searchable/indexable). And you can add specific info about any of them below. Use '[!note]- {Zone/Region name}' to place each one in it's own callout. %%

## History
Siginifcant Incidents in `=this.name`'s history:

| Name | Start Year | End Year |
| ---- | ---------- | -------- |
{{#each campaigns}} 
| {{name}} | {{start}} | {{end}} |
{{/each}}

%% You can use the 'Timeline' Callout features of the ITS theme here to create a timeline of any important events. Remove the line below that reads '(delete this line to enable timeline)' and the trailing double percent signs & add a set of double percent signs here ->

> [!timeline|t-l] **`=this.name` Founded** _Date of founding._
> `=this.name` was founded by...

> [!timeline|t-r] **Something Happened** *A significant event.*
> Something momentous occurred on this day.

> [!timeline|t-l t-2] **Another thing happened** *Less significant this time.*
> Today was only a moderately important day.

(delete this line to enable timeline) %%

## Notes

%% Further notes. These 2 callouts will be hidden by default. Change the '-' after the closing square bracket to a '+' to have it be expanded by default. %%

> [!hint]- Plot Hooks
> 

> [!question]- Hidden Details
>

---

[[{{getCampaignHomeNote @importSettings}}]] | [[{{getCampaignAtlasNote @importSettings}}]] | `=link(this.state)`

