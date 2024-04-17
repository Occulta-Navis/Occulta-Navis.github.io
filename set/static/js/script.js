
// Just fun statistics, mostly
var runningSystemTotalISK = 0.0;
var runningSystemTotalDPS = 0.0;
var runningSystemTotalEHP = 0.0;

var probeWindowSignatures = [];

const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'ISK',

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const newValuationDatabase = {

    // C1
    "Forgotten Perimeter Power Array": {
        "title": "Forgotten Perimeter Power Array",
        "wormhole": "c1",
        "blue_loot_value": 9200000,
        "isk_per_ehp": 84,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 84,
                    "total_alpha": 864,
                    "total_ehp": 38333
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Awakened Patroller",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1190,
                        "distance": 15000,
                        "velocity": 170,
                        "dps": 42,
                        "alpha": 432,
                        "ehp": 19167,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 147,
                    "total_alpha": 1057,
                    "total_ehp": 30000
                },
                "contents": [
                    {
                        "quantity": 3,
                        "type": "Emergent Watchman",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": -3,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 1925,
                        "distance": 5000,
                        "velocity": 275,
                        "dps": 12,
                        "alpha": 95,
                        "ehp": 2000,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Awakened Escort",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 980,
                        "distance": 45000,
                        "velocity": 140,
                        "dps": 55,
                        "alpha": 386,
                        "ehp": 12000,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 172,
                    "total_alpha": 1304,
                    "total_ehp": 41500
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Awakened Escort",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 980,
                        "distance": 45000,
                        "velocity": 140,
                        "dps": 55,
                        "alpha": 386,
                        "ehp": 12000,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Awakened Watchman",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1400,
                        "distance": 30000,
                        "velocity": 200,
                        "dps": 31,
                        "alpha": 266,
                        "ehp": 8750,
                        "trigger": false
                    }
                ]
            }
        ]
    },

    "Forgotten Perimeter Coronation Platform": {
        "title": "Forgotten Perimeter Coronation Platform",
        "wormhole": "c1",
        "blue_loot_value": 12800000,
        "isk_per_ehp": 72,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 139,
                    "total_alpha": 1257,
                    "total_ehp": 45633
                },
                "contents": [
                    {
                        "quantity": 1,
                        "type": "Emergent Escort",
                        "class": "F",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2100,
                        "distance": 5000,
                        "velocity": 300,
                        "dps": 23,
                        "alpha": 163,
                        "ehp": 1300,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Emergent Patroller",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 1750,
                        "distance": 8000,
                        "velocity": 250,
                        "dps": 16,
                        "alpha": 115,
                        "ehp": 3000,
                        "trigger": true
                    },
                    {
                        "quantity": 2,
                        "type": "Awakened Patroller",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1190,
                        "distance": 15000,
                        "velocity": 170,
                        "dps": 42,
                        "alpha": 432,
                        "ehp": 19167,
                        "trigger": false
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 149,
                    "total_alpha": 1459,
                    "total_ehp": 58800
                },
                "contents": [
                    {
                        "quantity": 1,
                        "type": "Emergent Escort",
                        "class": "F",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2100,
                        "distance": 5000,
                        "velocity": 300,
                        "dps": 23,
                        "alpha": 163,
                        "ehp": 1300,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Awakened Patroller",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1190,
                        "distance": 15000,
                        "velocity": 170,
                        "dps": 42,
                        "alpha": 432,
                        "ehp": 19167,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 226,
                    "total_alpha": 2007,
                    "total_ehp": 73583
                },
                "contents": [
                    {
                        "quantity": 3,
                        "type": "Emergent Patroller",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 1750,
                        "distance": 8000,
                        "velocity": 250,
                        "dps": 16,
                        "alpha": 115,
                        "ehp": 3000,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Awakened Patroller",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1190,
                        "distance": 15000,
                        "velocity": 170,
                        "dps": 42,
                        "alpha": 432,
                        "ehp": 19167,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Awakened Watchman",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1400,
                        "distance": 30000,
                        "velocity": 200,
                        "dps": 31,
                        "alpha": 266,
                        "ehp": 8750,
                        "trigger": false
                    }
                ]
            }
        ]
    },

    "Perimeter Ambush Point": {
        "title": "Perimeter Ambush Point",
        "wormhole": "c1",
        "blue_loot_value": 8600000,
        "isk_per_ehp": 66,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 182,
                    "total_alpha": 2109,
                    "total_ehp": 34967
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Vigilant Sentry Tower",
                        "class": "T",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 50,
                        "speed": 0,
                        "distance": 0,
                        "velocity": 0,
                        "dps": 52,
                        "alpha": 780,
                        "ehp": 10833,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Emergent Escort",
                        "class": "F",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2100,
                        "distance": 5000,
                        "velocity": 300,
                        "dps": 23,
                        "alpha": 163,
                        "ehp": 1300,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Awakened Escort",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 980,
                        "distance": 45000,
                        "velocity": 140,
                        "dps": 55,
                        "alpha": 386,
                        "ehp": 12000,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 159,
                    "total_alpha": 1117,
                    "total_ehp": 33000
                },
                "contents": [
                    {
                        "quantity": 3,
                        "type": "Emergent Patroller",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 1750,
                        "distance": 8000,
                        "velocity": 250,
                        "dps": 16,
                        "alpha": 115,
                        "ehp": 3000,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Awakened Escort",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 980,
                        "distance": 45000,
                        "velocity": 140,
                        "dps": 55,
                        "alpha": 386,
                        "ehp": 12000,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 194,
                    "total_alpha": 1636,
                    "total_ehp": 62333
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Awakened Escort",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 980,
                        "distance": 45000,
                        "velocity": 140,
                        "dps": 55,
                        "alpha": 386,
                        "ehp": 12000,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Awakened Patroller",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1190,
                        "distance": 15000,
                        "velocity": 170,
                        "dps": 42,
                        "alpha": 432,
                        "ehp": 19167,
                        "trigger": false
                    }
                ]
            }
        ]
    },

    "Phase Catalyst Node": {
        "title": "Phase Catalyst Node",
        "wormhole": "c1",
        "blue_loot_value": 9000000,
        "isk_per_ehp": 70,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 302,
                    "total_alpha": 3825,
                    "total_ehp": 53933
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Vigilant Sentry Tower",
                        "class": "T",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 50,
                        "speed": 0,
                        "distance": 0,
                        "velocity": 0,
                        "dps": 52,
                        "alpha": 780,
                        "ehp": 10833,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Emergent Escort",
                        "class": "F",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2100,
                        "distance": 5000,
                        "velocity": 300,
                        "dps": 23,
                        "alpha": 163,
                        "ehp": 1300,
                        "trigger": true
                    },
                    {
                        "quantity": 4,
                        "type": "Emergent Watchman",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": -3,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 1925,
                        "distance": 5000,
                        "velocity": 275,
                        "dps": 12,
                        "alpha": 95,
                        "ehp": 2000,
                        "trigger": false
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 139,
                    "total_alpha": 1250,
                    "total_ehp": 50333
                },
                "contents": [
                    {
                        "quantity": 1,
                        "type": "Awakened Escort",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 980,
                        "distance": 45000,
                        "velocity": 140,
                        "dps": 55,
                        "alpha": 386,
                        "ehp": 12000,
                        "trigger": true
                    },
                    {
                        "quantity": 2,
                        "type": "Awakened Patroller",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1190,
                        "distance": 15000,
                        "velocity": 170,
                        "dps": 42,
                        "alpha": 432,
                        "ehp": 19167,
                        "trigger": false
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 135,
                    "total_alpha": 975,
                    "total_ehp": 24000
                },
                "contents": [
                    {
                        "quantity": 6,
                        "type": "Emergent Patroller",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 1750,
                        "distance": 8000,
                        "velocity": 250,
                        "dps": 16,
                        "alpha": 115,
                        "ehp": 3000,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Emergent Watchman",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": -3,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 1925,
                        "distance": 5000,
                        "velocity": 275,
                        "dps": 12,
                        "alpha": 95,
                        "ehp": 2000,
                        "trigger": false
                    }
                ]
            }
        ]
    },

    "The Line": {
        "title": "The Line",
        "wormhole": "c1",
        "blue_loot_value": 12000000,
        "isk_per_ehp": 106,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 133,
                    "total_alpha": 1011,
                    "total_ehp": 26750
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Emergent Patroller",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 1750,
                        "distance": 8000,
                        "velocity": 250,
                        "dps": 16,
                        "alpha": 115,
                        "ehp": 3000,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Emergent Watchman",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": -3,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 1925,
                        "distance": 5000,
                        "velocity": 275,
                        "dps": 12,
                        "alpha": 95,
                        "ehp": 2000,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Awakened Watchman",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1400,
                        "distance": 30000,
                        "velocity": 200,
                        "dps": 31,
                        "alpha": 266,
                        "ehp": 8750,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 152,
                    "total_alpha": 1352,
                    "total_ehp": 42233
                },
                "contents": [
                    {
                        "quantity": 3,
                        "type": "Emergent Escort",
                        "class": "F",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2100,
                        "distance": 5000,
                        "velocity": 300,
                        "dps": 23,
                        "alpha": 163,
                        "ehp": 1300,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Awakened Patroller",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1190,
                        "distance": 15000,
                        "velocity": 170,
                        "dps": 42,
                        "alpha": 432,
                        "ehp": 19167,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 155,
                    "total_alpha": 1330,
                    "total_ehp": 43750
                },
                "contents": [
                    {
                        "quantity": 5,
                        "type": "Awakened Watchman",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1400,
                        "distance": 30000,
                        "velocity": 200,
                        "dps": 31,
                        "alpha": 266,
                        "ehp": 8750,
                        "trigger": false
                    }
                ]
            }
        ]
    },

    "Unsecured Perimeter Amplifier": {
        "title": "Unsecured Perimeter Amplifier",
        "wormhole": "c1",
        "blue_loot_value": 10200000,
        "isk_per_ehp": 114,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 84,
                    "total_alpha": 864,
                    "total_ehp": 38333
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Awakened Patroller",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1190,
                        "distance": 15000,
                        "velocity": 170,
                        "dps": 42,
                        "alpha": 432,
                        "ehp": 19167,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 202,
                    "total_alpha": 1443,
                    "total_ehp": 42000
                },
                "contents": [
                    {
                        "quantity": 3,
                        "type": "Emergent Watchman",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": -3,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 1925,
                        "distance": 5000,
                        "velocity": 275,
                        "dps": 12,
                        "alpha": 95,
                        "ehp": 2000,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Awakened Escort",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 980,
                        "distance": 45000,
                        "velocity": 140,
                        "dps": 55,
                        "alpha": 386,
                        "ehp": 12000,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 172,
                    "total_alpha": 1304,
                    "total_ehp": 41500
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Awakened Escort",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 980,
                        "distance": 45000,
                        "velocity": 140,
                        "dps": 55,
                        "alpha": 386,
                        "ehp": 12000,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Awakened Watchman",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1400,
                        "distance": 30000,
                        "velocity": 200,
                        "dps": 31,
                        "alpha": 266,
                        "ehp": 8750,
                        "trigger": false
                    }
                ]
            }
        ]
    },

    "Unsecured Perimeter Information Center": {
        "title": "Unsecured Perimeter Information Center",
        "wormhole": "c1",
        "blue_loot_value": 11800000,
        "isk_per_ehp": 74,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 103,
                    "total_alpha": 872,
                    "total_ehp": 30167
                },
                "contents": [
                    {
                        "quantity": 3,
                        "type": "Emergent Patroller",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 1750,
                        "distance": 8000,
                        "velocity": 250,
                        "dps": 16,
                        "alpha": 115,
                        "ehp": 3000,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Emergent Watchman",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": -3,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 1925,
                        "distance": 5000,
                        "velocity": 275,
                        "dps": 12,
                        "alpha": 95,
                        "ehp": 2000,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Awakened Patroller",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1190,
                        "distance": 15000,
                        "velocity": 170,
                        "dps": 42,
                        "alpha": 432,
                        "ehp": 19167,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 139,
                    "total_alpha": 1391,
                    "total_ehp": 59500
                },
                "contents": [
                    {
                        "quantity": 1,
                        "type": "Emergent Watchman",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": -3,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 1925,
                        "distance": 5000,
                        "velocity": 275,
                        "dps": 12,
                        "alpha": 95,
                        "ehp": 2000,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Awakened Patroller",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1190,
                        "distance": 15000,
                        "velocity": 170,
                        "dps": 42,
                        "alpha": 432,
                        "ehp": 19167,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 210,
                    "total_alpha": 1892,
                    "total_ehp": 70583
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Emergent Patroller",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 1750,
                        "distance": 8000,
                        "velocity": 250,
                        "dps": 16,
                        "alpha": 115,
                        "ehp": 3000,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Awakened Patroller",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1190,
                        "distance": 15000,
                        "velocity": 170,
                        "dps": 42,
                        "alpha": 432,
                        "ehp": 19167,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Awakened Watchman",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1400,
                        "distance": 30000,
                        "velocity": 200,
                        "dps": 31,
                        "alpha": 266,
                        "ehp": 8750,
                        "trigger": false
                    }
                ]
            }
        ]
    },

    //   C2
    "Forgotten Perimeter Gateway": {
        "title": "Forgotten Perimeter Gateway",
        "wormhole": "c2",
        "blue_loot_value": 19100000,
        "isk_per_ehp": 65,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 200,
                    "total_alpha": 1994,
                    "total_ehp": 85417
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Awakened Patroller",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1190,
                        "distance": 15000,
                        "velocity": 170,
                        "dps": 42,
                        "alpha": 432,
                        "ehp": 19167,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Awakened Watchman",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1400,
                        "distance": 30000,
                        "velocity": 200,
                        "dps": 31,
                        "alpha": 266,
                        "ehp": 8750,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 283,
                    "total_alpha": 3382,
                    "total_ehp": 94000
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Emergent Watchman",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": -3,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 1925,
                        "distance": 5000,
                        "velocity": 275,
                        "dps": 12,
                        "alpha": 95,
                        "ehp": 2000,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Patroller",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 735,
                        "distance": 19000,
                        "velocity": 105,
                        "dps": 258,
                        "alpha": 3192,
                        "ehp": 90000,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 599,
                    "total_alpha": 6116,
                    "total_ehp": 113619
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Emergent Patroller",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 1750,
                        "distance": 8000,
                        "velocity": 250,
                        "dps": 16,
                        "alpha": 115,
                        "ehp": 3000,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Escort",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 875,
                        "distance": 55000,
                        "velocity": 125,
                        "dps": 220,
                        "alpha": 3544,
                        "ehp": 61333,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Watchman",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 630,
                        "distance": 65000,
                        "velocity": 90,
                        "dps": 314,
                        "alpha": 2112,
                        "ehp": 40286,
                        "trigger": false
                    }
                ]
            }
        ]
    },

    "Forgotten Perimeter Habitation Coils": {
        "title": "Forgotten Perimeter Habitation Coils",
        "wormhole": "c2",
        "blue_loot_value": 25400000,
        "isk_per_ehp": 65,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 204,
                    "total_alpha": 1851,
                    "total_ehp": 66100
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Emergent Escort",
                        "class": "F",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2100,
                        "distance": 5000,
                        "velocity": 300,
                        "dps": 23,
                        "alpha": 163,
                        "ehp": 1300,
                        "trigger": true
                    },
                    {
                        "quantity": 2,
                        "type": "Emergent Patroller",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 1750,
                        "distance": 8000,
                        "velocity": 250,
                        "dps": 16,
                        "alpha": 115,
                        "ehp": 3000,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Awakened Patroller",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1190,
                        "distance": 15000,
                        "velocity": 170,
                        "dps": 42,
                        "alpha": 432,
                        "ehp": 19167,
                        "trigger": false
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 259,
                    "total_alpha": 2378,
                    "total_ehp": 81867
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Emergent Escort",
                        "class": "F",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2100,
                        "distance": 5000,
                        "velocity": 300,
                        "dps": 23,
                        "alpha": 163,
                        "ehp": 1300,
                        "trigger": false
                    },
                    {
                        "quantity": 4,
                        "type": "Awakened Patroller",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1190,
                        "distance": 15000,
                        "velocity": 170,
                        "dps": 42,
                        "alpha": 432,
                        "ehp": 19167,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 414,
                    "total_alpha": 4302,
                    "total_ehp": 107200
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Emergent Escort",
                        "class": "F",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2100,
                        "distance": 5000,
                        "velocity": 300,
                        "dps": 23,
                        "alpha": 163,
                        "ehp": 1300,
                        "trigger": false
                    },
                    {
                        "quantity": 4,
                        "type": "Emergent Patroller",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 1750,
                        "distance": 8000,
                        "velocity": 250,
                        "dps": 16,
                        "alpha": 115,
                        "ehp": 3000,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Patroller",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 735,
                        "distance": 19000,
                        "velocity": 105,
                        "dps": 258,
                        "alpha": 3192,
                        "ehp": 90000,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 4,
                "details": {
                    "total_dps": 478,
                    "total_alpha": 4884,
                    "total_ehp": 137067
                },
                "contents": [
                    {
                        "quantity": 3,
                        "type": "Emergent Escort",
                        "class": "F",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2100,
                        "distance": 5000,
                        "velocity": 300,
                        "dps": 23,
                        "alpha": 163,
                        "ehp": 1300,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Awakened Escort",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 980,
                        "distance": 45000,
                        "velocity": 140,
                        "dps": 55,
                        "alpha": 386,
                        "ehp": 12000,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Awakened Patroller",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1190,
                        "distance": 15000,
                        "velocity": 170,
                        "dps": 42,
                        "alpha": 432,
                        "ehp": 19167,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Patroller",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 735,
                        "distance": 19000,
                        "velocity": 105,
                        "dps": 258,
                        "alpha": 3192,
                        "ehp": 90000,
                        "trigger": false
                    }
                ]
            }
        ]
    }
    ,
    "Perimeter Checkpoint": {
        "title": "Perimeter Checkpoint",
        "wormhole": "c2",
        "blue_loot_value": 12900000,
        "isk_per_ehp": 52,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 263,
                    "total_alpha": 3086,
                    "total_ehp": 85167
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Vigilant Sentry Tower",
                        "class": "T",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 50,
                        "speed": 0,
                        "distance": 0,
                        "velocity": 0,
                        "dps": 52,
                        "alpha": 780,
                        "ehp": 10833,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Emergent Patroller",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 1750,
                        "distance": 8000,
                        "velocity": 250,
                        "dps": 16,
                        "alpha": 115,
                        "ehp": 3000,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Awakened Patroller",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1190,
                        "distance": 15000,
                        "velocity": 170,
                        "dps": 42,
                        "alpha": 432,
                        "ehp": 19167,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 194,
                    "total_alpha": 1636,
                    "total_ehp": 62333
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Awakened Escort",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 980,
                        "distance": 45000,
                        "velocity": 140,
                        "dps": 55,
                        "alpha": 386,
                        "ehp": 12000,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Awakened Patroller",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1190,
                        "distance": 15000,
                        "velocity": 170,
                        "dps": 42,
                        "alpha": 432,
                        "ehp": 19167,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 307,
                    "total_alpha": 3537,
                    "total_ehp": 99000
                },
                "contents": [
                    {
                        "quantity": 3,
                        "type": "Emergent Patroller",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 1750,
                        "distance": 8000,
                        "velocity": 250,
                        "dps": 16,
                        "alpha": 115,
                        "ehp": 3000,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Patroller",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 735,
                        "distance": 19000,
                        "velocity": 105,
                        "dps": 258,
                        "alpha": 3192,
                        "ehp": 90000,
                        "trigger": false
                    }
                ]
            }
        ]
    }
    ,
    "Perimeter Hangar": {
        "title": "Perimeter Hangar",
        "wormhole": "c2",
        "blue_loot_value": 15600000,
        "isk_per_ehp": 74,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 151,
                    "total_alpha": 1486,
                    "total_ehp": 61500
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Emergent Watchman",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": -3,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 1925,
                        "distance": 5000,
                        "velocity": 275,
                        "dps": 12,
                        "alpha": 95,
                        "ehp": 2000,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Awakened Patroller",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1190,
                        "distance": 15000,
                        "velocity": 170,
                        "dps": 42,
                        "alpha": 432,
                        "ehp": 19167,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 424,
                    "total_alpha": 2884,
                    "total_ehp": 64286
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Awakened Escort",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 980,
                        "distance": 45000,
                        "velocity": 140,
                        "dps": 55,
                        "alpha": 386,
                        "ehp": 12000,
                        "trigger": true
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Watchman",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 630,
                        "distance": 65000,
                        "velocity": 90,
                        "dps": 314,
                        "alpha": 2112,
                        "ehp": 40286,
                        "trigger": false
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 330,
                    "total_alpha": 4316,
                    "total_ehp": 85333
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Awakened Escort",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 980,
                        "distance": 45000,
                        "velocity": 140,
                        "dps": 55,
                        "alpha": 386,
                        "ehp": 12000,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Escort",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 875,
                        "distance": 55000,
                        "velocity": 125,
                        "dps": 220,
                        "alpha": 3544,
                        "ehp": 61333,
                        "trigger": false
                    }
                ]
            }
        ]
    },
    "Sleeper Data Signature Sanctuary": {
        "title": "Sleeper Data Signature Sanctuary",
        "wormhole": "c2",
        "blue_loot_value": 11600000,
        "isk_per_ehp": 46,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 315,
                    "total_alpha": 3457,
                    "total_ehp": 65500
                },
                "contents": [
                    {
                        "quantity": 3,
                        "type": "Vigilant Sentry Tower",
                        "class": "T",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 50,
                        "speed": 0,
                        "distance": 0,
                        "velocity": 0,
                        "dps": 52,
                        "alpha": 780,
                        "ehp": 10833,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Emergent Patroller",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 1750,
                        "distance": 8000,
                        "velocity": 250,
                        "dps": 16,
                        "alpha": 115,
                        "ehp": 3000,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Awakened Escort",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 980,
                        "distance": 45000,
                        "velocity": 140,
                        "dps": 55,
                        "alpha": 386,
                        "ehp": 12000,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 310,
                    "total_alpha": 4194,
                    "total_ehp": 66533
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Emergent Escort",
                        "class": "F",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2100,
                        "distance": 5000,
                        "velocity": 300,
                        "dps": 23,
                        "alpha": 163,
                        "ehp": 1300,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Escort",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 875,
                        "distance": 55000,
                        "velocity": 125,
                        "dps": 220,
                        "alpha": 3544,
                        "ehp": 61333,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 385,
                    "total_alpha": 4640,
                    "total_ehp": 117763
                },
                "contents": [
                    {
                        "quantity": 1,
                        "type": "Sleepless Outguard",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -10,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1050,
                        "distance": 15000,
                        "velocity": 150,
                        "dps": 385,
                        "alpha": 4640,
                        "ehp": 117763,
                        "trigger": false
                    }
                ]
            }
        ]
    },
    "The Ruins of Enclave Cohort 27": {
        "title": "The Ruins of Enclave Cohort 27",
        "wormhole": "c2",
        "blue_loot_value": 15600000,
        "isk_per_ehp": 58,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 356,
                    "total_alpha": 3882,
                    "total_ehp": 108000
                },
                "contents": [
                    {
                        "quantity": 6,
                        "type": "Emergent Patroller",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 1750,
                        "distance": 8000,
                        "velocity": 250,
                        "dps": 16,
                        "alpha": 115,
                        "ehp": 3000,
                        "trigger": true
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Patroller",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 735,
                        "distance": 19000,
                        "velocity": 105,
                        "dps": 258,
                        "alpha": 3192,
                        "ehp": 90000,
                        "trigger": false
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 220,
                    "total_alpha": 3544,
                    "total_ehp": 61333
                },
                "contents": [
                    {
                        "quantity": 1,
                        "type": "Sleepless Escort",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 875,
                        "distance": 55000,
                        "velocity": 125,
                        "dps": 220,
                        "alpha": 3544,
                        "ehp": 61333,
                        "optional": true
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 223,
                    "total_alpha": 2255,
                    "total_ehp": 97833
                },
                "contents": [
                    {
                        "quantity": 1,
                        "type": "Emergent Watchman",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": -3,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 1925,
                        "distance": 5000,
                        "velocity": 275,
                        "dps": 12,
                        "alpha": 95,
                        "ehp": 2000,
                        "trigger": false
                    },
                    {
                        "quantity": 5,
                        "type": "Awakened Patroller",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1190,
                        "distance": 15000,
                        "velocity": 170,
                        "dps": 42,
                        "alpha": 432,
                        "ehp": 19167,
                        "trigger": true
                    }
                ]
            }
        ]
    }
    ,
    "Unsecured Perimeter Comms Relay": {
        "title": "Unsecured Perimeter Comms Relay",
        "wormhole": "c2",
        "blue_loot_value": 20200000,
        "isk_per_ehp": 54,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 531,
                    "total_alpha": 6036,
                    "total_ehp": 173596
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Awakened Patroller",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1190,
                        "distance": 15000,
                        "velocity": 170,
                        "dps": 42,
                        "alpha": 432,
                        "ehp": 19167,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Awakened Watchman",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1400,
                        "distance": 30000,
                        "velocity": 200,
                        "dps": 31,
                        "alpha": 266,
                        "ehp": 8750,
                        "trigger": true
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Outguard",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -10,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1050,
                        "distance": 15000,
                        "velocity": 150,
                        "dps": 385,
                        "alpha": 4640,
                        "ehp": 117763,
                        "optional": true
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 283,
                    "total_alpha": 3382,
                    "total_ehp": 94000
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Emergent Watchman",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": -3,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 1925,
                        "distance": 5000,
                        "velocity": 275,
                        "dps": 12,
                        "alpha": 95,
                        "ehp": 2000,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Patroller",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 735,
                        "distance": 19000,
                        "velocity": 105,
                        "dps": 258,
                        "alpha": 3192,
                        "ehp": 90000,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 566,
                    "total_alpha": 5886,
                    "total_ehp": 107619
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Emergent Patroller",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 1750,
                        "distance": 8000,
                        "velocity": 250,
                        "dps": 16,
                        "alpha": 115,
                        "ehp": 3000,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Escort",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 875,
                        "distance": 55000,
                        "velocity": 125,
                        "dps": 220,
                        "alpha": 3544,
                        "ehp": 61333,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Watchman",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 630,
                        "distance": 65000,
                        "velocity": 90,
                        "dps": 314,
                        "alpha": 2112,
                        "ehp": 40286,
                        "trigger": false
                    }
                ]
            }
        ]
    },
    "Unsecured Perimeter Transponder Farm": {
        "title": "Unsecured Perimeter Transponder Farm",
        "wormhole": "c2",
        "blue_loot_value": 26700000,
        "isk_per_ehp": 68,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 188,
                    "total_alpha": 1736,
                    "total_ehp": 63100
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Emergent Escort",
                        "class": "F",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2100,
                        "distance": 5000,
                        "velocity": 300,
                        "dps": 23,
                        "alpha": 163,
                        "ehp": 1300,
                        "trigger": true
                    },
                    {
                        "quantity": 1,
                        "type": "Emergent Patroller",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 1750,
                        "distance": 8000,
                        "velocity": 250,
                        "dps": 16,
                        "alpha": 115,
                        "ehp": 3000,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Awakened Patroller",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1190,
                        "distance": 15000,
                        "velocity": 170,
                        "dps": 42,
                        "alpha": 432,
                        "ehp": 19167,
                        "trigger": false
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 245,
                    "total_alpha": 2319,
                    "total_ehp": 88017
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Emergent Escort",
                        "class": "F",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2100,
                        "distance": 5000,
                        "velocity": 300,
                        "dps": 23,
                        "alpha": 163,
                        "ehp": 1300,
                        "trigger": false
                    },
                    {
                        "quantity": 4,
                        "type": "Awakened Patroller",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1190,
                        "distance": 15000,
                        "velocity": 170,
                        "dps": 42,
                        "alpha": 432,
                        "ehp": 19167,
                        "trigger": true
                    },
                    {
                        "quantity": 1,
                        "type": "Awakened Watchman",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1400,
                        "distance": 30000,
                        "velocity": 200,
                        "dps": 31,
                        "alpha": 266,
                        "ehp": 8750,
                        "trigger": false
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 414,
                    "total_alpha": 4302,
                    "total_ehp": 107200
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Emergent Escort",
                        "class": "F",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2100,
                        "distance": 5000,
                        "velocity": 300,
                        "dps": 23,
                        "alpha": 163,
                        "ehp": 1300,
                        "trigger": true
                    },
                    {
                        "quantity": 4,
                        "type": "Emergent Patroller",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 1750,
                        "distance": 8000,
                        "velocity": 250,
                        "dps": 16,
                        "alpha": 115,
                        "ehp": 3000,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Patroller",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 735,
                        "distance": 19000,
                        "velocity": 105,
                        "dps": 258,
                        "alpha": 3192,
                        "ehp": 90000,
                        "trigger": false
                    }
                ]
            },
            {
                "wave_number": 4,
                "details": {
                    "total_dps": 466,
                    "total_alpha": 3968,
                    "total_ehp": 137033
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Emergent Escort",
                        "class": "F",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2100,
                        "distance": 5000,
                        "velocity": 300,
                        "dps": 23,
                        "alpha": 163,
                        "ehp": 1300,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Awakened Escort",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 980,
                        "distance": 45000,
                        "velocity": 140,
                        "dps": 55,
                        "alpha": 386,
                        "ehp": 12000,
                        "trigger": false
                    },
                    {
                        "quantity": 5,
                        "type": "Awakened Patroller",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1190,
                        "distance": 15000,
                        "velocity": 170,
                        "dps": 42,
                        "alpha": 432,
                        "ehp": 19167,
                        "trigger": false
                    }
                ]
            }
        ]
    },

    // C3
    "Forgotten Frontier Quarantine Outpost": {
        "title": "Forgotten Frontier Quarantine Outpost",
        "wormhole": "c3",
        "blue_loot_value": 79400000,
        "isk_per_ehp": 153,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 368,
                    "total_alpha": 2587,
                    "total_ehp": 75600
                },
                "contents": [
                    {
                        "quantity": 6,
                        "type": "Emergent Defender",
                        "class": "F",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2160,
                        "distance": 6500,
                        "velocity": 270,
                        "dps": 23,
                        "alpha": 161,
                        "ehp": 4200,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Awakened Preserver",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 52,
                        "sig": 150,
                        "speed": 1240,
                        "distance": 45000,
                        "velocity": 155,
                        "dps": 77,
                        "alpha": 540,
                        "ehp": 16800,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 462,
                    "total_alpha": 4012,
                    "total_ehp": 150850
                },
                "contents": [
                    {
                        "quantity": 3,
                        "type": "Awakened Defender",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1480,
                        "distance": 15000,
                        "velocity": 185,
                        "dps": 59,
                        "alpha": 605,
                        "ehp": 26833,
                        "trigger": true
                    },
                    {
                        "quantity": 2,
                        "type": "Awakened Preserver",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 52,
                        "sig": 150,
                        "speed": 1240,
                        "distance": 45000,
                        "velocity": 155,
                        "dps": 77,
                        "alpha": 540,
                        "ehp": 16800,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Awakened Upholder",
                        "class": "C",
                        "scram": 0,
                        "web": 1,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1728,
                        "distance": 30000,
                        "velocity": 216,
                        "dps": 43,
                        "alpha": 372,
                        "ehp": 12250,
                        "trigger": false
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 431,
                    "total_alpha": 5001,
                    "total_ehp": 105200
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Emergent Upholder",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": -3,
                        "rrep": 19,
                        "sig": 35,
                        "speed": 2400,
                        "distance": 5000,
                        "velocity": 300,
                        "dps": 17,
                        "alpha": 133,
                        "ehp": 2800,
                        "trigger": true
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Defender",
                        "class": "B",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 920,
                        "distance": 19000,
                        "velocity": 115,
                        "dps": 362,
                        "alpha": 4469,
                        "ehp": 94000,
                        "trigger": false
                    }
                ]
            },
            {
                "wave_number": 4,
                "details": {
                    "total_dps": 707,
                    "total_alpha": 10567,
                    "total_ehp": 188533
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Emergent Defender",
                        "class": "F",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2160,
                        "distance": 6500,
                        "velocity": 270,
                        "dps": 23,
                        "alpha": 161,
                        "ehp": 4200,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Sleepless Preserver",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 65,
                        "sig": 400,
                        "speed": 1080,
                        "distance": 55000,
                        "velocity": 135,
                        "dps": 308,
                        "alpha": 4962,
                        "ehp": 85867,
                        "trigger": false
                    }
                ]
            }
        ]
    },
    "Forgotten Frontier Recursive Depot": {
        "title": "Forgotten Frontier Recursive Depot",
        "wormhole": "c3",
        "blue_loot_value": 92500000,
        "isk_per_ehp": 176,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 244,
                    "total_alpha": 2120,
                    "total_ehp": 60947
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Emergent Preserver",
                        "class": "F",
                        "scram": 1,
                        "web": 1,
                        "neut": -3,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2600,
                        "distance": 5000,
                        "velocity": 325,
                        "dps": 32,
                        "alpha": 228,
                        "ehp": 1820,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Awakened Defender",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1480,
                        "distance": 15000,
                        "velocity": 185,
                        "dps": 59,
                        "alpha": 605,
                        "ehp": 26833,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 351,
                    "total_alpha": 3304,
                    "total_ehp": 129500
                },
                "contents": [
                    {
                        "quantity": 3,
                        "type": "Awakened Defender",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1480,
                        "distance": 15000,
                        "velocity": 185,
                        "dps": 59,
                        "alpha": 605,
                        "ehp": 26833,
                        "trigger": true
                    },
                    {
                        "quantity": 4,
                        "type": "Awakened Upholder",
                        "class": "C",
                        "scram": 0,
                        "web": 1,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1728,
                        "distance": 30000,
                        "velocity": 216,
                        "dps": 43,
                        "alpha": 372,
                        "ehp": 12250,
                        "trigger": false
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 1011,
                    "total_alpha": 6980,
                    "total_ehp": 145700
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Emergent Defender",
                        "class": "F",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2160,
                        "distance": 6500,
                        "velocity": 270,
                        "dps": 23,
                        "alpha": 161,
                        "ehp": 4200,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Awakened Upholder",
                        "class": "C",
                        "scram": 0,
                        "web": 1,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1728,
                        "distance": 30000,
                        "velocity": 216,
                        "dps": 43,
                        "alpha": 372,
                        "ehp": 12250,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Sleepless Upholder",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -10,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 800,
                        "distance": 65000,
                        "velocity": 100,
                        "dps": 439,
                        "alpha": 2957,
                        "ehp": 56400,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 4,
                "details": {
                    "total_dps": 1407,
                    "total_alpha": 9565,
                    "total_ehp": 189850
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Emergent Defender",
                        "class": "F",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2160,
                        "distance": 6500,
                        "velocity": 270,
                        "dps": 23,
                        "alpha": 161,
                        "ehp": 4200,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Awakened Upholder",
                        "class": "C",
                        "scram": 0,
                        "web": 1,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1728,
                        "distance": 30000,
                        "velocity": 216,
                        "dps": 43,
                        "alpha": 372,
                        "ehp": 12250,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Sleepless Upholder",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -10,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 800,
                        "distance": 65000,
                        "velocity": 100,
                        "dps": 439,
                        "alpha": 2957,
                        "ehp": 56400,
                        "trigger": false
                    }
                ]
            }
        ]
    },
    "Fortification Frontier Stronghold": {
        "title": "Fortification Frontier Stronghold",
        "wormhole": "c3",
        "blue_loot_value": 41100000,
        "isk_per_ehp": 147,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 164,
                    "total_alpha": 1532,
                    "total_ehp": 62067
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Emergent Defender",
                        "class": "F",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2160,
                        "distance": 6500,
                        "velocity": 270,
                        "dps": 23,
                        "alpha": 161,
                        "ehp": 4200,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Awakened Defender",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1480,
                        "distance": 15000,
                        "velocity": 185,
                        "dps": 59,
                        "alpha": 605,
                        "ehp": 26833,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 205,
                    "total_alpha": 1954,
                    "total_ehp": 78167
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Awakened Defender",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1480,
                        "distance": 15000,
                        "velocity": 185,
                        "dps": 59,
                        "alpha": 605,
                        "ehp": 26833,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Awakened Upholder",
                        "class": "C",
                        "scram": 0,
                        "web": 1,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1728,
                        "distance": 30000,
                        "velocity": 216,
                        "dps": 43,
                        "alpha": 372,
                        "ehp": 12250,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 678,
                    "total_alpha": 5079,
                    "total_ehp": 139117
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Awakened Defender",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1480,
                        "distance": 15000,
                        "velocity": 185,
                        "dps": 59,
                        "alpha": 605,
                        "ehp": 26833,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Awakened Preserver",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 52,
                        "sig": 150,
                        "speed": 1240,
                        "distance": 45000,
                        "velocity": 155,
                        "dps": 77,
                        "alpha": 540,
                        "ehp": 16800,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Awakened Upholder",
                        "class": "C",
                        "scram": 0,
                        "web": 1,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1728,
                        "distance": 30000,
                        "velocity": 216,
                        "dps": 43,
                        "alpha": 372,
                        "ehp": 12250,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Upholder",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -10,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 800,
                        "distance": 65000,
                        "velocity": 100,
                        "dps": 439,
                        "alpha": 2957,
                        "ehp": 56400,
                        "trigger": false
                    }
                ]
            }
        ]
    },
    "Outpost Frontier Stronghold": {
        "title": "Outpost Frontier Stronghold",
        "wormhole": "c3",
        "blue_loot_value": 45100000,
        "isk_per_ehp": 100,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 580,
                    "total_alpha": 7745,
                    "total_ehp": 139500
                },
                "contents": [
                    {
                        "quantity": 3,
                        "type": "Wakeful Sentry Tower",
                        "class": "T",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 50,
                        "speed": 0,
                        "distance": 0,
                        "velocity": 0,
                        "dps": 73,
                        "alpha": 1092,
                        "ehp": 15167,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Defender",
                        "class": "B",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 920,
                        "distance": 19000,
                        "velocity": 115,
                        "dps": 362,
                        "alpha": 4469,
                        "ehp": 94000,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 236,
                    "total_alpha": 2419,
                    "total_ehp": 107333
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Awakened Defender",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1480,
                        "distance": 15000,
                        "velocity": 185,
                        "dps": 59,
                        "alpha": 605,
                        "ehp": 26833,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 814,
                    "total_alpha": 9582,
                    "total_ehp": 204800
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Emergent Defender",
                        "class": "F",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2160,
                        "distance": 6500,
                        "velocity": 270,
                        "dps": 23,
                        "alpha": 161,
                        "ehp": 4200,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Sleepless Defender",
                        "class": "B",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 920,
                        "distance": 19000,
                        "velocity": 115,
                        "dps": 362,
                        "alpha": 4469,
                        "ehp": 94000,
                        "trigger": false
                    }
                ]
            }
        ]
    },
    "Solar Cell": {
        "title": "Solar Cell",
        "wormhole": "c3",
        "blue_loot_value": 53400000,
        "isk_per_ehp": 119,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 437,
                    "total_alpha": 5069,
                    "total_ehp": 108070
                },
                "contents": [
                    {
                        "quantity": 1,
                        "type": "Emergent Preserver",
                        "class": "F",
                        "scram": 1,
                        "web": 1,
                        "neut": -3,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2600,
                        "distance": 5000,
                        "velocity": 325,
                        "dps": 32,
                        "alpha": 228,
                        "ehp": 1820,
                        "trigger": true
                    },
                    {
                        "quantity": 1,
                        "type": "Awakened Upholder",
                        "class": "C",
                        "scram": 0,
                        "web": 1,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1728,
                        "distance": 30000,
                        "velocity": 216,
                        "dps": 43,
                        "alpha": 372,
                        "ehp": 12250,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Defender",
                        "class": "B",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 920,
                        "distance": 19000,
                        "velocity": 115,
                        "dps": 362,
                        "alpha": 4469,
                        "ehp": 94000,
                        "trigger": false,
                        "optional": true
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 301,
                    "total_alpha": 2775,
                    "total_ehp": 106750
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Emergent Defender",
                        "class": "F",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2160,
                        "distance": 6500,
                        "velocity": 270,
                        "dps": 23,
                        "alpha": 161,
                        "ehp": 4200,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Emergent Upholder",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": -3,
                        "rrep": 19,
                        "sig": 35,
                        "speed": 2400,
                        "distance": 5000,
                        "velocity": 300,
                        "dps": 17,
                        "alpha": 133,
                        "ehp": 2800,
                        "trigger": true
                    },
                    {
                        "quantity": 3,
                        "type": "Awakened Defender",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1480,
                        "distance": 15000,
                        "velocity": 185,
                        "dps": 59,
                        "alpha": 605,
                        "ehp": 26833,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Awakened Upholder",
                        "class": "C",
                        "scram": 0,
                        "web": 1,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1728,
                        "distance": 30000,
                        "velocity": 216,
                        "dps": 43,
                        "alpha": 372,
                        "ehp": 12250,
                        "trigger": false
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 787,
                    "total_alpha": 10640,
                    "total_ehp": 233533
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Awakened Defender",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1480,
                        "distance": 15000,
                        "velocity": 185,
                        "dps": 59,
                        "alpha": 605,
                        "ehp": 26833,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Defender",
                        "class": "B",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 920,
                        "distance": 19000,
                        "velocity": 115,
                        "dps": 362,
                        "alpha": 4469,
                        "ehp": 94000,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Preserver",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 65,
                        "sig": 400,
                        "speed": 1080,
                        "distance": 55000,
                        "velocity": 135,
                        "dps": 308,
                        "alpha": 4962,
                        "ehp": 85867,
                        "trigger": false
                    }
                ]
            }
        ]
    },
    "The Oruze Construct": {
        "title": "The Oruze Construct",
        "wormhole": "c3",
        "blue_loot_value": 44500000,
        "isk_per_ehp": 150,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 397,
                    "total_alpha": 4214,
                    "total_ehp": 96133
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Wakeful Sentry Tower",
                        "class": "T",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 50,
                        "speed": 0,
                        "distance": 0,
                        "velocity": 0,
                        "dps": 73,
                        "alpha": 1092,
                        "ehp": 15167,
                        "trigger": false
                    },
                    {
                        "quantity": 4,
                        "type": "Awakened Upholder",
                        "class": "C",
                        "scram": 0,
                        "web": 1,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1728,
                        "distance": 30000,
                        "velocity": 216,
                        "dps": 43,
                        "alpha": 372,
                        "ehp": 12250,
                        "trigger": true
                    },
                    {
                        "quantity": 1,
                        "type": "Awakened Preserver",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 52,
                        "sig": 150,
                        "speed": 1240,
                        "distance": 45000,
                        "velocity": 155,
                        "dps": 77,
                        "alpha": 540,
                        "ehp": 16800,
                        "optional": true
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 453,
                    "total_alpha": 5113,
                    "total_ehp": 110800
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Emergent Defender",
                        "class": "F",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2160,
                        "distance": 6500,
                        "velocity": 270,
                        "dps": 23,
                        "alpha": 161,
                        "ehp": 4200,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Defender",
                        "class": "B",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 920,
                        "distance": 19000,
                        "velocity": 115,
                        "dps": 362,
                        "alpha": 4469,
                        "ehp": 94000,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 593,
                    "total_alpha": 4038,
                    "total_ehp": 90000
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Awakened Preserver",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 52,
                        "sig": 150,
                        "speed": 1240,
                        "distance": 45000,
                        "velocity": 155,
                        "dps": 77,
                        "alpha": 540,
                        "ehp": 16800,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Upholder",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -10,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 800,
                        "distance": 65000,
                        "velocity": 100,
                        "dps": 439,
                        "alpha": 2957,
                        "ehp": 56400,
                        "trigger": false
                    }
                ]
            }
        ]
    },
    "Unsecured Frontier Database": {
        "title": "Unsecured Frontier Database",
        "wormhole": "c3",
        "blue_loot_value": 88400000,
        "isk_per_ehp": 176,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 271,
                    "total_alpha": 2497,
                    "total_ehp": 85960
                },
                "contents": [
                    {
                        "quantity": 3,
                        "type": "Emergent Preserver",
                        "class": "F",
                        "scram": 1,
                        "web": 1,
                        "neut": -3,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2600,
                        "distance": 5000,
                        "velocity": 325,
                        "dps": 32,
                        "alpha": 228,
                        "ehp": 1820,
                        "trigger": true
                    },
                    {
                        "quantity": 3,
                        "type": "Awakened Defender",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1480,
                        "distance": 15000,
                        "velocity": 185,
                        "dps": 59,
                        "alpha": 605,
                        "ehp": 26833,
                        "trigger": false
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 410,
                    "total_alpha": 3909,
                    "total_ehp": 156333
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Awakened Defender",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1480,
                        "distance": 15000,
                        "velocity": 185,
                        "dps": 59,
                        "alpha": 605,
                        "ehp": 26833,
                        "trigger": true
                    },
                    {
                        "quantity": 4,
                        "type": "Awakened Upholder",
                        "class": "C",
                        "scram": 0,
                        "web": 1,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1728,
                        "distance": 30000,
                        "velocity": 216,
                        "dps": 43,
                        "alpha": 372,
                        "ehp": 12250,
                        "trigger": false
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 638,
                    "total_alpha": 4557,
                    "total_ehp": 105750
                },
                "contents": [
                    {
                        "quantity": 3,
                        "type": "Emergent Defender",
                        "class": "F",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2160,
                        "distance": 6500,
                        "velocity": 270,
                        "dps": 23,
                        "alpha": 161,
                        "ehp": 4200,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Awakened Upholder",
                        "class": "C",
                        "scram": 0,
                        "web": 1,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1728,
                        "distance": 30000,
                        "velocity": 216,
                        "dps": 43,
                        "alpha": 372,
                        "ehp": 12250,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Upholder",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -10,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 800,
                        "distance": 65000,
                        "velocity": 100,
                        "dps": 439,
                        "alpha": 2957,
                        "ehp": 56400,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 4,
                "details": {
                    "total_dps": 1072,
                    "total_alpha": 7486,
                    "total_ehp": 153190
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Emergent Preserver",
                        "class": "F",
                        "scram": 1,
                        "web": 1,
                        "neut": -3,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2600,
                        "distance": 5000,
                        "velocity": 325,
                        "dps": 32,
                        "alpha": 228,
                        "ehp": 1820,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Awakened Upholder",
                        "class": "C",
                        "scram": 0,
                        "web": 1,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1728,
                        "distance": 30000,
                        "velocity": 216,
                        "dps": 43,
                        "alpha": 372,
                        "ehp": 12250,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Sleepless Upholder",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -10,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 800,
                        "distance": 65000,
                        "velocity": 100,
                        "dps": 439,
                        "alpha": 2957,
                        "ehp": 56400,
                        "trigger": false
                    }
                ]
            }
        ]
    },
    "Unsecured Frontier Receiver": {
        "title": "Unsecured Frontier Receiver",
        "wormhole": "c3",
        "blue_loot_value": 75100000,
        "isk_per_ehp": 150,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 346,
                    "total_alpha": 2426,
                    "total_ehp": 71400
                },
                "contents": [
                    {
                        "quantity": 5,
                        "type": "Emergent Defender",
                        "class": "F",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2160,
                        "distance": 6500,
                        "velocity": 270,
                        "dps": 23,
                        "alpha": 161,
                        "ehp": 4200,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Awakened Preserver",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 52,
                        "sig": 150,
                        "speed": 1240,
                        "distance": 45000,
                        "velocity": 155,
                        "dps": 77,
                        "alpha": 540,
                        "ehp": 16800,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 385,
                    "total_alpha": 3472,
                    "total_ehp": 134050
                },
                "contents": [
                    {
                        "quantity": 3,
                        "type": "Awakened Defender",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1480,
                        "distance": 15000,
                        "velocity": 185,
                        "dps": 59,
                        "alpha": 605,
                        "ehp": 26833,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Awakened Preserver",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 52,
                        "sig": 150,
                        "speed": 1240,
                        "distance": 45000,
                        "velocity": 155,
                        "dps": 77,
                        "alpha": 540,
                        "ehp": 16800,
                        "trigger": true
                    },
                    {
                        "quantity": 3,
                        "type": "Awakened Upholder",
                        "class": "C",
                        "scram": 0,
                        "web": 1,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1728,
                        "distance": 30000,
                        "velocity": 216,
                        "dps": 43,
                        "alpha": 372,
                        "ehp": 12250,
                        "trigger": false
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 431,
                    "total_alpha": 5001,
                    "total_ehp": 105200
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Emergent Upholder",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": -3,
                        "rrep": 19,
                        "sig": 35,
                        "speed": 2400,
                        "distance": 5000,
                        "velocity": 300,
                        "dps": 17,
                        "alpha": 133,
                        "ehp": 2800,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Defender",
                        "class": "B",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 920,
                        "distance": 19000,
                        "velocity": 115,
                        "dps": 362,
                        "alpha": 4469,
                        "ehp": 94000,
                        "trigger_on_attack": true
                    }
                ]
            },
            {
                "wave_number": 4,
                "details": {
                    "total_dps": 707,
                    "total_alpha": 10567,
                    "total_ehp": 188533
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Emergent Defender",
                        "class": "F",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2160,
                        "distance": 6500,
                        "velocity": 270,
                        "dps": 23,
                        "alpha": 161,
                        "ehp": 4200,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Sleepless Preserver",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 65,
                        "sig": 400,
                        "speed": 1080,
                        "distance": 55000,
                        "velocity": 135,
                        "dps": 308,
                        "alpha": 4962,
                        "ehp": 85867,
                        "trigger": false
                    }
                ]
            }
        ]
    },

    // C4
    "Forgotten Frontier Conversion Module": {
        "title": "Forgotten Frontier Conversion Module",
        "wormhole": "c4",
        "blue_loot_value": 146500000,
        "isk_per_ehp": 96,
        "trigger_on_hack": true,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 1542,
                    "total_alpha": 15140,
                    "total_ehp": 422635
                },
                "contents": [
                    {
                        "quantity": 1,
                        "type": "Wakeful Sentry Tower",
                        "class": "T",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 50,
                        "speed": 0,
                        "distance": 0,
                        "velocity": 0,
                        "dps": 73,
                        "alpha": 1092,
                        "ehp": 15167,
                        "trigger": false
                    },
                    {
                        "quantity": 6,
                        "type": "Emergent Defender",
                        "class": "F",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2160,
                        "distance": 6500,
                        "velocity": 270,
                        "dps": 23,
                        "alpha": 161,
                        "ehp": 4200,
                        "trigger": false
                    },
                    {
                        "quantity": 6,
                        "type": "Awakened Defender",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1480,
                        "distance": 15000,
                        "velocity": 185,
                        "dps": 59,
                        "alpha": 605,
                        "ehp": 26833,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Upholder",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -10,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 800,
                        "distance": 65000,
                        "velocity": 100,
                        "dps": 439,
                        "alpha": 2957,
                        "ehp": 56400,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Safeguard",
                        "class": "B",
                        "scram": 1,
                        "web": 1,
                        "neut": -20,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1320,
                        "distance": 15000,
                        "velocity": 165,
                        "dps": 539,
                        "alpha": 6496,
                        "ehp": 164868,
                        "optional": true,
                        "trigger": false
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 1494,
                    "total_alpha": 17235,
                    "total_ehp": 437167
                },
                "contents": [
                    {
                        "quantity": 5,
                        "type": "Emergent Defender",
                        "class": "F",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2160,
                        "distance": 6500,
                        "velocity": 270,
                        "dps": 23,
                        "alpha": 161,
                        "ehp": 4200,
                        "trigger": false
                    },
                    {
                        "quantity": 5,
                        "type": "Awakened Defender",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1480,
                        "distance": 15000,
                        "velocity": 185,
                        "dps": 59,
                        "alpha": 605,
                        "ehp": 26833,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Sleepless Defender",
                        "class": "B",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 920,
                        "distance": 19000,
                        "velocity": 115,
                        "dps": 362,
                        "alpha": 4469,
                        "ehp": 94000,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 2155,
                    "total_alpha": 25984,
                    "total_ehp": 659474
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Sleepless Safeguard",
                        "class": "B",
                        "scram": 1,
                        "web": 1,
                        "neut": -20,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1320,
                        "distance": 15000,
                        "velocity": 165,
                        "dps": 539,
                        "alpha": 6496,
                        "ehp": 164868,
                        "trigger": false
                    }
                ]
            }
        ]
    },
    "Forgotten Frontier Evacuation Center": {
        "title": "Forgotten Frontier Evacuation Center",
        "wormhole": "c4",
        "blue_loot_value": 91600000,
        "isk_per_ehp": 110,
        "trigger_on_hack": true,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 761,
                    "total_alpha": 10074,
                    "total_ehp": 196667
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Emergent Defender",
                        "class": "F",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2160,
                        "distance": 6500,
                        "velocity": 270,
                        "dps": 23,
                        "alpha": 161,
                        "ehp": 4200,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Preserver",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 65,
                        "sig": 400,
                        "speed": 1080,
                        "distance": 55000,
                        "velocity": 135,
                        "dps": 308,
                        "alpha": 4962,
                        "ehp": 85867,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Defender",
                        "class": "B",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 920,
                        "distance": 19000,
                        "velocity": 115,
                        "dps": 362,
                        "alpha": 4469,
                        "ehp": 94000,
                        "optional": true,
                        "trigger": false
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 852,
                    "total_alpha": 12342,
                    "total_ehp": 279067
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Awakened Defender",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1480,
                        "distance": 15000,
                        "velocity": 185,
                        "dps": 59,
                        "alpha": 605,
                        "ehp": 26833,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Sleepless Preserver",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 65,
                        "sig": 400,
                        "speed": 1080,
                        "distance": 55000,
                        "velocity": 135,
                        "dps": 308,
                        "alpha": 4962,
                        "ehp": 85867,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 1339,
                    "total_alpha": 18861,
                    "total_ehp": 359733
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Sleepless Defender",
                        "class": "B",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 920,
                        "distance": 19000,
                        "velocity": 115,
                        "dps": 362,
                        "alpha": 4469,
                        "ehp": 94000,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Sleepless Preserver",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 65,
                        "sig": 400,
                        "speed": 1080,
                        "distance": 55000,
                        "velocity": 135,
                        "dps": 308,
                        "alpha": 4962,
                        "ehp": 85867,
                        "trigger": false
                    }
                ]
            }
        ]
    },
    "Frontier Barracks": {
        "title": "Frontier Barracks",
        "wormhole": "c4",
        "blue_loot_value": 86700000,
        "isk_per_ehp": 147,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 747,
                    "total_alpha": 7918,
                    "total_ehp": 142267
                },
                "contents": [
                    {
                        "quantity": 1,
                        "type": "Sleepless Preserver",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 65,
                        "sig": 400,
                        "speed": 1080,
                        "distance": 55000,
                        "velocity": 135,
                        "dps": 308,
                        "alpha": 4962,
                        "ehp": 85867,
                        "trigger": true
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Upholder",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -10,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 800,
                        "distance": 65000,
                        "velocity": 100,
                        "dps": 439,
                        "alpha": 2957,
                        "ehp": 56400,
                        "trigger": false
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 1472,
                    "total_alpha": 9951,
                    "total_ehp": 202800
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Awakened Preserver",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 52,
                        "sig": 150,
                        "speed": 1240,
                        "distance": 45000,
                        "velocity": 155,
                        "dps": 77,
                        "alpha": 540,
                        "ehp": 16800,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Sleepless Upholder",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -10,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 800,
                        "distance": 65000,
                        "velocity": 100,
                        "dps": 439,
                        "alpha": 2957,
                        "ehp": 56400,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 1019,
                    "total_alpha": 12767,
                    "total_ehp": 244393
                },
                "contents": [
                    {
                        "quantity": 3,
                        "type": "Emergent Preserver",
                        "class": "F",
                        "scram": 1,
                        "web": 1,
                        "neut": -3,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2600,
                        "distance": 5000,
                        "velocity": 325,
                        "dps": 32,
                        "alpha": 228,
                        "ehp": 1820,
                        "trigger": false
                    },
                    {
                        "quantity": 4,
                        "type": "Awakened Preserver",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 52,
                        "sig": 150,
                        "speed": 1240,
                        "distance": 45000,
                        "velocity": 155,
                        "dps": 77,
                        "alpha": 540,
                        "ehp": 16800,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Sleepless Preserver",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 65,
                        "sig": 400,
                        "speed": 1080,
                        "distance": 55000,
                        "velocity": 135,
                        "dps": 308,
                        "alpha": 4962,
                        "ehp": 85867,
                        "trigger": false
                    }
                ]
            }
        ]
    },
    "Frontier Command Post": {
        "title": "Frontier Command Post",
        "wormhole": "c4",
        "blue_loot_value": 92300000,
        "isk_per_ehp": 115,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 581,
                    "total_alpha": 7014,
                    "total_ehp": 99913
                },
                "contents": [
                    {
                        "quantity": 5,
                        "type": "Wakeful Sentry Tower",
                        "class": "T",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 50,
                        "speed": 0,
                        "distance": 0,
                        "velocity": 0,
                        "dps": 73,
                        "alpha": 1092,
                        "ehp": 15167,
                        "trigger": false
                    },
                    {
                        "quantity": 4,
                        "type": "Emergent Defender",
                        "class": "F",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2160,
                        "distance": 6500,
                        "velocity": 270,
                        "dps": 23,
                        "alpha": 161,
                        "ehp": 4200,
                        "trigger": false
                    },
                    {
                        "quantity": 4,
                        "type": "Emergent Preserver",
                        "class": "F",
                        "scram": 1,
                        "web": 1,
                        "neut": -3,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2600,
                        "distance": 5000,
                        "velocity": 325,
                        "dps": 32,
                        "alpha": 228,
                        "ehp": 1820,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 1146,
                    "total_alpha": 13098,
                    "total_ehp": 360200
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Emergent Upholder",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": -3,
                        "rrep": 19,
                        "sig": 35,
                        "speed": 2400,
                        "distance": 5000,
                        "velocity": 300,
                        "dps": 17,
                        "alpha": 133,
                        "ehp": 2800,
                        "trigger": false
                    },
                    {
                        "quantity": 6,
                        "type": "Awakened Defender",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1480,
                        "distance": 15000,
                        "velocity": 185,
                        "dps": 59,
                        "alpha": 605,
                        "ehp": 26833,
                        "trigger": true
                    },
                    {
                        "quantity": 2,
                        "type": "Sleepless Defender",
                        "class": "B",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 920,
                        "distance": 19000,
                        "velocity": 115,
                        "dps": 362,
                        "alpha": 4469,
                        "ehp": 94000,
                        "trigger": false
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 1196,
                    "total_alpha": 17175,
                    "total_ehp": 344867
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Awakened Defender",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1480,
                        "distance": 15000,
                        "velocity": 185,
                        "dps": 59,
                        "alpha": 605,
                        "ehp": 26833,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Awakened Preserver",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 52,
                        "sig": 150,
                        "speed": 1240,
                        "distance": 45000,
                        "velocity": 155,
                        "dps": 77,
                        "alpha": 540,
                        "ehp": 16800,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Sleepless Preserver",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 65,
                        "sig": 400,
                        "speed": 1080,
                        "distance": 55000,
                        "velocity": 135,
                        "dps": 308,
                        "alpha": 4962,
                        "ehp": 85867,
                        "trigger": false
                    }
                ]
            }
        ]
    },
    "Integrated Terminus": {
        "title": "Integrated Terminus",
        "wormhole": "c4",
        "blue_loot_value": 56800000,
        "isk_per_ehp": 126,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 579,
                    "total_alpha": 7186,
                    "total_ehp": 176400
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Wakeful Sentry Tower",
                        "class": "T",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 50,
                        "speed": 0,
                        "distance": 0,
                        "velocity": 0,
                        "dps": 73,
                        "alpha": 1092,
                        "ehp": 15167,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Emergent Upholder",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": -3,
                        "rrep": 19,
                        "sig": 35,
                        "speed": 2400,
                        "distance": 5000,
                        "velocity": 300,
                        "dps": 17,
                        "alpha": 133,
                        "ehp": 2800,
                        "trigger": false
                    },
                    {
                        "quantity": 4,
                        "type": "Awakened Defender",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1480,
                        "distance": 15000,
                        "velocity": 185,
                        "dps": 59,
                        "alpha": 605,
                        "ehp": 26833,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 391,
                    "total_alpha": 3025,
                    "total_ehp": 86240
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Emergent Preserver",
                        "class": "F",
                        "scram": 1,
                        "web": 1,
                        "neut": -3,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2600,
                        "distance": 5000,
                        "velocity": 325,
                        "dps": 32,
                        "alpha": 228,
                        "ehp": 1820,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Awakened Preserver",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 52,
                        "sig": 150,
                        "speed": 1240,
                        "distance": 45000,
                        "velocity": 155,
                        "dps": 77,
                        "alpha": 540,
                        "ehp": 16800,
                        "trigger": false
                    },
                    {
                        "quantity": 4,
                        "type": "Awakened Upholder",
                        "class": "C",
                        "scram": 0,
                        "web": 1,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1728,
                        "distance": 30000,
                        "velocity": 216,
                        "dps": 43,
                        "alpha": 372,
                        "ehp": 12250,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 665,
                    "total_alpha": 7406,
                    "total_ehp": 187268
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Emergent Defender",
                        "class": "F",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2160,
                        "distance": 6500,
                        "velocity": 270,
                        "dps": 23,
                        "alpha": 161,
                        "ehp": 4200,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Emergent Upholder",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": -3,
                        "rrep": 19,
                        "sig": 35,
                        "speed": 2400,
                        "distance": 5000,
                        "velocity": 300,
                        "dps": 17,
                        "alpha": 133,
                        "ehp": 2800,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Safeguard",
                        "class": "B",
                        "scram": 1,
                        "web": 1,
                        "neut": -20,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1320,
                        "distance": 15000,
                        "velocity": 165,
                        "dps": 539,
                        "alpha": 6496,
                        "ehp": 164868,
                        "trigger": false
                    }
                ]
            }
        ]
    },
    "Sleeper Information Sanctum": {
        "title": "Sleeper Information Sanctum",
        "wormhole": "c4",
        "blue_loot_value": 86100000,
        "isk_per_ehp": 120,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 738,
                    "total_alpha": 10934,
                    "total_ehp": 201833
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Awakened Upholder",
                        "class": "C",
                        "scram": 0,
                        "web": 1,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1728,
                        "distance": 30000,
                        "velocity": 216,
                        "dps": 43,
                        "alpha": 372,
                        "ehp": 12250,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Sleepless Preserver",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 65,
                        "sig": 400,
                        "speed": 1080,
                        "distance": 55000,
                        "velocity": 135,
                        "dps": 308,
                        "alpha": 4962,
                        "ehp": 85867,
                        "trigger": true
                    },
                    {
                        "quantity": 2,
                        "type": "Emergent Upholder",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": -3,
                        "rrep": 19,
                        "sig": 35,
                        "speed": 2400,
                        "distance": 5000,
                        "velocity": 300,
                        "dps": 17,
                        "alpha": 133,
                        "ehp": 2800,
                        "optional": true,
                        "trigger": false
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 1623,
                    "total_alpha": 19902,
                    "total_ehp": 446868
                },
                "contents": [
                    {
                        "quantity": 3,
                        "type": "Sleepless Defender",
                        "class": "B",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 920,
                        "distance": 19000,
                        "velocity": 115,
                        "dps": 362,
                        "alpha": 4469,
                        "ehp": 94000,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Safeguard",
                        "class": "B",
                        "scram": 1,
                        "web": 1,
                        "neut": -20,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1320,
                        "distance": 15000,
                        "velocity": 165,
                        "dps": 539,
                        "alpha": 6496,
                        "ehp": 164868,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 356,
                    "total_alpha": 2680,
                    "total_ehp": 70140
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Emergent Preserver",
                        "class": "F",
                        "scram": 1,
                        "web": 1,
                        "neut": -3,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2600,
                        "distance": 5000,
                        "velocity": 325,
                        "dps": 32,
                        "alpha": 228,
                        "ehp": 1820,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Emergent Upholder",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": -3,
                        "rrep": 19,
                        "sig": 35,
                        "speed": 2400,
                        "distance": 5000,
                        "velocity": 300,
                        "dps": 17,
                        "alpha": 133,
                        "ehp": 2800,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Awakened Preserver",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 52,
                        "sig": 150,
                        "speed": 1240,
                        "distance": 45000,
                        "velocity": 155,
                        "dps": 77,
                        "alpha": 540,
                        "ehp": 16800,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Awakened Upholder",
                        "class": "C",
                        "scram": 0,
                        "web": 1,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1728,
                        "distance": 30000,
                        "velocity": 216,
                        "dps": 43,
                        "alpha": 372,
                        "ehp": 12250,
                        "trigger": false
                    }
                ]
            }
        ]
    },
    "Unsecured Frontier Digital Nexus": {
        "title": "Unsecured Frontier Digital Nexus",
        "wormhole": "c4",
        "blue_loot_value": 130100000,
        "isk_per_ehp": 93,
        "trigger_on_hack": true,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 984,
                    "total_alpha": 10769,
                    "total_ehp": 342668
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Emergent Defender",
                        "class": "F",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2160,
                        "distance": 6500,
                        "velocity": 270,
                        "dps": 23,
                        "alpha": 161,
                        "ehp": 4200,
                        "trigger": false
                    },
                    {
                        "quantity": 6,
                        "type": "Awakened Defender",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1480,
                        "distance": 15000,
                        "velocity": 185,
                        "dps": 59,
                        "alpha": 605,
                        "ehp": 26833,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Safeguard",
                        "class": "B",
                        "scram": 1,
                        "web": 1,
                        "neut": -20,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1320,
                        "distance": 15000,
                        "velocity": 165,
                        "dps": 539,
                        "alpha": 6496,
                        "ehp": 164868,
                        "optional": true,
                        "trigger": false
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 1446,
                    "total_alpha": 16736,
                    "total_ehp": 396613
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Emergent Preserver",
                        "class": "F",
                        "scram": 1,
                        "web": 1,
                        "neut": -3,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2600,
                        "distance": 5000,
                        "velocity": 325,
                        "dps": 32,
                        "alpha": 228,
                        "ehp": 1820,
                        "trigger": false
                    },
                    {
                        "quantity": 4,
                        "type": "Awakened Defender",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1480,
                        "distance": 15000,
                        "velocity": 185,
                        "dps": 59,
                        "alpha": 605,
                        "ehp": 26833,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Sleepless Defender",
                        "class": "B",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 920,
                        "distance": 19000,
                        "velocity": 115,
                        "dps": 362,
                        "alpha": 4469,
                        "ehp": 94000,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 2155,
                    "total_alpha": 25984,
                    "total_ehp": 659474
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Sleepless Safeguard",
                        "class": "B",
                        "scram": 1,
                        "web": 1,
                        "neut": -20,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1320,
                        "distance": 15000,
                        "velocity": 165,
                        "dps": 539,
                        "alpha": 6496,
                        "ehp": 164868,
                        "trigger": false
                    }
                ]
            },
        ]
    },
    "Unsecured Frontier Trinary Hub": {
        "title": "Unsecured Frontier Trinary Hub",
        "wormhole": "c4",
        "blue_loot_value": 91600000,
        "isk_per_ehp": 110,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 761,
                    "total_alpha": 10074,
                    "total_ehp": 196667
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Emergent Defender",
                        "class": "F",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2160,
                        "distance": 6500,
                        "velocity": 270,
                        "dps": 23,
                        "alpha": 161,
                        "ehp": 4200,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Preserver",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 65,
                        "sig": 400,
                        "speed": 1080,
                        "distance": 55000,
                        "velocity": 135,
                        "dps": 308,
                        "alpha": 4962,
                        "ehp": 85867,
                        "trigger": true
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Defender",
                        "class": "B",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 920,
                        "distance": 19000,
                        "velocity": 115,
                        "dps": 362,
                        "alpha": 4469,
                        "ehp": 94000,
                        "optional": true,
                        "trigger": false
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 852,
                    "total_alpha": 12342,
                    "total_ehp": 279067
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Awakened Defender",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1480,
                        "distance": 15000,
                        "velocity": 185,
                        "dps": 59,
                        "alpha": 605,
                        "ehp": 26833,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Sleepless Preserver",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 65,
                        "sig": 400,
                        "speed": 1080,
                        "distance": 55000,
                        "velocity": 135,
                        "dps": 308,
                        "alpha": 4962,
                        "ehp": 85867,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 1339,
                    "total_alpha": 18861,
                    "total_ehp": 359733
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Sleepless Defender",
                        "class": "B",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 920,
                        "distance": 19000,
                        "velocity": 115,
                        "dps": 362,
                        "alpha": 4469,
                        "ehp": 94000,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Sleepless Preserver",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 65,
                        "sig": 400,
                        "speed": 1080,
                        "distance": 55000,
                        "velocity": 135,
                        "dps": 308,
                        "alpha": 4962,
                        "ehp": 85867,
                        "trigger": false
                    }
                ]
            }
        ]
    },

    // C5
    "Core Garrison": {
        "title": "Core Garrison",
        "wormhole": "c5",
        "blue_loot_value": 253400000,
        "isk_per_ehp": 143,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 807,
                    "total_alpha": 9135,
                    "total_ehp": 315333
                },
                "contents": [
                    {
                        "quantity": 3,
                        "type": "Restless Sentry Tower",
                        "class": "T",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 50,
                        "speed": 0,
                        "distance": 0,
                        "velocity": 0,
                        "dps": 94,
                        "alpha": 1404,
                        "ehp": 23833,
                        "trigger": false
                    },
                    {
                        "quantity": 5,
                        "type": "Emergent Sentinel",
                        "class": "F",
                        "scram": 1,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2610,
                        "distance": 6500,
                        "velocity": 290,
                        "dps": 29,
                        "alpha": 207,
                        "ehp": 6600,
                        "trigger": false
                    },
                    {
                        "quantity": 5,
                        "type": "Awakened Sentinel",
                        "class": "C",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1800,
                        "distance": 15000,
                        "velocity": 200,
                        "dps": 76,
                        "alpha": 778,
                        "ehp": 42167,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 1528,
                    "total_alpha": 18263,
                    "total_ehp": 469543
                },
                "contents": [
                    {
                        "quantity": 6,
                        "type": "Emergent Keeper",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": -3,
                        "rrep": 26,
                        "sig": 35,
                        "speed": 2880,
                        "distance": 5000,
                        "velocity": 320,
                        "dps": 22,
                        "alpha": 171,
                        "ehp": 4400,
                        "trigger": true
                    },
                    {
                        "quantity": 3,
                        "type": "Sleepless Sentinel",
                        "class": "B",
                        "scram": 1,
                        "web": 1,
                        "neut": -18,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1125,
                        "distance": 19000,
                        "velocity": 125,
                        "dps": 465,
                        "alpha": 5746,
                        "ehp": 147714,
                        "trigger": false
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 1941,
                    "total_alpha": 22561,
                    "total_ehp": 711726
                },
                "contents": [
                    {
                        "quantity": 5,
                        "type": "Awakened Sentinel",
                        "class": "C",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1800,
                        "distance": 15000,
                        "velocity": 200,
                        "dps": 76,
                        "alpha": 778,
                        "ehp": 42167,
                        "trigger": true,
                        "DTA_trigger": true
                    },
                    {
                        "quantity": 3,
                        "type": "Awakened Keeper",
                        "class": "C",
                        "scram": 1,
                        "web": 1,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 2115,
                        "distance": 30000,
                        "velocity": 235,
                        "dps": 56,
                        "alpha": 479,
                        "ehp": 19250,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Sleepless Sentinel",
                        "class": "B",
                        "scram": 1,
                        "web": 1,
                        "neut": -18,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1125,
                        "distance": 19000,
                        "velocity": 125,
                        "dps": 465,
                        "alpha": 5746,
                        "ehp": 147714,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 4,
                "details": {
                    "total_dps": 1403,
                    "total_alpha": 10036,
                    "total_ehp": 270170
                },
                "contents": [
                    {
                        "quantity": 3,
                        "type": "Emergent Warden",
                        "class": "F",
                        "scram": 1,
                        "web": 1,
                        "neut": -3,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 3150,
                        "distance": 5000,
                        "velocity": 350,
                        "dps": 41,
                        "alpha": 293,
                        "ehp": 2860,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Awakened Sentinel",
                        "class": "C",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1800,
                        "distance": 15000,
                        "velocity": 200,
                        "dps": 76,
                        "alpha": 778,
                        "ehp": 42167,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Sleepless Keeper",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -12,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 945,
                        "distance": 65000,
                        "velocity": 105,
                        "dps": 565,
                        "alpha": 3802,
                        "ehp": 88629,
                        "trigger": false
                    }
                ]
            },
        ]
    },
    "Core Stronghold": {
        "title": "Core Stronghold",
        "wormhole": "c5",
        "blue_loot_value": 234900000,
        "isk_per_ehp": 145,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 679,
                    "total_alpha": 9252,
                    "total_ehp": 169400
                },
                "contents": [
                    {
                        "quantity": 6,
                        "type": "Restless Sentry Tower",
                        "class": "T",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 50,
                        "speed": 0,
                        "distance": 0,
                        "velocity": 0,
                        "dps": 94,
                        "alpha": 1404,
                        "ehp": 23833,
                        "trigger": false
                    },
                    {
                        "quantity": 4,
                        "type": "Emergent Sentinel",
                        "class": "F",
                        "scram": 1,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2610,
                        "distance": 6500,
                        "velocity": 290,
                        "dps": 29,
                        "alpha": 207,
                        "ehp": 6600,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 1922,
                    "total_alpha": 20362,
                    "total_ehp": 447124
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Sleepless Keeper",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -12,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 945,
                        "distance": 65000,
                        "velocity": 105,
                        "dps": 565,
                        "alpha": 3802,
                        "ehp": 88629,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Sleepless Warden",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 73,
                        "sig": 400,
                        "speed": 1305,
                        "distance": 55000,
                        "velocity": 145,
                        "dps": 396,
                        "alpha": 6379,
                        "ehp": 134933,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 774,
                    "total_alpha": 7198,
                    "total_ehp": 312327
                },
                "contents": [
                    {
                        "quantity": 6,
                        "type": "Emergent Warden",
                        "class": "F",
                        "scram": 1,
                        "web": 1,
                        "neut": -3,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 3150,
                        "distance": 5000,
                        "velocity": 350,
                        "dps": 41,
                        "alpha": 293,
                        "ehp": 2860,
                        "trigger": false
                    },
                    {
                        "quantity": 7,
                        "type": "Awakened Sentinel",
                        "class": "C",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1800,
                        "distance": 15000,
                        "velocity": 200,
                        "dps": 76,
                        "alpha": 778,
                        "ehp": 42167,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 4,
                "details": {
                    "total_dps": 2714,
                    "total_alpha": 29520,
                    "total_ehp": 687657
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Awakened Warden",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 58,
                        "sig": 150,
                        "speed": 1485,
                        "distance": 45000,
                        "velocity": 165,
                        "dps": 99,
                        "alpha": 695,
                        "ehp": 26400,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Sleepless Keeper",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -12,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 945,
                        "distance": 65000,
                        "velocity": 105,
                        "dps": 565,
                        "alpha": 3802,
                        "ehp": 88629,
                        "trigger": true,
                        "DTA_trigger": true
                    },
                    {
                        "quantity": 3,
                        "type": "Sleepless Warden",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 73,
                        "sig": 400,
                        "speed": 1305,
                        "distance": 55000,
                        "velocity": 145,
                        "dps": 396,
                        "alpha": 6379,
                        "ehp": 134933,
                        "trigger": false
                    }
                ]
            }
        ]
    },
    "Forgotten Core Data Field": {
        "title": "Forgotten Core Data Field",
        "wormhole": "c5",
        "blue_loot_value": 279000000,
        "isk_per_ehp": 198,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 427,
                    "total_alpha": 3429,
                    "total_ehp": 129250
                },
                "contents": [
                    {
                        "quantity": 5,
                        "type": "Emergent Sentinel",
                        "class": "F",
                        "scram": 1,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2610,
                        "distance": 6500,
                        "velocity": 290,
                        "dps": 29,
                        "alpha": 207,
                        "ehp": 6600,
                        "trigger": false
                    },
                    {
                        "quantity": 5,
                        "type": "Awakened Keeper",
                        "class": "C",
                        "scram": 1,
                        "web": 1,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 2115,
                        "distance": 30000,
                        "velocity": 235,
                        "dps": 56,
                        "alpha": 479,
                        "ehp": 19250,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 868,
                    "total_alpha": 6930,
                    "total_ehp": 250323
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Emergent Keeper",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": -3,
                        "rrep": 26,
                        "sig": 35,
                        "speed": 2880,
                        "distance": 5000,
                        "velocity": 320,
                        "dps": 22,
                        "alpha": 171,
                        "ehp": 4400,
                        "trigger": false
                    },
                    {
                        "quantity": 4,
                        "type": "Emergent Warden",
                        "class": "F",
                        "scram": 1,
                        "web": 1,
                        "neut": -3,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 3150,
                        "distance": 5000,
                        "velocity": 350,
                        "dps": 41,
                        "alpha": 293,
                        "ehp": 2860,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Awakened Keeper",
                        "class": "C",
                        "scram": 1,
                        "web": 1,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 2115,
                        "distance": 30000,
                        "velocity": 235,
                        "dps": 56,
                        "alpha": 479,
                        "ehp": 19250,
                        "trigger": true
                    },
                    {
                        "quantity": 2,
                        "type": "Awakened Sentinel",
                        "class": "C",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1800,
                        "distance": 15000,
                        "velocity": 200,
                        "dps": 76,
                        "alpha": 778,
                        "ehp": 42167,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Awakened Warden",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 58,
                        "sig": 150,
                        "speed": 1485,
                        "distance": 45000,
                        "velocity": 165,
                        "dps": 99,
                        "alpha": 695,
                        "ehp": 26400,
                        "trigger": false
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 2302,
                    "total_alpha": 20849,
                    "total_ehp": 489846
                },
                "contents": [
                    {
                        "quantity": 6,
                        "type": "Emergent Warden",
                        "class": "F",
                        "scram": 1,
                        "web": 1,
                        "neut": -3,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 3150,
                        "distance": 5000,
                        "velocity": 350,
                        "dps": 41,
                        "alpha": 293,
                        "ehp": 2860,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Sleepless Keeper",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -12,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 945,
                        "distance": 65000,
                        "velocity": 105,
                        "dps": 565,
                        "alpha": 3802,
                        "ehp": 88629,
                        "trigger": true
                    },
                    {
                        "quantity": 2,
                        "type": "Sleepless Sentinel",
                        "class": "B",
                        "scram": 1,
                        "web": 1,
                        "neut": -18,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1125,
                        "distance": 19000,
                        "velocity": 125,
                        "dps": 465,
                        "alpha": 5746,
                        "ehp": 147714,
                        "trigger": false
                    }
                ]
            },
            {
                "wave_number": 4,
                "details": {
                    "total_dps": 2232,
                    "total_alpha": 22709,
                    "total_ehp": 538424
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Awakened Keeper",
                        "class": "C",
                        "scram": 1,
                        "web": 1,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 2115,
                        "distance": 30000,
                        "velocity": 235,
                        "dps": 56,
                        "alpha": 479,
                        "ehp": 19250,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Awakened Warden",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 58,
                        "sig": 150,
                        "speed": 1485,
                        "distance": 45000,
                        "velocity": 165,
                        "dps": 99,
                        "alpha": 695,
                        "ehp": 26400,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Sleepless Keeper",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -12,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 945,
                        "distance": 65000,
                        "velocity": 105,
                        "dps": 565,
                        "alpha": 3802,
                        "ehp": 88629,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Sleepless Warden",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 73,
                        "sig": 400,
                        "speed": 1305,
                        "distance": 55000,
                        "velocity": 145,
                        "dps": 396,
                        "alpha": 6379,
                        "ehp": 134933,
                        "trigger": false
                    }
                ]
            }
        ]
    },
    "Forgotten Core Information Pen": {
        "title": "Forgotten Core Information Pen",
        "wormhole": "c5",
        "blue_loot_value": 332900000,
        "isk_per_ehp": 206,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 1694,
                    "total_alpha": 11405,
                    "total_ehp": 265886
                },
                "contents": [
                    {
                        "quantity": 3,
                        "type": "Sleepless Keeper",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -12,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 945,
                        "distance": 65000,
                        "velocity": 105,
                        "dps": 565,
                        "alpha": 3802,
                        "ehp": 88629,
                        "trigger": true
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Sentinel",
                        "class": "B",
                        "scram": 1,
                        "web": 1,
                        "neut": -18,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1125,
                        "distance": 19000,
                        "velocity": 125,
                        "dps": 465,
                        "alpha": 5746,
                        "ehp": 147714,
                        "optional": true,
                        "trigger": false
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 1615,
                    "total_alpha": 11066,
                    "total_ehp": 300457
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Emergent Keeper",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": -3,
                        "rrep": 26,
                        "sig": 35,
                        "speed": 2880,
                        "distance": 5000,
                        "velocity": 320,
                        "dps": 22,
                        "alpha": 171,
                        "ehp": 4400,
                        "trigger": false
                    },
                    {
                        "quantity": 4,
                        "type": "Awakened Warden",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 58,
                        "sig": 150,
                        "speed": 1485,
                        "distance": 45000,
                        "velocity": 165,
                        "dps": 99,
                        "alpha": 695,
                        "ehp": 26400,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Sleepless Keeper",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -12,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 945,
                        "distance": 65000,
                        "velocity": 105,
                        "dps": 565,
                        "alpha": 3802,
                        "ehp": 88629,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 2507,
                    "total_alpha": 17907,
                    "total_ehp": 519766
                },
                "contents": [
                    {
                        "quantity": 3,
                        "type": "Emergent Keeper",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": -3,
                        "rrep": 26,
                        "sig": 35,
                        "speed": 2880,
                        "distance": 5000,
                        "velocity": 320,
                        "dps": 22,
                        "alpha": 171,
                        "ehp": 4400,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Emergent Warden",
                        "class": "F",
                        "scram": 1,
                        "web": 1,
                        "neut": -3,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 3150,
                        "distance": 5000,
                        "velocity": 350,
                        "dps": 41,
                        "alpha": 293,
                        "ehp": 2860,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Awakened Sentinel",
                        "class": "C",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1800,
                        "distance": 15000,
                        "velocity": 200,
                        "dps": 76,
                        "alpha": 778,
                        "ehp": 42167,
                        "trigger": false
                    },
                    {
                        "quantity": 4,
                        "type": "Awakened Warden",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 58,
                        "sig": 150,
                        "speed": 1485,
                        "distance": 45000,
                        "velocity": 165,
                        "dps": 99,
                        "alpha": 695,
                        "ehp": 26400,
                        "trigger": true
                    },
                    {
                        "quantity": 3,
                        "type": "Sleepless Keeper",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -12,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 945,
                        "distance": 65000,
                        "velocity": 105,
                        "dps": 565,
                        "alpha": 3802,
                        "ehp": 88629,
                        "trigger": false
                    }
                ]
            },
            {
                "wave_number": 4,
                "details": {
                    "total_dps": 3210,
                    "total_alpha": 22093,
                    "total_ehp": 531583
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Emergent Warden",
                        "class": "F",
                        "scram": 1,
                        "web": 1,
                        "neut": -3,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 3150,
                        "distance": 5000,
                        "velocity": 350,
                        "dps": 41,
                        "alpha": 293,
                        "ehp": 2860,
                        "trigger": false
                    },
                    {
                        "quantity": 4,
                        "type": "Awakened Keeper",
                        "class": "C",
                        "scram": 1,
                        "web": 1,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 2115,
                        "distance": 30000,
                        "velocity": 235,
                        "dps": 56,
                        "alpha": 479,
                        "ehp": 19250,
                        "trigger": false
                    },
                    {
                        "quantity": 5,
                        "type": "Sleepless Keeper",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -12,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 945,
                        "distance": 65000,
                        "velocity": 105,
                        "dps": 565,
                        "alpha": 3802,
                        "ehp": 88629,
                        "trigger": false
                    }
                ]
            }
        ]
    },
    "Oruze Osobnyk": {
        "title": "Oruze Osobnyk",
        "wormhole": "c5",
        "blue_loot_value": 164700000,
        "isk_per_ehp": 140,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 2077,
                    "total_alpha": 21866,
                    "total_ehp": 558171
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Emergent Sentinel",
                        "class": "F",
                        "scram": 1,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2610,
                        "distance": 6500,
                        "velocity": 290,
                        "dps": 29,
                        "alpha": 207,
                        "ehp": 6600,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Keeper",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -12,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 945,
                        "distance": 65000,
                        "velocity": 105,
                        "dps": 565,
                        "alpha": 3802,
                        "ehp": 88629,
                        "optional": true,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Sleepless Sentinel",
                        "class": "B",
                        "scram": 1,
                        "web": 1,
                        "neut": -18,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1125,
                        "distance": 19000,
                        "velocity": 125,
                        "dps": 465,
                        "alpha": 5746,
                        "ehp": 147714,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 1148,
                    "total_alpha": 13018,
                    "total_ehp": 512079
                },
                "contents": [
                    {
                        "quantity": 6,
                        "type": "Awakened Sentinel",
                        "class": "C",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1800,
                        "distance": 15000,
                        "velocity": 200,
                        "dps": 76,
                        "alpha": 778,
                        "ehp": 42167,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Guardian",
                        "class": "B",
                        "scram": 2,
                        "web": 1,
                        "neut": -36,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1575,
                        "distance": 35000,
                        "velocity": 175,
                        "dps": 693,
                        "alpha": 8352,
                        "ehp": 259079,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 467,
                    "total_alpha": 3353,
                    "total_ehp": 102520
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Emergent Keeper",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": -3,
                        "rrep": 26,
                        "sig": 35,
                        "speed": 2880,
                        "distance": 5000,
                        "velocity": 320,
                        "dps": 22,
                        "alpha": 171,
                        "ehp": 4400,
                        "DTA_trigger": true,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Emergent Warden",
                        "class": "F",
                        "scram": 1,
                        "web": 1,
                        "neut": -3,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 3150,
                        "distance": 5000,
                        "velocity": 350,
                        "dps": 41,
                        "alpha": 293,
                        "ehp": 2860,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Awakened Warden",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 58,
                        "sig": 150,
                        "speed": 1485,
                        "distance": 45000,
                        "velocity": 165,
                        "dps": 99,
                        "alpha": 695,
                        "ehp": 26400,
                        "trigger": true
                    },
                    {
                        "quantity": 3,
                        "type": "Sleepless Keeper",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -12,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 945,
                        "distance": 65000,
                        "velocity": 105,
                        "dps": 565,
                        "alpha": 3802,
                        "ehp": 88629,
                        "trigger": false
                    }
                ]
            }
        ]
    },
    "Quarantine Area": {
        "title": "Quarantine Area",
        "wormhole": "c5",
        "blue_loot_value": 146900000,
        "isk_per_ehp": 141,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 1019,
                    "total_alpha": 12807,
                    "total_ehp": 285448
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Restless Sentry Tower",
                        "class": "T",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 50,
                        "speed": 0,
                        "distance": 0,
                        "velocity": 0,
                        "dps": 94,
                        "alpha": 1404,
                        "ehp": 23833,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Emergent Escort",
                        "class": "F",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2100,
                        "distance": 5000,
                        "velocity": 300,
                        "dps": 23,
                        "alpha": 163,
                        "ehp": 1300,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Awakened Keeper",
                        "class": "C",
                        "scram": 1,
                        "web": 1,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 2115,
                        "distance": 30000,
                        "velocity": 235,
                        "dps": 56,
                        "alpha": 479,
                        "ehp": 19250,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Sentinel",
                        "class": "B",
                        "scram": 1,
                        "web": 1,
                        "neut": -18,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1125,
                        "distance": 19000,
                        "velocity": 125,
                        "dps": 465,
                        "alpha": 5746,
                        "ehp": 147714,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 1233,
                    "total_alpha": 14602,
                    "total_ehp": 464095
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Awakened Sentinel",
                        "class": "C",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1800,
                        "distance": 15000,
                        "velocity": 200,
                        "dps": 76,
                        "alpha": 778,
                        "ehp": 42167,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Sleepless Sentinel",
                        "class": "B",
                        "scram": 1,
                        "web": 1,
                        "neut": -18,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1125,
                        "distance": 19000,
                        "velocity": 125,
                        "dps": 465,
                        "alpha": 5746,
                        "ehp": 147714,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 1574,
                    "total_alpha": 10723,
                    "total_ehp": 289457
                },
                "contents": [
                    {
                        "quantity": 5,
                        "type": "Emergent Sentinel",
                        "class": "F",
                        "scram": 1,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2610,
                        "distance": 6500,
                        "velocity": 290,
                        "dps": 29,
                        "alpha": 207,
                        "ehp": 6600,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Awakened Warden",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 58,
                        "sig": 150,
                        "speed": 1485,
                        "distance": 45000,
                        "velocity": 165,
                        "dps": 99,
                        "alpha": 695,
                        "ehp": 26400,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Sleepless Keeper",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -12,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 945,
                        "distance": 65000,
                        "velocity": 105,
                        "dps": 565,
                        "alpha": 3802,
                        "ehp": 88629,
                        "DTA_trigger": true,
                        "trigger": false
                    }
                ]
            }
        ]
    },
    "Unsecured Frontier Enclave Relay": {
        "title": "Unsecured Frontier Enclave Relay",
        "wormhole": "c5",
        "blue_loot_value": 344900000,
        "isk_per_ehp": 180,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 2159,
                    "total_alpha": 17150,
                    "total_ehp": 413600
                },
                "contents": [
                    {
                        "quantity": 3,
                        "type": "Sleepless Keeper",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -12,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 945,
                        "distance": 65000,
                        "velocity": 105,
                        "dps": 565,
                        "alpha": 3802,
                        "ehp": 88629,
                        "trigger": true
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Sentinel",
                        "class": "B",
                        "scram": 1,
                        "web": 1,
                        "neut": -18,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1125,
                        "distance": 19000,
                        "velocity": 125,
                        "dps": 465,
                        "alpha": 5746,
                        "ehp": 147714,
                        "optional": true,
                        "trigger": false
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 1637,
                    "total_alpha": 11237,
                    "total_ehp": 304857
                },
                "contents": [
                    {
                        "quantity": 5,
                        "type": "Emergent Keeper",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": -3,
                        "rrep": 26,
                        "sig": 35,
                        "speed": 2880,
                        "distance": 5000,
                        "velocity": 320,
                        "dps": 22,
                        "alpha": 171,
                        "ehp": 4400,
                        "trigger": false
                    },
                    {
                        "quantity": 4,
                        "type": "Awakened Warden",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 58,
                        "sig": 150,
                        "speed": 1485,
                        "distance": 45000,
                        "velocity": 165,
                        "dps": 99,
                        "alpha": 695,
                        "ehp": 26400,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Sleepless Keeper",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -12,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 945,
                        "distance": 65000,
                        "velocity": 105,
                        "dps": 565,
                        "alpha": 3802,
                        "ehp": 88629,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 1982,
                    "total_alpha": 14398,
                    "total_ehp": 433997
                },
                "contents": [
                    {
                        "quantity": 3,
                        "type": "Emergent Keeper",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": -3,
                        "rrep": 26,
                        "sig": 35,
                        "speed": 2880,
                        "distance": 5000,
                        "velocity": 320,
                        "dps": 22,
                        "alpha": 171,
                        "ehp": 4400,
                        "trigger": false
                    },
                    {
                        "quantity": 4,
                        "type": "Emergent Warden",
                        "class": "F",
                        "scram": 1,
                        "web": 1,
                        "neut": -3,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 3150,
                        "distance": 5000,
                        "velocity": 350,
                        "dps": 41,
                        "alpha": 293,
                        "ehp": 2860,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Awakened Sentinel",
                        "class": "C",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1800,
                        "distance": 15000,
                        "velocity": 200,
                        "dps": 76,
                        "alpha": 778,
                        "ehp": 42167,
                        "trigger": false
                    },
                    {
                        "quantity": 4,
                        "type": "Awakened Warden",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 58,
                        "sig": 150,
                        "speed": 1485,
                        "distance": 45000,
                        "velocity": 165,
                        "dps": 99,
                        "alpha": 695,
                        "ehp": 26400,
                        "trigger": true
                    },
                    {
                        "quantity": 2,
                        "type": "Sleepless Keeper",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -12,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 945,
                        "distance": 65000,
                        "velocity": 105,
                        "dps": 565,
                        "alpha": 3802,
                        "ehp": 88629,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 4,
                "details": {
                    "total_dps": 2399,
                    "total_alpha": 34858,
                    "total_ehp": 762447
                },
                "contents": [
                    {
                        "quantity": 3,
                        "type": "Emergent Warden",
                        "class": "F",
                        "scram": 1,
                        "web": 1,
                        "neut": -3,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 3150,
                        "distance": 5000,
                        "velocity": 350,
                        "dps": 41,
                        "alpha": 293,
                        "ehp": 2860,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Awakened Warden",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 58,
                        "sig": 150,
                        "speed": 1485,
                        "distance": 45000,
                        "velocity": 165,
                        "dps": 99,
                        "alpha": 695,
                        "ehp": 26400,
                        "trigger": false
                    },
                    {
                        "quantity": 5,
                        "type": "Sleepless Warden",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 73,
                        "sig": 400,
                        "speed": 1305,
                        "distance": 55000,
                        "velocity": 145,
                        "dps": 396,
                        "alpha": 6379,
                        "ehp": 134933,
                        "trigger": false
                    }
                ]
            }
        ]
    },
    "Unsecured Frontier Server Bank": {
        "title": "Unsecured Frontier Server Bank",
        "wormhole": "c5",
        "blue_loot_value": 272100000,
        "isk_per_ehp": 206,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 427,
                    "total_alpha": 3429,
                    "total_ehp": 129250
                },
                "contents": [
                    {
                        "quantity": 5,
                        "type": "Emergent Sentinel",
                        "class": "F",
                        "scram": 1,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2610,
                        "distance": 6500,
                        "velocity": 290,
                        "dps": 29,
                        "alpha": 207,
                        "ehp": 6600,
                        "trigger": false
                    },
                    {
                        "quantity": 5,
                        "type": "Awakened Keeper",
                        "class": "C",
                        "scram": 1,
                        "web": 1,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 2115,
                        "distance": 30000,
                        "velocity": 235,
                        "dps": 56,
                        "alpha": 479,
                        "ehp": 19250,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 960,
                    "total_alpha": 7640,
                    "total_ehp": 288713
                },
                "contents": [
                    {
                        "quantity": 3,
                        "type": "Emergent Keeper",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": -3,
                        "rrep": 26,
                        "sig": 35,
                        "speed": 2880,
                        "distance": 5000,
                        "velocity": 320,
                        "dps": 22,
                        "alpha": 171,
                        "ehp": 4400,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Emergent Warden",
                        "class": "F",
                        "scram": 1,
                        "web": 1,
                        "neut": -3,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 3150,
                        "distance": 5000,
                        "velocity": 350,
                        "dps": 41,
                        "alpha": 293,
                        "ehp": 2860,
                        "trigger": false
                    },
                    {
                        "quantity": 4,
                        "type": "Awakened Keeper",
                        "class": "C",
                        "scram": 1,
                        "web": 1,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 2115,
                        "distance": 30000,
                        "velocity": 235,
                        "dps": 56,
                        "alpha": 479,
                        "ehp": 19250,
                        "trigger": true
                    },
                    {
                        "quantity": 2,
                        "type": "Awakened Sentinel",
                        "class": "C",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1800,
                        "distance": 15000,
                        "velocity": 200,
                        "dps": 76,
                        "alpha": 778,
                        "ehp": 42167,
                        "trigger": false
                    },
                    {
                        "quantity": 4,
                        "type": "Awakened Warden",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 58,
                        "sig": 150,
                        "speed": 1485,
                        "distance": 45000,
                        "velocity": 165,
                        "dps": 99,
                        "alpha": 695,
                        "ehp": 26400,
                        "trigger": false
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 1797,
                    "total_alpha": 14811,
                    "total_ehp": 339271
                },
                "contents": [
                    {
                        "quantity": 5,
                        "type": "Emergent Warden",
                        "class": "F",
                        "scram": 1,
                        "web": 1,
                        "neut": -3,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 3150,
                        "distance": 5000,
                        "velocity": 350,
                        "dps": 41,
                        "alpha": 293,
                        "ehp": 2860,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Sleepless Keeper",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -12,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 945,
                        "distance": 65000,
                        "velocity": 105,
                        "dps": 565,
                        "alpha": 3802,
                        "ehp": 88629,
                        "trigger": true
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Sentinel",
                        "class": "B",
                        "scram": 1,
                        "web": 1,
                        "neut": -18,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1125,
                        "distance": 19000,
                        "velocity": 125,
                        "dps": 465,
                        "alpha": 5746,
                        "ehp": 147714,
                        "trigger": false
                    }
                ]
            },
            {
                "wave_number": 4,
                "details": {
                    "total_dps": 2331,
                    "total_alpha": 23404,
                    "total_ehp": 564824
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Awakened Keeper",
                        "class": "C",
                        "scram": 1,
                        "web": 1,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 2115,
                        "distance": 30000,
                        "velocity": 235,
                        "dps": 56,
                        "alpha": 479,
                        "ehp": 19250,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Awakened Warden",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 58,
                        "sig": 150,
                        "speed": 1485,
                        "distance": 45000,
                        "velocity": 165,
                        "dps": 99,
                        "alpha": 695,
                        "ehp": 26400,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Sleepless Keeper",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -12,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 945,
                        "distance": 65000,
                        "velocity": 105,
                        "dps": 565,
                        "alpha": 3802,
                        "ehp": 88629,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Sleepless Warden",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 73,
                        "sig": 400,
                        "speed": 1305,
                        "distance": 55000,
                        "velocity": 145,
                        "dps": 396,
                        "alpha": 6379,
                        "ehp": 134933,
                        "trigger": false
                    }
                ]
            }
        ]
    },

    // C6
    "Core Bastion": {
        "title": "Core Bastion",
        "wormhole": "c6",
        "blue_loot_value": 445600000,
        "isk_per_ehp": 124,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 2058,
                    "total_alpha": 22691,
                    "total_ehp": 663379
                },
                "contents": [
                    {
                        "quantity": 3,
                        "type": "Restless Sentry Tower",
                        "class": "T",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 50,
                        "speed": 0,
                        "distance": 0,
                        "velocity": 0,
                        "dps": 94,
                        "alpha": 1404,
                        "ehp": 23833,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Emergent Keeper",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": -3,
                        "rrep": 26,
                        "sig": 35,
                        "speed": 2880,
                        "distance": 5000,
                        "velocity": 320,
                        "dps": 22,
                        "alpha": 171,
                        "ehp": 4400,
                        "trigger": true
                    },
                    {
                        "quantity": 3,
                        "type": "Emergent Sentinel",
                        "class": "F",
                        "scram": 1,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2610,
                        "distance": 6500,
                        "velocity": 290,
                        "dps": 29,
                        "alpha": 207,
                        "ehp": 6600,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Awakened Keeper",
                        "class": "C",
                        "scram": 1,
                        "web": 1,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 2115,
                        "distance": 30000,
                        "velocity": 235,
                        "dps": 56,
                        "alpha": 479,
                        "ehp": 19250,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Awakened Sentinel",
                        "class": "C",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1800,
                        "distance": 15000,
                        "velocity": 200,
                        "dps": 76,
                        "alpha": 778,
                        "ehp": 42167,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Awakened Warden",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 58,
                        "sig": 150,
                        "speed": 1485,
                        "distance": 45000,
                        "velocity": 165,
                        "dps": 99,
                        "alpha": 695,
                        "ehp": 26400,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Sleepless Sentinel",
                        "class": "B",
                        "scram": 1,
                        "web": 1,
                        "neut": -18,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1125,
                        "distance": 19000,
                        "velocity": 125,
                        "dps": 465,
                        "alpha": 5746,
                        "ehp": 147714,
                        "trigger": false
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 2959,
                    "total_alpha": 21096,
                    "total_ehp": 628781
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Awakened Sentinel",
                        "class": "C",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1800,
                        "distance": 15000,
                        "velocity": 200,
                        "dps": 76,
                        "alpha": 778,
                        "ehp": 42167,
                        "trigger": false
                    },
                    {
                        "quantity": 4,
                        "type": "Awakened Warden",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 58,
                        "sig": 150,
                        "speed": 1485,
                        "distance": 45000,
                        "velocity": 165,
                        "dps": 99,
                        "alpha": 695,
                        "ehp": 26400,
                        "trigger": true
                    },
                    {
                        "quantity": 4,
                        "type": "Sleepless Keeper",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -12,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 945,
                        "distance": 65000,
                        "velocity": 105,
                        "dps": 565,
                        "alpha": 3802,
                        "ehp": 88629,
                        "trigger": false
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 3510,
                    "total_alpha": 38637,
                    "total_ehp": 1185476
                },
                "contents": [
                    {
                        "quantity": 6,
                        "type": "Emergent Warden",
                        "class": "F",
                        "scram": 1,
                        "web": 1,
                        "neut": -3,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 3150,
                        "distance": 5000,
                        "velocity": 350,
                        "dps": 41,
                        "alpha": 293,
                        "ehp": 2860,
                        "trigger": false
                    },
                    {
                        "quantity": 5,
                        "type": "Awakened Warden",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 58,
                        "sig": 150,
                        "speed": 1485,
                        "distance": 45000,
                        "velocity": 165,
                        "dps": 99,
                        "alpha": 695,
                        "ehp": 26400,
                        "trigger": false
                    },
                    {
                        "quantity": 4,
                        "type": "Sleepless Guardian",
                        "class": "B",
                        "scram": 2,
                        "web": 1,
                        "neut": -36,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1575,
                        "distance": 35000,
                        "velocity": 175,
                        "dps": 693,
                        "alpha": 8352,
                        "ehp": 259079,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 4,
                "details": {
                    "total_dps": 3245,
                    "total_alpha": 39686,
                    "total_ehp": 1109015
                },
                "contents": [
                    {
                        "quantity": 2,
                        "type": "Sleepless Guardian",
                        "class": "B",
                        "scram": 2,
                        "web": 1,
                        "neut": -36,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1575,
                        "distance": 35000,
                        "velocity": 175,
                        "dps": 693,
                        "alpha": 8352,
                        "ehp": 259079,
                        "trigger": false
                    },
                    {
                        "quantity": 4,
                        "type": "Sleepless Sentinel",
                        "class": "B",
                        "scram": 1,
                        "web": 1,
                        "neut": -18,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1125,
                        "distance": 19000,
                        "velocity": 125,
                        "dps": 465,
                        "alpha": 5746,
                        "ehp": 147714,
                        "trigger": false
                    }
                ]
            }
        ]
    },
    "Core Citadel": {
        "title": "Core Citadel",
        "wormhole": "c6",
        "blue_loot_value": 310100000,
        "isk_per_ehp": 139,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 1426,
                    "total_alpha": 15926,
                    "total_ehp": 371276
                },
                "contents": [
                    {
                        "quantity": 1,
                        "type": "Sleepless Keeper",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -12,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 945,
                        "distance": 65000,
                        "velocity": 105,
                        "dps": 565,
                        "alpha": 3802,
                        "ehp": 88629,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Sentinel",
                        "class": "B",
                        "scram": 1,
                        "web": 1,
                        "neut": -18,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1125,
                        "distance": 19000,
                        "velocity": 125,
                        "dps": 465,
                        "alpha": 5746,
                        "ehp": 147714,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Warden",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 73,
                        "sig": 400,
                        "speed": 1305,
                        "distance": 55000,
                        "velocity": 145,
                        "dps": 396,
                        "alpha": 6379,
                        "ehp": 134933,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 1968,
                    "total_alpha": 24984,
                    "total_ehp": 613276
                },
                "contents": [
                    {
                        "quantity": 8,
                        "type": "Emergent Keeper",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": -3,
                        "rrep": 26,
                        "sig": 35,
                        "speed": 2880,
                        "distance": 5000,
                        "velocity": 320,
                        "dps": 22,
                        "alpha": 171,
                        "ehp": 4400,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Sleepless Sentinel",
                        "class": "B",
                        "scram": 1,
                        "web": 1,
                        "neut": -18,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1125,
                        "distance": 19000,
                        "velocity": 125,
                        "dps": 465,
                        "alpha": 5746,
                        "ehp": 147714,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Warden",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 73,
                        "sig": 400,
                        "speed": 1305,
                        "distance": 55000,
                        "velocity": 145,
                        "dps": 396,
                        "alpha": 6379,
                        "ehp": 134933,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 3060,
                    "total_alpha": 31910,
                    "total_ehp": 705886
                },
                "contents": [
                    {
                        "quantity": 8,
                        "type": "Emergent Keeper",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": -3,
                        "rrep": 26,
                        "sig": 35,
                        "speed": 2880,
                        "distance": 5000,
                        "velocity": 320,
                        "dps": 22,
                        "alpha": 171,
                        "ehp": 4400,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Sleepless Warden",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 73,
                        "sig": 400,
                        "speed": 1305,
                        "distance": 55000,
                        "velocity": 145,
                        "dps": 396,
                        "alpha": 6379,
                        "ehp": 134933,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 4,
                "details": {
                    "total_dps": 1519,
                    "total_alpha": 17730,
                    "total_ehp": 544558
                },
                "contents": [
                    {
                        "quantity": 6,
                        "type": "Emergent Keeper",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": -3,
                        "rrep": 26,
                        "sig": 35,
                        "speed": 2880,
                        "distance": 5000,
                        "velocity": 320,
                        "dps": 22,
                        "alpha": 171,
                        "ehp": 4400,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Sleepless Guardian",
                        "class": "B",
                        "scram": 2,
                        "web": 1,
                        "neut": -36,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1575,
                        "distance": 35000,
                        "velocity": 175,
                        "dps": 693,
                        "alpha": 8352,
                        "ehp": 259079,
                        "trigger": false
                    }
                ]
            }
        ]
    },
    "Forgotten Core Assembly Hall": {
        "title": "Forgotten Core Assembly Hall",
        "wormhole": "c6",
        "blue_loot_value": 642500000,
        "isk_per_ehp": 123,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 5678,
                    "total_alpha": 65590,
                    "total_ehp": 1548908
                },
                "contents": [
                    {
                        "quantity": 6,
                        "type": "Restless Sentry Tower",
                        "class": "T",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 50,
                        "speed": 0,
                        "distance": 0,
                        "velocity": 94,
                        "dps": 1404,
                        "alpha": 23833,
                        "trigger": false
                    },
                    {
                        "quantity": 5,
                        "type": "Emergent Sentinel",
                        "class": "F",
                        "scram": 1,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2610,
                        "distance": 6500,
                        "velocity": 290,
                        "dps": 29,
                        "alpha": 207,
                        "ehp": 6600,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Sleepless Keeper",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -12,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 945,
                        "distance": 65000,
                        "velocity": 105,
                        "dps": 565,
                        "alpha": 3802,
                        "ehp": 88629,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Sleepless Sentinel",
                        "class": "B",
                        "scram": 1,
                        "web": 1,
                        "neut": -18,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1125,
                        "distance": 19000,
                        "velocity": 125,
                        "dps": 465,
                        "alpha": 5746,
                        "ehp": 147714,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Sleepless Warden",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 73,
                        "sig": 400,
                        "speed": 1305,
                        "distance": 55000,
                        "velocity": 145,
                        "dps": 396,
                        "alpha": 6379,
                        "ehp": 134933,
                        "trigger": true
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Guardian",
                        "class": "B",
                        "scram": 2,
                        "web": 1,
                        "neut": -36,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1575,
                        "distance": 35000,
                        "velocity": 175,
                        "dps": 693,
                        "alpha": 8352,
                        "ehp": 259079,
                        "trigger": false
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 3356,
                    "total_alpha": 32148,
                    "total_ehp": 811748
                },
                "contents": [
                    {
                        "quantity": 6,
                        "type": "Awakened Keeper",
                        "class": "C",
                        "scram": 1,
                        "web": 1,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 2115,
                        "distance": 30000,
                        "velocity": 235,
                        "dps": 56,
                        "alpha": 479,
                        "ehp": 19250,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Sleepless Keeper",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -12,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 945,
                        "distance": 65000,
                        "velocity": 105,
                        "dps": 565,
                        "alpha": 3802,
                        "ehp": 88629,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Sleepless Sentinel",
                        "class": "B",
                        "scram": 1,
                        "web": 1,
                        "neut": -18,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1125,
                        "distance": 19000,
                        "velocity": 125,
                        "dps": 465,
                        "alpha": 5746,
                        "ehp": 147714,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 4011,
                    "total_alpha": 39823,
                    "total_ehp": 989581
                },
                "contents": [
                    {
                        "quantity": 6,
                        "type": "Awakened Warden",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 58,
                        "sig": 150,
                        "speed": 1485,
                        "distance": 45000,
                        "velocity": 165,
                        "dps": 99,
                        "alpha": 695,
                        "ehp": 26400,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Sleepless Keeper",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -12,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 945,
                        "distance": 65000,
                        "velocity": 105,
                        "dps": 565,
                        "alpha": 3802,
                        "ehp": 88629,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Sleepless Sentinel",
                        "class": "B",
                        "scram": 1,
                        "web": 1,
                        "neut": -18,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1125,
                        "distance": 19000,
                        "velocity": 125,
                        "dps": 465,
                        "alpha": 5746,
                        "ehp": 147714,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Sleepless Warden",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 73,
                        "sig": 400,
                        "speed": 1305,
                        "distance": 55000,
                        "velocity": 145,
                        "dps": 396,
                        "alpha": 6379,
                        "ehp": 134933,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 4,
                "details": {
                    "total_dps": 4906,
                    "total_alpha": 56848,
                    "total_ehp": 1873474
                },
                "contents": [
                    {
                        "quantity": 10,
                        "type": "Emergent Sentinel",
                        "class": "F",
                        "scram": 1,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2610,
                        "distance": 6500,
                        "velocity": 290,
                        "dps": 29,
                        "alpha": 207,
                        "ehp": 6600,
                        "trigger": false
                    },
                    {
                        "quantity": 6,
                        "type": "Awakened Sentinel",
                        "class": "C",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1800,
                        "distance": 15000,
                        "velocity": 200,
                        "dps": 76,
                        "alpha": 778,
                        "ehp": 42167,
                        "trigger": false
                    },
                    {
                        "quantity": 6,
                        "type": "Sleepless Guardian",
                        "class": "B",
                        "scram": 2,
                        "web": 1,
                        "neut": -36,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1575,
                        "distance": 35000,
                        "velocity": 175,
                        "dps": 693,
                        "alpha": 8352,
                        "ehp": 259079,
                        "trigger": false
                    }
                ]
            }
        ]
    },
    "Forgotten Core Circuitry Disassembler": {
        "title": "Forgotten Core Circuitry Disassembler",
        "wormhole": "c6",
        "blue_loot_value": 657600000,
        "isk_per_ehp": 147,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 2115,
                    "total_alpha": 23279,
                    "total_ehp": 524652
                },
                "contents": [
                    {
                        "quantity": 3,
                        "type": "Wakeful Sentry Tower",
                        "class": "T",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 50,
                        "speed": 0,
                        "distance": 0,
                        "velocity": 0,
                        "dps": 73,
                        "alpha": 1092,
                        "ehp": 15167,
                        "trigger": false
                    },
                    {
                        "quantity": 4,
                        "type": "Restless Sentry Tower",
                        "class": "T",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 50,
                        "speed": 0,
                        "distance": 0,
                        "velocity": 0,
                        "dps": 94,
                        "alpha": 1404,
                        "ehp": 23833,
                        "trigger": false
                    },
                    {
                        "quantity": 9,
                        "type": "Emergent Sentinel",
                        "class": "F",
                        "scram": 1,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2610,
                        "distance": 6500,
                        "velocity": 290,
                        "dps": 29,
                        "alpha": 207,
                        "ehp": 6600,
                        "trigger": false
                    },
                    {
                        "quantity": 9,
                        "type": "Emergent Keeper",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": -3,
                        "rrep": 26,
                        "sig": 35,
                        "speed": 2880,
                        "distance": 5000,
                        "velocity": 320,
                        "dps": 22,
                        "alpha": 171,
                        "ehp": 4400,
                        "trigger": false
                    },
                    {
                        "quantity": 9,
                        "type": "Emergent Warden",
                        "class": "F",
                        "scram": 1,
                        "web": 1,
                        "neut": -3,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 3150,
                        "distance": 5000,
                        "velocity": 350,
                        "dps": 41,
                        "alpha": 293,
                        "ehp": 2860,
                        "trigger": true
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Guardian",
                        "class": "B",
                        "scram": 2,
                        "web": 1,
                        "neut": -36,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1575,
                        "distance": 35000,
                        "velocity": 175,
                        "dps": 693,
                        "alpha": 8352,
                        "ehp": 259079,
                        "trigger": false
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 1778,
                    "total_alpha": 14828,
                    "total_ehp": 626157
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Emergent Warden",
                        "class": "F",
                        "scram": 1,
                        "web": 1,
                        "neut": -3,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 3150,
                        "distance": 5000,
                        "velocity": 350,
                        "dps": 41,
                        "alpha": 293,
                        "ehp": 2860,
                        "trigger": false
                    },
                    {
                        "quantity": 7,
                        "type": "Awakened Sentinel",
                        "class": "C",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1800,
                        "distance": 15000,
                        "velocity": 200,
                        "dps": 76,
                        "alpha": 778,
                        "ehp": 42167,
                        "trigger": false
                    },
                    {
                        "quantity": 7,
                        "type": "Awakened Keeper",
                        "class": "C",
                        "scram": 1,
                        "web": 1,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 2115,
                        "distance": 30000,
                        "velocity": 235,
                        "dps": 56,
                        "alpha": 479,
                        "ehp": 19250,
                        "trigger": false
                    },
                    {
                        "quantity": 7,
                        "type": "Awakened Warden",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1485,
                        "distance": 45000,
                        "velocity": 165,
                        "dps": 99,
                        "alpha": 695,
                        "ehp": 26400,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 5117,
                    "total_alpha": 57166,
                    "total_ehp": 1405908
                },
                "contents": [
                    {
                        "quantity": 5,
                        "type": "Emergent Sentinel",
                        "class": "F",
                        "scram": 1,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2610,
                        "distance": 6500,
                        "velocity": 290,
                        "dps": 29,
                        "alpha": 207,
                        "ehp": 6600,
                        "trigger": false
                    },
                    {
                        "quantity": 1,
                        "type": "Sleepless Guardian",
                        "class": "B",
                        "scram": 2,
                        "web": 1,
                        "neut": -36,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1575,
                        "distance": 35000,
                        "velocity": 175,
                        "dps": 693,
                        "alpha": 8352,
                        "ehp": 259079,
                        "trigger": true
                    },
                    {
                        "quantity": 3,
                        "type": "Sleepless Keeper",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -12,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 945,
                        "distance": 65000,
                        "velocity": 105,
                        "dps": 565,
                        "alpha": 3802,
                        "ehp": 88629,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Sleepless Sentinel",
                        "class": "B",
                        "scram": 1,
                        "web": 1,
                        "neut": -18,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1125,
                        "distance": 19000,
                        "velocity": 125,
                        "dps": 465,
                        "alpha": 5746,
                        "ehp": 147714,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Sleepless Warden",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1305,
                        "distance": 55000,
                        "velocity": 145,
                        "dps": 396,
                        "alpha": 6379,
                        "ehp": 134933,
                        "trigger": false
                    }
                ]
            },
            {
                "wave_number": 4,
                "details": {
                    "total_dps": 6060,
                    "total_alpha": 66226,
                    "total_ehp": 1915056
                },
                "contents": [
                    {
                        "quantity": 4,
                        "type": "Emergent Keeper",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": -3,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2880,
                        "distance": 5000,
                        "velocity": 320,
                        "dps": 22,
                        "alpha": 171,
                        "ehp": 4400,
                        "trigger": false
                    },
                    {
                        "quantity": 4,
                        "type": "Emergent Sentinel",
                        "class": "F",
                        "scram": 1,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 35,
                        "speed": 2610,
                        "distance": 6500,
                        "velocity": 290,
                        "dps": 29,
                        "alpha": 207,
                        "ehp": 6600,
                        "trigger": false
                    },
                    {
                        "quantity": 4,
                        "type": "Awakened Keeper",
                        "class": "C",
                        "scram": 1,
                        "web": 1,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 2115,
                        "distance": 30000,
                        "velocity": 235,
                        "dps": 56,
                        "alpha": 479,
                        "ehp": 19250,
                        "trigger": false
                    },
                    {
                        "quantity": 4,
                        "type": "Awakened Sentinel",
                        "class": "C",
                        "scram": 0,
                        "web": 1,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1800,
                        "distance": 15000,
                        "velocity": 200,
                        "dps": 76,
                        "alpha": 778,
                        "ehp": 42167,
                        "trigger": false
                    },
                    {
                        "quantity": 4,
                        "type": "Awakened Warden",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 1485,
                        "distance": 45000,
                        "velocity": 165,
                        "dps": 99,
                        "alpha": 695,
                        "ehp": 26400,
                        "trigger": false
                    },
                    {
                        "quantity": 3,
                        "type": "Sleepless Guardian",
                        "class": "B",
                        "scram": 2,
                        "web": 1,
                        "neut": -36,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1575,
                        "distance": 35000,
                        "velocity": 175,
                        "dps": 693,
                        "alpha": 8352,
                        "ehp": 259079,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Sleepless Keeper",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -12,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 945,
                        "distance": 65000,
                        "velocity": 105,
                        "dps": 565,
                        "alpha": 3802,
                        "ehp": 88629,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Sleepless Sentinel",
                        "class": "B",
                        "scram": 1,
                        "web": 1,
                        "neut": -18,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1125,
                        "distance": 19000,
                        "velocity": 125,
                        "dps": 465,
                        "alpha": 5746,
                        "ehp": 147714,
                        "trigger": false
                    },
                    {
                        "quantity": 2,
                        "type": "Sleepless Warden",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1305,
                        "distance": 55000,
                        "velocity": 145,
                        "dps": 396,
                        "alpha": 6379,
                        "ehp": 134933,
                        "trigger": false
                    }
                ]
            }
        ]
    },
    "Strange Energy Readings": {
        "title": "Strange Energy Readings",
        "wormhole": "c6",
        "blue_loot_value": 291800000,
        "isk_per_ehp": 162,
        "waves": [
            {
                "wave_number": 1,
                "details": {
                    "total_dps": 1736,
                    "total_alpha": 11932,
                    "total_ehp": 331257
                },
                "contents": [
                    {
                        "qty": 5,
                        "sleeper": "Emergent Keeper",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": -3,
                        "rrep": 26,
                        "sig": 35,
                        "speed": 2880,
                        "distance": 5000,
                        "velocity": 320,
                        "dps": 22,
                        "alpha": 171,
                        "ehp": 4400,
                        "trigger": false
                    },
                    {
                        "qty": 5,
                        "sleeper": "Awakened Warden",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 58,
                        "sig": 150,
                        "speed": 1485,
                        "distance": 45000,
                        "velocity": 165,
                        "dps": 99,
                        "alpha": 695,
                        "ehp": 26400,
                        "trigger": true
                    },
                    {
                        "qty": 2,
                        "sleeper": "Sleepless Keeper",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -12,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 945,
                        "distance": 65000,
                        "velocity": 105,
                        "dps": 565,
                        "alpha": 3802,
                        "ehp": 88629,
                        "trigger": false,
                        "opt": true
                    }
                ]
            },
            {
                "wave_number": 2,
                "details": {
                    "total_dps": 2414,
                    "total_alpha": 27929,
                    "total_ehp": 892737
                },
                "contents": [
                    {
                        "qty": 6,
                        "sleeper": "Awakened Keeper",
                        "class": "C",
                        "scram": 1,
                        "web": 1,
                        "neut": -6,
                        "rrep": 0,
                        "sig": 150,
                        "speed": 2115,
                        "distance": 30000,
                        "velocity": 235,
                        "dps": 56,
                        "alpha": 479,
                        "ehp": 19250,
                        "trigger": false
                    },
                    {
                        "qty": 3,
                        "sleeper": "Sleepless Guardian",
                        "class": "B",
                        "scram": 2,
                        "web": 1,
                        "neut": -36,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 1575,
                        "distance": 35000,
                        "velocity": 175,
                        "dps": 693,
                        "alpha": 8352,
                        "ehp": 259079,
                        "trigger": true
                    }
                ]
            },
            {
                "wave_number": 3,
                "details": {
                    "total_dps": 3354,
                    "total_alpha": 22813,
                    "total_ehp": 575143
                },
                "contents": [
                    {
                        "qty": 6,
                        "sleeper": "Emergent Keeper",
                        "class": "F",
                        "scram": 0,
                        "web": 0,
                        "neut": -3,
                        "rrep": 26,
                        "sig": 35,
                        "speed": 2880,
                        "distance": 5000,
                        "velocity": 320,
                        "dps": 22,
                        "alpha": 171,
                        "ehp": 4400,
                        "trigger": false
                    },
                    {
                        "qty": 4,
                        "sleeper": "Awakened Warden",
                        "class": "C",
                        "scram": 0,
                        "web": 0,
                        "neut": 0,
                        "rrep": 58,
                        "sig": 150,
                        "speed": 1485,
                        "distance": 45000,
                        "velocity": 165,
                        "dps": 99,
                        "alpha": 695,
                        "ehp": 26400,
                        "trigger": false
                    },
                    {
                        "qty": 5,
                        "sleeper": "Sleepless Keeper",
                        "class": "B",
                        "scram": 0,
                        "web": 0,
                        "neut": -12,
                        "rrep": 0,
                        "sig": 400,
                        "speed": 945,
                        "distance": 65000,
                        "velocity": 105,
                        "dps": 565,
                        "alpha": 3802,
                        "ehp": 88629,
                        "trigger": true
                    }
                ]
            }
        ]
    },
    "The Mirror": {
        "title": "The Mirror",
        "wormhole": "c6",
        "blue_loot_value": 363200000,
        "isk_per_ehp": 144,
        "waves": []
    },
    "Unsecured Core Backup Array": {
        "title": "Unsecured Core Backup Array",
        "wormhole": "c6",
        "blue_loot_value": 0,
        "isk_per_ehp": 0,
        "waves": []
    },
    "Unsecured Core Emergence": {
        "title": "Unsecured Core Emergence",
        "wormhole": "c6",
        "blue_loot_value": 0,
        "isk_per_ehp": 0,
        "waves": []
    },

}

