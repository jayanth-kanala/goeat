<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function getOutput($mquery) {
    //$location = $_GET['location'];
    $low = $_GET['low'];
    //perhead value
    $phead = htmlentities($_GET['bget']) / htmlentities($_GET['nppl']);
    $mphead = $phead * 0.7;
    $sphead = $phead * 0.3;
    if ($low == 0)
        echo "Search with in<input type=text class='dropshadow textbox' id=radius style='text-align:right;width: 20px; height:10px; margin: 5px 7px;' onkeyup=getByRadius(this.value); maxlength=1 />K.M Radius";
    //Array of items
    $item = array(0 => "pizza", 1 => "burger");
    $mresult = mysql_query($mquery);
    if ($low == 0) {
        //echo "<input type=text  onkeyup=loadMore(this.value) value=0>";
        echo '<div class="container"><ul>';
    }
    while ($mrow = mysql_fetch_assoc($mresult)) {
        $maxitems = sizeof($item) - 1;
        $bid = $mrow['id'];
        while ($maxitems >= 0) {
            $ranvalue = rand(0, $maxitems);    //selecting a random value
            $t = $item[$ranvalue];
            $mranitem = "SELECT count(value) FROM $t WHERE VALUE<=$mphead and id=$bid";
            $msuggestion = mysql_query($mranitem);
            $msrow = mysql_fetch_assoc($msuggestion);
            if ($msrow["count(value)"] == 0) {
                $temp = $item[$ranvalue];
                while ($ranvalue < $maxitems) {
                    $item[$ranvalue] = $item[$ranvalue + 1];
                    $ranvalue = $ranvalue + 1;
                }
                $item[$ranvalue] = $temp;

                $maxitems = $maxitems - 1;
            } else {
                //selecting corresponding random item
                $mranitem = "SELECT name,value FROM $t WHERE VALUE<=$mphead and id=$bid ORDER BY RAND() LIMIT 1"; //query to filter each hotel's suggestion using id
                $sranitem = "SELECT name,value FROM drinks WHERE VALUE<=$sphead and id=$bid ORDER BY RAND() LIMIT 1"; //query to filter each hotel's suggestion using id
                $msuggestion = mysql_query($mranitem); //filtering a suggestion
                $ssuggestion = mysql_query($sranitem); //filtering a suggestion
                $ssrow = mysql_fetch_assoc($ssuggestion);
                $msrow = mysql_fetch_assoc($msuggestion);
                echo "<li id=$bid class=bakli>
                        <div class='part1' style='width:360px;'><b  style='color: #066dab;'>" . $mrow['name'] . "</b><br/>";

                echo $mrow['address']." </div> <div class='part1'><img src='./images/hr.png' /></div>";

                echo "<div class='part1' style='width:240px'>" . $msrow['name'] . " : " . $msrow['value'] . "<br/>";

                echo $ssrow['name'] . " : " . $ssrow['value'] . "</div>";
                break;
            }
        }
    }
    if ($low == 0)
        echo "</li></ul></div>";
}

?>