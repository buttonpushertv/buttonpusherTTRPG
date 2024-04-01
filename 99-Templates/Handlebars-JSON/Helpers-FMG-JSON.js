// Here is a list of all the custom helpers in this file with all the data input they expect
/*
(indicated by the 3-digit number at head of the line - for easy locating of them)
001 getCampaignName(importSettings)
002 getCampaignHomeNote(importSettings)
003 getCampaignAtlasNote(importSettings)
004 getCampaignCalendar(importSettings)
005 getDateTimestamp(importSettings)
006 getBurgName(burgId,allBurgs)
007 getStateName(stateId,allStates)
008 getProvinceName(provinceId,allProvinces)
009 getCultureName(cultureId,allCultures)
010 HELPER DEPRECATED - USE 011 NOW - getMfcgURL(currentBurg, mapSeed, allCells, mapSettings)
011 getBurgMapLink (currentBurg, mapSeed, allCells, mapSettings)
012 getHeight(currentCell, mapSettings, allCells)
013 totalArea(area)
014 calcPopulation(popValue)
015 totalPopulation(rural,urban)
016 burgProvinceLookup(cellId,allCells,allProvinces)
017 getReligionName (religionID,allReligions)
018 getCoatOfArmsEmblem (currentBurg, "coa fields") <----- TO BE DONE

IMPORTANT: All of these helpers rely on the campaigns being stored in the vault in a sub-folder within a sub-solder off of the root of the vault. For example, by default, other scripts in this vault will store any newly created campaigns under: "01-Campaigns" + campiagn name off of the root of the buttonpusherTTRPG vault. All of the helpers below require that method of storing the campaigns. See the common line, in most of the helpers that reads: const (somevariable) = `${folders[1]}` - that is what is extracting the location of the specific campaign that is the target for that process.

*/

// 001
// Custom helper function to extract thisCampaignName from @importSettings
handlebars.registerHelper('getCampaignName', function(importSettings) {
  // console.log("importSettings: ", importSettings);
  const folders = importSettings.folderName.split('/');
  const thisCampaignName = `${folders[1]}`;
  //console.log("### campaignName: ", thisCampaignName);
  return thisCampaignName;
});

// 002
// Custom helper function to extract thisCampaignHomeNote from @importSettings
handlebars.registerHelper('getCampaignHomeNote', function(importSettings) {
  // console.log("importSettings: ", importSettings);
  const folders = importSettings.folderName.split('/');
  const thisCampaignHomeNote = `${folders[1]}` + " Home";
  return thisCampaignHomeNote;
});

// 003
// Custom helper function to extract thisCampaignAtlasNote from @importSettings
handlebars.registerHelper('getCampaignAtlasNote', function(importSettings) {
  // console.log("importSettings: ", importSettings);
  const folders = importSettings.folderName.split('/');
  const thisCampaignAtlasNote = `${folders[1]}` + " Atlas";
  return thisCampaignAtlasNote;
});

// 004
// Custom helper function to extract thisCampaignCalendar from @importSettings
handlebars.registerHelper('getCampaignCalendar', function(importSettings) {
  // console.log("importSettings: ", importSettings);
  const folders = importSettings.folderName.split('/');
  const tempCampaignName = `${folders[1]}`;
  const thisCampaignCalendar = tempCampaignName + "-Calendar";
  return thisCampaignCalendar;
});