{/* <div class="accordion-item">
</div> */}
function createAccordionEntry(count, site, content) {
    let elemAccordionItemDiv = document.createElement('div');
    elemAccordionItemDiv.classList.add('accordion-item');

    let elemItemHeader = createAccordionHeader(2, count, `${site.site.title} (${site.site.wormhole.toUpperCase()}) | ${currencyFormatter.format(site.site.blue_loot_value)} ISK`);
    let elemItemBody = createAccordionBody(count, content);

    elemAccordionItemDiv.appendChild(elemItemHeader);
    elemAccordionItemDiv.appendChild(elemItemBody);

    return elemAccordionItemDiv;
}

{/* <h2 class="accordion-header" id="flush-headingOne">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
    </button>
</h2> */}
function createAccordionHeader(level, count, buttonLabel) {
    let buttonText = document.createTextNode(buttonLabel);
    let button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('data-bs-toggle', 'collapse');
    button.setAttribute('data-bs-target', `#collapse${count}`);
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', `collapse${count}`);
    button.classList.add('accordion-button', 'collapsed');
    button.appendChild(buttonText);

    let header = document.createElement(`h${level}`);
    header.classList.add('accordion-header');
    header.setAttribute('id', `header${count}`)
    header.appendChild(button);

    return header;
}

