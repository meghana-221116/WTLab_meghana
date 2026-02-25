

<?php
session_start();
require_once 'vendor/autoload.php';

$client = new Google_Client();
$client->setClientId('301791498761-g1njlsjlh5ojs2p0tk1h01a1q3udp535.apps.googleusercontent.com');
$client->setClientSecret('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');
$client->setRedirectUri('http://localhost/oauth_project/callback.php');

if (isset($_GET['code'])) {
    

    $token = $client->fetchAccessTokenWithAuthCode($_GET['code']);

    // 🔴 SAFETY CHECK
    if (isset($token['error'])) {
        die("Google Error: " . $token['error_description']);
    }

    // ✅ Set full token array
    $client->setAccessToken($token);

    $google_service = new Google_Service_Oauth2($client);
    $data = $google_service->userinfo->get();

    $_SESSION['name'] = $data->name;
    $_SESSION['email'] = $data->email;

    header("Location: profile.php");
    exit();
}
?>
