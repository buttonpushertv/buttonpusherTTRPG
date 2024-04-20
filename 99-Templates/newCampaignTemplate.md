---
campaignName: {{VALUE:newCampaignName}}
campaignPath: {{VALUE:newCampaignPath}}
campaignShortCode: {{VALUE:newCampaignShortCode}}
campaignHomeNote: {{VALUE:newCampaignHomeNote}}
campaignAtlas: {{VALUE:newCampaignAtlas}}
campaignCalendar: {{VALUE:newCampaignCalendar}}
campaignStatus: 
campaignSystem:
pageType: campaign-home
tags:
- campaign-home
- {{@importDataRoot.info.mapName}}
- {{VALUE:newCampaignShortCode}}
---

> [!metadata|metadata]- Metadata 
>> [!metadata|metadataoption]+ System
>> #### System
>>  |
>> ---|---|
> **Tags** | `INPUT[Tags][inlineListSuggester:tags]` |
> **Game System**|`INPUT[textArea:campaignSystem]`
>
>> [!metadata|metadataoption]- Art
>> #### Art
>>  |
>> ---|---|
>> **Art** | `INPUT[imageSuggester(optionQuery("")):campaignArt]` |
>
>> [!metadata|metadataoption]+ Info
>> #### Info
>>  |
>> ---|---|
>> **Aliases** | `INPUT[list:aliases]` |
>> **Quick Notes** |  `INPUT[textArea:quicknote]`
>> **Status** | `INPUT[Status][:campaignStatus]` |

<%*
const folderNames = [
"01-Sessions",
"02-WorldBuilding",
"03-Story Arcs",
"04-Lore",
"06-Points of Interest",
"07-Organizations",
"08-Items & Artifacts",
"20-PCs",
"21-NPCs",
"22-Groups",
"23-Deities",
"99-Misc Notes"
]
console.log(folderNames)
const baseFolder = '{{VALUE:newCampaignPath}}'
//console.log(baseFolder)
for (const folderName of folderNames) {
  const folderPath = baseFolder + "/" + folderName
  console.log("creating: ", folderPath)
  await this.app.vault.createFolder(folderPath)
    }
%>

[[Campaign Index]]

# The World of {{VALUE:newCampaignName}}

[[{{VALUE:newCampaignAtlas}}]]

## Player Characters

(PC info will go here)

![random|sban+hmicro](https://source.unsplash.com/random?abstract,fire)
## Sessions

(Session info will go here)

![random|sban+hmicro](https://source.unsplash.com/random?abstract,paper)
## Story Arcs

(Story Arc info will go here)

![random|sban+hmicro](https://source.unsplash.com/random?abstract,water)

## Truths about the campaign/world

*Write down some facts about this campaign or the world that the characters find themselves in.*

## Custom rules

(Custom Rules info will go here)