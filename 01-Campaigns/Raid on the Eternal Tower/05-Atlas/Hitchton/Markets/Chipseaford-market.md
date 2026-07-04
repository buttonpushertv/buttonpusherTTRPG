---
aliases:
- Chipseaford
- Chipseaford-market
centerBurgId: 628
centerBurgNamePlusID: Chipseaford-628
centerBurgStateName: Casthamia
centerBurgFilePath: "01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Casthamia/Provinces/Chipseaford Barony/Burgs/Chipseaford"
cssclasses: sixty-pct-width
id: 15
marketName: Chipseaford
mapName: Hitchton
colorHex: "#dababf"
pronounced: 
leaders:
shortDescription: A short description of thie market.
tags:
- Market
- Chipseaford
- Hitchton
- roet
templateVersion: 7.0
WBProgress: Imported
centerBurgx: 1495.51
centerBurgy: 975.54
---

[[01-Campaigns/Raid on the Eternal Tower/Raid on the Eternal Tower Home|Raid on the Eternal Tower Home]] | [[01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/Hitchton-Linked Atlas|Hitchton-Linked Atlas]] | Center Burg: `=link(this.centerBurgFilePath)` 

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

| Good | Stock | Price |
| ---- | ----- | ----- |
| Wood | 41.02 | 0.92 |
| Stone | 7.15 | 2.48 |
| Marble | 0 | 10.07 |
| Iron | 8.09 | 6.81 |
| Copper | 0.62 | 4.39 |
| Tin | 0 | 2.2 |
| Silver | 0 | 13.28 |
| Gold | 0 | 19.95 |
| Grain | 67.1 | 0.71 |
| Cattle | 30.34 | 1.09 |
| Fish | 0 | 3 |
| Game | 19.37 | 1.29 |
| Wine | 64.02 | 1.41 |
| Olives | 57.52 | 0.95 |
| Honey | 33.52 | 0.9 |
| Salt | 0.12 | 6 |
| Dates | 3.97 | 3.24 |
| Horses | 0 | 2.44 |
| Elephants | 0 | 5.3 |
| Camels | 2.45 | 6.94 |
| Hemp | 75.65 | 0.45 |
| Pearls | 0 | 18.58 |
| Gemstones | 13.2 | 6.22 |
| Dyes | 5.87 | 2.44 |
| Incense | 0 | 13.3 |
| Silk | 0 | 10.87 |
| Spices | 0 | 16.31 |
| Amber | 0 | 12.2 |
| Furs | 21.38 | 1.39 |
| Sheep | 16.41 | 1.31 |
| Slaves | 0 | 10.02 |
| Tar | 0 | 2.25 |
| Saltpeter | 2.47 | 2.77 |
| Coal | 0.7 | 2.28 |
| Oil | 0 | 2.93 |
| Mahogany | 0.99 | 8.08 |
| Whales | 0 | 2.35 |
| Sugarcane | 0 | 5.85 |
| Tea | 0.99 | 5.77 |
| Tobacco | 0 | 5.82 |
| Clay | 9.74 | 0.6 |
| White sand | 0 | 0.64 |
| Leather | 0.1 | 2.97 |
| Cloth | 0 | 3.72 |
| Garments | 2.59 | 6.48 |
| Ceramics | 4.68 | 5.19 |
| Glass | 0.01 | 6.61 |
| Ropes | 0 | 3.25 |
| Paper | 0.25 | 3.24 |
| Ink | 0.63 | 4.28 |
| Books | 2.75 | 10.44 |
| Sails | 0 | 6.72 |
| Ships | 6 | 21.49 |
| Boots | 5.54 | 4.45 |
| Harnesses | 0 | 7.86 |
| Barrels | 0 | 2.25 |
| Bronze | 0.03 | 7.5 |
| Tools | 3.18 | 15.97 |
| Arms | 0 | 21 |
| Gunpowder | 0 | 9.85 |
| Artillery | 6.52 | 21.8 |
| Coins | 0.99 | 27.51 |
| Jewelry | 0.99 | 40.02 |
| Preserved food | 37 | 4.07 |
| Vinegar | 0 | 0.53 |
| Cheese | 6 | 3.5 |
| Beer | 0 | 5.5 |
| Liquor | 14.91 | 5.21 |
| Candles | 7.75 | 5.85 |
| Soap | 0 | 3.62 |
| Perfume | 9.5 | 14.72 |

### History

%% The Timeline below can be edited and expanded. Each entry should start with a line like this: '>> [!timeline]'. To place items to the left, add '|t-l' to the code above. Use '|t-r' to show item on right. And then you can add 't-1' up to 't-10' to add spacing between successive entries. The Timeline lives within a callout. Each Timeline item should appear after double greater than signs (>>) and then single greater than lines (>) will divide the items. Make sure there are no blank lines to keep the callout working properly. More info about ITS+Theme's Timeline Callout: [Callout - Timeline - SlRvb's Documentation - Obsidian Publish](https://publish.obsidian.md/slrvb-docs/ITS+Theme/Callouts/Callout+-+Timeline) To hide the Timeline on this page, follow instructions on the line below that starts '(double percents) <- To hide...' & remove the double percent signs here -> %%

> [!timeline|t-l] **`=this.burgName` Founded** _Date of founding._
> `=this.burgName` was founded by...

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

[[01-Campaigns/Raid on the Eternal Tower/Raid on the Eternal Tower Home|Raid on the Eternal Tower Home]] | [[01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/Hitchton-Linked Atlas|Hitchton-Linked Atlas]] | Center Burg: `=link(this.centerBurgFilePath)` 

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