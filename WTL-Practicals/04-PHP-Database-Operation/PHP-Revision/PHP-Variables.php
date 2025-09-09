<?php
/*
|--------------------------------------------------------------------------
| PHP Variables Explained
|--------------------------------------------------------------------------
| In this file, we will explain:
| 1. What is a variable?
| 2. Rules for naming variables
| 3. Different types of variables
| 4. Variable scope (local, global, static)
| 5. Variable variables
|--------------------------------------------------------------------------
*/

/* ------------------------------------------------------------------------
| 1. What is a Variable?
| -------------------------------------------------------------------------
| - A variable is a container to store data.
| - In PHP, variables start with a "$" sign.
| - Example: $name = "Atharva";
*/

echo "<h2>1. What is a Variable?</h2>";
$name = "Atharva";
$age = 21;
echo "Name: $name <br>";
echo "Age: $age <br>";

/* ------------------------------------------------------------------------
| 2. Rules for Naming Variables
| -------------------------------------------------------------------------
| - Must start with a "$"
| - Must start with a letter or underscore
| - Cannot start with a number
| - Can contain letters, numbers, and underscores
| - Case-sensitive ($Name != $name)
*/

echo "<h2>2. Variable Naming Rules</h2>";
$_valid = "I am valid";
$myVar123 = "Also valid";
// $123abc = "Invalid"; ❌ (cannot start with number)
echo "\$_valid = $_valid <br>";
echo "\$myVar123 = $myVar123 <br>";

/* ------------------------------------------------------------------------
| 3. Types of Variables
| -------------------------------------------------------------------------
| PHP has 8 main data types:
| - String: Text
| - Integer: Whole numbers
| - Float/Double: Decimal numbers
| - Boolean: true/false
| - Array: Multiple values
| - Object: Class instances
| - NULL: No value
| - Resource: Special (DB, file handles)
*/

echo "<h2>3. Variable Types</h2>";
$stringVar = "Hello PHP";
$intVar = 100;
$floatVar = 99.9;
$boolVar = true;
$arrayVar = ["red", "green", "blue"];
$nullVar = null;

echo "String: $stringVar <br>";
echo "Integer: $intVar <br>";
echo "Float: $floatVar <br>";
echo "Boolean: " . ($boolVar ? "true" : "false") . "<br>";
echo "Array: " . implode(", ", $arrayVar) . "<br>";
echo "Null: " . var_export($nullVar, true) . "<br>";

/* ------------------------------------------------------------------------
| 4. Variable Scope
| -------------------------------------------------------------------------
| Scope means where a variable can be accessed.
| - Local: Declared inside a function (available only inside).
| - Global: Declared outside function (need "global" keyword inside function).
| - Static: Retains value between function calls.
*/

echo "<h2>4. Variable Scope</h2>";

$globalVar = "I am Global";

function testScope() {
    $localVar = "I am Local";
    global $globalVar; // use global keyword
    static $staticVar = 0; // value will persist across calls
    $staticVar++;
    echo "Inside function: <br>";
    echo "- Local Variable = $localVar <br>";
    echo "- Global Variable = $globalVar <br>";
    echo "- Static Variable = $staticVar <br>";
}
testScope();
testScope();
testScope();

/* ------------------------------------------------------------------------
| 5. Variable Variables ($$var)
| -------------------------------------------------------------------------
| You can create dynamic variable names using $$.
| Example:
| $x = "name";
| $$x = "Atharva";  // creates $name variable
*/

echo "<h2>5. Variable Variables</h2>";
$x = "dynamicVar";
$$x = "I was created dynamically!";
echo "Normal Variable (\$x) = $x <br>";
echo "Dynamic Variable (\$\$x) = " . $dynamicVar . "<br>";

/* ------------------------------------------------------------------------
| Summary:
| - Variables start with $
| - Different types (string, int, float, bool, array, object, null, resource)
| - Scope decides where variable lives
| - Static variables keep values across function calls
| - Variable variables let you create dynamic variable names
|-------------------------------------------------------------------------- 
*/
?>
