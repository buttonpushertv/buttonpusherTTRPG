---
campaignName: Raid on the Eternal Tower
campaignPath: 01-Campaigns/Raid on the Eternal Tower
campaignShortCode: roet
cssclasses: seventy-pct-width
tags:
- simple-atlas
- roet
---

# `=this.campaignName` - Simple Atlas

[[Raid on the Eternal Tower Home]]

```dataview
TABLE WITHOUT ID file.link as "Linked Atlases"
FROM #linked-atlas and "01-Campaigns/Raid on the Eternal Tower/05-Atlas"
SORT file.name ASC
```


%% The map section below will need to be customized to use with your world map. The following block is taken from [Josh Plunkett's Tutorial](https://youtu.be/54EyMzJP5DU) and [Bag Of Tips' v2.0 Vault](https://ko-fi.com/s/37dd17499a) and adapted for the FMG Import process. Follow `###` commented instruction lines and it should work. If you have imported an FMG map, you can pull the Leaflet block from the Linked Atlas that is created in that import process. 

This Leaflet block is setup to display within a collapsible callout block. This allows the map to be set to be collapsed or expanded by default.

To make the Leaflet block below visible on this note, remove the indicated line below the Leaflet block and place a set of double percentage characters here-->%%

> [!metadata|map]- Hitchton Map
> ```leaflet
> id: Hitchton-Atlas
> image: [[Hitchton World Map.svg]]
> bounds:
> - [0,0]
> - [1318,2612]
> coordinates: [659,1306]
> height: 600px
> width: 100%
> minZoom: -3
> maxZoom: 5
> defaultZoom: -0.75
> zoomDelta: 0.25
> unit: mi
> scale: 5
> darkMode: false
> ```

%% Remove this entire line and the one before the Leaflet block to make it visible --> %%
(Want to place a map of your world here? View this page in Source Mode to see hidden comments about how to enable it.)


> [!callout]- **States**
> 
> ```dataview
> TABLE WITHOUT ID file.link as "Full Name", link(provinces) as "Provinces", link(capitalFile, capitalName) as "Capital"
> FROM #State and "01-Campaigns/Raid on the Eternal Tower"
> SORT file.name ASC
> ```

---

> [!callout]- **Provinces**
> 
> ```dataview
> TABLE WITHOUT ID file.link as "Name", link(state) as "State"
> FROM #Province and "01-Campaigns/Raid on the Eternal Tower"
> SORT state ASC, province ASC
> ```

---

> [!callout]- **Burgs**
> 
> ```dataview
> TABLE WITHOUT ID file.link as "Name", link(provinceName) as "Province", link(stateName) as "State"
> FROM #Burg and "01-Campaigns/Raid on the Eternal Tower"
> SORT file.name ASC
> ```

---

> [!callout]- **Cultures**
> 
> ```dataview
> TABLE WITHOUT ID file.link as "Name", type as "Type"
> FROM #Culture and "01-Campaigns/Raid on the Eternal Tower"
> SORT file.name ASC
> ```

---

> [!callout]- **Religions**
> 
> ```dataview
> TABLE WITHOUT ID file.link as "Name", type as "Type", form as "Form"
> FROM #Religion and "01-Campaigns/Raid on the Eternal Tower"
> SORT file.name ASC
> ```