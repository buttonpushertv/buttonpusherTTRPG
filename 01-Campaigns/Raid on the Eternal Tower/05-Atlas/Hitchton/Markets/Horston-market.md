---
aliases:
- Horston
- Horston-market
centerBurgId: 13
centerBurgNamePlusID: Horston-13
centerBurgStateName: Horsteria
centerBurgFilePath: "01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Horsteria/Provinces/Cudland County/Burgs/Horston"
cssclasses: seventy-pct-width
id: 6
marketName: Horston
mapName: Hitchton
colorHex: "#6e40aa"
pronounced: 
leaders:
shortDescription: A short description of this market.
tags:
- Market
- Horston
- Hitchton
- roet
templateVersion: 7.0
WBProgress: Imported
centerBurgx: 920.41
centerBurgy: 618.74
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
| Wood | 0 | 1.23 |
| Stone | 39.59 | 0.87 |
| Marble | 0 | 10.94 |
| Iron | 0 | 3.83 |
| Copper | 17.37 | 1.34 |
| Tin | 3.69 | 2.3 |
| Silver | 0 | 14.41 |
| Gold | 0 | 21.01 |
| Grain | 8.71 | 0.94 |
| Cattle | 59.98 | 1.14 |
| Fish | 5.94 | 2.94 |
| Game | 19.28 | 1.39 |
| Wine | 0 | 1.24 |
| Olives | 28.12 | 1.11 |
| Honey | 10.96 | 1.2 |
| Salt | 19.35 | 1.89 |
| Dates | 15.64 | 0.95 |
| Horses | 5.44 | 2.85 |
| Elephants | 5.25 | 5.13 |
| Camels | 14.39 | 1.95 |
| Hemp | 9.7 | 0.43 |
| Pearls | 0 | 19.77 |
| Gemstones | 23.84 | 6.02 |
| Dyes | 29.31 | 1.52 |
| Incense | 2.4 | 7.94 |
| Silk | 0 | 11.27 |
| Spices | 0.44 | 16.74 |
| Amber | 5.41 | 12.93 |
| Furs | 0 | 3.02 |
| Sheep | 19.92 | 1.39 |
| Slaves | 0 | 10.67 |
| Tar | 0 | 2.41 |
| Saltpeter | 3 | 2.35 |
| Coal | 5.12 | 2.73 |
| Oil | 0 | 3.41 |
| Mahogany | 1.2 | 8.31 |
| Whales | 0 | 2.63 |
| Sugarcane | 0 | 6.25 |
| Tea | 0 | 3.24 |
| Tobacco | 0 | 6 |
| Clay | 0.19 | 1.28 |
| White sand | 0 | 1.2 |
| Leather | 0 | 1.6 |
| Cloth | 0 | 3.73 |
| Garments | 3.91 | 6.81 |
| Ceramics | 11.21 | 5.54 |
| Glass | 0 | 7.2 |
| Ropes | 0 | 3.27 |
| Paper | 0 | 3.27 |
| Ink | 2.31 | 4.15 |
| Books | 8 | 9.11 |
| Sails | 1 | 6.66 |
| Ships | 2 | 22.83 |
| Boots | 0 | 4.45 |
| Harnesses | 3.18 | 6.36 |
| Barrels | 0 | 2.41 |
| Bronze | 0.74 | 6.94 |
| Tools | 17.35 | 12.81 |
| Arms | 6.9 | 18.06 |
| Gunpowder | 0 | 9.78 |
| Artillery | 12.62 | 17.09 |
| Coins | 1.2 | 28.53 |
| Jewelry | 1.2 | 41.22 |
| Preserved food | 13.22 | 3.11 |
| Vinegar | 0 | 0.87 |
| Cheese | 6.92 | 2.88 |
| Beer | 14 | 4.78 |
| Liquor | 2.24 | 6.78 |
| Candles | 12.02 | 6.16 |
| Soap | 0 | 3.85 |
| Perfume | 0 | 16.45 |

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