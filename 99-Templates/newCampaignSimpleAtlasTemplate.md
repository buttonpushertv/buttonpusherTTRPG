---
campaignName: {{VALUE:newCampaignName}}
campaignPath: {{VALUE:newCampaignPath}}
campaignShortCode: {{VALUE:newCampaignShortCode}}
tags:
- simple-atlas
- {{VALUE:newCampaignShortCode}}
---

%% The map section below will need to be customized to use with your world map. The following block is taken from [Josh Plunkett's Tutorial](https://youtu.be/54EyMzJP5DU) and [Bag Of Tips' v2.0 Vault](https://ko-fi.com/s/37dd17499a) and adapted for the FMG Import process. Follow `###` commented instruction lines and it should work. If you have imported an FMG map, you can pull the Leaflet block from the Linked Atlas that is created in that import process. 

This Leaflet block is setup to display within a collapsible callout block. This allows the map to be set to be collapsed or expanded by default.

To make the Leaflet block below visible on this note, remove the indicated line below the Leaflet block and place a set of double percentage characters here-->

> [!metadata|map]+ World Map
> ```leaflet
> ### Remove lines commented with single octothorpes to activate the feature
> ### Watch Josh Plunkett's Tutorial: https://youtu.be/54EyMzJP5DU
> ### FMG Import will provide you with a 'world' mapName that can be used for the id.
> ### Look in the properties field 'world:' in any Burg, Province, or State.
> ### The FMG Atlas import will populate this field with this form, 'world-mapName' as id.
> ### id must be unique to any other maps 
> id: map_id
> height: 600px
> width: 100%
> ### FMG can export an SVG map file that will allow for zooming without losing as much resolution as a raster image (like PNG or JPG)
> image: [[your_map_name_here]]
> ### To set the bounds of your map, you need to figure out the values you need to use
> ### FMG Import will provide you with these values if you have added them to the JSON file from FMG. You can find the values in the Leaflet block from any State or the Atlas import, look for the `bounds:` property.
> ### To determine the value for the `scale` value below, you will need to measure the pixel
> ### value between two marks on the Scale Legend of your map. 
> ### map_bounds_height = Map Pixel Height x 1 / (Pixels between Bar Scale / 100)
> ### map_bounds_width = Map Pixel Width x 1 / (Pixels between Bar Scale / 100) 
> ### Note that this formula requires adjustments depending on your map. The idea is to determine the number of units between your bar scale. We divide by 100 here because my bar scale measures in 100 units. If your maps scale bar measures in units of 50 them you should divide by 50 instead. The idea is to calculate how many pixels are equal to 1 unit.
> bounds: [[0,0], [map_bounds_height, map_bounds_width]]
> ### Using coordinates, you can set where the map starts by default.
> ### Set it to the middle (half) of your bounds.
> coordinates: [half_map_bounds_height,half_map_bounds_width]
> ### 0 is no zoom. Negative zoom steps away from the map. Positive zoom steps towards the map. 
> minZoom: -2
> ### Max zoom is 18. 
> maxZoom: 5
> ### Hover mouse over the Reset Zoom icon to see your current zoom level. 
> defaultZoom: -1.25
> ### How far it zooms in or out with each step. Can be in decimals. 
> zoomDelta: 0.25
> ### This is a string so can be any text. Change it to match your maps measurement scale. 
> unit: miles
> scale: 1
> darkMode: false
> ## Items below here are optional and suit personal preference
> ### Lock pins so they can't be moved - unlock them by setting to false
> # lock: true
> ### If true, view of map will recenter as you zoom out. 
> # recenter: true
> ### If true, disables mouse scroll for zooming in and out of a map. Button controls still work. 
> # noScrollZoom: true
> 
> ```

Remove this entire line and the one before the Leaflet block to make it visible --> %%
(Want to place a map of your world here? View this page in Source Mode to see hidden comments about how to enable it.)

### States
```dataview
TABLE WITHOUT ID file.link as "Full Name", link(provinces) as "Provinces", link(capital) as "Capital"
FROM #State and "{{VALUE:newCampaignPath}}"
SORT file.name ASC
```

---

### Provinces
```dataview
TABLE WITHOUT ID file.link as "Name", link(state) as "State"
FROM #Province and "{{VALUE:newCampaignPath}}"
SORT state ASC, province ASC
```

---

### Burgs
```dataview
TABLE WITHOUT ID file.link as "Name", link(province) as "Province", link(state) as "State"
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