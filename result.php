<?php

try {
    include_once 'sqlcon.php';
    include_once 'getOutput.php';

    $location = $_GET['location'];

    $low = $_GET['low'];

    $mquery = "SELECT * FROM main WHERE location='$location' limit $low,2";
    if ($low == 0) {
        $cq = "SELECT count(id) FROM main WHERE location='$location'";
        $cs = mysql_query($cq);
        $crow = mysql_fetch_assoc($cs);
        echo $crow['count(id)']."!!!";
    }

    getOutput($mquery);


    if ($low == 0)
        echo "<input class='butlook cusbut' type=button id=loadmore onclick=loadMore() value='Load More'/>";
} catch (Exception $e) {
    echo $e;
}
?>
    
