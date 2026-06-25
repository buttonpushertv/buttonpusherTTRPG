---
campaignName: Raid on the Eternal Tower
campaignPath: 01-Campaigns/Raid on the Eternal Tower
campaignShortCode: roet
cssclasses: full-width
tags:
- burg-urls-list
- roet
---

```dataview
TABLE WITHOUT ID file.link as "Name", id as "id", burgMapLink as "burgMapLink"
FROM #Burg and "01-Campaigns/Raid on the Eternal Tower/05-Atlas"
SORT file.name ASC
```