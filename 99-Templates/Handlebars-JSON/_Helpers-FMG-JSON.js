// Here is a list of all the custom helpers in this file with all the data input they expect
/*
(indicated by the 3-digit number at head of the line - for easy locating of them)
001* getCampaignHomeNote(importSettings)
002 AVAILABLE
003 getCampaignAtlasNote(importSettings)
004* getCampaignCalendar(importSettings)
005 getDateTimestamp(importSettings)
006 getBurgName(burgId,allBurgs)
006b getBurgNamePlusID(burgId,allBurgs)
007 getStateName(stateId,allStates)
007b getStateNamePlusID(stateId,allStates)
008 getProvinceName(provinceId,allProvinces)
008b getProvinceNamePlusID(provinceId,allProvinces)
009 getCultureName(cultureId,allCultures)
010x burgMapUnits(currentBurg, mapSettings) - NOT CURRENTLY IN USE
011 getBurgMapLinkByGroup(currentBurg, mapSeed, allCells, allRoutes, mapSettings, grid)
012 getHeight(currentCell, mapSettings, allCells)
013 totalArea(area)
014 calcPopulation(popValue)
015 totalPopulation(rural,urban)
016 burgProvinceNameLookup(cellId,allCells,allProvinces)
016b burgProvinceIDLookup(cellId,allCells,allProvinces)
016c burgProvinceObjectLookup(cellId,allCells,allProvinces)
016d burgProvinceNameLookupTag(cellId,allCells,allProvinces)
017 getReligionName(religionID,allReligions)
018 getFMGCellXY(cellId, allCells)
019 getLeafletBurgXY(burgId,allBurgs,mapInfo)
020 getCellLeafletXY(cellId, allCells, mapInfo)
021 getPoleLeafletXY(state, mapInfo)
022 getReligionFollowers(religion,allCells,allBurgs,mapSettings)
023 getTemperature(burg,allData)
024 getTemperatureLikeness(burg,allData)
025 getProvinceIdFromCell(cell,allData)
026 getcapitalFile(capitalID,allData)]
027x getBurgType(burg,allData) - POSSIBLY DEPRECATED - formely used to determine if a burg was a city, town, village, or hamlet - now that is determined by the 'group' property of the burg object

* - NEEDS TO BE REWORKED
x - DEPRECATED - no longer used in the code

IMPORTANT: All of these helpers rely on the campaigns being stored in the vault in a sub-folder within a sub-solder off of the root of the vault. For example, by default, other scripts in this vault will store any newly created campaigns under: "01-Campaigns" + campiagn name off of the root of the buttonpusherTTRPG vault. All of the helpers below require that method of storing the campaigns. See the common line, in most of the helpers that reads: const (somevariable) = `${folders[1]}` - that is what is extracting the location of the specific campaign that is the target for that process.

*/

// 001 - NEEDS TO BE UPDATED TO USE JSON ELEMENT @ importInfo.thisCampaign & importInfo.thisCampaignPath
// Custom helper function to extract thisCampaignHomeNote from @importSettings
handlebars.registerHelper('getCampaignHomeNote', function(importSettings) {
  // console.log("importSettings: ", importSettings);
  const folders = importSettings.folderName.split('/');
  const thisCampaignHomeNote = `${folders[1]}` + " Home";
  return thisCampaignHomeNote;
});

// 002 - A function for posting a DEBUG message to the console when debugging
handlebars.registerHelper('debugTrace', function(flagText) {
  console.log("##### DEBUG Trace:" + flagText + " - #####");
  return;
});

// 003
// Custom helper function to extract thisCampaignAtlasNote from @importSettings
handlebars.registerHelper('getCampaignAtlasNote', function(importSettings) {
  // console.log("importSettings: ", importSettings);
  const folders = importSettings.folderName.split('/');
  const thisCampaignAtlasNote = `${folders[1]}` + "-Linked Atlas";
  return thisCampaignAtlasNote;
});

// 004 - NEEDS TO BE UPDATED TO USE JSON ELEMENT @ importInfo.thisCampaign & importInfo.thisCampaignPath
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
  // console.log("burgId:", burgId);
  // console.log("allBurgs: ", allBurgs);
  if (burgId === undefined || burgId === null) {
    console.log("##### getBurgName - burgId was undefined #####");
    return ''; // skip if the element is undefined
  };
  // console.log("burgId wasn't 0 or undefined");
  const burgFound = allBurgs.find(burg => burg.i === burgId);
  // console.log("burgFound:", burgFound.name);
  return burgFound ? burgFound.name : 'Unknown';
});

// 006b
// Custom helper function to get Burg Name PLus ID - useful for linking to specific Burg notes when multiple Burgs have the same name
handlebars.registerHelper('getBurgNamePlusID', function(burgId, allBurgs) {
  if (burgId === undefined || burgId === 0) {
    console.log("##### getBurgName - burgId was undefined or null #####");
    return ''; // skip if the element is undefined or null
  }
  const burgFound = allBurgs.find(burg => burg.i === burgId);
  //console.log("getBurgNamePlusID-burgFound:", burgFound);
  const burgToReturn = burgFound ? burgFound.name + "-" + burgId : 'Unknown';
  // console.log("burgToReturn:", burgToReturn);
  return burgToReturn ? burgToReturn : 'Unknown';
});

