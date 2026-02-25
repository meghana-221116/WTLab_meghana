<?php
$data = json_decode(file_get_contents("php://input"));

if(isset($data->token)){
    echo "Backend received token successfully!";
} else {
    echo "Token not received.";
}
?>