/**
 * Created by Paweł on 18.04.2017.
 */
var distances = [];
for (var i=0, t=100; i<t; i++) {
    distances.push(Math.round(Math.random() * t))
}
var factors = [];
for (var i=0, t=100; i<t; i++) {
    factors.push(Math.round(Math.random() * t))
}
var clear = function (indexTab) {
    for(var a = 0;a<indexTab.length;a++){
        factors[indexTab[a]] = 0;
    }
};
var posA = {
    "B": {
        "dist": distances[1],
        "factor": factors[1]
    },
    "C": {
        "dist": distances[2],
        "factor": factors[2]
    },
    "D": {
        "dist": distances[3],
        "factor": factors[3]
    }
};
clear([0,4,5,6,7,8,9]);
//connArray[0].getOverlay("label").setLabel(factors[1]);
var posB = {
    "A": {
        "dist": distances[10],
        "factor": factors[10]
    },
    "D": {
        "dist": distances[13],
        "factor": factors[13]
    },
    "G": {
        "dist": distances[16],
        "factor": factors[16]
    },
    "H": {
        "dist": distances[17],
        "factor": factors[17]
    }
};
clear([11,12,14,15,18,19]);
var posC = {
    "A": {
        "dist": distances[20],
        "factor": factors[20]
    },
    "D": {
        "dist": distances[23],
        "factor": factors[23]
    },
    "E": {
        "dist": distances[24],
        "factor": factors[24]
    },
    "F": {
        "dist": distances[25],
        "factor": factors[25]
    }
};
clear([21,22,26,27,28,29]);
var posD = {
    "A": {
        "dist": distances[30],
        "factor": factors[30]
    },
    "B": {
        "dist": distances[31],
        "factor": factors[31]
    },
    "C": {
        "dist": distances[32],
        "factor": factors[32]
    },
    "H": {
        "dist": distances[37],
        "factor": factors[37]
    },
    "I": {
        "dist": distances[38],
        "factor": factors[38]
    }
};
clear([33,34,35,36,39]);
var posE = {
    "C": {
        "dist": distances[42],
        "factor": factors[42]
    },
    "G": {
        "dist": distances[46],
        "factor": factors[46]
    },
    "I": {
        "dist": distances[48],
        "factor": factors[48]
    },
    "J": {
        "dist": distances[49],
        "factor": factors[49]
    }
};
clear([40,41,43,44,45,47]);
var posF = {
    "C": {
        "dist": distances[52],
        "factor": factors[52]
    },
    "J": {
        "dist": distances[59],
        "factor": factors[59]
    }
};
clear([50,51,53,54,55,56,57,58]);
var posG = {
    "B": {
        "dist": distances[61],
        "factor": factors[61]
    },
    "E": {
        "dist": distances[64],
        "factor": factors[64]
    }
};
clear([60,62,63,65,66,67,67,69]);
var posH = {
    "B": {
        "dist": distances[71],
        "factor": factors[71]
    },
    "I": {
        "dist": distances[78],
        "factor": factors[78]
    }
};
clear([70,72,73,74,75,76,77,79]);
var posI = {
    "D": {
        "dist": distances[83],
        "factor": factors[83]
    },
    "E": {
        "dist": distances[84],
        "factor": factors[84]
    },
    "H": {
        "dist": distances[87],
        "factor": factors[87]
    },
    "J": {
        "dist": distances[89],
        "factor": factors[89]
    }
};
clear([80,81,82,85,86,88]);
var posJ = {
    "E": {
        "dist": distances[94],
        "factor": factors[94]
    },
    "F": {
        "dist": distances[95],
        "factor": factors[95]
    },
    "I": {
        "dist": distances[98],
        "factor": factors[98]
    }
};
clear([90,91,92,93,96,97,99]);
console.log(factors);