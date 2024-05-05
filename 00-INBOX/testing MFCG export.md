---
burgMapLink: https://watabou.github.io/city-generator/?name=Karjasa&population=1701&size=16&seed=9151100960081&river=0&coast=1&farms=1&citadel=0&urban_castle=0&hub=false&plaza=1&temple=0&walls=1&shantytown=0&gates=-1&sea=0.83
burgName: Karjasa
id: 81
---

> [!metadata|map]- Burg Map (Interactive)
> ```leaflet
> id: Burg-Karjasa
> image: [[81-Karjasa.png]]
> height: 600px
> width: 100%
> minZoom: -3.5
> maxZoom: 2.25
> defaultZoom: -1.5
> zoomDelta: 0.25
> unit: meters
> scale: .5
> darkMode: false
> ```
> `=elink(this.burgMapLink,"Visit Burg Map")`


> [!metadata]- Burg Map (Live from Web)
> ```custom-frames
> frame: Watabou-Procgen Arcana
> style: height: 1000px;
> urlSuffix: /city-generator/?name=Karjasa&population=1701&size=16&seed=9151100960081&river=0&coast=1&farms=1&citadel=0&urban_castle=0&hub=false&plaza=1&temple=0&walls=1&shantytown=0&gates=-1&sea=0.83
> ```


```meta-bind-js-view
{burgMapLink} as mapLink
{burgName} as name
{id} as id
---
let fileName = context.bound.id + "-" + context.bound.name;
console.log("##### - :", fileName);
navigator.clipboard.writeText(fileName);
let url = encodeURIComponent(context.bound.mapLink) + "%26export%3DPNG";
return engine.markdown.create(`
~~~meta-bind-button
label: Download Map as PNG
icon: ""
hidden: false
class: ""
tooltip: ""
id: ""
style: primary
actions:
  - type: open
    link: "obsidian://opengate?title=${encodeURIComponent(context.bound.name)}&url=${url}&position=center"
~~~
`)
```

```meta-bind-js-view
{burgMapLink} as mapLink
{burgName} as name
{id} as id
---
let fileName = context.bound.id + "-" + context.bound.name;
console.log("##### - :", fileName);
navigator.clipboard.writeText(fileName);
let url = "firefox.exe " + context.bound.mapLink;
return engine.markdown.create(`
~~~meta-bind-button
label: Open map in Browser to download
style: primary
action:
 type: open
 link: ${url}
~~~
`)
```


```meta-bind-button
label: Open Firefox
style: primary
action:
  type: open
  link: "firefox.exe"
```