---
alert: {{alert}}
aliases: {{name}}
area: {{totalArea area}}
burgs: {{burgs}}
campaign: {{@importDataRoot.info.thisCampaign}}
capital: "[[{{getBurgName capital @importDataRoot.pack.burgs}}]]"
color: {{color}}
created: {{getDateTimestamp @importSettings}}
culture: "[[{{getCultureName culture @importDataRoot.pack.cultures}}]]"
emblem: {{@importDataRoot.info.thisCampaignShortCode}}-{{@importDataRoot.info.mapName}} Emblem {{fullName}}.png
expansionism: {{expansionism}}
form: {{form}}
formName: {{formName}}
fullName: {{fullName}}
id: {{i}}
name: {{name}}
neighbors: 
{{#each neighbors}}
- "[[{{getStateName this @importDataRoot.pack.states}}]]"
{{/each}}
pronounced:
provinces:
{{#each provinces}}
- "[[{{getProvinceName this @importDataRoot.pack.provinces}}]]"
{{/each}}
totalPopulation: {{totalPopulation rural urban}}
rulers:
rural: {{calcPopulation rural}}
shortDescription:
urban: {{calcPopulation urban}}
tags:
- State
- {{@importDataRoot.info.mapName}}
type: {{type}}
WBProcess: Imported
world: {{@importDataRoot.info.mapName}}
---

> [!metadata|metadata]- Metadata 
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

[[{{getCampaignHomeNote @importSettings}}]] | [[{{getCampaignAtlasNote @importSettings}}]]

%% Edit the map data by updating the 'lat' & 'long' values to center the default map view one the location. %% 

> [!metadata|map]+ {{name}} World Map
> ```leaflet
> id: State-{{name}}
> image: [[{{@importDataRoot.info.mapName}} World Map.svg]]
> bounds: 
> - [0,0]
> - [{{@importDataRoot.info.mapHeight}},{{@importDataRoot.info.mapWidth}}]
> coordinates: [{{@importDataRoot.info.mapCenterH}},{{@importDataRoot.info.mapCenterW}}]
> height: 600px
> width: 100%
> minZoom: -1.5
> maxZoom: 5
> defaultZoom: -1.25
> zoomDelta: 0.25
> unit: miles
> scale: 2
> darkMode: false
> marker: default, {{getLeafletBurgYPos capital @importDataRoot.pack.burgs @importDataRoot.info.mapHeight}},{{getBurgXPos capital @importDataRoot.pack.burgs}},[[{{getBurgName capital @importDataRoot.pack.burgs}}]],Capital-{{getBurgName capital @importDataRoot.pack.burgs}}
> ```

%% All the info in this 'infobox' will appear in the panel to the right. Most of these values are pulled from the metadata in the properties above. %%

> [!infobox]
> ![[{{@importDataRoot.info.thisCampaignShortCode}}-{{@importDataRoot.info.mapName}} Emblem {{fullName}}.png]]
>
>  |
>  --- |
> 
>  # **Pronounced:**
>  # "`=this.pronounced`"
> 
>  |
>  --- |
>  
>> [!note|title-center c-gray] ### Info
> 
>  |
>  ---: | --- |
> **Population** | `=this.totalPopulation` |
>  <span style="font-size:x-small">**Urban**<br>**Rural** </span>| <span style="font-size:x-small">`=this.urban`<br>`=this.rural`</span> |
> **Area (sq. mi)** | `=this.area` |
>  **Dominant Geographic Feature** | `=this.type` |
>  
> ###### Politics
>  |
> ---: | --- |
> **Capital** | `=link(this.capital)` |
> **Ruler(s)** | `=link(this.rulers)` |
> **Govt Type** | `=this.form` |
>**Dominant Culture** | `=link(this.culture)` |
> **Dominant Religion** | `=link(this.religion)` |
>
>  |
>  ---: | --- |
>  **Neighbors** |  |
{{#each neighbors}}
>  | [[{{getStateName this @importDataRoot.pack.states}}]] |
{{/each}}  
>  **Provinces** |  |
{{#each provinces}}
>  | [[{{getProvinceName this @importDataRoot.pack.provinces}}]] |
{{/each}}  

# **`=this.fullName`**

%% Below is the fancy callout box where you can place some basic info. Precede any new lines with a '>' & space to place them within the box. %%

> [!recite|no-t text-center]+ Introduction
> *`= this.shortDescription` *

%% GENERAL NOTES GO HERE - free-form text or images %%

### Zones/Regions

> [!note|no-t] Zones/Regions

%% Zones & regions are any areas that need to be defined. See Points of Interest below as another place to add specific locations that are noteworthy. You can identify Zones/Regions in the properties above (metadata is searchable/indexable). And you can add specific info about any of them below. Use '[!note]- {Zone/Region name}' to place each one in it's own callout. %%

## History
Siginifcant Incidents in `=this.name`'s history:

| Name | Start Year | End Year |
| ---- | ---------- | -------- |
{{#each campaigns}} 
| {{name}} | {{start}} | {{end}} |
{{/each}}

%% You can use the 'Timeline' Callout features of the ITS theme here to create a timeline of any important events. Remove the line below that reads '(delete this line to enable timeline)' and the trailing double percent signs & add a set of double percent signs here ->

> [!timeline|t-l] **`=this.fullname` Founded** _Date of founding._
> `=this.fullName` was founded by...

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

[[{{getCampaignHomeNote @importSettings}}]] | [[{{getCampaignAtlasNote @importSettings}}]]


