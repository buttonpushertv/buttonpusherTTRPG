---
aliases:
- Brorough
- Brorough-market
centerBurgId: 363
centerBurgNamePlusID: Brorough-363
centerBurgStateName: Horsteria
centerBurgFilePath: "01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Horsteria/Provinces/Brorough Captaincy/Burgs/Brorough"
cssclasses: sixty-pct-width
id: 14
marketName: Brorough
mapName: Hitchton
colorHex: "#fb8072"
pronounced: 
leaders:
shortDescription: A short description of thie market.
tags:
- Market
- Brorough
- Hitchton
- roet
templateVersion: 7.0
WBProgress: Imported
centerBurgx: 709
centerBurgy: 881
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
| Wood | 0 | 0.98 |
| Stone | 3.68 | 2.19 |
| Marble | 0 | 8.66 |
| Iron | 0.03 | 1.98 |
| Copper | 4.39 | 2.41 |
| Tin | 0 | 4 |
| Silver | 0 | 11.45 |
| Gold | 0 | 18.23 |
| Grain | 16.71 | 0.55 |
| Cattle | 11.41 | 1.24 |
| Fish | 0.64 | 2.42 |
| Game | 10.96 | 1.2 |
| Wine | 0 | 1.26 |
| Olives | 9.6 | 1.59 |
| Honey | 4.8 | 1.66 |
| Salt | 2.1 | 4.18 |
| Dates | 2.59 | 2.24 |
| Horses | 9.88 | 2.21 |
| Elephants | 6.14 | 3.46 |
| Camels | 1.66 | 5.71 |
| Hemp | 16.97 | 0.32 |
| Pearls | 0 | 16.64 |
| Gemstones | 9.99 | 8.85 |
| Dyes | 17.3 | 1.44 |
| Incense | 0 | 12.15 |
| Silk | 0 | 10.22 |
| Spices | 0 | 15.51 |
| Amber | 0 | 10.39 |
| Furs | 0 | 3.51 |
| Sheep | 8.32 | 2.09 |
| Slaves | 0 | 8.97 |
| Tar | 0.65 | 2.4 |
| Saltpeter | 1.61 | 2.51 |
| Coal | 0.03 | 2.18 |
| Oil | 0 | 3.24 |
| Mahogany | 0 | 7.75 |
| Whales | 0 | 1.88 |
| Sugarcane | 0 | 5.21 |
| Tea | 0 | 5.55 |
| Tobacco | 0 | 3.12 |
| Clay | 0 | 1.77 |
| White sand | 0 | 1.11 |
| Leather | 0.22 | 2.96 |
| Cloth | 0 | 3.99 |
| Garments | 1 | 7.69 |
| Ceramics | 2.66 | 6.61 |
| Glass | 0 | 7.11 |
| Ropes | 0 | 3.27 |
| Paper | 0 | 3.27 |
| Ink | 0.11 | 4.24 |
| Books | 4.66 | 10.18 |
| Sails | 1.34 | 6.9 |
| Ships | 0.66 | 23.65 |
| Boots | 1.09 | 5.25 |
| Harnesses | 6.45 | 6.72 |
| Barrels | 0 | 2.42 |
| Bronze | 0.27 | 7.72 |
| Tools | 7.8 | 14.13 |
| Arms | 13 | 17.09 |
| Gunpowder | 0 | 9.84 |
| Artillery | 7 | 16.61 |
| Coins | 0 | 26.66 |
| Jewelry | 0 | 38.21 |
| Preserved food | 14.3 | 4.36 |
| Vinegar | 0 | 1.33 |
| Cheese | 9.47 | 3.57 |
| Beer | 0 | 5.95 |
| Liquor | 0 | 7.16 |
| Candles | 1.19 | 7.63 |
| Soap | 0 | 4.27 |
| Perfume | 0.19 | 17.51 |

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