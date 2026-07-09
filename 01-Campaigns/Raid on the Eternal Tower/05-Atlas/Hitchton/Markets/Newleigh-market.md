---
aliases:
- Newleigh
- Newleigh-market
centerBurgId: 16
centerBurgNamePlusID: Newleigh-16
centerBurgStateName: Stapia
centerBurgFilePath: "01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Stapia/Provinces/Newleigh County/Burgs/Newleigh"
cssclasses: sixty-pct-width
id: 5
marketName: Newleigh
mapName: Hitchton
colorHex: "#ac3cb2"
pronounced: 
leaders:
shortDescription: A short description of this market.
tags:
- Market
- Newleigh
- Hitchton
- roet
templateVersion: 7.0
WBProgress: Imported
centerBurgx: 1473.33
centerBurgy: 305.58
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
| Wood | 101.61 | 2.14 |
| Stone | 21.21 | 1.38 |
| Marble | 3.4 | 8.01 |
| Iron | 6.46 | 4.19 |
| Copper | 1.14 | 4.71 |
| Tin | 11.11 | 1.22 |
| Silver | 0.03 | 9.42 |
| Gold | 0 | 24.09 |
| Grain | 132.22 | 1.07 |
| Cattle | 32.19 | 1.81 |
| Fish | 3.92 | 3 |
| Game | 81.04 | 1.55 |
| Wine | 127.62 | 1.62 |
| Olives | 129.14 | 1.37 |
| Honey | 118.13 | 0.9 |
| Salt | 7.87 | 5.65 |
| Dates | 7.3 | 3.52 |
| Horses | 4.41 | 3.36 |
| Elephants | 4.58 | 12.03 |
| Camels | 12.36 | 3.03 |
| Hemp | 224.12 | 0.56 |
| Pearls | 3.72 | 22.77 |
| Gemstones | 9.56 | 9.65 |
| Dyes | 5 | 3.23 |
| Incense | 3.64 | 15.7 |
| Silk | 2.29 | 12.23 |
| Spices | 1.82 | 17.99 |
| Amber | 3.18 | 11.32 |
| Furs | 72.97 | 1.7 |
| Sheep | 20.33 | 2.48 |
| Slaves | 2.22 | 8.69 |
| Tar | 0 | 2.25 |
| Saltpeter | 4.54 | 3.42 |
| Coal | 0.01 | 2.14 |
| Oil | 2.15 | 3.25 |
| Mahogany | 1.82 | 8.99 |
| Whales | 0 | 3 |
| Sugarcane | 5.05 | 7.2 |
| Tea | 1.82 | 6.43 |
| Tobacco | 1.53 | 6.44 |
| Clay | 17.9 | 2.82 |
| White sand | 1.82 | 1.28 |
| Leather | 0.1 | 2.67 |
| Cloth | 1.41 | 4.43 |
| Garments | 9 | 6.6 |
| Ceramics | 7.49 | 7.55 |
| Glass | 5.14 | 6.94 |
| Ropes | 0 | 3.25 |
| Paper | 0 | 3.25 |
| Ink | 0.16 | 4.67 |
| Books | 3.68 | 10.36 |
| Sails | 0 | 7.5 |
| Ships | 9 | 22.43 |
| Boots | 7.62 | 4.11 |
| Harnesses | 0 | 7.51 |
| Barrels | 0 | 2.25 |
| Bronze | 0.42 | 7.36 |
| Tools | 19.58 | 12.43 |
| Arms | 15.08 | 16.79 |
| Gunpowder | 0 | 10.24 |
| Artillery | 17.37 | 16.58 |
| Coins | 1.82 | 26.23 |
| Jewelry | 6.15 | 39.3 |
| Preserved food | 47.51 | 4.06 |
| Vinegar | 0 | 0.58 |
| Cheese | 24.34 | 3.38 |
| Beer | 15 | 4.45 |
| Liquor | 0 | 6.82 |
| Candles | 13.95 | 5.51 |
| Soap | 0 | 4.19 |
| Perfume | 3.64 | 16.95 |

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