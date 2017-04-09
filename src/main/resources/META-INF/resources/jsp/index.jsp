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
</head>
<body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<div>
    <h1 class="text-center">swicr</h1>

</div>
<div>

    
    <script>
        //losowanie 100 odleglosci
        var distances = [];
        for (var i=0, t=100; i<t; i++) {
            distances.push(Math.round(Math.random() * t))
        }
        //losowanie 100 factorow
        var factors = [];
        for (var i=0, t=100; i<t; i++) {
            factors.push(Math.round(Math.random() * t))
        }
        //losowanie poczatku i konca
        var beginning = 0;
        var end = 5;

        var nextStep = beginning;

        function getStep() {
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
                    nextStep = data;
                }
            })
        }

        //pokonanie trasy
        while (nextStep != end){
            beginning = nextStep;
            getStep();
        }

    </script>
</div>
</body>
</html>
