<?php

/*
 * 
 *          Establish MYSQL connection
 * 
 * 
 */


 // Open a MySQL connection

        $link = mysql_connect('mysql5.000webhost.com', 'a6142793_b', 'jayanth_1991');

        if (!$link) {

            die('Connection failed: ' . mysql_error());
        }
        
// Select the database to work with


        $db = mysql_select_db('a6142793_b');

        if (!$db) {
            die('Selected database unavailable: ' . mysql_error());
        }
?>
