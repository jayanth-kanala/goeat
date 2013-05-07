<?php

/*
 * 
 *          Establish MYSQL connection
 * 
 * 
 */


 // Open a MySQL connection

        $link = mysql_connect('localhost', 'jay', 'jay');

        if (!$link) {

            die('Connection failed: ' . mysql_error());
        }
        
// Select the database to work with


        $db = mysql_select_db('goeat');

        if (!$db) {
            die('Selected database unavailable: ' . mysql_error());
        }
?>
