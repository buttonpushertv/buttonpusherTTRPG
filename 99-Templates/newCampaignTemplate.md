---
campaignName: {{VALUE:newCampaignName}}
campaignPath: {{VALUE:newCampaignPath}}
campaignShortCode: {{VALUE:newCampaignShortCode}}
campaignHomeNote: {{VALUE:newCampaignHomeNote}}
campaignSimpleAtlas: {{VALUE:newCampaignSimpleAtlas}}
campaignCalendar: {{VALUE:newCampaignCalendar}}
campaignStatus: 
campaignSystem:
pageType: campaign-home
tags:
- campaign-home
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

[[{{VALUE:newCampaignSimpleAtlas}}]] | [[{{VALUE:newCampaignLinkedAtlas}}]]

## Player Characters

(PC info will go here)

---

## Sessions

%% This Session Hub file is part of a future idea. I hope to have the ability to create a session note for the 'next session'. And also have a button that will then pull up all the dates of the subsequent sessions along with their comments. Only partly implemented thus far. %%
![[{{VALUE:newCampaignName}} Session Hub]]

(Session info will go here)

---
## Story Arcs

(Story Arc info will go here)

---

## Truths about the campaign/world

*Write down some facts about this campaign or the world that the characters find themselves in.*

## Custom rules

(Custom Rules info will go here)