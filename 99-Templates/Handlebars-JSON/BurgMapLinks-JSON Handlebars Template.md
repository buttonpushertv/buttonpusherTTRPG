# Burgs

| ID  | Name | BurgMapLink |
| --- | ---- | ----------- |
{{#each pack.burgs}}
| {{i}} | {{name}} |  {{getBurgMapLink this ../info.seed ../pack.cells ../settings ../grid}} | 
{{/each}}