// 007
// Custom helper function to get State Name
handlebars.registerHelper('getStateName', function(stateId,allStates) {
  if (stateId === undefined|| stateId === null) {
    console.log("##### getStateName - stateId was undefined #####");
    return ''; // skip if the element is undefined or zero
  };
  const stateToReturn = allStates.find(state => state.i === stateId);
  const stateName = allStates.find(state => state.i === stateId);
  // console.log("stateName found:", stateName);
  return stateName ? stateName.name : 'Unknown';
});

// 007b
// Custom helper function to get State Name Plus ID
handlebars.registerHelper('getStateNamePlusID', function(stateId,allStates) {
  // console.log("getStateName - StateId:", stateId);
  // console.log("allStates: ", allStates);
  if (stateId === undefined || stateId === null) {
    console.log("##### getStateName - stateId was undefined #####");
    return ''; // skip if the element is undefined or zero
  };
    const stateToReturn = allStates.find(state => state.i === stateId);
  stateName = stateToReturn.name + "-" + stateId;
  // console.log("stateName found:", stateName);
  return stateName ? stateName : 'Unknown';
});

// 008
// Custom helper function to get Province Name
handlebars.registerHelper('getProvinceName', function(provinceId,allProvinces) {
  // console.log("provinceId:", provinceId);
  // console.log("allProvinces: ", allProvinces);
  if (provinceId === undefined || provinceId === null) {
    console.log("##### getProvinceName - provinceId was undefined or zero #####");
    return ''; // skip if the element is undefined or zero
  };
  const provinceName = allProvinces.find(province => province.i === provinceId);
  // console.log("provinceName found:", provinceName.fullName);
  return provinceName ? provinceName.fullName : 'Unknown';
});

// 008b
// Custom helper function to get Province Name
handlebars.registerHelper('getProvinceNamePlusID', function(provinceId,allProvinces) {
  // console.log("provinceId:", provinceId);
  // console.log("allProvinces: ", allProvinces);
  if (provinceId === undefined || provinceId === null) {
    console.log("##### getProvinceName - provinceId was undefined or zero #####");
    return ''; // skip if the element is undefined or zero
  };
  const provinceToReturn = allProvinces.find(province => province.i === provinceId);
  provinceName = provinceToReturn.name + "-" + provinceId;
  // console.log("provinceName found:", provinceName.fullName);
  return provinceToReturn ? provinceToReturn : 'Unknown';
});

// 009
// Custom helper function to get Culture Name
handlebars.registerHelper('getCultureName', function(cultureId,allCultures) {
  // console.log("cultureId:", cultureId);
  // console.log("allCultures: ", allCultures);
  if (cultureId === undefined || cultureId === null) {
    console.log("##### getCultureName - cultureId was undefined or zero #####");
    return ''; // skip if the element is undefined
   
  };
  const cultureName = allCultures.find(culture => culture.i === cultureId);
  // console.log("cultureName found:", cultureName);
  return cultureName ? cultureName.name : 'Unknown';
});

// 010
// Custom Helper to determine Burg Map Units
// as of v.0.6, I've had a switch in mindset about the scale units of Burg Maps
// I've decided to turn off the scale bar of the City Gen map images and go with everything as feet.
// this code is still here if you decided to put it back in the use of 'meters' or feet
//
// In the Burg Handlebar template, it is now hard-coded to use only feet always.
//
// If you want to put it back to use this helper, you'll need to change the line of the Burg handlebar template
// that currently reads: "> unit: feet" to "> unit: {{burgMapUnits this @importDataRoot.settings}}"
// it's around line 80 (as of v.0.6)
handlebars.registerHelper('burgMapUnits', function(currentBurg, mapSettings) {
  if (currentBurg === undefined || currentBurg === 0) {
    console.log("##### burgMapUnits - currentBurg was undefined or zero #####");
    return ''; // skip if currentCell is undefined
  };
  const {options} = mapSettings;
  const pop = (currentBurg.population * 1000);
  if (!options.villageMaxPopulation){
    console.log ("## - JSON does not contain options.villageMaxPopulation - ##");
    return 'meters'
  } else if (pop >= options.villageMaxPopulation || currentBurg.citadel || currentBurg.walls || currentBurg.temple || currentBurg.shanty) {
    return 'meters';
  } else {
    return 'feet';
  };
});

