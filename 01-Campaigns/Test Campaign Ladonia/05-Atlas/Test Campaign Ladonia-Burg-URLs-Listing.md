---
campaignName: Test Campaign Ladonia
campaignPath: 01-Campaigns/Test Campaign Ladonia
campaignShortCode: TCL
tags:
- burg-urls-list
- TCL
---

```dataview
TABLE WITHOUT ID file.link as "Name", id as "id", burgMapLink as "burgMapLink"
FROM #Burg and "01-Campaigns/Test Campaign Ladonia/05-Atlas"
SORT file.name ASC
```