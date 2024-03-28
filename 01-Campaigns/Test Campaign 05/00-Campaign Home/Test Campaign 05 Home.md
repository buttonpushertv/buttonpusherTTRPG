---
campaign: "Test Campaign 05" 
status: setup
role: gm
system: 5e
type: campaign
Template: "[[newCampaignTemplate]]"
TemplateVersion: 2
---



# The World of Test Campaign 05

## Player Characters

-

![random|sban+hmicro](https://source.unsplash.com/random?abstract,texture)
## Sessions
```dataview
table SessionStatus as "Status", Summary as "Summary" from "01-Campaigns/Test Campaign 05"
where contains(type,"session")
SORT SessionDate DESC
```
![random|sban+hmicro](https://source.unsplash.com/random?abstract,fire)
## Story Arcs
```dataview
table Status as "Status", Summary as "Summary" from "01-Campaigns/Test Campaign 05"
where contains(type,"arc") AND !contains(status,"complete") 
SORT SessionDate DESC
```
![random|sban+hmicro](https://source.unsplash.com/random?abstract,water)

## Truths about the campaign/world

*Write down some facts about this campaign or the world that the characters find themselves in.*

## Custom rules

- [[Character options]]
- [[House rules]]
- [[Safety Tools]]