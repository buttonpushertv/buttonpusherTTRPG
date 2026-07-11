---
name: {{name}}
min: {{min}}
max: {{max}}
d: {{d}}
m: {{m}}
campaign: "{{@importDataRoot.importInfo.thisCampaign}}"
created: {{getDateTimestamp @importSettings}}
cssclasses: seventy-pct-width
mapName: {{@importDataRoot.info.mapName}}
tags:
- namebase
- {{name}}
- {{@importDataRoot.info.mapName}}
templateVersion: 7.0
---
# `=this.name` Namebase
These words & names are used to create locations on the map for Cultures that are based on this language.  The names are used to create the names of towns, villages, and other locations on the map.

## `=this.name` Base Names

Random Name: `dice: [[{{name}}#^nmebse-{{removeSpaces name}}]]`

{{listToRollTable b}}
^nmebse-{{removeSpaces name}}
