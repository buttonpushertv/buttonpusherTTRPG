---
alert: 1.31
aliases: Tiormaa
area: 1,883,709
burgs: 94
campaign: Test Campaign Ladonia
capital: Tamesu
center: 3286
color: #cdd265
created: 2024-04-23-17:55
culture: Soumi
emblem: TCL-Ladonia Emblem Tiormaan Empire.png
expansionism: 3.6
form: Monarchy
formName: Empire
fullName: Tiormaan Empire
id: 9
name: Tiormaa
neighbors: 
- Marbeilia
- Ingnia
- Mauna
- Upunia
- Nikmaa
- Kunkania
pronounced:
provinces:
- Hoskia County
- Torvia County
- Viilapara County
- Liekka Captaincy
- Ojarvi County
- Forskinen County
- Suraloke County
- Hatia County
- Tamesa County
- Nuvuskogmaa County
- Kiuna County
- Kilva Earldom
- Tiorho County
- Lepsa County
- Rakikylmaa County
- Kolarejia County
- Jepsala County
- Jargamsa Earldom
- Kuurenkona County
- Millos Land
- Tameskisa Region
- Huittusuma Region
- Rausuvatia Land
totalPopulation: 4,481,475
religion: Witnesses of Saucedavas
rulers:
rural: 3,996,108
shortDescription:
urban: 485,367
tags:
- State
- Ladonia
- 
type: Generic
WBProcess: Imported
world: Ladonia
---

> [!metadata|metadata]- Metadata 
>> [!metadata|metadataoption]- System
>> #### System
>>  |
>> ---|---|
>> **Tags** | `INPUT[Tags][inlineListSuggester:tags]` |
>> **World Building Progress**| `INPUT[WBProgress][inlineSelect:wbprogress]`
>>> [!note]- Tracking World Building Progress
>>> Update the World Building Progress property as you update any info on the page. Your choices are `Imported`, `In Progress`, `Game-ready`, `Nearly Complete,` and `Done`. 
>>> 
>>> This allows sorting based on what has & hasn't had world building stuff done for it. There are Dataviews setup on the campaign home page that sort by these progress key words.
>
>> [!metadata|metadataoption]- Info
>> #### Info
>>  |
>> ---|---|
> **Pronounced** |  `INPUT[text:pronounced]`
> **Aliases** | `INPUT[list:aliases]` |
> **Rulers**|`INPUT[list:rulers]`|
> **Short Description**|`INPUT[textArea:shortDescription]`

[[Test Campaign Ladonia Home]] | [[Test Campaign Ladonia-Linked Atlas]]

%% During the import process, much of the data for the Leaflet fields should have been pulled in from the JSON. You will need to update the defaultZoom and (maybe) the coordinates values, but it should be pretty close - good enough to get a start with it. The goal is to cut down on the amount of manual effort you need to go through to pull your data in from the FMG JSON %% 

