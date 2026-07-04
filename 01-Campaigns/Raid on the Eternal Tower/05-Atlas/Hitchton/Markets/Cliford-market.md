---
aliases:
- Cliford
- Cliford-market
centerBurgId: 158
centerBurgNamePlusID: Cliford-158
centerBurgStateName: Horsteria
centerBurgFilePath: "01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Horsteria/Provinces/Cliford Earldom/Burgs/Cliford"
cssclasses: sixty-pct-width
id: 20
marketName: Cliford
mapName: Hitchton
colorHex: "#eaad2e"
pronounced: 
leaders:
shortDescription: A short description of thie market.
tags:
- Market
- Cliford
- Hitchton
- roet
templateVersion: 7.0
WBProgress: Imported
centerBurgx: 683.23
centerBurgy: 578.57
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
| Wood | 0 | 0.66 |
| Stone | 12.61 | 0.89 |
| Marble | 0 | 6.86 |
| Iron | 1.27 | 1.66 |
| Copper | 0 | 4.09 |
| Tin | 7.66 | 1.58 |
| Silver | 0 | 9.11 |
| Gold | 0 | 16.04 |
| Grain | 28.53 | 0.36 |
| Cattle | 3.69 | 1.28 |
| Fish | 3.35 | 0.61 |
| Game | 3.35 | 0.95 |
| Wine | 0 | 1.83 |
| Olives | 2.56 | 2.19 |
| Honey | 1.34 | 2.06 |
| Salt | 1.8 | 2.16 |
| Dates | 4.6 | 1.19 |
| Horses | 7.42 | 1.98 |
| Elephants | 0.01 | 3.23 |
| Camels | 1.19 | 4.39 |
| Hemp | 0.51 | 0.76 |
| Pearls | 0 | 8.2 |
| Gemstones | 0 | 16.36 |
| Dyes | 0 | 5.23 |
| Incense | 0 | 10.7 |
| Silk | 0 | 9.39 |
| Spices | 0 | 14.49 |
| Amber | 0 | 8.1 |
| Furs | 0 | 4.22 |
| Sheep | 3.68 | 1.82 |
| Slaves | 0 | 7.64 |
| Tar | 0 | 2.25 |
| Saltpeter | 0 | 2.17 |
| Coal | 0.09 | 2.02 |
| Oil | 2.83 | 3.25 |
| Mahogany | 0 | 7.24 |
| Whales | 0 | 1.28 |
| Sugarcane | 0 | 4.39 |
| Tea | 0 | 5.17 |
| Tobacco | 0 | 5.17 |
| Clay | 1.75 | 0.53 |
| White sand | 0 | 1.03 |
| Leather | 0.02 | 2.33 |
| Cloth | 0 | 3.92 |
| Garments | 0 | 9.1 |
| Ceramics | 2.71 | 5.28 |
| Glass | 0 | 7.03 |
| Ropes | 0 | 3.74 |
| Paper | 0 | 3.74 |
| Ink | 0 | 5.18 |
| Books | 0 | 11.13 |
| Sails | 2 | 6.78 |
| Ships | 0 | 24.07 |
| Boots | 0 | 5.22 |
| Harnesses | 1 | 6.96 |
| Barrels | 0 | 2.25 |
| Bronze | 0 | 7.3 |
| Tools | 8.32 | 13.67 |
| Arms | 4.97 | 18.14 |
| Gunpowder | 0 | 9.53 |
| Artillery | 2.32 | 16.99 |
| Coins | 0 | 24.7 |
| Jewelry | 0 | 34.22 |
| Preserved food | 0 | 3.14 |
| Vinegar | 0 | 1.94 |
| Cheese | 2 | 3.51 |
| Beer | 2 | 5.75 |
| Liquor | 0 | 7.24 |
| Candles | 0 | 8.19 |
| Soap | 0 | 4.36 |
| Perfume | 0 | 17.12 |

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