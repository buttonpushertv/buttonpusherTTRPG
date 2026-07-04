---
aliases:
- Kiver
- Kiver-market
centerBurgId: 1
centerBurgNamePlusID: Kiver-1
centerBurgStateName: Hitchia
centerBurgFilePath: "01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Hitchia/Provinces/Frampland Landgrave/Burgs/Kiver"
cssclasses: sixty-pct-width
id: 7
marketName: Kiver
mapName: Hitchton
colorHex: "#c0dd42"
pronounced: 
leaders:
shortDescription: A short description of thie market.
tags:
- Market
- Kiver
- Hitchton
- roet
templateVersion: 7.0
WBProgress: Imported
centerBurgx: 1952.83
centerBurgy: 844.18
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
| Wood | 28.26 | 1.16 |
| Stone | 5.46 | 3.71 |
| Marble | 0 | 9.11 |
| Iron | 0.29 | 3.6 |
| Copper | 0.47 | 4.29 |
| Tin | 0 | 4 |
| Silver | 0 | 12.03 |
| Gold | 0 | 18.78 |
| Grain | 34.79 | 1.04 |
| Cattle | 13.38 | 5.73 |
| Fish | 0 | 3 |
| Game | 18.13 | 1.11 |
| Wine | 5.12 | 3.2 |
| Olives | 9.28 | 4.43 |
| Honey | 6.76 | 3.81 |
| Salt | 0 | 6 |
| Dates | 3.03 | 2.95 |
| Horses | 0 | 6.62 |
| Elephants | 0 | 5.38 |
| Camels | 0 | 6.62 |
| Hemp | 53.3 | 0.57 |
| Pearls | 1.97 | 9.02 |
| Gemstones | 1.97 | 19.62 |
| Dyes | 0.99 | 5.77 |
| Incense | 1.51 | 6.67 |
| Silk | 0 | 5.68 |
| Spices | 0.76 | 6.55 |
| Amber | 3.4 | 5.59 |
| Furs | 3.94 | 5.31 |
| Sheep | 12.53 | 5.75 |
| Slaves | 0 | 9.31 |
| Tar | 0 | 2.25 |
| Saltpeter | 1.89 | 2.59 |
| Coal | 0 | 1.88 |
| Oil | 3.34 | 4.72 |
| Mahogany | 0 | 4.28 |
| Whales | 0 | 2.03 |
| Sugarcane | 0 | 2.21 |
| Tea | 0 | 5.63 |
| Tobacco | 0 | 5.63 |
| Clay | 6.94 | 0.86 |
| White sand | 2.57 | 0.48 |
| Leather | 0.19 | 5.54 |
| Cloth | 0 | 4.45 |
| Garments | 1.41 | 10.12 |
| Ceramics | 5.54 | 5.53 |
| Glass | 5.56 | 6.01 |
| Ropes | 0 | 3.25 |
| Paper | 0 | 3.25 |
| Ink | 0 | 6.12 |
| Books | 0 | 12.96 |
| Sails | 0 | 7.45 |
| Ships | 13 | 21.55 |
| Boots | 1.98 | 7.01 |
| Harnesses | 0 | 8.83 |
| Barrels | 0 | 2.25 |
| Bronze | 0 | 7.96 |
| Tools | 2 | 15.4 |
| Arms | 0 | 21.51 |
| Gunpowder | 0 | 9.75 |
| Artillery | 0 | 19.82 |
| Coins | 0 | 26.84 |
| Jewelry | 0.76 | 35.87 |
| Preserved food | 3.03 | 7.77 |
| Vinegar | 0.01 | 3.62 |
| Cheese | 3.03 | 6.58 |
| Beer | 21 | 4.89 |
| Liquor | 13.14 | 6.78 |
| Candles | 1.37 | 10.74 |
| Soap | 1.24 | 8.25 |
| Perfume | 0.34 | 18.19 |

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