# HOLDING AREA


### AHK tuned JSON Field Naming with paths
These are tuned for AHK with the opening and closing brackets escaped:
```
States:
State-${name}/${name}

Provinces:
Send, @{{}return ``${{}this.state{}}-${{}(this.state > 0) && dataRoot.pack.states.find(state => state.i === this.state)?.name || "Unknown" {}}/${{}this.i{}}-${{}this.fullName{}}/${{}this.fullName{}}``{}}

Burgs:
@{{}return ``${{}this.state{}}-${{}(this.state > 0) && dataRoot.pack.states.find(state => state.i === this.state)?.name || "Unknown" {}}/${{}dataRoot.pack.cells.find(c => c.i === this.cell)?.province{}}-${{}dataRoot.pack.provinces.find(p => p.i === dataRoot.pack.cells.find(c => c.i === this.cell)?.province)?.fullName{}}/${{}this.name{}}``{}}
```


#### taken from YAML - read via QuickAdd
=======
---
newCampaignSimpleAtlasTemplate - previous verison:
---
<%*
var thisCampaignMetaData = this.app.metadataCache.getFileCache(tp.file.find_tfile("{{VALUE:newCampaignHomeNote}}"))?.frontmatter || {};
console.log(thisCampaignMetaData);
_%>
campaignName: <% thisCampaignMetaData.campaignName %>
campaignPath: <% thisCampaignMetaData.campaingPath %>
campaignShortCode: <% thisCampaignMetaData.campaignShortCode %>
tags:
- simple-atlas
- <% thisCampaignMetaData.campaignShortCode %>
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
---

Code for pulling in COA element - this is all that it appears needs to be fed the draw() function from the data:

`{{drawCOA i coa}}`

But, there is sooooo much more that needs to be included in the helper to make it work properly.

---

Code below is for JSON/CSV Importer to process a small bit of js code during the import process:

@{return `${(this.state > 0) && dataRoot.pack.states.find(state => state.i === this.state)?.name || "Unknown" }-${this.name}`}

output: `state_name-burg_name`

@{return `${this.name}-${(this.state > 0) && dataRoot.pack.states.find(state => state.i === this.state)?.name || "Unknown" }`}

output: `burg_name-state_name`

---
removed from Burg Template - in switch to new function for MFCG or Village Generator Link:

```
cityGeneratorLink: {{getMfcgURL this @importDataRoot.info.seed @importDataRoot.pack.cells @importDataRoot.settings}}
created: {{getDateTimestamp @importSettings}}
```

---
removed from [[JSON Import How To]] - this fix doesn't seem to be needed any longer

2. The JSON object `pack.provinces` is missing some child elements that will cause the JSON/CSV Importer to fail.
	1. Navigate to the `pack.provinces` object.
	2. This element has a `[0]` child element that contains no values.
	3. You will need to add valid element here for JSON/CSV Importer to succeed.
	4. Use this code & paste it into the `pack.provinces`

> [! NOTE] Code to place into `pack.provinces[0]` element
> ```js
> {
> 	"burg": 0,
> 	"color": "#ffffff",
> 	"formName": "Neutral",
> 	"fullName": "Neutral",
> 	"i": 0,
> 	"name": "Neutral",
> 	"state": 0
> },
> ```

5. Paste it where you see the lone `0,` before the `[1]` element - replacing the `0,` entirely.
6. Make sure there is a comma after the final curly bracket so that the JSON Importer reads it as an array element.

---

pulled out of Burg Template - needs to be re-worked before putting back in

```
> [!metadata|characters]- Characters
> `button-add-new-npc-modal` <- Add an NPC to `=this.burgName`

> Below is a listing of all NPCs within `=this.burgName`:
> ```dataview
> table Pronouns, Party1Standing AS "Party Standing", join(Occupation, ", ") AS "Occupation(s)", join(link(AssociatedGroup), ", ") AS "Group(s)"
> WHERE Location = this.file.name AND contains(NoteType, "NPC") AND !contains(Condition, "Dead")
> SORT file.name ASC

> [!metadata|groups]- Groups
> `button-add-new-group` <- Add a Group to `=this.burgName`
> ```dataview 
> table join(NoteType, ", ") AS "Note Type"
> WHERE econtains(Location, this.file.name) AND contains(NoteType, "Group")
> SORT Type ASC
> ```

> [!metadata|pois]- Points of Interest
> `button-add-new-poi` <- Add a POI to `=this.burgName`
> ```dataview
> table join(NoteType, ", ") AS "Note Type", join(link(AffiliatedGroup), ", ") AS "Group(s)"
> WHERE Location = this.file.name AND contains(NoteType, "POI")
> SORT file.name ASC
> ```

> [!metadata|shops]- Businesses
> `button-add-new-business` <- Add a business to `=this.burgName`
> ```dataview
> table join(NoteType, ", ") AS "Note Type", join(link(AffiliatedGroup), ", ") AS "Group(s)"
> WHERE Location = this.file.name AND contains(NoteType, "Business")
> SORT file.name ASC
> ```

> [!metadata|pois]- Items & Objects
> `button-add-new-item` <- Add a new item or object to `=this.burgName`
>```dataview
> table join(NoteType, ", ") AS "Note Type", join(link(AffiliatedGroup), ", ") AS "Group(s)"
> WHERE Location = this.file.name AND contains(NoteType, "Item")
> SORT file.name ASC
> ```
```

---

pulled out of State template - needs to be re-worked before putting back in

```
> [!metadata|characters]- NPCs/Characters
> Add NPCs within the Province or Burg where they reside.
> Below is a listing of all NPCs within `=this.name`:
> ```dataview
> table Pronouns, Party1Standing AS "Party Standing", join(Occupation, ", ") AS "Occupation(s)", join(link(AssociatedGroup), ", ") AS "Group(s)"
> WHERE state = this.file.name AND contains(NoteType, "NPC") AND !contains(Condition, "Dead")
> SORT file.name ASC
> ```

> [!metadata|gropups]- Groups
> Add Groups within the Province or Burg where they reside.
> Below is a listing of all Groups within `=this.name`:
> ```dataview 
> table join(NoteType, ", ") AS "Note Type"
> WHERE state = this.file.name AND contains(NoteType, "Group")
> SORT Type ASC
> ```

> [!metadata|pois]- Points of Interest
> Add POIs within the Province or Burg where they reside.
> Below is a listing of all POIs within `=this.name`:
> ```dataview
> table join(NoteType, ", ") AS "Note Type", join(link(AffiliatedGroup), ", ") AS "Group(s)"
> WHERE state = this.file.name AND contains(NoteType, "POI")
> SORT file.name ASC
> ```
```