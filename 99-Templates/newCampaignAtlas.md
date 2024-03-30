---
campaign: "{{VALUE:newCampaignName}}" 
tags:
- Atlas
Template: "[[newCampaignAtlas]]"
TemplateVersion: 1
---

### States
```dataview
TABLE WITHOUT ID file.link as "Full Name", provinces as "Provinces", capital as "Capital"
FROM #State and "{{VALUE:newCampaignPath}}"
SORT file.name ASC
```

---

### Provinces
```dataview
TABLE WITHOUT ID file.link as "Name", state as "State"
FROM #Province and "{{VALUE:newCampaignPath}}"
SORT state ASC, province ASC
```

---

### Burgs
```dataview
TABLE WITHOUT ID file.link as "Name", province as "Province", state as "State"
FROM #Burg and "{{VALUE:newCampaignPath}}"
SORT file.name ASC
```

---

### Cultures
```dataview
TABLE WITHOUT ID file.link as "Name", type as "Type"
FROM #Culture and "{{VALUE:newCampaignPath}}"
SORT file.name ASC
```

---

### Religions
```dataview
TABLE WITHOUT ID file.link as "Name", type as "Type", form as "Form"
FROM #Religion and "{{VALUE:newCampaignPath}}"
SORT file.name ASC
```