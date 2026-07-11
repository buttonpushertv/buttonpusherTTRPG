---
aliases:
- Congham
- Congham-market
centerBurgId: 4
centerBurgNamePlusID: Congham-4
centerBurgStateName: Linia
centerBurgFilePath: "01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Linia/Provinces/Congham Deanery/Burgs/Congham"
cssclasses: seventy-pct-width
id: 12
marketName: Congham
mapName: Hitchton
colorHex: "#ff566f"
pronounced: 
leaders:
shortDescription: A short description of this market.
tags:
- Market
- Congham
- Hitchton
- roet
templateVersion: 7.0
WBProgress: Imported
centerBurgx: 1176.97
centerBurgy: 921.45
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
| Wood | 67.26 | 1.52 |
| Stone | 15.21 | 2.45 |
| Marble | 6.67 | 6.23 |
| Iron | 13.26 | 5.39 |
| Copper | 1.01 | 2.81 |
| Tin | 0.2 | 2.76 |
| Silver | 0 | 16.65 |
| Gold | 0 | 23.11 |
| Grain | 85.39 | 0.99 |
| Cattle | 28.7 | 1.65 |
| Fish | 0 | 3 |
| Game | 24.86 | 1.54 |
| Wine | 64.7 | 1.42 |
| Olives | 62.98 | 0.93 |
| Honey | 66.46 | 0.95 |
| Salt | 33.52 | 5.36 |
| Dates | 6.51 | 4.04 |
| Horses | 0 | 4.16 |
| Elephants | 0 | 11.78 |
| Camels | 0 | 5.05 |
| Hemp | 100.96 | 0.82 |
| Pearls | 0 | 22.13 |
| Gemstones | 4.22 | 24.91 |
| Dyes | 14.58 | 1.96 |
| Incense | 3.24 | 15.08 |
| Silk | 1.31 | 11.95 |
| Spices | 1.62 | 17.55 |
| Amber | 4.32 | 8.32 |
| Furs | 38.59 | 1.42 |
| Sheep | 26.88 | 3.47 |
| Slaves | 0 | 11.95 |
| Tar | 0 | 2.25 |
| Saltpeter | 3.85 | 3.27 |
| Coal | 4.97 | 2.17 |
| Oil | 0 | 3.25 |
| Mahogany | 1.62 | 8.78 |
| Whales | 0 | 3 |
| Sugarcane | 1.43 | 6.98 |
| Tea | 1.62 | 6.27 |
| Tobacco | 1.62 | 6.27 |
| Clay | 0.57 | 1.31 |
| White sand | 0 | 0.69 |
| Leather | 0.21 | 3.27 |
| Cloth | 1.36 | 4.81 |
| Garments | 2 | 7.26 |
| Ceramics | 12.61 | 5.46 |
| Glass | 0 | 6.66 |
| Ropes | 0 | 3.25 |
| Paper | 0 | 3.25 |
| Ink | 2.3 | 4.3 |
| Books | 4 | 10.49 |
| Sails | 0 | 7.87 |
| Ships | 21.99 | 20.59 |
| Boots | 10 | 4.29 |
| Harnesses | 0 | 7.77 |
| Barrels | 0 | 2.25 |
| Bronze | 0.02 | 7.25 |
| Tools | 11.9 | 14.08 |
| Arms | 0 | 20.74 |
| Gunpowder | 0 | 10.12 |
| Artillery | 0.09 | 21.64 |
| Coins | 1.62 | 29.82 |
| Jewelry | 1.62 | 47.24 |
| Preserved food | 41.38 | 4.75 |
| Vinegar | 0 | 0.58 |
| Cheese | 27 | 3.59 |
| Beer | 7 | 5.01 |
| Liquor | 7.32 | 5.95 |
| Candles | 8.86 | 5.93 |
| Soap | 0 | 4.06 |
| Perfume | 10 | 15.34 |

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