---
aliases:
- Tiverhambe
- Tiverhambe-market
centerBurgId: 678
centerBurgNamePlusID: Tiverhambe-678
centerBurgStateName: Linia
centerBurgFilePath: "01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Linia/Provinces/Bertonley Territory/Burgs/Tiverhambe"
cssclasses: sixty-pct-width
id: 24
marketName: Tiverhambe
mapName: Hitchton
colorHex: "#b3de69"
pronounced: 
leaders:
shortDescription: A short description of this market.
tags:
- Market
- Tiverhambe
- Hitchton
- roet
templateVersion: 7.0
WBProgress: Imported
centerBurgx: 1110.53
centerBurgy: 734.63
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
| Wood | 0 | 0.93 |
| Stone | 4.01 | 1.04 |
| Marble | 0 | 3.09 |
| Iron | 1.3 | 1.73 |
| Copper | 6.95 | 1.87 |
| Tin | 19.68 | 1.11 |
| Silver | 0.05 | 5.91 |
| Gold | 0 | 15.8 |
| Grain | 0 | 0.83 |
| Cattle | 2.59 | 1.01 |
| Fish | 0 | 1.43 |
| Game | 8.14 | 1.08 |
| Wine | 0 | 1.64 |
| Olives | 1.95 | 1.91 |
| Honey | 1.93 | 1.78 |
| Salt | 0 | 1.82 |
| Dates | 0 | 2.21 |
| Horses | 7.05 | 1.99 |
| Elephants | 3.49 | 4.39 |
| Camels | 1.77 | 3.94 |
| Hemp | 2.33 | 0.73 |
| Pearls | 0 | 13.9 |
| Gemstones | 2.03 | 8.47 |
| Dyes | 0 | 5.17 |
| Incense | 0 | 10.53 |
| Silk | 0 | 9.3 |
| Spices | 0 | 14.37 |
| Amber | 0 | 7.84 |
| Furs | 0 | 3.86 |
| Sheep | 0 | 0.97 |
| Slaves | 0 | 7.49 |
| Tar | 0 | 2.86 |
| Saltpeter | 0.9 | 1.5 |
| Coal | 0 | 2.99 |
| Oil | 0 | 3.07 |
| Mahogany | 0 | 7.19 |
| Whales | 0 | 1.22 |
| Sugarcane | 0 | 4.3 |
| Tea | 0 | 5.13 |
| Tobacco | 0 | 3.04 |
| Clay | 0 | 1.26 |
| White sand | 0 | 1.03 |
| Leather | 0 | 2.35 |
| Cloth | 0 | 3.49 |
| Garments | 0 | 8.57 |
| Ceramics | 0 | 6.26 |
| Glass | 0 | 7.03 |
| Ropes | 0.1 | 3.73 |
| Paper | 0 | 3.73 |
| Ink | 0 | 5.08 |
| Books | 0 | 11.08 |
| Sails | 0 | 6.49 |
| Ships | 0 | 25.02 |
| Boots | 0 | 5.13 |
| Harnesses | 6 | 6.4 |
| Barrels | 0 | 2.86 |
| Bronze | 0.2 | 7.65 |
| Tools | 4.63 | 15.31 |
| Arms | 0 | 20.27 |
| Gunpowder | 1.77 | 9.45 |
| Artillery | 3 | 18.07 |
| Coins | 0 | 23.84 |
| Jewelry | 2.73 | 30.65 |
| Preserved food | 0 | 3.16 |
| Vinegar | 0 | 1.69 |
| Cheese | 3 | 3.08 |
| Beer | 0 | 6.69 |
| Liquor | 0 | 8.44 |
| Candles | 1.31 | 7.71 |
| Soap | 0 | 4.21 |
| Perfume | 0 | 17.46 |

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