---
alert: 1.11
aliases: Upunia
area: 1,555,551
burgs: 51
campaign: Test Campaign Ladonia
capital: Kotve
center: 4124
color: #66c2a5
created: 2024-04-24-16:17
culture: Soumi
emblem: TCL-Ladonia Emblem Kingdom of Upunia.png
expansionism: 2.8
form: Monarchy
formName: Kingdom
fullName: Kingdom of Upunia
id: 1
name: Upunia
neighbors: 
- Tiormaa
- Nikmaa
- Kunkania
- Kunszavasia
- Neutrals
pronounced:
provinces:
- Hauta Earldom
- Hatveria County
- Varvi County
- Kosponen County
- Tampaaniai Earldom
- Haplakos Earldom
- Porkujarnio Shire
- Kavonenkylo Earldom
- Palhokide Shire
- Okila County
- Klaukka County
- Lohkakikia Land
- Raumania Island
- Niikylo Territory
- Nyeklabapios Land
- Tispercsia Territory
- Kauria Territory
totalPopulation: 2,381,412
religion: Cythoporystism
rulers:
rural: 2,073,096
shortDescription:
urban: 308,316
tags:
- State
- Ladonia
- TCL
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

> [!metadata|map]+ Upunia Map
> ```leaflet
> id: State-Upunia
> image: [[Ladonia World Map.svg]]
> bounds: 
> - [0,0]
> - [1317,2291]
> coordinates: [236.523,1789.367]
> height: 600px
> width: 100%
> minZoom: -3
> maxZoom: 5
> defaultZoom: .5
> zoomDelta: 0.25
> unit: mi
> scale: 2
> darkMode: false
> marker: capital,529.500,1909.000,[[Kotve]],Upunia Capital
> ```
> [Link to Upunia on FMG Map](https://azgaar.github.io/Fantasy-Map-Generator/?maplink=https://dl.dropboxusercontent.com/scl/fi/s1ildj50q943p20hgqsvz/Ladonia-2024-04-13-18-07.map?rlkey=tt7j7x4gqbhxu043p5q2f2ucx&dl=0&scale=3&x=1921.78&y=793.61)

%% All the info in this 'infobox' will appear in the panel to the right. Most of these values are pulled from the metadata in the properties above. %%

> [!infobox]
> ![[TCL-Ladonia Emblem Kingdom of Upunia.png]]
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
>> FROM #Burg and "01-Campaigns/Test Campaign Ladonia/05-Atlas/States/1-Upunia"
>> WHERE econtains(stateId,this.id)
>> SORT file.name ASC
>> ```

%% Zones & regions are any areas that need to be defined. See Points of Interest below as another place to add specific locations that are noteworthy. You can identify Zones/Regions in the properties above (metadata is searchable/indexable). And you can add specific info about any of them below. Use '[!note]- {Zone/Region name}' to place each one in it's own callout. %%

## History
Siginifcant Incidents in `=this.name`'s history:

| Name | Start Year | End Year |
| ---- | ---------- | -------- |
| Nikmaan Invasion | 1 | 8 |
| Porvan Conquest | 75 | 76 |
| Tiormaan Crusade | 199 | 201 |
| Kunszavasian Rebellion | 208 | 209 |
| Kunkanian Campaign | 235 | 240 |
| Nikmian War | 240 | 241 |


## Military 
| Icon | Name | Infantry | Archers | Cavalry | Artillery | Fleet | Total |
| -----| ---- | -------- | ------- | ------- | --------- | ----- | ----- |
| 🐴 | 1st (Tampaaniai) Regiment | 1524 | 982 | 1818 | 27 |  | 4351 |
| 👑 | 2nd (Hauta) Regiment | 1027 | 941 | 1092 | 21 |  | 3081 |
| 🐴 | 3rd (Klaukka) Regiment | 374 | 321 | 1000 | 9 |  | 1704 |
| 🐴 | 4th (Varvi) Regiment | 553 | 388 | 693 | 21 |  | 1655 |
| 🐴 | 5th (Palhokide) Regiment | 167 | 139 | 425 | 2 |  | 733 |
| 🐴 | 6th (Kauria) Regiment | 5 | 7 | 38 |  |  | 50 |
| 🌊 | 1st Fleet |  |  |  |  | 7 | 7 |
| 🌊 | 2nd Fleet |  |  |  |  | 6 | 6 |
| 🌊 | 3rd Fleet |  |  |  |  | 2 | 2 |
| 🌊 | 4th Fleet |  |  |  |  | 1 | 1 |
| 🌊 | 5th Fleet |  |  |  |  | 1 | 1 |

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
