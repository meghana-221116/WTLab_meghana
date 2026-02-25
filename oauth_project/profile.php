<?php
session_start();
if (!isset($_SESSION['email'])) {
    header("Location: index.php");
}
?>

<h2>Welcome <?= $_SESSION['name'] ?></h2>
<p>Email: <?= $_SESSION['email'] ?></p>
<a href="logout.php">Logout</a>