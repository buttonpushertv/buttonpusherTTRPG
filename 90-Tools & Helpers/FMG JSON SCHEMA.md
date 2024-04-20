## FMG JSON SCHEMA

```
{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "properties": {
        "biomesData": {
            "properties": {
                "biomesMartix": {
                    "items": {
                        "properties": {
                            "0": {
                                "type": "integer"
                            },
                            "1": {
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
                            "2": {
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
                        ],
                        "type": "object"
                    },
                    "type": "array"
                },
                "color": {
                    "items": {
                        "type": "string"
                    },
                    "type": "array"
                },
                "cost": {
                    "items": {
                        "type": "integer"
                    },
                    "type": "array"
                },
                "habitability": {
                    "items": {
                        "type": "integer"
                    },
                    "type": "array"
                },
                "i": {
                    "items": {
                        "type": "integer"
                    },
                    "type": "array"
                },
                "icons": {
                    "items": {
                        "items": {
                            "type": "string"
                        },
                        "type": "array"
                    },
                    "type": "array"
                },
                "iconsDensity": {
                    "items": {
                        "type": "integer"
                    },
                    "type": "array"
                },
                "name": {
                    "items": {
                        "type": "string"
                    },
                    "type": "array"
                }
            },
            "required": [
                "biomesMartix",
                "color",
                "cost",
                "habitability",
                "i",
                "icons",
                "iconsDensity",
                "name"
            ],
            "type": "object"
        },
        "grid": {
            "properties": {
                "boundary": {
                    "items": {
                        "items": {
                            "type": "integer"
                        },
                        "type": "array"
                    },
                    "type": "array"
                },
                "cells": {
                    "items": {
                        "properties": {
                            "b": {
                                "type": "integer"
                            },
                            "c": {
                                "items": {
                                    "type": "integer"
                                },
                                "type": "array"
                            },
                            "f": {
                                "type": "integer"
                            },
                            "h": {
                                "type": "integer"
                            },
                            "i": {
                                "type": "integer"
                            },
                            "prec": {
                                "type": "integer"
                            },
                            "t": {
                                "type": "integer"
                            },
                            "temp": {
                                "type": "integer"
                            },
                            "v": {
                                "items": {
                                    "type": "integer"
                                },
                                "type": "array"
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
                        ],
                        "type": "object"
                    },
                    "type": "array"
                },
                "cellsDesired": {
                    "type": "integer"
                },
                "cellsX": {
                    "type": "integer"
                },
                "cellsY": {
                    "type": "integer"
                },
                "features": {
                    "items": {
                        "anyOf": [
                            {
                                "type": "integer"
                            },
                            {
                                "properties": {
                                    "area": {
                                        "type": "number"
                                    },
                                    "border": {
                                        "type": "boolean"
                                    },
                                    "cells": {
                                        "type": "integer"
                                    },
                                    "evaporation": {
                                        "type": "integer"
                                    },
                                    "firstCell": {
                                        "type": "integer"
                                    },
                                    "flux": {
                                        "type": "integer"
                                    },
                                    "group": {
                                        "type": "string"
                                    },
                                    "height": {
                                        "type": "number"
                                    },
                                    "i": {
                                        "type": "integer"
                                    },
                                    "inlets": {
                                        "items": {
                                            "type": "integer"
                                        },
                                        "type": "array"
                                    },
                                    "land": {
                                        "type": "boolean"
                                    },
                                    "name": {
                                        "type": "string"
                                    },
                                    "outlet": {
                                        "type": "integer"
                                    },
                                    "shoreline": {
                                        "items": {
                                            "type": "integer"
                                        },
                                        "type": "array"
                                    },
                                    "temp": {
                                        "type": "integer"
                                    },
                                    "type": {
                                        "type": "string"
                                    },
                                    "vertices": {
                                        "items": {
                                            "type": "integer"
                                        },
                                        "type": "array"
                                    }
                                },
                                "required": [
                                    "border",
                                    "cells",
                                    "firstCell",
                                    "group",
                                    "i",
                                    "land",
                                    "type"
                                ],
                                "type": "object"
                            }
                        ]
                    },
                    "type": "array"
                },
                "points": {
                    "items": {
                        "items": {
                            "type": "number"
                        },
                        "type": "array"
                    },
                    "type": "array"
                },
                "seed": {
                    "type": "string"
                },
                "spacing": {
                    "type": "number"
                },
                "vertices": {
                    "items": {
                        "properties": {
                            "c": {
                                "items": {
                                    "type": "integer"
                                },
                                "type": "array"
                            },
                            "i": {
                                "type": "integer"
                            },
                            "p": {
                                "items": {
                                    "type": "integer"
                                },
                                "type": "array"
                            },
                            "v": {
                                "items": {
                                    "type": "integer"
                                },
                                "type": "array"
                            }
                        },
                        "required": [
                            "c",
                            "i",
                            "p",
                            "v"
                        ],
                        "type": "object"
                    },
                    "type": "array"
                }
            },
            "required": [
                "boundary",
                "cells",
                "cellsDesired",
                "cellsX",
                "cellsY",
                "features",
                "points",
                "seed",
                "spacing",
                "vertices"
            ],
            "type": "object"
        },
        "info": {
            "properties": {
                "description": {
                    "type": "string"
                },
                "exportedAt": {
                    "type": "string"
                },
                "mapId": {
                    "type": "integer"
                },
                "mapName": {
                    "type": "string"
                },
                "seed": {
                    "type": "string"
                },
                "version": {
                    "type": "string"
                }
            },
            "required": [
                "description",
                "exportedAt",
                "mapId",
                "mapName",
                "seed",
                "version"
            ],
            "type": "object"
        },
        "mapCoordinates": {
            "properties": {
                "latN": {
                    "type": "number"
                },
                "latS": {
                    "type": "number"
                },
                "latT": {
                    "type": "integer"
                },
                "lonE": {
                    "type": "integer"
                },
                "lonT": {
                    "type": "integer"
                },
                "lonW": {
                    "type": "integer"
                }
            },
            "required": [
                "latN",
                "latS",
                "latT",
                "lonE",
                "lonT",
                "lonW"
            ],
            "type": "object"
        },
        "nameBases": {
            "items": {
                "properties": {
                    "b": {
                        "type": "string"
                    },
                    "d": {
                        "type": "string"
                    },
                    "i": {
                        "type": "integer"
                    },
                    "m": {
                        "type": "number"
                    },
                    "max": {
                        "type": "integer"
                    },
                    "min": {
                        "type": "integer"
                    },
                    "name": {
                        "type": "string"
                    }
                },
                "required": [
                    "b",
                    "d",
                    "i",
                    "m",
                    "max",
                    "min",
                    "name"
                ],
                "type": "object"
            },
            "type": "array"
        },
        "notes": {
            "items": {
                "properties": {
                    "id": {
                        "type": "string"
                    },
                    "legend": {
                        "type": "string"
                    },
                    "name": {
                        "type": "string"
                    }
                },
                "required": [
                    "id",
                    "legend",
                    "name"
                ],
                "type": "object"
            },
            "type": "array"
        },
        "pack": {
            "properties": {
                "burgs": {
                    "items": {
                        "properties": {
                            "capital": {
                                "type": "integer"
                            },
                            "cell": {
                                "type": "integer"
                            },
                            "citadel": {
                                "type": "integer"
                            },
                            "coa": {
                                "properties": {
                                    "charges": {
                                        "items": {
                                            "properties": {
                                                "charge": {
                                                    "type": "string"
                                                },
                                                "divided": {
                                                    "type": "string"
                                                },
                                                "p": {
                                                    "type": "string"
                                                },
                                                "reversed": {
                                                    "type": "integer"
                                                },
                                                "sinister": {
                                                    "type": "integer"
                                                },
                                                "size": {
                                                    "type": "number"
                                                },
                                                "t": {
                                                    "type": "string"
                                                },
                                                "t2": {
                                                    "type": "string"
                                                },
                                                "t3": {
                                                    "type": "string"
                                                }
                                            },
                                            "required": [
                                                "charge",
                                                "p",
                                                "size",
                                                "t"
                                            ],
                                            "type": "object"
                                        },
                                        "type": "array"
                                    },
                                    "division": {
                                        "properties": {
                                            "division": {
                                                "type": "string"
                                            },
                                            "line": {
                                                "type": "string"
                                            },
                                            "t": {
                                                "type": "string"
                                            }
                                        },
                                        "required": [
                                            "division",
                                            "t"
                                        ],
                                        "type": "object"
                                    },
                                    "ordinaries": {
                                        "items": {
                                            "properties": {
                                                "divided": {
                                                    "type": "string"
                                                },
                                                "line": {
                                                    "type": "string"
                                                },
                                                "ordinary": {
                                                    "type": "string"
                                                },
                                                "t": {
                                                    "type": "string"
                                                }
                                            },
                                            "required": [
                                                "ordinary",
                                                "t"
                                            ],
                                            "type": "object"
                                        },
                                        "type": "array"
                                    },
                                    "shield": {
                                        "type": "string"
                                    },
                                    "t1": {
                                        "type": "string"
                                    }
                                },
                                "required": [
                                    "shield",
                                    "t1"
                                ],
                                "type": "object"
                            },
                            "culture": {
                                "type": "integer"
                            },
                            "feature": {
                                "type": "integer"
                            },
                            "i": {
                                "type": "integer"
                            },
                            "name": {
                                "type": "string"
                            },
                            "plaza": {
                                "type": "integer"
                            },
                            "population": {
                                "type": "number"
                            },
                            "port": {
                                "type": "integer"
                            },
                            "shanty": {
                                "type": "integer"
                            },
                            "state": {
                                "type": "integer"
                            },
                            "temple": {
                                "type": "integer"
                            },
                            "type": {
                                "type": "string"
                            },
                            "walls": {
                                "type": "integer"
                            },
                            "x": {
                                "type": "number"
                            },
                            "y": {
                                "type": "number"
                            }
                        },
                        "required": [
                        ],
                        "type": "object"
                    },
                    "type": "array"
                },
                "cells": {
                    "items": {
                        "properties": {
                            "area": {
                                "type": "integer"
                            },
                            "biome": {
                                "type": "integer"
                            },
                            "burg": {
                                "type": "integer"
                            },
                            "c": {
                                "items": {
                                    "type": "integer"
                                },
                                "type": "array"
                            },
                            "conf": {
                                "type": "integer"
                            },
                            "crossroad": {
                                "type": "integer"
                            },
                            "culture": {
                                "type": "integer"
                            },
                            "f": {
                                "type": "integer"
                            },
                            "fl": {
                                "type": "integer"
                            },
                            "g": {
                                "type": "integer"
                            },
                            "h": {
                                "type": "integer"
                            },
                            "harbor": {
                                "type": "integer"
                            },
                            "haven": {
                                "type": "integer"
                            },
                            "i": {
                                "type": "integer"
                            },
                            "p": {
                                "items": {
                                    "type": "number"
                                },
                                "type": "array"
                            },
                            "pop": {
                                "type": "number"
                            },
                            "province": {
                                "type": "integer"
                            },
                            "r": {
                                "type": "integer"
                            },
                            "religion": {
                                "type": "integer"
                            },
                            "road": {
                                "type": "integer"
                            },
                            "s": {
                                "type": "integer"
                            },
                            "state": {
                                "type": "integer"
                            },
                            "t": {
                                "type": "integer"
                            },
                            "v": {
                                "items": {
                                    "type": "integer"
                                },
                                "type": "array"
                            }
                        },
                        "required": [
                            "area",
                            "biome",
                            "burg",
                            "c",
                            "conf",
                            "crossroad",
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
                            "road",
                            "s",
                            "state",
                            "t",
                            "v"
                        ],
                        "type": "object"
                    },
                    "type": "array"
                },
                "cultures": {
                    "items": {
                        "properties": {
                            "base": {
                                "type": "integer"
                            },
                            "center": {
                                "type": "integer"
                            },
                            "code": {
                                "type": "string"
                            },
                            "color": {
                                "type": "string"
                            },
                            "expansionism": {
                                "type": "number"
                            },
                            "i": {
                                "type": "integer"
                            },
                            "name": {
                                "type": "string"
                            },
                            "origins": {
                                "items": {
                                    "type": [
                                        "integer",
                                        "null"
                                    ]
                                },
                                "type": "array"
                            },
                            "shield": {
                                "type": "string"
                            },
                            "type": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "base",
                            "i",
                            "name",
                            "origins",
                            "shield"
                        ],
                        "type": "object"
                    },
                    "type": "array"
                },
                "features": {
                    "items": {
                        "anyOf": [
                            {
                                "type": "integer"
                            },
                            {
                                "properties": {
                                    "area": {
                                        "type": "number"
                                    },
                                    "border": {
                                        "type": "boolean"
                                    },
                                    "cells": {
                                        "type": "integer"
                                    },
                                    "evaporation": {
                                        "type": "integer"
                                    },
                                    "firstCell": {
                                        "type": "integer"
                                    },
                                    "flux": {
                                        "type": "integer"
                                    },
                                    "group": {
                                        "type": "string"
                                    },
                                    "height": {
                                        "type": "number"
                                    },
                                    "i": {
                                        "type": "integer"
                                    },
                                    "inlets": {
                                        "items": {
                                            "type": "integer"
                                        },
                                        "type": "array"
                                    },
                                    "land": {
                                        "type": "boolean"
                                    },
                                    "name": {
                                        "type": "string"
                                    },
                                    "outlet": {
                                        "type": "integer"
                                    },
                                    "shoreline": {
                                        "items": {
                                            "type": "integer"
                                        },
                                        "type": "array"
                                    },
                                    "temp": {
                                        "type": "integer"
                                    },
                                    "type": {
                                        "type": "string"
                                    },
                                    "vertices": {
                                        "items": {
                                            "type": "integer"
                                        },
                                        "type": "array"
                                    }
                                },
                                "required": [
                                    "border",
                                    "cells",
                                    "firstCell",
                                    "group",
                                    "i",
                                    "land",
                                    "type"
                                ],
                                "type": "object"
                            }
                        ]
                    },
                    "type": "array"
                },
                "markers": {
                    "items": {
                        "properties": {
                            "cell": {
                                "type": "integer"
                            },
                            "dx": {
                                "type": "integer"
                            },
                            "dy": {
                                "type": "integer"
                            },
                            "i": {
                                "type": "integer"
                            },
                            "icon": {
                                "type": "string"
                            },
                            "px": {
                                "type": "integer"
                            },
                            "type": {
                                "type": "string"
                            },
                            "x": {
                                "type": "number"
                            },
                            "y": {
                                "type": "number"
                            }
                        },
                        "required": [
                            "cell",
                            "i",
                            "icon",
                            "type",
                            "x",
                            "y"
                        ],
                        "type": "object"
                    },
                    "type": "array"
                },
                "provinces": {
                    "items": {
                        "anyOf": [
                            {
                                "type": "integer"
                            },
                            {
                                "properties": {
                                    "burg": {
                                        "type": "integer"
                                    },
                                    "center": {
                                        "type": "integer"
                                    },
                                    "coa": {
                                        "properties": {
                                            "charges": {
                                                "items": {
                                                    "properties": {
                                                        "charge": {
                                                            "type": "string"
                                                        },
                                                        "divided": {
                                                            "type": "string"
                                                        },
                                                        "p": {
                                                            "type": "string"
                                                        },
                                                        "size": {
                                                            "type": "number"
                                                        },
                                                        "t": {
                                                            "type": "string"
                                                        },
                                                        "t2": {
                                                            "type": "string"
                                                        },
                                                        "t3": {
                                                            "type": "string"
                                                        }
                                                    },
                                                    "required": [
                                                        "charge",
                                                        "p",
                                                        "size",
                                                        "t"
                                                    ],
                                                    "type": "object"
                                                },
                                                "type": "array"
                                            },
                                            "division": {
                                                "properties": {
                                                    "division": {
                                                        "type": "string"
                                                    },
                                                    "line": {
                                                        "type": "string"
                                                    },
                                                    "t": {
                                                        "type": "string"
                                                    }
                                                },
                                                "required": [
                                                    "division",
                                                    "t"
                                                ],
                                                "type": "object"
                                            },
                                            "ordinaries": {
                                                "items": {
                                                    "properties": {
                                                        "divided": {
                                                            "type": "string"
                                                        },
                                                        "line": {
                                                            "type": "string"
                                                        },
                                                        "ordinary": {
                                                            "type": "string"
                                                        },
                                                        "t": {
                                                            "type": "string"
                                                        }
                                                    },
                                                    "required": [
                                                        "ordinary",
                                                        "t"
                                                    ],
                                                    "type": "object"
                                                },
                                                "type": "array"
                                            },
                                            "shield": {
                                                "type": "string"
                                            },
                                            "t1": {
                                                "type": "string"
                                            }
                                        },
                                        "required": [
                                            "shield",
                                            "t1"
                                        ],
                                        "type": "object"
                                    },
                                    "color": {
                                        "type": "string"
                                    },
                                    "formName": {
                                        "type": "string"
                                    },
                                    "fullName": {
                                        "type": "string"
                                    },
                                    "i": {
                                        "type": "integer"
                                    },
                                    "name": {
                                        "type": "string"
                                    },
                                    "state": {
                                        "type": "integer"
                                    }
                                },
                                "required": [
                                    "burg",
                                    "center",
                                    "coa",
                                    "color",
                                    "formName",
                                    "fullName",
                                    "i",
                                    "name",
                                    "state"
                                ],
                                "type": "object"
                            }
                        ]
                    },
                    "type": "array"
                },
                "religions": {
                    "items": {
                        "properties": {
                            "center": {
                                "type": "integer"
                            },
                            "code": {
                                "type": "string"
                            },
                            "color": {
                                "type": "string"
                            },
                            "culture": {
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
                                "type": "integer"
                            },
                            "form": {
                                "type": "string"
                            },
                            "i": {
                                "type": "integer"
                            },
                            "name": {
                                "type": "string"
                            },
                            "origins": {
                                "anyOf": [
                                    {
                                        "items": {
                                            "type": "integer"
                                        },
                                        "type": "array"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ]
                            },
                            "type": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "i",
                            "name",
                            "origins"
                        ],
                        "type": "object"
                    },
                    "type": "array"
                },
                "rivers": {
                    "items": {
                        "properties": {
                            "basin": {
                                "type": "integer"
                            },
                            "cells": {
                                "items": {
                                    "type": "integer"
                                },
                                "type": "array"
                            },
                            "discharge": {
                                "type": "integer"
                            },
                            "i": {
                                "type": "integer"
                            },
                            "length": {
                                "type": "number"
                            },
                            "mouth": {
                                "type": "integer"
                            },
                            "name": {
                                "type": "string"
                            },
                            "parent": {
                                "type": "integer"
                            },
                            "source": {
                                "type": "integer"
                            },
                            "sourceWidth": {
                                "type": "integer"
                            },
                            "type": {
                                "type": "string"
                            },
                            "width": {
                                "type": "number"
                            },
                            "widthFactor": {
                                "type": "number"
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
                        ],
                        "type": "object"
                    },
                    "type": "array"
                },
                "states": {
                    "items": {
                        "properties": {
                            "alert": {
                                "type": "number"
                            },
                            "area": {
                                "type": "integer"
                            },
                            "burgs": {
                                "type": "integer"
                            },
                            "campaigns": {
                                "items": {
                                    "properties": {
                                        "end": {
                                            "type": "integer"
                                        },
                                        "name": {
                                            "type": "string"
                                        },
                                        "start": {
                                            "type": "integer"
                                        }
                                    },
                                    "required": [
                                        "end",
                                        "name",
                                        "start"
                                    ],
                                    "type": "object"
                                },
                                "type": "array"
                            },
                            "capital": {
                                "type": "integer"
                            },
                            "cells": {
                                "type": "integer"
                            },
                            "center": {
                                "type": "integer"
                            },
                            "coa": {
                                "properties": {
                                    "charges": {
                                        "items": {
                                            "properties": {
                                                "charge": {
                                                    "type": "string"
                                                },
                                                "divided": {
                                                    "type": "string"
                                                },
                                                "p": {
                                                    "type": "string"
                                                },
                                                "size": {
                                                    "type": "number"
                                                },
                                                "t": {
                                                    "type": "string"
                                                },
                                                "t2": {
                                                    "type": "string"
                                                },
                                                "t3": {
                                                    "type": "string"
                                                }
                                            },
                                            "required": [
                                                "charge",
                                                "p",
                                                "size",
                                                "t"
                                            ],
                                            "type": "object"
                                        },
                                        "type": "array"
                                    },
                                    "division": {
                                        "properties": {
                                            "division": {
                                                "type": "string"
                                            },
                                            "line": {
                                                "type": "string"
                                            },
                                            "t": {
                                                "type": "string"
                                            }
                                        },
                                        "required": [
                                            "division",
                                            "t"
                                        ],
                                        "type": "object"
                                    },
                                    "ordinaries": {
                                        "items": {
                                            "properties": {
                                                "line": {
                                                    "type": "string"
                                                },
                                                "ordinary": {
                                                    "type": "string"
                                                },
                                                "t": {
                                                    "type": "string"
                                                }
                                            },
                                            "required": [
                                                "ordinary",
                                                "t"
                                            ],
                                            "type": "object"
                                        },
                                        "type": "array"
                                    },
                                    "shield": {
                                        "type": "string"
                                    },
                                    "t1": {
                                        "type": "string"
                                    }
                                },
                                "required": [
                                    "shield",
                                    "t1"
                                ],
                                "type": "object"
                            },
                            "color": {
                                "type": "string"
                            },
                            "culture": {
                                "type": "integer"
                            },
                            "diplomacy": {
                                "items": {
                                    "anyOf": [
                                        {
                                            "items": {
                                                "type": "string"
                                            },
                                            "type": "array"
                                        },
                                        {
                                            "type": "string"
                                        }
                                    ]
                                },
                                "type": "array"
                            },
                            "expansionism": {
                                "type": "number"
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
                            "i": {
                                "type": "integer"
                            },
                            "military": {
                                "items": {
                                    "properties": {
                                        "a": {
                                            "type": "integer"
                                        },
                                        "bx": {
                                            "type": "number"
                                        },
                                        "by": {
                                            "type": "number"
                                        },
                                        "cell": {
                                            "type": "integer"
                                        },
                                        "i": {
                                            "type": "integer"
                                        },
                                        "icon": {
                                            "type": "string"
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
                                        "u": {
                                            "properties": {
                                                "archers": {
                                                    "type": "integer"
                                                },
                                                "artillery": {
                                                    "type": "integer"
                                                },
                                                "cavalry": {
                                                    "type": "integer"
                                                },
                                                "fleet": {
                                                    "type": "integer"
                                                },
                                                "infantry": {
                                                    "type": "integer"
                                                }
                                            },
                                            "required": [
                                            ],
                                            "type": "object"
                                        },
                                        "x": {
                                            "type": "number"
                                        },
                                        "y": {
                                            "type": "number"
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
                                    ],
                                    "type": "object"
                                },
                                "type": "array"
                            },
                            "name": {
                                "type": "string"
                            },
                            "neighbors": {
                                "items": {
                                    "type": "integer"
                                },
                                "type": "array"
                            },
                            "pole": {
                                "items": {
                                    "type": "number"
                                },
                                "type": "array"
                            },
                            "provinces": {
                                "items": {
                                    "type": "integer"
                                },
                                "type": "array"
                            },
                            "rural": {
                                "type": "number"
                            },
                            "type": {
                                "type": "string"
                            },
                            "urban": {
                                "type": "number"
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
                            "provinces",
                            "rural",
                            "urban"
                        ],
                        "type": "object"
                    },
                    "type": "array"
                },
                "vertices": {
                    "items": {
                        "properties": {
                            "c": {
                                "items": {
                                    "type": "integer"
                                },
                                "type": "array"
                            },
                            "i": {
                                "type": "integer"
                            },
                            "p": {
                                "items": {
                                    "type": "number"
                                },
                                "type": "array"
                            },
                            "v": {
                                "items": {
                                    "type": "integer"
                                },
                                "type": "array"
                            }
                        },
                        "required": [
                            "c",
                            "i",
                            "p",
                            "v"
                        ],
                        "type": "object"
                    },
                    "type": "array"
                }
            },
            "required": [
                "burgs",
                "cells",
                "cultures",
                "features",
                "markers",
                "provinces",
                "religions",
                "rivers",
                "states",
                "vertices"
            ],
            "type": "object"
        },
        "settings": {
            "properties": {
                "areaUnit": {
                    "type": "string"
                },
                "distanceScale": {
                    "type": "string"
                },
                "distanceUnit": {
                    "type": "string"
                },
                "heightExponent": {
                    "type": "string"
                },
                "heightUnit": {
                    "type": "string"
                },
                "hideLabels": {
                    "type": "boolean"
                },
                "latitudeO": {
                    "type": "string"
                },
                "mapName": {
                    "type": "string"
                },
                "mapSize": {
                    "type": "string"
                },
                "options": {
                    "properties": {
                        "era": {
                            "type": "string"
                        },
                        "eraShort": {
                            "type": "string"
                        },
                        "military": {
                            "items": {
                                "properties": {
                                    "crew": {
                                        "type": "integer"
                                    },
                                    "icon": {
                                        "type": "string"
                                    },
                                    "name": {
                                        "type": "string"
                                    },
                                    "power": {
                                        "type": "integer"
                                    },
                                    "rural": {
                                        "type": "number"
                                    },
                                    "separate": {
                                        "type": "integer"
                                    },
                                    "type": {
                                        "type": "string"
                                    },
                                    "urban": {
                                        "type": "number"
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
                                ],
                                "type": "object"
                            },
                            "type": "array"
                        },
                        "pinNotes": {
                            "type": "boolean"
                        },
                        "showBurgPreview": {
                            "type": "boolean"
                        },
                        "stateLabelsMode": {
                            "type": "string"
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
                        "villageMaxPopulation": {
                            "type": "integer"
                        },
                        "winds": {
                            "items": {
                                "type": "integer"
                            },
                            "type": "array"
                        },
                        "year": {
                            "type": "integer"
                        }
                    },
                    "required": [
                        "era",
                        "eraShort",
                        "military",
                        "pinNotes",
                        "showBurgPreview",
                        "stateLabelsMode",
                        "temperatureEquator",
                        "temperatureNorthPole",
                        "temperatureSouthPole",
                        "villageMaxPopulation",
                        "winds",
                        "year"
                    ],
                    "type": "object"
                },
                "populationRate": {
                    "type": "integer"
                },
                "prec": {
                    "type": "string"
                },
                "rescaleLabels": {
                    "type": "boolean"
                },
                "stylePreset": {
                    "type": "string"
                },
                "temperatureScale": {
                    "type": "string"
                },
                "urbanDensity": {
                    "type": "integer"
                },
                "urbanization": {
                    "type": "integer"
                }
            },
            "required": [
                "areaUnit",
                "distanceScale",
                "distanceUnit",
                "heightExponent",
                "heightUnit",
                "hideLabels",
                "latitudeO",
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
            "type": "object"
        }
    },
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
    "type": "object"
}
```