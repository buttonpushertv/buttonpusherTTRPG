---
campaignName: Keep of the Eternal Throne
campaignPath: 01-Campaigns/Keep of the Eternal Throne
campaignShortCode: koet
tags:
- burg-urls-list
- koet
---

```dataview
TABLE WITHOUT ID file.link as "Name", id as "id", burgMapLink as "burgMapLink"
FROM #Burg and "01-Campaigns/Keep of the Eternal Throne/05-Atlas"
SORT file.name ASC
```