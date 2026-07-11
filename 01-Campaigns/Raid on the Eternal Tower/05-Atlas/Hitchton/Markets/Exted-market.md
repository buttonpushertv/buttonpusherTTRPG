---
aliases:
- Exted
- Exted-market
centerBurgId: 10
centerBurgNamePlusID: Exted-10
centerBurgStateName: Oakhambia
centerBurgFilePath: "01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Oakhambia/Provinces/Seamersia County/Burgs/Exted"
cssclasses: seventy-pct-width
id: 8
marketName: Exted
mapName: Hitchton
colorHex: "#bc80bd"
pronounced: 
leaders:
shortDescription: A short description of this market.
tags:
- Market
- Exted
- Hitchton
- roet
templateVersion: 7.0
WBProgress: Imported
centerBurgx: 1123.21
centerBurgy: 485.6
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
| Wood | 7.91 | 1.08 |
| Stone | 21.94 | 0.79 |
| Marble | 0 | 9.27 |
| Iron | 0.16 | 2.99 |
| Copper | 0.5 | 4.31 |
| Tin | 0 | 4 |
| Silver | 0 | 12.24 |
| Gold | 0 | 18.98 |
| Grain | 37.68 | 0.65 |
| Cattle | 15.44 | 1.35 |
| Fish | 0 | 3 |
| Game | 21.25 | 1.18 |
| Wine | 21.06 | 1.24 |
| Olives | 36.4 | 0.81 |
| Honey | 35.14 | 0.72 |
| Salt | 10.71 | 2.38 |
| Dates | 8.99 | 1.1 |
| Horses | 0.73 | 2.94 |
| Elephants | 2.42 | 6.29 |
| Camels | 9.89 | 2.34 |
| Hemp | 72.36 | 0.31 |
| Pearls | 0 | 17.48 |
| Gemstones | 5 | 10.08 |
| Dyes | 26.06 | 1.49 |
| Incense | 0 | 12.65 |
| Silk | 0 | 10.51 |
| Spices | 0 | 15.86 |
| Amber | 3.58 | 6.27 |
| Furs | 16.67 | 1.56 |
| Sheep | 9.79 | 3.01 |
| Slaves | 0 | 9.43 |
| Tar | 0 | 2.29 |
| Saltpeter | 0.16 | 1.22 |
| Coal | 0.24 | 2.01 |
| Oil | 1.54 | 2.79 |
| Mahogany | 0.48 | 7.9 |
| Whales | 0 | 2.08 |
| Sugarcane | 0 | 5.49 |
| Tea | 0.8 | 5.62 |
| Tobacco | 0 | 5.66 |
| Clay | 5.53 | 2.24 |
| White sand | 0 | 0.71 |
| Leather | 0 | 2.18 |
| Cloth | 0 | 4.37 |
| Garments | 0 | 7.12 |
| Ceramics | 3.27 | 7.1 |
| Glass | 0.07 | 6.72 |
| Ropes | 0 | 3.25 |
| Paper | 0 | 3.25 |
| Ink | 0 | 3.96 |
| Books | 0 | 10.2 |
| Sails | 0.36 | 7.34 |
| Ships | 2 | 23.71 |
| Boots | 0 | 4.48 |
| Harnesses | 0 | 7.09 |
| Barrels | 0 | 2.29 |
| Bronze | 0 | 8.02 |
| Tools | 16.81 | 12.76 |
| Arms | 2.01 | 19.28 |
| Gunpowder | 0 | 9.03 |
| Artillery | 0 | 19.18 |
| Coins | 0.8 | 26.86 |
| Jewelry | 0 | 36.46 |
| Preserved food | 14.76 | 3.91 |
| Vinegar | 0.84 | 0.53 |
| Cheese | 14.93 | 3.33 |
| Beer | 6 | 5.12 |
| Liquor | 1.72 | 6.6 |
| Candles | 3.18 | 6.15 |
| Soap | 0 | 3.85 |
| Perfume | 15.43 | 13.8 |

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