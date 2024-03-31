---
alias:
campaign: {{getCampaignName @importSettings}}
created: {{getDateTimestamp @importSettings}}
Tags:
- Atlas
TemplateLink: "[[Atlas-FMG-JSON Handlebar Template]]"
TemplateVersion: 1
WBProcess: FALSE
world: {{@importdataRoot.info.mapName}}
---

**(Edit this page in source mode to see comments about some manual edits that you may need to perform after the import is completed.)****

# States

%% The "Neutral" item doesn't have a Capital because it is an unorganized territory. If there is a significant Burg or location in the Neutral territory, you can link to its note where the empty square brackets are.%%

| ID | State | Capital |
| -- | ----- | ------- |
{{#each pack.states}}
| {{i}} | [[{{../info.thisCampaignPath}}/10-Atlas/States/{{name}}\|{{name}}]] | [[{{getBurgName capital ../pack.burgs}}]] |
{{/each}}

# Provinces

%% The Neutral peoples of this world have no State, hence the empty field %%

| ID  | Province | Full Name | State |
| --- | -------- | --------- | ----- |
{{#each pack.provinces}}
| {{i}} | [[{{../info.thisCampaignPath}}/10-Atlas/Provinces/{{fullName}}\|{{fullName}}]] | {{fullName}} | [[{{../info.thisCampaignPath}}/10-Atlas/States/{{getStateName state ../pack.states}}\|{{getStateName state ../pack.states}}]] |
{{/each}}

# Burgs

| ID  | Name | Population | State | Province |
| --- | ---- | ---------- | ----- | -------- |
{{#each pack.burgs}}
| {{i}} | [[{{../info.thisCampaignPath}}/10-Atlas/Burgs/{{name}}\|{{name}}]] | {{calcPopulation population}} | [[{{../info.thisCampaignPath}}/10-Atlas/States/{{getStateName state ../pack.states}}\|{{getStateName state ../pack.states}}]] | [[{{../info.thisCampaignPath}}/10-Atlas/Provinces/{{burgProvinceLookup cell ../pack.cells ../pack.provinces}}\|{{burgProvinceLookup cell ../pack.cells ../pack.provinces}}]] |
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
| {{i}} | [[{{../info.thisCampaignPath}}/10-Atlas/Cultures/{{name}}\|{{name}}]] | {{code}} | {{type}} |
{{/each}}

# Religions

%% The Wildlands has no organized religion but, again feel free to make note of non-traditional spiritual practices that exist in the lands beyond traditional cultures and societies. 

Also, Religions with "Unknown" Cultures are older religions that may not have many adherents or followers but are the parent religions to others.%%

| ID  | Name | Code | Type | Form | Culture | Deity |
| --- | ---- | -----| ---- | ---- | ------- | ----- |
{{#each pack.religions}}
| {{i}} | [[{{../info.thisCampaignPath}}/10-Atlas/Religions/{{name}}\|{{name}}]] | {{code}} | {{type}} | {{form}} | [[{{../info.thisCampaignPath}}/10-Atlas/Cultures/{{getCultureName i ../pack.cultures}}\|{{getCultureName i ../pack.cultures}}]] | {{deity}} |
{{/each}}