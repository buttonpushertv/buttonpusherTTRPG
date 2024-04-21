---
campaignName: {{VALUE:newCampaignName}}
campaignPath: {{VALUE:newCampaignPath}}
campaignShortCode: {{VALUE:newCampaignShortCode}}
campaignHomeNote: {{VALUE:newCampaignHomeNote}}
created: <% tp.file.creation_date() %>
nextSession:
sessionDate1:
sessionDate2:
sessionDate3:
sessionDate4:
sessionDate5:
nextSessionNote:
session1Note:
session2Note:
session3Note:
session4Note:
session5Note:
tags:
- session-hub
- {{VALUE:newCampaignShortCode}}
---

# Next Session Dates

**Next Session** | `INPUT[datePicker:nextSession]`

Following Sessions:
- Next<sup>1</sup> - `INPUT[datePicker:sessionDate1]` - `INPUT[text:session1Note]`
- Next<sup>2</sup> - `INPUT[datePicker:sessionDate2]` - `INPUT[text:session2Note]`
- Next<sup>3</sup> - `INPUT[datePicker:sessionDate3]` - `INPUT[text:session3Note]`
- Next<sup>4</sup> - `INPUT[datePicker:sessionDate4]` - `INPUT[text:session4Note]`
- Next<sup>5</sup> - `INPUT[datePicker:sessionDate5]` - `INPUT[text:session5Note]`