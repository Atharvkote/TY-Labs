<?php
    header('Access-Control-Allow-Origin: http://127.0.0.1:5500');   // CORS
    $name = $_GET['name'];
    $colour = $_GET['colour'];
    echo "Hello " . $name . "! Your favourite colour is " . $colour . ".";
?>