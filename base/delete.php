<?php 
include('basecon.php');


$data = json_decode(file_get_contents("php://input"));

$id = mysqli_real_escape_string($conn, $data->id);

$query = "DELETE FROM orderiai WHERE id='$id'";

if (mysqli_query($conn,$query)) {
    echo "deleted";
} else {
	echo "error";
	$conn->close();
}


?>