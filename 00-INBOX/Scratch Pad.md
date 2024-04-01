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