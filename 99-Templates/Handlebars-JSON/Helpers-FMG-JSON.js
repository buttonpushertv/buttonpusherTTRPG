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
010 getMfcgURL(currentBurg, mapSeed, allCells, mapSettings)
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
    console.log("##### burgId was undefined or zero #####");
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
    console.log("##### stateId was undefined or zero #####");
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
    return ''; // skip if the element is undefined or zero
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
  //console.log("mapSettings: ", mapSettings);
  const {options} = mapSettings;
  //console.log("options: ", options);

  const pop = rn(currentBurg.population * mapSettings.populationRate * mapSettings.urbanization);
  console.log("population: ", pop);
  if (!options.villageMaxPopulation){
    console.log ("## - JSON does not contain options.villageMaxPopulation - ##")
    return createMfcgLink(currentBurg, mapSeed, allCells, mapSettings, grid);
  } 
  getBurgLink(currentBurg, mapSeed, allCells, mapSettings, grid);

  function getBurgLink(currentBurg, mapSeed, allCells, mapSettings, grid) {
    if (currentBurg.link) return currentBurg.link;
    console.log("currentBurg:", currentBurg);
    console.log("POP TEST: population:", pop, "options.villageMaxPopulation: ", options.villageMaxPopulation);
    if (pop >= options.villageMaxPopulation || currentBurg.citadel || currentBurg.walls || currentBurg.temple || currentBurg.shanty) return createMfcgLink(currentBurg, mapSeed, allCells, mapSettings, grid);
    return createVillageGeneratorLink(currentBurg, mapSeed, allCells, mapSettings, grid);
  };
  
  function createMfcgLink(currentBurg, mapSeed, allCells, mapSettings) {
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
  };

  function createVillageGeneratorLink(currentBurg, mapSeed, allCells, mapSettings, grid) {
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
    
      const url = new URL("https://watabou.github.io/village-generator/");
      url.search = new URLSearchParams({pop, name: "", seed: burgSeed, width, height, tags});
      return url.toString();
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
// Custom helper to return the values from a given cell
handlebars.registerHelper('burgProvinceLookup', function(cellId,allCells,allProvinces) {
  if (cellId === undefined) {
    return ''; // skip if population value is undefined
  };
  const foundCell = allCells.find(cell => cell.i === cellId)
  const foundCellProvinceId = foundCell.province;
  const foundProvinceName = allProvinces.find(prov => prov.i === foundCellProvinceId).fullName;
  //console.log("foundProvinceName: ", foundProvinceName);
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
// TO BE DONE
