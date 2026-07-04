---
aliases:
- Agelton
- Agelton-market
centerBurgId: 108
centerBurgNamePlusID: Agelton-108
centerBurgStateName: Horsteria
centerBurgFilePath: "01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Horsteria/Provinces/Agelton County/Burgs/Agelton"
cssclasses: sixty-pct-width
id: 21
marketName: Agelton
mapName: Hitchton
colorHex: "#ff7c43"
pronounced: 
leaders:
shortDescription: A short description of thie market.
tags:
- Market
- Agelton
- Hitchton
- roet
templateVersion: 7.0
WBProgress: Imported
centerBurgx: 551.47
centerBurgy: 759.13
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
| Wood | 0 | 0.62 |
| Stone | 1.4 | 2.37 |
| Marble | 0 | 6.8 |
| Iron | 0 | 3.79 |
| Copper | 0 | 4.08 |
| Tin | 0 | 4 |
| Silver | 0 | 9.03 |
| Gold | 0 | 15.97 |
| Grain | 0 | 0.54 |
| Cattle | 0 | 1.05 |
| Fish | 0 | 1.52 |
| Game | 0 | 1.06 |
| Wine | 0 | 2.44 |
| Olives | 1.87 | 2.75 |
| Honey | 1.7 | 2.55 |
| Salt | 0 | 3.23 |
| Dates | 0 | 2.19 |
| Horses | 3.99 | 2.99 |
| Elephants | 8.24 | 2.95 |
| Camels | 0.49 | 5.32 |
| Hemp | 0 | 1.1 |
| Pearls | 0 | 14.09 |
| Gemstones | 0.5 | 16.18 |
| Dyes | 0 | 5.21 |
| Incense | 0 | 10.64 |
| Silk | 0 | 9.37 |
| Spices | 0 | 14.45 |
| Amber | 0 | 8.02 |
| Furs | 1 | 4.63 |
| Sheep | 0 | 3.07 |
| Slaves | 0 | 7.59 |
| Tar | 0 | 2.25 |
| Saltpeter | 0 | 2.16 |
| Coal | 0 | 1.88 |
| Oil | 0 | 3.53 |
| Mahogany | 0 | 7.23 |
| Whales | 0 | 1.26 |
| Sugarcane | 0 | 4.36 |
| Tea | 0 | 5.16 |
| Tobacco | 0 | 5.16 |
| Clay | 0.57 | 0.51 |
| White sand | 0 | 1.03 |
| Leather | 0 | 2.95 |
| Cloth | 0 | 4.45 |
| Garments | 0 | 9.73 |
| Ceramics | 11.35 | 4.74 |
| Glass | 0 | 7.03 |
| Ropes | 0 | 4.1 |
| Paper | 0 | 4.1 |
| Ink | 0 | 5.32 |
| Books | 0 | 11.69 |
| Sails | 0 | 7.45 |
| Ships | 0 | 25.85 |
| Boots | 0 | 5.64 |
| Harnesses | 0 | 7.55 |
| Barrels | 0 | 2.25 |
| Bronze | 0 | 7.9 |
| Tools | 0 | 15.8 |
| Arms | 0 | 20.28 |
| Gunpowder | 0 | 9.52 |
| Artillery | 0 | 20.12 |
| Coins | 0 | 24.64 |
| Jewelry | 0 | 36.22 |
| Preserved food | 0 | 4.31 |
| Vinegar | 0 | 2.51 |
| Cheese | 0.21 | 4.15 |
| Beer | 4 | 5.74 |
| Liquor | 10.8 | 6.57 |
| Candles | 0 | 8.84 |
| Soap | 0.77 | 4.71 |
| Perfume | 0 | 17.64 |

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