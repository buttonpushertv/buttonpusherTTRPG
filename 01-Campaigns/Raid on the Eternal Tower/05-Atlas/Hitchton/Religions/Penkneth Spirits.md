---
aliases:
area:
campaign: "Raid on the Eternal Tower"
center: 1061
code: PS
color: #80b1d3
created: 2026-07-08-18:14
cssclasses: sixty-pct-width
culture: Penkneth
deity: Havewiches, The Six
expansion: culture
expansionism: 0
followers: 325,504
form: Shamanism
id: 3
leaders:
mapName: Hitchton
origins: 0
pronounced: ""
religionName: "Penkneth Spirits"
shortDescription:
tags:
- Religion
- Hitchton
type: Folk
templateVersion: 5.0
WBProgress: Imported
---

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
> **Aliases** | `INPUT[list:aliases]` |
> **Leaders**|`INPUT[list:leaders]`|
> **Short Description**|`INPUT[textArea:shortDescription]`

[[01-Campaigns/Raid on the Eternal Tower/Raid on the Eternal Tower Home|Raid on the Eternal Tower Home]] | [[01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/Hitchton-Linked Atlas|Hitchton-Linked Atlas]]

%% During the import process, much of the data for the Leaflet fields should have been pulled in from the JSON. You will need to update the defaultZoom and (maybe) the coordinates values, but it should be pretty close - good enough to get a start with it. The goal is to cut down on the amount of manual effort you need to go through to pull your data in from the FMG JSON %%

> [!metadata|map]- Penkneth Spirits Religions Map
> ```leaflet
> id: Religion-Penkneth Spirits
> image: [[Hitchton Religions World Map.svg]]
> bounds:
> - [0,0]
> - [1318,2612]
> coordinates: [960.290,1722.330]
> height: 600px
> width: 100%
> minZoom: -3
> maxZoom: 5
> defaultZoom: .5
> zoomDelta: 0.25
> unit: mi
> scale: 5
> darkMode: false
> marker: religion,960.290,1722.330,,Religion's Center
> ```
> <div style="width: 500px; height: 20px; background-color: #80b1d3; display: flex; justify-content: center; align-items: center; font-size: 24px; color: #80b1d3;">▮</div>
> The area shown in the color above is the reach of Penkneth Spirits

%% All the info in this 'infobox' will appear in the panel to the right. Most of these values are pulled from the metadata in the properties above. %%

> [!infobox]
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
> **Deity** | `=this.deity` |
> **Form** | `=this.form`|
> **Culture** | `=this.culture`|
> **Leaders** | `=this.leaders`|
> **Followers** | `=this.followers`|
> 

# **`=this.religionName`**

> [!recite|no-t text-center]+ Introduction
> *`=this.shortDescription`*

%% GENERAL NOTES GO HERE - free-form text or images %%

### Zones/Regions/Neighborhoods
Below are any notable zones or regions within `=this.religionName`

%% Zones & regions are any areas that need to be defined. See Points of Interest below as another place to add specific locations that are noteworthy. You can identify Zones/Regions in the properties above (metadata is searchable/indexable). And you can add specific info about any of them below. Use '[!note]- {Zone/Region name}' to place each one in it's own callout. %%

### History

%% You can use the 'Timeline' Callout features of the ITS theme here to create a timeline of any important events. Remove the line below that reads '(delete this line to enable timeline)' and the trailing double percent signs & add a set of double percent signs here ->

> [!timeline|t-l] **`=this.religionName` Founded** _Date of founding._
> `=this.religionName` was founded by...

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

%% The metadata sections below allow you to add some detailed info about NPCs, Groups, Points of Interest, and Shops & Services.

Change the '-' after the closing square bracket of each callout line (starts with open bracket followed by an exclamation point) to a '+' to have it be expanded by default.
%%
---
[[01-Campaigns/Raid on the Eternal Tower/Raid on the Eternal Tower Home|Raid on the Eternal Tower Home]] | [[01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/Hitchton-Linked Atlas|Hitchton-Linked Atlas]]