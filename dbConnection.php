<?php
$db_server = "cv-database.czkggswac3j8.eu-north-1.rds.amazonaws.com";
$db_user = "oscar";
$db_pass = "Elitehej123!";
$db_database = "cv-schema";

// Attempt to connect to the database
$connection = mysqli_connect($db_server, $db_user, $db_pass, $db_database);

// Check if the connection was successful
if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
} else {
    echo "Connected successfully!";
}
