/**
 * Created by Paweł on 18.04.2017.
 */
var connArray = [];
var resetAllLabels;
jsPlumb.ready(function() {
    var p01 = jsPlumb.connect({
        source:'p0',
        target:'p1',
        connector:"Straight",
        paintStyle: {
            strokeStyle: "#5b9ada",
            lineWidth: 3
        },
        overlays:[
            [ "Label", {label: "", id:"label01"}]
        ]
    });
    var p02 = jsPlumb.connect({
        source:'p0',
        target:'p2',
        connector:"Straight",
        paintStyle: {
            strokeStyle: "#5b9ada",
            lineWidth: 3
        },
        overlays:[
            [ "Label", {label:"", id:"label02"}]
        ]
    });
    var p03 = jsPlumb.connect({
        source:'p0',
        target:'p3',
        connector:"Straight",
        paintStyle: {
            strokeStyle: "#5b9ada",
            lineWidth: 3
        },
        overlays:[
            [ "Label", {label:"", id:"label03"}]
        ]
    });
    var p13 = jsPlumb.connect({
        source:'p1',
        target:'p3',
        connector:"Straight",
        paintStyle: {
            strokeStyle: "#5b9ada",
            lineWidth: 3
        },
        overlays:[
            [ "Label", {label:"", id:"label13"}]
        ]
    });
    var p16 = jsPlumb.connect({
        source:'p1',
        target:'p6',
        connector:"Straight",
        paintStyle: {
            strokeStyle: "#5b9ada",
            lineWidth: 3
        },
        overlays:[
            [ "Label", {label:"", id:"label16"}]
        ]
    });
    var p17 = jsPlumb.connect({
        source:'p1',
        target:'p7',
        connector:"Straight",
        paintStyle: {
            strokeStyle: "#5b9ada",
            lineWidth: 3
        },
        overlays:[
            [ "Label", {label:"", id:"label17"}]
        ]
    });

    var p24 = jsPlumb.connect({
        source:'p2',
        target:'p4',
        connector:"Straight",
        paintStyle: {
            strokeStyle: "#5b9ada",
            lineWidth: 3
        },
        overlays:[
            [ "Label", {label:"", id:"label24"}]
        ]
    });
    var p25 = jsPlumb.connect({
        source:'p2',
        target:'p5',
        connector:"Straight",
        paintStyle: {
            strokeStyle: "#5b9ada",
            lineWidth: 3
        },
        overlays:[
            [ "Label", {label:"", id:"label25"}]
        ]
    });
    var p32 = jsPlumb.connect({
        source:'p3',
        target:'p2',
        connector:"Straight",
        paintStyle: {
            strokeStyle: "#5b9ada",
            lineWidth: 3
        },
        overlays:[
            [ "Label", {label:"", id:"label32"}]
        ]
    });
    var p37 = jsPlumb.connect({
        source:'p3',
        target:'p7',
        connector:"Straight",
        paintStyle: {
            strokeStyle: "#5b9ada",
            lineWidth: 3
        },
        overlays:[
            [ "Label", {label:"", id:"label37"}]
        ]
    });
    var p38 = jsPlumb.connect({
        source:'p3',
        target:'p8',
        connector:"Straight",
        paintStyle: {
            strokeStyle: "#5b9ada",
            lineWidth: 3
        },
        overlays:[
            [ "Label", {label:"", id:"label38"}]
        ]
    });
    var p46 = jsPlumb.connect({
        source:'p4',
        target:'p6',
        connector:"Straight",
        paintStyle: {
            strokeStyle: "#5b9ada",
            lineWidth: 3
        },
        overlays:[
            [ "Label", {label:"", id:"label46"}]
        ]
    });
    var p48 = jsPlumb.connect({
        source:'p4',
        target:'p8',
        connector:"Straight",
        paintStyle: {
            strokeStyle: "#5b9ada",
            lineWidth: 3
        },
        overlays:[
            [ "Label", {label:"", id:"label48"}]
        ]
    });
    var p49 = jsPlumb.connect({
        source:'p4',
        target:'p9',
        connector:"Straight",
        paintStyle: {
            strokeStyle: "#5b9ada",
            lineWidth: 3
        },
        overlays:[
            [ "Label", {label:"", id:"label49"}]
        ]
    });
    var p59 = jsPlumb.connect({
        source:'p5',
        target:'p9',
        connector:"Straight",
        paintStyle: {
            strokeStyle: "#5b9ada",
            lineWidth: 3
        },
        overlays:[
            [ "Label", {label:"", id:"label59"}]
        ]
    });
    var p78 = jsPlumb.connect({
        source:'p7',
        target:'p8',
        connector:"Straight",
        paintStyle: {
            strokeStyle: "#5b9ada",
            lineWidth: 3
        },
        overlays:[
            [ "Label", {label:"", id:"label78"}]
        ]
    });
    var p89 = jsPlumb.connect({
        source:'p8',
        target:'p9',
        connector:"Straight",
        paintStyle: {
            strokeStyle: "#5b9ada",
            lineWidth: 3
        },
        overlays:[
            [ "Label", {label:"", id:"label89"}]
        ]
    });
    //17
    connArray.push(p01);
    connArray.push(p02);
    connArray.push(p03);
    connArray.push(p13);
    connArray.push(p16);
    connArray.push(p17);
    connArray.push(p24);
    connArray.push(p25);
    connArray.push(p32);
    connArray.push(p37);
    connArray.push(p38);
    connArray.push(p46);
    connArray.push(p48);
    connArray.push(p49);
    connArray.push(p59);
    connArray.push(p78);
    connArray.push(p89);
    console.log(connArray);
    console.log(posA.B.dist);
    resetAllLabels = function () {
        console.log(posA.B.factor);
        p01.setLabel('' + posA.B.dist + '<span>' + posA.B.factor + '</span>');
        p02.setLabel('' + posA.C.dist + '<span>' + posA.C.factor + '</span>');
        p03.setLabel('' + posA.D.dist + '<span>' + posA.D.factor + '</span>');
        p13.setLabel('' + posB.D.dist + '<span>' + posB.D.factor + '</span>');
        p16.setLabel('' + posB.G.dist + '<span>' + posB.G.factor + '</span>');
        p17.setLabel('' + posB.H.dist + '<span>' + posB.H.factor + '</span>');
        p24.setLabel('' + posC.E.dist + '<span>' + posC.E.factor + '</span>');
        p25.setLabel('' + posC.F.dist + '<span>' + posC.F.factor + '</span>');
        p32.setLabel('' + posD.C.dist + '<span>' + posD.C.factor + '</span>');
        p37.setLabel('' + posD.H.dist + '<span>' + posD.H.factor + '</span>');
        p38.setLabel('' + posD.I.dist + '<span>' + posD.I.factor + '</span>');
        p46.setLabel('' + posE.G.dist + '<span>' + posE.G.factor + '</span>');
        p48.setLabel('' + posE.I.dist + '<span>' + posE.I.factor + '</span>');
        p49.setLabel('' + posE.J.dist + '<span>' + posE.J.factor + '</span>');
        p59.setLabel('' + posF.J.dist + '<span>' + posF.J.factor + '</span>');
        p78.setLabel('' + posH.I.dist + '<span>' + posH.I.factor + '</span>');
        p89.setLabel('' + posI.J.dist + '<span>' + posI.J.factor + '</span>');
    };
    resetAllLabels();
});
$(window).resize(function() {
    jsPlumb.repaintEverything();
});
