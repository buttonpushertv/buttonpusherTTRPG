| ID | Burg | BurgMapLink |
| -- | ---- | ----------- |
{{#each pack.burgs}}
| {{this.i}} | {{this.name}} | {{getBurgMapLink this @importDataRoot.info.seed @importDataRoot.pack.cells @importDataRoot.settings @importDataRoot.grid}} |
{{/each}}