// 011
// Custom helper to construct the Map link for a Burg. It will the Burg's 'group' property to determine whether to link to the City Generator or the Village Generator.
// If the 'group' value is 'city' or 'town' or 'capital' then it uses https://watabou.github.io/city-generator/. 
// If the 'group' value is 'village' or 'hamlet' then it uses https://watabou.github.io/village-generator/
// based on the data model for Fantasy Map Generator - https://github.com/Azgaar/Fantasy-Map-Generator/wiki/Data-model
// Portions of this code are adapted from the Fantasy Map Generator Code - https://github.com/Azgaar/Fantasy-Map-Generator
handlebars.registerHelper('getBurgMapLink', function(currentBurg, mapSeed, allCells, allRoutes, mapSettings, grid) {
  if (!currentBurg === undefined || currentBurg.SourceIndex === 0) {
    console.log("##### getBurgMapLink - currentBurg was undefined or zero #####");
    return ''; // skip if currentCell is undefined
  };
  // console.log("mapSeed: ", mapSeed);
  // console.log("allCells: ", allCells);
  // console.log("mapSettings: ", mapSettings);

  console.log("Processing Burg ID: ", currentBurg.i, " - Name: ", currentBurg.name);
  console.log("currentBurg:", currentBurg);

  // console.log("mapSettings: ", mapSettings);
  const {options} = mapSettings;
  // console.log("options: ", options);

  const currentGroup = currentBurg.group;
  // console.log("currentGroup: ", currentGroup);
  if (currentGroup === "city" || currentGroup === "town" || currentGroup === "capital") {
    // console.log("DEBUG - ", currentBurg.name, " is a City/Town/Capital - using MFCG - currentGroup: ", currentGroup);
    return createMfcgLink(currentBurg, mapSeed, allCells, allRoutes, mapSettings, grid);
    console.log("******* - DEBUG - ", currentBurg.name, " is a City/Town/Capital - link returned from createMfcgLink-*******");
  } else if (currentGroup === "village" || currentGroup === "hamlet") {
    // console.log("DEBUG - ", currentBurg.name, " is a Village/Hamlet - using Village Gen - currentGroup: ", currentGroup);
    return createVillageGeneratorLink(currentBurg, mapSeed, allCells, allRoutes, mapSettings, grid);
    console.log("******* - DEBUG - ", currentBurg.name, " is a Village/Hamlet - link returned from createVillageGeneratorLink- *******");
  };

  function createMfcgLink(currentBurg, mapSeed, allCells, allRoutes,mapSettings) {
    // console.log("++- ", currentBurg.name, " is a CITY - ++");
    const burgSeed = currentBurg.MFCG || mapSeed + String(currentBurg.i).padStart(4, "0");
    const name = currentBurg.name;
    const burgID = currentBurg.i;
    const burgCell = currentBurg.cell;
    // console.log("+-----+ Inside createMfcgLink - name: ", name, " - burgID: ", burgID, " - burgSeed: ", burgSeed);
    const currentCell = allCells.find(bc => bc.i === currentBurg.cell);
    const havenIndex = currentCell.haven;
    const havenCell = havenIndex ? allCells.find(hc => hc.i === havenIndex) : null;
    // console.log("currentCell: ", currentCell);
    const sizeRaw = 2.13 * Math.pow((currentBurg.population * mapSettings.populationRate) / mapSettings.urbanDensity, 0.385);
    const size = minmax(Math.ceil(sizeRaw), 6, 100);
    const population = rn(currentBurg.population * mapSettings.populationRate * mapSettings.urbanization);
    // console.log("population: ", population);
    const river = currentCell.r ? 1 : 0;
    const coast = Number((currentBurg.port || 0) > 0);
    //console.log("createMfcgLink - currentBurg.name: ", currentBurg.name, " currentCell: ", currentCell, " havenCell: ", havenCell);
    const sea = (() => {
      if (!coast || !havenCell) return null;
      // calculate see direction: 0 = east, 0.5 = north, 1 = west, 1.5 = south
      const [x1, y1] = currentCell.p;
      const [x2, y2] = havenCell.p;
      const deg = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;

      if (deg <= 0) return rn(normalize(Math.abs(deg), 0, 180), 2);
      return rn(2 - normalize(deg, 0, 180), 2);
    })();
    // console.log("Post-sea-definition - currentBurg.i: ", currentBurg.i, " - river: ", river, " - coast: ", coast, " - sea: ", sea);
    // const sea = coast && currentCell.haven ? getSeaDirections(currentCell.i) : null; - OLD SEA DIRECTIONS
    const biome = currentCell.biome;
    const arableBiomes = river ? [1, 2, 3, 4, 5, 6, 7, 8] : [5, 6, 7, 8];
    const farms = +arableBiomes.includes(biome);
    // console.log("farms: ", farms);
    const citadel = +currentBurg.citadel;
    const urban_castle = +(citadel && each(2)(currentBurg.i));
    // console.log("urban_castle: ", urban_castle);
    //console.log("#### currentBurg: ", currentBurg, " - currentCell: ", currentCell,);
    // console.log("!@!@!@!@ - Dropping in to isCrossroad()");
    const hub = +isCrossroad(burgCell, allCells, allRoutes);
    // console.log(">>>>>> currentBurg.name: ", currentBurg.name, " - hub: ", hub);
    const walls = +currentBurg.walls;
    const plaza = +currentBurg.plaza;
    const temple = +currentBurg.temple;
    const shantytown = +currentBurg.shanty;

    const style = "natural";

    const url = new URL("https://watabou.github.io/city-generator/");
    url.search = new URLSearchParams({
      name: name || "",
      population: population.toString(),
      size: size.toString(),
      seed: burgSeed,
      river: river.toString(),
      coast: coast.toString(),
      farms: farms.toString(),
      citadel: citadel.toString(),
      urban_castle: urban_castle.toString(),
      hub: hub.toString(),
      plaza: plaza.toString(),
      temple: temple.toString(),
      walls: walls.toString(),
      shantytown: shantytown.toString(),
      gates: (-1).toString(),
      style
    }).toString();
    if (sea) url.searchParams.append("sea", sea.toString());

    const link = url.toString();
    //console.log(currentBurg.name, "****** Inside createMfcgLink - MFCG URL: ", link);
    // this line seems to be causing problems with the preview
    // return { link, preview: `${link}&preview=1` };
    return link;

    // const toReturn = url.toString();
    // return toReturn.substring(25);
 
function isCrossroad(burgCell, allCells, allRoutes) {
    // console.log("++++++ First step in isCrossroad() - Inside isCrossroad() - currentBurg: ", currentBurg, " - burgCell: ", burgCell);
    const currentCell = allCells.find(cell => cell.i === burgCell);
    // console.log("++++++ currentCell defined in isCrossroad() - currentCell: ", currentCell);
    const connections = currentCell.routes;
    // console.log("++++++ connections defined in isCrossroad() - connections: ", connections);
    if (!connections) return false;
    if (Object.keys(connections).length > 3) return true;
    const roadConnections = Object.values(connections).filter(routeId => {
        const route = allRoutes.find(route => route.i === routeId);
        return route?.group === "roads";
    });
    return roadConnections.length > 2;
    }
  };

  function createVillageGeneratorLink(currentBurg, mapSeed, allCells, allRoutes, mapSettings, grid) {

      const burgSeed = currentBurg.MFCG || mapSeed + String(currentBurg.i).padStart(4, "0");

      // NAME ON VILLAGE GENERATOR - SIZE ISSUE
      // The image that appears on the village gen for the name of the burg is set to use a seemingly fixed and large font size
      // this means the name text appears very large when shown in a small window (as seen in the Live Map Callout on a Burg's note)
      // If you wish to have the name appear, it needs to be included as a parameter in the URL
      // comment out the next line to hide the name via the URL `name` parameter

      const name = currentBurg.name;
      // COMMENT OUT line above and UNcomment next line to have name be hidden on village gen map
      // const name = "";

      const pop = rn(currentBurg.population * mapSettings.populationRate * mapSettings.urbanization);
      const currentCell = allCells.find(bc => bc.i === currentBurg.cell);
      const cellTemp = grid.cells.find(ct => ct.i === currentCell.i);
      const tags = [];

      if (currentCell.r && currentCell.haven) tags.push("estuary");
      else if (currentCell.haven && currentCell.f === 1) tags.push("island,district");
      else if (currentBurg.port) tags.push("coast");
      else if (currentCell.conf) tags.push("confluence");
      else if (currentCell.r) tags.push("river");
      else if (pop < 200 && each(4)(currentBurg.cell)) tags.push("pond");
 
      if (currentCell.routes) {
        const connections = currentCell.routes[currentCell] || {};
        const roadsAround = Object.values(connections).filter(routeId => {
          const route = allRoutes[routeId];
          return route.group === "roads" || route.group === "trails";
        }).length;

        if (roadsAround > 1) {
          tags.push("highway");
        } else if (roadsAround === 1) {
          tags.push("dead end");
        } else {
          tags.push("isolated");
        }
      } else {
        tags.push("isolated");
      }

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
      Vurl.search = new URLSearchParams({pop, name, seed: burgSeed, width, height, tags});
      const toReturn = Vurl.toString();
      return toReturn.substring(25);
    };

      // DEBUG SECTION - these are for debugging the VillageGeneratorLink function.
      // Place them where appropriate in the code above to see the values of the variables at that point in the code
      // console.log("## DEBUG - VillageGeneratorLink function: ", currentBurg.name, " is a VILLAGE - ##");
      // console.log("VillageGeneratorLink function: currentBurg: ", currentBurg);
      // console.log("VillageGeneratorLink function: currentCell: ", currentCell);
      // console.log("## DEBUG - VillageGeneratorLink function: name assigned: ", name, " - ##");
      // console.log("## DEBUG - VillageGeneratorLink function: pop assigned: ", pop, " - ##");
      // console.log("currentCell: ", currentCell);
      // console.log("## DEBUG - VillageGeneratorLink function: 1st tags assigned: ", tags, " - (empty?)##");
      // console.log("## DEBUG - VillageGeneratorLink function: currentCell assigned: ", currentCell, " - ##");
      // console.log("## DEBUG - VillageGeneratorLink function: 2nd tags assigned: ", tags, " - ##");
      // console.log("## DEBUG - VillageGeneratorLink function: 3rd tags assigned: ", tags, " - ##");
      // console.log("## DEBUG - VillageGeneratorLink function: Final tags assigned: ", tags, " - ##");
      // console.log("## DEBUG - VillageGeneratorLink function: width: ", width, " - height: ", height, " - ##");
      // console.log(currentBurg.name, " - Village URL: ", Vurl.toString());


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
    if (currentCell === undefined || currentCell === 0) {
      console.log("##### getHeight - currentCell was undefined or zero #####");
      return ''; // skip if currentCell is undefined
    };
    const tempH = allCells.find(ch => ch.i === currentCell);
    const h = tempH.h;
    const unit = mapSettings.heightUnit;
    const hExpon = mapSettings.heightExponent;
    // console.log("currentCell: ", currentCell, "h: ", h, "unit: ", unit );
    let unitRatio = 3.281; // default calculations are in feet
    if (unit === "m") unitRatio = 1; // if meter
    else if (unit === "f") unitRatio = 0.5468; // if fathom
    let height = -990;
    if (h >= 20) height = Math.pow(h - 18, +hExpon);
    else if (h < 20 && h > 0) height = ((h - 20) / h) * 50;
    const result = rn(height * unitRatio) + " " + unit;
    // console.log("height:", height, "unitRatio: ", unitRatio);
    // console.log("result: ", result);
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
  if (area === undefined || area === 0) {
    console.log("##### totalArea - area was undefined or zero #####");
    return ''; // skip if population value is undefined
  };
  return Math.floor(area * 9).toLocaleString();
  });

