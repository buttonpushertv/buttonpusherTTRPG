---
<%*
var thisCampaignMetaData = this.app.metadataCache.getFileCache(tp.file.find_tfile("{{VALUE:'thisCampaignHomeNote}}"))?.frontmatter || {};'
console.log(thisCampaignMetaData);
_%>
Campaign: "<% thisCampaignMetaData.campaignName %>"
campaignHomeNote: "<% thisCampaignMetaData.campaignHomeNote %>"
campaignShortCode: <% thisCampaignMetaData.campaignShortCode %>
Created: <% tp.file.creation_date() %>
SessionDate: "{{VALUE:extractedDate}}" 
Template: "[[sessionNotesTemplate]]"
TemplateVersion: 1
IsNextSession: true
SessionStatus: Prep
Summary: '<% (await tp.system.prompt("Enter a summary?")) %>'
tags:
- session-note
- <% thisCampaignMetaData.campaignShortCode %>
---

#  `=this.file.name`
###### `=this.campaign`

`=link(this.campaignHomeNote)`

![random|sban+hmicro](https://source.unsplash.com/random?abstract)

## Prep

### To Do


### Plan


### Quick References
**People:**


**Places:**


**Things:**



## During
### Events


### Loot, Rewards & Purchases


## Post
### New Creations


### End of Session Notes


