---
aliases:
- Mouton
- Mouton-market
centerBurgId: 426
centerBurgNamePlusID: Mouton-426
centerBurgStateName: Hitchia
centerBurgFilePath: "01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Hitchia/Provinces/Skipton County/Burgs/Mouton"
cssclasses: seventy-pct-width
id: 25
marketName: Mouton
mapName: Hitchton
colorHex: "#46f56e"
pronounced: 
leaders:
shortDescription: A short description of this market.
tags:
- Market
- Mouton
- Hitchton
- roet
templateVersion: 7.0
WBProgress: Imported
centerBurgx: 1752.23
centerBurgy: 718.54
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
| Wood | 0 | 0.73 |
| Stone | 11.12 | 1.12 |
| Marble | 0 | 7.38 |
| Iron | 0.06 | 2.83 |
| Copper | 0 | 4.14 |
| Tin | 0 | 4 |
| Silver | 0 | 9.79 |
| Gold | 0 | 16.68 |
| Grain | 27.75 | 0.47 |
| Cattle | 9.09 | 1.08 |
| Fish | 0 | 1.9 |
| Game | 2.81 | 1.09 |
| Wine | 2.3 | 0.91 |
| Olives | 4.11 | 1.22 |
| Honey | 1.04 | 1.09 |
| Salt | 0 | 4.31 |
| Dates | 1.35 | 2.42 |
| Horses | 0 | 3.3 |
| Elephants | 0 | 7.99 |
| Camels | 0 | 5.72 |
| Hemp | 13.88 | 0.31 |
| Pearls | 0 | 14.89 |
| Gemstones | 3.73 | 6.22 |
| Dyes | 3.18 | 3.28 |
| Incense | 0 | 11.12 |
| Silk | 0 | 9.63 |
| Spices | 0 | 14.78 |
| Amber | 0 | 8.76 |
| Furs | 2.4 | 3.28 |
| Sheep | 5.56 | 1.26 |
| Slaves | 0 | 8.02 |
| Tar | 0 | 2.29 |
| Saltpeter | 0 | 2.28 |
| Coal | 0 | 1.94 |
| Oil | 0 | 2.78 |
| Mahogany | 0 | 7.39 |
| Whales | 0 | 1.46 |
| Sugarcane | 0 | 4.63 |
| Tea | 0 | 5.28 |
| Tobacco | 0.34 | 3.19 |
| Clay | 0 | 1.55 |
| White sand | 0.37 | 0.61 |
| Leather | 0 | 3.11 |
| Cloth | 0 | 3.59 |
| Garments | 0 | 7.89 |
| Ceramics | 0 | 6.55 |
| Glass | 1.61 | 6.47 |
| Ropes | 0 | 3.31 |
| Paper | 0 | 3.31 |
| Ink | 0 | 4.46 |
| Books | 0 | 10.94 |
| Sails | 0 | 6.59 |
| Ships | 0 | 22.67 |
| Boots | 0.31 | 5.35 |
| Harnesses | 0 | 7.54 |
| Barrels | 0 | 2.29 |
| Bronze | 0 | 7.98 |
| Tools | 2 | 15.27 |
| Arms | 1.05 | 19.93 |
| Gunpowder | 0 | 9.61 |
| Artillery | 0 | 19.14 |
| Coins | 0 | 25.26 |
| Jewelry | 0 | 33.75 |
| Preserved food | 10.71 | 4.1 |
| Vinegar | 0 | 0.74 |
| Cheese | 3 | 3.53 |
| Beer | 0 | 5.63 |
| Liquor | 9.17 | 5.91 |
| Candles | 6.86 | 6.2 |
| Soap | 0 | 4.02 |
| Perfume | 10 | 14.77 |

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