// 014
// Custom helper to calculate population
handlebars.registerHelper('calcPopulation', function(popValue,populationRate) {
  if (popValue === undefined || popValue === 0) {
    console.log("##### calcPopulation - popValue was undefined or zero #####");
    return ''; // skip if population value is undefined
  };
    return Math.floor(popValue * populationRate).toLocaleString();
  });

// 015
// Custom helper to derive total population
handlebars.registerHelper('totalPopulation', function(rural,urban,populationRate) {
  if (rural === undefined || rural === 0 || urban === undefined || urban === 0) {
    console.log("##### totalPopulation - rural/urban was undefined or zero #####");
    return ''; // skip if population value is undefined
  };
    const tempTotalPop = rural + urban;
  return Math.floor(tempTotalPop * populationRate).toLocaleString();
  });

// 016
// Custom helper to lookup what Province a Burg resides within
handlebars.registerHelper('burgProvinceNameLookup', function(cellId,allCells,allProvinces) {
  // console.log("burgProvinceNameLookup for cellId: ", cellId );
  if (cellId === undefined || cellId === 0) {
    console.log("##### burgProvinceNameLookup - cellId was undefined or zero #####");
    return ''; // skip if cellId value is undefined
  };
  const foundCell = allCells.find(cell => cell.i === cellId)
  const foundCellProvinceId = foundCell.province;
  if (foundCellProvinceId === 0 ) {
    return ''; // If no Province Defined end here
  };
  const foundProvinceName = allProvinces.find(prov => prov.i === foundCellProvinceId).fullName;
  // console.log("burgProvinceNameLookup process - foundProvinceName: ", foundProvinceName);
  return foundProvinceName;
});

