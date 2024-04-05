---
tags:
 - index
 - campaigns
---

#tag-test

## List of current campaigns

```dataviewjs
let totalGames;
function getNumOfGames(campaign) {
	let numOfGames = app.plugins.plugins.dataview.api
        .pages(`"01-Campaigns/${campaign}"`)
        .where(page => {
            if (page.type === 'session') {
                if (page.campaign === campaign) {
	                totalGames = totalGames +1;
                    return true;
                }
            }
        }).length
	return numOfGames
}

dv.table(["Campaign","System","Sessions","Status"],dv.pages('"01-Campaigns"').where(b => String(b.tags).includes("campaign-home"))
  .sort(b => b.status)
  .map(b => [dv.fileLink(b.file.path,false,[b.campaignName]),b.campaignSystem,getNumOfGames(b.campaignName),b.campaignStatus]))
```

