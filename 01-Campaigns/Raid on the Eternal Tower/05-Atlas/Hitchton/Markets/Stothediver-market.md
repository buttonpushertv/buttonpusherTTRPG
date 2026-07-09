---
aliases:
- Stothediver
- Stothediver-market
centerBurgId: 86
centerBurgNamePlusID: Stothediver-86
centerBurgStateName: Padstedgia
centerBurgFilePath: "01-Campaigns/Raid on the Eternal Tower/05-Atlas/Hitchton/States/Padstedgia/Provinces/Newleighia Earldom/Burgs/Stothediver"
cssclasses: sixty-pct-width
id: 13
marketName: Stothediver
mapName: Hitchton
colorHex: "#ccebc5"
pronounced: 
leaders:
shortDescription: A short description of this market.
tags:
- Market
- Stothediver
- Hitchton
- roet
templateVersion: 7.0
WBProgress: Imported
centerBurgx: 1181.42
centerBurgy: 200.41
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
| Wood | 84.2 | 1.29 |
| Stone | 9.79 | 5.06 |
| Marble | 5.57 | 11.24 |
| Iron | 2.77 | 5.14 |
| Copper | 0.85 | 4.53 |
| Tin | 0 | 4 |
| Silver | 0 | 15.23 |
| Gold | 0 | 21.78 |
| Grain | 106.02 | 1.01 |
| Cattle | 23.99 | 5.52 |
| Fish | 0.05 | 3 |
| Game | 21.74 | 1.82 |
| Wine | 0 | 1.35 |
| Olives | 16.64 | 1.39 |
| Honey | 43.17 | 0.91 |
| Salt | 0 | 6 |
| Dates | 5.44 | 3.7 |
| Horses | 0 | 7.9 |
| Elephants | 0 | 10.99 |
| Camels | 0 | 7.92 |
| Hemp | 152.06 | 0.62 |
| Pearls | 0 | 20.63 |
| Gemstones | 3.52 | 23.28 |
| Dyes | 11.54 | 2.47 |
| Incense | 2.71 | 14.25 |
| Silk | 0 | 11.56 |
| Spices | 1.36 | 16.97 |
| Amber | 4.21 | 7.66 |
| Furs | 35.21 | 1.54 |
| Sheep | 22.47 | 4.39 |
| Slaves | 0 | 11.14 |
| Tar | 0 | 2.25 |
| Saltpeter | 3.38 | 3.06 |
| Coal | 0.08 | 1.87 |
| Oil | 0.84 | 3.52 |
| Mahogany | 1.36 | 8.49 |
| Whales | 0 | 2.84 |
| Sugarcane | 0 | 6.54 |
| Tea | 1.36 | 6.06 |
| Tobacco | 1.36 | 6.06 |
| Clay | 0.26 | 1.41 |
| White sand | 0.5 | 0.46 |
| Leather | 0.09 | 6.08 |
| Cloth | 0.67 | 5.06 |
| Garments | 0 | 7.74 |
| Ceramics | 5.24 | 6.03 |
| Glass | 4.74 | 6 |
| Ropes | 2 | 3.17 |
| Paper | 0 | 3.25 |
| Ink | 0.78 | 4.64 |
| Books | 0.44 | 12.46 |
| Sails | 0 | 8.11 |
| Ships | 11.37 | 23.15 |
| Boots | 19.76 | 5.1 |
| Harnesses | 0 | 9.25 |
| Barrels | 0 | 2.25 |
| Bronze | 0 | 8.02 |
| Tools | 1 | 15.99 |
| Arms | 0 | 22.21 |
| Gunpowder | 0 | 10 |
| Artillery | 0.01 | 21.49 |
| Coins | 1.36 | 28.85 |
| Jewelry | 1.36 | 44.77 |
| Preserved food | 31.61 | 6.27 |
| Vinegar | 0.56 | 0.75 |
| Cheese | 10 | 5.63 |
| Beer | 18 | 4.24 |
| Liquor | 10.44 | 5.87 |
| Candles | 3.55 | 6.47 |
| Soap | 2.23 | 6.49 |
| Perfume | 21.34 | 13.3 |

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