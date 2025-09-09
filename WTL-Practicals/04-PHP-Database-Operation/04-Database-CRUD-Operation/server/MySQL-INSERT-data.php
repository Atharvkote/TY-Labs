<?php
header("Content-Type: application/json");

$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);
$name = $data['name'];
$mark = $data['marks'];

$server = "localhost";
$username = "root";
$password = "";
$database = "students";
$connection = new mysqli($server, $username, $password, $database);

if ($connection) {
    $statement = $connection->prepare("INSERT INTO students_records (name , mark) values (?,?)");
    if ($statement) {
        $statement->bind_param("si", $name, $mark);
        if ($statement->execute()) {
            echo "Data Inseration Successfully :: Inserted Record :: {\n\tname : " . $name . ",\n\tmarks : " . $mark . "\n}";
        } else {
            echo "Data Inseration Failed :: Error At Inseration!!";
        }
    }else{
         echo "Data Inseration Failed :: Error At Statement Preparation!!";
    }
} else {
    echo "Data Inseration Failed :: Connection is Not Defined!!";
}
