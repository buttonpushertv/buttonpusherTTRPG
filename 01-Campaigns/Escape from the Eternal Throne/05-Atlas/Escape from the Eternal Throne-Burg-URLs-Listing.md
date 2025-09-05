---
campaignName: Escape from the Eternal Throne
campaignPath: 01-Campaigns/Escape from the Eternal Throne
campaignShortCode: efet
tags:
- burg-urls-list
- efet
---

```dataview
TABLE WITHOUT ID file.link as "Name", id as "id", burgMapLink as "burgMapLink"
FROM #Burg and "01-Campaigns/Escape from the Eternal Throne/05-Atlas"
SORT file.name ASC
```