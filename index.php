<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>goEAT</title>
        <link rel="stylesheet" type="text/css" href="./css/index.css"/>
        <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>
        <link href="http://code.google.com/apis/maps/documentation/javascript/examples/default.css" rel="stylesheet" type="text/css" />

        <script type="text/javascript" src="//maps.googleapis.com/maps/api/js?sensor=false"></script>
        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.3/jquery.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>
        <script type="text/javascript" src="./js/overlay.js"></script>
        <script type="text/javascript" src="./js/validate.js"></script>
        <script type="text/javascript" src="./js/autocomplete.js"></script>
        <script type="text/javascript" src="./js/result.js"></script>
        <script type="text/javascript" src="./js/menutotal.js"></script>
        <script type="text/javascript" src="./js/getID.js"></script>
        <script type="text/javascript" src="./js/map.js"></script>
    </head>

    <body style="font: 10pt arial">
        <div class="overlay" id="overlay" style="display:none;"></div>
        <div class="box" id="box">
            <a class="boxclose" id="boxclose"></a>
            <!--<div class="level1">-->
        </div>
    <center>
        <h1>GoEaT</h1>
       <h3>Food Search Engine</h3>
        <form method="GET" id="a">
            <!-- NON UI
            <table>
                <tr><td>Location</td><td><input id="al" type="text"  name="location" value="S.R Nagar"  /></td></tr>
                <tr><td>No.people</td><td><input type="text"  name="nppl" value="10" /></td></tr>
                <tr><td>Budget</td><td><input type="text"  name="bget" value="1500"/></td></tr>
            </table>
            <input  type="button" value="go!" onclick="validate(this.form)"/>-->
            <input id="al" class="dropshadow textbox" type="text" name="location"  size="30" placeholder="Location"/>
            </br>
            <input class="dropshadow textbox" type="text" name="nppl"  size="30" placeholder="No. of People"/>
            </br>
            <input class="dropshadow textbox" type="text" name="bget"  size="30" placeholder="Budget"/>
            </br>
            <input  type="button"  class="butlook dropshadow cusbut" value="Go!" onclick="validate(this.form)"/>
            <br/><br/>
        </form>

        <!-- NON UI
        Search<input type="text"  name="search" value="1500"/><input type="button" onclick="getID(this.form)" value="go!">-->

        <input  class="dropshadow textbox" style="margin-left: 90px" type="text"  id="search" name="search" value="" size="30" placeholder="Search Bakery"/>   
        <input  type="button" style="width: 80px" class="butlook dropshadow cusbut" onclick="getID()" value="Search">

        <div id="output"></div>

        <div id="menu"></div>

    </center>
    <!--  End of UI -->



</body>
</html>	