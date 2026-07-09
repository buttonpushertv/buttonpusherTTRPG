{{#if (eq @importSettings.topField "")}}---
aliases:
- {{@importDataRoot.info.mapName}}
campaign: {{@importDataRoot.importInfo.thisCampaign}}
created: {{getDateTimestamp @importSettings}}
cssclasses: sixty-pct-width
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
>> **TTRPG Tools Map**| `BUTTON[hide_ttrpg_map]` - `BUTTON[show_ttrpg_map]`{{/if}}{{#if (eq @importSettings.topField "pack.states")}}---
alert: {{alert}}
aliases: 
- {{name}}
area: {{totalArea area}}
burgs: {{burgs}}
campaign: {{@importDataRoot.importInfo.thisCampaign}}
{{setvar "currentCapitalName" (getBurgName capital @importDataRoot.pack.burgs)}}capitalName: {{"currentCapitalName"}}
{{setvar "capitalPath" (getcapitalFile capital i @importDataRoot)}}capitalFile: {{"capitalPath"}}
cells: {{cells}}
center: {{this.center}}
color: {{color}}
created: {{getDateTimestamp @importSettings}}
cssclasses: sixty-pct-width
culture: {{getCultureName culture @importDataRoot.pack.cultures}}
emblem: {{@importDataRoot.info.mapName}} Emblem {{fullName}}.png
expansionism: {{expansionism}}
fileName: _{{fullName}}-{{i}}
form: {{form}}
formName: {{formName}}
fullName: {{fullName}}
id: {{i}}
mapName: {{@importDataRoot.info.mapName}}
name: {{name}}
nameID: {{name}}-{{i}}
neighbors:
{{#each neighbors}}
- {{getStateName this @importDataRoot.pack.states}}
{{/each}}
pronounced: ""
provinces:
{{#each provinces}}
- {{getProvinceName this @importDataRoot.pack.provinces}}
{{/each}}
totalPopulation: {{totalPopulation rural urban @importDataRoot.settings.populationRate}}
religion: {{getReligionName this.center @importDataRoot.pack.cells @importDataRoot.pack.religions}}
rulers:
rural: {{calcPopulation rural @importDataRoot.settings.populationRate}}
shortDescription: A short description of this state.
treasury: {{treasury}}
salesTax: {{salesTax}}
pollTax: {{pollTax}}
urban: {{calcPopulation urban @importDataRoot.settings.populationRate}}
tags:
- State
- {{@importDataRoot.info.mapName}}
- {{@importDataRoot.importInfo.thisCampaignShortCode}}
templateVersion: 7.6
type: {{type}}
WBProcess: Imported
---

[[{{@importDataRoot.importInfo.thisCampaignPath}}/{{@importDataRoot.importInfo.thisCampaign}} Home|{{@importDataRoot.importInfo.thisCampaign}} Home]] | [[{{@importDataRoot.importInfo.thisCampaignPath}}/05-Atlas/{{@importDataRoot.info.mapName}}/{{@importDataRoot.info.mapName}}-Linked Atlas|{{@importDataRoot.info.mapName}}-Linked Atlas]] | Capital: `=link(this.capitalFile,this.capitalName)`

# **`=this.fullName`**
*`=this.shortDescription`*

---
> [!column|3 no-t] `=this.fullName` Information
>> ### Emblem of `=this.fullName`
>> ![[{{@importDataRoot.info.mapName}} Emblem {{fullName}}.png]]
>
>> ### Information
>> **Pronounced:** "`=this.pronounced`"
>> **Population:** `=this.totalPopulation`
>> <span style="font-size:x-small">**Urban:** `=this.urban` | **Rural:** `=this.rural`</span>
>> **Area:** `=this.area` sq. miles
>> **Dominant Geographic Feature:** `=this.type`
>> **Capital:** `=link(this.capitalFile, this.capitalName)`
>
>> ### Politics
>> **Ruler(s):** `=link(this.rulers)`
>> **Govt Type:** `=this.form`
>> **Dominant Culture:** `=link(this.culture)`
>> **Dominant Religion:** `=link(this.religion)`
>>
>> ### Economy
>> **Treasury:** `=this.treasury`
>> **Sales Tax Rate:** `=this.salesTax`
>> **Poll Tax Rate:** `=this.pollTax`

---

%% During the import process, much of the data for the Leaflet fields should have been pulled in from the JSON. You will need to update the defaultZoom and (maybe) the coordinates values, but it should be pretty close - good enough to get a start with it. The goal is to cut down on the amount of manual effort you need to go through to pull your data in from the FMG JSON %%

%%LeafletMapTOP-

> [!metadata|map]- {{name}} Map
> ```leaflet
> id: State-{{name}}
> image: [[{{@importDataRoot.info.mapName}} World Map.svg]]
> bounds:
> - [0,0]
> - [{{@importDataRoot.info.height}},{{@importDataRoot.info.width}}]
> coordinates: [{{getPoleLeafletXY this @importDataRoot.info}}]
> height: 600px
> width: 100%
> minZoom: -3
> maxZoom: 5
> defaultZoom: .5
> zoomDelta: 0.25
> unit: {{@importDataRoot.settings.distanceUnit}}
> scale: {{@importDataRoot.settings.distanceScale}}
> marker:
> - capital,{{getLeafletBurgXY capital @importDataRoot.pack.burgs @importDataRoot.info}},[[{{"capitalPath"}}|{{currentCapitalName}}]],{{name}} Capital
> darkMode: false
> ```
> [Link to {{name}} on FMG Map]({{@importDataRoot.importInfo.mapDropboxFMGLink}}&scale=3{{getFMGCellXY this.center @importDataRoot.pack.cells}})

-LeafletMapTAIL%%

%%TTRPGMapTOP%%

> [!metadata|map]+ {{name}} Map
> ```zoommap
> imageBases:
>   - path: {{@importDataRoot.importInfo.thisCampaignPath}}/98-{{@importDataRoot.importInfo.thisCampaign}} Assets/{{@importDataRoot.info.mapName}} World Map.svg
> markerLayers:
>   - Default
> minZoom: 0.50
> maxZoom: 8
> wrap: false
> responsive: false
> width: 100%
> height: 600px
> resizable: false
> resizeHandle: native
> render: dom
> align: center
> id: map-{{name}}-{{i}}
> view:
>   zoom: {{computeStateZoomLevel cells}}
>   centerX: {{getZoomMapPoleX this @importDataRoot.info}}
>   centerY: {{getZoomMapPoleY this @importDataRoot.info}}
> ```
> [Link to {{name}} on FMG Map]({{@importDataRoot.importInfo.mapDropboxFMGLink}}&scale=3{{getFMGCellXY this.center @importDataRoot.pack.cells}})

%%TTRPGMapTAIL%%

%%
ZOOMMAP-DATA id=map-{{name}}-{{i}}
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
      "locked": false
    }
  ],
  "markers": [
    {
      "type": "pin",
      "id": "marker_{{"currentCapitalName"}}_{{capital}}",
      "x": {{getZoomMapBurgX capital @importDataRoot.pack.burgs @importDataRoot.info}},
      "y": {{getZoomMapBurgY capital @importDataRoot.pack.burgs @importDataRoot.info}},
      "layer": "default",
      "link": "{{"capitalPath"}}",
      "iconKey": "pinRed",
      "tooltip": "{{name}} Capital - {{"currentCapitalName"}}"
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

%% GENERAL NOTES GO HERE - free-form text or images %%
### Zones/Regions

%% Zones & regions are any areas that need to be defined. See Points of Interest below as another place to add specific locations that are noteworthy. You can identify Zones/Regions in the properties above (metadata is searchable/indexable). And you can add specific info about any of them below. Use '[!note]- {Zone/Region name}' to place each one in it's own callout. %%

> [!note]- Burgs
> ```dataview
> TABLE WITHOUT ID file.link as "Burgs", link(provinceName) as "Province Name"
> FROM #Burg and #roet
> WHERE econtains(stateId,this.id)
> SORT file.name ASC
> ```

> [!NOTE]- Provinces
> ```dataview
> TABLE WITHOUT ID link(provinces) as "Provinces"
> FROM ""
> WHERE file.name = this.file.name
> ```

> [!NOTE]- Neighbors
> ```dataview
> TABLE WITHOUT ID link(neighbors) as "Neighbors"
> FROM ""
> WHERE file.name = this.file.name
> ```

## History
Significant incidents in `=this.name`'s history:

%% The Timeline below can be edited and expanded. Each entry should start with a line like this: '>> [!timeline]'. To place items to the left, add '|t-l' to the code above. Use '|t-r' to show item on right. And then you can add 't-1' up to 't-10' to add spacing between successive entries. The Timeline lives within a callout. Each Timeline item should appear after double greater than signs (>>) and then single greater than lines (>) will divide the items. Make sure there are no blank lines to keep the callout working properly. More info about ITS+Theme's Timeline Callout: [Callout - Timeline - SlRvb's Documentation - Obsidian Publish](https://publish.obsidian.md/slrvb-docs/ITS+Theme/Callouts/Callout+-+Timeline) %%

> [!note]+ Timeline. 
> Edit the doc to see instructions for the Timeline feature.
>
>> [!timeline|t-l] **`=this.fullname` Founded** _Date of founding._
>> `=this.fullName` was founded by...
>
{{buildStateCampaignTimeline this}}

> [!NOTE]- History Table
> This table is imported from data in the JSON file.
>
> | Name | Start Year | End Year |
> | ---- | ---------- | -------- |
{{#each campaigns}}
> | {{name}} | {{start}} | {{end}} |
{{/each}}

## Notes

%% Further notes. These 2 callouts will be hidden by default. Change the '-' after the closing square bracket to a '+' to have it be expanded by default. %%

> [!hint]- Plot Hooks
> Plot Hooks go here...

> [!question]- Hidden Details
> Hidden Details go here...

> [!note]- Military
> ### Military Units of `=this.name`
> | Icon | Name | Infantry | Archers | Cavalry | Artillery | Fleet | Total |
> | -----| ---- | -------- | ------- | ------- | --------- | ----- | ----- |
{{#each military}}
> | {{icon}} | {{name}} | {{u.infantry}} | {{u.archers}} | {{u.cavalry}} | {{u.artillery}} | {{u.fleet}} | {{a}} |
{{/each}}

## More Details

%% GENERAL NOTES GO HERE - free-form text or images %%

---

[[{{@importDataRoot.importInfo.thisCampaignPath}}/{{@importDataRoot.importInfo.thisCampaign}} Home|{{@importDataRoot.importInfo.thisCampaign}} Home]] | [[{{@importDataRoot.importInfo.thisCampaignPath}}/05-Atlas/{{@importDataRoot.info.mapName}}/{{@importDataRoot.info.mapName}}-Linked Atlas|{{@importDataRoot.info.mapName}}-Linked Atlas]] | Capital: `=link(this.capitalFile,this.capitalName)`

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
> **Rulers**|`INPUT[list:rulers]`|
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
>> **TTRPG Tools Map**| `BUTTON[hide_ttrpg_map]` - `BUTTON[show_ttrpg_map]`{{/if}}{{#if (eq @importSettings.topField "pack.provinces")}}---
aliases:
- {{name}}
burg: {{burg}}
campaign: {{@importDataRoot.importInfo.thisCampaign}}
center: {{center}}
color: {{color}}
created: {{getDateTimestamp @importSettings}}
cssclasses: sixty-pct-width
emblem: {{@importDataRoot.info.mapName}} Emblem {{fullName}}.png
formName: {{formName}}
fullName: {{fullName}}
{{setvar "nameToPull" (getProvinceName i @importDataRoot.pack.provinces)}}pulledName: {{"nameToPull"}}
id: {{i}}
name: {{name}}
nameID: {{name}}-{{i}}
mapName: {{@importDataRoot.info.mapName}}
pronounced: ""
{{setvar "currentCapitalName" (getBurgName burg @importDataRoot.pack.burgs)}}provincialCapital: {{"currentCapitalName"}}
{{setvar "capitalPath" (getcapitalFile burg state @importDataRoot)}}capitalFile: {{"capitalPath"}}
rulers:
shortDescription: A short description of the province.
state: {{getStateName state @importDataRoot.pack.states}}
stateNotePath: "{{@importDataRoot.importInfo.thisCampaignPath}}/05-Atlas/{{@importDataRoot.info.mapName}}/States/{{getStateName state @importDataRoot.pack.states}}/{{getStateName state @importDataRoot.pack.states}}"
tags:
- Province
- {{@importDataRoot.importInfo.thisCampaignShortCode}}
- {{@importDataRoot.info.mapName}}
templateVersion: 7.3
WBProgress: Imported
---

[[{{@importDataRoot.importInfo.thisCampaignPath}}/{{@importDataRoot.importInfo.thisCampaign}} Home|{{@importDataRoot.importInfo.thisCampaign}} Home]] | [[{{@importDataRoot.importInfo.thisCampaignPath}}/05-Atlas/{{@importDataRoot.info.mapName}}/{{@importDataRoot.info.mapName}}-Linked Atlas|{{@importDataRoot.info.mapName}}-Linked Atlas]] | State: `=link(this.stateNotePath,this.stateName)`

# **`=this.fullName`**
*`= this.shortDescription` *

---

> [!column|3 no-t] `=this.fullName` Information
>> ### Emblem of `=this.fullName`
>> ![[{{@importDataRoot.info.mapName}} Emblem {{fullName}}.png]]
>
>> ### Information
>> **Pronounced:** "`=this.pronounced`"
>> **State** `=link(this.stateNotePath,stateName)`
>> **Provincial Capital** `=link(this.capitalFile,provincialCapital)`
>> ```dataview
>> TABLE WITHOUT ID file.link as "Province Burgs"
>> FROM #Burg and #roet
>> WHERE econtains(provinceId,this.id)
>> SORT file.name ASC
>> ```
>
>> ### Politics
>> **Ruler(s):** `=link(this.rulers)`
>> **Govt Type:** `=this.formName`

---

%% During the import process, much of the data for the Leaflet fields should have been pulled in from the JSON. You will need to update the defaultZoom and (maybe) the coordinates values, but it should be pretty close - good enough to get a start with it. The goal is to cut down on the amount of manual effort you need to go through to pull your data in from the FMG JSON %%

%%LeafletMapTOP-

> [!metadata|map]+ {{fullName}} - Province World Map
> ```leaflet
> id: Province-{{name}}-{{i}}
> image: [[{{@importDataRoot.info.mapName}} Provinces World Map.svg]]
> bounds:
> - [0,0]
> - [{{@importDataRoot.info.height}},{{@importDataRoot.info.width}}]
> coordinates: [{{getCellLeafletXY this.center @importDataRoot.pack.cells @importDataRoot.info}}]
> height: 600px
> width: 100%
> minZoom: -3
> maxZoom: 5
> defaultZoom: .5
> zoomDelta: 0.25
> unit: {{@importDataRoot.settings.distanceUnit}}
> scale: {{@importDataRoot.settings.distanceScale}}
> darkMode: false
> marker: prov_capital,{{getLeafletBurgXY burg @importDataRoot.pack.burgs @importDataRoot.info}},[[{{"capitalPath"}}|{{currentCapitalName}}]],{{name}} Provincial Capital
> ```
>  [Link to {{fullName}} on FMG Map]({{@importDataRoot.importInfo.mapDropboxFMGLink}}&scale=3{{getFMGCellXY this.center @importDataRoot.pack.cells}})

-LeafletMapTAIL%%

%%TTRPGMapTOP%%

> [!metadata|map]+ {{fullName}} Province Map
> ```zoommap
> imageBases:
>   - path: {{@importDataRoot.importInfo.thisCampaignPath}}/98-{{@importDataRoot.importInfo.thisCampaign}} Assets/{{@importDataRoot.info.mapName}} Provinces World Map.svg
> markerLayers:
>   - Default
>   - Capital
> minZoom: 0.50
> maxZoom: 8
> wrap: false
> responsive: false
> width: 100%
> height: 600px
> resizable: false
> resizeHandle: native
> render: dom
> align: center
> id: map-{{name}}-{{i}}
> view:
>   zoom: 1.5
>   centerX: {{getZoomMapPoleX this @importDataRoot.info}}
>   centerY: {{getZoomMapPoleY this @importDataRoot.info}}
> ```
> [Link to {{name}} on FMG Map]({{@importDataRoot.importInfo.mapDropboxFMGLink}}&scale=3{{getFMGCellXY this.center @importDataRoot.pack.cells}})

%%TTRPGMapTAIL%%

%%
ZOOMMAP-DATA id=map-{{name}}-{{i}}
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
      "locked": false
    },
    {
      "id": "capital",
      "name": "Capital",
      "visible": true,
      "locked": true
    }
  ],
  "markers": [
    {
      "type": "pin",
      "id": "marker_{{"currentCapitalName"}}_{{burg}}",
      "x": {{getZoomMapBurgX burg @importDataRoot.pack.burgs @importDataRoot.info}},
      "y": {{getZoomMapBurgY burg @importDataRoot.pack.burgs @importDataRoot.info}},
      "layer": "default",
      "link": "{{"capitalPath"}}",
      "iconKey": "pinRed",
      "tooltip": "{{fullName}} Capital - {{"currentCapitalName"}}"
    }
  ],
  "bases": [
    {
      "path": "{{@importDataRoot.importInfo.thisCampaignPath}}/98-{{@importDataRoot.importInfo.thisCampaign}} Assets/{{@importDataRoot.info.mapName}} Provinces World Map.svg"
    }
  ],
  "overlays": [],
  "activeBase": "{{@importDataRoot.importInfo.thisCampaignPath}}/98-{{@importDataRoot.importInfo.thisCampaign}} Assets/{{@importDataRoot.info.mapName}} Provinces World Map.svg",
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

### Zones/Regions

%% Zones & regions are any areas that need to be defined. See Points of Interest below as another place to add specific locations that are noteworthy. You can identify Zones/Regions in the properties above (metadata is searchable/indexable). And you can add specific info about any of them below. Use '[!note]- {Zone/Region name}' to place each one in it's own callout. %%

### History

%% The Timeline below can be edited and expanded. Each entry should start with a line like this: '>> [!timeline]'. To place items to the left, add '|t-l' to the code above. Use '|t-r' to show item on right. And then you can add 't-1' up to 't-10' to add spacing between successive entries. The Timeline lives within a callout. Each Timeline item should appear after double greater than signs (>>) and then single greater than lines (>) will divide the items. Make sure there are no blank lines to keep the callout working properly. More info about ITS+Theme's Timeline Callout: [Callout - Timeline - SlRvb's Documentation - Obsidian Publish](https://publish.obsidian.md/slrvb-docs/ITS+Theme/Callouts/Callout+-+Timeline) To hide the Timeline on this page, follow instructions on the line below that starts '(double percents) <- To hide...' & remove the double percent signs here -> %%

> [!timeline|t-l] **`=this.fullName` Founded** _Date of founding._
> `=this.burgName` was founded by...

> [!timeline|t-r] **Something Happened** *A significant event.*
> Something momentous occurred on this day.

> [!timeline|t-l] **Another thing happened** *Less significant this time.*
> Today was only a moderately important day.

%% <- To hide Timeline also remove *only* the double percent signs to the left on this line %%

## Notes

%% Further notes. These 2 callouts will be hidden by default. Change the '-' after the closing square bracket to a '+' to have it be expanded by default. %%

> [!hint]- Plot Hooks
>

> [!question]- Hidden Details
>

## More Details

%% GENERAL NOTES GO HERE - free-form text or images %%

---

[[{{@importDataRoot.importInfo.thisCampaignPath}}/{{@importDataRoot.importInfo.thisCampaign}} Home|{{@importDataRoot.importInfo.thisCampaign}} Home]] | [[{{@importDataRoot.importInfo.thisCampaignPath}}/05-Atlas/{{@importDataRoot.info.mapName}}/{{@importDataRoot.info.mapName}}-Linked Atlas|{{@importDataRoot.info.mapName}}-Linked Atlas]] | State: `=link(this.stateNotePath,this.stateName)`

> [!metadata|metadata]- Metadata & Page Controls
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
> **Rulers**|`INPUT[list:rulers]`|
> **Short Description**|`INPUT[textArea:shortDescription]`
>
>> [!metadata|metadataoption]- Controls
>> These buttons control various portions of this page. They only change things on this page.
>> 
>> #### Controls
>>  |
>> ---|---|
>> **cssClass**|`INPUT[cssClass][inlineSelect:cssclasses]` |
>> **Leaflet Map**| `BUTTON[hide_leaf_map]` - `BUTTON[show_leaf_map]`{{/if}}{{#if (eq @importSettings.topField "pack.burgs")}}---
aliases:
- {{name}}
- {{name}}-{{i}}
burgMapLink: {{getBurgMapLink this @importDataRoot.info.seed @importDataRoot.pack.cells @importDataRoot.pack.routes @importDataRoot.settings @importDataRoot.grid}}
burgName: {{name}}
burgNameID: {{name}}-{{i}}
campaign: {{@importDataRoot.importInfo.thisCampaign}}
capital: {{capital}}
cell: {{cell}}
citadel: {{citadel}}
cssclasses: sixty-pct-width
culture: {{getCultureName culture @importDataRoot.pack.cultures}}
elevation: {{getHeight cell @importDataRoot.settings @importDataRoot.pack.cells}}
emblem: {{@importDataRoot.info.mapName}} Emblem {{name}}.png
group: {{group}}
feature: {{feature}}
id: {{i}}
mapName: {{@importDataRoot.info.mapName}}
marketId: {{market}}
marketName: {{getBurgMarket market @importDataRoot.pack.burgs @importDataRoot.pack.markets}}-market
plaza: {{plaza}}
population: {{calcPopulation population @importDataRoot.settings.populationRate}}
port: {{port}}
product: {{product}}
pronounced: ""
provinceId: {{getProvinceIdFromCell cell @importDataRoot.pack.cells}}
provinceName: {{burgProvinceNameLookup cell @importDataRoot.pack.cells @importDataRoot.pack.provinces}}
religion: {{getReligionName this.cell @importDataRoot.pack.cells @importDataRoot.pack.religions}}
rulers:
shanty: {{shanty}}
shortDescription: A short description of the burg.
stateId: {{state}}
stateName: {{getStateName state @importDataRoot.pack.states}}
stateNotePath: "{{@importDataRoot.importInfo.thisCampaignPath}}/05-Atlas/{{@importDataRoot.info.mapName}}/States/{{getStateName state @importDataRoot.pack.states}}/{{getStateName state @importDataRoot.pack.states}}"
tags:
- Burg
- {{@importDataRoot.info.mapName}}
- {{@importDataRoot.importInfo.thisCampaignShortCode}}
- {{group}}
- {{burgProvinceNameLookupTag cell @importDataRoot.pack.cells @importDataRoot.pack.provinces}}
- {{getStateName state @importDataRoot.pack.states}}
temple: {{temple}}
temperature: {{getTemperature this @importDataRoot}}
temperatureLikeness: {{getTemperatureLikeness this @importDataRoot}}
templateVersion: 7.4
treasury: {{treasury}}
type: {{type}}
walls: {{walls}}
WBProgress: Imported
x: {{x}}
y: {{y}}
---

%% You can copy the line below and paste it into this Burg's State and/or Province Leaflet map block and it will add a marker for this burg to that map that will also link back to this note. Copy this line:
marker: burg,{{getLeafletBurgXY this.i @importDataRoot.pack.burgs @importDataRoot.info}},[[{{name}}]]
%%

[[{{@importDataRoot.importInfo.thisCampaignPath}}/{{@importDataRoot.importInfo.thisCampaign}} Home|{{@importDataRoot.importInfo.thisCampaign}} Home]] | [[{{@importDataRoot.importInfo.thisCampaignPath}}/05-Atlas/{{@importDataRoot.info.mapName}}/{{@importDataRoot.info.mapName}}-Linked Atlas|{{@importDataRoot.info.mapName}}-Linked Atlas]] | State: `=link(this.stateNotePath,this.stateName)` | Province: `=link(this.provinceName)`


# **`=this.burgName`**
*`=this.shortDescription`*

---

> [!column|3 no-t] `=this.burgName` Information
>> ### Emblem of `=this.burgName`
>> ![[{{@importDataRoot.info.mapName}} Emblem {{name}}.png]]
>
>> ### Information
>> **Pronounced:**: "`=this.pronounced`"
>> **Population:**  `=this.population` 
>> **State:** `=link(this.stateNotePath,stateName)`
>> **Province:** `=link(this.provinceName)`
>> **Elevation:**  `=this.elevation`
>> **Annual Avg. Temp:**  `=this.temperature` 
>> <span style="font-size:x-small">**Temps Like**</span> <span style="font-size:x-small">`=this.temperatureLikeness`</span>
>
>> ### Politics
>> **Ruler(s):**  `=link(this.rulers)` 
>> **Dominant Culture:**  `=link(this.culture)` 
>> **Dominant Religion:**  `=link(this.religion)`
>> **Market:**  `=link(this.marketName)`

---

%%WebMapTOP%%

> [!metadata]+ Burg Map (Live from Web)
> ```custom-frames
> frame: Watabou-Procgen Arcana
> style: height: 1000px;
> urlSuffix: {{getBurgMapLink this @importDataRoot.info.seed @importDataRoot.pack.cells @importDataRoot.pack.cells @importDataRoot.settings @importDataRoot.grid}}
> ```
>
>  `=elink(this.burgMapLink,"Visit Burg Map on MCFG")` | [Link to {{name}} on FMG Map]({{@importDataRoot.importInfo.mapDropboxFMGLink}}&scale=6{{getFMGCellXY this.cell @importDataRoot.pack.cells}}) | Download Helper Link: `BUTTON[mapLink-to-download]`

%%WebMapTAIL%%

%% If you want to place the image for the Burg in the Map(Interactive) window below, you can use Fantasy Map Generator's link to Watabou's Fantasy City or Village Generator - see the `infobox` link or the `burgMapLink` URL up in the properties of this note. You can save the map image somewhere in the vault (`01-Campaign/{{@importDataRoot.importInfo.thisCampaign}}/98-{{@importDataRoot.importInfo.thisCampaign}} Assets`, for instance) and it will show up in this window. The name for this image is pre-populated with info from the JSON Import. The filename should be the Burg's id value and the Burg's burgName - both available up in the frontmatter.

You may also use the Meta-Bind button at the bottom of the callout to open the burgMapLink in a browser window and save it there. On clicking that button, you will open the Burg's URL (City or Village) and then it will set this Burg's index and name on the clipboard like this: {id}-{burgName} - you can then just paste that in to the file name field of the save file dialog window, once you navigate to the vault folder you want to save them into.

There is an elaborate method (see [[JSON Import How To#Wrangling FMG Burg Maps]]) to save all the maps so you can have them locally and make use of the data that was placed here on import from the JSON.%%

%% Leaflet Code Block is hidden by default. To unhide, you can use the button in the Metadata section to show it.%%

%%LeafletMapTOP-

> [!metadata|map]- Burg Map (Interactive)
> ```leaflet
> id: Burg-{{name}}
> image: [[{{name}}-{{i}}.png]]
> height: 800px
> width: 100%
> minZoom: -3.5
> maxZoom: 2.25
> defaultZoom: -1
> zoomDelta: 0.25
> unit: feet
> scale: 1
> darkMode: false
> ```
>
>  `=elink(this.burgMapLink,"Visit Burg Map on MCFG")` | [Link to {{name}} on FMG Map]({{@importDataRoot.importInfo.mapDropboxFMGLink}}&scale=6{{getFMGCellXY this.cell @importDataRoot.pack.cells}}) | Download Helper Link: `BUTTON[mapLink-to-download]`

-LeafletMapTAIL%%

%% City Maps may need Scale adjusting - see `unit: feet` line above in Leaflet block (around line 80-81) The `scale` setting of `1` is arbitrary. It seems to work for the Burg maps - City or Village. By default the CityGen maps will likely have the `scale bar` visible. I recommend hiding it. The City Gen uses meters. The Village Gen has no scale defined. Once you hide it in the CityGen Settings, it should stay hidden for several visits to these maps.%%

%%TTRPGMapTOP%%

> [!metadata|map]+ {{name}} Burg Map
> ```zoommap
> imageBases:
>   - path: {{@importDataRoot.importInfo.thisCampaignPath}}/98-{{@importDataRoot.importInfo.thisCampaign}} Assets/burg-maps/{{name}}-{{i}}.png
> markerLayers:
>   - Default
> minZoom: 0.50
> maxZoom: 8
> wrap: false
> responsive: false
> width: 100%
> height: 600px
> resizable: false
> resizeHandle: native
> render: dom
> align: center
> id: map-{{name}}-{{i}}
> view:
>   zoom: .5
>   centerX: .5
>   centerY: .5
> ```
> [Link to {{name}} on FMG Map]({{@importDataRoot.importInfo.mapDropboxFMGLink}}&scale=3{{getFMGCellXY this.center @importDataRoot.pack.cells}})

%%TTRPGMapTAIL%%

%%
ZOOMMAP-DATA id=map-{{name}}-{{i}}
{
  "layers": [
    {
      "id": "default",
      "name": "Default",
      "visible": true,
      "locked": false
    }
  ],
  "markers": [
    {
    }
  ],
  "bases": [
    {
      "path": "{{@importDataRoot.importInfo.thisCampaignPath}}/98-{{@importDataRoot.importInfo.thisCampaign}} Assets/burg-maps/{{name}}-{{i}}.png"
    }
  ],
  "overlays": [],
  "activeBase": "{{@importDataRoot.importInfo.thisCampaignPath}}/98-{{@importDataRoot.importInfo.thisCampaign}} Assets/burg-maps/{{name}}-{{i}}.png",
  "measurement": {
    "displayUnit": "m",
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

### Zones/Regions/Neighborhoods
Below are any notable zones or regions within `=this.burgName`

%% Zones & regions are any areas that need to be defined. See Points of Interest below as another place to add specific locations that are noteworthy. You can identify Zones/Regions in the properties above (metadata is searchable/indexable). And you can add specific info about any of them below. Use '[!note]- {Zone/Region name}' to place each one in it's own callout. %%

### History

%% The Timeline below can be edited and expanded. Each entry should start with a line like this: '>> [!timeline]'. To place items to the left, add '|t-l' to the code above. Use '|t-r' to show item on right. And then you can add 't-1' up to 't-10' to add spacing between successive entries. The Timeline lives within a callout. Each Timeline item should appear after double greater than signs (>>) and then single greater than lines (>) will divide the items. Make sure there are no blank lines to keep the callout working properly. More info about ITS+Theme's Timeline Callout: [Callout - Timeline - SlRvb's Documentation - Obsidian Publish](https://publish.obsidian.md/slrvb-docs/ITS+Theme/Callouts/Callout+-+Timeline) To hide the Timeline on this page, follow instructions on the line below that starts '(double percents) <- To hide...' & remove the double percent signs here -> %%

> [!timeline|t-l] **`=this.burgName` Founded** _Date of founding._
> `=this.burgName` was founded by...

> [!timeline|t-r] **Something Happened** *A significant event.*
> Something momentous occurred on this day.

> [!timeline|t-l] **Another thing happened** *Less significant this time.*
> Today was only a moderately important day.

%% <- To hide Timeline also remove *only* the double percent signs to the left on this line %%

## Notes

%% Further notes. These 2 callouts will be hidden by default. Change the '-' after the closing square bracket to a '+' to have it be expanded by default. %%

> [!hint]- Plot Hooks
> Plot Hooks go here...

> [!question]- Hidden Details
> Hidden Details go here...

## More Details

%% GENERAL NOTES GO HERE - free-form text or images %%

---

[[{{@importDataRoot.importInfo.thisCampaignPath}}/{{@importDataRoot.importInfo.thisCampaign}} Home|{{@importDataRoot.importInfo.thisCampaign}} Home]] | [[{{@importDataRoot.importInfo.thisCampaignPath}}/05-Atlas/{{@importDataRoot.info.mapName}}/{{@importDataRoot.info.mapName}}-Linked Atlas|{{@importDataRoot.info.mapName}}-Linked Atlas]] | State: `=link(this.stateNotePath,this.stateName)` | Province: `=link(this.provinceName)`

```meta-bind-js-view
{burgMapLink} as mapLink
{burgName} as name
{id} as id
---
let fileName = context.bound.name + "-" + context.bound.id;
navigator.clipboard.writeText(fileName);
let url = context.bound.mapLink;
return engine.markdown.create(`
~~~meta-bind-button
label: Open
id: mapLink-to-download
style: primary
hidden: true
tooltip: Click this button to open the Burg's map on the generator page to download. The name this note expects to see will be saved to clipboard (ID-Name). Save and place in "01-Campaigns/{{@importDataRoot.importInfo.thisCampaign}}/98-{{@importDataRoot.importInfo.thisCampaign}} Assets" folder
action:
 type: open
 link: ${url}
~~~
`)
```

> [!metadata|metadata]- Metadata & Page Controls
>> [!metadata|metadataoption]+ System
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
>> [!metadata|metadataoption]+ Info
>> #### Info
>>  |
>> ---|---|
> **Pronounced** |  `INPUT[text:pronounced]`
> **Aliases** | `INPUT[list:aliases]` |
> **Rulers**|`INPUT[list:rulers]`|
> **Short Description**|`INPUT[textArea:shortDescription]`
>
>> [!metadata|metadataoption]- Controls
>> These buttons control various portions of this page. They only change things on this page.
>>
>> Currently, the Burg Map from Watabou's Medieval Fanstasy City Generator and Village Generator are the default map options for Burgs. The Leaflet map display code is in the note, but it is hidden by default because the burg maps haven't been downloaded.
>> 
>> #### Controls
>>  |
>> ---|---|
>> **cssClass** |`INPUT[cssClass][inlineSelect:cssclasses]` |
>> **Leaflet Map** | `BUTTON[hide_leaf_map]` - `BUTTON[show_leaf_map]`
>> **TTRPG Tools Map** | `BUTTON[hide_ttrpg_map]` - `BUTTON[show_ttrpg_map]`
>> **Interactive Map** | `BUTTON[hide_web_map]` - `BUTTON[show_web_map]`{{/if}}{{#if (eq @importSettings.topField "pack.cultures")}}---
aliases:
campaign: "{{@importDataRoot.importInfo.thisCampaign}}"
cultureName: "{{name}}"
code: {{code}}
color: {{color}}
center: {{center}}
created: {{getDateTimestamp @importSettings}}
cssclasses: sixty-pct-width
expansionism: {{expansionism}}
id: {{i}}
leaders:
mapName: {{@importDataRoot.info.mapName}}
namesbase: {{base}}
namesbaselang: {{getCultureBaseName base @importDataRoot.nameBases}}
origins: {{origins}}
pronounced: ""
shortDescription:
tags:
- Culture
- {{@importDataRoot.info.mapName}}
templateVersion: 7.0
type: {{type}}
WBProcess: Imported
---

> [!metadata|metadata]- Metadata
>> [!metadata|metadataoption]- System
>> #### System
>>  |
>> ---|---|
>> **Tags** | `INPUT[Tags][inlineListSuggester:tags]` |
>> **World Building Progress**| `INPUT[WBProgress][inlineSelect:wbprogress]`|
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

[[{{@importDataRoot.importInfo.thisCampaignPath}}/{{@importDataRoot.importInfo.thisCampaign}} Home|{{@importDataRoot.importInfo.thisCampaign}} Home]] | [[{{@importDataRoot.importInfo.thisCampaignPath}}/05-Atlas/{{@importDataRoot.info.mapName}}/{{@importDataRoot.info.mapName}}-Linked Atlas|{{@importDataRoot.info.mapName}}-Linked Atlas]]

%% All the info in this 'infobox' will appear in the panel to the right. Most of these values are pulled from the metadata in the properties above. %%

> [!infobox]
> ###### Info
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
> 
>

# **`=this.cultureName`**

> [!recite|no-t text-center]+ Introduction
> *`=this.shortDescription`*

%% GENERAL NOTES GO HERE - free-form text or images %%

### Zones/Regions/Neighborhoods
Below are any notable zones or regions within `=this.cultureName`

%% Zones & regions are any areas that need to be defined. See Points of Interest below as another place to add specific locations that are noteworthy. You can identify Zones/Regions in the properties above (metadata is searchable/indexable). And you can add specific info about any of them below. Use '[!note]- {Zone/Region name}' to place each one in it's own callout. %%

### History

%% You can use the 'Timeline' Callout features of the ITS theme here to create a timeline of any important events. Remove the line below that reads '(delete this line to enable timeline)' and the trailing double percent signs & add a set of double percent signs here ->

> [!timeline|t-l] **`=this.cultureName` Founded** _Date of founding._
> `=this.cultureName` was founded by...

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

> [!Note]- NameBase
> The names listed below are the base names this Culture uses to derive names. They are based on `=this.namesbaselang`.
>
> ![[{{@importDataRoot.importInfo.thisCampaignPath}}/05-Atlas/{{@importDataRoot.info.mapName}}/Cultures/_NameBases/{{getCultureBaseName base @importDataRoot.nameBases}}|{{getCultureBaseName base @importDataRoot.nameBases}} no-t]]
>

## More Details

%% The metadata sections below allow you to add some detailed info about NPCs, Groups, Points of Interest, and Shops & Services.

Change the '-' after the closing square bracket of each callout line (starts with open bracket followed by an exclamation point) to a '+' to have it be expanded by default.
%%


---

[[{{@importDataRoot.importInfo.thisCampaignPath}}/{{@importDataRoot.importInfo.thisCampaign}} Home|{{@importDataRoot.importInfo.thisCampaign}} Home]] | [[{{@importDataRoot.importInfo.thisCampaignPath}}/05-Atlas/{{@importDataRoot.info.mapName}}/{{@importDataRoot.info.mapName}}-Linked Atlas|{{@importDataRoot.info.mapName}}-Linked Atlas]]{{/if}}{{#if (eq @importSettings.topField "pack.religions")}}---
aliases:
area:
campaign: "{{@importDataRoot.importInfo.thisCampaign}}"
center: {{this.center}}
code: {{code}}
color: {{color}}
created: {{getDateTimestamp @importSettings}}
cssclasses: sixty-pct-width
culture: {{getCultureName culture @importDataRoot.pack.cultures}}
deity: {{deity}}
expansion: {{expansion}}
expansionism: {{expansionism}}
followers: {{getReligionFollowers this @importDataRoot.pack.cells @importDataRoot.pack.burgs @importDataRoot.settings}}
form: {{form}}
id: {{i}}
leaders:
mapName: {{@importDataRoot.info.mapName}}
origins: {{origins}}
pronounced: ""
religionName: "{{name}}"
shortDescription:
tags:
- Religion
- {{@importDataRoot.info.mapName}}
type: {{type}}
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

[[{{@importDataRoot.importInfo.thisCampaignPath}}/{{@importDataRoot.importInfo.thisCampaign}} Home|{{@importDataRoot.importInfo.thisCampaign}} Home]] | [[{{@importDataRoot.importInfo.thisCampaignPath}}/05-Atlas/{{@importDataRoot.info.mapName}}/{{@importDataRoot.info.mapName}}-Linked Atlas|{{@importDataRoot.info.mapName}}-Linked Atlas]]

%% During the import process, much of the data for the Leaflet fields should have been pulled in from the JSON. You will need to update the defaultZoom and (maybe) the coordinates values, but it should be pretty close - good enough to get a start with it. The goal is to cut down on the amount of manual effort you need to go through to pull your data in from the FMG JSON %%

> [!metadata|map]- {{name}} Religions Map
> ```leaflet
> id: Religion-{{name}}
> image: [[{{@importDataRoot.info.mapName}} Religions World Map.svg]]
> bounds:
> - [0,0]
> - [{{@importDataRoot.info.height}},{{@importDataRoot.info.width}}]
> coordinates: [{{getCellLeafletXY center @importDataRoot.pack.cells @importDataRoot.info}}]
> height: 600px
> width: 100%
> minZoom: -3
> maxZoom: 5
> defaultZoom: .5
> zoomDelta: 0.25
> unit: {{@importDataRoot.settings.distanceUnit}}
> scale: {{@importDataRoot.settings.distanceScale}}
> darkMode: false
> marker: religion,{{getCellLeafletXY center @importDataRoot.pack.cells @importDataRoot.info}},,Religion's Center
> ```
> <div style="width: 500px; height: 20px; background-color: {{color}}; display: flex; justify-content: center; align-items: center; font-size: 24px; color: {{color}};">▮</div>
> The area shown in the color above is the reach of {{name}}

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
[[{{@importDataRoot.importInfo.thisCampaignPath}}/{{@importDataRoot.importInfo.thisCampaign}} Home|{{@importDataRoot.importInfo.thisCampaign}} Home]] | [[{{@importDataRoot.importInfo.thisCampaignPath}}/05-Atlas/{{@importDataRoot.info.mapName}}/{{@importDataRoot.info.mapName}}-Linked Atlas|{{@importDataRoot.info.mapName}}-Linked Atlas]]{{/if}}{{#if (eq @importSettings.topField "pack.markets")}}---
aliases:
- {{getBurgName centerBurgId @importDataRoot.pack.burgs}}
- {{getBurgName centerBurgId @importDataRoot.pack.burgs}}-market
centerBurgId: {{centerBurgId}}
{{setvar "currBurgNamePlusID" (getBurgNamePlusID centerBurgId @importDataRoot.pack.burgs)}}centerBurgNamePlusID: {{"currBurgNamePlusID"}}
{{setvar "centerBurgStateName" (getBurgStateName centerBurgId @importDataRoot.pack.burgs @importDataRoot.pack.states)}}centerBurgStateName: {{"centerBurgStateName"}}
{{setvar "centerBurgFile" (getBurgFile centerBurgId @importDataRoot)}}centerBurgFilePath: "{{"centerBurgFile"}}"
cssclasses: sixty-pct-width
id: {{i}}
{{setvar "currMarketName" (getBurgName centerBurgId @importDataRoot.pack.burgs)}}marketName: {{"currMarketName"}}
mapName: {{@importDataRoot.info.mapName}}
colorHex: "{{color}}"
pronounced: 
leaders:
shortDescription: A short description of this market.
tags:
- Market
- {{getBurgName centerBurgId @importDataRoot.pack.burgs}}
- {{@importDataRoot.info.mapName}}
- {{@importDataRoot.importInfo.thisCampaignShortCode}}
templateVersion: 7.0
WBProgress: Imported
centerBurgx: {{getBurgX centerBurgId @importDataRoot.pack.burgs}}
centerBurgy: {{getBurgY centerBurgId @importDataRoot.pack.burgs}}
---

[[{{@importDataRoot.importInfo.thisCampaignPath}}/{{@importDataRoot.importInfo.thisCampaign}} Home|{{@importDataRoot.importInfo.thisCampaign}} Home]] | [[{{@importDataRoot.importInfo.thisCampaignPath}}/05-Atlas/{{@importDataRoot.info.mapName}}/{{@importDataRoot.info.mapName}}-Linked Atlas|{{@importDataRoot.info.mapName}}-Linked Atlas]] | Center Burg: `=link(this.centerBurgFilePath)` 

# **`=this.marketName`**
*`=this.shortDescription`*

---

> [!column|no-t] `=this.marketName` Information
>> ### Information
>> **Center Burg:** `=link(this.centerBurgFilePath,centerBurgName)`
>>  **Center Burg State:** `=link(this.centerBurgStateName)`
>> **Leader(s):**  `=link(this.leaders)`
>
>> ```dataview
>> TABLE WITHOUT ID file.link as "Market Burgs", link(provinceName) as "Province", link(stateName) as "State"
>> FROM #Burg and #roet
>> WHERE econtains(marketId,this.id)
>> SORT file.name ASC
>> ```
---

## Goods

{{getMarketGoodsTable i @importDataRoot.pack.markets @importDataRoot.pack.goods}}

### History

%% The Timeline below can be edited and expanded. Each entry should start with a line like this: '>> [!timeline]'. To place items to the left, add '|t-l' to the code above. Use '|t-r' to show item on right. And then you can add 't-1' up to 't-10' to add spacing between successive entries. The Timeline lives within a callout. Each Timeline item should appear after double greater than signs (>>) and then single greater than lines (>) will divide the items. Make sure there are no blank lines to keep the callout working properly. More info about ITS+Theme's Timeline Callout: [Callout - Timeline - SlRvb's Documentation - Obsidian Publish](https://publish.obsidian.md/slrvb-docs/ITS+Theme/Callouts/Callout+-+Timeline) To hide the Timeline on this page, follow instructions on the line below that starts '(double percents) <- To hide...' & remove the double percent signs here -> %%

> [!timeline|t-l] **`=this.marketName` Founded** _Date of founding._
> `=this.marketName` was founded in `=link(this.centerBurgFilePath,this.marketName)` in the state of `=link(this.centerBurgStateName)`...

> [!timeline|t-r] **Something Happened** *A significant event.*
> Something momentous occurred on this day.

> [!timeline|t-l] **Another thing happened** *Less significant this time.*
> Today was only a moderately important day.

%% <- To hide Timeline also remove *only* the double percent signs to the left on this line %%

## Notes

%% Further notes. These 2 callouts will be hidden by default. Change the '-' after the closing square bracket to a '+' to have it be expanded by default. %%

> [!hint]- Plot Hooks
> Plot Hooks go here...

> [!question]- Hidden Details
> Hidden Details go here...

## More Details

%% GENERAL NOTES GO HERE - free-form text or images %%

---

[[{{@importDataRoot.importInfo.thisCampaignPath}}/{{@importDataRoot.importInfo.thisCampaign}} Home|{{@importDataRoot.importInfo.thisCampaign}} Home]] | [[{{@importDataRoot.importInfo.thisCampaignPath}}/05-Atlas/{{@importDataRoot.info.mapName}}/{{@importDataRoot.info.mapName}}-Linked Atlas|{{@importDataRoot.info.mapName}}-Linked Atlas]] | Center Burg: `=link(this.centerBurgFilePath)` 

> [!metadata|metadata]- Metadata & Page Controls
>> [!metadata|metadataoption]+ System
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
>> [!metadata|metadataoption]+ Info
>> #### Info
>>  |
>> ---|---|
> **Pronounced** |  `INPUT[text:pronounced]`
> **Aliases** | `INPUT[list:aliases]` |
> **Leaders**|`INPUT[list:leaders]`|
> **Short Description**|`INPUT[textArea:shortDescription]`
>
>> [!metadata|metadataoption]+ Controls
>> These buttons control various portions of this page. They only change things on this page.
>> 
>> #### Controls
>>  |
>> ---|---|
>> **cssClass**|`INPUT[cssClass][inlineSelect:cssclasses]` |
>> Leaflet Map| `BUTTON[hide_leaf_map]` - `BUTTON[show_leaf_map]`
>> Interactive Map | `BUTTON[hide_web_map]` - `BUTTON[show_web_map]`{{/if}}{{#if (eq @importSettings.topField "nameBases")}}---
name: {{name}}
min: {{min}}
max: {{max}}
d: {{d}}
m: {{m}}
campaign: "{{@importDataRoot.importInfo.thisCampaign}}"
created: {{getDateTimestamp @importSettings}}
cssclasses: sixty-pct-width
mapName: {{@importDataRoot.info.mapName}}
tags:
- namebase
- {{name}}
- {{@importDataRoot.info.mapName}}
templateVersion: 7.0
---
# `=this.name` Namebase
These words & names are used to create locations on the map for Cultures that are based on this language.  The names are used to create the names of towns, villages, and other locations on the map.

## `=this.name` Base Names

Random Name: `dice: [[{{name}}#^nmebse-{{removeSpaces name}}]]`

{{listToRollTable b}}
^nmebse-{{removeSpaces name}}{{/if}}