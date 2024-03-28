// Here is a list of all the custom helpers in this file with all the data input they expect
/*
getCampaignName(importSettings)
getCampaignButtonCode(importSettings)
getCampaignAtlasButtonCode(importSettings)
getCampaignCalendar(importSettings)
getBurgName(burgId,allBurgs)
getStateName(stateId,allStates)
getProvinceName(provinceId,allProvinces)
getCultureName(cultureId,allCultures)
getMfcgURL(currentBurg, mapSeed, allCells, mapSettings)
getHeight(currentCell, mapSettings, allCells)
totalArea(area)
calcPopulation(popValue)
totalPopulation(rural,urban)
burgProvinceLookup(cellId,allCells,allProvinces)
checkNameDupes(name, allProvinces OR allBurgs, state)

*/


// Custom helper function to extract thisCampaignName from @importSettings
handlebars.registerHelper('getCampaignName', function(importSettings) {
  // console.log("importSettings: ", importSettings);
  const folders = importSettings.folderName.split('/');
  const thisCampaignName = `${folders[1]}`;
  //console.log("### campaignName: ", thisCampaignName);
  return thisCampaignName;
});

// Custom helper function to extract thisCampaignButtonCode from @importSettings
handlebars.registerHelper('getCampaignButtonCode', function(importSettings) {
  // console.log("importSettings: ", importSettings);
  const folders = importSettings.folderName.split('/');
  const tempCampaignName = `${folders[1]}`;
  const tempCampaignNameLowerCase = tempCampaignName.replace(/\s+/g, '-').toLowerCase();
  const thisCampaignButtonCode = "button-" + tempCampaignNameLowerCase + "-home";
  return thisCampaignButtonCode;
});

// Custom helper function to extract thisCampaignAtlasButtonCode from @importSettings
handlebars.registerHelper('getCampaignAtlasButtonCode', function(importSettings) {
  // console.log("importSettings: ", importSettings);
  const folders = importSettings.folderName.split('/');
  const tempCampaignName = `${folders[1]}`;
  const tempCampaignNameLowerCase = tempCampaignName.replace(/\s+/g, '-').toLowerCase();
  const thisCampaignAtlasButtonCode = "button-" + tempCampaignNameLowerCase + "-atlas";
  return thisCampaignAtlasButtonCode;
});

// Custom helper function to extract thisCampaignCalendar from @importSettings
handlebars.registerHelper('getCampaignCalendar', function(importSettings) {
  // console.log("importSettings: ", importSettings);
  const folders = importSettings.folderName.split('/');
  const tempCampaignName = `${folders[1]}`;
  const thisCampaignCalendar = tempCampaignName + "-Calendar";
  return thisCampaignCalendar;
});

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

// Custom helper function to get Province Name
handlebars.registerHelper('getProvinceName', function(provinceId,allProvinces) {
  //console.log("provinceId:", provinceId);
  //console.log("allProvinces: ", allProvinces);
  if (provinceId === undefined || provinceId === 0) {
    return ''; // skip if the element is undefined or zero
  };
  const provinceName = allProvinces.find(province => province.i === provinceId);
  //console.log("provinceName found:", provinceName);
  return provinceName ? provinceName.name : 'Unknown';
});

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

// Custom helper to derive total area
handlebars.registerHelper('totalArea', function(area) {
  if (area === undefined) {
    return ''; // skip if population value is undefined
  };
  return Math.floor(area * 9).toLocaleString();
  });

// Custom helper to calculate population
handlebars.registerHelper('calcPopulation', function(popValue) {
  if (popValue === undefined) {
    return ''; // skip if population value is undefined
  };
    return Math.floor(popValue * 1000).toLocaleString();
  });

// Custom helper to derive total population
handlebars.registerHelper('totalPopulation', function(rural,urban) {
  if (rural === undefined || urban === undefined) {
    return ''; // skip if population value is undefined
  };
    const tempTotalPop = rural + urban;
  return Math.floor(tempTotalPop * 1000).toLocaleString();
  });

// Custom helper to return the values from a given cell
handlebars.registerHelper('burgProvinceLookup', function(cellId,allCells,allProvinces) {
  if (cellId === undefined) {
    return ''; // skip if population value is undefined
  };
  const foundCell = allCells.find(cell => cell.i === cellId)
  const foundCellProvinceId = foundCell.province;
  const foundProvinceName = allProvinces.find(prov => prov.i === foundCellProvinceId).name;
  //console.log("foundProvinceName: ", foundProvinceName);
  return foundProvinceName;
});

// Custom helper to check for duplicate names - is done on allProvinces or allBurgs
// will return any names found to have other matching objects by appending the State name
// where the duplicate lies, enclosed by parentheses - e.g. - "Anyburg(AnyState)" & "Anyburg(OtherState)"
// checkNameDupes(name, allProvinces OR allBurgs, State)
handlebars.registerHelper('checkNameDupes', function(name, allNames, state, allStates) {
  // allNames can be either allBurgs or allProvinces
  const duplicates = allNames.filter(otherName => otherName.name === name && otherName.state !== state);
  if (duplicates.length > 0) {
    let stateName = allStates.find(s => s.i === state).name;
    const uniqueName = `${name}(${stateName})`;
    console.log("uniqueName:", uniqueName);
    return uniqueName;
  }
  return name;
});
