 <?php
require_once 'vendor/autoload.php';

$client = new Google_Client();
$client->setClientId('301791498761-g1njlsjlh5ojs2p0tk1h01a1q3udp535.apps.googleusercontent.com');
$client->setClientSecret('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');
$client->setRedirectUri('http://localhost/oauth_project/callback.php');
$client->addScope("email");
$client->addScope("profile");

$login_url = $client->createAuthUrl();
?>

<!DOCTYPE html>
<html>
<head>
    <title>Customer Support</title>
</head>
<body>

<h2>Customer Support - Google Login</h2>
<a href="<?= $login_url ?>">Login with Google</a>

</body>
</html> 
