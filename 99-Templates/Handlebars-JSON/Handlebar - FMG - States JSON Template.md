---
alert: {{alert}}
alias:
area: {{totalArea area}}
burgs: {{burgs}}
campaign: {{getCampaignName @importSettings}}
capital: {{getBurgName capital @importDataRoot.pack.burgs}}
color: {{color}}
created: <% tp.file.creation_date("YYYY-MM-DD HH:mm") %>
culture: {{getCultureName culture @importDataRoot.pack.cultures}}
emblem: "{{getCampaignName @importSettings}} Emblem {{fullName}}"
expansionism: {{expansionism}}
form: {{form}}
formName: {{formName}}
fullName: {{fullName}}
id: {{i}}
name: {{name}}
neighbors: 
{{#each neighbors}}
- {{getStateName this @importDataRoot.pack.states}}
{{/each}}
pronounced:
provinces:
{{#each provinces}}
- {{getProvinceName this @importDataRoot.pack.provinces}}
{{/each}}
totalPopulation: {{totalPopulation rural urban}}
rulers:
rural: {{calcPopulation rural}}
shortDescription:
urban: {{calcPopulation urban}}
tags:
- State
templateLink: "[[Handlebar - FMG - States JSON Template]]"
templateVersion: 1
type: {{type}}
WBProcess: FALSE
world: {{@importDataRoot.info.mapName}}
---
%% Change the World Building Process (WBProcess) property to true once you have placed/updated any info onto the page. You can use 'true' & 'false' or you can use other values ('started', a percentage, or 'inProgress') to indicate pages you may be working on. Basically this allows sorting based on what has & hasn't had world building stuff done for it or that you may have started, but not finished. %%

`{{getCampaignButtonCode @importSettings}}` | `{{getCampaignAtlasButtonCode @importSettings}}`

%% Edit the map data by updating the 'lat' & 'long' values to center the default map view one the location. %% 
> [!metadata|map]- {{name}} Map
> ```leaflet
> id: State-{{name}}
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
> ![[{{@importDataRoot.info.mapName}} Emblem {{fullName}}.svg]]
> ###### Info
>  |
>  ---: | --- |
>  **Pronounced:**| "`=this.pronounced`"
> **Population** | `=this.totalPopulation` |
>  |  <span style="font-size:x-small">**Urban**<br>**Rural**|`=this.urban`<br>`=this.rural`</span> |
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
>  || [[{{getStateName this @importDataRoot.pack.states}}]] |
{{/each}}  
>  **Provinces** |  |
{{#each provinces}}
>  || [[{{getProvinceName this @importDataRoot.pack.provinces}}]] |
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

%% The metadata sections below allow you to add some detailed info about NPCs, Groups, and Points of Interest.

NOTE: In practice, you probably won't be adding items to these categories from this State page. You'll likely want to add them to the appropriate Province (less often) or Burg (more often) to give each of them a specific location or base of operation. %%

> [!metadata|characters]- NPCs/Characters
> Add NPCs within the Province or Burg where they reside.
> Below is a listing of all NPCs within `=this.name`:
> ```dataview
> table Pronouns, Party1Standing AS "Party Standing", join(Occupation, ", ") AS "Occupation(s)", join(link(AssociatedGroup), ", ") AS "Group(s)"
> WHERE state = this.file.name AND contains(NoteType, "NPC") AND !contains(Condition, "Dead")
> SORT file.name ASC
> ```

> [!metadata|gropups]- Groups
> Add Groups within the Province or Burg where they reside.
> Below is a listing of all Groups within `=this.name`:
> ```dataview 
> table join(NoteType, ", ") AS "Note Type"
> WHERE state = this.file.name AND contains(NoteType, "Group")
> SORT Type ASC
> ```

> [!metadata|pois]- Points of Interest
> Add POIs within the Province or Burg where they reside.
> Below is a listing of all POIs within `=this.name`:
> ```dataview
> table join(NoteType, ", ") AS "Note Type", join(link(AffiliatedGroup), ", ") AS "Group(s)"
> WHERE state = this.file.name AND contains(NoteType, "POI")
> SORT file.name ASC
> ```

---

`{{getCampaignButtonCode @importSettings}}` | `{{getCampaignAtlasButtonCode @importSettings}}`