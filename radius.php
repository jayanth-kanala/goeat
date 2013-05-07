<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
include_once 'sqlcon.php';
include_once 'getOutput.php';


$location= $_GET['location'];
    $low = $_GET['low'];

  
 $radius=$_GET['radius'];
  
$locrad="select lat,lng from main where location='$location' limit 1";
$rr= mysql_query($locrad);
$rs=mysql_fetch_assoc($rr);
$lat=$rs['lat'];
$lng=$rs['lng'];

$mquery= "SELECT *,( 6371 * acos( cos( radians($lat) ) * cos( radians( lat ) ) * cos( radians( lng ) - radians($lng) ) + sin( radians($lat) ) * sin( radians( lat ) ) ) ) AS distance FROM main HAVING distance <= $radius ORDER BY distance limit $low,2";

getOutput($mquery);
if($low==0)
        echo "<input type=button class='butlook cusbut' id=loadmore onclick=loadMoreByRadius() value='Load More'/>";

?>
