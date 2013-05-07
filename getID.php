<?php
include_once 'sqlcon.php';
$idname = $_GET["id"];
$mtable = "select id from main where name='$idname'";
$mresult = mysql_query($mtable);
$mrow = mysql_fetch_assoc($mresult);
echo $mrow['id'];
?>