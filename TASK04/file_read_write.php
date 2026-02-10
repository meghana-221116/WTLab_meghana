<?php
echo "<h2>PHP File Functions</h2>";

$filename = "songs.txt";
$folder = "songs_demo";

$file = fopen($filename, "w");
fwrite($file, "Shape of You - Ed Sheeran\n");
fwrite($file, "Believer - Imagine Dragons\n");
fwrite($file, "Perfect - Ed Sheeran\n");
fclose($file);

echo "<b>File Written Successfully</b><br><br>";

$file = fopen($filename, "r");
echo "<b>File Content:</b><br>";
echo nl2br(fread($file, filesize($filename)));
fclose($file);

echo "<br><br>";


echo "<b>file contents:</b><br>";
echo nl2br(file_get_contents($filename));
echo "<br><br>";

echo "<b>files:</b><br>";
$lines = file($filename);
foreach ($lines as $line) {
    echo $line . "<br>";
}
echo "<br>";


echo "<h3>File Information</h3>";

echo "File Exists: " . (file_exists($filename) ? "Yes" : "No") . "<br>";

echo "File Size: " . filesize($filename) . " bytes<br>";

echo "File Type: " . filetype($filename) . "<br>";

echo "Last Accessed: " . date("d-m-Y H:i:s", fileatime($filename)) . "<br>";

echo "Last Modified: " . date("d-m-Y H:i:s", filemtime($filename)) . "<br>";

echo "Created Time: " . date("d-m-Y H:i:s", filectime($filename)) . "<br>";

echo "Permissions: " . fileperms($filename) . "<br>";
echo "Owner: " . fileowner($filename) . "<br>";
echo "Group: " . filegroup($filename) . "<br>";
echo "Inode: " . fileinode($filename) . "<br><br>";

if (!is_dir($folder)) {
    mkdir($folder);
    echo "Folder Created: $folder <br>";
}

copy($filename, "$folder/songs_copy.txt");
echo "File Copied <br>";

rename("$folder/songs_copy.txt", "$folder/renamed_songs.txt");
echo "File Renamed <br>";

echo "Is File? " . (is_file($filename) ? "Yes" : "No") . "<br>";

echo "Is Directory? " . (is_dir($folder) ? "Yes" : "No") . "<br><br>";


echo "<h3>Directory Listing </h3>";

$files = scandir($folder);

foreach ($files as $f) {
    echo $f . "<br>";
}

echo "<br><b>Current Directory:</b> " . getcwd() . "<br>";

$file = fopen($filename, "a");
if (flock($file, LOCK_EX)) {

    fwrite($file, "Locked write - New Song Added\n");

    flock($file, LOCK_UN);

    echo "<br>File Locked & Written Successfully<br>";
}
fclose($file);
?>
