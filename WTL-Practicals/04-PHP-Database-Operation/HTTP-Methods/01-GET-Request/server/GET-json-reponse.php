<?php
header('Access-Control-Allow-Origin: http://127.0.0.1:5500');   // CORS

$array = [
    'name' => 'Atharva',
    'color' => '#FF5733',
    'department' => 'Computer Engineering',
    'class' => 'TY-B',
    'prn' => 'UCS23M1074'
];
header('Content-Type: application/json');
echo json_encode($array);
?>