---
campaignName: {{VALUE:newCampaignName}}
campaignPath: {{VALUE:newCampaignPath}}
campaignShortCode: {{VALUE:newCampaignShortCode}}
tags:
- burg-urls-list
- {{VALUE:newCampaignShortCode}}
---

```dataview
TABLE WITHOUT ID file.link as "Name", id as "id", burgMapLink as "burgMapLink"
FROM #Burg and "{{VALUE:newCampaignPath}}/05-Atlas"
SORT file.name ASC
```