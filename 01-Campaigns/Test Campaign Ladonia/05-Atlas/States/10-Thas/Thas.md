---
alert: 1.41
aliases: Thas
area: 1,630,251
burgs: 72
campaign: Test Campaign Ladonia
capital: Mypethera
center: 5625
color: #dab1c9
created: 2024-05-04-17:37
culture: Elladan
emblem: TCL-Ladonia Emblem Thas Empire.png
expansionism: 5.3
form: Monarchy
formName: Empire
fullName: Thas Empire
id: 10
name: Thas
neighbors: 
- Calhosia
- Petrica
- Aporesia
- Esmosia
- Histharoseia
- Neutrals
pronounced:
provinces:
- Mypethera County
- Botitaionia County
- Abderikast County
- Thurionia County
- Chalbia County
- Eimeldinia County
- Akrodile County
- Phais County
- Peilia County
- Doreamos County
- Tuningendorf County
- Schal County
- Parnia County
- Hesossos Earldom
- Pseidia County
- Bagna Land
- Thaphine Territory
- Kolisia Territory
- New Abderikast Colony
- Wutenzachia Territory
- Semia Island
totalPopulation: 3,167,214
religion: Cythoporystism
rulers:
rural: 2,749,582
shortDescription:
urban: 417,632
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

> [!metadata|map]+ Thas Map
> ```leaflet
> id: State-Thas
> image: [[Ladonia World Map.svg]]
> bounds: 
> - [0,0]
> - [1317,2291]
> coordinates: [119.896,687.432]
> height: 600px
> width: 100%
> minZoom: -3
> maxZoom: 5
> defaultZoom: .5
> zoomDelta: 0.25
> unit: mi
> scale: 2
> darkMode: false
> marker: capital,238.500,789.000,[[Mypethera]],Thas Capital
> ```
> [Link to Thas on FMG Map](https://azgaar.github.io/Fantasy-Map-Generator/?maplink=https://dl.dropboxusercontent.com/scl/fi/s1ildj50q943p20hgqsvz/Ladonia-2024-04-13-18-07.map?rlkey=tt7j7x4gqbhxu043p5q2f2ucx&dl=0&scale=3&x=784.3&y=1089.4)

%% All the info in this 'infobox' will appear in the panel to the right. Most of these values are pulled from the metadata in the properties above. %%

> [!infobox]
> ![[TCL-Ladonia Emblem Thas Empire.png]]
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
>> FROM #Burg and "01-Campaigns/Test Campaign Ladonia/05-Atlas/States/10-Thas"
>> WHERE econtains(stateId,this.id)
>> SORT file.name ASC
>> ```

%% Zones & regions are any areas that need to be defined. See Points of Interest below as another place to add specific locations that are noteworthy. You can identify Zones/Regions in the properties above (metadata is searchable/indexable). And you can add specific info about any of them below. Use '[!note]- {Zone/Region name}' to place each one in it's own callout. %%

## History
Siginifcant Incidents in `=this.name`'s history:

| Name | Start Year | End Year |
| ---- | ---------- | -------- |
| Picarnas Invasion | 23 | 25 |
| Ebeleucian War | 51 | 52 |
| Abro Rebellion | 160 | 161 |
| Naucranag War | 202 | 203 |
| Aporesian War | 235 | 240 |
| Histharoseian Campaign | 235 | 240 |


## Military 
| Icon | Name | Infantry | Archers | Cavalry | Artillery | Fleet | Total |
| -----| ---- | -------- | ------- | ------- | --------- | ----- | ----- |
| ⚔️ | 1st (Botitaionia) Regiment | 1495 | 931 | 1059 | 29 |  | 3514 |
| ⚔️ | 2nd (Abderikast) Regiment | 1063 | 806 | 813 | 19 |  | 2701 |
| ⚔️ | 3rd (Thurionia) Regiment | 884 | 740 | 785 | 23 |  | 2432 |
| ⚔️ | 4th (Akrodile) Regiment | 950 | 588 | 759 | 25 |  | 2322 |
| 👑 | 5th (Mypethera) Regiment | 445 | 366 | 233 | 16 |  | 1060 |
| 🏹 | 6th (Doreamos) Regiment | 388 | 389 | 103 | 3 |  | 883 |
| 🐴 | 7th (Schal) Regiment | 244 | 186 | 288 | 5 |  | 723 |
| 🏹 | 8th (Parnia) Regiment | 290 | 342 | 58 | 10 |  | 700 |
| ⚔️ | 9th (Thaphine) Regiment | 281 | 206 | 153 | 4 |  | 644 |
| 🐴 | 10th (Akrodile) Regiment | 35 | 44 | 244 |  |  | 323 |
| ⚔️ | 11th (Bagna) Regiment | 100 | 92 | 29 |  |  | 221 |
| 🌊 | 1st Fleet |  |  |  |  | 6 | 6 |
| 🌊 | 2nd Fleet |  |  |  |  | 2 | 2 |
| 🌊 | 3rd Fleet |  |  |  |  | 2 | 2 |
| 🌊 | 4th Fleet |  |  |  |  | 2 | 2 |
| 🌊 | 5th Fleet |  |  |  |  | 1 | 1 |
| 🌊 | 6th Fleet |  |  |  |  | 1 | 1 |

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
