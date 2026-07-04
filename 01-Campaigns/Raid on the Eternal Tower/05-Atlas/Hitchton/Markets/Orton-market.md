---
aliases:
- Orton
- Orton-market
centerBurgId: 7
centerBurgNamePlusID: Orton-7
centerBurgStateName: Manch
centerBurgFilePath: "01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Manch/Provinces/Framping County/Burgs/Orton"
cssclasses: sixty-pct-width
id: 4
marketName: Orton
mapName: Hitchton
colorHex: "#fdb462"
pronounced: 
leaders:
shortDescription: A short description of thie market.
tags:
- Market
- Orton
- Hitchton
- roet
templateVersion: 7.0
WBProgress: Imported
centerBurgx: 1771.38
centerBurgy: 918.92
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
| Wood | 35.77 | 1.13 |
| Stone | 9.4 | 4.94 |
| Marble | 1.01 | 11.29 |
| Iron | 10.64 | 8 |
| Copper | 0.81 | 4.51 |
| Tin | 0 | 4 |
| Silver | 0 | 14.94 |
| Gold | 0 | 21.5 |
| Grain | 59.3 | 1.05 |
| Cattle | 18.75 | 1.52 |
| Fish | 4.77 | 2.24 |
| Game | 14.62 | 1.5 |
| Wine | 0 | 1.34 |
| Olives | 28.3 | 1.04 |
| Honey | 18.9 | 1.07 |
| Salt | 20.36 | 5.59 |
| Dates | 5.22 | 3.64 |
| Horses | 0 | 3.43 |
| Elephants | 0 | 5.75 |
| Camels | 0.21 | 7.78 |
| Hemp | 46.68 | 0.61 |
| Pearls | 0 | 20.33 |
| Gemstones | 3.38 | 22.95 |
| Dyes | 1.7 | 6.33 |
| Incense | 2.6 | 14.08 |
| Silk | 0 | 11.46 |
| Spices | 1.3 | 16.86 |
| Amber | 5.85 | 13.42 |
| Furs | 0 | 2.6 |
| Sheep | 15.2 | 2.27 |
| Slaves | 0 | 10.97 |
| Tar | 0 | 2.28 |
| Saltpeter | 3.25 | 3.02 |
| Coal | 0 | 1.92 |
| Oil | 0 | 3.25 |
| Mahogany | 1.3 | 8.43 |
| Whales | 0 | 2.77 |
| Sugarcane | 0 | 6.44 |
| Tea | 0 | 3.35 |
| Tobacco | 1.3 | 6.01 |
| Clay | 0.23 | 0.93 |
| White sand | 0 | 0.61 |
| Leather | 0 | 3.72 |
| Cloth | 0.79 | 4.22 |
| Garments | 9.63 | 7.64 |
| Ceramics | 12.89 | 5.01 |
| Glass | 0.03 | 6.56 |
| Ropes | 0 | 3.25 |
| Paper | 1 | 3.21 |
| Ink | 0 | 5.49 |
| Books | 6 | 11.01 |
| Sails | 0 | 7.25 |
| Ships | 14 | 21.04 |
| Boots | 9.64 | 4.76 |
| Harnesses | 0 | 8.35 |
| Barrels | 0 | 2.28 |
| Bronze | 0 | 8.06 |
| Tools | 3.4 | 16.44 |
| Arms | 0 | 21.89 |
| Gunpowder | 0 | 10 |
| Artillery | 0 | 24.77 |
| Coins | 1.3 | 28.69 |
| Jewelry | 1.3 | 48.47 |
| Preserved food | 34.52 | 4.35 |
| Vinegar | 0.63 | 0.69 |
| Cheese | 20.3 | 3.38 |
| Beer | 11 | 4.81 |
| Liquor | 15.12 | 5.26 |
| Candles | 11.49 | 5.91 |
| Soap | 0 | 3.95 |
| Perfume | 12.08 | 14.84 |

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