Code below is for JSON/CSV Importer to process a small bit of js code during the import process:

@{return `${(this.state > 0) && dataRoot.pack.states.find(state => state.i === this.state)?.name || "Unknown" }-${this.name}`}

output: `state_name-burg_name`

@{return `${this.name}-${(this.state > 0) && dataRoot.pack.states.find(state => state.i === this.state)?.name || "Unknown" }`}

output: `burg_name-state_name`

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