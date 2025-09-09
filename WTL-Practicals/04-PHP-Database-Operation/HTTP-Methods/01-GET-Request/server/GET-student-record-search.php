<?php
header('Access-Control-Allow-Origin: http://127.0.0.1:5500');
header('Content-Type: application/json');

$students = [
    ['name' => 'Atharva', 'department' => 'Computer Engineering', 'class' => 'TY-B', 'prn' => 'UCS23M1074'],
    ['name' => 'Rohit', 'department' => 'Information Technology', 'class' => 'TY-A', 'prn' => 'UCS23M1056'],
    ['name' => 'Sneha', 'department' => 'Electronics', 'class' => 'TY-C', 'prn' => 'UCS23M1123'],
    ['name' => 'Priya', 'department' => 'Mechanical Engineering', 'class' => 'TY-D', 'prn' => 'UCS23M1019'],
    ['name' => 'Aditya', 'department' => 'Civil Engineering', 'class' => 'TY-B', 'prn' => 'UCS23M1101'],
    ['name' => 'Manish', 'department' => 'Computer Engineering', 'class' => 'TY-A', 'prn' => 'UCS23M1060'],
    ['name' => 'Kiran', 'department' => 'Information Technology', 'class' => 'TY-C', 'prn' => 'UCS23M1144'],
    ['name' => 'Deepak', 'department' => 'Electronics', 'class' => 'TY-D', 'prn' => 'UCS23M1020'],
    ['name' => 'Meera', 'department' => 'Mechanical Engineering', 'class' => 'TY-A', 'prn' => 'UCS23M1150'],
    ['name' => 'Sanjay', 'department' => 'Civil Engineering', 'class' => 'TY-B', 'prn' => 'UCS23M1117'],
    ['name' => 'Neha', 'department' => 'Computer Engineering', 'class' => 'TY-C', 'prn' => 'UCS23M1135'],
    ['name' => 'Vikram', 'department' => 'Information Technology', 'class' => 'TY-D', 'prn' => 'UCS23M1043'],
    ['name' => 'Aarav', 'department' => 'Electronics', 'class' => 'TY-B', 'prn' => 'UCS23M1178'],
    ['name' => 'Isha', 'department' => 'Mechanical Engineering', 'class' => 'TY-C', 'prn' => 'UCS23M1192'],
    ['name' => 'Rajesh', 'department' => 'Civil Engineering', 'class' => 'TY-A', 'prn' => 'UCS23M1205'],
    ['name' => 'Tanvi', 'department' => 'Computer Engineering', 'class' => 'TY-D', 'prn' => 'UCS23M1213'],
    ['name' => 'Pooja', 'department' => 'Information Technology', 'class' => 'TY-B', 'prn' => 'UCS23M1226'],
    ['name' => 'Arjun', 'department' => 'Electronics', 'class' => 'TY-A', 'prn' => 'UCS23M1241'],
    ['name' => 'Kajal', 'department' => 'Mechanical Engineering', 'class' => 'TY-C', 'prn' => 'UCS23M1258'],
    ['name' => 'Ramesh', 'department' => 'Civil Engineering', 'class' => 'TY-D', 'prn' => 'UCS23M1269'],
    ['name' => 'Swati', 'department' => 'Computer Engineering', 'class' => 'TY-B', 'prn' => 'UCS23M1283'],
    ['name' => 'Harsh', 'department' => 'Information Technology', 'class' => 'TY-C', 'prn' => 'UCS23M1294'],
    ['name' => 'Nikita', 'department' => 'Electronics', 'class' => 'TY-D', 'prn' => 'UCS23M1307'],
    ['name' => 'Sameer', 'department' => 'Mechanical Engineering', 'class' => 'TY-A', 'prn' => 'UCS23M1315'],
    ['name' => 'Shivani', 'department' => 'Civil Engineering', 'class' => 'TY-C', 'prn' => 'UCS23M1328'],
    ['name' => 'Akash', 'department' => 'Computer Engineering', 'class' => 'TY-D', 'prn' => 'UCS23M1340'],
    ['name' => 'Ritu', 'department' => 'Information Technology', 'class' => 'TY-B', 'prn' => 'UCS23M1356'],
    ['name' => 'Gaurav', 'department' => 'Electronics', 'class' => 'TY-A', 'prn' => 'UCS23M1369'],
    ['name' => 'Vidya', 'department' => 'Mechanical Engineering', 'class' => 'TY-C', 'prn' => 'UCS23M1384'],
    ['name' => 'Kunal', 'department' => 'Civil Engineering', 'class' => 'TY-D', 'prn' => 'UCS23M1392'],
    ['name' => 'Sonia', 'department' => 'Computer Engineering', 'class' => 'TY-A', 'prn' => 'UCS23M1403'],
    ['name' => 'Dhruv', 'department' => 'Information Technology', 'class' => 'TY-C', 'prn' => 'UCS23M1417'],
    ['name' => 'Pallavi', 'department' => 'Electronics', 'class' => 'TY-D', 'prn' => 'UCS23M1428'],
    ['name' => 'Mohit', 'department' => 'Mechanical Engineering', 'class' => 'TY-B', 'prn' => 'UCS23M1439'],
    ['name' => 'Radhika', 'department' => 'Civil Engineering', 'class' => 'TY-A', 'prn' => 'UCS23M1452'],
    ['name' => 'Aniket', 'department' => 'Computer Engineering', 'class' => 'TY-C', 'prn' => 'UCS23M1463'],
    ['name' => 'Komal', 'department' => 'Information Technology', 'class' => 'TY-D', 'prn' => 'UCS23M1477'],
    ['name' => 'Tejas', 'department' => 'Electronics', 'class' => 'TY-B', 'prn' => 'UCS23M1488'],
    ['name' => 'Riya', 'department' => 'Mechanical Engineering', 'class' => 'TY-C', 'prn' => 'UCS23M1499'],
    ['name' => 'Omkar', 'department' => 'Civil Engineering', 'class' => 'TY-D', 'prn' => 'UCS23M1504'],
    ['name' => 'Sahil', 'department' => 'Computer Engineering', 'class' => 'TY-A', 'prn' => 'UCS23M1516'],
    ['name' => 'Vaishnavi', 'department' => 'Information Technology', 'class' => 'TY-C', 'prn' => 'UCS23M1527'],
    ['name' => 'Madhuri', 'department' => 'Electronics', 'class' => 'TY-B', 'prn' => 'UCS23M1539'],
    ['name' => 'Yash', 'department' => 'Mechanical Engineering', 'class' => 'TY-D', 'prn' => 'UCS23M1548'],
    ['name' => 'Dipti', 'department' => 'Civil Engineering', 'class' => 'TY-B', 'prn' => 'UCS23M1555'],
    ['name' => 'Parth', 'department' => 'Computer Engineering', 'class' => 'TY-C', 'prn' => 'UCS23M1567'],
    ['name' => 'Anjali', 'department' => 'Information Technology', 'class' => 'TY-D', 'prn' => 'UCS23M1579'],
    ['name' => 'Nikhil', 'department' => 'Electronics', 'class' => 'TY-A', 'prn' => 'UCS23M1583'],
    ['name' => 'Bhavana', 'department' => 'Mechanical Engineering', 'class' => 'TY-C', 'prn' => 'UCS23M1595'],
    ['name' => 'Vishal', 'department' => 'Civil Engineering', 'class' => 'TY-D', 'prn' => 'UCS23M1602']
];
$result = [];

if (isset($_GET['search'])) {
    $search = trim($_GET['search']);
    foreach ($students as $s) {
        if ($s['name'] === $search || $s['prn'] === $search) {
            $result[] = $s;
        }
    }
}

echo json_encode($result, JSON_PRETTY_PRINT);
