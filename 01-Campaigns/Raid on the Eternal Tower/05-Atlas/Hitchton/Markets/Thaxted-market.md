---
aliases:
- Thaxted
- Thaxted-market
centerBurgId: 14
centerBurgNamePlusID: Thaxted-14
centerBurgStateName: Thaxted
centerBurgFilePath: "01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Thaxted/Provinces/Thaxted County/Burgs/Thaxted"
cssclasses: seventy-pct-width
id: 10
marketName: Thaxted
mapName: Hitchton
colorHex: "#80b1d3"
pronounced: 
leaders:
shortDescription: A short description of this market.
tags:
- Market
- Thaxted
- Hitchton
- roet
templateVersion: 7.0
WBProgress: Imported
centerBurgx: 1701.7
centerBurgy: 234.33
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
| Wood | 0 | 0.82 |
| Stone | 12.22 | 0.75 |
| Marble | 1.02 | 3.77 |
| Iron | 0.49 | 2.71 |
| Copper | 0.38 | 2.39 |
| Tin | 0 | 4 |
| Silver | 0 | 9.32 |
| Gold | 0 | 16.24 |
| Grain | 15.96 | 0.34 |
| Cattle | 4.23 | 2.91 |
| Fish | 0 | 1.66 |
| Game | 4.42 | 1.11 |
| Wine | 6.28 | 0.84 |
| Olives | 19.2 | 0.62 |
| Honey | 14.05 | 0.78 |
| Salt | 4.31 | 1.54 |
| Dates | 0.99 | 2.31 |
| Horses | 0 | 5.14 |
| Elephants | 0 | 7.73 |
| Camels | 0 | 3.33 |
| Hemp | 28.12 | 0.26 |
| Pearls | 0 | 14.39 |
| Gemstones | 0.64 | 16.51 |
| Dyes | 5.49 | 2.51 |
| Incense | 0 | 10.82 |
| Silk | 0 | 9.47 |
| Spices | 0 | 14.58 |
| Amber | 0 | 8.3 |
| Furs | 13.08 | 1.36 |
| Sheep | 0.73 | 2.9 |
| Slaves | 0 | 7.76 |
| Tar | 0 | 2.25 |
| Saltpeter | 0 | 2.21 |
| Coal | 0.09 | 1.98 |
| Oil | 1.09 | 2.6 |
| Mahogany | 0 | 7.29 |
| Whales | 0 | 1.34 |
| Sugarcane | 0 | 4.46 |
| Tea | 0 | 5.21 |
| Tobacco | 0 | 5.21 |
| Clay | 0 | 1.41 |
| White sand | 0 | 1.04 |
| Leather | 0.44 | 3.42 |
| Cloth | 0 | 4.13 |
| Garments | 0 | 6.98 |
| Ceramics | 0 | 6.41 |
| Glass | 0 | 7.04 |
| Ropes | 0 | 3.25 |
| Paper | 0 | 3.25 |
| Ink | 0 | 4.11 |
| Books | 0 | 10.9 |
| Sails | 0 | 7.13 |
| Ships | 0 | 23.51 |
| Boots | 0 | 4.97 |
| Harnesses | 0 | 7.55 |
| Barrels | 0 | 2.25 |
| Bronze | 0.25 | 7.43 |
| Tools | 4.21 | 14.69 |
| Arms | 3 | 19.46 |
| Gunpowder | 0 | 9.55 |
| Artillery | 4.75 | 17.74 |
| Coins | 0 | 24.85 |
| Jewelry | 0 | 36.84 |
| Preserved food | 5.79 | 3.76 |
| Vinegar | 0 | 0.6 |
| Cheese | 0.13 | 4.22 |
| Beer | 0 | 5.5 |
| Liquor | 0 | 6.76 |
| Candles | 1.88 | 6.07 |
| Soap | 1 | 4.73 |
| Perfume | 0 | 16.14 |

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