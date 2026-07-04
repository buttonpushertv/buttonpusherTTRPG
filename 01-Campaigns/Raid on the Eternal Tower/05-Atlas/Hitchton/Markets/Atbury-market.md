---
aliases:
- Atbury
- Atbury-market
centerBurgId: 169
centerBurgNamePlusID: Atbury-169
centerBurgStateName: Casthamia
centerBurgFilePath: "01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Casthamia/Provinces/Berhamia Earldom/Burgs/Atbury"
cssclasses: sixty-pct-width
id: 16
marketName: Atbury
mapName: Hitchton
colorHex: "#e6419c"
pronounced: 
leaders:
shortDescription: A short description of thie market.
tags:
- Market
- Atbury
- Hitchton
- roet
templateVersion: 7.0
WBProgress: Imported
centerBurgx: 1581.51
centerBurgy: 627.67
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
| Wood | 0 | 0.94 |
| Stone | 33.97 | 1.4 |
| Marble | 0 | 8.67 |
| Iron | 0.02 | 3.32 |
| Copper | 5.93 | 1.56 |
| Tin | 8.05 | 1.32 |
| Silver | 0.19 | 4.05 |
| Gold | 0 | 18.24 |
| Grain | 0 | 0.64 |
| Cattle | 45.91 | 1.09 |
| Fish | 0 | 2.74 |
| Game | 10.41 | 1.23 |
| Wine | 2.38 | 1.1 |
| Olives | 10.5 | 1.5 |
| Honey | 7.01 | 1.64 |
| Salt | 0 | 1.63 |
| Dates | 10.63 | 1.02 |
| Horses | 19.64 | 1.8 |
| Elephants | 11.24 | 3.61 |
| Camels | 29.52 | 1.57 |
| Hemp | 8.93 | 0.4 |
| Pearls | 0 | 16.66 |
| Gemstones | 1.74 | 6.79 |
| Dyes | 6.57 | 2.32 |
| Incense | 1.3 | 4.58 |
| Silk | 0 | 10.23 |
| Spices | 0 | 15.51 |
| Amber | 0 | 10.41 |
| Furs | 3.05 | 3.88 |
| Sheep | 10.76 | 1.47 |
| Slaves | 0 | 8.98 |
| Tar | 0 | 2.59 |
| Saltpeter | 1.62 | 0.93 |
| Coal | 0 | 2.92 |
| Oil | 1.69 | 3.21 |
| Mahogany | 0.65 | 4.18 |
| Whales | 0 | 1.88 |
| Sugarcane | 0 | 5.21 |
| Tea | 0.65 | 5.51 |
| Tobacco | 0 | 5.54 |
| Clay | 0 | 2.06 |
| White sand | 0 | 1.11 |
| Leather | 0.27 | 1.49 |
| Cloth | 0 | 3.79 |
| Garments | 0 | 8.1 |
| Ceramics | 2.67 | 6.9 |
| Glass | 0 | 7.11 |
| Ropes | 2.7 | 3.25 |
| Paper | 0 | 3.36 |
| Ink | 0 | 4.42 |
| Books | 4 | 9.66 |
| Sails | 2 | 6.65 |
| Ships | 0 | 24.07 |
| Boots | 0 | 4.72 |
| Harnesses | 1.62 | 6.42 |
| Barrels | 0 | 2.59 |
| Bronze | 1.44 | 6.89 |
| Tools | 9.71 | 14.28 |
| Arms | 0 | 19.68 |
| Gunpowder | 2.05 | 8.86 |
| Artillery | 3.51 | 18.83 |
| Coins | 6.38 | 21.05 |
| Jewelry | 8.34 | 29.52 |
| Preserved food | 0 | 3.21 |
| Vinegar | 0 | 1.23 |
| Cheese | 9.09 | 2.84 |
| Beer | 8 | 5.59 |
| Liquor | 0 | 7.33 |
| Candles | 3.04 | 7.49 |
| Soap | 0 | 4 |
| Perfume | 0 | 16.12 |

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