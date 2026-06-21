## FMG JSON SCHEMA - v1.99 (Routes rework)

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
                    "type": "integer"
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
                    "type": "integer"
                },
                "urbanization": {
                    "type": "integer"
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
                        "showBurgPreview": {
                            "type": "boolean"
                        },
                        "villageMaxPopulation": {
                            "type": "integer"
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
                    "type": "integer"
                },
                "lonW": {
                    "type": "integer"
                },
                "lonE": {
                    "type": "integer"
                }
            }
        },
        "pack": {
            "type": "object",
            "required": [
                "burgs",
                "cells",
                "cultures",
                "features",
                "markers",
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
                                    "5259": {
                                        "type": "integer"
                                    },
                                    "5184": {
                                        "type": "integer"
                                    },
                                    "5173": {
                                        "type": "integer"
                                    },
                                    "5250": {
                                        "type": "integer"
                                    },
                                    "5251": {
                                        "type": "integer"
                                    },
                                    "5249": {
                                        "type": "integer"
                                    },
                                    "5248": {
                                        "type": "integer"
                                    },
                                    "5167": {
                                        "type": "integer"
                                    },
                                    "5147": {
                                        "type": "integer"
                                    },
                                    "5226": {
                                        "type": "integer"
                                    },
                                    "5227": {
                                        "type": "integer"
                                    },
                                    "5225": {
                                        "type": "integer"
                                    },
                                    "5224": {
                                        "type": "integer"
                                    },
                                    "5145": {
                                        "type": "integer"
                                    },
                                    "5120": {
                                        "type": "integer"
                                    },
                                    "5107": {
                                        "type": "integer"
                                    },
                                    "5096": {
                                        "type": "integer"
                                    },
                                    "5172": {
                                        "type": "integer"
                                    },
                                    "5171": {
                                        "type": "integer"
                                    },
                                    "5174": {
                                        "type": "integer"
                                    },
                                    "5089": {
                                        "type": "integer"
                                    },
                                    "5059": {
                                        "type": "integer"
                                    },
                                    "5144": {
                                        "type": "integer"
                                    },
                                    "5143": {
                                        "type": "integer"
                                    },
                                    "5056": {
                                        "type": "integer"
                                    },
                                    "5119": {
                                        "type": "integer"
                                    },
                                    "5118": {
                                        "type": "integer"
                                    },
                                    "5031": {
                                        "type": "integer"
                                    },
                                    "5019": {
                                        "type": "integer"
                                    },
                                    "5011": {
                                        "type": "integer"
                                    },
                                    "5097": {
                                        "type": "integer"
                                    },
                                    "5098": {
                                        "type": "integer"
                                    },
                                    "4998": {
                                        "type": "integer"
                                    },
                                    "4824": {
                                        "type": "integer"
                                    },
                                    "5060": {
                                        "type": "integer"
                                    },
                                    "4940": {
                                        "type": "integer"
                                    },
                                    "5030": {
                                        "type": "integer"
                                    },
                                    "4914": {
                                        "type": "integer"
                                    },
                                    "4905": {
                                        "type": "integer"
                                    },
                                    "5020": {
                                        "type": "integer"
                                    },
                                    "4903": {
                                        "type": "integer"
                                    },
                                    "5014": {
                                        "type": "integer"
                                    },
                                    "5016": {
                                        "type": "integer"
                                    },
                                    "5013": {
                                        "type": "integer"
                                    },
                                    "5012": {
                                        "type": "integer"
                                    },
                                    "5010": {
                                        "type": "integer"
                                    },
                                    "4898": {
                                        "type": "integer"
                                    },
                                    "4891": {
                                        "type": "integer"
                                    },
                                    "5001": {
                                        "type": "integer"
                                    },
                                    "4997": {
                                        "type": "integer"
                                    },
                                    "4996": {
                                        "type": "integer"
                                    },
                                    "4995": {
                                        "type": "integer"
                                    },
                                    "4994": {
                                        "type": "integer"
                                    },
                                    "4993": {
                                        "type": "integer"
                                    },
                                    "4992": {
                                        "type": "integer"
                                    },
                                    "4883": {
                                        "type": "integer"
                                    },
                                    "4990": {
                                        "type": "integer"
                                    },
                                    "4881": {
                                        "type": "integer"
                                    },
                                    "4991": {
                                        "type": "integer"
                                    },
                                    "4866": {
                                        "type": "integer"
                                    },
                                    "4979": {
                                        "type": "integer"
                                    },
                                    "4978": {
                                        "type": "integer"
                                    },
                                    "4980": {
                                        "type": "integer"
                                    },
                                    "4863": {
                                        "type": "integer"
                                    },
                                    "4855": {
                                        "type": "integer"
                                    },
                                    "4972": {
                                        "type": "integer"
                                    },
                                    "4973": {
                                        "type": "integer"
                                    },
                                    "4971": {
                                        "type": "integer"
                                    },
                                    "4970": {
                                        "type": "integer"
                                    },
                                    "4968": {
                                        "type": "integer"
                                    },
                                    "4967": {
                                        "type": "integer"
                                    },
                                    "4969": {
                                        "type": "integer"
                                    },
                                    "4966": {
                                        "type": "integer"
                                    },
                                    "4965": {
                                        "type": "integer"
                                    },
                                    "4848": {
                                        "type": "integer"
                                    },
                                    "4939": {
                                        "type": "integer"
                                    },
                                    "4818": {
                                        "type": "integer"
                                    },
                                    "4913": {
                                        "type": "integer"
                                    },
                                    "4790": {
                                        "type": "integer"
                                    },
                                    "4783": {
                                        "type": "integer"
                                    },
                                    "4901": {
                                        "type": "integer"
                                    },
                                    "4779": {
                                        "type": "integer"
                                    },
                                    "4772": {
                                        "type": "integer"
                                    },
                                    "4764": {
                                        "type": "integer"
                                    },
                                    "4880": {
                                        "type": "integer"
                                    },
                                    "4878": {
                                        "type": "integer"
                                    },
                                    "4877": {
                                        "type": "integer"
                                    },
                                    "4750": {
                                        "type": "integer"
                                    },
                                    "4874": {
                                        "type": "integer"
                                    },
                                    "4875": {
                                        "type": "integer"
                                    },
                                    "4872": {
                                        "type": "integer"
                                    },
                                    "4871": {
                                        "type": "integer"
                                    },
                                    "4745": {
                                        "type": "integer"
                                    },
                                    "4742": {
                                        "type": "integer"
                                    },
                                    "4867": {
                                        "type": "integer"
                                    },
                                    "4868": {
                                        "type": "integer"
                                    },
                                    "4862": {
                                        "type": "integer"
                                    },
                                    "4861": {
                                        "type": "integer"
                                    },
                                    "4860": {
                                        "type": "integer"
                                    },
                                    "4733": {
                                        "type": "integer"
                                    },
                                    "4725": {
                                        "type": "integer"
                                    },
                                    "4730": {
                                        "type": "integer"
                                    },
                                    "4856": {
                                        "type": "integer"
                                    },
                                    "4857": {
                                        "type": "integer"
                                    },
                                    "4722": {
                                        "type": "integer"
                                    },
                                    "4851": {
                                        "type": "integer"
                                    },
                                    "4850": {
                                        "type": "integer"
                                    },
                                    "4852": {
                                        "type": "integer"
                                    },
                                    "4720": {
                                        "type": "integer"
                                    },
                                    "4845": {
                                        "type": "integer"
                                    },
                                    "4844": {
                                        "type": "integer"
                                    },
                                    "4716": {
                                        "type": "integer"
                                    },
                                    "4823": {
                                        "type": "integer"
                                    },
                                    "4695": {
                                        "type": "integer"
                                    },
                                    "4690": {
                                        "type": "integer"
                                    },
                                    "4649": {
                                        "type": "integer"
                                    },
                                    "4789": {
                                        "type": "integer"
                                    },
                                    "4791": {
                                        "type": "integer"
                                    },
                                    "4646": {
                                        "type": "integer"
                                    },
                                    "4784": {
                                        "type": "integer"
                                    },
                                    "4644": {
                                        "type": "integer"
                                    },
                                    "4782": {
                                        "type": "integer"
                                    },
                                    "4785": {
                                        "type": "integer"
                                    },
                                    "4639": {
                                        "type": "integer"
                                    },
                                    "4777": {
                                        "type": "integer"
                                    },
                                    "4637": {
                                        "type": "integer"
                                    },
                                    "4773": {
                                        "type": "integer"
                                    },
                                    "4771": {
                                        "type": "integer"
                                    },
                                    "4497": {
                                        "type": "integer"
                                    },
                                    "4774": {
                                        "type": "integer"
                                    },
                                    "4630": {
                                        "type": "integer"
                                    },
                                    "4486": {
                                        "type": "integer"
                                    },
                                    "4765": {
                                        "type": "integer"
                                    },
                                    "4766": {
                                        "type": "integer"
                                    },
                                    "4763": {
                                        "type": "integer"
                                    },
                                    "4621": {
                                        "type": "integer"
                                    },
                                    "4761": {
                                        "type": "integer"
                                    },
                                    "4762": {
                                        "type": "integer"
                                    },
                                    "4760": {
                                        "type": "integer"
                                    },
                                    "4758": {
                                        "type": "integer"
                                    },
                                    "4617": {
                                        "type": "integer"
                                    },
                                    "4749": {
                                        "type": "integer"
                                    },
                                    "4747": {
                                        "type": "integer"
                                    },
                                    "4611": {
                                        "type": "integer"
                                    },
                                    "4744": {
                                        "type": "integer"
                                    },
                                    "4743": {
                                        "type": "integer"
                                    },
                                    "4601": {
                                        "type": "integer"
                                    },
                                    "4738": {
                                        "type": "integer"
                                    },
                                    "4737": {
                                        "type": "integer"
                                    },
                                    "4739": {
                                        "type": "integer"
                                    },
                                    "4598": {
                                        "type": "integer"
                                    },
                                    "4595": {
                                        "type": "integer"
                                    },
                                    "4729": {
                                        "type": "integer"
                                    },
                                    "4728": {
                                        "type": "integer"
                                    },
                                    "4593": {
                                        "type": "integer"
                                    },
                                    "4591": {
                                        "type": "integer"
                                    },
                                    "4588": {
                                        "type": "integer"
                                    },
                                    "4727": {
                                        "type": "integer"
                                    },
                                    "4587": {
                                        "type": "integer"
                                    },
                                    "4723": {
                                        "type": "integer"
                                    },
                                    "4719": {
                                        "type": "integer"
                                    },
                                    "4718": {
                                        "type": "integer"
                                    },
                                    "4717": {
                                        "type": "integer"
                                    },
                                    "4581": {
                                        "type": "integer"
                                    },
                                    "4715": {
                                        "type": "integer"
                                    },
                                    "4714": {
                                        "type": "integer"
                                    },
                                    "4576": {
                                        "type": "integer"
                                    },
                                    "4571": {
                                        "type": "integer"
                                    },
                                    "4575": {
                                        "type": "integer"
                                    },
                                    "4566": {
                                        "type": "integer"
                                    },
                                    "4567": {
                                        "type": "integer"
                                    },
                                    "4694": {
                                        "type": "integer"
                                    },
                                    "4557": {
                                        "type": "integer"
                                    },
                                    "4552": {
                                        "type": "integer"
                                    },
                                    "4523": {
                                        "type": "integer"
                                    },
                                    "4521": {
                                        "type": "integer"
                                    },
                                    "4510": {
                                        "type": "integer"
                                    },
                                    "4506": {
                                        "type": "integer"
                                    },
                                    "4645": {
                                        "type": "integer"
                                    },
                                    "4508": {
                                        "type": "integer"
                                    },
                                    "4505": {
                                        "type": "integer"
                                    },
                                    "4638": {
                                        "type": "integer"
                                    },
                                    "4366": {
                                        "type": "integer"
                                    },
                                    "4636": {
                                        "type": "integer"
                                    },
                                    "4500": {
                                        "type": "integer"
                                    },
                                    "4492": {
                                        "type": "integer"
                                    },
                                    "4483": {
                                        "type": "integer"
                                    },
                                    "4478": {
                                        "type": "integer"
                                    },
                                    "4473": {
                                        "type": "integer"
                                    },
                                    "4609": {
                                        "type": "integer"
                                    },
                                    "4607": {
                                        "type": "integer"
                                    },
                                    "4605": {
                                        "type": "integer"
                                    },
                                    "4604": {
                                        "type": "integer"
                                    },
                                    "4467": {
                                        "type": "integer"
                                    },
                                    "4465": {
                                        "type": "integer"
                                    },
                                    "4461": {
                                        "type": "integer"
                                    },
                                    "4734": {
                                        "type": "integer"
                                    },
                                    "4594": {
                                        "type": "integer"
                                    },
                                    "4459": {
                                        "type": "integer"
                                    },
                                    "4592": {
                                        "type": "integer"
                                    },
                                    "4457": {
                                        "type": "integer"
                                    },
                                    "4590": {
                                        "type": "integer"
                                    },
                                    "4589": {
                                        "type": "integer"
                                    },
                                    "4452": {
                                        "type": "integer"
                                    },
                                    "4579": {
                                        "type": "integer"
                                    },
                                    "4311": {
                                        "type": "integer"
                                    },
                                    "4582": {
                                        "type": "integer"
                                    },
                                    "4578": {
                                        "type": "integer"
                                    },
                                    "4577": {
                                        "type": "integer"
                                    },
                                    "4444": {
                                        "type": "integer"
                                    },
                                    "4574": {
                                        "type": "integer"
                                    },
                                    "4573": {
                                        "type": "integer"
                                    },
                                    "4712": {
                                        "type": "integer"
                                    },
                                    "4442": {
                                        "type": "integer"
                                    },
                                    "4570": {
                                        "type": "integer"
                                    },
                                    "4569": {
                                        "type": "integer"
                                    },
                                    "4568": {
                                        "type": "integer"
                                    },
                                    "4436": {
                                        "type": "integer"
                                    },
                                    "4706": {
                                        "type": "integer"
                                    },
                                    "4565": {
                                        "type": "integer"
                                    },
                                    "4433": {
                                        "type": "integer"
                                    },
                                    "4429": {
                                        "type": "integer"
                                    },
                                    "4430": {
                                        "type": "integer"
                                    },
                                    "4556": {
                                        "type": "integer"
                                    },
                                    "4425": {
                                        "type": "integer"
                                    },
                                    "4426": {
                                        "type": "integer"
                                    },
                                    "4420": {
                                        "type": "integer"
                                    },
                                    "4399": {
                                        "type": "integer"
                                    },
                                    "4529": {
                                        "type": "integer"
                                    },
                                    "4528": {
                                        "type": "integer"
                                    },
                                    "4530": {
                                        "type": "integer"
                                    },
                                    "4396": {
                                        "type": "integer"
                                    },
                                    "4395": {
                                        "type": "integer"
                                    },
                                    "4662": {
                                        "type": "integer"
                                    },
                                    "4520": {
                                        "type": "integer"
                                    },
                                    "4522": {
                                        "type": "integer"
                                    },
                                    "4519": {
                                        "type": "integer"
                                    },
                                    "4518": {
                                        "type": "integer"
                                    },
                                    "4388": {
                                        "type": "integer"
                                    },
                                    "4386": {
                                        "type": "integer"
                                    },
                                    "4385": {
                                        "type": "integer"
                                    },
                                    "4387": {
                                        "type": "integer"
                                    },
                                    "4380": {
                                        "type": "integer"
                                    },
                                    "4507": {
                                        "type": "integer"
                                    },
                                    "4379": {
                                        "type": "integer"
                                    },
                                    "4376": {
                                        "type": "integer"
                                    },
                                    "4371": {
                                        "type": "integer"
                                    },
                                    "4501": {
                                        "type": "integer"
                                    },
                                    "4367": {
                                        "type": "integer"
                                    },
                                    "4365": {
                                        "type": "integer"
                                    },
                                    "4502": {
                                        "type": "integer"
                                    },
                                    "4364": {
                                        "type": "integer"
                                    },
                                    "4496": {
                                        "type": "integer"
                                    },
                                    "4362": {
                                        "type": "integer"
                                    },
                                    "4490": {
                                        "type": "integer"
                                    },
                                    "4356": {
                                        "type": "integer"
                                    },
                                    "4357": {
                                        "type": "integer"
                                    },
                                    "4487": {
                                        "type": "integer"
                                    },
                                    "4488": {
                                        "type": "integer"
                                    },
                                    "4349": {
                                        "type": "integer"
                                    },
                                    "4350": {
                                        "type": "integer"
                                    },
                                    "4482": {
                                        "type": "integer"
                                    },
                                    "4484": {
                                        "type": "integer"
                                    },
                                    "4346": {
                                        "type": "integer"
                                    },
                                    "4341": {
                                        "type": "integer"
                                    },
                                    "4335": {
                                        "type": "integer"
                                    },
                                    "4466": {
                                        "type": "integer"
                                    },
                                    "4464": {
                                        "type": "integer"
                                    },
                                    "4326": {
                                        "type": "integer"
                                    },
                                    "4324": {
                                        "type": "integer"
                                    },
                                    "4460": {
                                        "type": "integer"
                                    },
                                    "4462": {
                                        "type": "integer"
                                    },
                                    "4322": {
                                        "type": "integer"
                                    },
                                    "4455": {
                                        "type": "integer"
                                    },
                                    "4319": {
                                        "type": "integer"
                                    },
                                    "4451": {
                                        "type": "integer"
                                    },
                                    "4314": {
                                        "type": "integer"
                                    },
                                    "4313": {
                                        "type": "integer"
                                    },
                                    "4448": {
                                        "type": "integer"
                                    },
                                    "4449": {
                                        "type": "integer"
                                    },
                                    "4309": {
                                        "type": "integer"
                                    },
                                    "4445": {
                                        "type": "integer"
                                    },
                                    "4443": {
                                        "type": "integer"
                                    },
                                    "4441": {
                                        "type": "integer"
                                    },
                                    "4440": {
                                        "type": "integer"
                                    },
                                    "4306": {
                                        "type": "integer"
                                    },
                                    "4304": {
                                        "type": "integer"
                                    },
                                    "4435": {
                                        "type": "integer"
                                    },
                                    "4302": {
                                        "type": "integer"
                                    },
                                    "4434": {
                                        "type": "integer"
                                    },
                                    "4300": {
                                        "type": "integer"
                                    },
                                    "4432": {
                                        "type": "integer"
                                    },
                                    "4431": {
                                        "type": "integer"
                                    },
                                    "4299": {
                                        "type": "integer"
                                    },
                                    "4298": {
                                        "type": "integer"
                                    },
                                    "4561": {
                                        "type": "integer"
                                    },
                                    "4296": {
                                        "type": "integer"
                                    },
                                    "4290": {
                                        "type": "integer"
                                    },
                                    "4288": {
                                        "type": "integer"
                                    },
                                    "4423": {
                                        "type": "integer"
                                    },
                                    "4421": {
                                        "type": "integer"
                                    },
                                    "4287": {
                                        "type": "integer"
                                    },
                                    "4424": {
                                        "type": "integer"
                                    },
                                    "4284": {
                                        "type": "integer"
                                    },
                                    "4419": {
                                        "type": "integer"
                                    },
                                    "4418": {
                                        "type": "integer"
                                    },
                                    "4417": {
                                        "type": "integer"
                                    },
                                    "4416": {
                                        "type": "integer"
                                    },
                                    "4280": {
                                        "type": "integer"
                                    },
                                    "4276": {
                                        "type": "integer"
                                    },
                                    "4405": {
                                        "type": "integer"
                                    },
                                    "4404": {
                                        "type": "integer"
                                    },
                                    "4272": {
                                        "type": "integer"
                                    },
                                    "4406": {
                                        "type": "integer"
                                    },
                                    "4403": {
                                        "type": "integer"
                                    },
                                    "4269": {
                                        "type": "integer"
                                    },
                                    "4267": {
                                        "type": "integer"
                                    },
                                    "4401": {
                                        "type": "integer"
                                    },
                                    "4394": {
                                        "type": "integer"
                                    },
                                    "4393": {
                                        "type": "integer"
                                    },
                                    "4260": {
                                        "type": "integer"
                                    },
                                    "4516": {
                                        "type": "integer"
                                    },
                                    "4253": {
                                        "type": "integer"
                                    },
                                    "4384": {
                                        "type": "integer"
                                    },
                                    "4250": {
                                        "type": "integer"
                                    },
                                    "4378": {
                                        "type": "integer"
                                    },
                                    "4245": {
                                        "type": "integer"
                                    },
                                    "4374": {
                                        "type": "integer"
                                    },
                                    "4373": {
                                        "type": "integer"
                                    },
                                    "4244": {
                                        "type": "integer"
                                    },
                                    "4375": {
                                        "type": "integer"
                                    },
                                    "4242": {
                                        "type": "integer"
                                    },
                                    "4370": {
                                        "type": "integer"
                                    },
                                    "4369": {
                                        "type": "integer"
                                    },
                                    "4368": {
                                        "type": "integer"
                                    },
                                    "4238": {
                                        "type": "integer"
                                    },
                                    "4239": {
                                        "type": "integer"
                                    },
                                    "4235": {
                                        "type": "integer"
                                    },
                                    "4361": {
                                        "type": "integer"
                                    },
                                    "4360": {
                                        "type": "integer"
                                    },
                                    "4230": {
                                        "type": "integer"
                                    },
                                    "4359": {
                                        "type": "integer"
                                    },
                                    "4358": {
                                        "type": "integer"
                                    },
                                    "4231": {
                                        "type": "integer"
                                    },
                                    "4355": {
                                        "type": "integer"
                                    },
                                    "4348": {
                                        "type": "integer"
                                    },
                                    "4345": {
                                        "type": "integer"
                                    },
                                    "4214": {
                                        "type": "integer"
                                    },
                                    "4211": {
                                        "type": "integer"
                                    },
                                    "4210": {
                                        "type": "integer"
                                    },
                                    "4342": {
                                        "type": "integer"
                                    },
                                    "4340": {
                                        "type": "integer"
                                    },
                                    "4339": {
                                        "type": "integer"
                                    },
                                    "4338": {
                                        "type": "integer"
                                    },
                                    "4337": {
                                        "type": "integer"
                                    },
                                    "4336": {
                                        "type": "integer"
                                    },
                                    "4192": {
                                        "type": "integer"
                                    },
                                    "4196": {
                                        "type": "integer"
                                    },
                                    "4325": {
                                        "type": "integer"
                                    },
                                    "4187": {
                                        "type": "integer"
                                    },
                                    "4055": {
                                        "type": "integer"
                                    },
                                    "4051": {
                                        "type": "integer"
                                    },
                                    "4315": {
                                        "type": "integer"
                                    },
                                    "4178": {
                                        "type": "integer"
                                    },
                                    "4175": {
                                        "type": "integer"
                                    },
                                    "4308": {
                                        "type": "integer"
                                    },
                                    "4307": {
                                        "type": "integer"
                                    },
                                    "4438": {
                                        "type": "integer"
                                    },
                                    "4303": {
                                        "type": "integer"
                                    },
                                    "4040": {
                                        "type": "integer"
                                    },
                                    "4301": {
                                        "type": "integer"
                                    },
                                    "4167": {
                                        "type": "integer"
                                    },
                                    "4165": {
                                        "type": "integer"
                                    },
                                    "4297": {
                                        "type": "integer"
                                    },
                                    "4164": {
                                        "type": "integer"
                                    },
                                    "4295": {
                                        "type": "integer"
                                    },
                                    "4161": {
                                        "type": "integer"
                                    },
                                    "4289": {
                                        "type": "integer"
                                    },
                                    "4156": {
                                        "type": "integer"
                                    },
                                    "4159": {
                                        "type": "integer"
                                    },
                                    "4153": {
                                        "type": "integer"
                                    },
                                    "4149": {
                                        "type": "integer"
                                    },
                                    "4279": {
                                        "type": "integer"
                                    },
                                    "4021": {
                                        "type": "integer"
                                    },
                                    "4145": {
                                        "type": "integer"
                                    },
                                    "4139": {
                                        "type": "integer"
                                    },
                                    "4137": {
                                        "type": "integer"
                                    },
                                    "4266": {
                                        "type": "integer"
                                    },
                                    "4127": {
                                        "type": "integer"
                                    },
                                    "4126": {
                                        "type": "integer"
                                    },
                                    "4128": {
                                        "type": "integer"
                                    },
                                    "4120": {
                                        "type": "integer"
                                    },
                                    "4117": {
                                        "type": "integer"
                                    },
                                    "4112": {
                                        "type": "integer"
                                    },
                                    "4243": {
                                        "type": "integer"
                                    },
                                    "4110": {
                                        "type": "integer"
                                    },
                                    "4241": {
                                        "type": "integer"
                                    },
                                    "4108": {
                                        "type": "integer"
                                    },
                                    "4105": {
                                        "type": "integer"
                                    },
                                    "4102": {
                                        "type": "integer"
                                    },
                                    "4229": {
                                        "type": "integer"
                                    },
                                    "4094": {
                                        "type": "integer"
                                    },
                                    "4082": {
                                        "type": "integer"
                                    },
                                    "4075": {
                                        "type": "integer"
                                    },
                                    "4194": {
                                        "type": "integer"
                                    },
                                    "4327": {
                                        "type": "integer"
                                    },
                                    "4064": {
                                        "type": "integer"
                                    },
                                    "4062": {
                                        "type": "integer"
                                    },
                                    "4191": {
                                        "type": "integer"
                                    },
                                    "4193": {
                                        "type": "integer"
                                    },
                                    "4059": {
                                        "type": "integer"
                                    },
                                    "4186": {
                                        "type": "integer"
                                    },
                                    "4185": {
                                        "type": "integer"
                                    },
                                    "4050": {
                                        "type": "integer"
                                    },
                                    "4179": {
                                        "type": "integer"
                                    },
                                    "4047": {
                                        "type": "integer"
                                    },
                                    "4174": {
                                        "type": "integer"
                                    },
                                    "4176": {
                                        "type": "integer"
                                    },
                                    "4045": {
                                        "type": "integer"
                                    },
                                    "4038": {
                                        "type": "integer"
                                    },
                                    "4166": {
                                        "type": "integer"
                                    },
                                    "4163": {
                                        "type": "integer"
                                    },
                                    "4033": {
                                        "type": "integer"
                                    },
                                    "4158": {
                                        "type": "integer"
                                    },
                                    "4031": {
                                        "type": "integer"
                                    },
                                    "4155": {
                                        "type": "integer"
                                    },
                                    "4027": {
                                        "type": "integer"
                                    },
                                    "4026": {
                                        "type": "integer"
                                    },
                                    "4154": {
                                        "type": "integer"
                                    },
                                    "4022": {
                                        "type": "integer"
                                    },
                                    "4144": {
                                        "type": "integer"
                                    },
                                    "4017": {
                                        "type": "integer"
                                    },
                                    "4138": {
                                        "type": "integer"
                                    },
                                    "4013": {
                                        "type": "integer"
                                    },
                                    "4135": {
                                        "type": "integer"
                                    },
                                    "4012": {
                                        "type": "integer"
                                    },
                                    "4006": {
                                        "type": "integer"
                                    },
                                    "4129": {
                                        "type": "integer"
                                    },
                                    "4002": {
                                        "type": "integer"
                                    },
                                    "4125": {
                                        "type": "integer"
                                    },
                                    "4124": {
                                        "type": "integer"
                                    },
                                    "4000": {
                                        "type": "integer"
                                    },
                                    "3997": {
                                        "type": "integer"
                                    },
                                    "4121": {
                                        "type": "integer"
                                    },
                                    "3992": {
                                        "type": "integer"
                                    },
                                    "3869": {
                                        "type": "integer"
                                    },
                                    "3991": {
                                        "type": "integer"
                                    },
                                    "4114": {
                                        "type": "integer"
                                    },
                                    "4113": {
                                        "type": "integer"
                                    },
                                    "4115": {
                                        "type": "integer"
                                    },
                                    "3989": {
                                        "type": "integer"
                                    },
                                    "4111": {
                                        "type": "integer"
                                    },
                                    "3986": {
                                        "type": "integer"
                                    },
                                    "4107": {
                                        "type": "integer"
                                    },
                                    "3983": {
                                        "type": "integer"
                                    },
                                    "4103": {
                                        "type": "integer"
                                    },
                                    "3976": {
                                        "type": "integer"
                                    },
                                    "4101": {
                                        "type": "integer"
                                    },
                                    "3964": {
                                        "type": "integer"
                                    },
                                    "4093": {
                                        "type": "integer"
                                    },
                                    "4091": {
                                        "type": "integer"
                                    },
                                    "4090": {
                                        "type": "integer"
                                    },
                                    "3961": {
                                        "type": "integer"
                                    },
                                    "3958": {
                                        "type": "integer"
                                    },
                                    "3962": {
                                        "type": "integer"
                                    },
                                    "4080": {
                                        "type": "integer"
                                    },
                                    "4081": {
                                        "type": "integer"
                                    },
                                    "4078": {
                                        "type": "integer"
                                    },
                                    "4084": {
                                        "type": "integer"
                                    },
                                    "4077": {
                                        "type": "integer"
                                    },
                                    "4076": {
                                        "type": "integer"
                                    },
                                    "4063": {
                                        "type": "integer"
                                    },
                                    "3943": {
                                        "type": "integer"
                                    },
                                    "3941": {
                                        "type": "integer"
                                    },
                                    "3938": {
                                        "type": "integer"
                                    },
                                    "3934": {
                                        "type": "integer"
                                    },
                                    "3932": {
                                        "type": "integer"
                                    },
                                    "4052": {
                                        "type": "integer"
                                    },
                                    "4053": {
                                        "type": "integer"
                                    },
                                    "3927": {
                                        "type": "integer"
                                    },
                                    "3925": {
                                        "type": "integer"
                                    },
                                    "4048": {
                                        "type": "integer"
                                    },
                                    "3924": {
                                        "type": "integer"
                                    },
                                    "3918": {
                                        "type": "integer"
                                    },
                                    "4039": {
                                        "type": "integer"
                                    },
                                    "4032": {
                                        "type": "integer"
                                    },
                                    "4034": {
                                        "type": "integer"
                                    },
                                    "4030": {
                                        "type": "integer"
                                    },
                                    "3911": {
                                        "type": "integer"
                                    },
                                    "3908": {
                                        "type": "integer"
                                    },
                                    "3773": {
                                        "type": "integer"
                                    },
                                    "4023": {
                                        "type": "integer"
                                    },
                                    "4020": {
                                        "type": "integer"
                                    },
                                    "4019": {
                                        "type": "integer"
                                    },
                                    "4018": {
                                        "type": "integer"
                                    },
                                    "3898": {
                                        "type": "integer"
                                    },
                                    "3899": {
                                        "type": "integer"
                                    },
                                    "4016": {
                                        "type": "integer"
                                    },
                                    "3891": {
                                        "type": "integer"
                                    },
                                    "4011": {
                                        "type": "integer"
                                    },
                                    "4009": {
                                        "type": "integer"
                                    },
                                    "3888": {
                                        "type": "integer"
                                    },
                                    "4005": {
                                        "type": "integer"
                                    },
                                    "3886": {
                                        "type": "integer"
                                    },
                                    "3884": {
                                        "type": "integer"
                                    },
                                    "3881": {
                                        "type": "integer"
                                    },
                                    "3879": {
                                        "type": "integer"
                                    },
                                    "3877": {
                                        "type": "integer"
                                    },
                                    "3876": {
                                        "type": "integer"
                                    },
                                    "3998": {
                                        "type": "integer"
                                    },
                                    "3996": {
                                        "type": "integer"
                                    },
                                    "3995": {
                                        "type": "integer"
                                    },
                                    "3994": {
                                        "type": "integer"
                                    },
                                    "3873": {
                                        "type": "integer"
                                    },
                                    "3993": {
                                        "type": "integer"
                                    },
                                    "3868": {
                                        "type": "integer"
                                    },
                                    "3985": {
                                        "type": "integer"
                                    },
                                    "3984": {
                                        "type": "integer"
                                    },
                                    "3863": {
                                        "type": "integer"
                                    },
                                    "3864": {
                                        "type": "integer"
                                    },
                                    "3982": {
                                        "type": "integer"
                                    },
                                    "3861": {
                                        "type": "integer"
                                    },
                                    "3859": {
                                        "type": "integer"
                                    },
                                    "3860": {
                                        "type": "integer"
                                    },
                                    "3972": {
                                        "type": "integer"
                                    },
                                    "3971": {
                                        "type": "integer"
                                    },
                                    "3973": {
                                        "type": "integer"
                                    },
                                    "3853": {
                                        "type": "integer"
                                    },
                                    "3845": {
                                        "type": "integer"
                                    },
                                    "3965": {
                                        "type": "integer"
                                    },
                                    "4086": {
                                        "type": "integer"
                                    },
                                    "3833": {
                                        "type": "integer"
                                    },
                                    "3942": {
                                        "type": "integer"
                                    },
                                    "3813": {
                                        "type": "integer"
                                    },
                                    "3816": {
                                        "type": "integer"
                                    },
                                    "3940": {
                                        "type": "integer"
                                    },
                                    "3939": {
                                        "type": "integer"
                                    },
                                    "3811": {
                                        "type": "integer"
                                    },
                                    "3808": {
                                        "type": "integer"
                                    },
                                    "3809": {
                                        "type": "integer"
                                    },
                                    "3804": {
                                        "type": "integer"
                                    },
                                    "3801": {
                                        "type": "integer"
                                    },
                                    "3796": {
                                        "type": "integer"
                                    },
                                    "3923": {
                                        "type": "integer"
                                    },
                                    "3791": {
                                        "type": "integer"
                                    },
                                    "3788": {
                                        "type": "integer"
                                    },
                                    "3919": {
                                        "type": "integer"
                                    },
                                    "3780": {
                                        "type": "integer"
                                    },
                                    "3909": {
                                        "type": "integer"
                                    },
                                    "3779": {
                                        "type": "integer"
                                    },
                                    "3778": {
                                        "type": "integer"
                                    },
                                    "3910": {
                                        "type": "integer"
                                    },
                                    "3777": {
                                        "type": "integer"
                                    },
                                    "3767": {
                                        "type": "integer"
                                    },
                                    "3897": {
                                        "type": "integer"
                                    },
                                    "3890": {
                                        "type": "integer"
                                    },
                                    "3760": {
                                        "type": "integer"
                                    },
                                    "3887": {
                                        "type": "integer"
                                    },
                                    "3757": {
                                        "type": "integer"
                                    },
                                    "3883": {
                                        "type": "integer"
                                    },
                                    "3882": {
                                        "type": "integer"
                                    },
                                    "3755": {
                                        "type": "integer"
                                    },
                                    "3753": {
                                        "type": "integer"
                                    },
                                    "3752": {
                                        "type": "integer"
                                    },
                                    "3878": {
                                        "type": "integer"
                                    },
                                    "3747": {
                                        "type": "integer"
                                    },
                                    "3744": {
                                        "type": "integer"
                                    },
                                    "3740": {
                                        "type": "integer"
                                    },
                                    "3867": {
                                        "type": "integer"
                                    },
                                    "3737": {
                                        "type": "integer"
                                    },
                                    "3734": {
                                        "type": "integer"
                                    },
                                    "3731": {
                                        "type": "integer"
                                    },
                                    "3858": {
                                        "type": "integer"
                                    },
                                    "3732": {
                                        "type": "integer"
                                    },
                                    "3852": {
                                        "type": "integer"
                                    },
                                    "3721": {
                                        "type": "integer"
                                    },
                                    "3844": {
                                        "type": "integer"
                                    },
                                    "3717": {
                                        "type": "integer"
                                    },
                                    "3835": {
                                        "type": "integer"
                                    },
                                    "3709": {
                                        "type": "integer"
                                    },
                                    "3834": {
                                        "type": "integer"
                                    },
                                    "3837": {
                                        "type": "integer"
                                    },
                                    "3706": {
                                        "type": "integer"
                                    },
                                    "3836": {
                                        "type": "integer"
                                    },
                                    "3705": {
                                        "type": "integer"
                                    },
                                    "3832": {
                                        "type": "integer"
                                    },
                                    "3831": {
                                        "type": "integer"
                                    },
                                    "3830": {
                                        "type": "integer"
                                    },
                                    "3829": {
                                        "type": "integer"
                                    },
                                    "3828": {
                                        "type": "integer"
                                    },
                                    "3699": {
                                        "type": "integer"
                                    },
                                    "3693": {
                                        "type": "integer"
                                    },
                                    "3820": {
                                        "type": "integer"
                                    },
                                    "3821": {
                                        "type": "integer"
                                    },
                                    "3818": {
                                        "type": "integer"
                                    },
                                    "3815": {
                                        "type": "integer"
                                    },
                                    "3817": {
                                        "type": "integer"
                                    },
                                    "3819": {
                                        "type": "integer"
                                    },
                                    "3812": {
                                        "type": "integer"
                                    },
                                    "3685": {
                                        "type": "integer"
                                    },
                                    "3810": {
                                        "type": "integer"
                                    },
                                    "3686": {
                                        "type": "integer"
                                    },
                                    "3807": {
                                        "type": "integer"
                                    },
                                    "3681": {
                                        "type": "integer"
                                    },
                                    "3803": {
                                        "type": "integer"
                                    },
                                    "3802": {
                                        "type": "integer"
                                    },
                                    "3677": {
                                        "type": "integer"
                                    },
                                    "3672": {
                                        "type": "integer"
                                    },
                                    "3667": {
                                        "type": "integer"
                                    },
                                    "3790": {
                                        "type": "integer"
                                    },
                                    "3789": {
                                        "type": "integer"
                                    },
                                    "3787": {
                                        "type": "integer"
                                    },
                                    "3663": {
                                        "type": "integer"
                                    },
                                    "3656": {
                                        "type": "integer"
                                    },
                                    "3653": {
                                        "type": "integer"
                                    },
                                    "3772": {
                                        "type": "integer"
                                    },
                                    "3649": {
                                        "type": "integer"
                                    },
                                    "3766": {
                                        "type": "integer"
                                    },
                                    "3644": {
                                        "type": "integer"
                                    },
                                    "3764": {
                                        "type": "integer"
                                    },
                                    "3643": {
                                        "type": "integer"
                                    },
                                    "3640": {
                                        "type": "integer"
                                    },
                                    "3765": {
                                        "type": "integer"
                                    },
                                    "3759": {
                                        "type": "integer"
                                    },
                                    "3761": {
                                        "type": "integer"
                                    },
                                    "3513": {
                                        "type": "integer"
                                    },
                                    "3634": {
                                        "type": "integer"
                                    },
                                    "3633": {
                                        "type": "integer"
                                    },
                                    "3756": {
                                        "type": "integer"
                                    },
                                    "3629": {
                                        "type": "integer"
                                    },
                                    "3625": {
                                        "type": "integer"
                                    },
                                    "3746": {
                                        "type": "integer"
                                    },
                                    "3622": {
                                        "type": "integer"
                                    },
                                    "3743": {
                                        "type": "integer"
                                    },
                                    "3620": {
                                        "type": "integer"
                                    },
                                    "3617": {
                                        "type": "integer"
                                    },
                                    "3614": {
                                        "type": "integer"
                                    },
                                    "3730": {
                                        "type": "integer"
                                    },
                                    "3610": {
                                        "type": "integer"
                                    },
                                    "3733": {
                                        "type": "integer"
                                    },
                                    "3612": {
                                        "type": "integer"
                                    },
                                    "3608": {
                                        "type": "integer"
                                    },
                                    "3606": {
                                        "type": "integer"
                                    },
                                    "3607": {
                                        "type": "integer"
                                    },
                                    "3723": {
                                        "type": "integer"
                                    },
                                    "3603": {
                                        "type": "integer"
                                    },
                                    "3601": {
                                        "type": "integer"
                                    },
                                    "3598": {
                                        "type": "integer"
                                    },
                                    "3716": {
                                        "type": "integer"
                                    },
                                    "3718": {
                                        "type": "integer"
                                    },
                                    "3713": {
                                        "type": "integer"
                                    },
                                    "3712": {
                                        "type": "integer"
                                    },
                                    "3596": {
                                        "type": "integer"
                                    },
                                    "3714": {
                                        "type": "integer"
                                    },
                                    "3710": {
                                        "type": "integer"
                                    },
                                    "3708": {
                                        "type": "integer"
                                    },
                                    "3707": {
                                        "type": "integer"
                                    },
                                    "3592": {
                                        "type": "integer"
                                    },
                                    "3704": {
                                        "type": "integer"
                                    },
                                    "3703": {
                                        "type": "integer"
                                    },
                                    "3702": {
                                        "type": "integer"
                                    },
                                    "3458": {
                                        "type": "integer"
                                    },
                                    "3588": {
                                        "type": "integer"
                                    },
                                    "3586": {
                                        "type": "integer"
                                    },
                                    "3587": {
                                        "type": "integer"
                                    },
                                    "3698": {
                                        "type": "integer"
                                    },
                                    "3697": {
                                        "type": "integer"
                                    },
                                    "3584": {
                                        "type": "integer"
                                    },
                                    "3578": {
                                        "type": "integer"
                                    },
                                    "3580": {
                                        "type": "integer"
                                    },
                                    "3576": {
                                        "type": "integer"
                                    },
                                    "3691": {
                                        "type": "integer"
                                    },
                                    "3570": {
                                        "type": "integer"
                                    },
                                    "3565": {
                                        "type": "integer"
                                    },
                                    "3566": {
                                        "type": "integer"
                                    },
                                    "3562": {
                                        "type": "integer"
                                    },
                                    "3559": {
                                        "type": "integer"
                                    },
                                    "3560": {
                                        "type": "integer"
                                    },
                                    "3556": {
                                        "type": "integer"
                                    },
                                    "3678": {
                                        "type": "integer"
                                    },
                                    "3551": {
                                        "type": "integer"
                                    },
                                    "3546": {
                                        "type": "integer"
                                    },
                                    "3542": {
                                        "type": "integer"
                                    },
                                    "3536": {
                                        "type": "integer"
                                    },
                                    "3657": {
                                        "type": "integer"
                                    },
                                    "3531": {
                                        "type": "integer"
                                    },
                                    "3528": {
                                        "type": "integer"
                                    },
                                    "3521": {
                                        "type": "integer"
                                    },
                                    "3642": {
                                        "type": "integer"
                                    },
                                    "3639": {
                                        "type": "integer"
                                    },
                                    "3517": {
                                        "type": "integer"
                                    },
                                    "3508": {
                                        "type": "integer"
                                    },
                                    "3503": {
                                        "type": "integer"
                                    },
                                    "3501": {
                                        "type": "integer"
                                    },
                                    "3499": {
                                        "type": "integer"
                                    },
                                    "3626": {
                                        "type": "integer"
                                    },
                                    "3624": {
                                        "type": "integer"
                                    },
                                    "3498": {
                                        "type": "integer"
                                    },
                                    "3621": {
                                        "type": "integer"
                                    },
                                    "3495": {
                                        "type": "integer"
                                    },
                                    "3619": {
                                        "type": "integer"
                                    },
                                    "3492": {
                                        "type": "integer"
                                    },
                                    "3618": {
                                        "type": "integer"
                                    },
                                    "3490": {
                                        "type": "integer"
                                    },
                                    "3615": {
                                        "type": "integer"
                                    },
                                    "3616": {
                                        "type": "integer"
                                    },
                                    "3487": {
                                        "type": "integer"
                                    },
                                    "3611": {
                                        "type": "integer"
                                    },
                                    "3486": {
                                        "type": "integer"
                                    },
                                    "3609": {
                                        "type": "integer"
                                    },
                                    "3484": {
                                        "type": "integer"
                                    },
                                    "3727": {
                                        "type": "integer"
                                    },
                                    "3478": {
                                        "type": "integer"
                                    },
                                    "3604": {
                                        "type": "integer"
                                    },
                                    "3477": {
                                        "type": "integer"
                                    },
                                    "3602": {
                                        "type": "integer"
                                    },
                                    "3605": {
                                        "type": "integer"
                                    },
                                    "3475": {
                                        "type": "integer"
                                    },
                                    "3600": {
                                        "type": "integer"
                                    },
                                    "3473": {
                                        "type": "integer"
                                    },
                                    "3468": {
                                        "type": "integer"
                                    },
                                    "3466": {
                                        "type": "integer"
                                    },
                                    "3591": {
                                        "type": "integer"
                                    },
                                    "3460": {
                                        "type": "integer"
                                    },
                                    "3590": {
                                        "type": "integer"
                                    },
                                    "3459": {
                                        "type": "integer"
                                    },
                                    "3700": {
                                        "type": "integer"
                                    },
                                    "3585": {
                                        "type": "integer"
                                    },
                                    "3455": {
                                        "type": "integer"
                                    },
                                    "3583": {
                                        "type": "integer"
                                    },
                                    "3582": {
                                        "type": "integer"
                                    },
                                    "3581": {
                                        "type": "integer"
                                    },
                                    "3451": {
                                        "type": "integer"
                                    },
                                    "3695": {
                                        "type": "integer"
                                    },
                                    "3577": {
                                        "type": "integer"
                                    },
                                    "3575": {
                                        "type": "integer"
                                    },
                                    "3574": {
                                        "type": "integer"
                                    },
                                    "3569": {
                                        "type": "integer"
                                    },
                                    "3443": {
                                        "type": "integer"
                                    },
                                    "3439": {
                                        "type": "integer"
                                    },
                                    "3567": {
                                        "type": "integer"
                                    },
                                    "3564": {
                                        "type": "integer"
                                    },
                                    "3436": {
                                        "type": "integer"
                                    },
                                    "3435": {
                                        "type": "integer"
                                    },
                                    "3557": {
                                        "type": "integer"
                                    },
                                    "3431": {
                                        "type": "integer"
                                    },
                                    "3555": {
                                        "type": "integer"
                                    },
                                    "3554": {
                                        "type": "integer"
                                    },
                                    "3553": {
                                        "type": "integer"
                                    },
                                    "3427": {
                                        "type": "integer"
                                    },
                                    "3425": {
                                        "type": "integer"
                                    },
                                    "3420": {
                                        "type": "integer"
                                    },
                                    "3416": {
                                        "type": "integer"
                                    },
                                    "3541": {
                                        "type": "integer"
                                    },
                                    "3540": {
                                        "type": "integer"
                                    },
                                    "3539": {
                                        "type": "integer"
                                    },
                                    "3413": {
                                        "type": "integer"
                                    },
                                    "3412": {
                                        "type": "integer"
                                    },
                                    "3537": {
                                        "type": "integer"
                                    },
                                    "3406": {
                                        "type": "integer"
                                    },
                                    "3530": {
                                        "type": "integer"
                                    },
                                    "3529": {
                                        "type": "integer"
                                    },
                                    "3527": {
                                        "type": "integer"
                                    },
                                    "3526": {
                                        "type": "integer"
                                    },
                                    "3525": {
                                        "type": "integer"
                                    },
                                    "3399": {
                                        "type": "integer"
                                    },
                                    "3520": {
                                        "type": "integer"
                                    },
                                    "3395": {
                                        "type": "integer"
                                    },
                                    "3516": {
                                        "type": "integer"
                                    },
                                    "3393": {
                                        "type": "integer"
                                    },
                                    "3511": {
                                        "type": "integer"
                                    },
                                    "3390": {
                                        "type": "integer"
                                    },
                                    "3512": {
                                        "type": "integer"
                                    },
                                    "3388": {
                                        "type": "integer"
                                    },
                                    "3385": {
                                        "type": "integer"
                                    },
                                    "3509": {
                                        "type": "integer"
                                    },
                                    "3380": {
                                        "type": "integer"
                                    },
                                    "3502": {
                                        "type": "integer"
                                    },
                                    "3378": {
                                        "type": "integer"
                                    },
                                    "3374": {
                                        "type": "integer"
                                    },
                                    "3375": {
                                        "type": "integer"
                                    },
                                    "3373": {
                                        "type": "integer"
                                    },
                                    "3370": {
                                        "type": "integer"
                                    },
                                    "3367": {
                                        "type": "integer"
                                    },
                                    "3363": {
                                        "type": "integer"
                                    },
                                    "3483": {
                                        "type": "integer"
                                    },
                                    "3482": {
                                        "type": "integer"
                                    },
                                    "3481": {
                                        "type": "integer"
                                    },
                                    "3480": {
                                        "type": "integer"
                                    },
                                    "3358": {
                                        "type": "integer"
                                    },
                                    "3359": {
                                        "type": "integer"
                                    },
                                    "3479": {
                                        "type": "integer"
                                    },
                                    "3474": {
                                        "type": "integer"
                                    },
                                    "3356": {
                                        "type": "integer"
                                    },
                                    "3472": {
                                        "type": "integer"
                                    },
                                    "3353": {
                                        "type": "integer"
                                    },
                                    "3352": {
                                        "type": "integer"
                                    },
                                    "3465": {
                                        "type": "integer"
                                    },
                                    "3348": {
                                        "type": "integer"
                                    },
                                    "3347": {
                                        "type": "integer"
                                    },
                                    "3344": {
                                        "type": "integer"
                                    },
                                    "3341": {
                                        "type": "integer"
                                    },
                                    "3338": {
                                        "type": "integer"
                                    },
                                    "3454": {
                                        "type": "integer"
                                    },
                                    "3453": {
                                        "type": "integer"
                                    },
                                    "3337": {
                                        "type": "integer"
                                    },
                                    "3450": {
                                        "type": "integer"
                                    },
                                    "3448": {
                                        "type": "integer"
                                    },
                                    "3446": {
                                        "type": "integer"
                                    },
                                    "3334": {
                                        "type": "integer"
                                    },
                                    "3449": {
                                        "type": "integer"
                                    },
                                    "3445": {
                                        "type": "integer"
                                    },
                                    "3444": {
                                        "type": "integer"
                                    },
                                    "3442": {
                                        "type": "integer"
                                    },
                                    "3441": {
                                        "type": "integer"
                                    },
                                    "3331": {
                                        "type": "integer"
                                    },
                                    "3440": {
                                        "type": "integer"
                                    },
                                    "3329": {
                                        "type": "integer"
                                    },
                                    "3325": {
                                        "type": "integer"
                                    },
                                    "3319": {
                                        "type": "integer"
                                    },
                                    "3426": {
                                        "type": "integer"
                                    },
                                    "3313": {
                                        "type": "integer"
                                    },
                                    "3310": {
                                        "type": "integer"
                                    },
                                    "3421": {
                                        "type": "integer"
                                    },
                                    "3419": {
                                        "type": "integer"
                                    },
                                    "3418": {
                                        "type": "integer"
                                    },
                                    "3307": {
                                        "type": "integer"
                                    },
                                    "3305": {
                                        "type": "integer"
                                    },
                                    "3411": {
                                        "type": "integer"
                                    },
                                    "3301": {
                                        "type": "integer"
                                    },
                                    "3295": {
                                        "type": "integer"
                                    },
                                    "3398": {
                                        "type": "integer"
                                    },
                                    "3287": {
                                        "type": "integer"
                                    },
                                    "3394": {
                                        "type": "integer"
                                    },
                                    "3283": {
                                        "type": "integer"
                                    },
                                    "3281": {
                                        "type": "integer"
                                    },
                                    "3389": {
                                        "type": "integer"
                                    },
                                    "3276": {
                                        "type": "integer"
                                    },
                                    "3384": {
                                        "type": "integer"
                                    },
                                    "3383": {
                                        "type": "integer"
                                    },
                                    "3269": {
                                        "type": "integer"
                                    },
                                    "3267": {
                                        "type": "integer"
                                    },
                                    "3262": {
                                        "type": "integer"
                                    },
                                    "3376": {
                                        "type": "integer"
                                    },
                                    "3259": {
                                        "type": "integer"
                                    },
                                    "3260": {
                                        "type": "integer"
                                    },
                                    "3257": {
                                        "type": "integer"
                                    },
                                    "3254": {
                                        "type": "integer"
                                    },
                                    "3249": {
                                        "type": "integer"
                                    },
                                    "3246": {
                                        "type": "integer"
                                    },
                                    "3357": {
                                        "type": "integer"
                                    },
                                    "3243": {
                                        "type": "integer"
                                    },
                                    "3351": {
                                        "type": "integer"
                                    },
                                    "3350": {
                                        "type": "integer"
                                    },
                                    "3349": {
                                        "type": "integer"
                                    },
                                    "3239": {
                                        "type": "integer"
                                    },
                                    "3240": {
                                        "type": "integer"
                                    },
                                    "3346": {
                                        "type": "integer"
                                    },
                                    "3235": {
                                        "type": "integer"
                                    },
                                    "3233": {
                                        "type": "integer"
                                    },
                                    "3230": {
                                        "type": "integer"
                                    },
                                    "3227": {
                                        "type": "integer"
                                    },
                                    "3339": {
                                        "type": "integer"
                                    },
                                    "3226": {
                                        "type": "integer"
                                    },
                                    "3223": {
                                        "type": "integer"
                                    },
                                    "3221": {
                                        "type": "integer"
                                    },
                                    "3220": {
                                        "type": "integer"
                                    },
                                    "3332": {
                                        "type": "integer"
                                    },
                                    "3215": {
                                        "type": "integer"
                                    },
                                    "3208": {
                                        "type": "integer"
                                    },
                                    "3203": {
                                        "type": "integer"
                                    },
                                    "3199": {
                                        "type": "integer"
                                    },
                                    "3196": {
                                        "type": "integer"
                                    },
                                    "3195": {
                                        "type": "integer"
                                    },
                                    "3190": {
                                        "type": "integer"
                                    },
                                    "3294": {
                                        "type": "integer"
                                    },
                                    "3183": {
                                        "type": "integer"
                                    },
                                    "3286": {
                                        "type": "integer"
                                    },
                                    "3174": {
                                        "type": "integer"
                                    },
                                    "3282": {
                                        "type": "integer"
                                    },
                                    "3171": {
                                        "type": "integer"
                                    },
                                    "3279": {
                                        "type": "integer"
                                    },
                                    "3169": {
                                        "type": "integer"
                                    },
                                    "3275": {
                                        "type": "integer"
                                    },
                                    "3165": {
                                        "type": "integer"
                                    },
                                    "3157": {
                                        "type": "integer"
                                    },
                                    "3155": {
                                        "type": "integer"
                                    },
                                    "3268": {
                                        "type": "integer"
                                    },
                                    "3261": {
                                        "type": "integer"
                                    },
                                    "3150": {
                                        "type": "integer"
                                    },
                                    "3148": {
                                        "type": "integer"
                                    },
                                    "3258": {
                                        "type": "integer"
                                    },
                                    "3145": {
                                        "type": "integer"
                                    },
                                    "3255": {
                                        "type": "integer"
                                    },
                                    "3256": {
                                        "type": "integer"
                                    },
                                    "3137": {
                                        "type": "integer"
                                    },
                                    "3136": {
                                        "type": "integer"
                                    },
                                    "3247": {
                                        "type": "integer"
                                    },
                                    "3132": {
                                        "type": "integer"
                                    },
                                    "3242": {
                                        "type": "integer"
                                    },
                                    "3241": {
                                        "type": "integer"
                                    },
                                    "3237": {
                                        "type": "integer"
                                    },
                                    "3238": {
                                        "type": "integer"
                                    },
                                    "3130": {
                                        "type": "integer"
                                    },
                                    "3236": {
                                        "type": "integer"
                                    },
                                    "3127": {
                                        "type": "integer"
                                    },
                                    "3125": {
                                        "type": "integer"
                                    },
                                    "3126": {
                                        "type": "integer"
                                    },
                                    "3123": {
                                        "type": "integer"
                                    },
                                    "3234": {
                                        "type": "integer"
                                    },
                                    "3121": {
                                        "type": "integer"
                                    },
                                    "3117": {
                                        "type": "integer"
                                    },
                                    "3113": {
                                        "type": "integer"
                                    },
                                    "3222": {
                                        "type": "integer"
                                    },
                                    "3110": {
                                        "type": "integer"
                                    },
                                    "3218": {
                                        "type": "integer"
                                    },
                                    "3107": {
                                        "type": "integer"
                                    },
                                    "3219": {
                                        "type": "integer"
                                    },
                                    "3105": {
                                        "type": "integer"
                                    },
                                    "3097": {
                                        "type": "integer"
                                    },
                                    "3205": {
                                        "type": "integer"
                                    },
                                    "3206": {
                                        "type": "integer"
                                    },
                                    "3204": {
                                        "type": "integer"
                                    },
                                    "3093": {
                                        "type": "integer"
                                    },
                                    "3089": {
                                        "type": "integer"
                                    },
                                    "3085": {
                                        "type": "integer"
                                    },
                                    "3084": {
                                        "type": "integer"
                                    },
                                    "3080": {
                                        "type": "integer"
                                    },
                                    "3073": {
                                        "type": "integer"
                                    },
                                    "3172": {
                                        "type": "integer"
                                    },
                                    "3173": {
                                        "type": "integer"
                                    },
                                    "3065": {
                                        "type": "integer"
                                    },
                                    "3060": {
                                        "type": "integer"
                                    },
                                    "3063": {
                                        "type": "integer"
                                    },
                                    "3059": {
                                        "type": "integer"
                                    },
                                    "3054": {
                                        "type": "integer"
                                    },
                                    "3046": {
                                        "type": "integer"
                                    },
                                    "3154": {
                                        "type": "integer"
                                    },
                                    "3045": {
                                        "type": "integer"
                                    },
                                    "3153": {
                                        "type": "integer"
                                    },
                                    "3041": {
                                        "type": "integer"
                                    },
                                    "3151": {
                                        "type": "integer"
                                    },
                                    "3152": {
                                        "type": "integer"
                                    },
                                    "3039": {
                                        "type": "integer"
                                    },
                                    "3147": {
                                        "type": "integer"
                                    },
                                    "3036": {
                                        "type": "integer"
                                    },
                                    "3025": {
                                        "type": "integer"
                                    },
                                    "3019": {
                                        "type": "integer"
                                    },
                                    "3016": {
                                        "type": "integer"
                                    },
                                    "3015": {
                                        "type": "integer"
                                    },
                                    "3013": {
                                        "type": "integer"
                                    },
                                    "3010": {
                                        "type": "integer"
                                    },
                                    "3119": {
                                        "type": "integer"
                                    },
                                    "3120": {
                                        "type": "integer"
                                    },
                                    "3118": {
                                        "type": "integer"
                                    },
                                    "3005": {
                                        "type": "integer"
                                    },
                                    "3004": {
                                        "type": "integer"
                                    },
                                    "3114": {
                                        "type": "integer"
                                    },
                                    "2996": {
                                        "type": "integer"
                                    },
                                    "2994": {
                                        "type": "integer"
                                    },
                                    "3092": {
                                        "type": "integer"
                                    },
                                    "2981": {
                                        "type": "integer"
                                    },
                                    "2980": {
                                        "type": "integer"
                                    },
                                    "3090": {
                                        "type": "integer"
                                    },
                                    "3091": {
                                        "type": "integer"
                                    },
                                    "2973": {
                                        "type": "integer"
                                    },
                                    "3083": {
                                        "type": "integer"
                                    },
                                    "2971": {
                                        "type": "integer"
                                    },
                                    "2969": {
                                        "type": "integer"
                                    },
                                    "2965": {
                                        "type": "integer"
                                    },
                                    "2964": {
                                        "type": "integer"
                                    },
                                    "2963": {
                                        "type": "integer"
                                    },
                                    "3074": {
                                        "type": "integer"
                                    },
                                    "3064": {
                                        "type": "integer"
                                    },
                                    "2954": {
                                        "type": "integer"
                                    },
                                    "3061": {
                                        "type": "integer"
                                    },
                                    "2950": {
                                        "type": "integer"
                                    },
                                    "3058": {
                                        "type": "integer"
                                    },
                                    "3053": {
                                        "type": "integer"
                                    },
                                    "2946": {
                                        "type": "integer"
                                    },
                                    "2940": {
                                        "type": "integer"
                                    },
                                    "3047": {
                                        "type": "integer"
                                    },
                                    "2937": {
                                        "type": "integer"
                                    },
                                    "2933": {
                                        "type": "integer"
                                    },
                                    "2930": {
                                        "type": "integer"
                                    },
                                    "2929": {
                                        "type": "integer"
                                    },
                                    "3024": {
                                        "type": "integer"
                                    },
                                    "2916": {
                                        "type": "integer"
                                    },
                                    "2910": {
                                        "type": "integer"
                                    },
                                    "2909": {
                                        "type": "integer"
                                    },
                                    "3014": {
                                        "type": "integer"
                                    },
                                    "2906": {
                                        "type": "integer"
                                    },
                                    "3012": {
                                        "type": "integer"
                                    },
                                    "2904": {
                                        "type": "integer"
                                    },
                                    "2903": {
                                        "type": "integer"
                                    },
                                    "2905": {
                                        "type": "integer"
                                    },
                                    "2902": {
                                        "type": "integer"
                                    },
                                    "2897": {
                                        "type": "integer"
                                    },
                                    "2887": {
                                        "type": "integer"
                                    },
                                    "2886": {
                                        "type": "integer"
                                    },
                                    "2995": {
                                        "type": "integer"
                                    },
                                    "2872": {
                                        "type": "integer"
                                    },
                                    "2866": {
                                        "type": "integer"
                                    },
                                    "2974": {
                                        "type": "integer"
                                    },
                                    "2863": {
                                        "type": "integer"
                                    },
                                    "2861": {
                                        "type": "integer"
                                    },
                                    "2858": {
                                        "type": "integer"
                                    },
                                    "3076": {
                                        "type": "integer"
                                    },
                                    "2953": {
                                        "type": "integer"
                                    },
                                    "2952": {
                                        "type": "integer"
                                    },
                                    "2736": {
                                        "type": "integer"
                                    },
                                    "2949": {
                                        "type": "integer"
                                    },
                                    "2844": {
                                        "type": "integer"
                                    },
                                    "2945": {
                                        "type": "integer"
                                    },
                                    "2835": {
                                        "type": "integer"
                                    },
                                    "2831": {
                                        "type": "integer"
                                    },
                                    "2828": {
                                        "type": "integer"
                                    },
                                    "2824": {
                                        "type": "integer"
                                    },
                                    "2822": {
                                        "type": "integer"
                                    },
                                    "2819": {
                                        "type": "integer"
                                    },
                                    "2807": {
                                        "type": "integer"
                                    },
                                    "2801": {
                                        "type": "integer"
                                    },
                                    "2797": {
                                        "type": "integer"
                                    },
                                    "2798": {
                                        "type": "integer"
                                    },
                                    "2907": {
                                        "type": "integer"
                                    },
                                    "2796": {
                                        "type": "integer"
                                    },
                                    "2789": {
                                        "type": "integer"
                                    },
                                    "2778": {
                                        "type": "integer"
                                    },
                                    "2764": {
                                        "type": "integer"
                                    },
                                    "2758": {
                                        "type": "integer"
                                    },
                                    "2862": {
                                        "type": "integer"
                                    },
                                    "2753": {
                                        "type": "integer"
                                    },
                                    "2860": {
                                        "type": "integer"
                                    },
                                    "2859": {
                                        "type": "integer"
                                    },
                                    "2842": {
                                        "type": "integer"
                                    },
                                    "2841": {
                                        "type": "integer"
                                    },
                                    "2840": {
                                        "type": "integer"
                                    },
                                    "2732": {
                                        "type": "integer"
                                    },
                                    "2834": {
                                        "type": "integer"
                                    },
                                    "2730": {
                                        "type": "integer"
                                    },
                                    "2833": {
                                        "type": "integer"
                                    },
                                    "2728": {
                                        "type": "integer"
                                    },
                                    "2830": {
                                        "type": "integer"
                                    },
                                    "2727": {
                                        "type": "integer"
                                    },
                                    "2726": {
                                        "type": "integer"
                                    },
                                    "2722": {
                                        "type": "integer"
                                    },
                                    "2720": {
                                        "type": "integer"
                                    },
                                    "2719": {
                                        "type": "integer"
                                    },
                                    "2818": {
                                        "type": "integer"
                                    },
                                    "2714": {
                                        "type": "integer"
                                    },
                                    "2704": {
                                        "type": "integer"
                                    },
                                    "2808": {
                                        "type": "integer"
                                    },
                                    "2695": {
                                        "type": "integer"
                                    },
                                    "2693": {
                                        "type": "integer"
                                    },
                                    "2686": {
                                        "type": "integer"
                                    },
                                    "2777": {
                                        "type": "integer"
                                    },
                                    "2674": {
                                        "type": "integer"
                                    },
                                    "2662": {
                                        "type": "integer"
                                    },
                                    "2654": {
                                        "type": "integer"
                                    },
                                    "2650": {
                                        "type": "integer"
                                    },
                                    "2735": {
                                        "type": "integer"
                                    },
                                    "2734": {
                                        "type": "integer"
                                    },
                                    "2733": {
                                        "type": "integer"
                                    },
                                    "2632": {
                                        "type": "integer"
                                    },
                                    "2631": {
                                        "type": "integer"
                                    },
                                    "2627": {
                                        "type": "integer"
                                    },
                                    "2621": {
                                        "type": "integer"
                                    },
                                    "2618": {
                                        "type": "integer"
                                    },
                                    "2616": {
                                        "type": "integer"
                                    },
                                    "2613": {
                                        "type": "integer"
                                    },
                                    "2607": {
                                        "type": "integer"
                                    },
                                    "2598": {
                                        "type": "integer"
                                    },
                                    "2705": {
                                        "type": "integer"
                                    },
                                    "2587": {
                                        "type": "integer"
                                    },
                                    "2585": {
                                        "type": "integer"
                                    },
                                    "2586": {
                                        "type": "integer"
                                    },
                                    "2578": {
                                        "type": "integer"
                                    },
                                    "2568": {
                                        "type": "integer"
                                    },
                                    "2675": {
                                        "type": "integer"
                                    },
                                    "2555": {
                                        "type": "integer"
                                    },
                                    "2548": {
                                        "type": "integer"
                                    },
                                    "2655": {
                                        "type": "integer"
                                    },
                                    "2542": {
                                        "type": "integer"
                                    },
                                    "2526": {
                                        "type": "integer"
                                    },
                                    "2630": {
                                        "type": "integer"
                                    },
                                    "2522": {
                                        "type": "integer"
                                    },
                                    "2626": {
                                        "type": "integer"
                                    },
                                    "2518": {
                                        "type": "integer"
                                    },
                                    "2403": {
                                        "type": "integer"
                                    },
                                    "2513": {
                                        "type": "integer"
                                    },
                                    "2620": {
                                        "type": "integer"
                                    },
                                    "2619": {
                                        "type": "integer"
                                    },
                                    "2510": {
                                        "type": "integer"
                                    },
                                    "2617": {
                                        "type": "integer"
                                    },
                                    "2507": {
                                        "type": "integer"
                                    },
                                    "2505": {
                                        "type": "integer"
                                    },
                                    "2499": {
                                        "type": "integer"
                                    },
                                    "2490": {
                                        "type": "integer"
                                    },
                                    "2491": {
                                        "type": "integer"
                                    },
                                    "2489": {
                                        "type": "integer"
                                    },
                                    "2597": {
                                        "type": "integer"
                                    },
                                    "2476": {
                                        "type": "integer"
                                    },
                                    "2470": {
                                        "type": "integer"
                                    },
                                    "2459": {
                                        "type": "integer"
                                    },
                                    "2447": {
                                        "type": "integer"
                                    },
                                    "2547": {
                                        "type": "integer"
                                    },
                                    "2441": {
                                        "type": "integer"
                                    },
                                    "2439": {
                                        "type": "integer"
                                    },
                                    "2436": {
                                        "type": "integer"
                                    },
                                    "2541": {
                                        "type": "integer"
                                    },
                                    "2543": {
                                        "type": "integer"
                                    },
                                    "2433": {
                                        "type": "integer"
                                    },
                                    "2525": {
                                        "type": "integer"
                                    },
                                    "2418": {
                                        "type": "integer"
                                    },
                                    "2520": {
                                        "type": "integer"
                                    },
                                    "2413": {
                                        "type": "integer"
                                    },
                                    "2416": {
                                        "type": "integer"
                                    },
                                    "2517": {
                                        "type": "integer"
                                    },
                                    "2408": {
                                        "type": "integer"
                                    },
                                    "2506": {
                                        "type": "integer"
                                    },
                                    "2397": {
                                        "type": "integer"
                                    },
                                    "2395": {
                                        "type": "integer"
                                    },
                                    "2391": {
                                        "type": "integer"
                                    },
                                    "2498": {
                                        "type": "integer"
                                    },
                                    "2500": {
                                        "type": "integer"
                                    },
                                    "2387": {
                                        "type": "integer"
                                    },
                                    "2381": {
                                        "type": "integer"
                                    },
                                    "2365": {
                                        "type": "integer"
                                    },
                                    "2360": {
                                        "type": "integer"
                                    },
                                    "2353": {
                                        "type": "integer"
                                    },
                                    "2460": {
                                        "type": "integer"
                                    },
                                    "2461": {
                                        "type": "integer"
                                    },
                                    "2349": {
                                        "type": "integer"
                                    },
                                    "2457": {
                                        "type": "integer"
                                    },
                                    "2347": {
                                        "type": "integer"
                                    },
                                    "2348": {
                                        "type": "integer"
                                    },
                                    "2458": {
                                        "type": "integer"
                                    },
                                    "2337": {
                                        "type": "integer"
                                    },
                                    "2440": {
                                        "type": "integer"
                                    },
                                    "2438": {
                                        "type": "integer"
                                    },
                                    "2327": {
                                        "type": "integer"
                                    },
                                    "2432": {
                                        "type": "integer"
                                    },
                                    "2322": {
                                        "type": "integer"
                                    },
                                    "2321": {
                                        "type": "integer"
                                    },
                                    "2417": {
                                        "type": "integer"
                                    },
                                    "2307": {
                                        "type": "integer"
                                    },
                                    "2415": {
                                        "type": "integer"
                                    },
                                    "2306": {
                                        "type": "integer"
                                    },
                                    "2412": {
                                        "type": "integer"
                                    },
                                    "2302": {
                                        "type": "integer"
                                    },
                                    "2407": {
                                        "type": "integer"
                                    },
                                    "2299": {
                                        "type": "integer"
                                    },
                                    "2292": {
                                        "type": "integer"
                                    },
                                    "2293": {
                                        "type": "integer"
                                    },
                                    "2291": {
                                        "type": "integer"
                                    },
                                    "2288": {
                                        "type": "integer"
                                    },
                                    "2396": {
                                        "type": "integer"
                                    },
                                    "2398": {
                                        "type": "integer"
                                    },
                                    "2286": {
                                        "type": "integer"
                                    },
                                    "2285": {
                                        "type": "integer"
                                    },
                                    "2283": {
                                        "type": "integer"
                                    },
                                    "2392": {
                                        "type": "integer"
                                    },
                                    "2277": {
                                        "type": "integer"
                                    },
                                    "2271": {
                                        "type": "integer"
                                    },
                                    "2255": {
                                        "type": "integer"
                                    },
                                    "2359": {
                                        "type": "integer"
                                    },
                                    "2249": {
                                        "type": "integer"
                                    },
                                    "2243": {
                                        "type": "integer"
                                    },
                                    "2238": {
                                        "type": "integer"
                                    },
                                    "2239": {
                                        "type": "integer"
                                    },
                                    "2236": {
                                        "type": "integer"
                                    },
                                    "2227": {
                                        "type": "integer"
                                    },
                                    "2218": {
                                        "type": "integer"
                                    },
                                    "2211": {
                                        "type": "integer"
                                    },
                                    "2196": {
                                        "type": "integer"
                                    },
                                    "2193": {
                                        "type": "integer"
                                    },
                                    "2301": {
                                        "type": "integer"
                                    },
                                    "2191": {
                                        "type": "integer"
                                    },
                                    "2298": {
                                        "type": "integer"
                                    },
                                    "2188": {
                                        "type": "integer"
                                    },
                                    "2181": {
                                        "type": "integer"
                                    },
                                    "2401": {
                                        "type": "integer"
                                    },
                                    "2290": {
                                        "type": "integer"
                                    },
                                    "2064": {
                                        "type": "integer"
                                    },
                                    "2177": {
                                        "type": "integer"
                                    },
                                    "2174": {
                                        "type": "integer"
                                    },
                                    "2284": {
                                        "type": "integer"
                                    },
                                    "2171": {
                                        "type": "integer"
                                    },
                                    "2170": {
                                        "type": "integer"
                                    },
                                    "2165": {
                                        "type": "integer"
                                    },
                                    "2164": {
                                        "type": "integer"
                                    },
                                    "2159": {
                                        "type": "integer"
                                    },
                                    "2270": {
                                        "type": "integer"
                                    },
                                    "2157": {
                                        "type": "integer"
                                    },
                                    "2155": {
                                        "type": "integer"
                                    },
                                    "2142": {
                                        "type": "integer"
                                    },
                                    "2136": {
                                        "type": "integer"
                                    },
                                    "2137": {
                                        "type": "integer"
                                    },
                                    "2131": {
                                        "type": "integer"
                                    },
                                    "2129": {
                                        "type": "integer"
                                    },
                                    "2128": {
                                        "type": "integer"
                                    },
                                    "2240": {
                                        "type": "integer"
                                    },
                                    "2125": {
                                        "type": "integer"
                                    },
                                    "2123": {
                                        "type": "integer"
                                    },
                                    "2235": {
                                        "type": "integer"
                                    },
                                    "2234": {
                                        "type": "integer"
                                    },
                                    "2120": {
                                        "type": "integer"
                                    },
                                    "2226": {
                                        "type": "integer"
                                    },
                                    "2113": {
                                        "type": "integer"
                                    },
                                    "2104": {
                                        "type": "integer"
                                    },
                                    "2217": {
                                        "type": "integer"
                                    },
                                    "2103": {
                                        "type": "integer"
                                    },
                                    "2096": {
                                        "type": "integer"
                                    },
                                    "2087": {
                                        "type": "integer"
                                    },
                                    "2201": {
                                        "type": "integer"
                                    },
                                    "2086": {
                                        "type": "integer"
                                    },
                                    "2202": {
                                        "type": "integer"
                                    },
                                    "2082": {
                                        "type": "integer"
                                    },
                                    "2192": {
                                        "type": "integer"
                                    },
                                    "2194": {
                                        "type": "integer"
                                    },
                                    "2080": {
                                        "type": "integer"
                                    },
                                    "2190": {
                                        "type": "integer"
                                    },
                                    "2078": {
                                        "type": "integer"
                                    },
                                    "2187": {
                                        "type": "integer"
                                    },
                                    "1952": {
                                        "type": "integer"
                                    },
                                    "2183": {
                                        "type": "integer"
                                    },
                                    "2182": {
                                        "type": "integer"
                                    },
                                    "2069": {
                                        "type": "integer"
                                    },
                                    "2070": {
                                        "type": "integer"
                                    },
                                    "2061": {
                                        "type": "integer"
                                    },
                                    "2172": {
                                        "type": "integer"
                                    },
                                    "2059": {
                                        "type": "integer"
                                    },
                                    "2173": {
                                        "type": "integer"
                                    },
                                    "2169": {
                                        "type": "integer"
                                    },
                                    "2168": {
                                        "type": "integer"
                                    },
                                    "2055": {
                                        "type": "integer"
                                    },
                                    "2051": {
                                        "type": "integer"
                                    },
                                    "2163": {
                                        "type": "integer"
                                    },
                                    "2162": {
                                        "type": "integer"
                                    },
                                    "2049": {
                                        "type": "integer"
                                    },
                                    "2046": {
                                        "type": "integer"
                                    },
                                    "2045": {
                                        "type": "integer"
                                    },
                                    "2158": {
                                        "type": "integer"
                                    },
                                    "2268": {
                                        "type": "integer"
                                    },
                                    "2042": {
                                        "type": "integer"
                                    },
                                    "2029": {
                                        "type": "integer"
                                    },
                                    "2026": {
                                        "type": "integer"
                                    },
                                    "2138": {
                                        "type": "integer"
                                    },
                                    "2139": {
                                        "type": "integer"
                                    },
                                    "2023": {
                                        "type": "integer"
                                    },
                                    "2019": {
                                        "type": "integer"
                                    },
                                    "2132": {
                                        "type": "integer"
                                    },
                                    "2133": {
                                        "type": "integer"
                                    },
                                    "2242": {
                                        "type": "integer"
                                    },
                                    "2014": {
                                        "type": "integer"
                                    },
                                    "2013": {
                                        "type": "integer"
                                    },
                                    "2009": {
                                        "type": "integer"
                                    },
                                    "2012": {
                                        "type": "integer"
                                    },
                                    "2008": {
                                        "type": "integer"
                                    },
                                    "2006": {
                                        "type": "integer"
                                    },
                                    "2004": {
                                        "type": "integer"
                                    },
                                    "2121": {
                                        "type": "integer"
                                    },
                                    "2122": {
                                        "type": "integer"
                                    },
                                    "2119": {
                                        "type": "integer"
                                    },
                                    "2118": {
                                        "type": "integer"
                                    },
                                    "2117": {
                                        "type": "integer"
                                    },
                                    "2116": {
                                        "type": "integer"
                                    },
                                    "1996": {
                                        "type": "integer"
                                    },
                                    "2115": {
                                        "type": "integer"
                                    },
                                    "2114": {
                                        "type": "integer"
                                    },
                                    "1993": {
                                        "type": "integer"
                                    },
                                    "1984": {
                                        "type": "integer"
                                    },
                                    "2101": {
                                        "type": "integer"
                                    },
                                    "1981": {
                                        "type": "integer"
                                    },
                                    "1979": {
                                        "type": "integer"
                                    },
                                    "1982": {
                                        "type": "integer"
                                    },
                                    "1978": {
                                        "type": "integer"
                                    },
                                    "1969": {
                                        "type": "integer"
                                    },
                                    "2088": {
                                        "type": "integer"
                                    },
                                    "1967": {
                                        "type": "integer"
                                    },
                                    "1963": {
                                        "type": "integer"
                                    },
                                    "2081": {
                                        "type": "integer"
                                    },
                                    "2079": {
                                        "type": "integer"
                                    },
                                    "1961": {
                                        "type": "integer"
                                    },
                                    "2077": {
                                        "type": "integer"
                                    },
                                    "1959": {
                                        "type": "integer"
                                    },
                                    "2075": {
                                        "type": "integer"
                                    },
                                    "1957": {
                                        "type": "integer"
                                    },
                                    "1950": {
                                        "type": "integer"
                                    },
                                    "2068": {
                                        "type": "integer"
                                    },
                                    "2067": {
                                        "type": "integer"
                                    },
                                    "1947": {
                                        "type": "integer"
                                    },
                                    "1946": {
                                        "type": "integer"
                                    },
                                    "1944": {
                                        "type": "integer"
                                    },
                                    "2060": {
                                        "type": "integer"
                                    },
                                    "1941": {
                                        "type": "integer"
                                    },
                                    "1938": {
                                        "type": "integer"
                                    },
                                    "1939": {
                                        "type": "integer"
                                    },
                                    "1935": {
                                        "type": "integer"
                                    },
                                    "1931": {
                                        "type": "integer"
                                    },
                                    "2048": {
                                        "type": "integer"
                                    },
                                    "2047": {
                                        "type": "integer"
                                    },
                                    "1927": {
                                        "type": "integer"
                                    },
                                    "1805": {
                                        "type": "integer"
                                    },
                                    "2041": {
                                        "type": "integer"
                                    },
                                    "1921": {
                                        "type": "integer"
                                    },
                                    "1909": {
                                        "type": "integer"
                                    },
                                    "2028": {
                                        "type": "integer"
                                    },
                                    "2027": {
                                        "type": "integer"
                                    },
                                    "1907": {
                                        "type": "integer"
                                    },
                                    "1902": {
                                        "type": "integer"
                                    },
                                    "2021": {
                                        "type": "integer"
                                    },
                                    "1897": {
                                        "type": "integer"
                                    },
                                    "1900": {
                                        "type": "integer"
                                    },
                                    "2022": {
                                        "type": "integer"
                                    },
                                    "2020": {
                                        "type": "integer"
                                    },
                                    "1898": {
                                        "type": "integer"
                                    },
                                    "2011": {
                                        "type": "integer"
                                    },
                                    "2126": {
                                        "type": "integer"
                                    },
                                    "2007": {
                                        "type": "integer"
                                    },
                                    "2005": {
                                        "type": "integer"
                                    },
                                    "1877": {
                                        "type": "integer"
                                    },
                                    "2003": {
                                        "type": "integer"
                                    },
                                    "1995": {
                                        "type": "integer"
                                    },
                                    "1870": {
                                        "type": "integer"
                                    },
                                    "1992": {
                                        "type": "integer"
                                    },
                                    "1866": {
                                        "type": "integer"
                                    },
                                    "1863": {
                                        "type": "integer"
                                    },
                                    "1988": {
                                        "type": "integer"
                                    },
                                    "1989": {
                                        "type": "integer"
                                    },
                                    "1987": {
                                        "type": "integer"
                                    },
                                    "1986": {
                                        "type": "integer"
                                    },
                                    "1860": {
                                        "type": "integer"
                                    },
                                    "1858": {
                                        "type": "integer"
                                    },
                                    "2098": {
                                        "type": "integer"
                                    },
                                    "1853": {
                                        "type": "integer"
                                    },
                                    "1845": {
                                        "type": "integer"
                                    },
                                    "1970": {
                                        "type": "integer"
                                    },
                                    "1842": {
                                        "type": "integer"
                                    },
                                    "1965": {
                                        "type": "integer"
                                    },
                                    "1841": {
                                        "type": "integer"
                                    },
                                    "1840": {
                                        "type": "integer"
                                    },
                                    "1966": {
                                        "type": "integer"
                                    },
                                    "1838": {
                                        "type": "integer"
                                    },
                                    "1960": {
                                        "type": "integer"
                                    },
                                    "1834": {
                                        "type": "integer"
                                    },
                                    "1956": {
                                        "type": "integer"
                                    },
                                    "1831": {
                                        "type": "integer"
                                    },
                                    "2072": {
                                        "type": "integer"
                                    },
                                    "1949": {
                                        "type": "integer"
                                    },
                                    "1948": {
                                        "type": "integer"
                                    },
                                    "1826": {
                                        "type": "integer"
                                    },
                                    "2066": {
                                        "type": "integer"
                                    },
                                    "1824": {
                                        "type": "integer"
                                    },
                                    "1820": {
                                        "type": "integer"
                                    },
                                    "1822": {
                                        "type": "integer"
                                    },
                                    "1819": {
                                        "type": "integer"
                                    },
                                    "1817": {
                                        "type": "integer"
                                    },
                                    "1818": {
                                        "type": "integer"
                                    },
                                    "1937": {
                                        "type": "integer"
                                    },
                                    "1815": {
                                        "type": "integer"
                                    },
                                    "1936": {
                                        "type": "integer"
                                    },
                                    "1813": {
                                        "type": "integer"
                                    },
                                    "1809": {
                                        "type": "integer"
                                    },
                                    "1930": {
                                        "type": "integer"
                                    },
                                    "1929": {
                                        "type": "integer"
                                    },
                                    "1928": {
                                        "type": "integer"
                                    },
                                    "1800": {
                                        "type": "integer"
                                    },
                                    "1920": {
                                        "type": "integer"
                                    },
                                    "1919": {
                                        "type": "integer"
                                    },
                                    "1918": {
                                        "type": "integer"
                                    },
                                    "1796": {
                                        "type": "integer"
                                    },
                                    "1787": {
                                        "type": "integer"
                                    },
                                    "1785": {
                                        "type": "integer"
                                    },
                                    "1784": {
                                        "type": "integer"
                                    },
                                    "1783": {
                                        "type": "integer"
                                    },
                                    "1904": {
                                        "type": "integer"
                                    },
                                    "1905": {
                                        "type": "integer"
                                    },
                                    "1903": {
                                        "type": "integer"
                                    },
                                    "1901": {
                                        "type": "integer"
                                    },
                                    "1899": {
                                        "type": "integer"
                                    },
                                    "1774": {
                                        "type": "integer"
                                    },
                                    "1896": {
                                        "type": "integer"
                                    },
                                    "1894": {
                                        "type": "integer"
                                    },
                                    "1893": {
                                        "type": "integer"
                                    },
                                    "1759": {
                                        "type": "integer"
                                    },
                                    "1879": {
                                        "type": "integer"
                                    },
                                    "1880": {
                                        "type": "integer"
                                    },
                                    "1878": {
                                        "type": "integer"
                                    },
                                    "1751": {
                                        "type": "integer"
                                    },
                                    "1869": {
                                        "type": "integer"
                                    },
                                    "1745": {
                                        "type": "integer"
                                    },
                                    "1742": {
                                        "type": "integer"
                                    },
                                    "1741": {
                                        "type": "integer"
                                    },
                                    "1864": {
                                        "type": "integer"
                                    },
                                    "1865": {
                                        "type": "integer"
                                    },
                                    "1739": {
                                        "type": "integer"
                                    },
                                    "1859": {
                                        "type": "integer"
                                    },
                                    "1734": {
                                        "type": "integer"
                                    },
                                    "1730": {
                                        "type": "integer"
                                    },
                                    "1729": {
                                        "type": "integer"
                                    },
                                    "1854": {
                                        "type": "integer"
                                    },
                                    "1725": {
                                        "type": "integer"
                                    },
                                    "1848": {
                                        "type": "integer"
                                    },
                                    "1849": {
                                        "type": "integer"
                                    },
                                    "1847": {
                                        "type": "integer"
                                    },
                                    "1846": {
                                        "type": "integer"
                                    },
                                    "1718": {
                                        "type": "integer"
                                    },
                                    "1716": {
                                        "type": "integer"
                                    },
                                    "1715": {
                                        "type": "integer"
                                    },
                                    "1711": {
                                        "type": "integer"
                                    },
                                    "1836": {
                                        "type": "integer"
                                    },
                                    "1708": {
                                        "type": "integer"
                                    },
                                    "1825": {
                                        "type": "integer"
                                    },
                                    "1700": {
                                        "type": "integer"
                                    },
                                    "1698": {
                                        "type": "integer"
                                    },
                                    "1696": {
                                        "type": "integer"
                                    },
                                    "1821": {
                                        "type": "integer"
                                    },
                                    "1693": {
                                        "type": "integer"
                                    },
                                    "1691": {
                                        "type": "integer"
                                    },
                                    "1688": {
                                        "type": "integer"
                                    },
                                    "1685": {
                                        "type": "integer"
                                    },
                                    "1557": {
                                        "type": "integer"
                                    },
                                    "1804": {
                                        "type": "integer"
                                    },
                                    "1680": {
                                        "type": "integer"
                                    },
                                    "1799": {
                                        "type": "integer"
                                    },
                                    "1674": {
                                        "type": "integer"
                                    },
                                    "1671": {
                                        "type": "integer"
                                    },
                                    "1662": {
                                        "type": "integer"
                                    },
                                    "1659": {
                                        "type": "integer"
                                    },
                                    "1782": {
                                        "type": "integer"
                                    },
                                    "1657": {
                                        "type": "integer"
                                    },
                                    "1650": {
                                        "type": "integer"
                                    },
                                    "1636": {
                                        "type": "integer"
                                    },
                                    "1641": {
                                        "type": "integer"
                                    },
                                    "1756": {
                                        "type": "integer"
                                    },
                                    "1637": {
                                        "type": "integer"
                                    },
                                    "1632": {
                                        "type": "integer"
                                    },
                                    "1753": {
                                        "type": "integer"
                                    },
                                    "1623": {
                                        "type": "integer"
                                    },
                                    "1620": {
                                        "type": "integer"
                                    },
                                    "1618": {
                                        "type": "integer"
                                    },
                                    "1611": {
                                        "type": "integer"
                                    },
                                    "1608": {
                                        "type": "integer"
                                    },
                                    "1605": {
                                        "type": "integer"
                                    },
                                    "1602": {
                                        "type": "integer"
                                    },
                                    "1604": {
                                        "type": "integer"
                                    },
                                    "1596": {
                                        "type": "integer"
                                    },
                                    "1719": {
                                        "type": "integer"
                                    },
                                    "1714": {
                                        "type": "integer"
                                    },
                                    "1591": {
                                        "type": "integer"
                                    },
                                    "1588": {
                                        "type": "integer"
                                    },
                                    "1707": {
                                        "type": "integer"
                                    },
                                    "1583": {
                                        "type": "integer"
                                    },
                                    "1580": {
                                        "type": "integer"
                                    },
                                    "1584": {
                                        "type": "integer"
                                    },
                                    "1702": {
                                        "type": "integer"
                                    },
                                    "1576": {
                                        "type": "integer"
                                    },
                                    "1703": {
                                        "type": "integer"
                                    },
                                    "1571": {
                                        "type": "integer"
                                    },
                                    "1570": {
                                        "type": "integer"
                                    },
                                    "1697": {
                                        "type": "integer"
                                    },
                                    "1566": {
                                        "type": "integer"
                                    },
                                    "1694": {
                                        "type": "integer"
                                    },
                                    "1692": {
                                        "type": "integer"
                                    },
                                    "1687": {
                                        "type": "integer"
                                    },
                                    "1561": {
                                        "type": "integer"
                                    },
                                    "1560": {
                                        "type": "integer"
                                    },
                                    "1559": {
                                        "type": "integer"
                                    },
                                    "1686": {
                                        "type": "integer"
                                    },
                                    "1553": {
                                        "type": "integer"
                                    },
                                    "1547": {
                                        "type": "integer"
                                    },
                                    "1544": {
                                        "type": "integer"
                                    },
                                    "1535": {
                                        "type": "integer"
                                    },
                                    "1532": {
                                        "type": "integer"
                                    },
                                    "1656": {
                                        "type": "integer"
                                    },
                                    "1530": {
                                        "type": "integer"
                                    },
                                    "1655": {
                                        "type": "integer"
                                    },
                                    "1652": {
                                        "type": "integer"
                                    },
                                    "1527": {
                                        "type": "integer"
                                    },
                                    "1648": {
                                        "type": "integer"
                                    },
                                    "1647": {
                                        "type": "integer"
                                    },
                                    "1646": {
                                        "type": "integer"
                                    },
                                    "1645": {
                                        "type": "integer"
                                    },
                                    "1644": {
                                        "type": "integer"
                                    },
                                    "1642": {
                                        "type": "integer"
                                    },
                                    "1521": {
                                        "type": "integer"
                                    },
                                    "1761": {
                                        "type": "integer"
                                    },
                                    "1639": {
                                        "type": "integer"
                                    },
                                    "1640": {
                                        "type": "integer"
                                    },
                                    "1634": {
                                        "type": "integer"
                                    },
                                    "1635": {
                                        "type": "integer"
                                    },
                                    "1633": {
                                        "type": "integer"
                                    },
                                    "1515": {
                                        "type": "integer"
                                    },
                                    "1630": {
                                        "type": "integer"
                                    },
                                    "1390": {
                                        "type": "integer"
                                    },
                                    "1512": {
                                        "type": "integer"
                                    },
                                    "1622": {
                                        "type": "integer"
                                    },
                                    "1504": {
                                        "type": "integer"
                                    },
                                    "1501": {
                                        "type": "integer"
                                    },
                                    "1621": {
                                        "type": "integer"
                                    },
                                    "1619": {
                                        "type": "integer"
                                    },
                                    "1499": {
                                        "type": "integer"
                                    },
                                    "1498": {
                                        "type": "integer"
                                    },
                                    "1496": {
                                        "type": "integer"
                                    },
                                    "1615": {
                                        "type": "integer"
                                    },
                                    "1616": {
                                        "type": "integer"
                                    },
                                    "1614": {
                                        "type": "integer"
                                    },
                                    "1613": {
                                        "type": "integer"
                                    },
                                    "1491": {
                                        "type": "integer"
                                    },
                                    "1489": {
                                        "type": "integer"
                                    },
                                    "1487": {
                                        "type": "integer"
                                    },
                                    "1486": {
                                        "type": "integer"
                                    },
                                    "1483": {
                                        "type": "integer"
                                    },
                                    "1726": {
                                        "type": "integer"
                                    },
                                    "1478": {
                                        "type": "integer"
                                    },
                                    "1481": {
                                        "type": "integer"
                                    },
                                    "1601": {
                                        "type": "integer"
                                    },
                                    "1475": {
                                        "type": "integer"
                                    },
                                    "1471": {
                                        "type": "integer"
                                    },
                                    "1466": {
                                        "type": "integer"
                                    },
                                    "1464": {
                                        "type": "integer"
                                    },
                                    "1587": {
                                        "type": "integer"
                                    },
                                    "1461": {
                                        "type": "integer"
                                    },
                                    "1582": {
                                        "type": "integer"
                                    },
                                    "1705": {
                                        "type": "integer"
                                    },
                                    "1581": {
                                        "type": "integer"
                                    },
                                    "1585": {
                                        "type": "integer"
                                    },
                                    "1459": {
                                        "type": "integer"
                                    },
                                    "1458": {
                                        "type": "integer"
                                    },
                                    "1456": {
                                        "type": "integer"
                                    },
                                    "1577": {
                                        "type": "integer"
                                    },
                                    "1449": {
                                        "type": "integer"
                                    },
                                    "1568": {
                                        "type": "integer"
                                    },
                                    "1569": {
                                        "type": "integer"
                                    },
                                    "1567": {
                                        "type": "integer"
                                    },
                                    "1445": {
                                        "type": "integer"
                                    },
                                    "1440": {
                                        "type": "integer"
                                    },
                                    "1436": {
                                        "type": "integer"
                                    },
                                    "1433": {
                                        "type": "integer"
                                    },
                                    "1554": {
                                        "type": "integer"
                                    },
                                    "1426": {
                                        "type": "integer"
                                    },
                                    "1422": {
                                        "type": "integer"
                                    },
                                    "1417": {
                                        "type": "integer"
                                    },
                                    "1414": {
                                        "type": "integer"
                                    },
                                    "1412": {
                                        "type": "integer"
                                    },
                                    "1413": {
                                        "type": "integer"
                                    },
                                    "1531": {
                                        "type": "integer"
                                    },
                                    "1411": {
                                        "type": "integer"
                                    },
                                    "1405": {
                                        "type": "integer"
                                    },
                                    "1406": {
                                        "type": "integer"
                                    },
                                    "1525": {
                                        "type": "integer"
                                    },
                                    "1526": {
                                        "type": "integer"
                                    },
                                    "1524": {
                                        "type": "integer"
                                    },
                                    "1523": {
                                        "type": "integer"
                                    },
                                    "1401": {
                                        "type": "integer"
                                    },
                                    "1522": {
                                        "type": "integer"
                                    },
                                    "1400": {
                                        "type": "integer"
                                    },
                                    "1513": {
                                        "type": "integer"
                                    },
                                    "1392": {
                                        "type": "integer"
                                    },
                                    "1511": {
                                        "type": "integer"
                                    },
                                    "1385": {
                                        "type": "integer"
                                    },
                                    "1383": {
                                        "type": "integer"
                                    },
                                    "1505": {
                                        "type": "integer"
                                    },
                                    "1380": {
                                        "type": "integer"
                                    },
                                    "1379": {
                                        "type": "integer"
                                    },
                                    "1377": {
                                        "type": "integer"
                                    },
                                    "1378": {
                                        "type": "integer"
                                    },
                                    "1497": {
                                        "type": "integer"
                                    },
                                    "1493": {
                                        "type": "integer"
                                    },
                                    "1373": {
                                        "type": "integer"
                                    },
                                    "1370": {
                                        "type": "integer"
                                    },
                                    "1494": {
                                        "type": "integer"
                                    },
                                    "1490": {
                                        "type": "integer"
                                    },
                                    "1488": {
                                        "type": "integer"
                                    },
                                    "1365": {
                                        "type": "integer"
                                    },
                                    "1363": {
                                        "type": "integer"
                                    },
                                    "1359": {
                                        "type": "integer"
                                    },
                                    "1357": {
                                        "type": "integer"
                                    },
                                    "1360": {
                                        "type": "integer"
                                    },
                                    "1354": {
                                        "type": "integer"
                                    },
                                    "1480": {
                                        "type": "integer"
                                    },
                                    "1603": {
                                        "type": "integer"
                                    },
                                    "1482": {
                                        "type": "integer"
                                    },
                                    "1477": {
                                        "type": "integer"
                                    },
                                    "1476": {
                                        "type": "integer"
                                    },
                                    "1348": {
                                        "type": "integer"
                                    },
                                    "1346": {
                                        "type": "integer"
                                    },
                                    "1344": {
                                        "type": "integer"
                                    },
                                    "1338": {
                                        "type": "integer"
                                    },
                                    "1336": {
                                        "type": "integer"
                                    },
                                    "1332": {
                                        "type": "integer"
                                    },
                                    "1457": {
                                        "type": "integer"
                                    },
                                    "1329": {
                                        "type": "integer"
                                    },
                                    "1322": {
                                        "type": "integer"
                                    },
                                    "1314": {
                                        "type": "integer"
                                    },
                                    "1310": {
                                        "type": "integer"
                                    },
                                    "1306": {
                                        "type": "integer"
                                    },
                                    "1302": {
                                        "type": "integer"
                                    },
                                    "1435": {
                                        "type": "integer"
                                    },
                                    "1434": {
                                        "type": "integer"
                                    },
                                    "1298": {
                                        "type": "integer"
                                    },
                                    "1295": {
                                        "type": "integer"
                                    },
                                    "1296": {
                                        "type": "integer"
                                    },
                                    "1291": {
                                        "type": "integer"
                                    },
                                    "1287": {
                                        "type": "integer"
                                    },
                                    "1289": {
                                        "type": "integer"
                                    },
                                    "1284": {
                                        "type": "integer"
                                    },
                                    "1416": {
                                        "type": "integer"
                                    },
                                    "1282": {
                                        "type": "integer"
                                    },
                                    "1415": {
                                        "type": "integer"
                                    },
                                    "1533": {
                                        "type": "integer"
                                    },
                                    "1276": {
                                        "type": "integer"
                                    },
                                    "1269": {
                                        "type": "integer"
                                    },
                                    "1267": {
                                        "type": "integer"
                                    },
                                    "1399": {
                                        "type": "integer"
                                    },
                                    "1398": {
                                        "type": "integer"
                                    },
                                    "1397": {
                                        "type": "integer"
                                    },
                                    "1396": {
                                        "type": "integer"
                                    },
                                    "1395": {
                                        "type": "integer"
                                    },
                                    "1265": {
                                        "type": "integer"
                                    },
                                    "1394": {
                                        "type": "integer"
                                    },
                                    "1264": {
                                        "type": "integer"
                                    },
                                    "1391": {
                                        "type": "integer"
                                    },
                                    "1262": {
                                        "type": "integer"
                                    },
                                    "1260": {
                                        "type": "integer"
                                    },
                                    "1256": {
                                        "type": "integer"
                                    },
                                    "1384": {
                                        "type": "integer"
                                    },
                                    "1253": {
                                        "type": "integer"
                                    },
                                    "1251": {
                                        "type": "integer"
                                    },
                                    "1250": {
                                        "type": "integer"
                                    },
                                    "1247": {
                                        "type": "integer"
                                    },
                                    "1244": {
                                        "type": "integer"
                                    },
                                    "1375": {
                                        "type": "integer"
                                    },
                                    "1369": {
                                        "type": "integer"
                                    },
                                    "1368": {
                                        "type": "integer"
                                    },
                                    "1367": {
                                        "type": "integer"
                                    },
                                    "1238": {
                                        "type": "integer"
                                    },
                                    "1236": {
                                        "type": "integer"
                                    },
                                    "1362": {
                                        "type": "integer"
                                    },
                                    "1361": {
                                        "type": "integer"
                                    },
                                    "1233": {
                                        "type": "integer"
                                    },
                                    "1484": {
                                        "type": "integer"
                                    },
                                    "1229": {
                                        "type": "integer"
                                    },
                                    "1355": {
                                        "type": "integer"
                                    },
                                    "1356": {
                                        "type": "integer"
                                    },
                                    "1224": {
                                        "type": "integer"
                                    },
                                    "1225": {
                                        "type": "integer"
                                    },
                                    "1347": {
                                        "type": "integer"
                                    },
                                    "1216": {
                                        "type": "integer"
                                    },
                                    "1218": {
                                        "type": "integer"
                                    },
                                    "1345": {
                                        "type": "integer"
                                    },
                                    "1211": {
                                        "type": "integer"
                                    },
                                    "1337": {
                                        "type": "integer"
                                    },
                                    "1203": {
                                        "type": "integer"
                                    },
                                    "1331": {
                                        "type": "integer"
                                    },
                                    "1199": {
                                        "type": "integer"
                                    },
                                    "1330": {
                                        "type": "integer"
                                    },
                                    "1196": {
                                        "type": "integer"
                                    },
                                    "1333": {
                                        "type": "integer"
                                    },
                                    "1328": {
                                        "type": "integer"
                                    },
                                    "1197": {
                                        "type": "integer"
                                    },
                                    "1321": {
                                        "type": "integer"
                                    },
                                    "1187": {
                                        "type": "integer"
                                    },
                                    "1172": {
                                        "type": "integer"
                                    },
                                    "1169": {
                                        "type": "integer"
                                    },
                                    "1164": {
                                        "type": "integer"
                                    },
                                    "1160": {
                                        "type": "integer"
                                    },
                                    "1156": {
                                        "type": "integer"
                                    },
                                    "1155": {
                                        "type": "integer"
                                    },
                                    "1297": {
                                        "type": "integer"
                                    },
                                    "1430": {
                                        "type": "integer"
                                    },
                                    "1294": {
                                        "type": "integer"
                                    },
                                    "1293": {
                                        "type": "integer"
                                    },
                                    "1152": {
                                        "type": "integer"
                                    },
                                    "1150": {
                                        "type": "integer"
                                    },
                                    "1149": {
                                        "type": "integer"
                                    },
                                    "1292": {
                                        "type": "integer"
                                    },
                                    "1147": {
                                        "type": "integer"
                                    },
                                    "1145": {
                                        "type": "integer"
                                    },
                                    "1142": {
                                        "type": "integer"
                                    },
                                    "1275": {
                                        "type": "integer"
                                    },
                                    "1133": {
                                        "type": "integer"
                                    },
                                    "1127": {
                                        "type": "integer"
                                    },
                                    "1263": {
                                        "type": "integer"
                                    },
                                    "1121": {
                                        "type": "integer"
                                    },
                                    "1261": {
                                        "type": "integer"
                                    },
                                    "1119": {
                                        "type": "integer"
                                    },
                                    "1259": {
                                        "type": "integer"
                                    },
                                    "1118": {
                                        "type": "integer"
                                    },
                                    "1257": {
                                        "type": "integer"
                                    },
                                    "1258": {
                                        "type": "integer"
                                    },
                                    "1255": {
                                        "type": "integer"
                                    },
                                    "1114": {
                                        "type": "integer"
                                    },
                                    "1252": {
                                        "type": "integer"
                                    },
                                    "1110": {
                                        "type": "integer"
                                    },
                                    "1246": {
                                        "type": "integer"
                                    },
                                    "1106": {
                                        "type": "integer"
                                    },
                                    "1243": {
                                        "type": "integer"
                                    },
                                    "1105": {
                                        "type": "integer"
                                    },
                                    "1237": {
                                        "type": "integer"
                                    },
                                    "1099": {
                                        "type": "integer"
                                    },
                                    "1231": {
                                        "type": "integer"
                                    },
                                    "1358": {
                                        "type": "integer"
                                    },
                                    "1228": {
                                        "type": "integer"
                                    },
                                    "1091": {
                                        "type": "integer"
                                    },
                                    "1227": {
                                        "type": "integer"
                                    },
                                    "1226": {
                                        "type": "integer"
                                    },
                                    "1087": {
                                        "type": "integer"
                                    },
                                    "1222": {
                                        "type": "integer"
                                    },
                                    "1353": {
                                        "type": "integer"
                                    },
                                    "1221": {
                                        "type": "integer"
                                    },
                                    "1088": {
                                        "type": "integer"
                                    },
                                    "1084": {
                                        "type": "integer"
                                    },
                                    "1214": {
                                        "type": "integer"
                                    },
                                    "1213": {
                                        "type": "integer"
                                    },
                                    "1212": {
                                        "type": "integer"
                                    },
                                    "1077": {
                                        "type": "integer"
                                    },
                                    "1070": {
                                        "type": "integer"
                                    },
                                    "1069": {
                                        "type": "integer"
                                    },
                                    "1204": {
                                        "type": "integer"
                                    },
                                    "1198": {
                                        "type": "integer"
                                    },
                                    "1065": {
                                        "type": "integer"
                                    },
                                    "1063": {
                                        "type": "integer"
                                    },
                                    "1185": {
                                        "type": "integer"
                                    },
                                    "1055": {
                                        "type": "integer"
                                    },
                                    "1186": {
                                        "type": "integer"
                                    },
                                    "1043": {
                                        "type": "integer"
                                    },
                                    "1040": {
                                        "type": "integer"
                                    },
                                    "1036": {
                                        "type": "integer"
                                    },
                                    "1165": {
                                        "type": "integer"
                                    },
                                    "1031": {
                                        "type": "integer"
                                    },
                                    "1026": {
                                        "type": "integer"
                                    },
                                    "1023": {
                                        "type": "integer"
                                    },
                                    "1148": {
                                        "type": "integer"
                                    },
                                    "1018": {
                                        "type": "integer"
                                    },
                                    "1144": {
                                        "type": "integer"
                                    },
                                    "1143": {
                                        "type": "integer"
                                    },
                                    "1013": {
                                        "type": "integer"
                                    },
                                    "1015": {
                                        "type": "integer"
                                    },
                                    "1132": {
                                        "type": "integer"
                                    },
                                    "1003": {
                                        "type": "integer"
                                    },
                                    "1001": {
                                        "type": "integer"
                                    },
                                    "1002": {
                                        "type": "integer"
                                    },
                                    "1000": {
                                        "type": "integer"
                                    },
                                    "1128": {
                                        "type": "integer"
                                    },
                                    "989": {
                                        "type": "integer"
                                    },
                                    "1113": {
                                        "type": "integer"
                                    },
                                    "981": {
                                        "type": "integer"
                                    },
                                    "977": {
                                        "type": "integer"
                                    },
                                    "974": {
                                        "type": "integer"
                                    },
                                    "1104": {
                                        "type": "integer"
                                    },
                                    "972": {
                                        "type": "integer"
                                    },
                                    "1098": {
                                        "type": "integer"
                                    },
                                    "969": {
                                        "type": "integer"
                                    },
                                    "1090": {
                                        "type": "integer"
                                    },
                                    "967": {
                                        "type": "integer"
                                    },
                                    "1082": {
                                        "type": "integer"
                                    },
                                    "1081": {
                                        "type": "integer"
                                    },
                                    "1080": {
                                        "type": "integer"
                                    },
                                    "1079": {
                                        "type": "integer"
                                    },
                                    "956": {
                                        "type": "integer"
                                    },
                                    "953": {
                                        "type": "integer"
                                    },
                                    "947": {
                                        "type": "integer"
                                    },
                                    "1072": {
                                        "type": "integer"
                                    },
                                    "1071": {
                                        "type": "integer"
                                    },
                                    "1073": {
                                        "type": "integer"
                                    },
                                    "1068": {
                                        "type": "integer"
                                    },
                                    "942": {
                                        "type": "integer"
                                    },
                                    "1066": {
                                        "type": "integer"
                                    },
                                    "1067": {
                                        "type": "integer"
                                    },
                                    "1064": {
                                        "type": "integer"
                                    },
                                    "1054": {
                                        "type": "integer"
                                    },
                                    "929": {
                                        "type": "integer"
                                    },
                                    "918": {
                                        "type": "integer"
                                    },
                                    "916": {
                                        "type": "integer"
                                    },
                                    "1039": {
                                        "type": "integer"
                                    },
                                    "1038": {
                                        "type": "integer"
                                    },
                                    "913": {
                                        "type": "integer"
                                    },
                                    "912": {
                                        "type": "integer"
                                    },
                                    "911": {
                                        "type": "integer"
                                    },
                                    "1037": {
                                        "type": "integer"
                                    },
                                    "908": {
                                        "type": "integer"
                                    },
                                    "1032": {
                                        "type": "integer"
                                    },
                                    "1033": {
                                        "type": "integer"
                                    },
                                    "901": {
                                        "type": "integer"
                                    },
                                    "898": {
                                        "type": "integer"
                                    },
                                    "1017": {
                                        "type": "integer"
                                    },
                                    "893": {
                                        "type": "integer"
                                    },
                                    "891": {
                                        "type": "integer"
                                    },
                                    "889": {
                                        "type": "integer"
                                    },
                                    "885": {
                                        "type": "integer"
                                    },
                                    "876": {
                                        "type": "integer"
                                    },
                                    "1131": {
                                        "type": "integer"
                                    },
                                    "872": {
                                        "type": "integer"
                                    },
                                    "988": {
                                        "type": "integer"
                                    },
                                    "860": {
                                        "type": "integer"
                                    },
                                    "855": {
                                        "type": "integer"
                                    },
                                    "848": {
                                        "type": "integer"
                                    },
                                    "844": {
                                        "type": "integer"
                                    },
                                    "971": {
                                        "type": "integer"
                                    },
                                    "842": {
                                        "type": "integer"
                                    },
                                    "968": {
                                        "type": "integer"
                                    },
                                    "966": {
                                        "type": "integer"
                                    },
                                    "954": {
                                        "type": "integer"
                                    },
                                    "828": {
                                        "type": "integer"
                                    },
                                    "952": {
                                        "type": "integer"
                                    },
                                    "951": {
                                        "type": "integer"
                                    },
                                    "950": {
                                        "type": "integer"
                                    },
                                    "824": {
                                        "type": "integer"
                                    },
                                    "949": {
                                        "type": "integer"
                                    },
                                    "948": {
                                        "type": "integer"
                                    },
                                    "816": {
                                        "type": "integer"
                                    },
                                    "928": {
                                        "type": "integer"
                                    },
                                    "927": {
                                        "type": "integer"
                                    },
                                    "926": {
                                        "type": "integer"
                                    },
                                    "804": {
                                        "type": "integer"
                                    },
                                    "924": {
                                        "type": "integer"
                                    },
                                    "925": {
                                        "type": "integer"
                                    },
                                    "801": {
                                        "type": "integer"
                                    },
                                    "921": {
                                        "type": "integer"
                                    },
                                    "922": {
                                        "type": "integer"
                                    },
                                    "920": {
                                        "type": "integer"
                                    },
                                    "919": {
                                        "type": "integer"
                                    },
                                    "797": {
                                        "type": "integer"
                                    },
                                    "917": {
                                        "type": "integer"
                                    },
                                    "791": {
                                        "type": "integer"
                                    },
                                    "910": {
                                        "type": "integer"
                                    },
                                    "909": {
                                        "type": "integer"
                                    },
                                    "787": {
                                        "type": "integer"
                                    },
                                    "900": {
                                        "type": "integer"
                                    },
                                    "779": {
                                        "type": "integer"
                                    },
                                    "778": {
                                        "type": "integer"
                                    },
                                    "777": {
                                        "type": "integer"
                                    },
                                    "775": {
                                        "type": "integer"
                                    },
                                    "773": {
                                        "type": "integer"
                                    },
                                    "769": {
                                        "type": "integer"
                                    },
                                    "890": {
                                        "type": "integer"
                                    },
                                    "759": {
                                        "type": "integer"
                                    },
                                    "758": {
                                        "type": "integer"
                                    },
                                    "880": {
                                        "type": "integer"
                                    },
                                    "755": {
                                        "type": "integer"
                                    },
                                    "754": {
                                        "type": "integer"
                                    },
                                    "881": {
                                        "type": "integer"
                                    },
                                    "879": {
                                        "type": "integer"
                                    },
                                    "878": {
                                        "type": "integer"
                                    },
                                    "877": {
                                        "type": "integer"
                                    },
                                    "745": {
                                        "type": "integer"
                                    },
                                    "859": {
                                        "type": "integer"
                                    },
                                    "858": {
                                        "type": "integer"
                                    },
                                    "731": {
                                        "type": "integer"
                                    },
                                    "856": {
                                        "type": "integer"
                                    },
                                    "847": {
                                        "type": "integer"
                                    },
                                    "846": {
                                        "type": "integer"
                                    },
                                    "845": {
                                        "type": "integer"
                                    },
                                    "843": {
                                        "type": "integer"
                                    },
                                    "841": {
                                        "type": "integer"
                                    },
                                    "716": {
                                        "type": "integer"
                                    },
                                    "827": {
                                        "type": "integer"
                                    },
                                    "826": {
                                        "type": "integer"
                                    },
                                    "825": {
                                        "type": "integer"
                                    },
                                    "815": {
                                        "type": "integer"
                                    },
                                    "688": {
                                        "type": "integer"
                                    },
                                    "671": {
                                        "type": "integer"
                                    },
                                    "666": {
                                        "type": "integer"
                                    },
                                    "786": {
                                        "type": "integer"
                                    },
                                    "660": {
                                        "type": "integer"
                                    },
                                    "654": {
                                        "type": "integer"
                                    },
                                    "780": {
                                        "type": "integer"
                                    },
                                    "896": {
                                        "type": "integer"
                                    },
                                    "772": {
                                        "type": "integer"
                                    },
                                    "771": {
                                        "type": "integer"
                                    },
                                    "757": {
                                        "type": "integer"
                                    },
                                    "756": {
                                        "type": "integer"
                                    },
                                    "624": {
                                        "type": "integer"
                                    },
                                    "623": {
                                        "type": "integer"
                                    },
                                    "614": {
                                        "type": "integer"
                                    },
                                    "746": {
                                        "type": "integer"
                                    },
                                    "730": {
                                        "type": "integer"
                                    },
                                    "729": {
                                        "type": "integer"
                                    },
                                    "600": {
                                        "type": "integer"
                                    },
                                    "599": {
                                        "type": "integer"
                                    },
                                    "726": {
                                        "type": "integer"
                                    },
                                    "727": {
                                        "type": "integer"
                                    },
                                    "725": {
                                        "type": "integer"
                                    },
                                    "724": {
                                        "type": "integer"
                                    },
                                    "591": {
                                        "type": "integer"
                                    },
                                    "592": {
                                        "type": "integer"
                                    },
                                    "719": {
                                        "type": "integer"
                                    },
                                    "720": {
                                        "type": "integer"
                                    },
                                    "718": {
                                        "type": "integer"
                                    },
                                    "717": {
                                        "type": "integer"
                                    },
                                    "560": {
                                        "type": "integer"
                                    },
                                    "689": {
                                        "type": "integer"
                                    },
                                    "540": {
                                        "type": "integer"
                                    },
                                    "535": {
                                        "type": "integer"
                                    },
                                    "659": {
                                        "type": "integer"
                                    },
                                    "526": {
                                        "type": "integer"
                                    },
                                    "523": {
                                        "type": "integer"
                                    },
                                    "494": {
                                        "type": "integer"
                                    },
                                    "613": {
                                        "type": "integer"
                                    },
                                    "612": {
                                        "type": "integer"
                                    },
                                    "597": {
                                        "type": "integer"
                                    },
                                    "598": {
                                        "type": "integer"
                                    },
                                    "590": {
                                        "type": "integer"
                                    },
                                    "436": {
                                        "type": "integer"
                                    },
                                    "421": {
                                        "type": "integer"
                                    },
                                    "417": {
                                        "type": "integer"
                                    },
                                    "536": {
                                        "type": "integer"
                                    },
                                    "401": {
                                        "type": "integer"
                                    },
                                    "522": {
                                        "type": "integer"
                                    },
                                    "398": {
                                        "type": "integer"
                                    },
                                    "493": {
                                        "type": "integer"
                                    },
                                    "378": {
                                        "type": "integer"
                                    },
                                    "435": {
                                        "type": "integer"
                                    },
                                    "319": {
                                        "type": "integer"
                                    },
                                    "307": {
                                        "type": "integer"
                                    },
                                    "303": {
                                        "type": "integer"
                                    },
                                    "400": {
                                        "type": "integer"
                                    },
                                    "399": {
                                        "type": "integer"
                                    },
                                    "397": {
                                        "type": "integer"
                                    },
                                    "281": {
                                        "type": "integer"
                                    },
                                    "223": {
                                        "type": "integer"
                                    },
                                    "306": {
                                        "type": "integer"
                                    },
                                    "305": {
                                        "type": "integer"
                                    },
                                    "304": {
                                        "type": "integer"
                                    },
                                    "280": {
                                        "type": "integer"
                                    },
                                    "191": {
                                        "type": "integer"
                                    },
                                    "192": {
                                        "type": "integer"
                                    },
                                    "222": {
                                        "type": "integer"
                                    },
                                    "151": {
                                        "type": "integer"
                                    },
                                    "152": {
                                        "type": "integer"
                                    },
                                    "277": {
                                        "type": "integer"
                                    },
                                    "482": {
                                        "type": "integer"
                                    },
                                    "884": {
                                        "type": "integer"
                                    },
                                    "857": {
                                        "type": "integer"
                                    },
                                    "945": {
                                        "type": "integer"
                                    },
                                    "1120": {
                                        "type": "integer"
                                    },
                                    "1217": {
                                        "type": "integer"
                                    },
                                    "1096": {
                                        "type": "integer"
                                    },
                                    "1124": {
                                        "type": "integer"
                                    },
                                    "1539": {
                                        "type": "integer"
                                    },
                                    "1795": {
                                        "type": "integer"
                                    },
                                    "1771": {
                                        "type": "integer"
                                    },
                                    "2203": {
                                        "type": "integer"
                                    },
                                    "2244": {
                                        "type": "integer"
                                    },
                                    "2276": {
                                        "type": "integer"
                                    },
                                    "2185": {
                                        "type": "integer"
                                    },
                                    "2219": {
                                        "type": "integer"
                                    },
                                    "2430": {
                                        "type": "integer"
                                    },
                                    "2596": {
                                        "type": "integer"
                                    },
                                    "2698": {
                                        "type": "integer"
                                    },
                                    "3021": {
                                        "type": "integer"
                                    },
                                    "3043": {
                                        "type": "integer"
                                    },
                                    "3170": {
                                        "type": "integer"
                                    },
                                    "3138": {
                                        "type": "integer"
                                    },
                                    "3504": {
                                        "type": "integer"
                                    },
                                    "3692": {
                                        "type": "integer"
                                    },
                                    "3724": {
                                        "type": "integer"
                                    },
                                    "3957": {
                                        "type": "integer"
                                    },
                                    "4343": {
                                        "type": "integer"
                                    },
                                    "4411": {
                                        "type": "integer"
                                    },
                                    "4227": {
                                        "type": "integer"
                                    },
                                    "4596": {
                                        "type": "integer"
                                    },
                                    "5000": {
                                        "type": "integer"
                                    },
                                    "5200": {
                                        "type": "integer"
                                    },
                                    "5325": {
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
                                    "inlets": {
                                        "type": "array",
                                        "items": {
                                            "type": "integer"
                                        }
                                    },
                                    "name": {
                                        "type": "string"
                                    },
                                    "outlet": {
                                        "type": "integer"
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
                            "urban": {
                                "type": "number"
                            },
                            "rural": {
                                "type": "number"
                            },
                            "area": {
                                "type": "integer"
                            },
                            "cells": {
                                "type": "integer"
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
                            "area",
                            "base",
                            "cells",
                            "i",
                            "name",
                            "origins",
                            "rural",
                            "shield",
                            "urban"
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
                                                "infantry": {
                                                    "type": "integer"
                                                },
                                                "cavalry": {
                                                    "type": "integer"
                                                },
                                                "archers": {
                                                    "type": "integer"
                                                },
                                                "artillery": {
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
                            "provinces",
                            "rural",
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
                                    },
                                    "removed": {
                                        "type": "boolean"
                                    }
                                },
                                "required": [
                                    "i"
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
                "seed",
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
                "seed": {
                    "type": "string"
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
                                    "inlets": {
                                        "type": "array",
                                        "items": {
                                            "type": "integer"
                                        }
                                    },
                                    "name": {
                                        "type": "string"
                                    },
                                    "outlet": {
                                        "type": "integer"
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
                "biomesMartix",
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
                "biomesMartix": {
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
                    "i": {
                        "type": "integer"
                    },
                    "min": {
                        "type": "integer"
                    },
                    "max": {
                        "type": "integer"
                    },
                    "d": {
                        "type": "string"
                    },
                    "m": {
                        "type": "number"
                    },
                    "b": {
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
                ]
            }
        }
    }
}
```