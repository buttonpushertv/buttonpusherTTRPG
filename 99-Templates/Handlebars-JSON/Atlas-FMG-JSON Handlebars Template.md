---
aliases:
- {{@importDataRoot.info.mapName}}
campaign: {{@importDataRoot.importInfo.thisCampaign}}
created: {{getDateTimestamp @importSettings}}
cssclasses: seventy-pct-width
mapName: {{@importDataRoot.info.mapName}}
pronounced:
shortDescription:
tags:
- linked-atlas
- {{@importDataRoot.importInfo.thisCampaignShortCode}}
- {{@importDataRoot.info.mapName}}
templateVersion: 7.6
WBProcess: FALSE
---

# `=this.campaign` Linked Atlas
[[{{@importDataRoot.importInfo.thisCampaignPath}}/{{@importDataRoot.importInfo.thisCampaign}} Home|{{@importDataRoot.importInfo.thisCampaign}} Home]] | [[{{@importDataRoot.importInfo.thisCampaign}}-Simple Atlas]]

%%LeafletMapTOP-
{{log "leaflet map section"}}
> [!metadata|map]- {{@importDataRoot.info.mapName}} Map
> ```leaflet
> id: {{@importDataRoot.info.mapName}}-Atlas
> image: [[{{@importDataRoot.info.mapName}} World Map.svg]]
> bounds:
> - [0,0]
> - [{{@importDataRoot.info.height}},{{@importDataRoot.info.width}}]
> coordinates: [{{divide @importDataRoot.info.height 2}},{{divide @importDataRoot.info.width 2}}]
> height: 600px
> width: 100%
> minZoom: -3
> maxZoom: 5
> defaultZoom: -0.75
> zoomDelta: 0.25
> unit: {{@importDataRoot.settings.distanceUnit}}
> scale: {{@importDataRoot.settings.distanceScale}}
> darkMode: false
> marker:
{{#withAfter pack.states 1}}
> - state,{{getPoleLeafletXY this @importDataRoot.info}},[[{{../importInfo.thisCampaignPath}}/05-Atlas/{{../info.mapName}}/States/{{name}}/{{name}}|{{name}}]], {{fullName}}
> - capital,{{getLeafletBurgXY capital ../pack.burgs ../info}},[[{{getBurgFile capital ..}}|{{getBurgName capital ../pack.burgs}}]],{{name}} Capital
{{/withAfter}}
> ```
> [Link to {{name}} on FMG Map]({{@importDataRoot.importInfo.mapDropboxFMGLink}})

-LeafletMapTAIL%%

%% If you created a Dropbox Link to your FMG map, you can save that into the Modded JSON file and it will appear in the link above. %%

%%TTRPGMapTOP%%
{{log "zoommap section"}}
> [!metadata|map]+ {{@importDataRoot.info.mapName}} Map
> ```zoommap
> imageBases:
>   - path: {{@importDataRoot.importInfo.thisCampaignPath}}/98-{{@importDataRoot.importInfo.thisCampaign}} Assets/{{@importDataRoot.info.mapName}} World Map.svg
> markerLayers:
>   - Default
>   - Capital
> minZoom: 0.50
> maxZoom: 8
> wrap: false
> responsive: false
> width: 100%
> height: 800px
> resizable: false
> resizeHandle: native
> render: dom
> align: center
> id: map-{{@importDataRoot.info.mapName}}-Atlas
> view:
>   zoom: 0.5
>   centerX: 0.5
>   centerY: 0.5
> viewportFrame: 91-Assets/Frames/Paper Frame.webP
> viewportFrameInsets:
>   unit: framePx
>   top: 15
>   right: 15
>   bottom: 15
>   left: 15
> ```
> [Link to {{name}} on FMG Map]({{@importDataRoot.importInfo.mapDropboxFMGLink}})

