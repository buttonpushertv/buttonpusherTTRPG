---
aliases:
- Cambrover
- Cambrover-market
centerBurgId: 533
centerBurgNamePlusID: Cambrover-533
centerBurgStateName: Casthamia
centerBurgFilePath: "01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Casthamia/Provinces/Cambrover County/Burgs/Cambrover"
cssclasses: sixty-pct-width
id: 18
marketName: Cambrover
mapName: Hitchton
colorHex: "#c6b9c1"
pronounced: 
leaders:
shortDescription: A short description of this market.
tags:
- Market
- Cambrover
- Hitchton
- roet
templateVersion: 7.0
WBProgress: Imported
centerBurgx: 1365.81
centerBurgy: 732.22
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
| Wood | 0 | 0.94 |
| Stone | 23.19 | 0.66 |
| Marble | 1.7 | 4.58 |
| Iron | 0 | 4.7 |
| Copper | 1.24 | 2.28 |
| Tin | 0 | 4 |
| Silver | 0.34 | 4.82 |
| Gold | 0 | 17.08 |
| Grain | 0 | 0.75 |
| Cattle | 10.38 | 1.09 |
| Fish | 0 | 2.12 |
| Game | 6.69 | 1.23 |
| Wine | 0 | 2.95 |
| Olives | 5.12 | 3.61 |
| Honey | 3.7 | 3.17 |
| Salt | 1.89 | 1.32 |
| Dates | 0 | 0.96 |
| Horses | 14.03 | 1.54 |
| Elephants | 3.48 | 3.01 |
| Camels | 10.92 | 1.9 |
| Hemp | 1.31 | 1.21 |
| Pearls | 0 | 15.35 |
| Gemstones | 1.08 | 10.54 |
| Dyes | 0.55 | 5.42 |
| Incense | 0 | 11.39 |
| Silk | 0 | 9.79 |
| Spices | 0 | 14.97 |
| Amber | 0 | 9.19 |
| Furs | 2.17 | 5.36 |
| Sheep | 6.91 | 1.79 |
| Slaves | 0 | 8.27 |
| Tar | 0 | 2.76 |
| Saltpeter | 1.5 | 1.12 |
| Coal | 0.02 | 2.69 |
| Oil | 0 | 4.14 |
| Mahogany | 0 | 4.1 |
| Whales | 0 | 1.57 |
| Sugarcane | 0 | 4.78 |
| Tea | 0 | 5.35 |
| Tobacco | 0 | 5.35 |
| Clay | 0.27 | 1.01 |
| White sand | 0 | 1.07 |
| Leather | 0.1 | 1.59 |
| Cloth | 0 | 4.14 |
| Garments | 1.09 | 9.84 |
| Ceramics | 3.31 | 5.78 |
| Glass | 0 | 7.07 |
| Ropes | 0 | 4.22 |
| Paper | 0 | 4.22 |
| Ink | 0 | 5.68 |
| Books | 0 | 11.25 |
| Sails | 0 | 7.14 |
| Ships | 0.52 | 26.9 |
| Boots | 4.54 | 4.89 |
| Harnesses | 6.83 | 6.24 |
| Barrels | 0 | 2.76 |
| Bronze | 1.15 | 8.08 |
| Tools | 0 | 16.86 |
| Arms | 0 | 20.66 |
| Gunpowder | 2.33 | 9.09 |
| Artillery | 0.66 | 21.79 |
| Coins | 7.25 | 21.5 |
| Jewelry | 4.94 | 31.61 |
| Preserved food | 0 | 3.21 |
| Vinegar | 0 | 3.1 |
| Cheese | 13.93 | 3 |
| Beer | 1 | 6.83 |
| Liquor | 0.63 | 8.8 |
| Candles | 0.75 | 9.75 |
| Soap | 5.9 | 4.82 |
| Perfume | 0.83 | 18.71 |

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