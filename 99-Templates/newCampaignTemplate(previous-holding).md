---
campaign: "{{VALUE:newCampaignName}}" 
status: setup
role: gm
system: 
type: campaign
Template: "[[newCampaignTemplate]]"
TemplateVersion: 1
---

<%*
const folderNames = [
"01-Sessions",
"02-WorldBuilding",
"03-Story Arcs",
"04-Lore",
"05-Cultures",
"06-Religions",
"10-Atlas",
"11-Points of Interest",
"12-Organizations",
"13-Items & Artifacts",
"20-PCs",
"21-NPCs",
"22-Groups",
"23-Deities",
"99-Misc Notes"
]
//console.log(folderNames)
const baseFolder = '{{VALUE:newCampaignPath}}'
//console.log(baseFolder)
for (const folderName of folderNames) {
	const folderPath = baseFolder + "/" + folderName
	console.log(folderPath)
	await this.app.vault.createFolder(folderPath)
    }
%>

# The World of {{VALUE:newCampaignName}}

[[{{VALUE:newCampaignAtlas}}]]

## Player Characters

-
![random|sban+hmicro](https://source.unsplash.com/random?abstract,fire)
## Sessions
```dataview
table SessionStatus as "Status", Summary as "Summary" from "{{VALUE:newCampaignPath}}"
where contains(type,"session")
SORT SessionDate DESC
```
![random|sban+hmicro](https://source.unsplash.com/random?abstract,paper)
## Story Arcs
```dataview
table Status as "Status", Summary as "Summary" from "{{VALUE:newCampaignPath}}"
where contains(type,"arc") AND !contains(status,"complete") 
SORT SessionDate DESC
```
![random|sban+hmicro](https://source.unsplash.com/random?abstract,water)

## Truths about the campaign/world

*Write down some facts about this campaign or the world that the characters find themselves in.*

## Custom rules

- [[Character options]]
- [[House rules]]
- [[Safety Tools]]