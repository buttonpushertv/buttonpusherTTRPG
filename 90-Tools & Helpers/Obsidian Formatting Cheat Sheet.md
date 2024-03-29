`button-homepage`

### Obsidian Formatting Cheatsheet from NVDH
![[Formatting Obsidian Notes Cheat Sheet-v3.0.pdf]]

### Other pages with formatting info

#### Vanilla Obsidian Features & Syntax

[Basic formatting syntax - Obsidian Help](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax)

#### Callouts

> [!note]
> Callouts are created by placing `[!note]` as the first line in a blockquote(`>`) section. Markdown and linking is supported within the blockquote. And you even place images or embed other notes in a callout. Use `![[link to content here]]`
> 
> ![[Grauern Cosmology-1920x1920.png]]
>[Callouts - Obsidian Help](https://help.obsidian.md/Editing+and+formatting/Callouts)



> [!check] Custom titles
> Add custom titles to callouts.
> Put the custom title on the first line, after the callout syntax.
> Like this: `[!check] Custom titles`

> [!tip]+ Foldable callouts
> Any callout can be made *foldable* by adding a plus or minus after the initial syntax - `[!tip]+` will load with callout unfolded. `[!tip]-` will load with the callout folded - requiring unfolding to view contents.


See below for the various types of callout.

> [!note]
> This is a note callout.
> Create with `> [!note]` on top line of section to be called out.

> [!Abstract]
> This is an abstract callout.
> Create with `> [!abstract]` on top line of section to be called out.
> Aliases: `summary` & `tldr`

> [!Info]
> This is an info callout. 
> Create with `> [!info]` on top line of section to be called out.

> [!todo]
> This is a todo callout. 
> Create with `> [!todo]` on top line of section to be called out.

> [!tip]
> This is a tip callout. 
> Create with `> [!tip]` on top line of section to be called out.
> Aliases: `hint` & `important`

> [!success]
> This is a success callout. 
> Create with `> [!success]` on top line of section to be called out.
> Aliases: `check` & `done`

> [!question]
> This is a question callout. 
> Create with `> [!question]` on top line of section to be called out.
> Aliases: `help` & `faq`

> [!warning]
> This is a warning callout. 
> Create with `> [!warning]` on top line of section to be called out.
> Aliases: `caution` & `attention`

> [!failure]
> This is a failure callout. 
> Create with `> [!failure]` on top line of section to be called out.
> Aliases: `fail` & `missing`

> [!danger]
> This is a danger callout. 
> Create with `> [!danger]` on top line of section to be called out.
> Aliases: `error`

> [!bug]
> This is a bug callout. 
> Create with `> [!bug]` on top line of section to be called out.

> [!example]
> This is a example callout. 
> Create with `> [!example]` on top line of section to be called out.

> [!quote]
> This is a quote callout. 
> Create with `> [!quote]` on top line of section to be called out.
> Aliases: `cite`

And callouts can be nested:

> [!note]
> Here is a note.
> > [!success]+
> > Here is a nested success callout. It is foldable.
> > > [!bug]
> > > And this is a double nested bug callout.
> > > *The number of `>` determines the nesting level.*


## ITS Theme Syntax

[[ITS Theme - SlRvb's Documentation - Obsidian Publish](https://publish.obsidian.md/slrvb-docs/ITS+Theme/ITS+Theme)]

#### Checkboxes
- [ ] Unchecked
- [x] Regular
- [X] Checked
- [-] Dropped
- [>] Forward
- [D] Date
- [?] Question
- [/] Half Done
- [+] Add
- [R] Research
- [!] Important
- [i] Idea
- [B] Brainstorm
- [P] Pro
- [C] Con
- [Q] Quote
- [N] Note
- [b] Bookmark
- [I] Information
- [p] Paraphrase
- [L] Location
- [E] Example
- [A] Answer
- [r] Reward
- [c] Choice
- [d] Doing
- [T] Time
- [@] Character / Person
- [t] Talk
- [O] Outline / Plot
- [~] Conflict
- [W] World
- [f] Clue / Find
- [F] Foreshadow
- [H] Favorite / Health
- [&] Symbolism
- [s] Secret


#### Callouts

##### Asides

> [!aside] Aside
> This is an aside.
> Syntax: `[!aside]`

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur pellentesque felis. Duis non quam congue, mattis est vitae, porttitor elit. Suspendisse potenti. Aliquam semper urna arcu, ac ultrices lectus varius a. Sed ac lacus libero. Vivamus commodo laoreet sem nec ullamcorper. Morbi nec sem in metus imperdiet gravida. Praesent rutrum ligula tortor, at fringilla dui vehicula porta. Pellentesque hendrerit, quam eu ultrices cursus, quam magna pulvinar ex, quis hendrerit libero mauris ac arcu. Pellentesque dapibus vel urna vel eleifend. Curabitur libero nibh, pretium posuere pretium non, volutpat facilisis felis. Aenean aliquet orci diam, sit amet mollis risus mattis sed. Integer efficitur turpis eget velit bibendum, ut aliquet velit tincidunt.

> [!aside|left] Aside to the left
> This is an aside on the left.
> Syntax: `[!aside|left]`

Nunc accumsan leo ipsum, id vulputate nulla suscipit sed. Pellentesque ut congue turpis. Aliquam nec lectus venenatis, gravida dolor a, porttitor felis. Pellentesque lorem nunc, fermentum sed erat quis, porta consequat ipsum. Cras semper diam turpis, eu luctus lorem volutpat et. Donec egestas nibh dui, vel ultricies metus varius tincidunt. Donec sit amet lorem urna. Duis dictum aliquam auctor. Nam rutrum, nulla eu pellentesque iaculis, sapien leo laoreet diam, ac tincidunt diam dolor nec lorem. Mauris condimentum elementum dui a molestie. Fusce et blandit leo. Mauris dictum, elit vehicula eleifend vulputate, nisl erat vestibulum ante, et scelerisque massa lectus ut augue.

##### Captions

> [!caption]
> ![[pxhizr7i9ueq1rmq.webp]]
> Caption with no parameters
> Syntax: `[!caption]`
> & Caption text below

Praesent maximus massa et felis convallis euismod. Pellentesque sit amet euismod nibh. Quisque fermentum sit amet mi a sagittis. Nullam at pulvinar lorem. Ut at erat magna. Sed sed diam arcu. Integer at dictum mauris. Fusce sit amet varius sem, a consectetur mauris. Sed maximus vehicula ex, vel auctor massa dignissim in. Nullam pharetra lorem ut tincidunt blandit. Nulla porttitor dapibus enim. In at bibendum erat. Curabitur id felis eleifend neque ultrices fermentum quis ultricies sem. Aliquam id eros fermentum, fermentum tortor eu, viverra urna. Fusce id consectetur odio.

> [!caption|right wmed]
> ![[pxhizr7i9ueq1rmq.webp]]
> Caption for an image to the right & medium size
> Syntax: `[!caption|right wmed]`
> & Caption text below

Morbi in nisl dictum, molestie mauris at, semper justo. Donec blandit, ipsum mattis luctus volutpat, ipsum lectus egestas ipsum, a tincidunt tellus dui at diam. Donec sed nunc faucibus, dictum leo non, fringilla lacus. Mauris sodales lacus quis velit interdum, nec tempus ex pharetra. Integer sit amet eleifend enim, eu tincidunt orci. Fusce orci magna, pretium a pulvinar facilisis, tincidunt non enim. Fusce iaculis, dui eu congue molestie, ligula nunc auctor lacus, viverra finibus tortor massa eu diam. Donec quis mi semper, iaculis est id, maximus est. Ut suscipit dapibus nulla, sed sagittis enim aliquam nec. Nullam interdum tempus bibendum. Etiam in justo nibh. Mauris et lacus maximus, facilisis elit vitae, condimentum purus.

> [!caption|right wsmall]
> ![[pxhizr7i9ueq1rmq.webp]]
> Caption for an image to the right & small size
> Syntax: `[!caption|right wsmall]`
> & Caption text below

Proin consectetur libero pretium, ornare erat tempus, placerat quam. Nullam congue porta est. Aenean tempor lectus est, nec tempus nisl fringilla ac. Pellentesque eu eleifend nulla, eu ullamcorper eros. Maecenas tempus sodales nulla, ultricies feugiat velit tristique in. Sed eu pretium purus, ut vestibulum velit. Nulla facilisi. Etiam eget odio diam. Nulla vel nulla ut erat suscipit posuere id vulputate erat. Aliquam eu neque pellentesque quam vulputate aliquam non sed nunc. Vivamus sit amet faucibus ante.

> [!caption|left wtall]
> ![[pxhizr7i9ueq1rmq.webp]]
> Caption for an image to the left & tall
> Syntax: `[!caption|left wtall]`
> & Caption text below

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur pellentesque felis. Duis non quam congue, mattis est vitae, porttitor elit. Suspendisse potenti. Aliquam semper urna arcu, ac ultrices lectus varius a. Sed ac lacus libero. Vivamus commodo laoreet sem nec ullamcorper. Morbi nec sem in metus imperdiet gravida. Praesent rutrum ligula tortor, at fringilla dui vehicula porta. Pellentesque hendrerit, quam eu ultrices cursus, quam magna pulvinar ex, quis hendrerit libero mauris ac arcu. Pellentesque dapibus vel urna vel eleifend. Curabitur libero nibh, pretium posuere pretium non, volutpat facilisis felis. Aenean aliquet orci diam, sit amet mollis risus mattis sed. Integer efficitur turpis eget velit bibendum, ut aliquet velit tincidunt.

##### Cards

> [!cards]
> **[[test]]**
> ![[pxhizr7i9ueq1rmq.webp|sban htiny ctr]]
> 
>**[[test]]**
>![[pxhizr7i9ueq1rmq.webp|sban hsmall ctr]]

Nunc accumsan leo ipsum, id vulputate nulla suscipit sed. Pellentesque ut congue turpis. Aliquam nec lectus venenatis, gravida dolor a, porttitor felis. Pellentesque lorem nunc, fermentum sed erat quis, porta consequat ipsum. Cras semper diam turpis, eu luctus lorem volutpat et. Donec egestas nibh dui, vel ultricies metus varius tincidunt. Donec sit amet lorem urna. Duis dictum aliquam auctor. Nam rutrum, nulla eu pellentesque iaculis, sapien leo laoreet diam, ac tincidunt diam dolor nec lorem. Mauris condimentum elementum dui a molestie. Fusce et blandit leo. Mauris dictum, elit vehicula eleifend vulputate, nisl erat vestibulum ante, et scelerisque massa lectus ut augue.

> [!recite|color-blue]
> Praesent maximus massa et felis convallis euismod. Pellentesque sit amet euismod nibh. Quisque fermentum sit amet mi a sagittis. Nullam at pulvinar lorem. Ut at erat magna. Sed sed diam arcu. Integer at dictum mauris. Fusce sit amet varius sem, a consectetur mauris. Sed maximus vehicula ex, vel auctor massa dignissim in. Nullam pharetra lorem ut tincidunt blandit. Nulla porttitor dapibus enim. In at bibendum erat. Curabitur id felis eleifend neque ultrices fermentum quis ultricies sem. Aliquam id eros fermentum, fermentum tortor eu, viverra urna. Fusce id consectetur odio.

Morbi in nisl dictum, molestie mauris at, semper justo. Donec blandit, ipsum mattis luctus volutpat, ipsum lectus egestas ipsum, a tincidunt tellus dui at diam. Donec sed nunc faucibus, dictum leo non, fringilla lacus. Mauris sodales lacus quis velit interdum, nec tempus ex pharetra. Integer sit amet eleifend enim, eu tincidunt orci. Fusce orci magna, pretium a pulvinar facilisis, tincidunt non enim. Fusce iaculis, dui eu congue molestie, ligula nunc auctor lacus, viverra finibus tortor massa eu diam. Donec quis mi semper, iaculis est id, maximus est. Ut suscipit dapibus nulla, sed sagittis enim aliquam nec. Nullam interdum tempus bibendum. Etiam in justo nibh. Mauris et lacus maximus, facilisis elit vitae, condimentum purus.

> [!infobox|wikipedia]
> # Heading
> ![[Image.png]]
> ###### Heading 6
> | Table Header |  Table Header |
> | ---- | --- |
> | Test | Testing |
> | Test | Testing |
> 
> # Heading 1
> - Bullet list
> 	- Testing
> 	- Testing
> - Testing

Proin consectetur libero pretium, ornare erat tempus, placerat quam. Nullam congue porta est. Aenean tempor lectus est, nec tempus nisl fringilla ac. Pellentesque eu eleifend nulla, eu ullamcorper eros. Maecenas tempus sodales nulla, ultricies feugiat velit tristique in. Sed eu pretium purus, ut vestibulum velit. Nulla facilisi. Etiam eget odio diam. Nulla vel nulla ut erat suscipit posuere id vulputate erat. Aliquam eu neque pellentesque quam vulputate aliquam non sed nunc. Vivamus sit amet faucibus ante.


> [!infobox] Infobox
> # Infobox Title
> ![[pxhizr7i9ueq1rmq.webp|cover hsmall]]
> ###### Stats
> | Type | Stat |
> | ---- | ---- |
> | Test | Testing |
> | Test | Testing |
> 
> ###### Stats 2
> | Type | Stat |
> | ---- | ---- |
> | Test | Testing |
> | Test | Testing |




