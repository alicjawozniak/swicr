<%--
  Created by IntelliJ IDEA.
  User: alicja
  Date: 23.10.16
  Time: 15:38
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Projekt swicr</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <!-- Latest compiled and minified CSS -->
    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

    <!-- Latest compiled and minified JavaScript -->
    <link type="text/css" href="css/style.css" rel="stylesheet" />
</head>
<body>
<div id="pointer" class="pointer"></div>
<div>
    <div class="container">
        <div class="select-wrapper" style="margin-bottom: 10px;">
            <label for="selectStart">Start :</label>
            <select class="form-control" name="startJourney" id="selectStart" onchange="setStartValue(this)">
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                <option>E</option>
                <option>F</option>
                <option>G</option>
                <option>H</option>
                <option>I</option>
                <option>J</option>
            </select>
        </div>
        <div class="select-wrapper">
            <label for="selectEnd">End :</label>
            <select class="form-control" name="endJourney" id="selectEnd" onchange="setEndValue(this)">
                <option>A</option>
                <option selected>B</option>
                <option>C</option>
                <option>D</option>
                <option>E</option>
                <option>F</option>
                <option>G</option>
                <option>H</option>
                <option>I</option>
                <option>J</option>
            </select>
        </div>
        <div class="select-wrapper" style="width: 100%;">
            <button id="startButton" class="btn btn-success" style="display: block;margin: 0 auto;" onclick="nextStep()"> NEXT STEP </button>
        </div>

        <div class="select-wrapper" style="width: 100%;">
            <button id="resetButton" class="btn btn-warning" style="display: block;margin: 0 auto;visibility: hidden;" onclick="reset(this)"> RESET </button>
        </div>

        <div class="wrapper"><div id="p0" class="circle" style="margin-left: 45%"><span>A</span></div></div>
        <div class="wrapper"><div id="p1" class="circle" style="margin-left: 25%"><span>B</span></div></div>
        <div class="wrapper"><div id="p2" class="circle" style="margin-left: 75%"><span>C</span></div></div>
        <div class="wrapper"><div id="p3" class="circle" style="margin-left: 41%"><span>D</span></div></div>
        <div class="wrapper"><div id="p4" class="circle" style="margin-left: 62%"><span>E</span></div></div>
        <div class="wrapper"><div id="p5" class="circle" style="margin-left: 76%"><span>F</span></div></div>
        <div class="wrapper"><div id="p6" class="circle" style="margin-left: 20%"><span>G</span></div></div>
        <div class="wrapper"><div id="p7" class="circle" style="margin-left: 31%"><span>H</span></div></div>
        <div class="wrapper"><div id="p8" class="circle" style="margin-left: 54%;bottom: 50px;"><span>I</span></div></div>
        <div class="wrapper"><div id="p9" class="circle" style="margin-left: 69%"><span>J</span></div></div>
    </div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.23/jquery-ui.min.js'></script>
<script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/jsPlumb/1.4.1/jquery.jsPlumb-1.4.1-all.js"></script>
<script src="js/distances.js"></script>
<script src="js/plumb.js"></script>
<script src="js/main.js"></script>
</body>
</html>