// 016b
// Custom helper to lookup what Province a Burg resides within and return the Province object
handlebars.registerHelper('burgProvinceObjectLookup', function(cellId,allCells,allProvinces) {
  // console.log("burgProvinceObjectLookup for cellId: ", cellId );
  if (cellId === undefined || cellId === 0) {
    console.log("##### burgProvinceObjectLookup - cellId was undefined or zero #####");
    return ''; // skip if cellId value is undefined
  };
  const foundCell = allCells.find(cell => cell.i === cellId)
  const foundCellProvinceId = foundCell.province;
  if (foundCellProvinceId === 0 ) {
    return ''; // If no Province Defined end here
  };
  const foundProvince = allProvinces.find(prov => prov.i === foundCellProvinceId);
  // console.log("burgProvinceLookup process - foundProvinceName: ", foundProvinceName);
  return foundProvince;
});

// 016c
// Custom helper to lookup what Province a Burg resides within and return the Province ID
handlebars.registerHelper('burgProvinceIDLookup', function(cellId,allCells,allProvinces) {
  // console.log("burgProvinceIDLookup for cellId: ", cellId );
  if (cellId === undefined || cellId === 0) {
    console.log("##### burgProvinceIDLookup - cellId was undefined or zero #####");
    return ''; // skip if cellId value is undefined
  };
  const foundCell = allCells.find(cell => cell.i === cellId)
  const foundCellProvinceId = foundCell.province;
  if (foundCellProvinceId === 0 ) {
    return ''; // If no Province Defined end here
  };

  // console.log("burgProvinceLookup process - foundProvinceName: ", foundProvinceName);
  return foundCellProvinceId;
});

// 016d
// Custom helper to lookup what Province a Burg resides within - return the Province Name & fill any spaces with a hyphen
handlebars.registerHelper('burgProvinceNameLookupTag', function(cellId,allCells,allProvinces) {
  // console.log("burgProvinceNameLookup for cellId: ", cellId );
  if (cellId === undefined || cellId === 0) {
    console.log("##### burgProvinceNameLookup - cellId was undefined or zero #####");
    return ''; // skip if cellId value is undefined
  };
  const foundCell = allCells.find(cell => cell.i === cellId)
  const foundCellProvinceId = foundCell.province;
  if (foundCellProvinceId === 0 ) {
    return ''; // If no Province Defined end here
  };
  const foundProvinceName = allProvinces.find(prov => prov.i === foundCellProvinceId).fullName;
  // console.log("burgProvinceNameLookup process - foundProvinceName: ", foundProvinceName);
 const foundProvinceNameTag = foundProvinceName.replace(/ /g, "-");
  return foundProvinceNameTag;
});

