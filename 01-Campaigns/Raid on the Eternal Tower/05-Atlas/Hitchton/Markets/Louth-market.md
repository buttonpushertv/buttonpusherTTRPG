---
aliases:
- Louth
- Louth-market
centerBurgId: 12
centerBurgNamePlusID: Louth-12
centerBurgStateName: Louthia
centerBurgFilePath: "01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Louthia/Provinces/Helscomia County/Burgs/Louth"
cssclasses: sixty-pct-width
id: 11
marketName: Louth
mapName: Hitchton
colorHex: "#eb8de7"
pronounced: 
leaders:
shortDescription: A short description of thie market.
tags:
- Market
- Louth
- Hitchton
- roet
templateVersion: 7.0
WBProgress: Imported
centerBurgx: 869.41
centerBurgy: 311.62
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
| Wood | 0 | 0.58 |
| Stone | 1.17 | 2.37 |
| Marble | 0 | 6.67 |
| Iron | 0 | 3.66 |
| Copper | 0 | 4.07 |
| Tin | 0 | 4 |
| Silver | 0 | 8.86 |
| Gold | 0 | 15.81 |
| Grain | 4.89 | 0.42 |
| Cattle | 2.63 | 2.91 |
| Fish | 0 | 1.43 |
| Game | 2.27 | 1.35 |
| Wine | 0 | 2.37 |
| Olives | 1.99 | 2.62 |
| Honey | 0.35 | 1.05 |
| Salt | 0 | 3.12 |
| Dates | 0 | 2.22 |
| Horses | 0 | 5.35 |
| Elephants | 0 | 7.48 |
| Camels | 0 | 5.35 |
| Hemp | 20.87 | 0.29 |
| Pearls | 0 | 13.91 |
| Gemstones | 0.42 | 15.99 |
| Dyes | 3.95 | 2.89 |
| Incense | 0 | 10.54 |
| Silk | 0 | 9.31 |
| Spices | 0 | 14.38 |
| Amber | 0.73 | 4.5 |
| Furs | 0.06 | 2.66 |
| Sheep | 0 | 2.89 |
| Slaves | 0 | 7.49 |
| Tar | 0 | 2.41 |
| Saltpeter | 0 | 2.13 |
| Coal | 2.86 | 2.14 |
| Oil | 0 | 3.44 |
| Mahogany | 0 | 7.19 |
| Whales | 0 | 1.22 |
| Sugarcane | 0 | 4.3 |
| Tea | 0 | 5.13 |
| Tobacco | 0 | 5.13 |
| Clay | 0 | 1.27 |
| White sand | 0 | 1.03 |
| Leather | 0 | 4.23 |
| Cloth | 0 | 4.1 |
| Garments | 0 | 7.79 |
| Ceramics | 0 | 6.27 |
| Glass | 0 | 7.03 |
| Ropes | 0 | 3.25 |
| Paper | 0 | 3.25 |
| Ink | 0 | 4.69 |
| Books | 0 | 11.59 |
| Sails | 0 | 7.1 |
| Ships | 0 | 23.93 |
| Boots | 4.74 | 5.45 |
| Harnesses | 0 | 8.18 |
| Barrels | 0 | 2.41 |
| Bronze | 0 | 8.14 |
| Tools | 0 | 16.07 |
| Arms | 0 | 21.19 |
| Gunpowder | 0 | 9.63 |
| Artillery | 0 | 20.35 |
| Coins | 0 | 24.75 |
| Jewelry | 0 | 33.46 |
| Preserved food | 4 | 4.66 |
| Vinegar | 0 | 1.63 |
| Cheese | 0 | 4.56 |
| Beer | 3 | 5.57 |
| Liquor | 2 | 7.63 |
| Candles | 6.37 | 6.59 |
| Soap | 0 | 5.81 |
| Perfume | 0 | 18.04 |

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