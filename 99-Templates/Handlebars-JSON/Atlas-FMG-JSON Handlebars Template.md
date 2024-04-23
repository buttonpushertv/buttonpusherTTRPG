---
alias:
campaign: {{@importDataRoot.info.thisCampaign}}
created: {{getDateTimestamp @importSettings}}
tags: 
- linked-atlas
- {{@importDataRoot.info.thisCampaignShortCode}}
- {{@importDataRoot.info.mapName}}
WBProcess: FALSE
world: {{@importDataRoot.info.mapName}}
---


> [!NOTE] Edit This Note
> **(Edit this page in source mode to see comments about some manual edits that you may need to perform after the import is completed.)****
> %% See comments below for editing instructions. You can delete this callout if you want. %%

%% This Leaflet map block is created out of the elements added to the JSON file before import %%

> [!metadata|map]+ {{name}} World Map
> ```leaflet
> id: State-{{name}}
> image: [[{{@importDataRoot.info.mapName}} World Map.svg]]
> bounds: 
> - [0,0]
> - [{{@importDataRoot.info.mapHeight}},{{@importDataRoot.info.mapWidth}}]
> coordinates: [{{divide @importDataRoot.info.mapHeight 2}},{{divide @importDataRoot.info.mapWidth 2}}]
> height: 600px
> width: 100%
> minZoom: -3
> maxZoom: 5
> defaultZoom: -1.25
> zoomDelta: 0.25
> unit: {{@importDataRoot.settings.distanceUnit}}
> scale: {{@importDataRoot.settings.distanceScale}}
> darkMode: false
> ```
> [Link to {{name}} on FMG Map]({{@importDataRoot.info.mapDropboxFMGLink}})


# States

%% The "Neutral" item doesn't have a Capital because it is an unorganized territory. If there is a significant Burg or location in the Neutral territory, you can link to its note where the empty square brackets are.%%

| ID | State | Capital |
| -- | ----- | ------- |
{{#each pack.states}}
| {{i}} | [[{{../info.thisCampaignPath}}/05-Atlas/States/{{i}}-{{name}}/{{name}}\|{{name}}]] | [[{{getBurgName capital ../pack.burgs}}]] |
{{/each}}

# Provinces

%% The Neutral peoples of this world have no State, hence the empty field. Also, any Capital fields that contain `[[]]` mean that that province does not have a Provincial Capital.

%%

| ID  | Province | Capital | State |
| --- | -------- | --------- | ----- |
{{#each pack.provinces}}
| {{i}} | [[{{../info.thisCampaignPath}}/05-Atlas/States/{{state}}-{{getStateName state ../pack/states}}/{{i}}-{{fullName}}/{{fullName}}\|{{fullName}}]] | [[{{getBurgName burg ../pack.burgs}}]] | [[{{../info.thisCampaignPath}}/05-Atlas/States/{{state}}-{{getStateName state ../pack/states}}/{{getStateName state ../pack.states}}\|{{getStateName state ../pack.states}}]] |
{{/each}}

# Burgs

| ID  | Name | Population | State | Province |
| --- | ---- | ---------- | ----- | -------- |
{{#each pack.burgs}}
| {{i}} | [[{{../info.thisCampaignPath}}/05-Atlas/States/{{state}}-{{getStateName state ../pack/states}}/{{getProvinceIdFromCell cell ../pack.cells}}-{{burgProvinceLookup cell ../pack.cells ../pack.provinces}}/{{name}}\|{{name}}]] | {{calcPopulation population}} | [[{{../info.thisCampaignPath}}/05-Atlas/States/{{state}}-{{getStateName state ../pack/states}}/{{getStateName state ../pack.states}}\|{{getStateName state ../pack.states}}]] | [[{{../info.thisCampaignPath}}/05-Atlas/States/{{state}}-{{getStateName state ../pack/states}}/{{getProvinceIdFromCell cell ../pack.cells}}-{{burgProvinceLookup cell ../pack.cells ../pack.provinces}}/{{burgProvinceLookup cell ../pack.cells ../pack.provinces}}\|{{burgProvinceLookup cell ../pack.cells ../pack.provinces}}]] |
{{/each}}

# Diplomacy

%% The entries on the first line of this table are items related to the wars stories of this world. You can extract them and refactor those cells to access those element in a more useful way. Eventually, we'd like to figure out how those elements are used and refactor it in a similar fashion to how it use in a FMG map. %%

| STATES {{#each pack.states}}| {{name}} {{/each}}|
| - | - {{#each pack.states}}| - {{/each}}|
{{#each pack.states}}| {{name}} {{#each diplomacy}}| {{this}} {{/each}}|
{{/each}}

# Cultures

%% The Wildlands have no culture because they are not organized into any kind of substantial societal structure. Feel free to construct sub-groups or animal societies on the Wildlands note to flesh out the non-traditional societal aspects of this world. %%

| ID  | Name | Code | Type |
| --- | ---- | -----| ---- |
{{#each pack.cultures}}
| {{i}} | [[{{../info.thisCampaignPath}}/05-Atlas/Cultures/{{name}}\|{{name}}]] | {{code}} | {{type}} |
{{/each}}

# Religions

%% The Wildlands has no organized religion but, again feel free to make note of non-traditional spiritual practices that exist in the lands beyond traditional cultures and societies. 

Also, Religions with "Unknown" Cultures are older religions that may not have many adherents or followers but are the parent religions to others.%%

| ID  | Name | Code | Type | Form | Culture | Deity |
| --- | ---- | -----| ---- | ---- | ------- | ----- |
{{#each pack.religions}}
| {{i}} | [[{{../info.thisCampaignPath}}/05-Atlas/Religions/{{name}}\|{{name}}]] | {{code}} | {{type}} | {{form}} | [[{{../info.thisCampaignPath}}/05-Atlas/Cultures/{{getCultureName i ../pack.cultures}}\|{{getCultureName i ../pack.cultures}}]] | {{deity}} |
{{/each}}