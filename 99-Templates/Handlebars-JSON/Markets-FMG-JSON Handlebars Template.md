---
aliases:
- {{getBurgName centerBurgId @importDataRoot.pack.burgs}}
- {{getBurgName centerBurgId @importDataRoot.pack.burgs}}-market
centerBurgId: {{centerBurgId}}
{{setvar "currBurgNamePlusID" (getBurgNamePlusID centerBurgId @importDataRoot.pack.burgs)}}centerBurgNamePlusID: {{"currBurgNamePlusID"}}
{{setvar "centerBurgStateName" (getBurgStateName centerBurgId @importDataRoot.pack.burgs @importDataRoot.pack.states)}}centerBurgStateName: {{"centerBurgStateName"}}
{{setvar "centerBurgFile" (getBurgFile centerBurgId @importDataRoot)}}centerBurgFilePath: "{{"centerBurgFile"}}"
cssclasses: seventy-pct-width
id: {{i}}
{{setvar "currMarketName" (getBurgName centerBurgId @importDataRoot.pack.burgs)}}marketName: {{"currMarketName"}}
mapName: {{@importDataRoot.info.mapName}}
colorHex: "{{color}}"
pronounced: 
leaders:
shortDescription: A short description of this market.
tags:
- Market
- {{getBurgName centerBurgId @importDataRoot.pack.burgs}}
- {{@importDataRoot.info.mapName}}
- {{@importDataRoot.importInfo.thisCampaignShortCode}}
templateVersion: 7.0
WBProgress: Imported
centerBurgx: {{getBurgX centerBurgId @importDataRoot.pack.burgs}}
centerBurgy: {{getBurgY centerBurgId @importDataRoot.pack.burgs}}
---

[[{{@importDataRoot.importInfo.thisCampaignPath}}/{{@importDataRoot.importInfo.thisCampaign}} Home|{{@importDataRoot.importInfo.thisCampaign}} Home]] | [[{{@importDataRoot.importInfo.thisCampaignPath}}/05-Atlas/{{@importDataRoot.info.mapName}}/{{@importDataRoot.info.mapName}}-Linked Atlas|{{@importDataRoot.info.mapName}}-Linked Atlas]] | Center Burg: `=link(this.centerBurgFilePath)` 

# **`=this.marketName`**
*`=this.shortDescription`*

---

> [!column|no-t] `=this.marketName` Information
>> ### Information
>> **Center Burg:** `=link(this.centerBurgFilePath,centerBurgName)`
>>  **Center Burg State:** `=link(this.centerBurgStateName)`
>> **Leader(s):**  `=link(this.leaders)`
>
>> ```dataview
>> TABLE WITHOUT ID file.link as "Market Burgs", link(provinceName) as "Province", link(stateName) as "State"
>> FROM #Burg and #roet
>> WHERE econtains(marketId,this.id)
>> SORT file.name ASC
>> ```
---

## Goods

{{getMarketGoodsTable i @importDataRoot.pack.markets @importDataRoot.pack.goods}}

### History

%% The Timeline below can be edited and expanded. Each entry should start with a line like this: '>> [!timeline]'. To place items to the left, add '|t-l' to the code above. Use '|t-r' to show item on right. And then you can add 't-1' up to 't-10' to add spacing between successive entries. The Timeline lives within a callout. Each Timeline item should appear after double greater than signs (>>) and then single greater than lines (>) will divide the items. Make sure there are no blank lines to keep the callout working properly. More info about ITS+Theme's Timeline Callout: [Callout - Timeline - SlRvb's Documentation - Obsidian Publish](https://publish.obsidian.md/slrvb-docs/ITS+Theme/Callouts/Callout+-+Timeline) To hide the Timeline on this page, follow instructions on the line below that starts '(double percents) <- To hide...' & remove the double percent signs here -> %%

> [!timeline|t-l] **`=this.marketName` Founded** _Date of founding._
> `=this.marketName` was founded in `=link(this.centerBurgFilePath,this.marketName)` in the state of `=link(this.centerBurgStateName)`...

> [!timeline|t-r] **Something Happened** *A significant event.*
> Something momentous occurred on this day.

> [!timeline|t-l] **Another thing happened** *Less significant this time.*
> Today was only a moderately important day.

%% <- To hide Timeline also remove *only* the double percent signs to the left on this line %%

## Notes

%% Further notes. These 2 callouts will be hidden by default. Change the '-' after the closing square bracket to a '+' to have it be expanded by default. %%

> [!hint]- Plot Hooks
> Plot Hooks go here...

> [!question]- Hidden Details
> Hidden Details go here...

## More Details

%% GENERAL NOTES GO HERE - free-form text or images %%

---

[[{{@importDataRoot.importInfo.thisCampaignPath}}/{{@importDataRoot.importInfo.thisCampaign}} Home|{{@importDataRoot.importInfo.thisCampaign}} Home]] | [[{{@importDataRoot.importInfo.thisCampaignPath}}/05-Atlas/{{@importDataRoot.info.mapName}}/{{@importDataRoot.info.mapName}}-Linked Atlas|{{@importDataRoot.info.mapName}}-Linked Atlas]] | Center Burg: `=link(this.centerBurgFilePath)` 

> [!metadata|metadata]- Metadata & Page Controls
>> [!metadata|metadataoption]+ System
>> #### System
>>  |
>> ---|---|
>> **Tags** | `INPUT[Tags][inlineListSuggester:tags]` |
>> **World Building Progress**| `INPUT[WBProgress][inlineSelect:WBProgress]`|
>>> [!note]- Tracking World Building Progress
>>> Update the World Building Progress property as you update any info on the page. Your choices are `Imported`, `In Progress`, `Game-ready`, `Nearly Complete,` and `Done`.
>>>
>>> This allows sorting based on what has & hasn't had world building stuff done for it. There are Dataviews setup on the campaign home page that sort by these progress key words.
>
>> [!metadata|metadataoption]+ Info
>> #### Info
>>  |
>> ---|---|
> **Pronounced** |  `INPUT[text:pronounced]`
> **Aliases** | `INPUT[list:aliases]` |
> **Leaders**|`INPUT[list:leaders]`|
> **Short Description**|`INPUT[textArea:shortDescription]`
>
>> [!metadata|metadataoption]+ Controls
>> These buttons control various portions of this page. They only change things on this page.
>> 
>> #### Controls
>>  |
>> ---|---|
>> **cssClass**|`INPUT[cssClass][inlineSelect:cssclasses]` |
>> Leaflet Map| `BUTTON[hide_leaf_map]` - `BUTTON[show_leaf_map]`
>> Interactive Map | `BUTTON[hide_web_map]` - `BUTTON[show_web_map]`