---
aliases:
- Ormster
- Ormster-market
centerBurgId: 8
centerBurgNamePlusID: Ormster-8
centerBurgStateName: Wodminia
centerBurgFilePath: "01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Wodminia/Provinces/Ormster Barony/Burgs/Ormster"
cssclasses: seventy-pct-width
id: 3
marketName: Ormster
mapName: Hitchton
colorHex: "#8dd3c7"
pronounced: 
leaders:
shortDescription: A short description of this market.
tags:
- Market
- Ormster
- Hitchton
- roet
templateVersion: 7.0
WBProgress: Imported
centerBurgx: 502.46
centerBurgy: 351.24
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
| Wood | 27.73 | 1.02 |
| Stone | 5.27 | 3.65 |
| Marble | 0 | 9 |
| Iron | 0.02 | 3.1 |
| Copper | 0.46 | 4.28 |
| Tin | 0 | 4 |
| Silver | 0 | 11.89 |
| Gold | 0 | 18.65 |
| Grain | 45.52 | 0.75 |
| Cattle | 12.92 | 5.74 |
| Fish | 0.01 | 1.59 |
| Game | 10.16 | 1.32 |
| Wine | 0 | 3.66 |
| Olives | 8.96 | 4.81 |
| Honey | 5.81 | 1.09 |
| Salt | 0 | 6 |
| Dates | 2.93 | 2.92 |
| Horses | 0 | 6.56 |
| Elephants | 0 | 9.14 |
| Camels | 0 | 6.57 |
| Hemp | 75.89 | 0.43 |
| Pearls | 0 | 17.11 |
| Gemstones | 1.9 | 19.47 |
| Dyes | 5.71 | 2.64 |
| Incense | 0 | 12.43 |
| Silk | 0 | 10.38 |
| Spices | 0 | 15.7 |
| Amber | 3.29 | 5.73 |
| Furs | 0 | 2.07 |
| Sheep | 12.1 | 5.76 |
| Slaves | 0 | 9.23 |
| Tar | 0 | 2.25 |
| Saltpeter | 1.82 | 2.57 |
| Coal | 0 | 1.88 |
| Oil | 3.23 | 4.9 |
| Mahogany | 0 | 7.85 |
| Whales | 0 | 1.99 |
| Sugarcane | 0 | 5.37 |
| Tea | 0 | 5.61 |
| Tobacco | 0 | 5.61 |
| Clay | 2.27 | 1.13 |
| White sand | 0 | 1.12 |
| Leather | 0.42 | 5.4 |
| Cloth | 0.55 | 5.28 |
| Garments | 2.57 | 7.75 |
| Ceramics | 3.61 | 5.89 |
| Glass | 0 | 7.12 |
| Ropes | 0 | 3.25 |
| Paper | 0 | 3.25 |
| Ink | 0 | 5.4 |
| Books | 0 | 12.54 |
| Sails | 0 | 8.31 |
| Ships | 7.18 | 24.43 |
| Boots | 10.04 | 5.4 |
| Harnesses | 0 | 8.72 |
| Barrels | 0 | 2.25 |
| Bronze | 0 | 7.96 |
| Tools | 3 | 15.09 |
| Arms | 0 | 21.32 |
| Gunpowder | 0 | 9.75 |
| Artillery | 0 | 19.26 |
| Coins | 0 | 26.74 |
| Jewelry | 0 | 38.9 |
| Preserved food | 40.49 | 5.72 |
| Vinegar | 0 | 2.1 |
| Cheese | 2.93 | 6.39 |
| Beer | 0 | 5.51 |
| Liquor | 9.03 | 7.41 |
| Candles | 7.24 | 6.96 |
| Soap | 1.2 | 8.44 |
| Perfume | 1.46 | 19.34 |

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