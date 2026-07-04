---
aliases:
- Soliveton
- Soliveton-market
centerBurgId: 612
centerBurgNamePlusID: Soliveton-612
centerBurgStateName: Oakhambia
centerBurgFilePath: "01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Oakhambia/Provinces/Coroughia Shire/Burgs/Soliveton"
cssclasses: sixty-pct-width
id: 22
marketName: Soliveton
mapName: Hitchton
colorHex: "#ffed6f"
pronounced: 
leaders:
shortDescription: A short description of thie market.
tags:
- Market
- Soliveton
- Hitchton
- roet
templateVersion: 7.0
WBProgress: Imported
centerBurgx: 1349.2
centerBurgy: 488.06
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
| Wood | 1.74 | 1.12 |
| Stone | 23.01 | 0.73 |
| Marble | 0 | 6.44 |
| Iron | 0.88 | 1.47 |
| Copper | 2.37 | 2.74 |
| Tin | 8.99 | 1.43 |
| Silver | 0.43 | 5.8 |
| Gold | 0 | 15.54 |
| Grain | 1.52 | 0.96 |
| Cattle | 1.9 | 2.46 |
| Fish | 0 | 1.29 |
| Game | 0.78 | 2.23 |
| Wine | 0 | 1.75 |
| Olives | 1.21 | 1.96 |
| Honey | 0.96 | 1.95 |
| Salt | 0.12 | 1.12 |
| Dates | 5.99 | 0.87 |
| Horses | 2.16 | 3.65 |
| Elephants | 0.27 | 7.3 |
| Camels | 8.17 | 1.76 |
| Hemp | 1.52 | 0.81 |
| Pearls | 0 | 13.6 |
| Gemstones | 0.28 | 15.66 |
| Dyes | 0 | 5.12 |
| Incense | 0 | 4.96 |
| Silk | 0 | 9.2 |
| Spices | 0 | 14.25 |
| Amber | 0 | 7.56 |
| Furs | 0 | 3.83 |
| Sheep | 0.28 | 2.46 |
| Slaves | 0 | 7.33 |
| Tar | 0 | 3.13 |
| Saltpeter | 0.27 | 1.06 |
| Coal | 0.14 | 3.25 |
| Oil | 4.33 | 3.11 |
| Mahogany | 0 | 7.13 |
| Whales | 0 | 1.15 |
| Sugarcane | 0 | 4.2 |
| Tea | 0 | 5.09 |
| Tobacco | 0 | 5.09 |
| Clay | 0 | 1.18 |
| White sand | 0 | 1.02 |
| Leather | 1.1 | 2.87 |
| Cloth | 0 | 4.12 |
| Garments | 0 | 9.02 |
| Ceramics | 0 | 6.18 |
| Glass | 0 | 7.02 |
| Ropes | 0 | 3.81 |
| Paper | 0 | 3.81 |
| Ink | 0 | 5.06 |
| Books | 0 | 11.39 |
| Sails | 0 | 7.12 |
| Ships | 0 | 27.25 |
| Boots | 0 | 5.41 |
| Harnesses | 9.8 | 6.38 |
| Barrels | 0 | 3.13 |
| Bronze | 0 | 8.24 |
| Tools | 0 | 16.45 |
| Arms | 0 | 20.9 |
| Gunpowder | 0 | 9.57 |
| Artillery | 1 | 18.36 |
| Coins | 1.62 | 23.75 |
| Jewelry | 0 | 33.76 |
| Preserved food | 0 | 3.71 |
| Vinegar | 0 | 1.84 |
| Cheese | 0 | 4.03 |
| Beer | 0 | 7.1 |
| Liquor | 0 | 8.99 |
| Candles | 2.73 | 7.76 |
| Soap | 0 | 5.23 |
| Perfume | 0 | 17.23 |

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