{
    /* 
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#systemEval">
        <div class="accordion-body">
            Placeholder content for this accordion, which is intended to
            demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion
            body.
        </div>
    </div>
    */
}
function createAccordionBody(count, content) {
    let elemInnerDiv = document.createElement('div');
    elemInnerDiv.classList.add('accordion-body');
    elemInnerDiv.appendChild(content);

    let elemOuterDiv = document.createElement('div');
    elemOuterDiv.classList.add('accordion-collapse', 'collapse');
    elemOuterDiv.setAttribute('aria-labelledby', `header${count}`);
    elemOuterDiv.setAttribute('data-bs-parent', '#systemEval');
    elemOuterDiv.setAttribute('id', `collapse${count}`);
    elemOuterDiv.appendChild(elemInnerDiv);

    return elemOuterDiv;
}

function addAccordionItem(count, site) {
    let accordionRef = document.getElementById('systemEval');

    let elemContainer = document.createElement('div');
    for (let i = 0; i < site.site.waves.length; i++) {
        let elemHeader = document.createElement('h3');

        elemHeader.appendChild(document.createTextNode(`Wave ${i + 1}`));
        elemContainer.appendChild(elemHeader);

        let wave = site.site.waves[i];
        let elemContent = createWaveTable(site, wave);
        elemContainer.appendChild(elemContent);
    }

    let newItem = createAccordionEntry(count, site, elemContainer);
    accordionRef.appendChild(newItem);
}