// 017
// Custom helper to return religion name from passed religionID
handlebars.registerHelper('getReligionName', function(cellId,allCells,allReligions) {
  // console.log("cellId:", cellId);
  // console.log("allreligions: ", allreligions);
  if (cellId === undefined || cellId === 0 ) {
    console.log("##### getReligionName - cellId was undefined or zero #####");
    return ''; // skip if the element is undefined
  };
  // because the religion value is saved under the pack.cells[x].religion element we need to look up the value of a cell within the passed item in order to find the religion associated with that location
  // this does mean, however that we can look up the cell's religion value by simply passing a cell id to this function - that means it can find religion for not just States, but Provinces and Burgs as well
  // for States, we'll use the pack.states[x].center value
  // for Provinces, we'll use the pack.provinces[x].center value
  // for Burgs, we'll use the pack.burgs[x].cell alue
  // whichever you're using, just pass that value in the Handlebar template to this Helper and it will do the cross-referencing
  const cellReligion = allCells.find(cellr => cellr.i === cellId);
  // console.log("cellReligion: ", cellReligion);
  const foundCellReligion = cellReligion.religion;
  // console.log("foundCellReligion: ", foundCellReligion);
  const religionName = allReligions.find(religion => religion.i === foundCellReligion);
  // console.log("religionName found:", religionName);
  return religionName ? religionName.name : 'Unknown';
});

// 018 -
// Custom Helper to return a Cell's X & Y value for inclusion in FMG URL
handlebars.registerHelper('getFMGCellXY', function(cellId, allCells) {
  if (cellId === undefined || cellId === 0 ) {
    console.log("##### getFMGCellXY - cellId was undefined or zero #####");
    return ''; // skip if the element is undefined
  };
  const foundCell = allCells.find(cell => cell.i === cellId);
  // console.log("cellId: ", cellId, " -- foundCell: ", foundCell);
  const foundCellX = foundCell.p[0];
  const foundCellY = foundCell.p[1];
  return `&x=${foundCellX}&y=${foundCellY}`;
});

// 019
// Custom helper function to get Leaflet Compatible Burg X & Y Position
// This is specifically coded to account for the differnce between Azgaar's FMG & Obsidian Leaflet
// The value this will return will subtract the currentBurg.x from the info.height value
// That should invert the coordinate value so that it works correctly with Obsidian Leaflet
handlebars.registerHelper('getLeafletBurgXY', function(burgId,allBurgs,mapInfo) {
  // console.log("burgId:", burgId);
  // console.log("allBurgs: ", allBurgs);
  if (burgId === undefined || burgId === 0 ) {
    console.log("##### getLeafletBurgXY - burgId was undefined or zero #####");
    return ''; // skip if the element is undefined or zero
  };
  const burgFound = allBurgs.find(burg => burg.i === burgId);
  // console.log("X-burgFound:", burgFound.name, "- mapInfo:", mapInfo);
  const leafletValidXValue = burgFound.x.toFixed(3);
  const leafletValidYValue = (mapInfo.height - burgFound.y).toFixed(3);
  // console.log(burgFound.name, "- leaflet X value: ", leafletValidXValue, " - Leaflet Y value:", leafletValidYValue);
  return `${leafletValidYValue},${leafletValidXValue}`;
});

// 020
// Custom Helper to derive the Leaflet Compatible X & Y Coords of a Cell
handlebars.registerHelper('getCellLeafletXY', function(cellId, allCells, mapInfo) {
  if (cellId === undefined || cellId === 0 ) {
    console.log("##### getCellLeafletXY - cellId was undefined or zero #####");
    return ''; // skip if the element is undefined
  };
  const foundCell = allCells.find(cell => cell.i === cellId);
  // console.log("cellId: ", cellId, " -- foundCell: ", foundCell);
  const foundCellX = foundCell.p[0];
  const foundCellY = foundCell.p[1];
  const leafletW = foundCellX.toFixed(3);
  const leafletH = (mapInfo.height - foundCellY).toFixed(3);
  // console.log("leafletH: ", leafletH, " -- leafletW: ", leafletW);
  return `${leafletH},${leafletW}`;
});

// 021
// Custom Helper to derive the Leaflet Compatible X & Y Coords of the "pole" of a State
// the "pole" is the visual center - Concept Decsription: https://blog.mapbox.com/a-new-algorithm-for-finding-a-visual-center-of-a-polygon-7c77e6492fbc
handlebars.registerHelper('getPoleLeafletXY', function(state, mapInfo) {
  // console.log("getPoleLeafletXY - state: ",state);
  if (state.pole === undefined || state.pole === 0 ) {
    console.log("##### getPoleLeafletXY - state.pole  was undefined or zero -");
    console.log("getPoleLeafletXY - state: ", state);
    console.log("#####");
    return ''; // skip if the element is undefined
  };
  const poleX = state.pole[0];
  const poleY = state.pole[1];
  const leafletW = poleX.toFixed(3);
  const leafletH = (mapInfo.height - poleY).toFixed(3);
  // console.log(state.name,"-POLE- leafletH: ", leafletH, " -- leafletW: ", leafletW);
  return `${leafletH},${leafletW}`;
});