> [!metadata|map]+ Tiormaa Map
> ```leaflet
> id: State-Tiormaa
> image: [[Ladonia World Map.svg]]
> bounds: 
> - [0,0]
> - [1317,2291]
> coordinates: [922.299,2115.182]
> height: 600px
> width: 100%
> minZoom: -3
> maxZoom: 5
> defaultZoom: .5
> zoomDelta: 0.25
> unit: mi
> scale: 2
> darkMode: false
> marker: capital,797.790,2156.930,[[Tamesu]],Tiormaa Capital
> ```
> [Link to Tiormaa on FMG Map](https://azgaar.github.io/Fantasy-Map-Generator/?maplink=https://dl.dropboxusercontent.com/scl/fi/s1ildj50q943p20hgqsvz/Ladonia-2024-04-13-18-07.map?rlkey=tt7j7x4gqbhxu043p5q2f2ucx&dl=0&scale=3&x=2157.93&y=520.21)

%% All the info in this 'infobox' will appear in the panel to the right. Most of these values are pulled from the metadata in the properties above. %%

> [!infobox]
> ![[TCL-Ladonia Emblem Tiormaan Empire.png]]
>
>  |
>  --- |
> 
>  # **Pronounced:**
>  # "`=this.pronounced`"
> 
>  |
>  --- |
>  
>> [!note|title-center c-gray] ### Info
> 
>  |
>  ---: | --- |
> **Population** | `=this.totalPopulation` |
>  <span style="font-size:x-small">**Urban**<br>**Rural** </span>| <span style="font-size:x-small">`=this.urban`<br>`=this.rural`</span> |
> **Area (sq. mi)** | `=this.area` |
>  **Dominant Geographic Feature** | `=this.type` |
>  
> ###### Politics
>  |
> ---: | --- |
> **Capital** | `=link(this.capital)` |
> **Ruler(s)** | `=link(this.rulers)` |
> **Govt Type** | `=this.form` |
>**Dominant Culture** | `=link(this.culture)` |
> **Dominant Religion** | `=link(this.religion)` |
>
> ```dataview
> TABLE WITHOUT ID link(neighbors) as "Neighbors"
> FROM ""
> WHERE file.name = this.file.name
> ```
> ```dataview
> TABLE WITHOUT ID link(provinces) as "Provinces"
> FROM ""
> WHERE file.name = this.file.name
> ```

# **`=this.fullName`**

%% Below is the fancy callout box where you can place some basic info. Precede any new lines with a '>' & space to place them within the box. %%

> [!recite|no-t text-center]+ Introduction
> *`= this.shortDescription` *

%% GENERAL NOTES GO HERE - free-form text or images %%

### Zones/Regions

> [!note|no-t] Zones/Regions
>
>> [!note]- Burgs
>> ```dataview
>> TABLE WITHOUT ID file.link as "Burgs", link(provinceName) as "Province Name"
>> FROM #Burg and "01-Campaigns/Test Campaign Ladonia/05-Atlas/States/9-Tiormaa"
>> WHERE econtains(stateId,this.id)
>> SORT file.name ASC
>> ```

%% Zones & regions are any areas that need to be defined. See Points of Interest below as another place to add specific locations that are noteworthy. You can identify Zones/Regions in the properties above (metadata is searchable/indexable). And you can add specific info about any of them below. Use '[!note]- {Zone/Region name}' to place each one in it's own callout. %%

## History
Siginifcant Incidents in `=this.name`'s history:

| Name | Start Year | End Year |
| ---- | ---------- | -------- |
| Kunkanian Rebellion | 1 | 7 |
| Upunian War | 12 | 14 |
| Ingnian Conflict | 43 | 50 |
| Nikmaan Conquest | 63 | 72 |
| Maunan War | 84 | 91 |
| Liekinokian Crusade | 112 | 122 |
| Nikmian War | 241 | 241 |


## Military 
| Icon | Name | Infantry | Archers | Cavalry | Artillery | Fleet | Total |
| -----| ---- | -------- | ------- | ------- | --------- | ----- | ----- |
| 👑 | 1st (Hoskia) Regiment | 1821 | 1067 | 1057 | 25 |  | 3970 |
| ⚔️ | 2nd (Viilapara) Regiment | 1283 | 1022 | 435 | 18 |  | 2758 |
| ⚔️ | 3rd (Liekka) Regiment | 1164 | 663 | 715 | 21 |  | 2563 |
| 🐴 | 4th (Tamesa) Regiment | 537 | 445 | 1326 | 9 |  | 2317 |
| ⚔️ | 5th (Hatia) Regiment | 1009 | 727 | 446 | 9 |  | 2191 |
| ⚔️ | 6th (Kilva) Regiment | 701 | 419 | 664 | 12 |  | 1796 |
| ⚔️ | 7th (Nuvuskogmaa) Regiment | 705 | 660 | 204 | 19 |  | 1588 |
| ⚔️ | 8th (Suraloke) Regiment | 712 | 651 | 215 | 8 |  | 1586 |
| ⚔️ | 9th (Jepsala) Regiment | 665 | 585 | 209 | 10 |  | 1469 |
| 🐴 | 10th (Millos) Regiment | 149 | 138 | 623 | 1 |  | 911 |
| 🏹 | 11th (Hatia) Regiment | 330 | 382 | 66 | 4 |  | 782 |
| 🏹 | 12th (Torvia) Regiment | 185 | 204 | 41 | 6 |  | 436 |
| 🐴 | 13th (Tameskisa) Regiment | 47 | 43 | 199 |  |  | 289 |
| 🌊 | 1st Fleet |  |  |  |  | 2 | 2 |

%% You can use the 'Timeline' Callout features of the ITS theme here to create a timeline of any important events. Remove the line below that reads '(delete this line to enable timeline)' and the trailing double percent signs & add a set of double percent signs here ->

> [!timeline|t-l] **`=this.fullname` Founded** _Date of founding._
> `=this.fullName` was founded by...

> [!timeline|t-r] **Something Happened** *A significant event.*
> Something momentous occurred on this day.

> [!timeline|t-l t-2] **Another thing happened** *Less significant this time.*
> Today was only a moderately important day.

(delete this line to enable timeline) %%

## Notes

%% Further notes. These 2 callouts will be hidden by default. Change the '-' after the closing square bracket to a '+' to have it be expanded by default. %%

> [!hint]- Plot Hooks
> 

> [!question]- Hidden Details
>

---

[[Test Campaign Ladonia Home]] | [[Test Campaign Ladonia-Linked Atlas]]
