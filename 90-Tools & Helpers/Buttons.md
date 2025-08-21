---
tags:
 - buttons
---

`BUTTON[campaign-index]`

## Campaign Setup

`BUTTON[new-campaign]`


## Utils

`BUTTON[reload-vault]`

`BUTTON[load-workspace]`


---


> [!NOTE]+ Buttons as Defined
> 
> This is a copy of the defined buttons that have been setup in this vault. It's just here as an easy way to see what's been setup, what they're for, and so you grab the code needed to insert a button.
> 
> To create a button, place the Metabind Code for that button within a
> ---
>
> Metabind Code: ```insert-burg-callout```
> Purpose: This button will insert an embedded note that contains info about functions on the template-created Burg pages.
>> [!NOTE]- Code for Button
>>```
>> label: Insert Burg Help Callout
>> icon: ""
>> hidden: false
>> class: ""
>> tooltip: ""
>> id: insert-burg-callout
>> style: default
>> actions:
>>   - type: regexpReplaceInNote
>>     regexp: "%%Burg Help Info%%"
>>     replacement: "![[Burg Help Info]]"
>> ```
>
> Metabind Code: \`BUTTON[_button_name_here]\`
> Purpose:
>> [!NOTE]- Code for Button
>>```
>> _code_of_button_here
>> ```


```meta-bind-button
label: Hide Interactive Burg Map
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: ""
hidden: false
actions:
  - type: regexpReplaceInNote
    regexp: ([%%InteractiveMapTOP%%])\w+
    replacement: "%%InteractiveMapTOP"
    regexpFlags: g
  - type: regexpReplaceInNote
    regexp: ([%%InteractiveMapTAIL%%])\w+
    replacement: InteractiveMapTAIL%%
    regexpFlags: g

```