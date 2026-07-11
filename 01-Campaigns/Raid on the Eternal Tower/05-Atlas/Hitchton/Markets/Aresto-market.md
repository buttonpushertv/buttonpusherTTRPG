---
aliases:
- Aresto
- Aresto-market
centerBurgId: 2
centerBurgNamePlusID: Aresto-2
centerBurgStateName: Arestia
centerBurgFilePath: "01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Arestia/Provinces/Aresto Parish/Burgs/Aresto"
cssclasses: seventy-pct-width
id: 1
marketName: Aresto
mapName: Hitchton
colorHex: "#8af557"
pronounced: 
leaders:
shortDescription: A short description of this market.
tags:
- Market
- Aresto
- Hitchton
- roet
templateVersion: 7.0
WBProgress: Imported
centerBurgx: 2048.89
centerBurgy: 403.81
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
| Wood | 0 | 1.51 |
| Stone | 13.42 | 5.73 |
| Marble | 7.64 | 13.18 |
| Iron | 15.19 | 6.93 |
| Copper | 1.16 | 4.72 |
| Tin | 0 | 4 |
| Silver | 0.65 | 9.3 |
| Gold | 0 | 24.29 |
| Grain | 0 | 1.24 |
| Cattle | 32.88 | 1.55 |
| Fish | 1.87 | 3 |
| Game | 29.17 | 1.53 |
| Wine | 0 | 1.62 |
| Olives | 21.83 | 1.46 |
| Honey | 24.44 | 1.15 |
| Salt | 37.51 | 5.25 |
| Dates | 7.45 | 4.33 |
| Horses | 0 | 2.91 |
| Elephants | 0 | 12.46 |
| Camels | 0 | 8.99 |
| Hemp | 13.11 | 1.01 |
| Pearls | 3.03 | 23.07 |
| Gemstones | 4.83 | 26.35 |
| Dyes | 7.5 | 2.53 |
| Incense | 3.71 | 15.82 |
| Silk | 2.34 | 12.3 |
| Spices | 1.86 | 18.07 |
| Amber | 8.36 | 16.17 |
| Furs | 13.55 | 2.58 |
| Sheep | 20.1 | 1.8 |
| Slaves | 0 | 12.67 |
| Tar | 0 | 2.45 |
| Saltpeter | 4.64 | 3.46 |
| Coal | 0 | 2.24 |
| Oil | 0 | 3.35 |
| Mahogany | 1.86 | 9.04 |
| Whales | 1.12 | 2.87 |
| Sugarcane | 4.98 | 3.74 |
| Tea | 1.86 | 6.46 |
| Tobacco | 1.86 | 6.46 |
| Clay | 5.83 | 1.03 |
| White sand | 0.21 | 0.53 |
| Leather | 0.05 | 3.92 |
| Cloth | 0 | 4.15 |
| Garments | 3 | 7.44 |
| Ceramics | 15.78 | 4.98 |
| Glass | 17.34 | 5.05 |
| Ropes | 0 | 3.25 |
| Paper | 0 | 3.25 |
| Ink | 0.5 | 4.51 |
| Books | 1 | 11.23 |
| Sails | 0 | 7.15 |
| Ships | 31.61 | 17.82 |
| Boots | 4.85 | 5.29 |
| Harnesses | 0 | 8.38 |
| Barrels | 0 | 2.45 |
| Bronze | 0 | 8.36 |
| Tools | 4.86 | 16.26 |
| Arms | 0 | 22.06 |
| Gunpowder | 0 | 10.36 |
| Artillery | 0 | 24.16 |
| Coins | 4.35 | 25.89 |
| Jewelry | 1.86 | 50.18 |
| Preserved food | 38.47 | 4.41 |
| Vinegar | 0 | 0.75 |
| Cheese | 8.83 | 3.69 |
| Beer | 23.56 | 4.16 |
| Liquor | 11 | 5.81 |
| Candles | 5 | 6.71 |
| Soap | 0 | 4.08 |
| Perfume | 21.34 | 13.78 |

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