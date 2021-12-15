<?php
include "database.php";


if ($_POST && $_POST["id"]) {

    $id = $_POST["id"];

    $result = $pdo->query("SELECT * FROM tasks WHERE `idTask` =  '$id'");


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
