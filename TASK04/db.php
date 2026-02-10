<?php
// Database configuration based on your phpMyAdmin setup
$host = "localhost";      // The server where MySQL is running
$user = "root";           // Default XAMPP username
$pass = "";               // Default XAMPP password is empty
$dbname = "music_app";    // Match the database name shown in your photo

// Establishing the connection
$conn = mysqli_connect($host, $user, $pass, $dbname);

// Verification logic
if (!$conn) {
    // If connection fails, stop and show error
    die("Connection failed: " . mysqli_connect_error());
}
?>