// 022
// Custom helper to calulate the number of followers for a religion
handlebars.registerHelper('getReligionFollowers', function(religion,allCells,allBurgs,mapSettings) {
  if (religion.removed) return "0";
 
  // console.log("religion: ", religion);
  // console.log("allCells: ", allCells);

  var ruralTemp = 0;
  var urbanTemp = 0 ;

  for (cell of allCells) {
    if (cell.h < 20) continue;
    if (cell.religion != religion.i) continue;
    ruralTemp += cell.pop;
    burgId = cell.burg;
    if (burgId) urbanTemp += allBurgs[burgId].population;
  };

  // console.log("rualTemp: ", ruralTemp," - urbanTemp: ", urbanTemp);

  const rural = (ruralTemp * mapSettings.populationRate);
  const urban = (urbanTemp * mapSettings.populationRate * mapSettings.urbanization);
  const foundReligionFollowersRaw = rn(rural + urban);

  // console.log(religion.name, " - foundReligionFollowers: ", foundReligionFollowers);
  let foundReligionFollowers = foundReligionFollowersRaw.toLocaleString();
  return foundReligionFollowers;

    // round value to d decimals
    function rn(v, d = 0) {
      const m = Math.pow(10, d);
      return Math.round(v * m) / m;
    }

});

// 023
// Custom Helper to calculate temperature based on the temperatureScale in the JSON - usually °F or °C
// but other scales are available
handlebars.registerHelper('getTemperature', function(burg,allData) {
  if (burg === undefined || burg.SourceIndex === 0) {
    console.log("##### getTemperature - burg was undefined or zero #####");
    return ''; // skip if the element is undefined
  };
  // console.log(burg.i , " - burgName: ", burg.name);
  const scale = allData.settings.temperatureScale;
  // console.log("Temperature scale: ", scale);
  const temp = allData.grid.cells[allData.pack.cells[burg.cell].g].temp;
  // console.log("Burg Name: ", burg.name, " - temp: ", temp);
 
// FMG utils related to units

// conver temperature from °C to other scales
  const temperatureConversionMap = {
  "°C": temp => rn(temp) + "°C",
  "°F": temp => rn((temp * 9) / 5 + 32) + "°F",
  K: temp => rn(temp + 273.15) + "K",
  "°R": temp => rn(((temp + 273.15) * 9) / 5) + "°R",
  "°De": temp => rn(((100 - temp) * 3) / 2) + "°De",
  "°N": temp => rn((temp * 33) / 100) + "°N",
  "°Ré": temp => rn((temp * 4) / 5) + "°Ré",
  "°Rø": temp => rn((temp * 21) / 40 + 7.5) + "°Rø"
};

const convertedTemperature = convertTemperature(temp, scale);

return convertedTemperature;

  function convertTemperature(temp, scale = temperatureScale.value || "°C") {
   return temperatureConversionMap[scale](temp);
};

    // round value to d decimals
    function rn(v, d = 0) {
      const m = Math.pow(10, d);
      return Math.round(v * m) / m;
    }


})

// 024
// Custom Helper to calculate temperature likeness to Earth temps
// Portions of this code are adapted from the Fantasy Map Generator Code - https://github.com/Azgaar/Fantasy-Map-Generator
handlebars.registerHelper('getTemperatureLikeness', function(burg,allData) {
  if (burg === undefined || burg.SourceIndex === 0) {
    console.log("##### getTemperature - burg was undefined or zero #####");
    return ''; // skip if the element is undefined
  };
  const temperature = allData.grid.cells[allData.pack.cells[burg.cell].g].temp;

  const earthLocale = getTemperatureLikeness(temperature);

  return earthLocale;

  // in °C, array from -1 °C; source: https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
  // These locations are more North American focused
  function getTemperatureLikeness(temperature) {
    if (temperature < -5) return "Iqaluit (Canada)";
    const cities = [
      "Snag (Yukon)", // -5
      "Yellowknife (Canada)", // -4
      "Okhotsk (Russia)", // -3
      "Fairbanks (Alaska)", // -2
      "Nuuk (Greenland)", // -1
      "Whitehorse (Canada)", // 0
      "Arkhangelsk (Russia)", // 1
      "Anchorage (Alaska)", // 2
      "Winnipeg (Canada)", // 3
      "Saskatoon (Canada)", // 4
      "St. John's (Canada)", // 5
      "Saint Pierre (Canada)", // 6
      "Minneapolis (Minnesota)", // 7
      "Milwaukee (Wisconsin)", // 8
      "Chicago (Illinois)", // 9
      "Denver (Colorado)", // 10
      "Seattle (Washington)", // 11
      "New York City (New York)", // 12
      "Baltimore (Maryland)", // 13
      "San Francisco (California) or D.C.", // 14
      "Nashville, (Tennessee)", // 15
      "Sacramento (California)", // 16
      "Memphis (Tennessee)", // 17
      "El Paso (Texas)", // 18
      "Dalls (Texas)", // 19
      "Las Vegas (Nevada)", // 20
      "Tuscon (Arizona)", // 21
      "Tampa (Florida)", // 22
      "Phoenix (Arizona)", // 23
      "Palm Springs (California)", // 24
      "Miami (Florida)", // 25
      "Atlanta (Georgia - Summer)", // 26
      "San Juan (Puerto Rico)", // 27
      "Panama City (Panama)", // 28
      "San Antonio (Texas - Summer)", // 29
      "Austin (Texas - Summer)" // 30
    ];
    if (temperature > 30) return "Death Valley";
    return cities[temperature + 5] || null;
  };

/*
// These locations are globally located
function getTemperatureLikeness(temperature) {
  if (temperature < -5) return "Yakutsk";
  const cities = [
    "Snag (Yukon)", // -5
    "Yellowknife (Canada)", // -4
    "Okhotsk (Russia)", // -3
    "Fairbanks (Alaska)", // -2
    "Nuuk (Greenland)", // -1
    "Murmansk", // 0
    "Arkhangelsk", // 1
    "Anchorage", // 2
    "Tromsø", // 3
    "Reykjavik", // 4
    "Riga", // 5
    "Stockholm", // 6
    "Halifax", // 7
    "Prague", // 8
    "Copenhagen", // 9
    "London", // 10
    "Antwerp", // 11
    "Paris", // 12
    "Milan", // 13
    "Batumi", // 14
    "Rome", // 15
    "Dubrovnik", // 16
    "Lisbon", // 17
    "Barcelona", // 18
    "Marrakesh", // 19
    "Alexandria", // 20
    "Tegucigalpa", // 21
    "Guangzhou", // 22
    "Rio de Janeiro", // 23
    "Dakar", // 24
    "Miami", // 25
    "Jakarta", // 26
    "Mogadishu", // 27
    "Bangkok", // 28
    "Aden", // 29
    "Khartoum" // 30
  ];


*/


})


