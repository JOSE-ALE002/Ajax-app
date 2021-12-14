<?php

include "database.php";

$search = $_POST["search"];

if (!empty($search)) {

    $result = $pdo->query("SELECT * FROM tasks WHERE nombre LIKE '$search%'");

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
} else {
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
}
