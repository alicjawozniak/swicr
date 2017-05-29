/**
 * Created by Paweł on 18.04.2017.
 */
//losowanie 100 factorow

var positionTab = ['p0', 'p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9'];
var beginning = 0;
var end = 1;
var pointer = document.getElementById('pointer');
var currentPosition = 'p0';
function getStep() {
    console.log('Start ! : ' + beginning);
    console.log('End ! : ' + end);
    var params = {
        distances: distances,
        factors: factors,
        beginning: beginning,
        end: end
    };
    $.ajax
    ({
        type: "POST",
        url: 'http://localhost:8080/next-step',
        dataType: 'json',
        contentType : 'application/json',
        async: false,
        data: JSON.stringify(params),
        success: function (data) {
            //data to index nastepnego wierzchołka
            console.log(data);
            beginning = data;
            currentPosition = positionTab[data];
            setPointerPositionAt(currentPosition);

            if(beginning === end){
                pointer.style.backgroundColor = 'orange';
                document.getElementById('startButton').disabled = true;
                document.getElementById('startButton').textContent = 'Target reached destination';
                document.getElementById('resetButton').style.visibility = 'visible';
            }
        }
    })
}
var reset = function (ele) {
    beginning = 0;
    end = 1;
    document.getElementById('selectEnd').options[1].selected = true;
    document.getElementById('selectStart').options[0].selected = true;
    document.getElementById('startButton').textContent = ' NEXT STEP ';
    document.getElementById('startButton').disabled = false;
    document.getElementById('pointer').style.backgroundColor = 'green';
    ele.style.visibility = 'hidden';
    offAllDisabledOptions(document.getElementById('selectEnd'));
    currentPosition = 'p0';
    setPointerPositionAt('p0');
};
//pokonanie trasy
var nextStep = function() {
    /*currentPosition = connArray[beginning].targetId;
     setPointerPositionAt(currentPosition);*/
    getStep();
    newRandomFactors();
    resetAllLabels();
};
var offAllDisabledOptions = function (element) {
    for(var i = 0;i<element.options.length;i++){
        element.options[i].disabled = false;
    }
};
var setStartValue = function (ele) {
    var value = ele.value;
    var selectEnd = document.getElementById('selectEnd');
    offAllDisabledOptions(selectEnd);

    for(var i = 0;i<selectEnd.options.length;i++){
        if(selectEnd.options[i].value === value){
            selectEnd.options[i].disabled = true;
        }
    }
    if(value === selectEnd.value){
        selectEnd.style.color = 'red';
        document.getElementById('startButton').disabled = true;
    }
    beginning = ele.selectedIndex;
    setPointerPositionAt(positionTab[ele.selectedIndex]);
};

var setEndValue = function (ele) {
    var selectStart = document.getElementById('selectStart');
    end = ele.selectedIndex;
    if(ele.value !== selectStart.value){
        ele.style.color = '#555';
        document.getElementById('startButton').disabled = false;
    }
};

var setPointerPositionAt = function (targetId) {
    var startPositionElement = document.getElementById(targetId).getBoundingClientRect();
    pointer.style.top = startPositionElement.bottom - 7;
    pointer.style.left = (startPositionElement.right - 33);
};
setPointerPositionAt('p0');
$(window).resize(function() {
    setPointerPositionAt(currentPosition);
});
$(window).scroll(function () {
    setPointerPositionAt(currentPosition);
});
