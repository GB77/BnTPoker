<?php 
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);



$servername = "shareddb-f.hosting.stackcp.net";
$username = "BnTPoker-3236123a";
$password = "n9apM5NcSwig";
$dbname = "BnTPoker-3236123a";


$conn = new mysqli($servername, $username, $password,$dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else { 

    echo "wtferk";
}

$list= $_POST['mailingList'];
$sql = "INSERT INTO `BnT Poker Mailing List` (`email`)
VALUES ('$list')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}


?>




