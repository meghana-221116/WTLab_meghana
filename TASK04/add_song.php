<?php
// Include database connection
include "db.php";

// Check if form is submitted
if (isset($_POST['submit'])) {

    // Local variables to store form data
    $song   = $_POST['song'];
    $artist = $_POST['artist'];
    $album  = $_POST['album'];

    // Audio file handling
    $audio_name = $_FILES['audio']['name'];
    $audio_tmp  = $_FILES['audio']['tmp_name'];

    // Destination folder
    $folder = "songs/" . $audio_name;

    // Move file to folder
    if (move_uploaded_file($audio_tmp, $folder)) {

        // Insert data into database
        $query = "INSERT INTO songs (song_name, artist, album, audio_file)
                  VALUES ('$song', '$artist', '$album', '$audio_name')";

        if (mysqli_query($conn, $query)) {
            echo "<script>alert('Song added successfully!'); window.location.href='index.php';</script>";
        } else {
            die("Database error: " . mysqli_error($conn)); // Stop if DB error
        }

    } else {
        die("File upload failed"); // Stop if file not uploaded
    }
}
?>