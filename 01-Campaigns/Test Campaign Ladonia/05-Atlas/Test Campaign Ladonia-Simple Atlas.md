---
campaignName: Test Campaign Ladonia
campaignPath: 01-Campaigns/Test Campaign Ladonia
campaignShortCode: TCL
tags:
- simple-atlas
- TCL
---

%% The map section below will need to be customized to use with your world map. The following block is taken from [Josh Plunkett's Tutorial](https://youtu.be/54EyMzJP5DU) and [Bag Of Tips' v2.0 Vault](https://ko-fi.com/s/37dd17499a) and adapted for the FMG Import process. Follow `###` commented instruction lines and it should work. If you have imported an FMG map, you can pull the Leaflet block from the Linked Atlas that is created in that import process. 

This Leaflet block is setup to display within a collapsible callout block. This allows the map to be set to be collapsed or expanded by default.

To make the Leaflet block below visible on this note, remove the indicated line below the Leaflet block and place a set of double percentage characters here-->%%

> [!metadata|map]+  World Map
> ```leaflet
> id: State-
> image: [[Ladonia World Map.svg]]
> bounds: 
> - [0,0]
> - [1317,2291]
> coordinates: [658.5,1145.5]
> height: 600px
> width: 100%
> minZoom: -3
> maxZoom: 5
> defaultZoom: -1.25
> zoomDelta: 0.25
> unit: mi
> scale: 2
> darkMode: false
> ```
> [Link to  on FMG Map](https://azgaar.github.io/Fantasy-Map-Generator/?maplink=https://dl.dropboxusercontent.com/scl/fi/s1ildj50q943p20hgqsvz/Ladonia-2024-04-13-18-07.map?rlkey=tt7j7x4gqbhxu043p5q2f2ucx&dl=0)



### States
```dataview
TABLE WITHOUT ID file.link as "Full Name", link(provinces) as "Provinces", link(capital) as "Capital"
FROM #State and "01-Campaigns/Test Campaign Ladonia"
SORT file.name ASC
```

---

### Provinces
```dataview
TABLE WITHOUT ID file.link as "Name", link(state) as "State"
FROM #Province and "01-Campaigns/Test Campaign Ladonia"
SORT state ASC, province ASC
```

---

### Burgs
```dataview
TABLE WITHOUT ID file.link as "Name", link(province) as "Province", link(state) as "State"
FROM #Burg and "01-Campaigns/Test Campaign Ladonia"
SORT file.name ASC
```

---

### Cultures
```dataview
TABLE WITHOUT ID file.link as "Name", type as "Type"
FROM #Culture and "01-Campaigns/Test Campaign Ladonia"
SORT file.name ASC
```

---

### Religions
```dataview
TABLE WITHOUT ID file.link as "Name", type as "Type", form as "Form"
FROM #Religion and "01-Campaigns/Test Campaign Ladonia"
SORT file.name ASC
```