---
aliases:
- Penby
- Penby-market
centerBurgId: 6
centerBurgNamePlusID: Penby-6
centerBurgStateName: Penland
centerBurgFilePath: "01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Penland/Provinces/Penby Parish/Burgs/Penby"
cssclasses: seventy-pct-width
id: 2
marketName: Penby
mapName: Hitchton
colorHex: "#5662d4"
pronounced: 
leaders:
shortDescription: A short description of this market.
tags:
- Market
- Penby
- Hitchton
- roet
templateVersion: 7.0
WBProgress: Imported
centerBurgx: 1368.95
centerBurgy: 1091.89
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
| Wood | 19.38 | 1.33 |
| Stone | 13.79 | 1.6 |
| Marble | 0 | 10.59 |
| Iron | 0.12 | 2.42 |
| Copper | 0.7 | 4.43 |
| Tin | 0 | 3.01 |
| Silver | 0 | 13.95 |
| Gold | 0 | 20.58 |
| Grain | 57.14 | 0.83 |
| Cattle | 19.75 | 2.37 |
| Fish | 0 | 3 |
| Game | 17.9 | 1.38 |
| Wine | 0 | 1.3 |
| Olives | 13.7 | 1.58 |
| Honey | 19.35 | 0.99 |
| Salt | 3.7 | 5.57 |
| Dates | 4.48 | 2.95 |
| Horses | 5.7 | 3.16 |
| Elephants | 2.81 | 10.08 |
| Camels | 2.88 | 5.63 |
| Hemp | 72.22 | 0.47 |
| Pearls | 0 | 19.28 |
| Gemstones | 2.9 | 21.81 |
| Dyes | 7.33 | 2.32 |
| Incense | 2.23 | 13.5 |
| Silk | 0 | 11.11 |
| Spices | 1.12 | 16.44 |
| Amber | 5.02 | 4.44 |
| Furs | 8.38 | 1.97 |
| Sheep | 10.31 | 2.67 |
| Slaves | 2.69 | 6.77 |
| Tar | 0 | 2.27 |
| Saltpeter | 0.13 | 1.91 |
| Coal | 0.28 | 2.05 |
| Oil | 0 | 2.72 |
| Mahogany | 1.12 | 8.22 |
| Whales | 8.51 | 0.93 |
| Sugarcane | 0 | 6.09 |
| Tea | 1.12 | 5.87 |
| Tobacco | 0 | 5.93 |
| Clay | 10.98 | 2.72 |
| White sand | 0.53 | 0.52 |
| Leather | 0.01 | 3.5 |
| Cloth | 0.07 | 4.32 |
| Garments | 2 | 6.99 |
| Ceramics | 4.59 | 7.55 |
| Glass | 5.82 | 6.06 |
| Ropes | 0 | 3.25 |
| Paper | 0 | 3.25 |
| Ink | 0 | 4.17 |
| Books | 2 | 10.73 |
| Sails | 0 | 7.31 |
| Ships | 8 | 22.35 |
| Boots | 7.72 | 4.6 |
| Harnesses | 0 | 7.7 |
| Barrels | 0 | 2.27 |
| Bronze | 0.09 | 7.75 |
| Tools | 9.32 | 13.73 |
| Arms | 14.83 | 16.83 |
| Gunpowder | 0 | 9.39 |
| Artillery | 6.21 | 16.9 |
| Coins | 1.12 | 28 |
| Jewelry | 1.12 | 40.51 |
| Preserved food | 14 | 5.59 |
| Vinegar | 0.43 | 0.79 |
| Cheese | 14 | 4.03 |
| Beer | 10 | 4.85 |
| Liquor | 1.67 | 6.81 |
| Candles | 4.74 | 6.1 |
| Soap | 0 | 5.02 |
| Perfume | 16.08 | 14.46 |

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