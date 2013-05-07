<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
include_once 'sqlcon.php';
$content="";
$set = "select name from main";
$rs = mysql_query($set);
$index=1;


if($fp=fopen('bake.json', 'w')){

  fwrite($fp, '{');

  while ($r = mysql_fetch_array($rs)) {

      $content.="\n"."\"$index\"".":"."\"".$r['name']."\"".",";
   
  $index=$index+1;
  }
  $content=substr_replace($content,"",-1);
  fwrite($fp,$content."\n");
  fwrite($fp, '}');
  echo "Locations update is Successful!";
}
  fclose($fp); 
?>