function createWaveTable(site, wave) {
    let elemTable = document.createElement('table');
    elemTable.classList.add('table', 'table-bordered');

    let elemTableHeader = document.createElement('thead');
    let elemTableHeaderRow = document.createElement('tr');
    elemTableHeader.appendChild(elemTableHeaderRow);

    for (x of ["Sleeper", "Qty", "Class", "Scram", "Web", "Neut", "RRep", "Sig", "Speed", "Distance", "Velocity", "DPS", "Alpha", "EHP", "Trigger"]) {
        let elemTableHeaderRowCell = document.createElement('th');
        elemTableHeaderRowCell.appendChild(document.createTextNode(x));
        elemTableHeaderRow.appendChild(elemTableHeaderRowCell);
    }

    elemTable.appendChild(elemTableHeader);

    let elemTableBody = document.createElement('tbody');
    for (y of wave.contents) {
        var elemTempRow = document.createElement('tr');
        for (z of ["type", "quantity", "class", "scram", "web", "neut", "rrep", "sig", "speed", "distance", "velocity", "dps", "alpha", "ehp"]) {
            let elem = document.createElement('td');
            elem.appendChild(document.createTextNode(y[z]));
            elemTempRow.appendChild(elem);
        }

        let elemTrigger = document.createElement('td');
        if (y['trigger'] || y['trigger_on_attack']) {
            elemTrigger.appendChild(document.createTextNode("YES"));
            elemTempRow.classList.add('table-warning');
        } else {
            elemTrigger.appendChild(document.createTextNode("-"));
        }

        elemTempRow.appendChild(elemTrigger);
        elemTableBody.appendChild(elemTempRow);
    }

    elemTable.appendChild(elemTableBody);
    return elemTable;
}

