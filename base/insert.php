<?php 
include('basecon.php');

$data = json_decode(file_get_contents("php://input"));

$pavadinimas = mysqli_real_escape_string($conn, $data->pavadinimas);
$kiekis = mysqli_real_escape_string($conn, $data->kiekis);
$kaina = mysqli_real_escape_string($conn, $data->kaina);

$query = "INSERT INTO orderiai (pavadinimas,kiekis,kaina) VALUES('$pavadinimas','$kiekis','$kaina')";

if (mysqli_query($conn,$query)) {
    echo "New record created successfully";
} else {
	echo "record not inserted";
	$conn->close();
}


?>