

<?php

include_once 'sqlcon.php';
//echo "select lat,lng from main where id=",$_GET['id'];
$mapquery = "select lat,lng from main where id=" . $_GET['id'];
$mapr = mysql_query($mapquery);
$mparry = mysql_fetch_assoc($mapr);
echo $mparry['lat'] . "," . $mparry['lng'];
?>