function addValueRow(tableID, fromThis) {
    let tableRef = document.getElementById(tableID);
    let newRow = tableRef.insertRow(-1);
    var elemIcon = createIconElement(`${fromThis.site.type}-site`, "18px");
    var elemSignature = document.createTextNode(fromThis.signature);
    var elemName = document.createTextNode(fromThis.site.name);
    var elemFactionIcon = createIconElement(`${fromThis.site.faction}-faction`, width = "30px");
    var elemValue = document.createTextNode(currencyFormatter.format(fromThis.site.value));

    // Compute icons needed for NPC weaknesses
    if (fromThis.site.weak_to.length > 0) {
        var elemWeaknessesIcons = document.createElement("span");
        for (const e of fromThis.site.weak_to) {
            elemWeaknessesIcons.appendChild(createIconElement(`${e}-damage`, width = "30px"));
        }
    } else {
        var elemWeaknessesIcons = document.createTextNode("-");
    }

    // Compute icons needed for NPC resistences
    if (fromThis.site.resistent_to.length > 0) {
        var elemResDmgIcons = document.createElement("span");
        for (const e of fromThis.site.resistent_to) {
            elemResDmgIcons.appendChild(createIconElement(`${e}-resistence`, width = "30px"));
        }
    } else {
        var elemResDmgIcons = document.createTextNode("-");
    }

    // Compute icons needed for EWAR
    if (fromThis.site.ewar.length > 0) {
        var elemEWARIcons = document.createElement("span");
        for (const e of fromThis.site.ewar) {
            elemEWARIcons.appendChild(createIconElement(`${e}-ewar`, width = "30px"));
        }
    } else {
        var elemEWARIcons = document.createTextNode("-");
    }

    // Icon
    newRow.insertCell(0).appendChild(elemIcon);
    // Signature
    newRow.insertCell(1).appendChild(elemSignature);
    // Name
    newRow.insertCell(2).appendChild(elemName);
    // Faction
    // newRow.insertCell(3).appendChild(elemFactionIcon);
    // Weaknesses
    // newRow.insertCell(4).appendChild(elemWeaknessesIcons);
    // // Resistences
    // newRow.insertCell(5).appendChild(elemResDmgIcons);
    // EWAR
    newRow.insertCell(3).appendChild(elemEWARIcons);
    // Value
    newRow.insertCell(4).appendChild(createHighlightedElement(elemValue, 'success'));
}

