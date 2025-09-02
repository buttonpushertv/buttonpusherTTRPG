---
tags:
- JSON
- Guide
- TOC
---

# So, You Want to Import Your FMG World Map into Obsidian?

These instructions are a guide for importing the content from an [Azgaar's Fantasy Map Generator(FMG)](https://azgaar.github.io/Fantasy-Map-Generator/) world map into Obsidian Notes via the Full JSON file that can be exported from FMG (accessed under the "Export" option reached by opening the main menu in the upper left of FMG).

> [!WARNING] BEWARE! NOT A SIMPLE TASK!
> Heed this warning, o' brave adventurer! Importing this data from FMG is *not* a trivial endeavor. There are multiple steps that must be performed correctly or things will break. It's not *impossible*. It just needs things to be done carefully and (for some steps) in the proscribed order.
> 
> Additionally, until the [[VERSION]] shows that this vault is the "Dragonling Edition" - not "Wyrmling Edition" - this vault should very much be considered pre-pre-Alpha. It is not complete and things are changing. The "Wyrmling Edition" is more a proof of concept. Once it has progressed to be worthy of opening it up for broader user, we will switch to the "Dragonling Edition"

This is a multi-step process. As the warning above states, this is very complex, but not impossible. Just follow the steps and [[#Where to Ask for Help|ask for help]] if you are stuck.

# The Premise

Essentially, we are going to use this vault to create a folder structure for a campaign, export a Full JSON from FMG, and then import that data into this vault.

# How Big is Your Map?

FMG can create maps that are small or large, meaning that it can create maps that show just a portion of the world you are building, or it can be configured to show an entire planet's worth of landmasses. 

The trade-off tends to be that the larger area your map covers, the smaller the size of geography you are creating for, the more detail & granularity you can achieve.

However, due to some limitations and the way FMG works, it is not easy to create several smaller maps and then combine them into one large, world map.

# Defining Terms

Throughout these instructions, we will use some shorthand terms to refer to pieces of this import process. 

Where possible, these terms should appear as `inline codeblocks` within Obsidian. 

Also, whenever there is a value that you need to enter or update, it will be indicated, surrounded, by curly braces as well, like this: `{put_your_value_here}` AND _unless_ you are instructed to do so, **do not** leave the curly braces behind when you are putting your values in to replace. Remove them as well.

Here is a list of the shorthand terms we will use and what they are referring to:

| Term | Meaning |
| --- | --- |
| `FMG` | This can mean [Azgaar's Fantasy Map Generator](https://azgaar.github.io/Fantasy-Map-Generator/) OR just the concept of the map you may have generated from that website |
| `{thisFMG...}` | As above, but this may be used when specifically referring to the FMG data files that may be connected to a given map (FMG JSON, FMG States, FMG Provinces, FMG Burgs, FMG Emblems, etc) |
| `{thisCampaign...}` | This refers to the specific Campaign you are importing this FMG map into. It may also be used to refer to specific items or file locations under the folder hierarchy of the specific Campaign (i.e.- thisCampaignName, thisCampaignAssets, thisCampaignPath, etc) More specific definitions below. |
| `{thisCampaignName}` | The name you gave the campaign when you created it. |
| `{thisCampaignPath`} | The location, within this vault of where the files related to a specific Campaign are located. To be precise, it will be located here: `01-Campaigns/{thisCampaignName}` |
| `{thisCampaignAtlas}` | The campaign-specific location where the files created by this import process will be stored in the vault. Specifically, `01-Campaigns/{thisCampaignName}/05-Atlas` |
| `{thisFMGMapName}` | Every `FMGmap` has a name. It can be found on the FMG page itself on the "Options" menu pane - 4th item from the top - "Map Name." That info will be part of the `FMGJSONdata`, so we can make use of it to refer to the full set of data imported from this `FMGmap`. |





# FMG JSON Import - The Steps

Here are the major sections of the process:

[[01-The First Steps]] - Things to do to get started
[[02-The FMG JSON File]] - We need to prep the FMG JSON prior to import
[[03-Importing the FMG JSON Data]] - The JSON import process
[[04-Wrangling FMG Emblems]] - Storing the FMG Emblems locally
[[05-Wrangling FMG Burg Maps]] - Using the Maps for Burgs linked in FMG maps
[[06-Converting Images to WEBP Format]] - Converting any local images to WEBP
[[07-Wrapping Up & Final Thoughts]] - What it says on the tin

Follow the notes above, in order, to get your FMG World imported into Obsidian to use in your campaigns & games.

---

#### Where to Ask for Help

[Issues · buttonpushertv/buttonpusherTTRPG](https://github.com/buttonpushertv/buttonpusherTTRPG/issues)
The most direct method is via an issue on the Github repo for this vault.

You can also find me on Discord. Username: `.buttonpusher`.  I'm on the Obsidian TTRPG server (Josh Plunkett is one of the mods & you usually find an up-to-date link to the server on [his site](https://obsidianttrpgtutorials.com/Obsidian+TTRPG+Tutorials/Community+and+Support)).


---

Next Step: [[01-The First Steps]]




