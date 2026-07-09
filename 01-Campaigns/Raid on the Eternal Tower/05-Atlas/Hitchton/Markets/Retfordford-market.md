---
aliases:
- Retfordford
- Retfordford-market
centerBurgId: 213
centerBurgNamePlusID: Retfordford-213
centerBurgStateName: Madeteria
centerBurgFilePath: "01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Madeteria/Provinces/Winklia Seneschalty/Burgs/Retfordford"
cssclasses: sixty-pct-width
id: 17
marketName: Retfordford
mapName: Hitchton
colorHex: "#1fe29e"
pronounced: 
leaders:
shortDescription: A short description of this market.
tags:
- Market
- Retfordford
- Hitchton
- roet
templateVersion: 7.0
WBProgress: Imported
centerBurgx: 366.55
centerBurgy: 457.39
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
| Wood | 44.96 | 1.87 |
| Stone | 15.78 | 3.07 |
| Marble | 8.97 | 14.44 |
| Iron | 0.11 | 3.62 |
| Copper | 3.91 | 2.29 |
| Tin | 6.6 | 2.44 |
| Silver | 0.56 | 19.61 |
| Gold | 0 | 25.92 |
| Grain | 103.8 | 1.18 |
| Cattle | 38.65 | 1.66 |
| Fish | 4 | 3 |
| Game | 35.03 | 1.8 |
| Wine | 0 | 2.04 |
| Olives | 26.89 | 1.47 |
| Honey | 43.5 | 0.98 |
| Salt | 6.25 | 6 |
| Dates | 9.3 | 2.21 |
| Horses | 8.75 | 3.45 |
| Elephants | 0 | 4.7 |
| Camels | 5.58 | 7.18 |
| Hemp | 45.4 | 0.99 |
| Pearls | 3.76 | 14.44 |
| Gemstones | 10 | 9.73 |
| Dyes | 2.86 | 7.24 |
| Incense | 4.37 | 16.84 |
| Silk | 2.75 | 12.88 |
| Spices | 2.18 | 18.79 |
| Amber | 9.83 | 17.77 |
| Furs | 13.13 | 2.31 |
| Sheep | 36.07 | 5.41 |
| Slaves | 0 | 13.66 |
| Tar | 0 | 2.28 |
| Saltpeter | 5.45 | 3.71 |
| Coal | 0.01 | 2.04 |
| Oil | 0 | 3.45 |
| Mahogany | 2.18 | 9.4 |
| Whales | 0 | 3 |
| Sugarcane | 6.02 | 7.84 |
| Tea | 2.18 | 6.71 |
| Tobacco | 2.18 | 6.71 |
| Clay | 21.43 | 0.76 |
| White sand | 0.33 | 0.49 |
| Leather | 0.02 | 3.6 |
| Cloth | 6.18 | 5.53 |
| Garments | 14.86 | 8.33 |
| Ceramics | 20.11 | 4.48 |
| Glass | 7.23 | 5.88 |
| Ropes | 0 | 3.25 |
| Paper | 0 | 3.25 |
| Ink | 0.5 | 5.8 |
| Books | 1 | 11.73 |
| Sails | 17.63 | 7.54 |
| Ships | 21 | 22.68 |
| Boots | 2 | 5.06 |
| Harnesses | 4.03 | 7.35 |
| Barrels | 0 | 2.28 |
| Bronze | 1 | 7.03 |
| Tools | 14.83 | 12.96 |
| Arms | 13.34 | 17.34 |
| Gunpowder | 0 | 10.37 |
| Artillery | 1 | 18.87 |
| Coins | 2.18 | 31.93 |
| Jewelry | 2.18 | 48.18 |
| Preserved food | 56.87 | 4.46 |
| Vinegar | 0 | 0.57 |
| Cheese | 35.18 | 3.64 |
| Beer | 10 | 4.87 |
| Liquor | 0 | 6.58 |
| Candles | 3.55 | 6.61 |
| Soap | 0 | 3.91 |
| Perfume | 24.79 | 13.01 |

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