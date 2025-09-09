<?php
/*
|--------------------------------------------------------------------------
| PHP echo, json_encode(), json_decode() Explained
|--------------------------------------------------------------------------
| In this file, we will explain:
| 1. echo statement
| 2. json_encode() function
| 3. json_decode() function
|--------------------------------------------------------------------------
*/

/* ------------------------------------------------------------------------
| 1. echo Statement
| -------------------------------------------------------------------------
| - echo is used to output text, HTML, or variable values to the browser.
| - It is not a function, so you don’t need parentheses (though allowed).
| - Example: echo "Hello"; or echo($var);
*/

echo "<h2>1. echo Statement</h2>";

$name = "Atharva";
$age = 21; 

echo "Hello, my name is $name and I am $age years old.<br>";
echo "You can use echo to display numbers too: " . (10 + 20) . "<br>";
echo "<b>It can also output HTML tags</b><br>";

/* ------------------------------------------------------------------------
| 2. json_encode()
| -------------------------------------------------------------------------
| - Converts PHP data (arrays/objects) into JSON string format.
| - Useful when sending data from PHP to JavaScript (API responses).
*/

echo "<h2>2. json_encode()</h2>";

$student = [
    "id" => 1,
    "name" => "Atharva Kote",
    "department" => "Computer Department",
    "PRN" => "UCS23M1074"
];

$jsonData = json_encode($student); // PHP Array -> JSON String

echo "Original PHP Array:<br>";
print_r($student); // human readable
echo "<br><br>JSON Encoded String:<br>";
echo $jsonData . "<br>";

/* ------------------------------------------------------------------------
| 3. json_decode()
| -------------------------------------------------------------------------
| - Converts JSON string back into PHP array or object.
| - Syntax:
|     json_decode($json, true) → returns associative array
|     json_decode($json) → returns object
*/

echo "<h2>3. json_decode()</h2>";

$decodedArray = json_decode($jsonData, true);  // JSON -> Associative Array
$decodedObject = json_decode($jsonData);       // JSON -> Object

echo "Decoded as Associative Array:<br>";
print_r($decodedArray);

echo "<br><br>Decoded as Object:<br>";
print_r($decodedObject);

/* ------------------------------------------------------------------------
| Summary:
| - echo → prints output to browser
| - json_encode() → PHP data → JSON string
| - json_decode() → JSON string → PHP array/object
|-------------------------------------------------------------------------- 
*/
