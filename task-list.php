<?php

include "database.php";

$result = $pdo->query("SELECT * FROM tasks");

if ($result === false) {
    die("Ha ocurrido un error");
}

$json = array();

foreach ($result as $task) {
    $json[] = array(
        'idTask' => $task["idTask"],
        'nombre' => $task["nombre"],
        'description' => $task["description"]
    );
}

$jsonstring = json_encode($json);

echo $jsonstring;