// 025
// Custom Helper to get a Province ID from a supplied cell
handlebars.registerHelper('getProvinceIdFromCell', function(cell,allCells) {
  // console.log("getProvinceIdFromCell process - passed cell value: ", cell);
  if (cell === undefined || cell === 0) {
    return ''; // skip if cell value is zero or undefined
  };
  const foundCell = allCells.find(c => c.i === cell)
  // console.log("foundCell: ",foundCell);
  const foundCellProvinceId = foundCell.province;
  if (foundCellProvinceId === 0 ) {
    return 'No Province'; // If no Province Defined end here
  };
  // console.log("foundCellProvinceId: ", foundCellProvinceId);
  return foundCellProvinceId;
})

// 026
// Custom Helper to get the path to a State's Capital Burg note
// 026 stateCapitalPath(capitalID,allData)
handlebars.registerHelper('getcapitalFile', function(capitalID,stateID,allData) {
  // console.log("getcapitalFile process - passed state value: ", state);
  if (capitalID === undefined || capitalID === 0) {
    console.log("##### getcapitalFile - capitalID was undefined or zero #####");
    return ''; // skip if state value is zero or undefined
  };
  const stateName = allData.pack.states.find(state => state.i === stateID).name;
  const foundBurg = allData.pack.burgs.find(b => b.i === capitalID);
  // console.log("foundBurg: ",foundBurg);
  const cellId = foundBurg.cell;
  if (cellId === undefined || cellId === 0) {
    console.log("##### getcapitalFile - captial burg cellId was undefined or zero #####");
    return ''; // skip if cellId value is undefined
  };
  const foundCell = allData.pack.cells.find(cell => cell.i === cellId);
  const foundCellProvinceId = foundCell.province;
  if (foundCellProvinceId === 0 || foundCellProvinceId === undefined) {
    return ''; // If no Province Defined end here
  };
  const foundProvinceName = allData.pack.provinces.find(prov => prov.i === foundCellProvinceId).fullName;
  // console.log("burgProvinceNameLookup process - foundProvinceName: ", foundProvinceName);
  const foundBurgNotePath = `${allData.importInfo.thisCampaignPath}/05-Atlas/${allData.info.mapName}/States/${stateName}/Provinces/${foundProvinceName}/Burgs/${foundBurg.name}`;
  // console.log("foundBurgNotePath: ", foundBurgNotePath);
  return foundBurgNotePath;
});

// 027
// Custom Helper to return 'city' or 'village' based on population
handlebars.registerHelper('getBurgType', function(currentBurg, mapSettings) {
  if (!currentBurg === undefined || currentBurg.SourceIndex === 0) {
    console.log("##### getBurgMapLink - currentBurg was undefined or zero #####");
    return ''; // skip if currentCell is undefined
  };
  const {options} = mapSettings;
  const pop = rn(currentBurg.population * mapSettings.populationRate * mapSettings.urbanization);
  if (!options.villageMaxPopulation){
    console.log ("## - JSON does not contain options.villageMaxPopulation - ##");
    return;
  } else if (pop >= options.villageMaxPopulation || currentBurg.citadel || currentBurg.walls || currentBurg.temple || currentBurg.shanty) {
    // console.log("DEBUG - It's a City");
    burgType = 'city';
    return burgType;
  } else {
    // console.log("DEBUG - It's a Village");
    const burgType = 'village';
    return burgType;
  }

    // round value to d decimals
  function rn(v, d = 0) {
    const m = Math.pow(10, d);
    return Math.round(v * m) / m;
  };

  });