<?php
/*
|--------------------------------------------------------------------------
| PHP Array Concepts Explained
|--------------------------------------------------------------------------
| In this file, we will explain:
| 1. Indexed Arrays
| 2. Associative Arrays
| 3. Multidimensional Arrays
| 4. Loops to display arrays
|-------------------------------------------------------------------------- 
*/

/* ------------------------------------------------------------------------
| 1. Indexed Array
| -------------------------------------------------------------------------
| Indexed arrays use numeric indexes (0,1,2,...). You can loop using for.
*/

$indexedArray = [1, 2, 3, 4, 5];

echo "<h2>1. Indexed Array</h2>";
echo "Array elements are:<br>";
echo "<ul>";
for ($i = 0; $i < count($indexedArray); $i++) {
    echo "<li>" . $indexedArray[$i] . "</li>";
}
echo "</ul>";

/* ------------------------------------------------------------------------
| 2. Associative Array
| -------------------------------------------------------------------------
| Associative arrays use string keys (like "name", "id").  
| You access values using keys instead of index.
*/

$associativeArray = [
    "id" => 1,
    "name" => "Kote Atharva",
    "department" => "Computer Department",
    "PRN" => "UCS23M1074",
];

echo "<h2>2. Associative Array</h2>";
echo "<ul>";
foreach ($associativeArray as $key => $value) {
    echo "<li>" . $key . " : " . $value . "</li>";
}
echo "</ul>";

/* ------------------------------------------------------------------------
| 3. Multidimensional Array (Array of Arrays)
| -------------------------------------------------------------------------
| This is an array where each element is another array.
| Example: A student list with multiple students.
*/

$multiArray = [
    "1" => [
        "id" => 1,
        "name" => "Kote Atharva",
        "department" => "Computer Department",
        "PRN" => "UCS23M1074",
    ],
    "2" => [
        "id" => 2,
        "name" => "John Doe",
        "department" => "Mechanical Department",
        "PRN" => "UCS23M1075",
    ],
    "3" => [
        "id" => 3,
        "name" => "Jane Smith",
        "department" => "Civil Department",
        "PRN" => "UCS23M1076",
    ]
];

echo "<h2>3. Multidimensional Array</h2>";

foreach ($multiArray as $studentId => $studentInfo) {
    echo "<h3>Student $studentId</h3>";
    echo "<ul>";
    foreach ($studentInfo as $key => $value) {
        echo "<li>" . $key . " : " . $value . "</li>";
    }
    echo "</ul>";
}

/* ------------------------------------------------------------------------
| Summary:
| - Indexed Array → Uses numeric index.
| - Associative Array → Uses named keys.
| - Multidimensional Array → Array inside array.
| - Looping:
|     - for() loop → for indexed arrays.
|     - foreach() loop → for associative & nested arrays.
|-------------------------------------------------------------------------- 
*/
?>
