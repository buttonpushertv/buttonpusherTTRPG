---
alias: {{name}}
campaign: "{{getCampaignName @importSettings}}"
id: {{i}}
cultureName: "{{name}}"
name: "{{name}}"
code: {{code}}
color: {{color}}
center: {{center}}
expansionism: {{expansionism}}
namesbase: {{base}}
origins: {{origins}}
pronounced:{{name}}
shortDescription:
shield: {{shield}}
tags:
- Culture
template: "[[Handlebar-FMG-Cultures-JSON]]"
templateVersion: 1
type: {{type}}
created: <% tp.file.creation_date("YYYY-MM-DD HH:mm") %>
WBProcess: FALSE
world: {{@importdataRoot.info.mapName}}
---

%% Change the World Building Process (WBProcess) property to true once you have placed/updated any info onto the page. Basically this allows sorting based on what has & hasn't had world building stuff done for it. %%

[[{{getCampaignHomeNote @importSettings}}]] | [[{{getCampaignAtlasNote @importSettings}}]]

%% All the info in this 'infobox' will appear in the panel to the right. Most of these values are pulled from the metadata in the properties above. %%
> [!infobox]
> ###### Info
>  |
>  ---: | --- |
>  **Pronounced:**| "`=this.pronounced`"
>  
>

# **`=this.cultureName`**

Name: `=this.name`

Culture Name: `=this.cultureName`

> [!recite|no-t text-center]+ Introduction
> *`=this.shortDescription`*

