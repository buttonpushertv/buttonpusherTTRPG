---
alias: {{name}}
burgMapLink: https://watabou.github.io{{getBurgMapLink this @importDataRoot.info.seed @importDataRoot.pack.cells @importDataRoot.settings @importDataRoot.grid}}
campaign: "{{@importDataRoot.info.thisCampaign}}"
capital: {{capital}}
culture: {{getCultureName culture @importDataRoot.pack.cultures}}
elevation: {{getHeight cell @importDataRoot.settings @importDataRoot.pack.cells}}
emblem: "{{@importDataRoot.info.thisCampaignShortCode}}-{{@importDataRoot.info.mapName}} Emblem {{name}}.png"
id: {{i}}
burgName: {{name}}
population: {{calcPopulation population}}
pronounced: 
province: "{{burgProvinceLookup cell @importDataRoot.pack.cells @importDataRoot.pack.provinces}}"
rulers: 
shortDescription: 
state: {{getStateName state @importDataRoot.pack.states}}
x: {{x}}
y: {{y}}
tags:
- Burg
- {{@importDataRoot.info.mapName}}
- {{@importDataRoot.info.thisCampaignShortCode}}
type: {{type}}
WBProcess: FALSE
world: {{@importDataRoot.info.mapName}}
---

> [!metadata|metadata]- Metadata 
>> [!metadata|metadataoption]- System
>> #### System
>>  |
>> ---|---|
> **Tags** | `INPUT[Tags][inlineListSuggester:tags]` |
>
>> [!metadata|metadataoption]- Info
>> #### Info
>>  |
>> ---|---|
> **Pronounced** |  `INPUT[text:pronounced]`
> **Aliases** | `INPUT[list:alias]` |
> **Rulers**|`INPUT[list:rulers]`|

%% Change the World Building Process (WBProcess) property to true once you have placed/updated any info onto the page. Basically this allows sorting based on what has & hasn't had world building stuff done for it. %%

[[{{getCampaignHomeNote @importSettings}}]] | [[{{getCampaignAtlasNote @importSettings}}]] | `=link(this.state)` | `=link(this.province)`

%% If you want to place the image for the Burg in the Map(Interactive) window below, you can use Fantasy Map Generator's link to Watabou's Fantasy City or Village Generator - see the `infobox` link or the `burgMapLink` URL up in the properties of this note. You can save the map image somewhere in the vault (`91-Assets/your_campaign_subfolder`, for instance) and it will show up in this window. There is an elaborate method (see [[JSON Import How To#Wrangling FMG Burg Maps]]) to save all the maps so you can have them locally and make use of the data that was placed here on import from the JSON.%% 

> [!metadata|map]- Map (Interactive)
> ```leaflet
> id: Burg-{{name}}
> image: [[{{name}}.png]]
> height: 600px
> width: 100%
> lat: 50
> long: 50
> minZoom: -3.5
> maxZoom: 2.25
> defaultZoom: -1.5
> zoomDelta: 0.25
> unit: {{burgMapUnits}}
> scale: .5
> darkMode: false
> ```
> > [!Note]- City Maps may need Scale adjusting
> > The `scale` setting of `.5` is arbitrary. It seems to work for Village maps. There is no scale, but by setting the unit (in the Leaflet block above) to `feet` things seem to feel about the right size.
> > 
> > If it's a City Generator map, there is a scale legend, but they don't seem to have a uniform sizing. The scale can be different, even between multiple maps with a `0-200m` scale legend. It's annoying, and can probably be ignored, but if you *want* to get it close, you can adjust it.
> > 
> >  In Leaflet, zoom in to the corner where the scale legend is and, by Shift-Clicking, you can create a measurement tool. Start at '0' and measure over to the first increment. Adjust the `scale` value in the Leaflet block above so that the measurement tool is accurate. It's difficult to get it exactly precise. Once you start adjusting them, though you begin to develop a sense of which way to go to get it dialed.
> >
> > Oh, and *yes*, it is annoying that Villages work in `feet` and Cities are in `meters`. These are *your* maps though. There's nothing to say you can't set City maps to all be in `yards` instead of `meters`. The distances will be near enough.

> [!metadata]- Map (Live from Web)
> ```custom-frames
> frame: Watabou-Procgen Arcana
> style: height: 1000px;
> urlSuffix: {{getBurgMapLink this @importDataRoot.info.seed @importDataRoot.pack.cells @importDataRoot.settings @importDataRoot.grid}}
> ```
>  `=elink(this.burgMapLink,"Visit Burg Map")`

%% All the info in this 'infobox' will appear in the panel to the right. Most of these values are pulled from the metadata in the properties above. %%

> [!infobox]
> ![[{{@importDataRoot.info.thisCampaignShortCode}}-{{@importDataRoot.info.mapName}} Emblem {{name}}.png]]
> ###### Info
>  |
>  ---: | --- |
>  **Pronounced:**| "`=this.pronounced`"
> **Population** | `=this.population` |
>  **Elevation:** | `=this.elevation`|
>  **Burg Map Link:**|`=elink(this.burgMapLink,"Burg Map")`
>  
> ###### Politics
>  |
> ---: | --- |
> **Ruler(s)** | `=link(this.rulers)` |
>**Dominant Culture** | `=link(this.culture)` |
> **Dominant Religion** | `=link(this.religion)` |
>

# **`=this.burgName`**
 
> [!recite|no-t text-center]+ Introduction
> *`=this.shortDescription`*

%% GENERAL NOTES GO HERE - free-form text or images %%

### Zones/Regions/Neighborhoods
Below are any notable zones or regions within `=this.burgName`

%% Zones & regions are any areas that need to be defined. See Points of Interest below as another place to add specific locations that are noteworthy. You can identify Zones/Regions in the properties above (metadata is searchable/indexable). And you can add specific info about any of them below. Use '[!note]- {Zone/Region name}' to place each one in it's own callout. %%

### History

%% You can use the 'Timeline' Callout features of the ITS theme here to create a timeline of any important events. Remove the line below that reads '(delete this line to enable timeline)' and the trailing double percent signs & add a set of double percent signs here ->

> [!timeline|t-l] **`=this.burgName` Founded** _Date of founding._
> `=this.burgName` was founded by...

> [!timeline|t-l t-2] **Something Happened** *A significant event.*
> Something momentous occurred on this day.

> [!timeline|t-r t-2] **Another thing happened** *Less significant this time.*
> Today was only a moderately important day.

(delete this line to enable timeline) %%

## Notes

%% Further notes. These 2 callouts will be hidden by default. Change the '-' after the closing square bracket to a '+' to have it be expanded by default. %%

> [!hint]- Plot Hooks
>

> [!question]- Hidden Details
> 

## More Details

---

[[{{getCampaignHomeNote @importSettings}}]] | [[{{getCampaignAtlasNote @importSettings}}]] | `=link(this.state)` | `=link(this.province)`
