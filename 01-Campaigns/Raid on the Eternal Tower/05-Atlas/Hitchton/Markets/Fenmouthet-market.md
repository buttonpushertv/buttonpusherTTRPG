---
aliases:
- Fenmouthet
- Fenmouthet-market
centerBurgId: 429
centerBurgNamePlusID: Fenmouthet-429
centerBurgStateName: Linia
centerBurgFilePath: "01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Linia/Provinces/Penksia Deanery/Burgs/Fenmouthet"
cssclasses: sixty-pct-width
id: 23
marketName: Fenmouthet
mapName: Hitchton
colorHex: "#fccde5"
pronounced: 
leaders:
shortDescription: A short description of thie market.
tags:
- Market
- Fenmouthet
- Hitchton
- roet
templateVersion: 7.0
WBProgress: Imported
centerBurgx: 919.16
centerBurgy: 903.93
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
| Wood | 0 | 1.13 |
| Stone | 2.49 | 2.66 |
| Marble | 0 | 7.42 |
| Iron | 0.23 | 1.67 |
| Copper | 0 | 4.14 |
| Tin | 0 | 4 |
| Silver | 0 | 9.84 |
| Gold | 0 | 16.72 |
| Grain | 45.3 | 0.48 |
| Cattle | 5.83 | 1.86 |
| Fish | 0.87 | 1.41 |
| Game | 6.58 | 1.06 |
| Wine | 5.68 | 0.83 |
| Olives | 11.23 | 0.85 |
| Honey | 25.78 | 0.65 |
| Salt | 0 | 4.18 |
| Dates | 1.38 | 2.43 |
| Horses | 0 | 3.77 |
| Elephants | 0 | 8.01 |
| Camels | 0.85 | 5.6 |
| Hemp | 64.94 | 0.25 |
| Pearls | 0 | 14.94 |
| Gemstones | 5 | 8.62 |
| Dyes | 2.83 | 3.43 |
| Incense | 0 | 11.15 |
| Silk | 0 | 9.65 |
| Spices | 0 | 14.8 |
| Amber | 0 | 8.81 |
| Furs | 12.37 | 1.37 |
| Sheep | 5.83 | 1.8 |
| Slaves | 0 | 8.05 |
| Tar | 0 | 2.25 |
| Saltpeter | 0 | 2.29 |
| Coal | 0 | 2.03 |
| Oil | 0 | 2.57 |
| Mahogany | 0 | 7.4 |
| Whales | 0 | 1.47 |
| Sugarcane | 0 | 4.65 |
| Tea | 0.81 | 2.85 |
| Tobacco | 0 | 5.29 |
| Clay | 1.05 | 0.68 |
| White sand | 0.17 | 0.65 |
| Leather | 0.31 | 3.39 |
| Cloth | 0 | 3.79 |
| Garments | 0 | 7.05 |
| Ceramics | 3.37 | 5.41 |
| Glass | 0.22 | 6.62 |
| Ropes | 0 | 3.25 |
| Paper | 0 | 3.25 |
| Ink | 0 | 4.39 |
| Books | 0 | 11.03 |
| Sails | 0 | 6.79 |
| Ships | 0 | 22.83 |
| Boots | 0 | 5 |
| Harnesses | 0 | 7.58 |
| Barrels | 0 | 2.25 |
| Bronze | 0 | 7.91 |
| Tools | 3.11 | 14.68 |
| Arms | 8.01 | 18.13 |
| Gunpowder | 0 | 9.59 |
| Artillery | 0 | 17.69 |
| Coins | 0 | 25.23 |
| Jewelry | 0 | 35.08 |
| Preserved food | 7 | 4.33 |
| Vinegar | 0 | 0.52 |
| Cheese | 0 | 4 |
| Beer | 0 | 5.5 |
| Liquor | 10.52 | 5.63 |
| Candles | 2 | 6.13 |
| Soap | 0 | 4.27 |
| Perfume | 9.34 | 14.3 |

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