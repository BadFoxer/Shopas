<?php
include('basecon.php');
$sql = "SELECT * FROM images";

$result = $conn->query($sql);


if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_array()) 
    { 

  $outputData[] = $row;

  
}
echo json_encode($outputData);
}
?>