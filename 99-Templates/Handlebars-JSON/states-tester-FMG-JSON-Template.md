---
alert: {{alert}}
aliases: {{name}}
area: {{totalArea area}}
burgs: {{burgs}}
campaign: {{@importDataRoot.info.thisCampaign}}
{{setvar "currentCapital" (getBurgName capital @importDataRoot.pack.burgs)}}capital: {{"currentCapital"}}
center: {{this.center}}
color: {{color}}
created: {{getDateTimestamp @importSettings}}
culture: {{getCultureName culture @importDataRoot.pack.cultures}}
emblem: {{@importDataRoot.info.thisCampaignShortCode}}-{{@importDataRoot.info.mapName}} Emblem {{fullName}}.png
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
religion: {{getReligionName this.center @importDataRoot.pack.cells @importDataRoot.pack.religions}}
rulers:
rural: {{calcPopulation rural}}
shortDescription:
urban: {{calcPopulation urban}}
tags:
- State
- {{@importDataRoot.info.mapName}}
- {{@importDataRoot.info.campaignShortCode}}
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

> [!metadata|map]+ {{name}} Map
> ```leaflet
> id: State-{{name}}
> image: [[{{@importDataRoot.info.mapName}} World Map.svg]]
> bounds: 
> - [0,0]
> - [{{@importDataRoot.info.mapHeight}},{{@importDataRoot.info.mapWidth}}]
> coordinates: [{{getPoleLeafletXY this @importDataRoot.info}}]
> height: 600px
> width: 100%
> minZoom: -3
> maxZoom: 5
> defaultZoom: .5
> zoomDelta: 0.25
> unit: {{@importDataRoot.settings.distanceUnit}}
> scale: {{@importDataRoot.settings.distanceScale}}
> darkMode: false
> ```