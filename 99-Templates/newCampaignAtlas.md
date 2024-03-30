### States
```dataview
TABLE WITHOUT ID file.link as "Full Name", ProvinceList as "Provinces", Capital as "Capital"
FROM #State and "{{VALUE:newCampaignPath}}/10-Atlas"
SORT file.name ASC
```

---

### Provinces
```dataview
TABLE State as "State"
FROM #Province and "{{VALUE:newCampaignPath}}/10-Atlas"
SORT State ASC
```

---

### Burgs
```dataview
TABLE FullName as "Full Name", ProvinceList as "Provinces", Capital as "Capital"
FROM #Burg and "{{VALUE:newCampaignPath}}/10-Atlas"
SORT file.name ASC
```

