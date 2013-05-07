<?php
include_once 'sqlcon.php';
$idvalue = $_GET["id"];
//Old UI
//echo '<div class="level1"><center>';
echo "<ul>";

$idcount = 0;
$mtable = "show tables from a6142793_b where Tables_in_a6142793_b!='main'";
$mresult = mysql_query($mtable);
while ($mrow = mysql_fetch_array($mresult)) {
    //Old UI
    //echo '<div class="level2">' . $mrow["Tables_in_bdata"] . '</br>';
    echo "<div class='itemtitle'>", $mrow['Tables_in_a6142793_b'] , "</div>";
    $menu = 'select * from ' . $mrow["Tables_in_a6142793_b"] . ' where id=' . $idvalue;
    $mmenu = mysql_query($menu);
    //echo $mrow["Tables_in_a5840284_b"] . " : ";
    while ($mmenurow = mysql_fetch_array($mmenu)) {
        //Old UI
        //echo '<div class="level3"><p>' . $mmenurow['name'] . '<hr class="style-two">Rs. ' . $mmenurow['value'] . '/-</p></div>';
        echo "<li class='menulist' id='$idcount'><div class='menuitem'>",$mmenurow['name'],"</div><hr class='style-two'>Rs. <span id='notadded'>",$mmenurow['value'],"</span>/-</li>";
        $idcount++;
    }
    //Old UI
    //echo '</div>';
    //echo "<br/>";
    
}
//Old UI
//echo '</center></div>';
echo "</ul><div id='barcontainer' style='width:96%;'><div id='totval' class='midtext' style='color: #1e69de; float: right; font-size:23px;'>Total: <span>0</span></div></div>";
?>