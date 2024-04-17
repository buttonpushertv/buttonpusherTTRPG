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
nextSession: 
sessionDate1: 
sessionDate2: 
sessionDate3: 
sessionDate4: 
sessionDate5: 
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

%% This is just an idea - using these metadata fields, can this info be used when creating a sessionNote? %%
# Next Session Dates
**Next Session** | `INPUT[datePicker:nextSession]`

Following Sessions:
- Next<sup>1</sup> - `INPUT[datePicker:sessionDate1]`
- Next<sup>2</sup> - `INPUT[datePicker:sessionDate2]`
- Next<sup>3</sup> - `INPUT[datePicker:sessionDate3]` 
- Next<sup>4</sup> - `INPUT[datePicker:sessionDate4]`
- Next<sup>5</sup> - `INPUT[datePicker:sessionDate5]`

(Session info will go here)

![random|sban+hmicro](https://source.unsplash.com/random?abstract,paper)
## Story Arcs

(Story Arc info will go here)

![random|sban+hmicro](https://source.unsplash.com/random?abstract,water)

## Truths about the campaign/world

*Write down some facts about this campaign or the world that the characters find themselves in.*

## Custom rules

(Custom Rules info will go here)