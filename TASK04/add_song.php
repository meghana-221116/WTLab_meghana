<?php
include "db.php";  // Make sure your DB connection is included

if (isset($_POST['submit'])) {

    // Form data
    $song   = $_POST['song'];
    $artist = $_POST['artist'];
    $album  = $_POST['album'];

    // File data
    $fileName = $_FILES['myfile']['name'];
    $tempName = $_FILES['myfile']['tmp_name'];

    // Upload folder
    $uploadFolder = "uploads/" . $fileName;

    // Move file
    if (move_uploaded_file($tempName, $uploadFolder)) {

        // Insert into Spotify DB
        $query = "INSERT INTO songs (song_name, artist_name, album_name, audio_file)
                  VALUES ('$song', '$artist', '$album', '$fileName')";

        if (mysqli_query($conn, $query)) {

            // ✅ Redirect with file name
            echo "<script>
                    alert('Song uploaded & saved successfully!');
                    window.location.href='spotify.php?file=$fileName';
                  </script>";

        } else {
            echo "Database error: " . mysqli_error($conn);
        }

    } else {
        echo "File upload failed";
    }
}
?>