---
aliases:
- Ostowcesin
- Ostowcesin-market
centerBurgId: 25
centerBurgNamePlusID: Ostowcesin-25
centerBurgStateName: Arestia
centerBurgFilePath: "01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Arestia/Provinces/Padsia Parish/Burgs/Ostowcesin"
cssclasses: seventy-pct-width
id: 19
marketName: Ostowcesin
mapName: Hitchton
colorHex: "#348ee1"
pronounced: 
leaders:
shortDescription: A short description of this market.
tags:
- Market
- Ostowcesin
- Hitchton
- roet
templateVersion: 7.0
WBProgress: Imported
centerBurgx: 1879.57
centerBurgy: 499.6
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
| Wood | 0 | 1.02 |
| Stone | 20.6 | 0.77 |
| Marble | 3.49 | 4.41 |
| Iron | 2.28 | 2.07 |
| Copper | 6.18 | 1.91 |
| Tin | 9.74 | 1.85 |
| Silver | 0.04 | 4.14 |
| Gold | 0 | 19.25 |
| Grain | 13.43 | 0.66 |
| Cattle | 15.03 | 1.48 |
| Fish | 0 | 3 |
| Game | 10.33 | 1.31 |
| Wine | 2.46 | 1.11 |
| Olives | 11.58 | 1.14 |
| Honey | 15.34 | 0.96 |
| Salt | 14.69 | 1.69 |
| Dates | 3.41 | 3.03 |
| Horses | 0 | 2.38 |
| Elephants | 2.12 | 9.35 |
| Camels | 11.86 | 1.99 |
| Hemp | 35.72 | 0.33 |
| Pearls | 0 | 17.78 |
| Gemstones | 0.56 | 7.85 |
| Dyes | 10.71 | 2.75 |
| Incense | 0 | 12.83 |
| Silk | 0 | 10.61 |
| Spices | 0 | 15.98 |
| Amber | 0 | 11.46 |
| Furs | 10.24 | 2.27 |
| Sheep | 14.08 | 1.33 |
| Slaves | 0 | 9.59 |
| Tar | 0 | 2.47 |
| Saltpeter | 8.28 | 1.39 |
| Coal | 0.07 | 2.43 |
| Oil | 0 | 2.97 |
| Mahogany | 0.85 | 7.93 |
| Whales | 0 | 2.15 |
| Sugarcane | 0 | 5.59 |
| Tea | 0.85 | 5.67 |
| Tobacco | 0 | 5.71 |
| Clay | 5 | 0.85 |
| White sand | 0.37 | 0.55 |
| Leather | 0.1 | 1.52 |
| Cloth | 0 | 3.55 |
| Garments | 0 | 7.31 |
| Ceramics | 15 | 4.9 |
| Glass | 4.32 | 6.2 |
| Ropes | 0 | 3.25 |
| Paper | 0 | 3.25 |
| Ink | 0 | 4.5 |
| Books | 0 | 10.14 |
| Sails | 0 | 6.55 |
| Ships | 4 | 22.21 |
| Boots | 0 | 4.33 |
| Harnesses | 1 | 6.39 |
| Barrels | 0 | 2.47 |
| Bronze | 0 | 7.2 |
| Tools | 16 | 12.7 |
| Arms | 6 | 17.86 |
| Gunpowder | 0 | 9.34 |
| Artillery | 3.36 | 17.22 |
| Coins | 10.32 | 20.01 |
| Jewelry | 13.35 | 29.48 |
| Preserved food | 3.43 | 3.38 |
| Vinegar | 0.01 | 0.63 |
| Cheese | 6.11 | 2.81 |
| Beer | 7 | 5.3 |
| Liquor | 0 | 6.82 |
| Candles | 5.63 | 6.3 |
| Soap | 0 | 3.65 |
| Perfume | 18.63 | 13.36 |

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