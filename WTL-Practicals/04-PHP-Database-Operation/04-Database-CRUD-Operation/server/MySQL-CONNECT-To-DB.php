<?php
header("Content-Type: application/json");

$server = "localhost";
$username = "root";
$password = "";
$database = "students";

$connection = new mysqli($server, $username, $password, $database);

if ($connection->connect_error) {
    echo json_encode(["status" => "error", "message" => "Connection failed: " . $connection->connect_error]);
} else {
    echo json_encode(["status" => "success", "message" => "Connection Established with MySQL Server!"]);
}

$connection->close();
?>
