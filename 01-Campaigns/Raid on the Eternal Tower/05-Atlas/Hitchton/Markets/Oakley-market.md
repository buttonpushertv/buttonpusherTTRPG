---
aliases:
- Oakley
- Oakley-market
centerBurgId: 5
centerBurgNamePlusID: Oakley-5
centerBurgStateName: Oakland
centerBurgFilePath: "01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Oakland/Provinces/Albrid County/Burgs/Oakley"
cssclasses: seventy-pct-width
id: 9
marketName: Oakley
mapName: Hitchton
colorHex: "#1cbdcc"
pronounced: 
leaders:
shortDescription: A short description of this market.
tags:
- Market
- Oakley
- Hitchton
- roet
templateVersion: 7.0
WBProgress: Imported
centerBurgx: 1994.34
centerBurgy: 661.52
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
| Wood | 67.53 | 1.46 |
| Stone | 8 | 4.51 |
| Marble | 0 | 10.55 |
| Iron | 9.05 | 2.2 |
| Copper | 4.22 | 2.42 |
| Tin | 0 | 4 |
| Silver | 0.09 | 4.99 |
| Gold | 0 | 11.04 |
| Grain | 105.37 | 0.68 |
| Cattle | 19.6 | 2.98 |
| Fish | 1.14 | 3 |
| Game | 17.76 | 1.44 |
| Wine | 0 | 1.41 |
| Olives | 23.1 | 1.06 |
| Honey | 19.86 | 1.06 |
| Salt | 0 | 6 |
| Dates | 4.44 | 3.39 |
| Horses | 0 | 5.62 |
| Elephants | 0 | 3.48 |
| Camels | 2.84 | 7.24 |
| Hemp | 80.9 | 0.53 |
| Pearls | 0 | 19.24 |
| Gemstones | 2.66 | 7.92 |
| Dyes | 1.45 | 6.14 |
| Incense | 2.21 | 13.47 |
| Silk | 0 | 11.1 |
| Spices | 1.11 | 16.42 |
| Amber | 2.4 | 12.64 |
| Furs | 19.22 | 1.55 |
| Sheep | 18.35 | 3.94 |
| Slaves | 0 | 10.38 |
| Tar | 0 | 2.25 |
| Saltpeter | 2.77 | 2.86 |
| Coal | 0.02 | 2.02 |
| Oil | 0 | 3.17 |
| Mahogany | 4.53 | 4.35 |
| Whales | 0 | 2.5 |
| Sugarcane | 0 | 6.07 |
| Tea | 1.6 | 3.31 |
| Tobacco | 0 | 5.92 |
| Clay | 10.89 | 0.65 |
| White sand | 11.82 | 0.34 |
| Leather | 0.15 | 4.68 |
| Cloth | 0 | 4.84 |
| Garments | 0 | 8.64 |
| Ceramics | 0.78 | 5.5 |
| Glass | 0.96 | 6.23 |
| Ropes | 0 | 3.25 |
| Paper | 0 | 3.25 |
| Ink | 0 | 5.39 |
| Books | 0 | 12.17 |
| Sails | 0 | 7.84 |
| Ships | 14 | 22.13 |
| Boots | 0 | 5.7 |
| Harnesses | 0 | 8.02 |
| Barrels | 0 | 2.25 |
| Bronze | 0 | 7.49 |
| Tools | 3.74 | 14.31 |
| Arms | 8.32 | 18.46 |
| Gunpowder | 0 | 9.9 |
| Artillery | 0.7 | 16.73 |
| Coins | 1.3 | 20.39 |
| Jewelry | 18.61 | 27.63 |
| Preserved food | 29.62 | 5.63 |
| Vinegar | 0.66 | 0.79 |
| Cheese | 6 | 4.96 |
| Beer | 4.44 | 5.33 |
| Liquor | 0 | 6.53 |
| Candles | 0 | 7.15 |
| Soap | 0 | 5.02 |
| Perfume | 10.84 | 14.71 |

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