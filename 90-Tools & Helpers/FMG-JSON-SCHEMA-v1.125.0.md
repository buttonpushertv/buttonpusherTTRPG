## FMG JSON SCHEMA - v1.125.0 (Economy)

```
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "type": "object",
    "required": [
        "biomesData",
        "grid",
        "info",
        "mapCoordinates",
        "nameBases",
        "notes",
        "pack",
        "settings"
    ],
    "properties": {
        "info": {
            "type": "object",
            "required": [
                "description",
                "exportedAt",
                "height",
                "mapId",
                "mapName",
                "seed",
                "version",
                "width"
            ],
            "properties": {
                "version": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "exportedAt": {
                    "type": "string"
                },
                "mapName": {
                    "type": "string"
                },
                "width": {
                    "type": "integer"
                },
                "height": {
                    "type": "integer"
                },
                "seed": {
                    "type": "string"
                },
                "mapId": {
                    "type": "integer"
                }
            }
        },
        "settings": {
            "type": "object",
            "required": [
                "areaUnit",
                "distanceScale",
                "distanceUnit",
                "heightExponent",
                "heightUnit",
                "hideLabels",
                "latitude",
                "longitude",
                "mapName",
                "mapSize",
                "options",
                "populationRate",
                "prec",
                "rescaleLabels",
                "stylePreset",
                "temperatureScale",
                "urbanDensity",
                "urbanization"
            ],
            "properties": {
                "distanceUnit": {
                    "type": "string"
                },
                "distanceScale": {
                    "type": "string"
                },
                "areaUnit": {
                    "type": "string"
                },
                "heightUnit": {
                    "type": "string"
                },
                "heightExponent": {
                    "type": "string"
                },
                "temperatureScale": {
                    "type": "string"
                },
                "populationRate": {
                    "type": "string"
                },
                "urbanization": {
                    "type": "string"
                },
                "mapSize": {
                    "type": "string"
                },
                "latitude": {
                    "type": "string"
                },
                "longitude": {
                    "type": "string"
                },
                "prec": {
                    "type": "string"
                },
                "options": {
                    "type": "object",
                    "required": [
                        "burgs",
                        "era",
                        "eraShort",
                        "military",
                        "pinNotes",
                        "stateLabelsMode",
                        "temperatureEquator",
                        "temperatureNorthPole",
                        "temperatureSouthPole",
                        "trade",
                        "winds",
                        "year"
                    ],
                    "properties": {
                        "pinNotes": {
                            "type": "boolean"
                        },
                        "winds": {
                            "type": "array",
                            "items": {
                                "type": "integer"
                            }
                        },
                        "temperatureEquator": {
                            "type": "integer"
                        },
                        "temperatureNorthPole": {
                            "type": "integer"
                        },
                        "temperatureSouthPole": {
                            "type": "integer"
                        },
                        "stateLabelsMode": {
                            "type": "string"
                        },
                        "year": {
                            "type": "integer"
                        },
                        "era": {
                            "type": "string"
                        },
                        "eraShort": {
                            "type": "string"
                        },
                        "military": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "icon": {
                                        "type": "string"
                                    },
                                    "name": {
                                        "type": "string"
                                    },
                                    "rural": {
                                        "type": "number"
                                    },
                                    "urban": {
                                        "type": "number"
                                    },
                                    "crew": {
                                        "type": "integer"
                                    },
                                    "power": {
                                        "type": "integer"
                                    },
                                    "type": {
                                        "type": "string"
                                    },
                                    "separate": {
                                        "type": "integer"
                                    }
                                },
                                "required": [
                                    "crew",
                                    "icon",
                                    "name",
                                    "power",
                                    "rural",
                                    "separate",
                                    "type",
                                    "urban"
                                ]
                            }
                        },
                        "burgs": {
                            "type": "object",
                            "required": [
                                "groups"
                            ],
                            "properties": {
                                "groups": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "name": {
                                                "type": "string"
                                            },
                                            "active": {
                                                "type": "boolean"
                                            },
                                            "order": {
                                                "type": "integer"
                                            },
                                            "isDefault": {
                                                "type": "boolean"
                                            },
                                            "preview": {
                                                "type": "string"
                                            }
                                        },
                                        "required": [
                                            "active",
                                            "isDefault",
                                            "name",
                                            "order",
                                            "preview"
                                        ]
                                    }
                                }
                            }
                        },
                        "trade": {
                            "type": "object",
                            "required": [
                                "animation"
                            ],
                            "properties": {
                                "animation": {
                                    "type": "object",
                                    "required": [
                                        "concurrent",
                                        "displayType",
                                        "duration",
                                        "landDurationModifier",
                                        "markerSize",
                                        "segmentChangePause"
                                    ],
                                    "properties": {
                                        "displayType": {
                                            "type": "string"
                                        },
                                        "concurrent": {
                                            "type": "integer"
                                        },
                                        "duration": {
                                            "type": "integer"
                                        },
                                        "landDurationModifier": {
                                            "type": "integer"
                                        },
                                        "segmentChangePause": {
                                            "type": "integer"
                                        },
                                        "markerSize": {
                                            "type": "integer"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "mapName": {
                    "type": "string"
                },
                "hideLabels": {
                    "type": "boolean"
                },
                "stylePreset": {
                    "type": "string"
                },
                "rescaleLabels": {
                    "type": "boolean"
                },
                "urbanDensity": {
                    "type": "integer"
                }
            }
        },
        "mapCoordinates": {
            "type": "object",
            "required": [
                "latN",
                "latS",
                "latT",
                "lonE",
                "lonT",
                "lonW"
            ],
            "properties": {
                "latT": {
                    "type": "integer"
                },
                "latN": {
                    "type": "integer"
                },
                "latS": {
                    "type": "integer"
                },
                "lonT": {
                    "type": "number"
                },
                "lonW": {
                    "type": "integer"
                },
                "lonE": {
                    "type": "number"
                }
            }
        },
        "pack": {
            "type": "object",
            "required": [
                "burgs",
                "cells",
                "cultures",
                "deals",
                "features",
                "goods",
                "markers",
                "markets",
                "provinces",
                "religions",
                "rivers",
                "routes",
                "states",
                "vertices",
                "zones"
            ],
            "properties": {
                "cells": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "i": {
                                "type": "integer"
                            },
                            "v": {
                                "type": "array",
                                "items": {
                                    "type": "integer"
                                }
                            },
                            "c": {
                                "type": "array",
                                "items": {
                                    "type": "integer"
                                }
                            },
                            "p": {
                                "type": "array",
                                "items": {
                                    "type": "number"
                                }
                            },
                            "g": {
                                "type": "integer"
                            },
                            "h": {
                                "type": "integer"
                            },
                            "area": {
                                "type": "integer"
                            },
                            "f": {
                                "type": "integer"
                            },
                            "t": {
                                "type": "integer"
                            },
                            "haven": {
                                "type": "integer"
                            },
                            "harbor": {
                                "type": "integer"
                            },
                            "fl": {
                                "type": "integer"
                            },
                            "r": {
                                "type": "integer"
                            },
                            "conf": {
                                "type": "integer"
                            },
                            "biome": {
                                "type": "integer"
                            },
                            "s": {
                                "type": "integer"
                            },
                            "pop": {
                                "type": "number"
                            },
                            "culture": {
                                "type": "integer"
                            },
                            "burg": {
                                "type": "integer"
                            },
                            "state": {
                                "type": "integer"
                            },
                            "religion": {
                                "type": "integer"
                            },
                            "province": {
                                "type": "integer"
                            },
                            "routes": {
                                "type": "object",
                                "properties": {
                                    "6093": {
                                        "type": "integer"
                                    }
                                },
                                "required": [
                                ]
                            }
                        },
                        "required": [
                            "area",
                            "biome",
                            "burg",
                            "c",
                            "conf",
                            "culture",
                            "f",
                            "fl",
                            "g",
                            "h",
                            "harbor",
                            "haven",
                            "i",
                            "p",
                            "pop",
                            "province",
                            "r",
                            "religion",
                            "s",
                            "state",
                            "t",
                            "v"
                        ]
                    }
                },
                "vertices": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "i": {
                                "type": "integer"
                            },
                            "p": {
                                "type": "array",
                                "items": {
                                    "type": "integer"
                                }
                            },
                            "v": {
                                "type": "array",
                                "items": {
                                    "type": "integer"
                                }
                            },
                            "c": {
                                "type": "array",
                                "items": {
                                    "type": "integer"
                                }
                            }
                        },
                        "required": [
                            "c",
                            "i",
                            "p",
                            "v"
                        ]
                    }
                },
                "features": {
                    "type": "array",
                    "items": {
                        "anyOf": [
                            {
                                "type": "integer"
                            },
                            {
                                "type": "object",
                                "properties": {
                                    "i": {
                                        "type": "integer"
                                    },
                                    "type": {
                                        "type": "string"
                                    },
                                    "land": {
                                        "type": "boolean"
                                    },
                                    "border": {
                                        "type": "boolean"
                                    },
                                    "cells": {
                                        "type": "integer"
                                    },
                                    "firstCell": {
                                        "type": "integer"
                                    },
                                    "vertices": {
                                        "type": "array",
                                        "items": {
                                            "type": "integer"
                                        }
                                    },
                                    "area": {
                                        "type": "integer"
                                    },
                                    "group": {
                                        "type": "string"
                                    },
                                    "shoreline": {
                                        "type": "array",
                                        "items": {
                                            "type": "integer"
                                        }
                                    },
                                    "height": {
                                        "type": "number"
                                    },
                                    "flux": {
                                        "type": "integer"
                                    },
                                    "temp": {
                                        "type": "number"
                                    },
                                    "evaporation": {
                                        "type": "integer"
                                    },
                                    "outlet": {
                                        "type": "integer"
                                    },
                                    "name": {
                                        "type": "string"
                                    },
                                    "inlets": {
                                        "type": "array",
                                        "items": {
                                            "type": "integer"
                                        }
                                    }
                                },
                                "required": [
                                    "area",
                                    "border",
                                    "cells",
                                    "firstCell",
                                    "i",
                                    "land",
                                    "type",
                                    "vertices"
                                ]
                            }
                        ]
                    }
                },
                "cultures": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "name": {
                                "type": "string"
                            },
                            "i": {
                                "type": "integer"
                            },
                            "base": {
                                "type": "integer"
                            },
                            "origins": {
                                "type": "array",
                                "items": {
                                    "type": [
                                        "integer",
                                        "null"
                                    ]
                                }
                            },
                            "shield": {
                                "type": "string"
                            },
                            "center": {
                                "type": "integer"
                            },
                            "color": {
                                "type": "string"
                            },
                            "type": {
                                "type": "string"
                            },
                            "expansionism": {
                                "type": "number"
                            },
                            "code": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "base",
                            "i",
                            "name",
                            "origins",
                            "shield"
                        ]
                    }
                },
                "burgs": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "cell": {
                                "type": "integer"
                            },
                            "x": {
                                "type": "number"
                            },
                            "y": {
                                "type": "number"
                            },
                            "state": {
                                "type": "integer"
                            },
                            "i": {
                                "type": "integer"
                            },
                            "culture": {
                                "type": "integer"
                            },
                            "name": {
                                "type": "string"
                            },
                            "feature": {
                                "type": "integer"
                            },
                            "capital": {
                                "type": "integer"
                            },
                            "port": {
                                "type": "integer"
                            },
                            "population": {
                                "type": "number"
                            },
                            "type": {
                                "type": "string"
                            },
                            "coa": {
                                "type": "object",
                                "properties": {
                                    "t1": {
                                        "type": "string"
                                    },
                                    "shield": {
                                        "type": "string"
                                    },
                                    "charges": {
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                            "properties": {
                                                "charge": {
                                                    "type": "string"
                                                },
                                                "t": {
                                                    "type": "string"
                                                },
                                                "p": {
                                                    "type": "string"
                                                },
                                                "size": {
                                                    "type": "number"
                                                },
                                                "t2": {
                                                    "type": "string"
                                                },
                                                "t3": {
                                                    "type": "string"
                                                },
                                                "divided": {
                                                    "type": "string"
                                                },
                                                "sinister": {
                                                    "type": "integer"
                                                },
                                                "reversed": {
                                                    "type": "integer"
                                                }
                                            },
                                            "required": [
                                                "charge",
                                                "p",
                                                "size",
                                                "t"
                                            ]
                                        }
                                    },
                                    "ordinaries": {
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                            "properties": {
                                                "ordinary": {
                                                    "type": "string"
                                                },
                                                "t": {
                                                    "type": "string"
                                                },
                                                "line": {
                                                    "type": "string"
                                                },
                                                "divided": {
                                                    "type": "string"
                                                }
                                            },
                                            "required": [
                                                "ordinary",
                                                "t"
                                            ]
                                        }
                                    },
                                    "division": {
                                        "type": "object",
                                        "properties": {
                                            "division": {
                                                "type": "string"
                                            },
                                            "t": {
                                                "type": "string"
                                            },
                                            "line": {
                                                "type": "string"
                                            }
                                        },
                                        "required": [
                                            "division",
                                            "t"
                                        ]
                                    }
                                },
                                "required": [
                                    "shield",
                                    "t1"
                                ]
                            },
                            "citadel": {
                                "type": "integer"
                            },
                            "plaza": {
                                "type": "integer"
                            },
                            "walls": {
                                "type": "integer"
                            },
                            "shanty": {
                                "type": "integer"
                            },
                            "temple": {
                                "type": "integer"
                            },
                            "group": {
                                "type": "string"
                            },
                            "market": {
                                "type": "integer"
                            },
                            "treasury": {
                                "type": "number"
                            },
                            "product": {
                                "type": "number"
                            },
                            "production": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "dealId": {
                                            "type": "integer"
                                        },
                                        "goodId": {
                                            "type": "integer"
                                        },
                                        "units": {
                                            "type": "number"
                                        },
                                        "recipe": {
                                            "type": "array",
                                            "items": {
                                                "type": "object",
                                                "properties": {
                                                    "goodId": {
                                                        "type": "integer"
                                                    },
                                                    "units": {
                                                        "type": "number"
                                                    }
                                                },
                                                "required": [
                                                    "goodId",
                                                    "units"
                                                ]
                                            }
                                        },
                                        "cultureModifier": {
                                            "type": "number"
                                        }
                                    },
                                    "required": [
                                    ]
                                }
                            }
                        },
                        "required": [
                        ]
                    }
                },
                "states": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "i": {
                                "type": "integer"
                            },
                            "name": {
                                "type": "string"
                            },
                            "urban": {
                                "type": "number"
                            },
                            "rural": {
                                "type": "number"
                            },
                            "burgs": {
                                "type": "integer"
                            },
                            "area": {
                                "type": "integer"
                            },
                            "cells": {
                                "type": "integer"
                            },
                            "neighbors": {
                                "type": "array",
                                "items": {
                                    "type": "integer"
                                }
                            },
                            "diplomacy": {
                                "type": "array",
                                "items": {
                                    "anyOf": [
                                        {
                                            "type": "array",
                                            "items": {
                                                "type": "string"
                                            }
                                        },
                                        {
                                            "type": "string"
                                        }
                                    ]
                                }
                            },
                            "provinces": {
                                "type": "array",
                                "items": {
                                    "type": "integer"
                                }
                            },
                            "salesTax": {
                                "type": "number"
                            },
                            "pollTax": {
                                "type": "number"
                            },
                            "treasury": {
                                "type": "number"
                            },
                            "color": {
                                "type": "string"
                            },
                            "expansionism": {
                                "type": "number"
                            },
                            "capital": {
                                "type": "integer"
                            },
                            "type": {
                                "type": "string"
                            },
                            "center": {
                                "type": "integer"
                            },
                            "culture": {
                                "type": "integer"
                            },
                            "coa": {
                                "type": "object",
                                "properties": {
                                    "t1": {
                                        "type": "string"
                                    },
                                    "shield": {
                                        "type": "string"
                                    },
                                    "charges": {
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                            "properties": {
                                                "charge": {
                                                    "type": "string"
                                                },
                                                "t": {
                                                    "type": "string"
                                                },
                                                "p": {
                                                    "type": "string"
                                                },
                                                "size": {
                                                    "type": "number"
                                                },
                                                "t2": {
                                                    "type": "string"
                                                },
                                                "t3": {
                                                    "type": "string"
                                                },
                                                "divided": {
                                                    "type": "string"
                                                }
                                            },
                                            "required": [
                                                "charge",
                                                "p",
                                                "size",
                                                "t"
                                            ]
                                        }
                                    },
                                    "division": {
                                        "type": "object",
                                        "properties": {
                                            "division": {
                                                "type": "string"
                                            },
                                            "t": {
                                                "type": "string"
                                            },
                                            "line": {
                                                "type": "string"
                                            }
                                        },
                                        "required": [
                                            "division",
                                            "line",
                                            "t"
                                        ]
                                    },
                                    "ordinaries": {
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                            "properties": {
                                                "ordinary": {
                                                    "type": "string"
                                                },
                                                "t": {
                                                    "type": "string"
                                                },
                                                "line": {
                                                    "type": "string"
                                                }
                                            },
                                            "required": [
                                                "ordinary",
                                                "t"
                                            ]
                                        }
                                    }
                                },
                                "required": [
                                    "shield",
                                    "t1"
                                ]
                            },
                            "pole": {
                                "type": "array",
                                "items": {
                                    "type": "integer"
                                }
                            },
                            "campaigns": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "name": {
                                            "type": "string"
                                        },
                                        "start": {
                                            "type": "integer"
                                        },
                                        "end": {
                                            "type": "integer"
                                        },
                                        "attacker": {
                                            "type": "integer"
                                        },
                                        "defender": {
                                            "type": "integer"
                                        }
                                    },
                                    "required": [
                                        "name",
                                        "start"
                                    ]
                                }
                            },
                            "form": {
                                "type": "string"
                            },
                            "formName": {
                                "type": "string"
                            },
                            "fullName": {
                                "type": "string"
                            },
                            "alert": {
                                "type": "number"
                            },
                            "military": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "i": {
                                            "type": "integer"
                                        },
                                        "a": {
                                            "type": "integer"
                                        },
                                        "cell": {
                                            "type": "integer"
                                        },
                                        "x": {
                                            "type": "number"
                                        },
                                        "y": {
                                            "type": "number"
                                        },
                                        "bx": {
                                            "type": "number"
                                        },
                                        "by": {
                                            "type": "number"
                                        },
                                        "u": {
                                            "type": "object",
                                            "properties": {
                                                "archers": {
                                                    "type": "integer"
                                                },
                                                "cavalry": {
                                                    "type": "integer"
                                                },
                                                "artillery": {
                                                    "type": "integer"
                                                },
                                                "infantry": {
                                                    "type": "integer"
                                                },
                                                "fleet": {
                                                    "type": "integer"
                                                }
                                            },
                                            "required": [
                                            ]
                                        },
                                        "n": {
                                            "type": "integer"
                                        },
                                        "name": {
                                            "type": "string"
                                        },
                                        "state": {
                                            "type": "integer"
                                        },
                                        "icon": {
                                            "type": "string"
                                        }
                                    },
                                    "required": [
                                        "a",
                                        "bx",
                                        "by",
                                        "cell",
                                        "i",
                                        "icon",
                                        "n",
                                        "name",
                                        "state",
                                        "u",
                                        "x",
                                        "y"
                                    ]
                                }
                            }
                        },
                        "required": [
                            "area",
                            "burgs",
                            "cells",
                            "diplomacy",
                            "i",
                            "name",
                            "neighbors",
                            "pollTax",
                            "provinces",
                            "rural",
                            "salesTax",
                            "treasury",
                            "urban"
                        ]
                    }
                },
                "provinces": {
                    "type": "array",
                    "items": {
                        "anyOf": [
                            {
                                "type": "integer"
                            },
                            {
                                "type": "object",
                                "properties": {
                                    "i": {
                                        "type": "integer"
                                    },
                                    "state": {
                                        "type": "integer"
                                    },
                                    "center": {
                                        "type": "integer"
                                    },
                                    "burg": {
                                        "type": "integer"
                                    },
                                    "name": {
                                        "type": "string"
                                    },
                                    "formName": {
                                        "type": "string"
                                    },
                                    "fullName": {
                                        "type": "string"
                                    },
                                    "color": {
                                        "type": "string"
                                    },
                                    "coa": {
                                        "type": "object",
                                        "properties": {
                                            "t1": {
                                                "type": "string"
                                            },
                                            "shield": {
                                                "type": "string"
                                            },
                                            "ordinaries": {
                                                "type": "array",
                                                "items": {
                                                    "type": "object",
                                                    "properties": {
                                                        "ordinary": {
                                                            "type": "string"
                                                        },
                                                        "t": {
                                                            "type": "string"
                                                        },
                                                        "line": {
                                                            "type": "string"
                                                        },
                                                        "divided": {
                                                            "type": "string"
                                                        }
                                                    },
                                                    "required": [
                                                        "ordinary",
                                                        "t"
                                                    ]
                                                }
                                            },
                                            "charges": {
                                                "type": "array",
                                                "items": {
                                                    "type": "object",
                                                    "properties": {
                                                        "charge": {
                                                            "type": "string"
                                                        },
                                                        "t": {
                                                            "type": "string"
                                                        },
                                                        "p": {
                                                            "type": "string"
                                                        },
                                                        "size": {
                                                            "type": "number"
                                                        },
                                                        "t2": {
                                                            "type": "string"
                                                        },
                                                        "divided": {
                                                            "type": "string"
                                                        },
                                                        "t3": {
                                                            "type": "string"
                                                        },
                                                        "sinister": {
                                                            "type": "integer"
                                                        }
                                                    },
                                                    "required": [
                                                        "charge",
                                                        "p",
                                                        "size",
                                                        "t"
                                                    ]
                                                }
                                            },
                                            "division": {
                                                "type": "object",
                                                "properties": {
                                                    "division": {
                                                        "type": "string"
                                                    },
                                                    "t": {
                                                        "type": "string"
                                                    },
                                                    "line": {
                                                        "type": "string"
                                                    }
                                                },
                                                "required": [
                                                    "division",
                                                    "t"
                                                ]
                                            }
                                        },
                                        "required": [
                                            "shield",
                                            "t1"
                                        ]
                                    },
                                    "pole": {
                                        "type": "array",
                                        "items": {
                                            "type": "integer"
                                        }
                                    },
                                    "urban": {
                                        "type": "number"
                                    },
                                    "rural": {
                                        "type": "number"
                                    },
                                    "area": {
                                        "type": "integer"
                                    },
                                    "burgs": {
                                        "type": "array",
                                        "items": {
                                            "type": "integer"
                                        }
                                    }
                                },
                                "required": [
                                    "area",
                                    "burg",
                                    "burgs",
                                    "center",
                                    "coa",
                                    "color",
                                    "formName",
                                    "fullName",
                                    "i",
                                    "name",
                                    "pole",
                                    "rural",
                                    "state",
                                    "urban"
                                ]
                            }
                        ]
                    }
                },
                "religions": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "name": {
                                "type": "string"
                            },
                            "i": {
                                "type": "integer"
                            },
                            "origins": {
                                "anyOf": [
                                    {
                                        "type": "array",
                                        "items": {
                                            "type": "integer"
                                        }
                                    },
                                    {
                                        "type": "null"
                                    }
                                ]
                            },
                            "type": {
                                "type": "string"
                            },
                            "form": {
                                "type": "string"
                            },
                            "culture": {
                                "type": "integer"
                            },
                            "center": {
                                "type": "integer"
                            },
                            "deity": {
                                "type": [
                                    "null",
                                    "string"
                                ]
                            },
                            "expansion": {
                                "type": "string"
                            },
                            "expansionism": {
                                "type": "number"
                            },
                            "color": {
                                "type": "string"
                            },
                            "code": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "i",
                            "name",
                            "origins"
                        ]
                    }
                },
                "rivers": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "i": {
                                "type": "integer"
                            },
                            "source": {
                                "type": "integer"
                            },
                            "mouth": {
                                "type": "integer"
                            },
                            "discharge": {
                                "type": "integer"
                            },
                            "length": {
                                "type": "number"
                            },
                            "width": {
                                "type": "number"
                            },
                            "widthFactor": {
                                "type": "number"
                            },
                            "sourceWidth": {
                                "type": "number"
                            },
                            "parent": {
                                "type": "integer"
                            },
                            "cells": {
                                "type": "array",
                                "items": {
                                    "type": "integer"
                                }
                            },
                            "basin": {
                                "type": "integer"
                            },
                            "name": {
                                "type": "string"
                            },
                            "type": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "basin",
                            "cells",
                            "discharge",
                            "i",
                            "length",
                            "mouth",
                            "name",
                            "parent",
                            "source",
                            "sourceWidth",
                            "type",
                            "width",
                            "widthFactor"
                        ]
                    }
                },
                "goods": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "i": {
                                "type": "integer"
                            },
                            "name": {
                                "type": "string"
                            },
                            "tags": {
                                "type": "array",
                                "items": {
                                    "type": "string"
                                }
                            },
                            "icon": {
                                "type": "string"
                            },
                            "color": {
                                "type": "string"
                            },
                            "value": {
                                "type": "integer"
                            },
                            "chance": {
                                "type": "integer"
                            },
                            "unit": {
                                "type": "string"
                            },
                            "recipes": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "14": {
                                            "type": "integer"
                                        },
                                        "12": {
                                            "type": "integer"
                                        },
                                        "37": {
                                            "type": "number"
                                        },
                                        "47": {
                                            "type": "number"
                                        },
                                        "46": {
                                            "type": "number"
                                        },
                                        "10": {
                                            "type": "number"
                                        },
                                        "15": {
                                            "type": "number"
                                        },
                                        "35": {
                                            "type": "integer"
                                        },
                                        "1": {
                                            "type": "number"
                                        },
                                        "13": {
                                            "type": "integer"
                                        },
                                        "56": {
                                            "type": "number"
                                        },
                                        "9": {
                                            "type": "integer"
                                        },
                                        "30": {
                                            "type": "number"
                                        },
                                        "65": {
                                            "type": "number"
                                        },
                                        "16": {
                                            "type": "number"
                                        },
                                        "8": {
                                            "type": "number"
                                        },
                                        "7": {
                                            "type": "integer"
                                        },
                                        "34": {
                                            "type": "number"
                                        },
                                        "4": {
                                            "type": "number"
                                        },
                                        "57": {
                                            "type": "number"
                                        },
                                        "43": {
                                            "type": "number"
                                        },
                                        "5": {
                                            "type": "number"
                                        },
                                        "29": {
                                            "type": "number"
                                        },
                                        "44": {
                                            "type": "number"
                                        },
                                        "24": {
                                            "type": "number"
                                        },
                                        "21": {
                                            "type": "integer"
                                        },
                                        "18": {
                                            "type": "integer"
                                        },
                                        "20": {
                                            "type": "integer"
                                        },
                                        "26": {
                                            "type": "number"
                                        },
                                        "41": {
                                            "type": "integer"
                                        },
                                        "42": {
                                            "type": "integer"
                                        },
                                        "50": {
                                            "type": "number"
                                        },
                                        "49": {
                                            "type": "integer"
                                        },
                                        "32": {
                                            "type": "integer"
                                        },
                                        "48": {
                                            "type": "integer"
                                        },
                                        "52": {
                                            "type": "integer"
                                        },
                                        "6": {
                                            "type": "number"
                                        },
                                        "33": {
                                            "type": "number"
                                        },
                                        "28": {
                                            "type": "integer"
                                        },
                                        "22": {
                                            "type": "integer"
                                        },
                                        "23": {
                                            "type": "integer"
                                        },
                                        "11": {
                                            "type": "integer"
                                        },
                                        "25": {
                                            "type": "number"
                                        },
                                        "68": {
                                            "type": "number"
                                        }
                                    },
                                    "required": [
                                    ]
                                }
                            },
                            "demandCoverage": {
                                "type": "object",
                                "properties": {
                                    "luxury": {
                                        "type": "number"
                                    },
                                    "utilities": {
                                        "type": "number"
                                    },
                                    "food": {
                                        "type": "number"
                                    },
                                    "military": {
                                        "type": "number"
                                    },
                                    "construction": {
                                        "type": "number"
                                    }
                                },
                                "required": [
                                ]
                            },
                            "multipliers": {
                                "type": "object",
                                "properties": {
                                    "cultureType": {
                                        "type": "object",
                                        "properties": {
                                            "Highland": {
                                                "type": "number"
                                            },
                                            "Nomadic": {
                                                "type": "number"
                                            },
                                            "Naval": {
                                                "type": "number"
                                            },
                                            "Hunting": {
                                                "type": "number"
                                            },
                                            "River": {
                                                "type": "number"
                                            },
                                            "Lake": {
                                                "type": "number"
                                            },
                                            "Generic": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                        ]
                                    }
                                },
                                "required": [
                                    "cultureType"
                                ]
                            },
                            "distribution": {
                                "type": "string"
                            },
                            "biomeOutput": {
                                "type": "object",
                                "properties": {
                                    "4": {
                                        "type": "number"
                                    },
                                    "6": {
                                        "type": "number"
                                    },
                                    "8": {
                                        "type": "number"
                                    },
                                    "9": {
                                        "type": "number"
                                    },
                                    "12": {
                                        "type": "number"
                                    },
                                    "7": {
                                        "type": "number"
                                    },
                                    "1": {
                                        "type": "number"
                                    },
                                    "2": {
                                        "type": "number"
                                    },
                                    "5": {
                                        "type": "number"
                                    },
                                    "3": {
                                        "type": "number"
                                    },
                                    "10": {
                                        "type": "number"
                                    }
                                },
                                "required": [
                                ]
                            }
                        },
                        "required": [
                            "chance",
                            "color",
                            "i",
                            "icon",
                            "name",
                            "tags",
                            "unit",
                            "value"
                        ]
                    }
                },
                "markers": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "icon": {
                                "type": "string"
                            },
                            "type": {
                                "type": "string"
                            },
                            "x": {
                                "type": "number"
                            },
                            "y": {
                                "type": "number"
                            },
                            "cell": {
                                "type": "integer"
                            },
                            "i": {
                                "type": "integer"
                            },
                            "dx": {
                                "type": "integer"
                            },
                            "px": {
                                "type": "integer"
                            },
                            "dy": {
                                "type": "integer"
                            }
                        },
                        "required": [
                            "cell",
                            "i",
                            "icon",
                            "type",
                            "x",
                            "y"
                        ]
                    }
                },
                "markets": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "i": {
                                "type": "integer"
                            },
                            "centerBurgId": {
                                "type": "integer"
                            },
                            "color": {
                                "type": "string"
                            },
                            "goods": {
                                "type": "object",
                                "properties": {
                                    "1": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "2": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "3": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "4": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "5": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "6": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "7": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "8": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "integer"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "9": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "10": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "11": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "12": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "13": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "14": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "15": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "16": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "17": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "18": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "19": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "20": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "integer"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "21": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "22": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "23": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "24": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "25": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "integer"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "26": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "27": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "integer"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "28": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "29": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "30": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "31": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "32": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "integer"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "33": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "34": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "35": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "36": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "37": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "38": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "39": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "40": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "41": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "42": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "43": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "44": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "45": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "46": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "47": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "48": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "49": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "50": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "51": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "52": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "integer"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "53": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "54": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "55": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "integer"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "56": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "57": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "58": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "59": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "60": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "integer"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "61": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "62": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "63": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "64": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "65": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "66": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "67": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "68": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "69": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "70": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    },
                                    "71": {
                                        "type": "object",
                                        "properties": {
                                            "stock": {
                                                "type": "number"
                                            },
                                            "price": {
                                                "type": "number"
                                            }
                                        },
                                        "required": [
                                            "price",
                                            "stock"
                                        ]
                                    }
                                },
                                "required": [
                                    "1",
                                    "10",
                                    "11",
                                    "12",
                                    "13",
                                    "14",
                                    "15",
                                    "16",
                                    "17",
                                    "18",
                                    "19",
                                    "2",
                                    "20",
                                    "21",
                                    "22",
                                    "23",
                                    "24",
                                    "25",
                                    "26",
                                    "27",
                                    "28",
                                    "29",
                                    "3",
                                    "30",
                                    "31",
                                    "32",
                                    "33",
                                    "34",
                                    "35",
                                    "36",
                                    "37",
                                    "38",
                                    "39",
                                    "4",
                                    "40",
                                    "41",
                                    "42",
                                    "43",
                                    "44",
                                    "45",
                                    "46",
                                    "47",
                                    "48",
                                    "49",
                                    "5",
                                    "50",
                                    "51",
                                    "52",
                                    "53",
                                    "54",
                                    "55",
                                    "56",
                                    "57",
                                    "58",
                                    "59",
                                    "6",
                                    "60",
                                    "61",
                                    "62",
                                    "63",
                                    "64",
                                    "65",
                                    "66",
                                    "67",
                                    "68",
                                    "69",
                                    "7",
                                    "70",
                                    "71",
                                    "8",
                                    "9"
                                ]
                            }
                        },
                        "required": [
                            "centerBurgId",
                            "color",
                            "goods",
                            "i"
                        ]
                    }
                },
                "deals": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "i": {
                                "type": "integer"
                            },
                            "seller": {
                                "type": "integer"
                            },
                            "sellerType": {
                                "type": "string"
                            },
                            "buyer": {
                                "type": "integer"
                            },
                            "buyerType": {
                                "type": "string"
                            },
                            "good": {
                                "type": "integer"
                            },
                            "units": {
                                "type": "number"
                            },
                            "price": {
                                "type": "number"
                            },
                            "tax": {
                                "type": "number"
                            }
                        },
                        "required": [
                            "buyer",
                            "buyerType",
                            "good",
                            "i",
                            "price",
                            "seller",
                            "sellerType",
                            "tax",
                            "units"
                        ]
                    }
                },
                "routes": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "i": {
                                "type": "integer"
                            },
                            "group": {
                                "type": "string"
                            },
                            "feature": {
                                "type": "integer"
                            },
                            "points": {
                                "type": "array",
                                "items": {
                                    "type": "array",
                                    "items": {
                                        "type": "number"
                                    }
                                }
                            }
                        },
                        "required": [
                            "feature",
                            "group",
                            "i",
                            "points"
                        ]
                    }
                },
                "zones": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "i": {
                                "type": "integer"
                            },
                            "name": {
                                "type": "string"
                            },
                            "type": {
                                "type": "string"
                            },
                            "cells": {
                                "type": "array",
                                "items": {
                                    "type": "integer"
                                }
                            },
                            "color": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "cells",
                            "color",
                            "i",
                            "name",
                            "type"
                        ]
                    }
                }
            }
        },
        "grid": {
            "type": "object",
            "required": [
                "boundary",
                "cells",
                "cellsDesired",
                "cellsX",
                "cellsY",
                "features",
                "points",
                "spacing",
                "vertices"
            ],
            "properties": {
                "cells": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "i": {
                                "type": "integer"
                            },
                            "v": {
                                "type": "array",
                                "items": {
                                    "type": "integer"
                                }
                            },
                            "c": {
                                "type": "array",
                                "items": {
                                    "type": "integer"
                                }
                            },
                            "b": {
                                "type": "integer"
                            },
                            "f": {
                                "type": "integer"
                            },
                            "t": {
                                "type": "integer"
                            },
                            "h": {
                                "type": "integer"
                            },
                            "temp": {
                                "type": "integer"
                            },
                            "prec": {
                                "type": "integer"
                            }
                        },
                        "required": [
                            "b",
                            "c",
                            "f",
                            "h",
                            "i",
                            "prec",
                            "t",
                            "temp",
                            "v"
                        ]
                    }
                },
                "vertices": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "i": {
                                "type": "integer"
                            },
                            "p": {
                                "type": "array",
                                "items": {
                                    "type": "integer"
                                }
                            },
                            "v": {
                                "type": "array",
                                "items": {
                                    "type": "integer"
                                }
                            },
                            "c": {
                                "type": "array",
                                "items": {
                                    "type": "integer"
                                }
                            }
                        },
                        "required": [
                            "c",
                            "i",
                            "p",
                            "v"
                        ]
                    }
                },
                "cellsDesired": {
                    "type": "integer"
                },
                "spacing": {
                    "type": "number"
                },
                "cellsY": {
                    "type": "integer"
                },
                "cellsX": {
                    "type": "integer"
                },
                "points": {
                    "type": "array",
                    "items": {
                        "type": "array",
                        "items": {
                            "type": "number"
                        }
                    }
                },
                "boundary": {
                    "type": "array",
                    "items": {
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                },
                "features": {
                    "type": "array",
                    "items": {
                        "anyOf": [
                            {
                                "type": "integer"
                            },
                            {
                                "type": "object",
                                "properties": {
                                    "i": {
                                        "type": "integer"
                                    },
                                    "type": {
                                        "type": "string"
                                    },
                                    "land": {
                                        "type": "boolean"
                                    },
                                    "border": {
                                        "type": "boolean"
                                    },
                                    "cells": {
                                        "type": "integer"
                                    },
                                    "firstCell": {
                                        "type": "integer"
                                    },
                                    "vertices": {
                                        "type": "array",
                                        "items": {
                                            "type": "integer"
                                        }
                                    },
                                    "area": {
                                        "type": "integer"
                                    },
                                    "group": {
                                        "type": "string"
                                    },
                                    "shoreline": {
                                        "type": "array",
                                        "items": {
                                            "type": "integer"
                                        }
                                    },
                                    "height": {
                                        "type": "number"
                                    },
                                    "flux": {
                                        "type": "integer"
                                    },
                                    "temp": {
                                        "type": "number"
                                    },
                                    "evaporation": {
                                        "type": "integer"
                                    },
                                    "outlet": {
                                        "type": "integer"
                                    },
                                    "name": {
                                        "type": "string"
                                    },
                                    "inlets": {
                                        "type": "array",
                                        "items": {
                                            "type": "integer"
                                        }
                                    }
                                },
                                "required": [
                                    "area",
                                    "border",
                                    "cells",
                                    "firstCell",
                                    "i",
                                    "land",
                                    "type",
                                    "vertices"
                                ]
                            }
                        ]
                    }
                }
            }
        },
        "biomesData": {
            "type": "object",
            "required": [
                "biomesMatrix",
                "color",
                "cost",
                "habitability",
                "i",
                "icons",
                "iconsDensity",
                "name"
            ],
            "properties": {
                "i": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    }
                },
                "name": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "color": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "biomesMatrix": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "0": {
                                "type": "integer"
                            },
                            "1": {
                                "type": "integer"
                            },
                            "2": {
                                "type": "integer"
                            },
                            "3": {
                                "type": "integer"
                            },
                            "4": {
                                "type": "integer"
                            },
                            "5": {
                                "type": "integer"
                            },
                            "6": {
                                "type": "integer"
                            },
                            "7": {
                                "type": "integer"
                            },
                            "8": {
                                "type": "integer"
                            },
                            "9": {
                                "type": "integer"
                            },
                            "10": {
                                "type": "integer"
                            },
                            "11": {
                                "type": "integer"
                            },
                            "12": {
                                "type": "integer"
                            },
                            "13": {
                                "type": "integer"
                            },
                            "14": {
                                "type": "integer"
                            },
                            "15": {
                                "type": "integer"
                            },
                            "16": {
                                "type": "integer"
                            },
                            "17": {
                                "type": "integer"
                            },
                            "18": {
                                "type": "integer"
                            },
                            "19": {
                                "type": "integer"
                            },
                            "20": {
                                "type": "integer"
                            },
                            "21": {
                                "type": "integer"
                            },
                            "22": {
                                "type": "integer"
                            },
                            "23": {
                                "type": "integer"
                            },
                            "24": {
                                "type": "integer"
                            },
                            "25": {
                                "type": "integer"
                            }
                        },
                        "required": [
                            "0",
                            "1",
                            "10",
                            "11",
                            "12",
                            "13",
                            "14",
                            "15",
                            "16",
                            "17",
                            "18",
                            "19",
                            "2",
                            "20",
                            "21",
                            "22",
                            "23",
                            "24",
                            "25",
                            "3",
                            "4",
                            "5",
                            "6",
                            "7",
                            "8",
                            "9"
                        ]
                    }
                },
                "habitability": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    }
                },
                "iconsDensity": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    }
                },
                "icons": {
                    "type": "array",
                    "items": {
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    }
                },
                "cost": {
                    "type": "array",
                    "items": {
                        "type": "integer"
                    }
                }
            }
        },
        "notes": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "string"
                    },
                    "name": {
                        "type": "string"
                    },
                    "legend": {
                        "type": "string"
                    }
                },
                "required": [
                    "id",
                    "legend",
                    "name"
                ]
            }
        },
        "nameBases": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "min": {
                        "type": "string"
                    },
                    "max": {
                        "type": "string"
                    },
                    "d": {
                        "type": "string"
                    },
                    "m": {
                        "type": "string"
                    },
                    "b": {
                        "type": "string"
                    }
                },
                "required": [
                    "b",
                    "d",
                    "m",
                    "max",
                    "min",
                    "name"
                ]
            }
        }
    }
}
```