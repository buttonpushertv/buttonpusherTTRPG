---
alias:
campaign: {{getCampaignName @importSettings}}
Tags:
- Atlas
TemplateLink: "[[Handlebar - FMG - Atlas JSON Template]]"
TemplateVersion: 1
WBProcess: FALSE
world: {{@importdataRoot.info.mapName}}
---

# States

| ID | State | Capital |
| -- | ----- | ------- |
{{#each pack.states}}
| {{i}} | [[{{../info.thisCampaignPath}}/10-Atlas/States/{{name}}\|{{name}}]] | [[{{getBurgName capital ../pack.burgs}}]] |
{{/each}}

# Provinces

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

| STATES {{#each pack.states}}| {{name}} {{/each}}|
| - | - {{#each pack.states}}| - {{/each}}|
{{#each pack.states}}| {{name}} {{#each diplomacy}}| {{this}} {{/each}}|
{{/each}}