%%TTRPGMapTAIL%%
{{log "zoommap data section"}}
%%
ZOOMMAP-DATA id=map-{{@importDataRoot.info.mapName}}-Atlas
{
  "size": {
    "w": {{@importDataRoot.info.width}},
    "h": {{@importDataRoot.info.height}}
  },
  "layers": [
    {
      "id": "default",
      "name": "Default",
      "visible": true,
      "locked": true
    },
    {
      "id": "capital",
      "name": "Capital",
      "visible": true,
      "locked": true
    }
  ],
  "markers": [
{{#withAfter pack.states 1}}   {
      "type": "pin",
      "id": "marker_{{getBurgNamePlusID capital @importDataRoot.pack.burgs}}",
      "x": {{getZoomMapBurgX capital @importDataRoot.pack.burgs @importDataRoot.info}},
      "y": {{getZoomMapBurgY capital @importDataRoot.pack.burgs @importDataRoot.info}},
      "layer": "capital",
      "link": "{{getcapitalFile capital i @importDataRoot}}",
      "iconKey": "capital",
      "minZoom": 0.75,
      "tooltip": "{{name}} Capital - {{getBurgName capital @importDataRoot.pack.burgs}}"
    },
    {
      "type": "pin",
      "id": "marker_{{name}}_{{i}}",
      "x": {{getZoomMapPoleX this @importDataRoot.info}},
      "y": {{getZoomMapPoleY this @importDataRoot.info}},
      "layer": "default",
      "link": "{{getStateFile this @importDataRoot.info.mapName @importDataRoot.importInfo.thisCampaignPath}}",
      "iconKey": "pinBlue",
      "tooltip": "{{name}}"
    },
{{/withAfter}}   {
      "type": "pin",
      "id": "marker_l4135m",
      "x": 0.9402756508422665,
      "y": 0.9729111342943855,
      "layer": "default",
      "link": "",
      "iconKey": "pinRed",
      "tooltip": "",
      "minZoom": 8,
      "iconColor": "#8db2e2"
    }
  ],
  "bases": [
    {
      "path": "{{@importDataRoot.importInfo.thisCampaignPath}}/98-{{@importDataRoot.importInfo.thisCampaign}} Assets/{{@importDataRoot.info.mapName}} World Map.svg"
    }
  ],
  "overlays": [],
  "activeBase": "{{@importDataRoot.importInfo.thisCampaignPath}}/98-{{@importDataRoot.importInfo.thisCampaign}} Assets/{{@importDataRoot.info.mapName}} World Map.svg",
  "measurement": {
    "displayUnit": "mi",
    "scales": {},
    "customUnitPxPerUnit": {},
    "travelTimePresetIds": [],
    "travelDaysEnabled": false
  },
  "pinSizeOverrides": {},
  "grids": [],
  "panClamp": false,
  "drawLayers": [],
  "drawings": [],
  "textLayers": [],
  "secondScreen": {
    "showGrids": true
  }
}
/ZOOMMAP-DATA
%%

> [!callout]- **States**
> 
> > [!Warning]- Neutral State
> > The "Neutral" item doesn't have a Capital because it is an unorganized territory. If there is a significant Burg or location in the Neutral territory, you can link to another note in that empty space, or you can delete the Neutral line item.
>
> | ID | State | Capital |
> | -- | ----- | ------- |
{{#each pack.states}}
> | {{i}} | [[{{../importInfo.thisCampaignPath}}/05-Atlas/{{../info.mapName}}/States/{{name}}/{{name}}\|{{name}}]] | [[{{getBurgName capital ../pack.burgs}}\|{{getBurgName capital ../pack.burgs}}]] |
{{/each}}

{{log "provinces section"}}
> [!callout]- **Provinces**
>
> > [!Warning]- Neutrals & Unspecified Provincial Capitals
> > The Neutral peoples of this map have no State, hence there are no Provinces. Also, any Provincial Capital fields that contain `Unspecified` means that that province does not have a Provincial Capital.
>
>| ID  | Province | Prov. Capital | State |
>| --- | -------- | --------- | ----- |
{{#withAfter pack.provinces 1}}
>| {{i}} | [[{{../importInfo.thisCampaignPath}}/05-Atlas/{{../info.mapName}}/States/{{getStateName state ../pack.states}}/Provinces/{{fullName}}/{{fullName}}\|{{fullName}}]] | [[{{../importInfo.thisCampaignPath}}/05-Atlas/{{../info.mapName}}/States/{{getStateName state ../pack.states}}/Provinces/{{fullName}}/Burgs/{{getBurgName burg ../pack.burgs}}\|{{getBurgName burg ../pack.burgs}}]] | [[{{../importInfo.thisCampaignPath}}/05-Atlas/{{../info.mapName}}/States/{{getStateName state ../pack/states}}/{{getStateName state ../pack.states}}\|{{getStateName state ../pack.states}}]] |
{{/withAfter}}

> [!callout]- **Burgs**
> 
> | ID  | Name | Population | State | Province | Group |
> | --- | ---- | ---------- | ----- | -------- | ----- |
{{#withAfter pack.burgs 1}}
> | {{i}} | [[{{../importInfo.thisCampaignPath}}/05-Atlas/{{../info.mapName}}/States/{{getStateName state ../pack/states}}/Provinces/{{burgProvinceNameLookup cell ../pack.cells ../pack.provinces}}/Burgs/{{name}}\|{{name}}]] | {{calcPopulation population ../settings.populationRate}} | [[{{../importInfo.thisCampaignPath}}/05-Atlas/{{../info.mapName}}/States/{{getStateName state ../pack/states}}/{{getStateName state ../pack.states}}\|{{getStateName state ../pack.states}}]] | [[{{../importInfo.thisCampaignPath}}/05-Atlas/{{../info.mapName}}/States/{{getStateName state ../pack/states}}/Provinces/{{burgProvinceNameLookup cell ../pack.cells ../pack.provinces}}/{{burgProvinceNameLookup cell ../pack.cells ../pack.provinces}}\|{{burgProvinceNameLookup cell ../pack.cells ../pack.provinces}}]] | {{group}} |
{{/withAfter}}


> [!callout]- **Diplomacy**
> 
> > [!Warning]- First Line Values
> > The entries on the first line of this table are items related to the wars stories of this map. You can extract them and refactor those cells to access those elements in a more useful way. Eventually, we'd like to figure out how those elements are used and refactor it in a similar fashion to how it use in a FMG map.
> 
> | STATES {{#each pack.states}}| {{name}} {{/each}}|
> | - | - {{#each pack.states}}| - {{/each}}|
{{#each pack.states}}
> | {{name}} {{#each diplomacy}}| {{this}} {{/each}}|
{{/each}}


> [!callout]- **Cultures**
> 
> > [!Warning]- No Culture in Wildlands
> > The Wildlands have no culture because they are not organized into any kind of substantial societal structure. Feel free to construct sub-groups or animal societies on the Wildlands note to flesh out the non-traditional societal aspects of this map.
>
> | ID  | Name | Code | Type |
> | --- | ---- | -----| ---- |
{{#each pack.cultures}}
>| {{i}} | [[{{../importInfo.thisCampaignPath}}/05-Atlas/{{../info.mapName}}/Cultures/{{name}}\|{{name}}]] | {{code}} | {{type}} |
{{/each}}


> [!callout]- **Religions**
> 
> > [!Warning]- No Religion in Wildlands
> > The Wildlands have no organized religion but, again feel free to make note of non-traditional spiritual practices that exist in the lands beyond traditional cultures and societies.
> 
> Also, Religions with "Unknown" Cultures are older religions that may not have many adherents or followers but are possibly the parent religions to others.
>
> | ID  | Name | Code | Type | Form | Culture | Deity |
> | --- | ---- | -----| ---- | ---- | ------- | ----- |
{{#each pack.religions}}
> | {{i}} | [[{{../importInfo.thisCampaignPath}}/05-Atlas/{{../info.mapName}}/Religions/{{name}}\|{{name}}]] | {{code}} | {{type}} | {{form}} | [[{{../importInfo.thisCampaignPath}}/05-Atlas/{{../info.mapName}}/Cultures/{{getCultureName i ../pack.cultures}}\|{{getCultureName i ../pack.cultures}}]] | {{deity}} |
{{/each}}

> [!callout]- Markets
>
> The Markets of {{@importDataRoot.info.mapName}}
>
> | ID  | Market Name | Central Burg |
> | --- | ----------- | ------------ |
{{#each pack.markets}}
> | {{i}} | [[{{getBurgName centerBurgId ../pack.burgs}}-market]] | [[{{getBurgFile centerBurgId ..}}\|{{getBurgName centerBurgId ../pack.burgs}}]] |
{{/each}}

> [!EXAMPLE]- {{@importDataRoot.info.mapName}} Settings
> These are the settings from this FMG map
>
> #### Info Section:
> | Setting | Value |
> | ------- | ----- |
> | Version: | {{@importDataRoot.info.version}} |
> | Description: | {{@importDataRoot.info.description}} |
> | Exported At: | {{@importDataRoot.info.exportedAt}} |
> | Map Name: | {{@importDataRoot.info.mapName}} |
> | Map Width: | {{@importDataRoot.info.width}} |
> | Map Height: | {{@importDataRoot.info.height}} |
> | Map Seed: | {{@importDataRoot.info.seed}} |
> | Map ID: | {{@importDataRoot.info.mapId}} |
>
> #### Settings Section:
> | Setting | Value |
> | ------- | ----- |
> | Distance Unit: | {{@importDataRoot.settings.distanceUnit}} |
> | Distance Scale: | {{@importDataRoot.settings.distanceScale}} |
> | Area Unit: | {{@importDataRoot.settings.areaUnit}} |
> | Height Unit: | {{@importDataRoot.settings.heightUnit}} |
> | Height Exponent: | {{@importDataRoot.settings.heightExponent}} |
> | Temperature Scale: | {{@importDataRoot.settings.temperatureScale}} |
> | Population Rate: | {{@importDataRoot.settings.populationRate}} |
> | Urbanization: | {{@importDataRoot.settings.urbanization}} |
> | Map Size: | {{@importDataRoot.settings.mapSize}} |
> | Latitude: | {{@importDataRoot.settings.latitude}} |
> | Longitude: | {{@importDataRoot.settings.longitude}} |
> | Prec: | {{@importDataRoot.settings.prec}} |
> | Options: | |
> | Pin Notes: | {{@importDataRoot.settings.options.pinNotes}} |
> | Temperature Equator: | {{@importDataRoot.settings.options.temperatureEquator}} |
> | Temperature North Pole: | {{@importDataRoot.settings.options.temperatureNorthPole}} |
> | Temperature South Pole: | {{@importDataRoot.settings.options.temperatureSouthPole}} |
> | State Labels Mode: | {{@importDataRoot.settings.options.stateLabelsMode}} |
> | Show Burg Preview: | {{@importDataRoot.settings.options.showBurgPreview}} |
> | Year: | {{@importDataRoot.settings.options.year}} |
> | Era: | {{@importDataRoot.settings.options.era}} |
> | Era Short: | {{@importDataRoot.settings.options.eraShort}} |
> | Map Name: | {{@importDataRoot.settings.mapName}} |
> | Hide Labels: | {{@importDataRoot.settings.hideLabels}} |
> | Style Preset: | {{@importDataRoot.settings.stylePreset}} |
> | Rescale Labels: | {{@importDataRoot.settings.rescaleLabels}} |
> | Urban Density: | {{@importDataRoot.settings.urbanDensity}} |
>
> #### Burg Group Options
> | Group | Active | Order | Preview Gen | Pop Min | Pop Max | Percentile |
> | ----- | ------ | ----- | ----------- | ------- | ------- | ---------- |
{{#each @importDataRoot.settings.options.burgs}}
> | {{name}} | {{active}} | {{order}} | {{showBurgPreview}} | {{preview}} | {{min}} | {{max}} | {{percentile}} |
{{/each}}

> [!metadata|metadata]- Metadata & Page Controls
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
> **Short Description**|`INPUT[textArea:shortDescription]`
>
>> [!metadata|metadataoption]- Controls
>> These buttons control various portions of this page. They only change things on this page.
>> 
>> #### Controls
>>  |
>> ---|---|
>> **cssClass**|`INPUT[cssClass][inlineSelect:cssclasses]` |
>> **Leaflet Map**| `BUTTON[hide_leaf_map]` - `BUTTON[show_leaf_map]`
>> **TTRPG Tools Map**| `BUTTON[hide_ttrpg_map]` - `BUTTON[show_ttrpg_map]`