function createIconElement(type, width = "20px") {
    var elemIcon = document.createElement("img");
    elemIcon.setAttribute("src", `static/icons/${type}.png`);
    elemIcon.setAttribute("width", width);
    return elemIcon;
}

function createHighlightedElement(content, level) {
    var newSpan = document.createElement("span");
    newSpan.classList.add(`text-${level}`);
    newSpan.appendChild(content);
    return newSpan;
}

function createTag(content, level) {
    var newSpan = document.createElement("span");
    newSpan.classList.add(`badge`);
    newSpan.classList.add(`rounded-pill`);
    newSpan.classList.add(`bg-${level}`);
    newSpan.appendChild(content);
    return newSpan;
}

function createTags(content, level) {
    var finalString = "";

    for (tag of content) {
        finalString += `${tag.toUpperCase()}/`;
    }

    return document.createTextNode(finalString.slice(0, -1));
}

function clearAccordion() {
    let accordionRef = document.getElementById('systemEval');
    accordionRef.innerHTML = '';
}

function evaluateSite(name) {
    runningSystemTotalISK += newValuationDatabase[name].blue_loot_value;

    for (x of newValuationDatabase[name].waves) {
        runningSystemTotalDPS += x.details.total_dps;
        runningSystemTotalEHP += x.details.total_ehp;
    }

    return newValuationDatabase[name];
}

