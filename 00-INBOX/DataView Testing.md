---
name: Aporesia
---



### Burgs
```dataview
TABLE WITHOUT ID file.link as "Burgs"
FROM #Burg and "01-Campaigns/Test Campaign Ladonia"
WHERE contains(this.name, state)
SORT file.name ASC
```


```dataview
TABLE WITHOUT ID file.link as "Name", link(file.name) as "name2"
FROM #Burg and "01-Campaigns/Test Campaign Ladonia"
WHERE contains(this.name, state)
SORT file.name ASC
```