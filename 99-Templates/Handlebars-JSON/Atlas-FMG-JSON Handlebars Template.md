---
aliases:
campaign: {{@importDataRoot.importInfo.thisCampaign}}
created: {{getDateTimestamp @importSettings}}
cssclasses: sixty-pct-width
mapName: {{@importDataRoot.info.mapName}}
tags:
- linked-atlas
- {{@importDataRoot.importInfo.thisCampaignShortCode}}
- {{@importDataRoot.info.mapName}}
templateVersion: 3.5
WBProcess: FALSE
---

# `=this.campaign` Linked Atlas
[[{{@importDataRoot.importInfo.thisCampaignPath}}/{{@importDataRoot.importInfo.thisCampaign}} Home|{{@importDataRoot.importInfo.thisCampaign}} Home]] | [[{{@importDataRoot.importInfo.thisCampaign}}-Simple Atlas]]

**(Edit this page in source mode to see comments about some manual edits that you may need to perform after the import is completed.)**

 %% Feel free to delete or comment the line above if you wish. See comments below for editing instructions. Use `find` to search for double percentage characters to find each of the comment sections. %%

%% This Leaflet map block is created out of the elements added to the JSON file before import %%

> [!metadata|map]+ {{name}} Map
> ```leaflet
> id: State-{{name}}
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
> ```
> [Link to {{name}} on FMG Map]({{@importDataRoot.importInfo.mapDropboxFMGLink}})

%% If you created a Dropbox Link to your FMG map, you can save that into the Modded JSON file and it will appear in the link above. %%

# States

%% The "Neutral" item doesn't have a Capital because it is an unorganized territory. If there is a significant Burg or location in the Neutral territory, you can link to its note where the empty square brackets are.%%

| ID | State | Capital |
| -- | ----- | ------- |
{{#each pack.states}}
| {{i}} | [[{{../importInfo.thisCampaignPath}}/05-Atlas/{{../info.mapName}}/States/{{name}}/{{name}}\|{{name}}]] | [[{{getBurgName capital ../pack.burgs}}\|{{getBurgName capital ../pack.burgs}}]] |
{{/each}}

# Provinces

%% The Neutral peoples of this map have no State, hence the empty field. Also, any Capital fields that contain `[[]]` mean that that province does not have a Provincial Capital.%%

| ID  | Province | Capital | State |
| --- | -------- | --------- | ----- |
{{#each pack.provinces}}
| {{i}} | [[{{../importInfo.thisCampaignPath}}/05-Atlas/{{../info.mapName}}/States/{{getStateName state ../pack.states}}/Provinces/{{fullName}}/{{fullName}}\|{{fullName}}]] | [[{{../importInfo.thisCampaignPath}}/05-Atlas/{{../info.mapName}}/States/{{getStateName state ../pack.states}}/Provinces/{{fullName}}/Burgs/{{getBurgName burg ../pack.burgs}}\|{{getBurgName burg ../pack.burgs}}]] | [[{{../importInfo.thisCampaignPath}}/05-Atlas/{{../info.mapName}}/States/{{getStateName state ../pack/states}}/{{getStateName state ../pack.states}}\|{{getStateName state ../pack.states}}]] |
{{/each}}

# Burgs

| ID  | Name | Population | State | Province |
| --- | ---- | ---------- | ----- | -------- |
{{#each pack.burgs}}
| {{i}} | [[{{../importInfo.thisCampaignPath}}/05-Atlas/{{../info.mapName}}/States/{{getStateName state ../pack/states}}/Provinces/{{burgProvinceNameLookup cell ../pack.cells ../pack.provinces}}/Burgs/{{name}}\|{{name}}]] | {{calcPopulation population ../settings.populationRate}} | [[{{../importInfo.thisCampaignPath}}/05-Atlas/{{../info.mapName}}/States/{{getStateName state ../pack/states}}/{{getStateName state ../pack.states}}\|{{getStateName state ../pack.states}}]] | [[{{../importInfo.thisCampaignPath}}/05-Atlas/{{../info.mapName}}/States/{{getStateName state ../pack/states}}/Provinces/{{burgProvinceNameLookup cell ../pack.cells ../pack.provinces}}/{{burgProvinceNameLookup cell ../pack.cells ../pack.provinces}}\|{{burgProvinceNameLookup cell ../pack.cells ../pack.provinces}}]] |
{{/each}}

# Diplomacy

%% The entries on the first line of this table are items related to the wars stories of this map. You can extract them and refactor those cells to access those element in a more useful way. Eventually, we'd like to figure out how those elements are used and refactor it in a similar fashion to how it use in a FMG map. %%

| STATES {{#each pack.states}}| {{name}} {{/each}}|
| - | - {{#each pack.states}}| - {{/each}}|
{{#each pack.states}}| {{name}} {{#each diplomacy}}| {{this}} {{/each}}|
{{/each}}

# Cultures

%% The Wildlands have no culture because they are not organized into any kind of substantial societal structure. Feel free to construct sub-groups or animal societies on the Wildlands note to flesh out the non-traditional societal aspects of this map. %%

| ID  | Name | Code | Type |
| --- | ---- | -----| ---- |
{{#each pack.cultures}}
| {{i}} | [[{{../importInfo.thisCampaignPath}}/05-Atlas/{{../info.mapName}}/Cultures/{{name}}\|{{name}}]] | {{code}} | {{type}} |
{{/each}}

# Religions

%% The Wildlands have no organized religion but, again feel free to make note of non-traditional spiritual practices that exist in the lands beyond traditional cultures and societies.

Also, Religions with "Unknown" Cultures are older religions that may not have many adherents or followers but are the parent religions to others.%%

| ID  | Name | Code | Type | Form | Culture | Deity |
| --- | ---- | -----| ---- | ---- | ------- | ----- |
{{#each pack.religions}}
| {{i}} | [[{{../importInfo.thisCampaignPath}}/05-Atlas/{{../info.mapName}}/Religions/{{name}}\|{{name}}]] | {{code}} | {{type}} | {{form}} | [[{{../importInfo.thisCampaignPath}}/05-Atlas/{{../info.mapName}}/Cultures/{{getCultureName i ../pack.cultures}}\|{{getCultureName i ../pack.cultures}}]] | {{deity}} |
{{/each}}