function handlePaste(event) {
    // var output = '';
    // for(const [key, value] of Object.entries(newValuationDatabase)) {
    //     output += `ABC-123	Cosmic Anomaly	Combat Site\t${key}	100.0%	0.69 AU\n`;
    // }
    // console.info(output);

    const probeWindow = /^([A-Z]{3}-[0-9]{3})\t([A-Za-z0-9-_ ]+)\t([A-Za-z0-9-_ ]+)?\t([A-Za-z0-9-_ ]+)?.*$/gm;

    event.preventDefault();
    var paste = (event.clipboardData || window.clipboardData).getData("text").split('\n');

    clearAccordion();
    probeWindowSignatures = [];
    
    // Just some fun statistics
    runningSystemTotalISK = 0.0;
    runningSystemTotalDPS = 0.0;
    runningSystemTotalEHP = 0.0;

    for (var i = 0; i < paste.length; i++) {
        const probeWindowMatches = paste[i].matchAll(probeWindow);

        for (const m of probeWindowMatches) {
            skip = false;
            const siteSignature = m[1];
            const siteName = m[4];

            if (siteName === undefined) {
                console.error(`Ignoring: ${siteSignature}`);
                continue;
            }

            for (const b of probeWindowSignatures) {
                if (b.signature == siteSignature) {
                    skip = true;
                    break;
                }
            }

            if (!skip) {
                console.info(`Looking at: ${siteSignature} => ${siteName}`);

                if (!(siteName in newValuationDatabase)) {
                    console.info(`Unable to find: ${siteSignature} => ${siteName}`);
                    continue;
                } else {
                    console.info(`Found: ${siteSignature} => ${siteName}`);
                }

                var site = evaluateSite(siteName);
                probeWindowSignatures.push({
                    signature: siteSignature,
                    name: siteName,
                    site: site,
                });
            } else {
                console.info(`Skipping: ${siteSignature} => ${siteName}`);
            }
        }
    }

    probeWindowSignatures.sort((a, b) => {
        if (a.site.blue_loot_value < b.site.blue_loot_value) {
            return 1;
        }

        return -1;
    });

    for (let i = 0; i < probeWindowSignatures.length; i++) {
        let s = probeWindowSignatures[i];
        console.info(`Passing "${s.site.title}" to addAccordionItem()`);
        addAccordionItem(i, s);
    }

    document.getElementById("systemTotalISK").innerText = currencyFormatter.format(runningSystemTotalISK);
    document.getElementById("systemTotalDPS").innerText = runningSystemTotalDPS.toLocaleString();
    document.getElementById("systemTotalEHP").innerText = runningSystemTotalEHP.toLocaleString();
}

addEventListener("paste", handlePaste);