// 005
// Custom helper function to get the current date and time and format them for timestamping on import
handlebars.registerHelper('getDateTimestamp', function(importSettings) {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day}-${hours}:${minutes}`;
});

// 006
// Custom helper function to get Burg Name
handlebars.registerHelper('getBurgName', function(burgId,allBurgs) {
  //console.log("burgId:", burgId);
  //console.log("allBurgs: ", allBurgs);
  if (burgId === undefined || burgId === 0 ) {
    // console.log("##### burgId was undefined or zero #####");
    return ''; // skip if the element is undefined or zero
  };
  const burgFound = allBurgs.find(burg => burg.i === burgId);
  //console.log("burgFound:", burgFound.name);
  return burgFound ? burgFound.name : 'Unknown';
});

// 007
// Custom helper function to get State Name
handlebars.registerHelper('getStateName', function(stateId,allStates) {
  //console.log("StateId:", stateId);
  //console.log("allStates: ", allStates);
  if (stateId === undefined || stateId === 0) {
  //console.log("##### stateId was undefined or zero #####");
    return ''; // skip if the element is undefined or zero
  };
  const stateName = allStates.find(state => state.i === stateId);
  //console.log("stateName found:", stateName);
  return stateName ? stateName.name : 'Unknown';
});

// 008
// Custom helper function to get Province Name
handlebars.registerHelper('getProvinceName', function(provinceId,allProvinces) {
  //console.log("provinceId:", provinceId);
  //console.log("allProvinces: ", allProvinces);
  if (provinceId === undefined || provinceId === 0) {
    return 'Province Not Defined'; // skip if the element is undefined or zero
  };
  const provinceName = allProvinces.find(province => province.i === provinceId);
  //console.log("provinceName found:", provinceName);
  return provinceName ? provinceName.fullName : 'Unknown';
});

// 009
// Custom helper function to get Culture Name
handlebars.registerHelper('getCultureName', function(cultureId,allCultures) {
  //console.log("cultureId:", cultureId);
  //console.log("allCultures: ", allCultures);
  if (cultureId === undefined) {
    return ''; // skip if the element is undefined
    
  };
  const cultureName = allCultures.find(culture => culture.i === cultureId);
  //console.log("cultureName found:", cultureName);
  return cultureName ? cultureName.name : 'Unknown';
});

// 010
// HELPER DEPRECATED - See Helper 011
// Custom helper to construct the Medieval Fantasy City Generator link
// based on the data model for Fantasy Map Generator - https://github.com/Azgaar/Fantasy-Map-Generator/wiki/Data-model
// Portions of this code are adapted from the Fantasy Map Generator Code - https://github.com/Azgaar/Fantasy-Map-Generator
handlebars.registerHelper('getMfcgURL', function(currentBurg, mapSeed, allCells, mapSettings) {
  var seed = `${mapSeed}${String(currentBurg.i).padStart(4, 0)}`;
  const name = currentBurg.name;
  //console.log("currentBurg:", currentBurg);
  const currentCell = allCells.find(bc => bc.i === currentBurg.cell);
  const havenCell = allCells.find(hc => hc.i === currentCell.haven);
  //console.log("currentCell: ", currentCell);
  const sizeRaw = 2.13 * Math.pow((currentBurg.population * mapSettings.populationRate) / mapSettings.urbanDensity, 0.385);
  const size = minmax(Math.ceil(sizeRaw), 6, 100);
  const population = rn(currentBurg.population * mapSettings.populationRate * mapSettings.urbanization);
  //console.log("population: ", population);
  const river = currentCell.r ? 1 : 0;
  const coast = Number(currentBurg.port > 0);
  const sea = coast && currentCell.haven ? getSeaDirections(currentCell.i) : null;
  //console.log("river: ", river, "---coast: ", coast,"---sea: ", sea);
  const biome = currentCell.biome;
  const arableBiomes = river ? [1, 2, 3, 4, 5, 6, 7, 8] : [5, 6, 7, 8];
  const farms = +arableBiomes.includes(biome);
  //console.log("farms: ", farms);
  const citadel = +currentBurg.citadel;
  const urban_castle = +(citadel && each(2)(currentBurg.i));
  //console.log("urban_castle: ", urban_castle);
  const hub = +currentCell.road > 50;
  //console.log("hub: ", hub);
  const walls = +currentBurg.walls;
  const plaza = +currentBurg.plaza;
  const temple = +currentBurg.temple;
  const shantytown = +currentBurg.shanty;

  const parameters = {
    name,
    population,
    size,
    seed,
    river,
    coast,
    farms,
    citadel,
    urban_castle,
    hub,
    plaza,
    temple,
    walls,
    shantytown,
    gates: -1
    };

  const url = new URL("https://watabou.github.io/city-generator/");
  url.search = new URLSearchParams(parameters);
  if (sea) url.searchParams.append("sea", sea);
  return url.toString();

  function getSeaDirections(i) {
    const p1 = currentCell.p;
    const p2 = havenCell.p;
    let deg = (Math.atan2(p2[1] - p1[1], p2[0] - p1[0]) * 180) / Math.PI - 90;
    if (deg < 0) deg += 360;
    return rn(normalize(deg, 0, 360) * 2, 2); // 0 = south, 0.5 = west, 1 = north, 1.5 = east
  };

  // FMG utils related to numbers

    // round value to d decimals
    function rn(v, d = 0) {
      const m = Math.pow(10, d);
      return Math.round(v * m) / m;
    }

    function minmax(value, min, max) {
      return Math.min(Math.max(value, min), max);
    }

    // return value in range [0, 100]
    function lim(v) {
      return minmax(v, 0, 100);
    }

    // normalization function
    function normalize(val, min, max) {
      return minmax((val - min) / (max - min), 0, 1);
    }

    function lerp(a, b, t) {
      return a + (b - a) * t;
    }

    function each(n) {
      return i => i % n === 0;
    }

});

// 011
// Custom helper to construct the Map link for a Burg. If population is over 2,000 it uses https://watabou.github.io/city-generator/. If population is under 2,000 it uses https://watabou.github.io/village-generator/
// based on the data model for Fantasy Map Generator - https://github.com/Azgaar/Fantasy-Map-Generator/wiki/Data-model
// Portions of this code are adapted from the Fantasy Map Generator Code - https://github.com/Azgaar/Fantasy-Map-Generator
handlebars.registerHelper('getBurgMapLink', function(currentBurg, mapSeed, allCells, mapSettings, grid) {
  //console.log("Processing Burg ID: ", currentBurg.i, " - Name: ", currentBurg.name);
  //console.log("mapSettings: ", mapSettings);
  const {options} = mapSettings;
  //console.log("options: ", options);

  const pop = rn(currentBurg.population * mapSettings.populationRate * mapSettings.urbanization);
  // console.log("population: ", pop);

  //console.log("currentBurg:", currentBurg);
  //console.log("POP TEST: population:", pop, "options.villageMaxPopulation: ", options.villageMaxPopulation);

  if (!options.villageMaxPopulation){
    console.log ("## - JSON does not contain options.villageMaxPopulation - ##");
    return createMfcgLink(currentBurg, mapSeed, allCells, mapSettings, grid);
  } else if (pop >= options.villageMaxPopulation || currentBurg.citadel || currentBurg.walls || currentBurg.temple || currentBurg.shanty) {
    return createMfcgLink(currentBurg, mapSeed, allCells, mapSettings, grid);
  } else {
    return createVillageGeneratorLink(currentBurg, mapSeed, allCells, mapSettings, grid);
  };

  function createMfcgLink(currentBurg, mapSeed, allCells, mapSettings) {
    //console.log("++- ", currentBurg.name, " is a CITY - ++");
    var seed = `${mapSeed}${String(currentBurg.i).padStart(4, 0)}`;
    const name = currentBurg.name;
    //console.log("currentBurg:", currentBurg);
    const currentCell = allCells.find(bc => bc.i === currentBurg.cell);
    const havenCell = allCells.find(hc => hc.i === currentCell.haven);
    //console.log("currentCell: ", currentCell);
    const sizeRaw = 2.13 * Math.pow((currentBurg.population * mapSettings.populationRate) / mapSettings.urbanDensity, 0.385);
    const size = minmax(Math.ceil(sizeRaw), 6, 100);
    const population = rn(currentBurg.population * mapSettings.populationRate * mapSettings.urbanization);
    //console.log("population: ", population);
    const river = currentCell.r ? 1 : 0;
    const coast = Number(currentBurg.port > 0);
    const sea = coast && currentCell.haven ? getSeaDirections(currentCell.i) : null;
    //console.log("river: ", river, "---coast: ", coast,"---sea: ", sea);
    const biome = currentCell.biome;
    const arableBiomes = river ? [1, 2, 3, 4, 5, 6, 7, 8] : [5, 6, 7, 8];
    const farms = +arableBiomes.includes(biome);
    //console.log("farms: ", farms);
    const citadel = +currentBurg.citadel;
    const urban_castle = +(citadel && each(2)(currentBurg.i));
    //console.log("urban_castle: ", urban_castle);
    const hub = +currentCell.road > 50;
    //console.log("hub: ", hub);
    const walls = +currentBurg.walls;
    const plaza = +currentBurg.plaza;
    const temple = +currentBurg.temple;
    const shantytown = +currentBurg.shanty;

    const parameters = {
      name,
      population,
      size,
      seed,
      river,
      coast,
      farms,
      citadel,
      urban_castle,
      hub,
      plaza,
      temple,
      walls,
      shantytown,
      gates: -1
      };

    const url = new URL("https://watabou.github.io/city-generator/");
    url.search = new URLSearchParams(parameters);
    if (sea) url.searchParams.append("sea", sea);
    //console.log(currentBurg.name, " - MFCG URL: ", url.toString());
    return url.toString();
  
    function getSeaDirections(i) {
      const p1 = currentCell.p;
      const p2 = havenCell.p;
      let deg = (Math.atan2(p2[1] - p1[1], p2[0] - p1[0]) * 180) / Math.PI - 90;
      if (deg < 0) deg += 360;
      return rn(normalize(deg, 0, 360) * 2, 2); // 0 = south, 0.5 = west, 1 = north, 1.5 = east
    };
  };

  function createVillageGeneratorLink(currentBurg, mapSeed, allCells, mapSettings, grid) {
      //console.log("##- ", currentBurg.name, " is a VILLAGE - ##");
      var burgSeed = `${mapSeed}${String(currentBurg.i).padStart(4, 0)}`;
      const name = currentBurg.name;
      //console.log("currentBurg:", currentBurg);
      const pop = rn(currentBurg.population * mapSettings.populationRate * mapSettings.urbanization);
      //console.log("population: ", population);
      const currentCell = allCells.find(bc => bc.i === currentBurg.cell);
      const cellTemp = grid.cells.find(ct => ct.i === currentCell.i);
      const tags = [];
      //console.log("currentCell: ", currentCell);
    
      if (currentCell.r && currentCell.haven) tags.push("estuary");
      else if (currentCell.haven && currentCell.f === 1) tags.push("island,district");
      else if (currentBurg.port) tags.push("coast");
      else if (currentCell.conf) tags.push("confluence");
      else if (currentCell.r) tags.push("river");
      else if (pop < 200 && each(4)(currentBurg.cell)) tags.push("pond");
    
      if (currentCell.h >= 20 && currentCell.road) roadsAround = currentCell.h * currentCell.road;
      if (roadsAround > 1) tags.push("highway");
      else if (roadsAround === 1) tags.push("dead end");
      else tags.push("isolated");
      
      const biome = currentCell.biome;
      const arableBiomes = currentCell.r ? [1, 2, 3, 4, 5, 6, 7, 8] : [5, 6, 7, 8];
      if (!arableBiomes.includes(biome)) tags.push("uncultivated");
      else if (each(6)(currentCell)) tags.push("farmland");
      
      const temp = cellTemp;
      if (temp <= 0 || temp > 28 || (temp > 25 && each(3)(currentCell))) tags.push("no orchards");
      if (!currentBurg.plaza) tags.push("no square");
    
      if (pop < 100) tags.push("sparse");
      else if (pop > 300) tags.push("dense");
    
      const width = (() => {
        if (pop > 1500) return 1600;
        if (pop > 1000) return 1400;
        if (pop > 500) return 1000;
        if (pop > 200) return 800;
        if (pop > 100) return 600;
        return 400;
      })();
      const height = rn(width / 2.2);
    
      const Vurl = new URL("https://watabou.github.io/village-generator/");
      Vurl.search = new URLSearchParams({pop, name: "", seed: burgSeed, width, height, tags});
      //console.log(currentBurg.name, " - Village URL: ", Vurl.toString());
      return Vurl.toString();
    };
 

  // FMG utils related to numbers

    // round value to d decimals
    function rn(v, d = 0) {
      const m = Math.pow(10, d);
      return Math.round(v * m) / m;
    }

    function minmax(value, min, max) {
      return Math.min(Math.max(value, min), max);
    }

    // return value in range [0, 100]
    function lim(v) {
      return minmax(v, 0, 100);
    }

    // normalization function
    function normalize(val, min, max) {
      return minmax((val - min) / (max - min), 0, 1);
    }

    function lerp(a, b, t) {
      return a + (b - a) * t;
    }

    function each(n) {
      return i => i % n === 0;
    }

});

// 012
// Custom Helper to calculate height value from map data
// Portions of this code are adapted from the Fantasy Map Generator Code - https://github.com/Azgaar/Fantasy-Map-Generator
  handlebars.registerHelper('getHeight', function(currentCell, mapSettings, allCells) {
    if (currentCell === undefined) {
      return ''; // skip if currentCell is undefined
    };
    const tempH = allCells.find(ch => ch.i === currentCell);
    const h = tempH.h;
    const unit = mapSettings.heightUnit;
    const hExpon = mapSettings.heightExponent;
    //console.log("currentCell: ", currentCell, "h: ", h, "unit: ", unit );
    let unitRatio = 3.281; // default calculations are in feet
    if (unit === "m") unitRatio = 1; // if meter
    else if (unit === "f") unitRatio = 0.5468; // if fathom
    let height = -990;
    if (h >= 20) height = Math.pow(h - 18, +hExpon);
    else if (h < 20 && h > 0) height = ((h - 20) / h) * 50;
    const result = rn(height * unitRatio) + " " + unit;
    //console.log("height:", height, "unitRatio: ", unitRatio);
    //console.log("result: ", result);
    return result;

    // round value to d decimals
    function rn(v, d = 0) {
      const m = Math.pow(10, d);
      return Math.round(v * m) / m;
    };
  });

// 013
// Custom helper to derive total area
handlebars.registerHelper('totalArea', function(area) {
  if (area === undefined) {
    return ''; // skip if population value is undefined
  };
  return Math.floor(area * 9).toLocaleString();
  });

// 014
// Custom helper to calculate population
handlebars.registerHelper('calcPopulation', function(popValue) {
  if (popValue === undefined) {
    return ''; // skip if population value is undefined
  };
    return Math.floor(popValue * 1000).toLocaleString();
  });

// 015
// Custom helper to derive total population
handlebars.registerHelper('totalPopulation', function(rural,urban) {
  if (rural === undefined || urban === undefined) {
    return ''; // skip if population value is undefined
  };
    const tempTotalPop = rural + urban;
  return Math.floor(tempTotalPop * 1000).toLocaleString();
  });

// 016
// Custom helper to lookup what Province a Burg resides within
handlebars.registerHelper('burgProvinceLookup', function(cellId,allCells,allProvinces) {
  //console.log("burgProvinceLookup for cellId: ", cellId );
  if (cellId === undefined || cellId === 0) {
    return ''; // skip if population value is undefined
  };
  const foundCell = allCells.find(cell => cell.i === cellId)
  const foundCellProvinceId = foundCell.province;
  if (foundCellProvinceId === 0 ) {
    return 'No Province'; // If no Province Defined end here
  };
  const foundProvinceName = allProvinces.find(prov => prov.i === foundCellProvinceId).fullName;
  //console.log("burgProvinceLookup process - foundProvinceName: ", foundProvinceName);
  return foundProvinceName;
});

// 017
// Custom helper to return religion name from passed religionID
handlebars.registerHelper('getReligionName', function(religionID,allReligions) {
  //console.log("religionId:", religionId);
  //console.log("allreligions: ", allreligions);
  if (religionId === undefined) {
    return ''; // skip if the element is undefined
    
  };
  const religionName = allreligions.find(religion => religion.i === religionId);
  //console.log("religionName found:", religionName);
  return religionName ? reilgionName.name : 'Unknown';
});

// 018
// Custom helper to create code for display of Coat of Arms Emblem
// This code is pulled from the 'coa' elements
// based on the data model for Fantasy Map Generator - https://github.com/Azgaar/Fantasy-Map-Generator/wiki/Data-model
// using Amoria API - (link to Amoria)
// Portions of this code are adapted from the Fantasy Map Generator Code - https://github.com/Azgaar/Fantasy-Map-Generator
// DOES NOT WORK AS OF YET
handlebars.registerHelper('drawCOA', async function(id, coa) {
  
  const ERROR = true;

  const colors = {
    argent: "#fafafa",
    or: "#ffe066",
    gules: "#d7374a",
    sable: "#333333",
    azure: "#377cd7",
    vert: "#26c061",
    purpure: "#522d5b",
    murrey: "#85185b",
    sanguine: "#b63a3a",
    tenné: "#cc7f19"
  };

  const shieldPositions = {
    // shield-specific position: [x, y] (relative to center)
    heater: {
      a: [-43.75, -50],
      b: [0, -50],
      c: [43.75, -50],
      d: [-43.75, 0],
      e: [0, 0],
      f: [43.75, 0],
      g: [-32.25, 37.5],
      h: [0, 50],
      i: [32.25, 37.5],
      y: [-50, -50],
      z: [0, 62.5],
      j: [-37.5, -37.5],
      k: [0, -37.5],
      l: [37.5, -37.5],
      m: [-30, 30],
      n: [0, 42.5],
      o: [30, 30],
      p: [-37.5, 0],
      q: [37.5, 0],
      A: [-66.2, -66.6],
      B: [-22, -66.6],
      C: [22, -66.6],
      D: [66.2, -66.6],
      K: [-66.2, -20],
      E: [66.2, -20],
      J: [-55.5, 26],
      F: [55.5, 26],
      I: [-33, 62],
      G: [33, 62],
      H: [0, 89.5]
    },
    spanish: {
      a: [-43.75, -50],
      b: [0, -50],
      c: [43.75, -50],
      d: [-43.75, 0],
      e: [0, 0],
      f: [43.75, 0],
      g: [-43.75, 50],
      h: [0, 50],
      i: [43.75, 50],
      y: [-50, -50],
      z: [0, 50],
      j: [-37.5, -37.5],
      k: [0, -37.5],
      l: [37.5, -37.5],
      m: [-37.5, 37.5],
      n: [0, 37.5],
      o: [37.5, 37.5],
      p: [-37.5, 0],
      q: [37.5, 0],
      A: [-66.2, -66.6],
      B: [-22, -66.6],
      C: [22, -66.6],
      D: [66.2, -66.6],
      K: [-66.4, -20],
      E: [66.4, -20],
      J: [-66.4, 26],
      F: [66.4, 26],
      I: [-49, 70],
      G: [49, 70],
      H: [0, 92]
    },
    french: {
      a: [-43.75, -50],
      b: [0, -50],
      c: [43.75, -50],
      d: [-43.75, 0],
      e: [0, 0],
      f: [43.75, 0],
      g: [-43.75, 50],
      h: [0, 50],
      i: [43.75, 50],
      y: [-50, -50],
      z: [0, 65],
      j: [-37.5, -37.5],
      k: [0, -37.5],
      l: [37.5, -37.5],
      m: [-37.5, 37.5],
      n: [0, 37.5],
      o: [37.5, 37.5],
      p: [-37.5, 0],
      q: [37.5, 0],
      A: [-66.2, -66.6],
      B: [-22, -66.6],
      C: [22, -66.6],
      D: [66.2, -66.6],
      K: [-66.4, -20],
      E: [66.4, -20],
      J: [-66.4, 26],
      F: [66.4, 26],
      I: [-65.4, 70],
      G: [65.4, 70],
      H: [0, 89]
    },
    horsehead: {
      a: [-43.75, -47.5],
      b: [0, -50],
      c: [43.75, -47.5],
      d: [-35, 0],
      e: [0, 0],
      f: [35, 0],
      h: [0, 50],
      y: [-50, -50],
      z: [0, 55],
      j: [-35, -35],
      k: [0, -40],
      l: [35, -35],
      m: [-30, 30],
      n: [0, 40],
      o: [30, 30],
      p: [-27.5, 0],
      q: [27.5, 0],
      A: [-71, -52],
      B: [-24, -73],
      C: [24, -73],
      D: [71, -52],
      K: [-62, -16],
      E: [62, -16],
      J: [-39, 20],
      F: [39, 20],
      I: [-33.5, 60],
      G: [33.5, 60],
      H: [0, 91.5]
    },
    horsehead2: {
      a: [-37.5, -47.5],
      b: [0, -50],
      c: [37.5, -47.5],
      d: [-35, 0],
      e: [0, 0],
      f: [35, 0],
      g: [-35, 47.5],
      h: [0, 50],
      i: [35, 47.5],
      y: [-50, -50],
      z: [0, 55],
      j: [-30, -30],
      k: [0, -40],
      l: [30, -30],
      m: [-30, 30],
      n: [0, 40],
      o: [30, 30],
      p: [-27.5, 0],
      q: [27.5, 0],
      A: [-49, -39],
      B: [-22, -70],
      C: [22, -70],
      D: [49, -39],
      K: [-51, -2],
      E: [51, -2],
      J: [-38.5, 31],
      F: [38.5, 31],
      I: [-35, 67],
      G: [35, 67],
      H: [0, 85]
    },
    polish: {
      a: [-35, -50],
      b: [0, -50],
      c: [35, -50],
      d: [-40, 0],
      e: [0, 0],
      f: [40, 0],
      g: [-37.5, 50],
      h: [0, 50],
      i: [37.5, 50],
      y: [-50, -50],
      z: [0, 65],
      j: [-27.5, -27.5],
      k: [0, -45],
      l: [27.5, -27.5],
      m: [-27.5, 27.5],
      n: [0, 45],
      o: [27.5, 27.5],
      p: [-32.5, 0],
      q: [32.5, 0],
      A: [-48, -52],
      B: [-23, -80],
      C: [23, -80],
      D: [48, -52],
      K: [-47, -10],
      E: [47, -10],
      J: [-62, 32],
      F: [62, 32],
      I: [-37, 68],
      G: [37, 68],
      H: [0, 86]
    },
    hessen: {
      a: [-43.75, -50],
      b: [0, -50],
      c: [43.75, -50],
      d: [-43.75, 0],
      e: [0, 0],
      f: [43.75, 0],
      g: [-43.75, 50],
      h: [0, 50],
      i: [43.75, 50],
      y: [-50, -50],
      z: [0, 52.5],
      j: [-40, -40],
      k: [0, -40],
      l: [40, -40],
      m: [-40, 40],
      n: [0, 40],
      o: [40, 40],
      p: [-40, 0],
      q: [40, 0],
      A: [-69, -64],
      B: [-22, -76],
      C: [22, -76],
      D: [69, -64],
      K: [-66.4, -20],
      E: [66.4, -20],
      J: [-62, 26],
      F: [62, 26],
      I: [-46, 70],
      G: [46, 70],
      H: [0, 91.5]
    },
    swiss: {
      a: [-43.75, -50],
      b: [0, -50],
      c: [43.75, -50],
      d: [-43.75, 0],
      e: [0, 0],
      f: [43.75, 0],
      g: [-32, 37.5],
      h: [0, 50],
      i: [32, 37.5],
      y: [-50, -50],
      z: [0, 62.5],
      j: [-37.5, -37.5],
      k: [0, -37.5],
      l: [37.5, -37.5],
      m: [-32, 32.5],
      n: [0, 42.5],
      o: [32, 32.5],
      p: [-37.5, 0],
      q: [37.5, 0],
      A: [-66.2, -66.6],
      B: [-22, -66],
      C: [22, -66],
      D: [66.2, -66.6],
      K: [-63, -20],
      E: [63, -20],
      J: [-50, 26],
      F: [50, 26],
      I: [-29, 62],
      G: [29, 62],
      H: [0, 89.5]
    },
    boeotian: {
      a: [-37.5, -47.5],
      b: [0, -47.5],
      c: [37.5, -47.5],
      d: [-25, 0],
      e: [0, 0],
      f: [25, 0],
      g: [-37.5, 47.5],
      h: [0, 47.5],
      i: [37.5, 47.5],
      y: [-48, -48],
      z: [0, 60],
      j: [-32.5, -37.5],
      k: [0, -45],
      l: [32.5, -37.5],
      m: [-32.5, 37.5],
      n: [0, 45],
      o: [32.5, 37.5],
      p: [-20, 0],
      q: [20, 0],
      A: [-45, -55],
      B: [-20, -77],
      C: [20, -77],
      D: [45, -55],
      K: [-59, -25],
      E: [59, -25],
      J: [-58, 27],
      F: [58, 27],
      I: [-39, 63],
      G: [39, 63],
      H: [0, 81]
    },
    roman: {
      a: [-40, -52.5],
      b: [0, -52.5],
      c: [40, -52.5],
      d: [-40, 0],
      e: [0, 0],
      f: [40, 0],
      g: [-40, 52.5],
      h: [0, 52.5],
      i: [40, 52.5],
      y: [-42.5, -52.5],
      z: [0, 65],
      j: [-30, -37.5],
      k: [0, -37.5],
      l: [30, -37.5],
      m: [-30, 37.5],
      n: [0, 37.5],
      o: [30, 37.5],
      p: [-30, 0],
      q: [30, 0],
      A: [-51.5, -65],
      B: [-17, -75],
      C: [17, -75],
      D: [51.5, -65],
      K: [-51.5, -21],
      E: [51.5, -21],
      J: [-51.5, 21],
      F: [51.5, 21],
      I: [-51.5, 65],
      G: [51.5, 65],
      H: [-17, 75],
      L: [17, 75]
    },
    kite: {
      b: [0, -65],
      e: [0, -15],
      h: [0, 35],
      z: [0, 35],
      k: [0, -50],
      n: [0, 20],
      p: [-20, -15],
      q: [20, -15],
      A: [-38, -52],
      B: [-29, -78],
      C: [29, -78],
      D: [38, -52],
      K: [-33, -20],
      E: [33, -20],
      J: [-25, 11],
      F: [25, 11],
      I: [-15, 42],
      G: [15, 42],
      H: [0, 73],
      L: [0, -91]
    },
    oldFrench: {
      a: [-43.75, -50],
      b: [0, -50],
      c: [43.75, -50],
      d: [-43.75, 0],
      e: [0, 0],
      f: [43.75, 0],
      g: [-37.5, 50],
      h: [0, 50],
      i: [37.5, 50],
      y: [-50, -50],
      z: [0, 62.5],
      j: [-37.5, -37.5],
      k: [0, -37.5],
      l: [37.5, -37.5],
      m: [-37.5, 37.5],
      n: [0, 45],
      o: [37.5, 37.5],
      p: [-37.5, 0],
      q: [37.5, 0],
      A: [-66.2, -66.6],
      B: [-22, -66.6],
      C: [22, -66.6],
      D: [66.2, -66.6],
      K: [-66.2, -20],
      E: [66.2, -20],
      J: [-64, 26],
      F: [64, 26],
      I: [-45, 62],
      G: [45, 62],
      H: [0, 91]
    },
    renaissance: {
      a: [-43.75, -50],
      b: [0, -50],
      c: [43.75, -50],
      d: [-41.5, 0],
      e: [0, 0],
      f: [41.5, 0],
      g: [-43.75, 50],
      h: [0, 50],
      i: [43.75, 50],
      y: [-50, -50],
      z: [0, 62.5],
      j: [-37.5, -37.5],
      k: [0, -37.5],
      l: [37.5, -37.5],
      m: [-37.5, 37.5],
      n: [0, 37.5],
      o: [37.5, 37.5],
      p: [-37.5, 0],
      q: [37.5, 0],
      A: [-61, -55],
      B: [-23, -67],
      C: [23, -67],
      D: [61, -55],
      K: [-55, -11],
      E: [55, -11],
      J: [-65, 31],
      F: [65, 31],
      I: [-45, 76],
      G: [45, 76],
      H: [0, 87]
    },
    baroque: {
      a: [-43.75, -45],
      b: [0, -45],
      c: [43.75, -45],
      d: [-43.75, 0],
      e: [0, 0],
      f: [43.75, 0],
      g: [-43.75, 50],
      h: [0, 50],
      i: [43.75, 50],
      y: [-50, -50],
      z: [0, 60],
      j: [-37.5, -37.5],
      k: [0, -37.5],
      l: [37.5, -37.5],
      m: [-37.5, 37.5],
      n: [0, 37.5],
      o: [37.5, 37.5],
      p: [-37.5, 0],
      q: [37.5, 0],
      A: [-65, -54.5],
      B: [-22, -65],
      C: [22, -65],
      D: [65, -54.5],
      K: [-58.5, -15],
      E: [58.5, -15],
      J: [-65, 31],
      F: [66, 31],
      I: [-35, 73],
      G: [35, 73],
      H: [0, 89]
    },
    targe: {
      a: [-43.75, -50],
      b: [0, -50],
      c: [43.75, -50],
      d: [-43.75, 0],
      e: [0, 0],
      f: [43.75, 0],
      g: [-43.75, 50],
      h: [0, 50],
      i: [43.75, 50],
      y: [-50, -50],
      z: [0, 50],
      j: [-40, -40],
      k: [0, -40],
      l: [40, -40],
      m: [-40, 40],
      n: [0, 40],
      o: [40, 40],
      p: [-32.5, 0],
      q: [32.5, 0],
      A: [-66.2, -60],
      B: [-22, -77],
      C: [22, -86],
      D: [60, -66.6],
      K: [-28, -20],
      E: [57, -20],
      J: [-61, 26],
      F: [61, 26],
      I: [-49, 63],
      G: [49, 59],
      H: [0, 80]
    },
    targe2: {
      a: [-43.75, -50],
      b: [0, -50],
      c: [43.75, -50],
      d: [-40, 0],
      e: [0, 0],
      f: [40, 0],
      g: [-43.75, 50],
      h: [0, 50],
      i: [43.75, 50],
      y: [-50, -50],
      z: [0, 60],
      j: [-37.5, -37.5],
      k: [0, -37.5],
      l: [37.5, -37.5],
      m: [-37.5, 37.5],
      n: [0, 37.5],
      o: [37.5, 37.5],
      p: [-32.5, 0],
      q: [32.5, 0],
      A: [-55, -59],
      B: [-15, -59],
      C: [24, -79],
      D: [51, -58],
      K: [-40, -14],
      E: [51, -14],
      J: [-64, 26],
      F: [62, 26],
      I: [-46, 66],
      G: [48, 67],
      H: [0, 83]
    },
    pavise: {
      a: [-40, -52.5],
      b: [0, -52.5],
      c: [40, -52.5],
      d: [-40, 0],
      e: [0, 0],
      f: [40, 0],
      g: [-40, 52.5],
      h: [0, 52.5],
      i: [40, 52.5],
      y: [-42.5, -52.5],
      z: [0, 60],
      j: [-30, -35],
      k: [0, -37.5],
      l: [30, -35],
      m: [-30, 35],
      n: [0, 37.5],
      o: [30, 35],
      p: [-30, 0],
      q: [30, 0],
      A: [-57, -55],
      B: [-22, -74],
      C: [22, -74],
      D: [57, -55],
      K: [-54, -11],
      E: [54, -11],
      J: [-50, 36],
      F: [50, 36],
      I: [-46, 81],
      G: [46, 81],
      H: [0, 81]
    },
    wedged: {
      a: [-43.75, -50],
      b: [0, -50],
      c: [43.75, -50],
      d: [-43.75, 0],
      e: [0, 0],
      f: [43.75, 0],
      g: [-32.25, 37.5],
      h: [0, 50],
      i: [32.25, 37.5],
      y: [-50, -50],
      z: [0, 62.5],
      j: [-37.5, -37.5],
      k: [0, -37.5],
      l: [37.5, -37.5],
      m: [-32.5, 32.5],
      n: [0, 42.5],
      o: [32.5, 32.5],
      p: [-37.5, 0],
      q: [37.5, 0],
      A: [-66, -53],
      B: [-22, -72.5],
      C: [22, -72.5],
      D: [66, -53],
      K: [-62.6, -13],
      E: [62.6, -13],
      J: [-50, 26],
      F: [50, 26],
      I: [-27, 62],
      G: [27, 62],
      H: [0, 87]
    },
    flag: {
      a: [-60, -40],
      b: [0, -40],
      c: [60, -40],
      d: [-60, 0],
      e: [0, 0],
      f: [60, 0],
      g: [-60, 40],
      h: [0, 40],
      i: [60, 40],
      y: [-60, -42.5],
      z: [0, 40],
      j: [-45, -30],
      k: [0, -30],
      l: [45, -30],
      m: [-45, 30],
      n: [0, 30],
      o: [45, 30],
      p: [-45, 0],
      q: [45, 0],
      A: [-81, -51],
      B: [-27, -51],
      C: [27, -51],
      D: [81, -51],
      K: [-81, -17],
      E: [81, -17],
      J: [-81, 17],
      F: [81, 17],
      I: [-81, 51],
      G: [81, 51],
      H: [-27, 51],
      L: [27, 51]
    },
    pennon: {
      a: [-75, -40],
      d: [-75, 0],
      e: [-25, 0],
      f: [25, 0],
      g: [-75, 40],
      y: [-70, -42.5],
      j: [-60, -30],
      m: [-60, 30],
      p: [-60, 0],
      q: [5, 0],
      A: [-81, -48],
      B: [-43, -36],
      C: [-4.5, -24],
      D: [33, -12],
      E: [72, 0],
      F: [33, 12],
      G: [-4.5, 24],
      H: [-43, 36],
      I: [-81, 48],
      J: [-81, 17],
      K: [-81, -17]
    },
    guidon: {
      a: [-60, -40],
      b: [0, -40],
      c: [60, -40],
      d: [-60, 0],
      e: [0, 0],
      g: [-60, 40],
      h: [0, 40],
      i: [60, 40],
      y: [-60, -42.5],
      z: [0, 40],
      j: [-45, -30],
      k: [0, -30],
      l: [45, -30],
      m: [-45, 30],
      n: [0, 30],
      o: [45, 30],
      p: [-45, 0],
      A: [-81, -51],
      B: [-27, -51],
      C: [27, -51],
      D: [78, -51],
      K: [-81, -17],
      E: [40.5, -17],
      J: [-81, 17],
      F: [40.5, 17],
      I: [-81, 51],
      G: [78, 51],
      H: [-27, 51],
      L: [27, 51]
    },
    banner: {
      a: [-50, -50],
      b: [0, -50],
      c: [50, -50],
      d: [-50, 0],
      e: [0, 0],
      f: [50, 0],
      g: [-50, 40],
      h: [0, 40],
      i: [50, 40],
      y: [-50, -50],
      z: [0, 40],
      j: [-37.5, -37.5],
      k: [0, -37.5],
      l: [37.5, -37.5],
      m: [-37.5, 27.5],
      n: [0, 27.5],
      o: [37.5, 27.5],
      p: [-37.5, 0],
      q: [37.5, 0],
      A: [-66.5, -66.5],
      B: [-22, -66.5],
      C: [22, -66.5],
      D: [66.5, -66.5],
      K: [-66.5, -20],
      E: [66.5, -20],
      J: [-66.5, 26],
      F: [66.5, 26],
      I: [-66.5, 66.5],
      G: [66.5, 66.5],
      H: [-25, 75],
      L: [25, 75]
    },
    dovetail: {
      a: [-49.75, -50],
      b: [0, -50],
      c: [49.75, -50],
      d: [-49.75, 0],
      e: [0, 0],
      f: [49.75, 0],
      g: [-49.75, 50],
      i: [49.75, 50],
      y: [-50, -50],
      z: [0, 40],
      j: [-37.5, -37.5],
      k: [0, -37.5],
      l: [37.5, -37.5],
      m: [-37.5, 37.5],
      n: [0, 32.5],
      o: [37.5, 37.5],
      p: [-37.5, 0],
      q: [37.5, 0],
      A: [-66.5, -66.5],
      B: [-22, -66.5],
      C: [22, -66.5],
      D: [66.5, -66.5],
      K: [-66.5, -16.5],
      E: [66.5, -16.5],
      J: [-66.5, 34.5],
      F: [66.5, 34.5],
      I: [-66.5, 84.5],
      G: [66.5, 84.5],
      H: [-25, 64],
      L: [25, 64]
    },
    gonfalon: {
      a: [-49.75, -50],
      b: [0, -50],
      c: [49.75, -50],
      d: [-49.75, 0],
      e: [0, 0],
      f: [49.75, 0],
      g: [-49.75, 50],
      h: [0, 50],
      i: [49.75, 50],
      y: [-50, -50],
      z: [0, 50],
      j: [-37.5, -37.5],
      k: [0, -37.5],
      l: [37.5, -37.5],
      m: [-37.5, 37.5],
      n: [0, 37.5],
      o: [37.5, 37.5],
      p: [-37.5, 0],
      q: [37.5, 0],
      A: [-66.5, -66.5],
      B: [-22, -66.5],
      C: [22, -66.5],
      D: [66.5, -66.5],
      K: [-66.5, -20],
      E: [66.5, -20],
      J: [-66.5, 26],
      F: [66.5, 26],
      I: [-40, 63],
      G: [40, 63],
      H: [0, 88]
    },
    pennant: {
      a: [-45, -50],
      b: [0, -50],
      c: [45, -50],
      e: [0, 0],
      h: [0, 50],
      y: [-50, -50],
      z: [0, 50],
      j: [-32.5, -37.5],
      k: [0, -37.5],
      l: [32.5, -37.5],
      n: [0, 37.5],
      A: [-60, -76],
      B: [-22, -76],
      C: [22, -76],
      D: [60, -76],
      K: [-46, -38],
      E: [46, -38],
      J: [-31, 0],
      F: [31, 0],
      I: [-16, 38],
      G: [16, 38],
      H: [0, 76]
    },
    round: {
      a: [-40, -40],
      b: [0, -40],
      c: [40, -40],
      d: [-40, 0],
      e: [0, 0],
      f: [40, 0],
      g: [-40, 40],
      h: [0, 40],
      i: [40, 40],
      y: [-48, -48],
      z: [0, 57.5],
      j: [-35.5, -35.5],
      k: [0, -37.5],
      l: [35.5, -35.5],
      m: [-35.5, 35.5],
      n: [0, 37.5],
      o: [35.5, 35.5],
      p: [-36.5, 0],
      q: [36.5, 0],
      A: [-59, -48],
      B: [-23, -73],
      C: [23, -73],
      D: [59, -48],
      K: [-76, -10],
      E: [76, -10],
      J: [-70, 31],
      F: [70, 31],
      I: [-42, 64],
      G: [42, 64],
      H: [0, 77]
    },
    oval: {
      a: [-37.5, -50],
      b: [0, -50],
      c: [37.5, -50],
      d: [-43, 0],
      e: [0, 0],
      f: [43, 0],
      g: [-37.5, 50],
      h: [0, 50],
      i: [37.5, 50],
      y: [-48, -48],
      z: [0, 60],
      j: [-35.5, -37.5],
      k: [0, -37.5],
      l: [35.5, -37.5],
      m: [-35.5, 37.5],
      n: [0, 50],
      o: [35.5, 37.5],
      p: [-36.5, 0],
      q: [36.5, 0],
      A: [-48, -48],
      B: [-23, -78],
      C: [23, -78],
      D: [48, -48],
      K: [-59, -10],
      E: [59, -10],
      J: [-55, 31],
      F: [55, 31],
      I: [-36, 68],
      G: [36, 68],
      H: [0, 85]
    },
    vesicaPiscis: {
      a: [-32, -37],
      b: [0, -50],
      c: [32, -37],
      d: [-32, 0],
      e: [0, 0],
      f: [32, 0],
      g: [-32, 37],
      h: [0, 50],
      i: [32, 37],
      y: [-50, -50],
      z: [0, 62],
      j: [-27.5, -27.5],
      k: [0, -37],
      l: [27.5, -27.5],
      m: [-27.5, 27.5],
      n: [0, 42],
      o: [27.5, 27.5],
      p: [-27.5, 0],
      q: [27.5, 0],
      A: [-45, -32],
      B: [-29, -63],
      C: [29, -63],
      D: [45, -32],
      K: [-50, 0],
      E: [50, 0],
      J: [-45, 32],
      F: [45, 32],
      I: [-29, 63],
      G: [29, 63],
      H: [0, 89],
      L: [0, -89]
    },
    square: {
      a: [-49.75, -50],
      b: [0, -50],
      c: [49.75, -50],
      d: [-49.75, 0],
      e: [0, 0],
      f: [49.75, 0],
      g: [-49.75, 50],
      h: [0, 50],
      i: [49.75, 50],
      y: [-50, -50],
      z: [0, 50],
      j: [-37.5, -37.5],
      k: [0, -37.5],
      l: [37.5, -37.5],
      m: [-37.5, 37.5],
      n: [0, 37.5],
      o: [37.5, 37.5],
      p: [-37.5, 0],
      q: [37.5, 0],
      A: [-66.5, -66.5],
      B: [-22, -66.5],
      C: [22, -66.5],
      D: [66.5, -66.5],
      K: [-66.5, -20],
      E: [66.5, -20],
      J: [-66.5, 26],
      F: [66.5, 26],
      I: [-66.5, 66.5],
      G: [66.5, 66.5],
      H: [-22, 66.5],
      L: [22, 66.5]
    },
    diamond: {
      a: [-32, -37],
      b: [0, -50],
      c: [32, -37],
      d: [-43, 0],
      e: [0, 0],
      f: [43, 0],
      g: [-32, 37],
      h: [0, 50],
      i: [32, 37],
      y: [-50, -50],
      z: [0, 62],
      j: [-27.5, -27.5],
      k: [0, -37],
      l: [27.5, -27.5],
      m: [-27.5, 27.5],
      n: [0, 42],
      o: [27.5, 27.5],
      p: [-37, 0],
      q: [37, 0],
      A: [-43, -28],
      B: [-22, -56],
      C: [22, -56],
      D: [43, -28],
      K: [-63, 0],
      E: [63, 0],
      J: [-42, 28],
      F: [42, 28],
      I: [-22, 56],
      G: [22, 56],
      H: [0, 83],
      L: [0, -82]
    },
    no: {
      a: [-66.5, -66.5],
      b: [0, -66.5],
      c: [66.5, -66.5],
      d: [-66.5, 0],
      e: [0, 0],
      f: [66.5, 0],
      g: [-66.5, 66.5],
      h: [0, 66.5],
      i: [66.5, 66.5],
      y: [-50, -50],
      z: [0, 75],
      j: [-50, -50],
      k: [0, -50],
      l: [50, -50],
      m: [-50, 50],
      n: [0, 50],
      o: [50, 50],
      p: [-50, 0],
      q: [50, 0],
      A: [-91.5, -91.5],
      B: [-30.5, -91.5],
      C: [30.5, -91.5],
      D: [91.5, -91.5],
      K: [-91.5, -30.5],
      E: [91.5, -30.5],
      J: [-91.5, 30.5],
      F: [91.5, 30.5],
      I: [-91.5, 91.5],
      G: [91.5, 91.5],
      H: [-30.5, 91.5],
      L: [30.5, 91.5]
    },
    fantasy1: {
      a: [-45, -45],
      b: [0, -50],
      c: [45, -45],
      d: [-40, 0],
      e: [0, 0],
      f: [40, 0],
      g: [-36, 42.5],
      h: [0, 50],
      i: [36, 42.5],
      y: [-50, -50],
      z: [0, 60],
      j: [-37, -37],
      k: [0, -40],
      l: [37, -37],
      m: [-32, 32],
      n: [0, 40],
      o: [32, 32],
      p: [-28.5, 0],
      q: [28.5, 0],
      A: [-66, -55],
      B: [-22, -67],
      C: [22, -67],
      D: [66, -55],
      K: [-53, -20],
      E: [53, -20],
      J: [-46, 26],
      F: [46, 26],
      I: [-29, 62],
      G: [29, 62],
      H: [0, 84]
    },
    fantasy2: {
      a: [-45, -45],
      b: [0, -45],
      c: [45, -45],
      d: [-35, 0],
      e: [0, 0],
      f: [35, 0],
      g: [-36, 42.5],
      h: [0, 45],
      i: [36, 42.5],
      y: [-50, -50],
      z: [0, 55],
      j: [-32.5, -32.5],
      k: [0, -40],
      l: [32.5, -32.5],
      m: [-30, 30],
      n: [0, 40],
      o: [30, 30],
      p: [-27.5, 0],
      q: [27.5, 0],
      A: [-58, -35],
      B: [-44, -67],
      C: [44, -67],
      D: [58, -35],
      K: [-39, -5],
      E: [39, -5],
      J: [-57, 26],
      F: [57, 26],
      I: [-32, 58],
      G: [32, 58],
      H: [0, 83],
      L: [0, -72]
    },
    fantasy3: {
      a: [-40, -45],
      b: [0, -50],
      c: [40, -45],
      d: [-35, 0],
      e: [0, 0],
      f: [35, 0],
      g: [-36, 42.5],
      h: [0, 50],
      i: [36, 42.5],
      y: [-50, -50],
      z: [0, 55],
      j: [-32.5, -32.5],
      k: [0, -40],
      l: [32.5, -32.5],
      m: [-30, 30],
      n: [0, 40],
      o: [30, 30],
      p: [-27.5, 0],
      q: [27.5, 0],
      A: [-56, -42],
      B: [-22, -72],
      C: [22, -72],
      D: [56, -42],
      K: [-37, -11],
      E: [37, -11],
      J: [-60, 20],
      F: [60, 20],
      I: [-34, 56],
      G: [34, 56],
      H: [0, 83]
    },
    fantasy4: {
      a: [-50, -45],
      b: [0, -50],
      c: [50, -45],
      d: [-45, 0],
      e: [0, 0],
      f: [45, 0],
      g: [-40, 45],
      h: [0, 50],
      i: [40, 45],
      y: [-50, -50],
      z: [0, 62.5],
      j: [-37.5, -37.5],
      k: [0, -45],
      l: [37.5, -37.5],
      m: [-37.5, 37.5],
      n: [0, 45],
      o: [37.5, 37.5],
      p: [-35, 0],
      q: [35, 0],
      A: [-75, -56],
      B: [-36, -61],
      C: [36, -61],
      D: [75, -56],
      K: [-67, -12],
      E: [67, -12],
      J: [-63, 32],
      F: [63, 32],
      I: [-42, 75],
      G: [42, 75],
      H: [0, 91.5],
      L: [0, -79]
    },
    fantasy5: {
      a: [-45, -50],
      b: [0, -50],
      c: [45, -50],
      d: [-40, 0],
      e: [0, 0],
      f: [40, 0],
      g: [-30, 45],
      h: [0, 50],
      i: [30, 45],
      y: [-50, -50],
      z: [0, 60],
      j: [-37, -37],
      k: [0, -40],
      l: [37, -37],
      m: [-32, 32],
      n: [0, 40],
      o: [32, 32],
      p: [-28.5, 0],
      q: [28.5, 0],
      A: [-61, -67],
      B: [-22, -76],
      C: [22, -76],
      D: [61, -67],
      K: [-58, -25],
      E: [58, -25],
      J: [-48, 20],
      F: [48, 20],
      I: [-28.5, 60],
      G: [28.5, 60],
      H: [0, 89]
    },
    noldor: {
      b: [0, -65],
      e: [0, -15],
      h: [0, 35],
      z: [0, 35],
      k: [0, -50],
      n: [0, 30],
      p: [-20, -15],
      q: [20, -15],
      A: [-34, -47],
      B: [-20, -68],
      C: [20, -68],
      D: [34, -47],
      K: [-18, -20],
      E: [18, -20],
      J: [-26, 11],
      F: [26, 11],
      I: [-14, 43],
      G: [14, 43],
      H: [0, 74],
      L: [0, -85]
    },
    gondor: {
      a: [-32.5, -50],
      b: [0, -50],
      c: [32.5, -50],
      d: [-32.5, 0],
      e: [0, 0],
      f: [32.5, 0],
      g: [-32.5, 50],
      h: [0, 50],
      i: [32.5, 50],
      y: [-42.5, -52.5],
      z: [0, 65],
      j: [-25, -37.5],
      k: [0, -37.5],
      l: [25, -37.5],
      m: [-25, 30],
      n: [0, 37.5],
      o: [25, 30],
      p: [-25, 0],
      q: [25, 0],
      A: [-42, -52],
      B: [-17, -75],
      C: [17, -75],
      D: [42, -52],
      K: [-42, -15],
      E: [42, -15],
      J: [-42, 22],
      F: [42, 22],
      I: [-26, 60],
      G: [26, 60],
      H: [0, 87]
    },
    easterling: {
      a: [-40, -47.5],
      b: [0, -47.5],
      c: [40, -47.5],
      d: [-40, 0],
      e: [0, 0],
      f: [40, 0],
      g: [-40, 47.5],
      h: [0, 47.5],
      i: [40, 47.5],
      y: [-42.5, -52.5],
      z: [0, 65],
      j: [-30, -37.5],
      k: [0, -37.5],
      l: [30, -37.5],
      m: [-30, 37.5],
      n: [0, 37.5],
      o: [30, 37.5],
      p: [-30, 0],
      q: [30, 0],
      A: [-52, -72],
      B: [0, -65],
      D: [52, -72],
      K: [-52, -24],
      E: [52, -24],
      J: [-52, 24],
      F: [52, 24],
      I: [-52, 72],
      G: [52, 72],
      H: [0, 65]
    },
    erebor: {
      a: [-40, -40],
      b: [0, -55],
      c: [40, -40],
      d: [-40, 0],
      e: [0, 0],
      f: [40, 0],
      g: [-40, 40],
      h: [0, 55],
      i: [40, 40],
      y: [-50, -50],
      z: [0, 50],
      j: [-35, -35],
      k: [0, -45],
      l: [35, -35],
      m: [-35, 35],
      n: [0, 45],
      o: [35, 35],
      p: [-37.5, 0],
      q: [37.5, 0],
      A: [-47, -46],
      B: [-22, -81],
      C: [22, -81],
      D: [47, -46],
      K: [-66.5, 0],
      E: [66.5, 0],
      J: [-47, 46],
      F: [47, 46],
      I: [-22, 81],
      G: [22, 81]
    },
    ironHills: {
      a: [-43.75, -50],
      b: [0, -50],
      c: [43.75, -50],
      d: [-43.25, 0],
      e: [0, 0],
      f: [43.25, 0],
      g: [-42.5, 42.5],
      h: [0, 50],
      i: [42.5, 42.5],
      y: [-50, -50],
      z: [0, 62.5],
      j: [-32.5, -32.5],
      k: [0, -40],
      l: [32.5, -32.5],
      m: [-32.5, 32.5],
      n: [0, 40],
      o: [32.5, 32.5],
      p: [-37.5, 0],
      q: [37.5, 0],
      A: [-61, -67],
      B: [-22, -74],
      C: [22, -74],
      D: [61, -67],
      K: [-59, -20],
      E: [59, -20],
      J: [-57, 26],
      F: [57, 26],
      I: [-33, 64],
      G: [33, 64],
      H: [0, 88]
    },
    urukHai: {
      a: [-40, -45],
      b: [0, -45],
      c: [40, -45],
      d: [-36, 0],
      e: [0, 0],
      f: [36, 0],
      g: [-32.25, 40],
      h: [0, 40],
      i: [32.25, 40],
      y: [-50, -50],
      z: [0, 40],
      j: [-32.5, -32.5],
      k: [0, -37.5],
      l: [32.5, -32.5],
      m: [-27.5, 27.5],
      n: [0, 32.5],
      o: [27.5, 27.5],
      p: [-37.5, 0],
      q: [37.5, 0],
      A: [-31, -79],
      B: [-1, -90],
      C: [31, -74],
      D: [61, -57],
      K: [-55, -19],
      E: [53, -19],
      J: [-45, 19],
      F: [45, 19],
      I: [-33, 57],
      G: [35, 57],
      H: [0, 57],
      L: [-39, -50]
    },
    moriaOrc: {
      a: [-37.5, -37.5],
      b: [0, -37.5],
      c: [37.5, -37.5],
      d: [-37.5, 0],
      e: [0, 0],
      f: [37.5, 0],
      g: [-37.5, 37.5],
      h: [0, 37.5],
      i: [37.5, 37.5],
      y: [-50, -50],
      z: [0, 40],
      j: [-30, -30],
      k: [0, -30],
      l: [30, -30],
      m: [-30, 30],
      n: [0, 30],
      o: [30, 30],
      p: [-30, 0],
      q: [30, 0],
      A: [-48, -48],
      B: [-16, -50],
      C: [16, -46],
      D: [39, -61],
      K: [-52, -19],
      E: [52, -26],
      J: [-42, 9],
      F: [52, 9],
      I: [-31, 40],
      G: [40, 43],
      H: [4, 47]
    }
  };

  const shieldSize = {
    horsehead: 0.9,
    horsehead2: 0.9,
    polish: 0.85,
    swiss: 0.95,
    boeotian: 0.75,
    roman: 0.95,
    kite: 0.65,
    targe2: 0.9,
    pavise: 0.9,
    wedged: 0.95,
    flag: 0.7,
    pennon: 0.5,
    guidon: 0.65,
    banner: 0.8,
    dovetail: 0.8,
    pennant: 0.6,
    oval: 0.95,
    vesicaPiscis: 0.8,
    diamond: 0.8,
    no: 1.2,
    fantasy1: 0.8,
    fantasy2: 0.7,
    fantasy3: 0.7,
    fantasy5: 0.9,
    noldor: 0.5,
    gondor: 0.75,
    easterling: 0.8,
    erebor: 0.9,
    urukHai: 0.8,
    moriaOrc: 0.7
  };

  const shieldBox = {
    heater: "0 10 200 200",
    spanish: "0 10 200 200",
    french: "0 10 200 200",

    horsehead: "0 10 200 200",
    horsehead2: "0 10 200 200",
    polish: "0 0 200 200",
    hessen: "0 5 200 200",
    swiss: "0 10 200 200",

    boeotian: "0 0 200 200",
    roman: "0 0 200 200",
    kite: "0 0 200 200",
    oldFrench: "0 10 200 200",
    renaissance: "0 5 200 200",
    baroque: "0 10 200 200",

    targe: "0 0 200 200",
    targe2: "0 0 200 200",
    pavise: "0 0 200 200",
    wedged: "0 10 200 200",

    flag: "0 0 200 200",
    pennon: "2.5 0 200 200",
    guidon: "2.5 0 200 200",
    banner: "0 10 200 200",
    dovetail: "0 10 200 200",
    gonfalon: "0 10 200 200",
    pennant: "0 0 200 200",

    round: "0 0 200 200",
    oval: "0 0 200 200",
    vesicaPiscis: "0 0 200 200",
    square: "0 0 200 200",
    diamond: "0 0 200 200",
    no: "0 0 200 200",

    fantasy1: "0 0 200 200",
    fantasy2: "0 5 200 200",
    fantasy3: "0 5 200 200",
    fantasy4: "0 5 200 200",
    fantasy5: "0 0 200 200",

    noldor: "0 0 200 200",
    gondor: "0 5 200 200",
    easterling: "0 0 200 200",
    erebor: "0 0 200 200",
    ironHills: "0 5 200 200",
    urukHai: "0 0 200 200",
    moriaOrc: "0 0 200 200"
  };

  const shieldPaths = {
    heater: "m25,25 h150 v50 a150,150,0,0,1,-75,125 a150,150,0,0,1,-75,-125 z",
    spanish: "m25,25 h150 v100 a75,75,0,0,1,-150,0 z",
    french: "m 25,25 h 150 v 139.15 c 0,41.745 -66,18.15 -75,36.3 -9,-18.15 -75,5.445 -75,-36.3 v 0 z",
    horsehead:
      "m 20,40 c 0,60 40,80 40,100 0,10 -4,15 -0.35,30 C 65,185.7 81,200 100,200 c 19.1,0 35.3,-14.6 40.5,-30.4 C 144.2,155 140,150 140,140 140,120 180,100 180,40 142.72,40 150,15 100,15 55,15 55,40 20,40 Z",
    horsehead2:
      "M60 20c-5 20-10 35-35 55 25 35 35 65 30 100 20 0 35 10 45 26 10-16 30-26 45-26-5-35 5-65 30-100a87 87 0 01-35-55c-25 3-55 3-80 0z",
    polish:
      "m 90.3,6.3 c -12.7,0 -20.7,10.9 -40.5,14 0,11.8 -4.9,23.5 -11.4,31.1 0,0 12.7,6 12.7,19.3 C 51.1,90.8 30,90.8 30,90.8 c 0,0 -3.6,7.4 -3.6,22.4 0,34.3 23.1,60.2 40.7,68.2 17.6,8 27.7,11.4 32.9,18.6 5.2,-7.3 15.3,-10.7 32.8,-18.6 17.6,-8 40.7,-33.9 40.7,-68.2 0,-15 -3.6,-22.4 -3.6,-22.4 0,0 -21.1,0 -21.1,-20.1 0,-13.3 12.7,-19.3 12.7,-19.3 C 155.1,43.7 150.2,32.1 150.2,20.3 130.4,17.2 122.5,6.3 109.7,6.3 102.5,6.3 100,10 100,10 c 0,0 -2.5,-3.7 -9.7,-3.7 z",
    hessen:
      "M170 20c4 5 8 13 15 20 0 0-10 0-10 15 0 100-15 140-75 145-65-5-75-45-75-145 0-15-10-15-10-15l15-20c0 15 10-5 70-5s70 20 70 5z",
    swiss:
      "m 25,20 c -0.1,0 25.2,8.5 37.6,8.5 C 75.1,28.5 99.1,20 100,20 c 0.6,0 24.9,8.5 37.3,8.5 C 149.8,28.5 174.4,20 175,20 l -0.3,22.6 C 173.2,160.3 100,200 100,200 100,200 26.5,160.9 25.2,42.6 Z",
    boeotian:
      "M150 115c-5 0-10-5-10-15s5-15 10-15c10 0 7 10 15 10 10 0 0-30 0-30-10-25-30-55-65-55S45 40 35 65c0 0-10 30 0 30 8 0 5-10 15-10 5 0 10 5 10 15s-5 15-10 15c-10 0-7-10-15-10-10 0 0 30 0 30 10 25 30 55 65 55s55-30 65-55c0 0 10-30 0-30-8 0-5 10-15 10z",
    roman: "m 160,170 c -40,20 -80,20 -120,0 V 30 C 80,10 120,10 160,30 Z",
    kite: "m 53.3,46.4 c 0,4.1 1,12.3 1,12.3 7.1,55.7 45.7,141.3 45.7,141.3 0,0 38.6,-85.6 45.7,-141.2 0,0 1,-8.1 1,-12.3 C 146.7,20.9 125.8,0.1 100,0.1 74.2,0.1 53.3,20.9 53.3,46.4 Z",
    oldFrench: "m25,25 h150 v75 a100,100,0,0,1,-75,100 a100,100,0,0,1,-75,-100 z",
    renaissance:
      "M 25,33.9 C 33.4,50.3 36.2,72.9 36.2,81.7 36.2,109.9 25,122.6 25,141 c 0,29.4 24.9,44.1 40.2,47.7 15.3,3.7 29.3,0 34.8,11.3 5.5,-11.3 19.6,-7.6 34.8,-11.3 C 150.1,185 175,170.3 175,141 c 0,-18.4 -11.2,-31.1 -11.2,-59.3 0,-8.8 2.8,-31.3 11.2,-47.7 L 155.7,14.4 C 138.2,21.8 119.3,25.7 100,25.7 c -19.3,0 -38.2,-3.9 -55.7,-11.3 z",
    baroque:
      "m 100,25 c 18,0 50,2 75,14 v 37 l -2.7,3.2 c -4.9,5.4 -6.6,9.6 -6.7,16.2 0,6.5 2,11.6 6.9,17.2 l 2.8,3.1 v 10.2 c 0,17.7 -2.2,27.7 -7.8,35.9 -5,7.3 -11.7,11.3 -32.3,19.4 -12.6,5 -20.2,8.8 -28.6,14.5 C 103.3,198 100,200 100,200 c 0,0 -2.8,-2.3 -6.4,-4.7 C 85.6,189.8 78,186 65,180.9 32.4,168.1 26.9,160.9 25.8,129.3 L 25,116 l 3.3,-3.3 c 4.8,-5.2 7,-10.7 7,-17.3 0,-6.8 -1.8,-11.1 -6.5,-16.1 L 25,76 V 39 C 50,27 82,25 100,25 Z",
    targe:
      "m 20,35 c 15,0 115,-60 155,-10 -5,10 -15,15 -10,50 5,45 10,70 -10,90 C 125,195 75,195 50,175 25,150 30,130 35,85 50,95 65,85 65,70 65,50 50,45 40,50 30,55 27,65 30,70 23,73 20,70 14,70 11,60 20,45 20,35 Z",
    targe2:
      "m 84,32.2 c 6.2,-1 19.5,-31.4 94.1,-20.2 -30.57,33.64 -21.66,67.37 -11.2,95 20.2,69.5 -41.17549,84.7 -66.88,84.7 C 74.32,191.7071 8.38,168.95 32,105.9 36.88,92.88 31,89 31,82.6 35.15,82.262199 56.79,86.17 56.5,69.8 56.20,52.74 42.2,47.9 25.9,55.2 25.9,51.4 39.8,6.7 84,32.2 Z",
    pavise:
      "M95 7L39.9 37.3a10 10 0 00-5.1 9.5L46 180c.4 5.2 3.7 10 9 10h90c5.3 0 9.6-4.8 10-10l10.6-133.2a10 10 0 00-5-9.5L105 7c-4.2-2.3-6.2-2.3-10 0z",
    wedged:
      "m 51.2,19 h 96.4 c 3.1,12.7 10.7,20.9 26.5,20.8 C 175.7,94.5 165.3,144.3 100,200 43.5,154.2 22.8,102.8 25.1,39.7 37,38.9 47.1,34.7 51.2,19 Z",
    round: "m 185,100 a 85,85 0 0 1 -85,85 85,85 0 0 1 -85,-85 85,85 0 0 1 85,-85 85,85 0 0 1 85,85",
    oval: "m 32.3,99.5 a 67.7,93.7 0 1 1 0,1.3 z",
    vesicaPiscis:
      "M 100,0 C 63.9,20.4 41,58.5 41,100 c 0,41.5 22.9,79.6 59,100 36.1,-20.4 59,-58.5 59,-100 C 159,58.5 136.1,20.4 100,0 Z",
    square: "M 25,25 H 175 V 175 H 25 Z",
    diamond: "M 25,100 100,200 175,100 100,0 Z",
    no: "m0,0 h200 v200 h-200 z",
    flag: "M 10,40 h180 v120 h-180 Z",
    pennon: "M 10,40 l190,60 -190,60 Z",
    guidon: "M 10,40 h190 l-65,60 65,60 h-190 Z",
    banner: "m 25,25 v 170 l 25,-40 25,40 25,-40 25,40 25,-40 25,40 V 25 Z",
    dovetail: "m 25,25 v 175 l 75,-40 75,40 V 25 Z",
    gonfalon: "m 25,25 v 125 l 75,50 75,-50 V 25 Z",
    pennant: "M 25,15 100,200 175,15 Z",
    fantasy1:
      "M 100,5 C 85,30 40,35 15,40 c 40,35 20,90 40,115 15,25 40,30 45,45 5,-15 30,-20 45,-45 20,-25 0,-80 40,-115 C 160,35 115,30 100,5 Z",
    fantasy2:
      "m 152,21 c 0,0 -27,14 -52,-4 C 75,35 48,21 48,21 50,45 30,55 30,75 60,75 60,115 32,120 c 3,40 53,50 68,80 15,-30 65,-40 68,-80 -28,-5 -28,-45 2,-45 C 170,55 150,45 152,21 Z",
    fantasy3:
      "M 167,67 C 165,0 35,0 33,67 c 32,-7 27,53 -3,43 -5,45 60,65 70,90 10,-25 75,-47.51058 70,-90 -30,10 -35,-50 -3,-43 z",
    fantasy4:
      "M100 9C55 48 27 27 13 39c23 50 3 119 49 150 14 9 28 11 38 11s27-4 38-11c55-39 24-108 49-150-14-12-45 7-87-30z",
    fantasy5: "M 100,0 C 75,25 30,25 30,25 c 0,69 20,145 70,175 50,-30 71,-106 70,-175 0,0 -45,0 -70,-25 z",
    noldor:
      "m 55,75 h 2 c 3,-25 38,-10 3,20 15,50 30,75 40,105 10,-30 25,-55 40,-105 -35,-30 0,-45 3,-20 h 2 C 150,30 110,20 100,0 90,20 50,30 55,75 Z",
    gondor: "m 100,200 c 15,-15 38,-35 45,-60 h 5 V 30 h -5 C 133,10 67,10 55,30 h -5 v 110 h 5 c 7,25 30,45 45,60 z",
    easterling: "M 160,185 C 120,170 80,170 40,185 V 15 c 40,15 80,15 120,0 z",
    erebor: "M25 135 V60 l22-13 16-37 h75 l15 37 22 13 v75l-22 18-16 37 H63l-16-37z",
    ironHills: "m 30,25 60,-10 10,10 10,-10 60,10 -5,125 -65,50 -65,-50 z",
    urukHai: "M 30,60 C 40,60 60,50 60,20 l -5,-3 45,-17 75,40 -5,5 -35,155 -5,-35 H 70 v 35 z",
    moriaOrc:
      "M45 35c5 3 7 10 13 9h19c4-2 7-4 9-9 6 1 9 9 16 11 7-2 14 0 21 0 6-3 6-10 10-15 2-5 1-10-2-15-2-4-5-14-4-16 3 6 7 11 12 14 7 3 3 12 7 16 3 6 4 12 9 18 2 4 6 8 5 14 0 6-1 12 3 18-3 6-2 13-1 20 1 6-2 12-1 18 0 6-3 13 0 18 8 4 0 8-5 7-4 3-9 3-13 9-5 5-5 13-8 19 0 6 0 15-7 16-1 6-7 6-10 12-1-6 0-6-2-9l2-19c2-4 5-12-3-12-4-5-11-5-15 1l-13-18c-3-4-2 9-3 12 2 2-4-6-7-5-8-2-8 7-11 11-2 4-5 10-8 9 3-10 3-16 1-23-1-4 2-9-4-11 0-6 1-13-2-19-4-2-9-6-13-7V91c4-7-5-13 0-19-3-7 2-11 2-18-1-6 1-12 3-17v-1z"
  };

  const lines = {
    straight: "m 0,100 v15 h 200 v -15 z",
    engrailed:
      "m 0,95 a 6.25,6.25 0 0 0 12.5,0 6.25,6.25 0 0 0 12.5,0 6.25,6.25 0 0 0 12.5,0 6.25,6.25 0 0 0 12.5,0 6.25,6.25 0 0 0 12.5,0 6.25,6.25 0 0 0 12.5,0 6.25,6.25 0 0 0 12.5,0 6.25,6.25 0 0 0 12.5,0 6.25,6.25 0 0 0 12.5,0 6.25,6.25 0 0 0 12.5,0 6.25,6.25 0 0 0 12.5,0 6.25,6.25 0 0 0 12.5,0 6.25,6.25 0 0 0 12.5,0 6.25,6.25 0 0 0 12.5,0 6.25,6.25 0 0 0 12.5,0 6.25,6.25 0 0 0 12.5,0 v 20 H 0 Z",
    invecked:
      "M0,102.5 a6.25,6.25,0,0,1,12.5,0 a6.25,6.25,0,0,1,12.5,0 a6.25,6.25,0,0,1,12.5,0 a6.25,6.25,0,0,1,12.5,0 a6.25,6.25,0,0,1,12.5,0 a6.25,6.25,0,0,1,12.5,0 a6.25,6.25,0,0,1,12.5,0 a6.25,6.25,0,0,1,12.5,0 a6.25,6.25,0,0,1,12.5,0 a6.25,6.25,0,0,1,12.5,0 a6.25,6.25,0,0,1,12.5,0 a6.25,6.25,0,0,1,12.5,0 a6.25,6.25,0,0,1,12.5,0 a6.25,6.25,0,0,1,12.5,0 a6.25,6.25,0,0,1,12.5,0 a6.25,6.25,0,0,1,12.5,0 v12.5 H0 z",
    embattled:
      "M 0,105 H 2.5 V 95 h 15 v 10 h 15 V 95 h 15 v 10 h 15 V 95 h 15 v 10 h 15 V 95 h 15 v 10 h 15 V 95 h 15 v 10 h 15 V 95 h 15 v 10 h 15 V 95 h 15 v 10 h 2.5 v 10 H 0 Z",
    wavy: "m 200,115 v -15 c -8.9,3.5 -16,3.1 -25,0 -8.9,-3.5 -16,-3.1 -25,0 -8.9,3.5 -16,3.2 -25,0 -8.9,-3.5 -16,-3.2 -25,0 -8.9,3.5 -16,3.1 -25,0 -8.9,-3.5 -16,-3.1 -25,0 -8.9,3.5 -16,3.2 -25,0 -8.9,-3.5 -16,-3.2 -25,0 v 15 z",
    raguly:
      "m 200,95 h -3 l -5,10 h -10 l 5,-10 h -10 l -5,10 h -10 l 5,-10 h -10 l -5,10 h -10 l 5,-10 h -10 l -5,10 h -10 l 5,-10 h -10 l -5,10 h -10 l 5,-10 H 97 l -5,10 H 82 L 87,95 H 77 l -5,10 H 62 L 67,95 H 57 l -5,10 H 42 L 47,95 H 37 l -5,10 H 22 L 27,95 H 17 l -5,10 H 2 L 7,95 H 0 v 20 h 200 z",
    dancetty:
      "m 0,105 10,-15 15,20 15,-20 15,20 15,-20 15,20 15,-20 15,20 15,-20 15,20 15,-20 15,20 15,-20 10,15 v 10 H 0 Z",
    dentilly:
      "M 180,105 170,95 v 10 L 160,95 v 10 L 150,95 v 10 L 140,95 v 10 L 130,95 v 10 L 120,95 v 10 L 110,95 v 10 L 100,95 v 10 L 90,95 v 10 L 80,95 v 10 L 70,95 v 10 L 60,95 v 10 L 50,95 v 10 L 40,95 v 10 L 30,95 v 10 L 20,95 v 10 L 10,95 v 10 L 0,95 v 20 H 200 V 105 L 190,95 v 10 L 180,95 Z",
    angled: "m 0,95 h 100 v 10 h 100 v 10 H 0 Z",
    urdy: "m 200,90 -5,5 v 10 l -5,5 -5,-5 V 95 l -5,-5 -5,5 v 10 l -5,5 -5,-5 V 95 l -5,-5 -5,5 v 10 l -5,5 -5,-5 V 95 l -5,-5 -5,5 v 10 l -5,6 -5,-6 V 95 l -5,-5 -5,5 v 10 l -5,5 -5,-5 V 95 l -5,-5 -5,5 v 10 l -5,5 -5,-5 V 95 l -5,-5 -5,5 v 10 l -5,6 -5,-6 V 95 l -5,-5 -5,5 v 10 l -5,5 -5,-5 V 95 l -5,-5 -5,5 v 10 l -5,5 -5,-5 V 95 l -5,-5 -5,5 v 10 l -5,5 -5,-5 V 95 L 0,90 v 25 h 200",
    indented:
      "m 100,95 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 v 20 H 0 V 95 l 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 z",
    bevilled: "m 0,92.5 h 110 l -20,15 H 200 V 115 H 0 Z",
    nowy: "m 0,95 h 80 c 0,0 0.1,20.1 20,20 19.9,-0.1 20,-20 20,-20 h 80 v 20 H 0 Z",
    nowyReversed: "m 200,105 h -80 c 0,0 -0.1,-20.1 -20,-20 -19.9,0.1 -20,20 -20,20 H 0 v 10 h 200 z",
    potenty:
      "m 3,95 v 5 h 5 v 5 H 0 v 10 h 200 l 0.5,-10 H 193 v -5 h 5 v -5 h -15 v 5 h 5 v 5 h -15 v -5 h 5 v -5 h -15 v 5 h 5 v 5 h -15 v -5 h 5 v -5 h -15 v 5 h 5 v 5 h -15 v -5 h 5 v -5 h -15 v 5 h 5 v 5 h -15 v -5 h 5 v -5 h -15 v 5 h 5 v 5 H 100.5 93 v -5 h 5 V 95 H 83 v 5 h 5 v 5 H 73 v -5 h 5 V 95 H 63 v 5 h 5 v 5 H 53 v -5 h 5 V 95 H 43 v 5 h 5 v 5 H 33 v -5 h 5 V 95 H 23 v 5 h 5 v 5 H 13 v -5 h 5 v -5 z",
    potentyDexter:
      "m 200,105 h -2 v -10 0 0 h -10 v 5 h 5 v 5 H 183 V 95 h -10 v 5 h 5 v 5 H 168 V 95 h -10 v 5 h 5 v 5 H 153 V 95 h -10 v 5 h 5 v 5 H 138 V 95 h -10 v 5 h 5 v 5 H 123 V 95 h -10 v 5 h 5 v 5 h -10 v 0 0 -10 H 98 v 5 h 5 v 5 H 93 V 95 H 83 v 5 h 5 v 5 H 78 V 95 H 68 v 5 h 5 v 5 H 63 V 95 H 53 v 5 h 5 v 5 H 48 V 95 H 38 v 5 h 5 v 5 H 33 V 95 H 23 v 5 h 5 v 5 H 18 V 95 H 8 v 5 h 5 v 5 H 3 V 95 H 0 v 20 h 200 z",
    potentySinister:
      "m 2.5,95 v 10 H 0 v 10 h 202.5 v -15 h 5 v -5 h -10 v 10 h -10 v -5 h 5 v -5 h -10 v 10 h -10 v -5 h 5 v -5 h -10 v 10 h -10 v -5 h 5 v -5 h -10 v 10 h -10 v -5 h 5 v -5 h -10 v 10 h -10 v -5 h 5 v -5 h -10 v 10 h -10 v -5 h 5 v -5 h -10 v 10 h -10 v -5 h 5 v -5 h -10 v 10 h -10 v -5 h 5 v -5 h -10 v 10 h -10 v -5 h 5 v -5 h -10 v 10 h -10 v -5 h 5 v -5 h -10 v 10 h -10 v -5 h 5 v -5 h -10 v 10 h -10 v -5 h 5 v -5 h -10 v 10 h -10 v -5 h 5 v -5 z",
    embattledGhibellin:
      "M 200,200 V 100 l -5,-5 v 10 l -5,-5 -5,5 V 95 l -5,5 -5,-5 v 10 l -5,-5 -5,5 V 95 l -5,5 -5,-5 v 10 l -5,-5 -5,5 V 95 l -5,5 -5,-5 v 10 l -5,-5 -5,5 V 95 l -5,5 -5,-5 v 10 l -5,-5 -5,5 V 95 l -5,5 -5,-5 v 10 l -5,-5 -5,5 V 95 l -5,5 -5,-5 v 10 l -5,-5 -5,5 V 95 l -5,5 -5,-5 v 10 l -5,-5 -5,5 V 95 l -5,5 -5,-5 v 10 l -5,-5 -5,5 V 95 l -5,5 -5,-5 v 10 l -5,-5 -5,5 V 95 l -5,5 v 15 h 200",
    embattledNotched:
      "m 200,105 h -5 V 95 l -5,5 -5,-5 v 10 h -5 V 95 l -5,5 -5,-5 v 10 h -5 V 95 l -5,5 -5,-5 v 10 h -5 V 95 l -5,5 -5,-5 v 10 h -5 V 95 l -5,5 -5,-5 v 10 h -5 V 95 l -5,5 -5,-5 v 10 h -5 V 95 l -5,5 -5,-5 v 10 H 90 V 95 l -5,5 -5,-5 v 10 H 75 V 95 l -5,5 -5,-5 v 10 H 60 V 95 l -5,5 -5,-5 v 10 H 45 V 95 l -5,5 -5,-5 v 10 H 30 V 95 l -5,5 -5,-5 v 10 H 15 V 95 l -5,5 -5,-5 v 10 H 0 v 10 h 200",
    embattledGrady:
      "m 0,95 v 20 H 200 V 95 h -2.5 v 5 h -5 v 5 h -5 v -5 h -5 v -5 h -5 v 5 h -5 v 5 h -5 v -5 h -5 v -5 h -5 v 5 h -5 v 5 h -5 v -5 h -5 v -5 h -5 v 5 h -5 v 5 h -5 v -5 h -5 v -5 h -5 v 5 h -5 v 5 h -5 v -5 h -5 v -5 h -5 v 5 h -5 v 5 h -5 v -5 h -5 v -5 h -5 v 5 h -5 v 5 h -5 v -5 h -5 v -5 h -5 v 5 h -5 v 5 h -5 v -5 h -5 v -5 h -5 v 5 h -5 v 5 h -5 v -5 h -5 v -5 h -5 v 5 h -5 v 5 h -5 v -5 h -5 v -5 z",
    dovetailed:
      "m 200,95 h -7 l 4,10 h -14 l 4,-10 h -14 l 4,10 h -14 l 4,-10 h -14 l 4,10 h -14 l 4,-10 h -14 l 4,10 h -14 l 4,-10 h -14 l 4,10 h -14 l 4,-10 H 93 l 4,10 H 83 L 87,95 H 73 l 4,10 H 63 L 67,95 H 53 l 4,10 H 43 L 47,95 H 33 l 4,10 H 23 L 27,95 H 13 l 4,10 H 3 L 7,95 H 0 v 20 h 200",
    dovetailedIndented:
      "m 200,100 -7,-5 4,10 -7,-5 -7,5 4,-10 -7,5 -7,-5 4,10 -7,-5 -7,5 4,-10 -7,5 -7,-5 4,10 -7,-5 -7,5 4,-10 -7,5 -7,-5 4,10 -7,-5 -7,5 4,-10 -7,5 -7,-5 4,10 -7,-5 -7,5 4,-10 -7,5 -7,-5 4,10 -7,-5 -7,5 4,-10 -7,5 -7,-5 4,10 -7,-5 -7,5 4,-10 -7,5 -7,-5 4,10 -7,-5 -7,5 4,-10 -7,5 -7,-5 4,10 -7,-5 -7,5 4,-10 -7,5 -7,-5 4,10 -7,-5 -7,5 4,-10 -7,5 v 15 h 200",
    nebuly:
      "m 13.1,89.8 c -4.1,0 -7.3,2 -7.3,4.5 0,1.2 0.7,2.3 1.8,3.1 1.2,0.7 1.9,1.8 1.9,3 0,2.5 -3.2,4.5 -7.3,4.5 -0.5,0 -2.2,-0.2 -2.2,-0.2 V 115 h 200 v -10.1 c -3.7,-0.2 -6.7,-2.2 -6.7,-4.5 0,-1.2 0.7,-2.3 1.9,-3 1.2,-0.8 1.8,-1.9 1.8,-3.1 0,-2.5 -3.2,-4.5 -7.2,-4.5 -4.1,0 -7.3,2 -7.3,4.5 0,1.2 0.7,2.3 1.8,3.1 1.2,0.7 1.9,1.8 1.9,3 0,2.5 -3.3,4.5 -7.3,4.5 -4,0 -7.3,-2 -7.3,-4.5 0,-1.2 0.7,-2.3 1.9,-3 1.2,-0.8 1.8,-1.9 1.8,-3.1 0,-2.5 -3.2,-4.5 -7.2,-4.5 -4.1,0 -7.3,2 -7.3,4.5 0,1.2 0.7,2.3 1.8,3.1 1.2,0.7 1.9,1.8 1.9,3 -1.5,4.1 -4.2,4.4 -8.8,4.5 -4.7,-0.1 -8.7,-1.5 -8.9,-4.5 0,-1.2 0.7,-2.3 1.9,-3 1.2,-0.8 1.9,-1.9 1.9,-3.1 0,-2.5 -3.3,-4.5 -7.3,-4.5 -4.1,0 -7.3,2 -7.3,4.5 0,1.2 0.7,2.3 1.8,3.1 1.2,0.7 1.9,1.8 1.9,3 0,2.5 -3.3,4.5 -7.3,4.5 -4,0 -7.3,-2 -7.3,-4.5 0,-1.2 0.7,-2.3 1.9,-3 1.2,-0.8 1.9,-1.9 1.9,-3.1 0,-2.5 -3.3,-4.5 -7.3,-4.5 -4.1,0 -7.3,2 -7.3,4.5 0,1.2 0.7,2.3 1.8,3.1 1.2,0.7 1.9,1.8 1.9,3 0,2.5 -3.3,4.5 -7.3,4.5 -4,0 -7.3,-2 -7.3,-4.5 0,-1.2 0.7,-2.3 1.9,-3 1.2,-0.8 1.9,-1.9 1.9,-3.1 0,-2.5 -3.3,-4.5 -7.3,-4.5 -4.1,0 -7.3,2 -7.3,4.5 0,1.2 0.7,2.3 1.8,3.1 1.2,0.7 1.9,1.8 1.9,3 0,2.5 -3.3,4.5 -7.3,4.5 -4,0 -7.3,-2 -7.3,-4.5 0,-1.2 0.7,-2.3 1.9,-3 1.2,-0.8 1.9,-1.9 1.9,-3.1 0,-2.5 -3.3,-4.5 -7.3,-4.5 -4.1,0 -7.3,2 -7.3,4.5 0,1.2 0.7,2.3 1.8,3.1 1.2,0.7 1.9,1.8 1.9,3 0,2.5 -3.3,4.5 -7.3,4.5 -4,0 -7.3,-2 -7.3,-4.5 0,-1.2 0.7,-2.3 1.9,-3 1.2,-0.8 1.9,-1.9 1.9,-3.1 0,-2.5 -3.3,-4.5 -7.3,-4.5 -4.1,0 -7.3,2 -7.3,4.5 0,1.2 0.7,2.3 1.8,3.1 1.2,0.7 1.9,1.8 1.9,3 0,2.5 -3.3,4.5 -7.3,4.5 -4,0 -7.3,-2 -7.3,-4.5 0,-1.2 0.7,-2.3 1.9,-3 1.2,-0.8 1.9,-1.9 1.9,-3.1 0,-2.5 -3.3,-4.5 -7.3,-4.5 -4.1,0 -7.3,2 -7.3,4.5 0,1.2 0.7,2.3 1.8,3.1 1.2,0.7 1.9,1.8 1.9,3 0,2.5 -3.3,4.5 -7.3,4.5 -4,0 -7.3,-2 -7.3,-4.5 0,-1.2 0.7,-2.3 1.9,-3 1.2,-0.8 1.9,-1.9 1.9,-3.1 0,-2.5 -3.3,-4.5 -7.3,-4.5 z",
    rayonne:
      "M0 115l-.1-6 .2.8c1.3-1 2.3-2.5 2.9-4.4.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4A9 9 0 015.5 90c-.7 1.5-.8 3.4-.3 5.4.5 2 1.7 3.6 3.1 4.6a9 9 0 013.1 4.6c.5 2 .4 3.9-.3 5.4a9 9 0 003.1-4.6c.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4.5-2 1.7-3.6 3.1-4.6-.7 1.5-.8 3.4-.3 5.4.5 2 1.7 3.6 3.1 4.6a9 9 0 013.1 4.6c.5 2 .4 3.9-.3 5.4a9 9 0 003.1-4.6c.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4.5-2 1.7-3.6 3.1-4.6-.7 1.5-.8 3.4-.3 5.4.5 2 1.7 3.6 3.1 4.6a9 9 0 013.1 4.6c.5 2 .4 3.9-.3 5.4a9 9 0 003.1-4.6c.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4.5-2 1.7-3.6 3.1-4.6-.7 1.5-.8 3.4-.3 5.4.5 2 1.7 3.6 3.1 4.6a9 9 0 013.1 4.6c.5 2 .4 3.9-.3 5.4a9 9 0 003.1-4.6c.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4.5-2 1.7-3.6 3.1-4.6-.7 1.5-.8 3.4-.3 5.4.5 2 1.7 3.6 3.1 4.6a9 9 0 013.1 4.6c.5 2 .4 3.9-.3 5.4a9 9 0 003.1-4.6c.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4.5-2 1.7-3.6 3.1-4.6-.7 1.5-.8 3.4-.3 5.4.5 2 1.7 3.6 3.1 4.6a9 9 0 013.1 4.6c.5 2 .4 3.9-.3 5.4a9 9 0 003.1-4.6c.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4.5-2 1.7-3.6 3.1-4.6-.7 1.5-.8 3.4-.3 5.4.5 2 1.7 3.6 3.1 4.6a9 9 0 013.1 4.6c.5 2 .4 3.9-.3 5.4a9 9 0 003.1-4.6c.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4.5-2 1.7-3.6 3.1-4.6-.7 1.5-.8 3.4-.3 5.4.5 2 1.7 3.6 3.1 4.6a9 9 0 013.1 4.6c.5 2 .4 3.9-.3 5.4a9 9 0 003.1-4.6c.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4.5-2 1.7-3.6 3.1-4.6-.7 1.5-.8 3.4-.3 5.4.5 2 2.1 3.1 3.1 4.6 1 1.6 2.4 3.1 2.7 4.8.3 1.7.3 3.3 0 5.2 1.3-1 2.6-2.7 3.2-4.6.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4.5-2 1.7-3.6 3.1-4.6-.7 1.5-.8 3.4-.3 5.4.5 2 1.7 3.6 3.1 4.6a9 9 0 013.1 4.6c.5 2 .4 3.9-.3 5.4a9 9 0 003.1-4.6c.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4.5-2 1.7-3.6 3.1-4.6-.7 1.5-.8 3.4-.3 5.4.5 2 1.7 3.6 3.1 4.6a9 9 0 013.1 4.6c.5 2 .4 3.9-.3 5.4a9 9 0 003.1-4.6c.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4.5-2 1.7-3.6 3.1-4.6-.7 1.5-.8 3.4-.3 5.4.5 2 1.7 3.6 3.1 4.6a9 9 0 013.1 4.6c.5 2 .4 3.9-.3 5.4a9 9 0 003.1-4.6c.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4.5-2 1.7-3.6 3.1-4.6-.7 1.5-.8 3.4-.3 5.4.5 2 1.7 3.6 3.1 4.6a9 9 0 013.1 4.6c.5 2 .4 3.9-.3 5.4a9 9 0 003.1-4.6c.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4.5-2 1.7-3.6 3.1-4.6-.7 1.5-.8 3.4-.3 5.4.5 2 1.7 3.6 3.1 4.6a9 9 0 013.1 4.6c.5 2 .4 3.9-.3 5.4a9 9 0 003.1-4.6c.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4.5-2 1.7-3.6 3.1-4.6-.7 1.5-.8 3.4-.3 5.4.5 2 1.7 3.6 3.1 4.6a9 9 0 013.1 4.6c.5 2 .4 3.9-.3 5.4a9 9 0 003.1-4.6c.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4.5-2 1.7-3.6 3.1-4.6-.7 1.5-.8 3.4-.3 5.4.5 2 1.7 3.6 3.1 4.6a9 9 0 013.1 4.6c.5 2 .4 3.9-.3 5.4a9 9 0 003.1-4.6c.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4.5-2 1.7-3.6 3.1-4.6-.7 1.5-.8 3.4-.3 5.4.5 2 1.7 3.6 3.1 4.6a9 9 0 013.1 4.6c.5 2 .4 3.9-.3 5.4a9 9 0 003.1-4.6c.5-2 .4-3.9-.3-5.4-.7-1.5-.8-3.4-.3-5.4.5-2 1.7-3.6 3.1-4.6-.7 1.5-.8 3.4-.3 5.4.75 2.79 2.72 4.08 4.45 5.82L200 115z",
    seaWaves:
      "m 28.83,94.9 c -4.25,0 -7.16,3.17 -8.75,5.18 -1.59,2.01 -4.5,5.18 -8.75,5.18 -2.16,0 -3.91,-1.63 -3.91,-3.64 0,-2.01 1.44,-3.6 3.6,-3.6 0.7,0 1.36,0.17 1.93,0.48 -0.33,-2.03 -2.19,-3.56 -4.45,-3.56 -4.24,0 -6.91,3.13 -8.5,5.13 V 115 h 200 v -14.89 c -1.59,2.01 -4.5,5.18 -8.75,5.18 -2.16,0 -3.91,-1.63 -3.91,-3.64 0,-2.01 1.75,-3.64 3.91,-3.64 0.7,0 1.36,0.17 1.93,0.48 -0.34,-2.01 -2.2,-3.55 -4.46,-3.55 -4.25,0 -7.16,3.17 -8.75,5.18 -1.59,2.01 -4.5,5.18 -8.75,5.18 -2.16,0 -3.91,-1.63 -3.91,-3.64 0,-2.01 1.75,-3.64 3.91,-3.64 0.7,0 1.36,0.17 1.93,0.48 -0.34,-2.01 -2.21,-3.55 -4.46,-3.55 -4.25,0 -7.16,3.17 -8.75,5.18 -1.59,2.01 -4.5,5.18 -8.75,5.18 -2.16,0 -3.91,-1.63 -3.91,-3.64 0,-2.01 1.75,-3.64 3.91,-3.64 0.7,0 1.36,0.17 1.93,0.48 -0.34,-2.01 -2.21,-3.55 -4.46,-3.55 -4.25,0 -7.16,3.17 -8.75,5.18 -1.59,2.01 -4.5,5.18 -8.75,5.18 -2.16,0 -3.91,-1.63 -3.91,-3.64 0,-2.01 1.75,-3.64 3.91,-3.64 0.7,0 1.36,0.17 1.93,0.48 -0.34,-2.01 -2.2,-3.55 -4.46,-3.55 -4.25,0 -7.16,3.17 -8.75,5.18 -1.59,2.01 -4.5,5.18 -8.75,5.18 -2.16,0 -3.91,-1.63 -3.91,-3.64 0,-2.01 1.44,-3.6 3.6,-3.6 0.7,0 1.36,0.17 1.93,0.48 -0.34,-2.01 -2.21,-3.55 -4.46,-3.55 -4.25,0 -6.6,3.09 -8.19,5.09 -1.59,2.01 -4.5,5.18 -8.75,5.18 -2.16,0 -3.91,-1.63 -3.91,-3.64 0,-2.01 1.75,-3.64 3.91,-3.64 0.7,0 1.36,0.17 1.93,0.48 -0.34,-2.01 -2.21,-3.55 -4.46,-3.55 -4.25,0 -7.16,3.17 -8.75,5.18 -1.59,2.01 -4.5,5.18 -8.75,5.18 -2.16,0 -3.91,-1.63 -3.91,-3.64 0,-2.01 1.75,-3.64 3.91,-3.64 0.7,0 1.36,0.17 1.93,0.48 -0.34,-2.01 -2.2,-3.55 -4.46,-3.55 -4.25,0 -7.16,3.17 -8.75,5.18 -1.59,2.01 -4.5,5.18 -8.75,5.18 -2.16,0 -3.91,-1.63 -3.91,-3.64 0,-2.01 1.75,-3.64 3.91,-3.64 0.7,0 1.36,0.17 1.93,0.48 -0.34,-2.01 -2.2,-3.55 -4.46,-3.55 -4.25,0 -7.16,3.17 -8.75,5.18 -1.59,2.01 -4.5,5.18 -8.75,5.18 -2.16,0 -3.91,-1.63 -3.91,-3.64 0,-2.01 1.75,-3.64 3.91,-3.64 0.7,0 1.36,0.17 1.93,0.48 -0.34,-2.01 -2.21,-3.55 -4.46,-3.55 z",
    dragonTeeth:
      "M 9.4,85 C 6.5,88.1 4.1,92.9 3,98.8 1.9,104.6 2.3,110.4 3.8,115 2.4,113.5 0,106.6 0,109.3 v 5.7 h 200 v -5.7 c -1.1,-2.4 -2,-5.1 -2.6,-8 -1.1,-5.9 -0.7,-11.6 0.8,-16.2 -2.9,3.1 -5.3,7.9 -6.4,13.8 -1.1,5.9 -0.7,11.6 0.8,16.2 -2.9,-3.1 -5.3,-7.9 -6.4,-13.8 -1.1,-5.9 -0.7,-11.6 0.8,-16.2 -2.9,3.1 -5.3,7.9 -6.4,13.8 -1.1,5.9 -0.7,11.6 0.8,16.2 -2.9,-3.1 -5.3,-7.9 -6.4,-13.8 -1.1,-5.9 -0.7,-11.6 0.8,-16.2 -2.9,3.1 -5.3,7.9 -6.4,13.8 -1.1,5.9 -0.7,11.6 0.8,16.2 -2.9,-3.1 -5.3,-7.9 -6.4,-13.8 -1.1,-5.9 -0.7,-11.6 0.8,-16.2 -2.9,3.1 -5.3,7.9 -6.4,13.8 -1.1,5.9 -0.7,11.6 0.8,16.2 -2.9,-3.1 -5.3,-7.9 -6.4,-13.8 -1.1,-5.9 -0.7,-11.6 0.8,-16.2 -2.9,3.1 -5.3,7.9 -6.4,13.8 -1.1,5.9 -0.7,11.6 0.8,16.2 -2.9,-3.1 -5.3,-7.9 -6.4,-13.8 -1.1,-5.9 -0.7,-11.6 0.8,-16.2 -2.9,3.1 -5.3,7.9 -6.4,13.8 -1.1,5.9 -0.7,11.6 0.8,16.2 -2.9,-3.1 -5.3,-7.9 -6.4,-13.8 -1.1,-5.9 -0.7,-11.6 0.8,-16.2 -2.9,3.1 -5.3,7.9 -6.4,13.8 -1.1,5.9 -0.7,11.6 0.8,16.2 -2.9,-3.1 -5.3,-7.9 -6.4,-13.8 -1.1,-5.9 -0.7,-11.6 0.8,-16.2 -2.9,3.1 -5.3,7.9 -6.4,13.8 -1.1,5.9 -0.7,11.6 0.8,16.2 -2.9,-3.1 -5.3,-7.9 -6.4,-13.8 -1.1,-5.9 -0.7,-11.6 0.8,-16.2 -2.9,3.1 -5.3,7.9 -6.4,13.8 -1.1,5.9 -0.7,11.6 0.8,16.2 -1.4,-1.5 -2.8,-3.9 -3.8,-6.1 -1.1,-2.4 -2.3,-6.1 -2.6,-7.7 -0.2,-5.9 0.2,-11.7 1.7,-16.3 -3,3.1 -5.3,7.9 -6.4,13.8 -1.1,5.8 -0.7,11.6 0.8,16.2 -2.9,-3.1 -5.3,-7.9 -6.4,-13.8 -1,-5.8 -0.7,-11.6 0.9,-16.2 -3,3.1 -5.3,7.9 -6.4,13.8 -1.1,5.8 -0.7,11.6 0.8,16.2 -2.9,-3.1 -5.3,-7.9 -6.4,-13.8 -1.1,-5.8 -0.7,-11.6 0.9,-16.2 -3,3.1 -5.3,7.9 -6.4,13.8 -1.1,5.8 -0.7,11.6 0.8,16.2 -2.9,-3.1 -5.3,-7.9 -6.4,-13.8 C 63,95.4 63.4,89.6 64.9,85 c -2.9,3.1 -5.3,7.9 -6.3,13.8 -1.1,5.8 -0.7,11.6 0.8,16.2 -3,-3.1 -5.3,-7.9 -6.4,-13.8 -1.1,-5.8 -0.7,-11.6 0.8,-16.2 -2.9,3.1 -5.3,7.9 -6.4,13.8 -1,5.8 -0.6,11.6 0.9,16.2 -3,-3.1 -5.3,-7.9 -6.4,-13.8 -1.1,-5.8 -0.7,-11.6 0.8,-16.2 -2.9,3.1 -5.3,7.9 -6.4,13.8 -1,5.8 -0.7,11.6 0.9,16.2 -3,-3.1 -5.3,-7.9 -6.4,-13.8 -1.1,-5.8 -0.7,-11.6 0.8,-16.2 -2.9,3.1 -5.3,7.9 -6.4,13.8 -1.1,5.8 -0.7,11.6 0.9,16.2 -3,-3.1 -5.3,-7.9 -6.4,-13.8 C 18.6,95.4 19,89.6 20.5,85 17.6,88.1 15.2,92.9 14.1,98.8 13,104.6 13.4,110.4 14.9,115 12,111.9 9.6,107.1 8.6,101.2 7.5,95.4 7.9,89.6 9.4,85 Z",
    firTrees:
      "m 3.9,90 -4,7 2,-0.5 L 0,100 v 15 h 200 v -15 l -1.9,-3.5 2,0.5 -4,-7 -4,7 2,-0.5 -4,7 2,-0.5 -4,7 -4,-7 2,0.5 -4,-7 2,0.5 -4,-7 -4,7 2,-0.5 -4,7 2,-0.5 -4,7 -4,-7 2,0.5 -4,-7 2,0.5 -4,-7 -4,7 2,-0.5 -4,7 2,-0.5 -4,7 -4,-7 2,0.5 -4,-7 2,0.5 -4.1,-7 -4,7 2,-0.5 -4,7 2,-0.5 -4,7 -4,-7 2,0.5 -4,-7 2,0.5 -4,-7 -4,7 2,-0.5 -4,7 2,-0.5 -4,7 -4,-7 2,0.5 -4,-7 2,0.5 -4,-7 -4,7 2,-0.5 -4,7 2,-0.5 -4,7 -4,-7 2,0.5 -4,-7 2,0.5 -4,-7 -4,7 2,-0.5 -4,7 2,-0.5 -4,7 -4,-7 2,0.5 -4,-7 2,0.5 -4,-7 -4,7 2,-0.5 -4,7 2,-0.5 -4,7 -4,-7 2,0.5 -4,-7 2,0.5 -4,-7 -4,7 2,-0.5 -4,7 2,-0.5 -4,7 -4,-7 2,0.5 -4,-7 2,0.5 -4.1,-7 -4,7 2,-0.5 -4,7 2,-0.5 -4,7 -4,-7 2,0.5 -4,-7 2,0.5 -4,-7 -4,7 2,-0.5 -4,7 2,-0.5 -4,7 -4,-7 2,0.5 -4,-7 2,0.5 -4,-7 -4,7 2,-0.5 -4,7 2,-0.5 -4,7 -4,-7 2,0.5 -4,-7 2,0.5 z",
    flechy: "m 0,100 h 85 l 15,-15 15,15 h 85 v 15 H 0 Z",
    barby: "m 0,100 h 85 l 15,15 15,-15 h 85 v 15 H 0 Z",
    enclavy: "M 0,100 H 85 V 85 h 30 v 15 h 85 v 15 H 0 Z",
    escartely: "m 0,100 h 85 v 15 h 30 v -15 h 85 v 15 H 0 Z",
    arched: "m 100,95 c 40,-0.2 100,20 100,20 H 0 c 0,0 60,-19.8 100,-20 z",
    archedReversed: "m 0,85 c 0,0 60,20.2 100,20 40,-0.2 100,-20 100,-20 v 30 H 0 Z"
  };

  const templates = {
    // straight divisions
    perFess: `<rect x="0" y="100" width="200" height="100"/>`,
    perPale: `<rect x="100" y="0" width="100" height="200"/>`,
    perBend: `<polygon points="0,0 200,200 0,200"/>`,
    perBendSinister: `<polygon points="200,0 0,200 200,200"/>`,
    perChevron: `<polygon points="0,200 100,100 200,200"/>`,
    perChevronReversed: `<polygon points="0,0 100,100 200,0"/>`,
    perCross: `<rect x="100" y="0" width="100" height="100"/><rect x="0" y="100" width="100" height="100"/>`,
    perPile: `<polygon points="0,0 15,0 100,200 185,0 200,0 200,200 0,200"/>`,
    perSaltire: `<polygon points="0,0 0,200 200,0 200,200"/>`,
    gyronny: `<polygon points="0,0 200,200 200,100 0,100"/><polygon points="200,0 0,200 100,200 100,0"/>`,
    chevronny: `<path d="M0,80 100,-15 200,80 200,120 100,25 0,120z M0,160 100,65 200,160 200,200 100,105 0,200z M0,240 100,145 200,240 0,240z"/>`,
    // lined divisions
    perFessLined: line =>
      `<path d="${line}"/><rect x="0" y="115" width="200" height="85" shape-rendering="crispedges"/>`,
    perPaleLined: line =>
      `<path d="${line}" transform="rotate(-90 100 100)"/><rect x="115" y="0" width="85" height="200" shape-rendering="crispedges"/>`,
    perBendLined: line =>
      `<path d="${line}" transform="translate(-10 -10) rotate(45 110 110) scale(1.1)"/><rect x="0" y="115" width="200" height="85" transform="translate(-10 -10) rotate(45 110 110) scale(1.1)" shape-rendering="crispedges"/>`,
    perBendSinisterLined: line =>
      `<path d="${line}" transform="translate(-10 -10) rotate(-45 110 110) scale(1.1)"/><rect x="0" y="115" width="200" height="85" transform="translate(-10 -10) rotate(-45 110 110) scale(1.1)" shape-rendering="crispedges"/>`,
    perChevronLined: line =>
      `<rect x="15" y="115" width="200" height="200" transform="translate(70 70) rotate(45 100 100)"/><path d="${line}" transform="translate(129 71) rotate(-45 -100 100) scale(-1 1)"/><path d="${line}" transform="translate(71 71) rotate(45 100 100)"/>`,
    perChevronReversedLined: line =>
      `<rect x="15" y="115" width="200" height="200" transform="translate(-70 -70) rotate(225.001 100 100)"/><path d="${line}" transform="translate(-70.7 -70.7) rotate(225 100 100) scale(1 1)"/><path d="${line}" transform="translate(270.7 -70.7) rotate(-225 -100 100) scale(-1 1)"/>`,
    perCrossLined: line =>
      `<rect x="100" y="0" width="100" height="92.5"/><rect x="0" y="107.5" width="100" height="92.5"/><path d="${line}" transform="translate(0 50) scale(.5001)"/><path d="${line}" transform="translate(200 150) scale(-.5)"/>`,
    perPileLined: line =>
      `<path d="${line}" transform="translate(161.66 10) rotate(66.66 -100 100) scale(-1 1)"/><path d="${line}" transform="translate(38.33 10) rotate(-66.66 100 100)"/><polygon points="-2.15,0 84.15,200 115.85,200 202.15,0 200,200 0,200"/>`,
    // straight ordinaries
    fess: `<rect x="0" y="75" width="200" height="50"/>`,
    pale: `<rect x="75" y="0" width="50" height="200"/>`,
    bend: `<polygon points="35,0 200,165 200,200 165,200 0,35 0,0"/>`,
    bendSinister: `<polygon points="0,165 165,0 200,0 200,35 35,200 0,200"/>`,
    chief: `<rect width="200" height="75"/>`,
    bar: `<rect x="0" y="87.5" width="200" height="25"/>`,
    gemelle: `<rect x="0" y="76" width="200" height="16"/><rect x="0" y="108" width="200" height="16"/>`,
    fessCotissed: `<rect x="0" y="67" width="200" height="8"/><rect x="0" y="83" width="200" height="34"/><rect x="0" y="125" width="200" height="8"/>`,
    fessDoubleCotissed: `<rect x="0" y="60" width="200" height="7.5"/><rect x="0" y="72.5" width="200" height="7.5"/><rect x="0" y="85" width="200" height="30"/><rect x="0" y="120" width="200" height="7.5"/><rect x="0" y="132.5" width="200" height="7.5"/>`,
    bendlet: `<polygon points="22,0 200,178 200,200 178,200 0,22 0,0"/>`,
    bendletSinister: `<polygon points="0,178 178,0 200,0 200,22 22,200 0,200"/>`,
    terrace: `<rect x="0" y="145" width="200" height="55"/>`,
    cross: `<polygon points="85,0 85,85 0,85 0,115 85,115 85,200 115,200 115,115 200,115 200,85 115,85 115,0"/>`,
    crossParted: `<path d="M 80 0 L 80 80 L 0 80 L 0 95 L 80 95 L 80 105 L 0 105 L 0 120 L 80 120 L 80 200 L 95 200 L 95 120 L 105 120 L 105 200 L 120 200 L 120 120 L 200 120 L 200 105 L 120 105 L 120 95 L 200 95 L 200 80 L 120 80 L 120 0 L 105 0 L 105 80 L 95 80 L 95 0 L 80 0 z M 95 95 L 105 95 L 105 105 L 95 105 L 95 95 z"/>`,
    saltire: `<path d="M 0,21 79,100 0,179 0,200 21,200 100,121 179,200 200,200 200,179 121,100 200,21 200,0 179,0 100,79 21,0 0,0 Z"/>`,
    saltireParted: `<path d="M 7 0 L 89 82 L 82 89 L 0 7 L 0 28 L 72 100 L 0 172 L 0 193 L 82 111 L 89 118 L 7 200 L 28 200 L 100 128 L 172 200 L 193 200 L 111 118 L 118 111 L 200 193 L 200 172 L 128 100 L 200 28 L 200 7 L 118 89 L 111 82 L 193 0 L 172 0 L 100 72 L 28 0 L 7 0 z M 100 93 L 107 100 L 100 107 L 93 100 L 100 93 z"/>`,
    mount: `<path d="m0,250 a100,100,0,0,1,200,0"/>`,
    point: `<path d="M0,200 Q80,180 100,135 Q120,180 200,200"/>`,
    flaunches: `<path d="M0,0 q120,100 0,200 M200,0 q-120,100 0,200"/>`,
    gore: `<path d="M20,0 Q30,75 100,100 Q80,150 100,200 L0,200 L0,0 Z"/>`,
    pall: `<polygon points="0,0 30,0 100,70 170,0 200,0 200,30 122,109 122,200 78,200 78,109 0,30"/>`,
    pallReversed: `<polygon points="0,200 0,170 78,91 78,0 122,0 122,91 200,170 200,200 170,200 100,130 30,200"/>`,
    chevron: `<polygon points="0,125 100,60 200,125 200,165 100,100 0,165"/>`,
    chevronReversed: `<polygon points="0,75 100,140 200,75 200,35 100,100 0,35"/>`,
    gyron: `<polygon points="0,0 100,100 0,100"/>`,
    quarter: `<rect width="50%" height="50%"/>`,
    canton: `<rect width="37.5%" height="37.5%"/>`,
    pile: `<polygon points="70,0 100,175 130,0"/>`,
    pileInBend: `<polygon points="200,200 200,144 25,25 145,200"/>`,
    pileInBendSinister: `<polygon points="0,200 0,144 175,25 55,200"/>`,
    piles: `<polygon points="46,0 75,175 103,0"/><polygon points="95,0 125,175 154,0"/>`,
    pilesInPoint: `<path d="M15,0 100,200 60,0Z M80,0 100,200 120,0Z M140,0 100,200 185,0Z"/>`,
    label: `<path d="m 46,54.8 6.6,-15.6 95.1,0 5.9,15.5 -16.8,0.1 4.5,-11.8 L 104,43 l 4.3,11.9 -16.8,0 4.3,-11.8 -37.2,0 4.5,11.8 -16.9,0 z"/>`,
    // lined ordinaries
    fessLined: line =>
      `<path d="${line}" transform="translate(0 -25)"/><path d="${line}" transform="translate(0 25) rotate(180 100 100)"/><rect x="0" y="88" width="200" height="24" stroke="none"/>`,
    paleLined: line =>
      `<path d="${line}" transform="rotate(-90 100 100) translate(0 -25)"/><path d="${line}" transform="rotate(90 100 100) translate(0 -25)"/><rect x="88" y="0" width="24" height="200" stroke="none"/>`,
    bendLined: line =>
      `<path d="${line}" transform="translate(8 -18) rotate(45 110 100) scale(1.1 1)"/><path d="${line}" transform="translate(-28 18) rotate(225 110 100) scale(1.1 1)"/><rect x="0" y="88" width="200" height="24" transform="translate(-10 0) rotate(45 110 100) scale(1.1 1)" stroke="none"/>`,
    bendSinisterLined: line =>
      `<path d="${line}" transform="translate(-28 -18) rotate(-45 110 100) scale(1.1 1)"/><path d="${line}" transform="translate(8 18) rotate(-225 110 100) scale(1.1 1)"/><rect x="0" y="88" width="200" height="24" transform="translate(-10 0) rotate(-45 110 100) scale(1.1 1)" stroke="none"/>`,
    chiefLined: line =>
      `<path d="${line}" transform="translate(0,-25) rotate(180.00001 100 100)"/><rect width="200" height="62" stroke="none"/>`,
    barLined: line =>
      `<path d="${line}" transform="translate(0,-12.5)"/><path d="${line}" transform="translate(0,12.5) rotate(180.00001 100 100)"/><rect x="0" y="94" width="200" height="12" stroke="none"/>`,
    gemelleLined: line =>
      `<path d="${line}" transform="translate(0,-22.5)"/><path d="${line}" transform="translate(0,22.5) rotate(180.00001 100 100)"/>`,
    fessCotissedLined: line =>
      `<path d="${line}" transform="translate(0 15) scale(1 .5)"/><path d="${line}" transform="translate(0 85) rotate(180 100 50) scale(1 .5)"/><rect x="0" y="80" width="200" height="40"/>`,
    fessDoubleCotissedLined: line =>
      `<rect x="0" y="85" width="200" height="30"/><rect x="0" y="72.5" width="200" height="7.5"/><rect x="0" y="120" width="200" height="7.5"/><path d="${line}" transform="translate(0 10) scale(1 .5)"/><path d="${line}" transform="translate(0 90) rotate(180 100 50) scale(1 .5)"/>`,
    bendletLined: line =>
      `<path d="${line}" transform="translate(2 -12) rotate(45 110 100) scale(1.1 1)"/><path d="${line}" transform="translate(-22 12) rotate(225 110 100) scale(1.1 1)"/><rect x="0" y="94" width="200" height="12" transform="translate(-10 0) rotate(45 110 100) scale(1.1 1)" stroke="none"/>`,
    bendletSinisterLined: line =>
      `<path d="${line}" transform="translate(-22 -12) rotate(-45 110 100) scale(1.1 1)"/><path d="${line}" transform="translate(2 12) rotate(-225 110 100) scale(1.1 1)"/><rect x="0" y="94" width="200" height="12" transform="translate(-10 0) rotate(-45 110 100) scale(1.1 1)" stroke="none"/>`,
    terraceLined: line =>
      `<path d="${line}" transform="translate(0,50)"/><rect x="0" y="164" width="200" height="36" stroke="none"/>`,
    crossLined: line =>
      `<path d="${line}" transform="translate(0,-14.5)"/><path d="${line}" transform="rotate(180 100 100) translate(0,-14.5)"/><path d="${line}" transform="rotate(-90 100 100) translate(0,-14.5)"/><path d="${line}" transform="rotate(-270 100 100) translate(0,-14.5)"/>`,
    crossPartedLined: line =>
      `<path d="${line}" transform="translate(0,-20)"/><path d="${line}" transform="rotate(180 100 100) translate(0,-20)"/><path d="${line}" transform="rotate(-90 100 100) translate(0,-20)"/><path d="${line}" transform="rotate(-270 100 100) translate(0,-20)"/>`,
    saltireLined: line =>
      `<path d="${line}" transform="translate(0 -10) rotate(45 110 100) scale(1.1 1)"/><path d="${line}" transform="translate(-20 10) rotate(225 110 100) scale(1.1 1)"/><path d="${line}" transform="translate(-20 -10) rotate(-45 110 100) scale(1.1 1)"/><path d="${line}" transform="translate(0 10) rotate(-225 110 100) scale(1.1 1)"/>`,
    saltirePartedLined: line =>
      `<path d="${line}" transform="translate(3 -13) rotate(45 110 100) scale(1.1 1)"/><path d="${line}" transform="translate(-23 13) rotate(225 110 100) scale(1.1 1)"/><path d="${line}" transform="translate(-23 -13) rotate(-45 110 100) scale(1.1 1)"/><path d="${line}" transform="translate(3 13) rotate(-225 110 100) scale(1.1 1)"/>`
  };

  const patterns = {
    semy: (p, c1, c2, size, chargeId) =>
      `<pattern id="${p}" width="${size * 0.125}" height="${
        size * 0.125
      }" viewBox="0 0 200 200" stroke="#000"><rect width="200" height="200" fill="${c1}" stroke="none"/><g fill="${c2}"><use transform="translate(-100 -50)" href="#${chargeId}"/><use transform="translate(100 -50)" href="#${chargeId}"/><use transform="translate(0 50)" href="#${chargeId}"/></g></pattern>`,
    vair: (p, c1, c2, size) =>
      `<pattern id="${p}" width="${size * 0.125}" height="${
        size * 0.25
      }" viewBox="0 0 25 50" stroke="#000" stroke-width=".2"><rect width="25" height="25" fill="${c1}" stroke="none"/><path d="m12.5,0 l6.25,6.25 v12.5 l6.25,6.25 h-25 l6.25,-6.25 v-12.5 z" fill="${c2}"/><rect x="0" y="25" width="25" height="25" fill="${c2}" stroke="none"/><path d="m25,25 l-6.25,6.25 v12.5 l-6.25,6.25 l-6.25,-6.25 v-12.5 l-6.25,-6.25 z" fill="${c1}"/><path d="M0 50 h25" fill="none"/></pattern>`,
    counterVair: (p, c1, c2, size) =>
      `<pattern id="${p}" width="${size * 0.125}" height="${
        size * 0.25
      }" viewBox="0 0 25 50" stroke="#000" stroke-width=".2"><rect width="25" height="50" fill="${c2}" stroke="none"/><path d="m 12.5,0 6.25,6.25 v 12.5 L 25,25 18.75,31.25 v 12.5 L 12.5,50 6.25,43.75 V 31.25 L 0,25 6.25,18.75 V 6.25 Z" fill="${c1}"/></pattern>`,
    vairInPale: (p, c1, c2, size) =>
      `<pattern id="${p}" width="${size * 0.125}" height="${
        size * 0.125
      }" viewBox="0 0 25 25"><rect width="25" height="25" fill="${c1}"/><path d="m12.5,0 l6.25,6.25 v12.5 l6.25,6.25 h-25 l6.25,-6.25 v-12.5 z" fill="${c2}" stroke="#000" stroke-width=".2"/></pattern>`,
    vairEnPointe: (p, c1, c2, size) =>
      `<pattern id="${p}" width="${size * 0.125}" height="${
        size * 0.25
      }" viewBox="0 0 25 50"><rect width="25" height="25" fill="${c2}"/><path d="m12.5,0 l6.25,6.25 v12.5 l6.25,6.25 h-25 l6.25,-6.25 v-12.5 z" fill="${c1}"/><rect x="0" y="25" width="25" height="25" fill="${c1}" stroke-width="1" stroke="${c1}"/><path d="m12.5,25 l6.25,6.25 v12.5 l6.25,6.25 h-25 l6.25,-6.25 v-12.5 z" fill="${c2}"/></pattern>`,
    vairAncien: (p, c1, c2, size) =>
      `<pattern id="${p}" width="${size * 0.125}" height="${
        size * 0.125
      }" viewBox="0 0 100 100"><rect width="100" height="100" fill="${c1}"/><path fill="${c2}" stroke="none" d="m 0,90 c 10,0 25,-5 25,-40 0,-25 10,-40 25,-40 15,0 25,15 25,40 0,35 15,40 25,40 v 10 H 0 Z"/><path fill="none" stroke="#000" d="M 0,90 c 10,0 25,-5 25,-40 0,-35 15,-40 25,-40 10,0 25,5 25,40 0,35 15,40 25,40 M0,100 h100"/></pattern>`,
    potent: (p, c1, c2, size) =>
      `<pattern id="${p}" width="${size * 0.125}" height="${
        size * 0.125
      }" viewBox="0 0 200 200" stroke="#000"><rect width="200" height="100" fill="${c1}" stroke="none"/><rect y="100" width="200" height="100" fill="${c2}" stroke="none"/><path d="m25 50h50v-50h50v50h50v50h-150z" fill="${c2}"/><path d="m25 100v50h50v50h50v-50h50v-50z" fill="${c1}"/><path d="m0 0h200 M0 100h200" fill="none"/></pattern>`,
    counterPotent: (p, c1, c2, size) =>
      `<pattern id="${p}" width="${size * 0.125}" height="${
        size * 0.125
      }" viewBox="0 0 200 200" stroke="none"><rect width="200" height="200" fill="${c1}"/><path d="m25 50h50v-50h50v50h50v100h-50v50h-50v-50h-50v-50z" fill="${c2}"/><path d="m0 0h200 M0 100h200 M0 200h200"/></pattern>`,
    potentInPale: (p, c1, c2, size) =>
      `<pattern id="${p}" width="${size * 0.125}" height="${
        size * 0.0625
      }" viewBox="0 0 200 100" stroke-width="1"><rect width="200" height="100" fill="${c1}" stroke="none"/><path d="m25 50h50v-50h50v50h50v50h-150z" fill="${c2}" stroke="#000"/><path d="m0 0h200 M0 100h200" fill="none" stroke="#000"/></pattern>`,
    potentEnPointe: (p, c1, c2, size) =>
      `<pattern id="${p}" width="${size * 0.125}" height="${
        size * 0.125
      }" viewBox="0 0 200 200" stroke="none"><rect width="200" height="200" fill="${c1}"/><path d="m0 0h25v50h50v50h50v-50h50v-50h25v100h-25v50h-50v50h-50v-50h-50v-50h-25v-100" fill="${c2}"/></pattern>`,
    ermine: (p, c1, c2, size) =>
      `<pattern id="${p}" width="${size * 0.125}" height="${
        size * 0.125
      }" viewBox="0 0 200 200" fill="${c2}"><rect width="200" height="200" fill="${c1}"/><g stroke="none" fill="${c2}"><g transform="translate(-100 -50)"><path d="m100 81.1c-4.25 17.6-12.7 29.8-21.2 38.9 3.65-0.607 7.9-3.04 11.5-5.47-2.42 4.86-4.86 8.51-7.3 12.7 1.82-0.607 6.07-4.86 12.7-10.9 1.21 8.51 2.42 17.6 4.25 23.6 1.82-5.47 3.04-15.2 4.25-23.6 3.65 3.65 7.3 7.9 12.7 10.9l-7.9-13.3c3.65 1.82 7.9 4.86 11.5 6.07-9.11-9.11-17-21.2-20.6-38.9z"/><path d="m82.4 81.7c-0.607-0.607-6.07 2.42-9.72-4.25 7.9 6.68 15.2-7.3 21.8 1.82 1.82 4.25-6.68 10.9-12.1 2.42z"/><path d="m117 81.7c0.607-1.21 6.07 2.42 9.11-4.86-7.3 7.3-15.2-7.3-21.2 2.42-1.82 4.25 6.68 10.9 12.1 2.42z"/><path d="m101 66.5c-1.02-0.607 3.58-4.25-3.07-8.51 5.63 7.9-10.2 10.9-1.54 17.6 3.58 2.42 12.2-2.42 4.6-9.11z"/></g><g transform="translate(100 -50)"><path d="m100 81.1c-4.25 17.6-12.7 29.8-21.2 38.9 3.65-0.607 7.9-3.04 11.5-5.47-2.42 4.86-4.86 8.51-7.3 12.7 1.82-0.607 6.07-4.86 12.7-10.9 1.21 8.51 2.42 17.6 4.25 23.6 1.82-5.47 3.04-15.2 4.25-23.6 3.65 3.65 7.3 7.9 12.7 10.9l-7.9-13.3c3.65 1.82 7.9 4.86 11.5 6.07-9.11-9.11-17-21.2-20.6-38.9z"/><path d="m82.4 81.7c-0.607-0.607-6.07 2.42-9.72-4.25 7.9 6.68 15.2-7.3 21.8 1.82 1.82 4.25-6.68 10.9-12.1 2.42z"/><path d="m117 81.7c0.607-1.21 6.07 2.42 9.11-4.86-7.3 7.3-15.2-7.3-21.2 2.42-1.82 4.25 6.68 10.9 12.1 2.42z"/><path d="m101 66.5c-1.02-0.607 3.58-4.25-3.07-8.51 5.63 7.9-10.2 10.9-1.54 17.6 3.58 2.42 12.2-2.42 4.6-9.11z"/></g><g transform="translate(0 50)"><path d="m100 81.1c-4.25 17.6-12.7 29.8-21.2 38.9 3.65-0.607 7.9-3.04 11.5-5.47-2.42 4.86-4.86 8.51-7.3 12.7 1.82-0.607 6.07-4.86 12.7-10.9 1.21 8.51 2.42 17.6 4.25 23.6 1.82-5.47 3.04-15.2 4.25-23.6 3.65 3.65 7.3 7.9 12.7 10.9l-7.9-13.3c3.65 1.82 7.9 4.86 11.5 6.07-9.11-9.11-17-21.2-20.6-38.9z"/><path d="m82.4 81.7c-0.607-0.607-6.07 2.42-9.72-4.25 7.9 6.68 15.2-7.3 21.8 1.82 1.82 4.25-6.68 10.9-12.1 2.42z"/><path d="m117 81.7c0.607-1.21 6.07 2.42 9.11-4.86-7.3 7.3-15.2-7.3-21.2 2.42-1.82 4.25 6.68 10.9 12.1 2.42z"/><path d="m101 66.5c-1.02-0.607 3.58-4.25-3.07-8.51 5.63 7.9-10.2 10.9-1.54 17.6 3.58 2.42 12.2-2.42 4.6-9.11z"/></g></g></pattern>`,
    chequy: (p, c1, c2, size) =>
      `<pattern id="${p}" width="${size * 0.25}" height="${
        size * 0.25
      }" viewBox="0 0 50 50" fill="${c2}"><rect width="50" height="50"/><rect width="25" height="25" fill="${c1}"/><rect x="25" y="25" width="25" height="25" fill="${c1}"/></pattern>`,
    lozengy: (p, c1, c2, size) =>
      `<pattern id="${p}" width="${size * 0.125}" height="${
        size * 0.125
      }" viewBox="0 0 50 50"><rect width="50" height="50" fill="${c1}"/><polygon points="25,0 50,25 25,50 0,25" fill="${c2}"/></pattern>`,
    fusily: (p, c1, c2, size) =>
      `<pattern id="${p}" width="${size * 0.125}" height="${
        size * 0.25
      }" viewBox="0 0 50 100"><rect width="50" height="100" fill="${c2}"/><polygon points="25,0 50,50 25,100 0,50" fill="${c1}"/></pattern>`,
    pally: (p, c1, c2, size) =>
      `<pattern id="${p}" width="${size * 0.5}" height="${
        size * 0.125
      }" viewBox="0 0 100 25"><rect width="100" height="25" fill="${c2}"/><rect x="25" y="0" width="25" height="25" fill="${c1}"/><rect x="75" y="0" width="25" height="25" fill="${c1}"/></pattern>`,
    barry: (p, c1, c2, size) =>
      `<pattern id="${p}" width="${size * 0.125}" height="${
        size * 0.5
      }" viewBox="0 0 25 100"><rect width="25" height="100" fill="${c2}"/><rect x="0" y="25" width="25" height="25" fill="${c1}"/><rect x="0" y="75" width="25" height="25" fill="${c1}"/></pattern>`,
    gemelles: (p, c1, c2, size) =>
      `<pattern id="${p}" width="${size * 0.125}" height="${
        size * 0.125
      }" viewBox="0 0 50 50"><rect width="50" height="50" fill="${c1}"/><rect y="5" width="50" height="10" fill="${c2}"/><rect y="40" width="50" height="10" fill="${c2}"/></pattern>`,
    bendy: (p, c1, c2, size) =>
      `<pattern id="${p}" width="${size * 0.5}" height="${
        size * 0.5
      }" viewBox="0 0 100 100"><rect width="100" height="100" fill="${c1}"/><polygon points="0,25 75,100 25,100 0,75" fill="${c2}"/><polygon points="25,0 75,0 100,25 100,75" fill="${c2}"/></pattern>`,
    bendySinister: (p, c1, c2, size) =>
      `<pattern id="${p}" width="${size * 0.5}" height="${
        size * 0.5
      }" viewBox="0 0 100 100"><rect width="100" height="100" fill="${c2}"/><polygon points="0,25 25,0 75,0 0,75" fill="${c1}"/><polygon points="25,100 100,25 100,75 75,100" fill="${c1}"/></pattern>`,
    palyBendy: (p, c1, c2, size) =>
      `<pattern id="${p}" width="${size * 0.6258}" height="${
        size * 0.3576
      }" viewBox="0 0 175 100"><rect y="0" x="0" width="175" height="100" fill="${c2}"/><g fill="${c1}"><path d="m0 20 35 30v50l-35-30z"/><path d="m35 0 35 30v50l-35-30z"/><path d="m70 0h23l12 10v50l-35-30z"/><path d="m70 80 23 20h-23z"/><path d="m105 60 35 30v10h-35z"/><path d="m105 0h35v40l-35-30z"/><path d="m 140,40 35,30 v 30 h -23 l -12,-10z"/><path d="M 175,0 V 20 L 152,0 Z"/></g></pattern>`,
    barryBendy: (p, c1, c2, size) =>
      `<pattern id="${p}" width="${size * 0.3572}" height="${
        size * 0.6251
      }" viewBox="0 0 100 175"><rect width="100" height="175" fill="${c2}"/><g fill="${c1}"><path d="m20 0 30 35h50l-30-35z"/><path d="m0 35 30 35h50l-30-35z"/><path d="m0 70v23l10 12h50l-30-35z"/><path d="m80 70 20 23v-23z"/><path d="m60 105 30 35h10v-35z"/><path d="m0 105v35h40l-30-35z"/><path d="m 40,140 30,35 h 30 v -23 l -10,-12 z"/><path d="m0 175h20l-20-23z"/></g></pattern>`,
    pappellony: (p, c1, c2, size) =>
      `<pattern id="${p}" width="${size * 0.125}" height="${
        size * 0.125
      }" viewBox="0 0 100 100"><rect width="100" height="100" fill="${c1}"/><circle cx="0" cy="51" r="45" stroke="${c2}" fill="${c1}" stroke-width="10"/><circle cx="100" cy="51" r="45" stroke="${c2}" fill="${c1}" stroke-width="10"/><circle cx="50" cy="1" r="45" stroke="${c2}" fill="${c1}" stroke-width="10"/></pattern>`,
    pappellony2: (p, c1, c2, size) =>
      `<pattern id="${p}" width="${size * 0.125}" height="${
        size * 0.125
      }" viewBox="0 0 100 100" stroke="#000" stroke-width="2"><rect width="100" height="100" fill="${c1}" stroke="none"/><circle cy="50" r="49" fill="${c2}"/><circle cx="100" cy="50" r="49" fill="${c2}"/><circle cx="50" cy="0" r="49" fill="${c1}"/></pattern>`,
    scaly: (p, c1, c2, size) =>
      `<pattern id="${p}" width="${size * 0.125}" height="${
        size * 0.125
      }" viewBox="0 0 100 100" stroke="#000"><rect width="100" height="100" fill="${c1}" stroke="none"/><path d="M 0,84 C -40,84 -50,49 -50,49 -50,79 -27,99 0,99 27,99 50,79 50,49 50,49 40,84 0,84 Z" fill="${c2}"/><path d="M 100,84 C 60,84 50,49 50,49 c 0,30 23,50 50,50 27,0 50,-20 50,-50 0,0 -10,35 -50,35 z" fill="${c2}"/><path d="M 50,35 C 10,35 0,0 0,0 0,30 23,50 50,50 77,50 100,30 100,0 100,0 90,35 50,35 Z" fill="${c2}"/></pattern>`,
    plumetty: (p, c1, c2, size) =>
      `<pattern id="${p}" width="${size * 0.125}" height="${
        size * 0.25
      }" viewBox="0 0 50 100" stroke-width=".8"><rect width="50" height="100" fill="${c2}" stroke="none"/><path fill="${c1}" stroke="none" d="M 25,100 C 44,88 49.5,74 50,50 33.5,40 25,25 25,4e-7 25,25 16.5,40 0,50 0.5,74 6,88 25,100 Z"/><path fill="none" stroke="${c2}" d="m17 40c5.363 2.692 10.7 2.641 16 0m-19 7c7.448 4.105 14.78 3.894 22 0m-27 7c6-2 10.75 3.003 16 3 5.412-0.0031 10-5 16-3m-35 9c4-7 12 3 19 2 7 1 15-9 19-2m-35 6c6-2 11 3 16 3s10-5 16-3m-30 7c8 0 8 3 14 3s7-3 14-3m-25 8c7.385 4.048 14.72 3.951 22 0m-19 8c5.455 2.766 10.78 2.566 16 0m-8 6v-78"/><g fill="none" stroke="${c1}"><path d="m42 90c2.678 1.344 5.337 2.004 8 2m-11 5c3.686 2.032 7.344 3.006 10.97 3m0.0261-1.2e-4v-30"/><path d="m0 92c2.689 0.0045 5.328-0.6687 8-2m-8 10c3.709-0.0033 7.348-1.031 11-3m-11 3v-30"/><path d="m0 7c5.412-0.0031 10-5 16-3m-16 11c7 1 15-9 19-2m-19 9c5 0 10-5 16-3m-16 10c6 0 7-3 14-3m-14.02 11c3.685-0.002185 7.357-1.014 11.02-3m-11 10c2.694-0.01117 5.358-0.7036 7.996-2m-8 6v-48"/><path d="m34 4c6-2 10.75 3.003 16 3m-19 6c4-7 12 3 19 2m-16 4c6-2 11 3 16 3m-14 4c8 0 8 3 14 3m-11 5c3.641 1.996 7.383 2.985 11 3m-8 5c2.762 1.401 5.303 2.154 8.002 2.112m-0.00154 3.888v-48"/></g></pattern>`,
    masoned: (p, c1, c2, size) =>
      `<pattern id="${p}" width="${size * 0.125}" height="${
        size * 0.125
      }" viewBox="0 0 100 100" fill="none"><rect width="100" height="100" fill="${c1}"/><rect width="100" height="50" stroke="${c2}" stroke-width="4"/><line x1="50" y1="50" x2="50" y2="100" stroke="${c2}" stroke-width="5"/></pattern>`,
    fretty: (p, c1, c2, size) =>
      `<pattern id="${p}" width="${size * 0.2}" height="${
        size * 0.2
      }" viewBox="0 0 140 140" stroke="#000" stroke-width="2"><rect width="140" height="140" fill="${c1}" stroke="none"/><path d="m-15 5 150 150 20-20-150-150z" fill="${c2}"/><path d="m10 150 140-140-20-20-140 140z" fill="${c2}" stroke="none"/><path d="m0 120 20 20 120-120-20-20z" fill="none"/></pattern>`,
    grillage: (p, c1, c2, size) =>
      `<pattern id="${p}" width="${size * 0.25}" height="${
        size * 0.25
      }" viewBox="0 0 200 200" stroke="#000" stroke-width="2"><rect width="200" height="200" fill="${c1}" stroke="none"/><path d="m205 65v-30h-210v30z" fill="${c2}"/><path d="m65-5h-30v210h30z" fill="${c2}"/><path d="m205 165v-30h-210v30z" fill="${c2}"/><path d="m165,65h-30v140h30z" fill="${c2}"/><path d="m 165,-5h-30v40h30z" fill="${c2}"/></pattern>`,
    chainy: (p, c1, c2, size) =>
      `<pattern id="${p}" width="${size * 0.167}" height="${
        size * 0.167
      }" viewBox="0 0 200 200" stroke="#000" stroke-width="2"><rect x="-6.691e-6" width="200" height="200" fill="${c1}" stroke="none"/><path d="m155-5-20-20-160 160 20 20z" fill="${c2}"/><path d="m45 205 160-160 20 20-160 160z" fill="${c2}"/><path d="m45-5 20-20 160 160-20 20-160-160" fill="${c2}"/><path d="m-5 45-20 20 160 160 20-20-160-160" fill="${c2}"/></pattern>`,
    maily: (p, c1, c2, size) =>
      `<pattern id="${p}" width="${size * 0.167}" height="${
        size * 0.167
      }" viewBox="0 0 200 200" stroke="#000" stroke-width="1.2"><path fill="${c1}" stroke="none" d="M0 0h200v200H0z"/><g fill="${c2}"><path d="m80-2c-5.27e-4 2.403-0.1094 6.806-0.3262 9.199 5.014-1.109 10.1-1.768 15.19-2.059 0.09325-1.712 0.1401-5.426 0.1406-7.141z"/><path d="m100 5a95 95 0 0 0-95 95 95 95 0 0 0 95 95 95 95 0 0 0 95-95 95 95 0 0 0-95-95zm0 15a80 80 0 0 1 80 80 80 80 0 0 1-80 80 80 80 0 0 1-80-80 80 80 0 0 1 80-80z"/><path d="m92.8 20.33c-5.562 0.4859-11.04 1.603-16.34 3.217-7.793 25.31-27.61 45.12-52.91 52.91-5.321 1.638-10.8 2.716-16.34 3.217-2.394 0.2168-6.796 0.3256-9.199 0.3262v15c1.714-4.79e-4 5.429-0.04737 7.141-0.1406 5.109-0.2761 10.19-0.9646 15.19-2.059 36.24-7.937 64.54-36.24 72.47-72.47z"/><path d="m202 80c-2.403-5.31e-4 -6.806-0.1094-9.199-0.3262 1.109 5.014 1.768 10.1 2.059 15.19 1.712 0.09326 5.426 0.1401 7.141 0.1406z"/><path d="m179.7 92.8c-0.4859-5.562-1.603-11.04-3.217-16.34-25.31-7.793-45.12-27.61-52.91-52.91-1.638-5.321-2.716-10.8-3.217-16.34-0.2168-2.394-0.3256-6.796-0.3262-9.199h-15c4.8e-4 1.714 0.0474 5.429 0.1406 7.141 0.2761 5.109 0.9646 10.19 2.059 15.19 7.937 36.24 36.24 64.54 72.47 72.47z"/><path d="m120 202c5.3e-4 -2.403 0.1094-6.806 0.3262-9.199-5.014 1.109-10.1 1.768-15.19 2.059-0.0933 1.712-0.1402 5.426-0.1406 7.141z"/><path d="m107.2 179.7c5.562-0.4859 11.04-1.603 16.34-3.217 7.793-25.31 27.61-45.12 52.91-52.91 5.321-1.638 10.8-2.716 16.34-3.217 2.394-0.2168 6.796-0.3256 9.199-0.3262v-15c-1.714 4.7e-4 -5.429 0.0474-7.141 0.1406-5.109 0.2761-10.19 0.9646-15.19 2.059-36.24 7.937-64.54 36.24-72.47 72.47z"/><path d="m -2,120 c 2.403,5.4e-4 6.806,0.1094 9.199,0.3262 -1.109,-5.014 -1.768,-10.1 -2.059,-15.19 -1.712,-0.0933 -5.426,-0.1402 -7.141,-0.1406 z"/><path d="m 20.33,107.2 c 0.4859,5.562 1.603,11.04 3.217,16.34 25.31,7.793 45.12,27.61 52.91,52.91 1.638,5.321 2.716,10.8 3.217,16.34 0.2168,2.394 0.3256,6.796 0.3262,9.199 L 95,202 c -4.8e-4,-1.714 -0.0472,-5.44 -0.1404,-7.152 -0.2761,-5.109 -0.9646,-10.19 -2.059,-15.19 -7.937,-36.24 -36.24,-64.54 -72.47,-72.47 z"/></g></pattern>`,
    honeycombed: (p, c1, c2, size) =>
      `<pattern id="${p}" width="${size * 0.143}" height="${
        size * 0.24514
      }" viewBox="0 0 70 120"><rect width="70" height="120" fill="${c1}"/><path d="M 70,0 V 20 L 35,40 m 35,80 V 100 L 35,80 M 0,120 V 100 L 35,80 V 40 L 0,20 V 0" stroke="${c2}" fill="none" stroke-width="3"/></pattern>`
  };

  async function getCharges(coa, id, shieldPath) {
    let charges = coa.charges ? coa.charges.map(charge => charge.charge) : []; // add charges
    if (semy(coa.t1)) charges.push(semy(coa.t1)); // add field semy charge
    if (semy(coa.division?.t)) charges.push(semy(coa.division.t)); // add division semy charge

    const uniqueCharges = [...new Set(charges)];
    const fetchedCharges = await Promise.all(
      uniqueCharges.map(async charge => {
        if (charge === "inescutcheon")
          return `<g id="inescutcheon_${id}"><path transform="translate(66 66) scale(.34)" d="${shieldPath}"/></g>`;
        const fetched = await fetchCharge(charge, id);
        return fetched;
      })
    );
    return fetchedCharges.join("");
  }

  const PATH = "/91-Assets/charges/";
  async function fetchCharge(charge, id) {
    const fetched = fetch(PATH + charge + ".svg")
      .then(res => {
        if (res.ok) return res.text();
        else throw new Error("Cannot fetch charge");
      })
      .then(text => {
        const html = document.createElement("html");
        html.innerHTML = text;
        const g = html.querySelector("g");
        g.setAttribute("id", charge + "_" + id);
        return g.outerHTML;
      })
      .catch(err => {
        ERROR && console.error(err);
      });
    return fetched;
  }

  function getPatterns(coa, id) {
    const isPattern = string => string.includes("-");
    let patternsToAdd = [];
    if (coa.t1.includes("-")) patternsToAdd.push(coa.t1); // add field pattern
    if (coa.division && isPattern(coa.division.t)) patternsToAdd.push(coa.division.t); // add division pattern
    if (coa.ordinaries)
      coa.ordinaries.filter(ordinary => isPattern(ordinary.t)).forEach(ordinary => patternsToAdd.push(ordinary.t)); // add ordinaries pattern
    if (coa.charges) coa.charges.filter(charge => isPattern(charge.t)).forEach(charge => patternsToAdd.push(charge.t)); // add charges pattern
    if (!patternsToAdd.length) return "";

    return [...new Set(patternsToAdd)]
      .map(patternString => {
        const [pattern, t1, t2, size] = patternString.split("-");
        const charge = semy(patternString);
        if (charge) return patterns.semy(patternString, clr(t1), clr(t2), getSizeMod(size), charge + "_" + id);
        return patterns[pattern](patternString, clr(t1), clr(t2), getSizeMod(size), charge);
      })
      .join("");
  }

  function getSizeMod(size) {
    if (size === "small") return 0.8;
    if (size === "smaller") return 0.5;
    if (size === "smallest") return 0.25;
    if (size === "big") return 1.6;
    return 1;
  }

  function getTemplate(id, line) {
    const linedId = id + "Lined";
    if (!line || line === "straight" || !templates[linedId]) return templates[id];
    const linePath = lines[line];
    return templates[linedId](linePath);
  };

  // get color or link to pattern
  function clr(tincture) {
    if (colors[tincture]) return colors[tincture];
    return `url(#${tincture})`;
  }

  // get charge is string starts with "semy"
  function semy(string) {
    const isSemy = /^semy/.test(string);
    if (!isSemy) return false;
    return string.match(/semy_of_(.*?)-/)[1];
  }

  
  function templateOrdinary(ordinary, tincture) {
    const fill = clr(tincture);
    let svg = `<g fill="${fill}" stroke="none">`;
    if (ordinary.ordinary === "bordure")
      svg += `<path d="${shieldPath}" fill="none" stroke="${fill}" stroke-width="16.7%"/>`;
    else if (ordinary.ordinary === "orle")
      svg += `<path d="${shieldPath}" fill="none" stroke="${fill}" stroke-width="5%" transform="scale(.85)" transform-origin="center">`;
    else svg += getTemplate(ordinary.ordinary, ordinary.line);
    return svg + `</g>`;
  }

  function templateCharge(charge, tincture, secondaryTincture, tertiaryTincture) {
    const primary = clr(tincture);
    const secondary = clr(secondaryTincture || tincture);
    const tertiary = clr(tertiaryTincture || tincture);
    const stroke = charge.stroke || "#000";

    const chargePositions = [...new Set(charge.p)].filter(position => positions[position]);

    let svg = `<g fill="${primary}" style="--secondary: ${secondary}; --tertiary: ${tertiary}" stroke="${stroke}">`;
    for (const p of chargePositions) {
      const transform = getElTransform(charge, p);
      svg += `<use href="#${charge.charge}_${id}" transform="${transform}"></use>`;
    }
    return svg + "</g>";

    function getElTransform(c, p) {
      const s = (c.size || 1) * sizeModifier;
      const sx = c.sinister ? -s : s;
      const sy = c.reversed ? -s : s;
      let [x, y] = positions[p];
      x = x - 100 * (sx - 1);
      y = y - 100 * (sy - 1);
      const scale = c.sinister || c.reversed ? `${sx} ${sy}` : s;
      return `translate(${x} ${y}) scale(${scale})`;
    }
  }


  // the draw function from FMG starts here
  const {shield = "heater", division, ordinaries = [], charges = []} = coa;

  const ordinariesRegular = ordinaries.filter(o => !o.above);
  const ordinariesAboveCharges = ordinaries.filter(o => o.above);
  const shieldPath = shieldPaths[shield] || shieldPaths.heater;
  const tDiv = division ? (division.t.includes("-") ? division.t.split("-")[1] : division.t) : null;
  const positions = shieldPositions[shield];
  const sizeModifier = shieldSize[shield] || 1;
  const viewBox = shieldBox[shield] || "0 0 200 200";

  const shieldClip = `<clipPath id="${shield}_${id}"><path d="${shieldPath}"/></clipPath>`;
  const divisionClip = division
    ? `<clipPath id="divisionClip_${id}">${getTemplate(division.division, division.line)}</clipPath>`
    : "";
  const loadedCharges = await getCharges(coa, id, shieldPath);
  const loadedPatterns = getPatterns(coa, id);
  const blacklight = `<radialGradient id="backlight_${id}" cx="100%" cy="100%" r="150%"><stop stop-color="#fff" stop-opacity=".3" offset="0"/><stop stop-color="#fff" stop-opacity=".15" offset=".25"/><stop stop-color="#000" stop-opacity="0" offset="1"/></radialGradient>`;
  const field = `<rect x="0" y="0" width="200" height="200" fill="${clr(coa.t1)}"/>`;
  const style = `<style>
    g.secondary,path.secondary {fill: var(--secondary);}
    g.tertiary,path.tertiary {fill: var(--tertiary);}
  </style>`;

  const divisionGroup = division ? templateDivision() : "";
  const overlay = `<path d="${shieldPath}" fill="url(#backlight_${id})" stroke="#333"/>`;

  const svg = `<svg id="${id}" width="200" height="200" viewBox="${viewBox}">
      <defs>${shieldClip}${divisionClip}${loadedCharges}${loadedPatterns}${blacklight}${style}</defs>
      <g clip-path="url(#${shield}_${id})">${field}${divisionGroup}${templateAboveAll()}</g>
      ${overlay}</svg>`;

  // insert coa svg to defs
  document.getElementById("coas").insertAdjacentHTML("beforeend", svg);
  return true;

  function templateDivision() {
    let svg = "";

    // In field part
    for (const ordinary of ordinariesRegular) {
      if (ordinary.divided === "field") svg += templateOrdinary(ordinary, ordinary.t);
      else if (ordinary.divided === "counter") svg += templateOrdinary(ordinary, tDiv);
    }

    for (const charge of charges) {
      if (charge.divided === "field") svg += templateCharge(charge, charge.t);
      else if (charge.divided === "counter") svg += templateCharge(charge, tDiv);
    }

    for (const ordinary of ordinariesAboveCharges) {
      if (ordinary.divided === "field") svg += templateOrdinary(ordinary, ordinary.t);
      else if (ordinary.divided === "counter") svg += templateOrdinary(ordinary, tDiv);
    }

    // In division part
    svg += `<g clip-path="url(#divisionClip_${id})"><rect x="0" y="0" width="200" height="200" fill="${clr(
      division.t
    )}"/>`;

    for (const ordinary of ordinariesRegular) {
      if (ordinary.divided === "division") svg += templateOrdinary(ordinary, ordinary.t);
      else if (ordinary.divided === "counter") svg += templateOrdinary(ordinary, coa.t1);
    }

    for (const charge of charges) {
      if (charge.divided === "division") svg += templateCharge(charge, charge.t);
      else if (charge.divided === "counter") svg += templateCharge(charge, coa.t1);
    }

    for (const ordinary of ordinariesAboveCharges) {
      if (ordinary.divided === "division") svg += templateOrdinary(ordinary, ordinary.t);
      else if (ordinary.divided === "counter") svg += templateOrdinary(ordinary, coa.t1);
    }

    return (svg += `</g>`);
  }

  function templateAboveAll() {
    let svg = "";

    ordinariesRegular
      .filter(o => !o.divided)
      .forEach(ordinary => {
        svg += templateOrdinary(ordinary, ordinary.t);
      });

    charges
      .filter(o => !o.divided || !division)
      .forEach(charge => {
        svg += templateCharge(charge, charge.t);
      });

    ordinariesAboveCharges
      .filter(o => !o.divided)
      .forEach(ordinary => {
        svg += templateOrdinary(ordinary, ordinary.t);
      });
    console.log("svg object: ", svg);
    return svg;
  }
});