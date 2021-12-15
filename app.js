$(function () {

    // FUNCION PARA LLENAR LA TABLA CON LOS REGISTROS
    function llenarTabla() {
        $.ajax({
            url: "task-list.php",
            type: "GET",
            success: function (response) {
                let datos = JSON.parse(response)
                let template = "";

                datos.forEach(element => {
                    template += `<tr taskId="${element["idTask"]}">
                            <td>${element["idTask"]}</td>
                            <td>${element["nombre"]}</td>
                            <td>${element["description"]}</td>
                            <td>
                                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                    <button type="button" class="task-delete btn btn-danger">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>
                                    </button>
                                    <button type="button" class="task-update btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                        </svg>
                                    </button>
                                </div>
                            </td>
                            
                        </tr>`;
                });

                document.getElementById("tasks").innerHTML = template;

            }
        });
    }

    llenarTabla();


    // FILTRO DE BUSQUEDA, BUSCA CADA VEZ QUE SE PRESIONA UNA TECLA
    $("#search").keyup(function (e) {
        let search = $("#search").val();
        $.ajax({
            url: "backend.php",
            type: "POST",
            data: {
                search
            },
            success: function (response) {
                let datos = JSON.parse(response)
                let template = "";

                datos.forEach(element => {
                    template += `<tr taskId="${element["idTask"]}">
                            <td>${element["idTask"]}</td>
                            <td>${element["nombre"]}</td>
                            <td>${element["description"]}</td>
                            <td>
                                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                    <button type="button" class="task-delete btn btn-danger">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>
                                    </button>
                                    <button type="button" class="task-update btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                        </svg>
                                    </button>
                                </div>
                          </td>
                        </tr>`;
                });

                document.getElementById("tasks").innerHTML = template;

            }
        });
    });


    // AGREGAR NUEVA TAREA 
    $("#taskForm").submit(function (e) {
        const postdata = {
            nombre: $("#name").val(),
            description: $("#description").val()
        };

        $.post("add-task.php", postdata,
            function (response) {
                switch (response) {
                    case "ok":
                        Swal.fire({
                            title: 'Guardado!',
                            text: "Se ha guardado correctamente",
                            icon: 'success',
                        });
                        break;
                    case "error":
                        Swal.fire({
                            title: 'Error!',
                            text: "Ha ocurrido un error",
                            icon: 'error',
                        });
                        break;
                }

                $("#taskForm").trigger('reset');
                llenarTabla();
            }
        );

        e.preventDefault();

    });


    // ELIMINAR UN REGISTRO
    // buscamos en el documento entero la clase .task-delete con el evento click
    $(document).on("click", '.task-delete', function () {
        if (confirm("Estas seguro de eliminar el registro?")) {
            let element = $(this)[0].parentElement.parentElement.parentElement;
            let id = $(element).attr('taskId');
            console.log(id);

            $.post("task-delete.php", {
                    id
                },
                function (response) {
                    switch (response) {
                        case "ok":
                            Swal.fire({
                                title: 'Eliminado!',
                                text: "Se ha eliminado correctamente",
                                icon: 'info',
                            });
                            break;
                        case "error":
                            Swal.fire({
                                title: 'Error!',
                                text: "Ha ocurrido un error",
                                icon: 'error',
                            });
                            break;
                    }

                    llenarTabla();
                }
            );
        }

    });

    // ACTUALIZAR UN REGISTRO
    $(document).on("click", '.task-update', function () {
        let element = $(this)[0].parentElement.parentElement.parentElement;
        let id = $(element).attr('taskId');

        $.post("search-task.php", {
                id
            },
            function (response) {

                const datos = JSON.parse(response);
                console.log(datos);
                const {
                    idTask,
                    nombre,
                    description
                } = datos[0];
                // console.log(datos);           

                // document.getElementById("name_edit").value = datos[0].nombre; 
                $("#name_edit").val(nombre);
                $("#description_edit").val(description);
                $("#idTarea").val(idTask);
            }
        );
    });


    $("#taskForm_edit").submit(function (e) {

        const postdata = {
            nombre: $("#name_edit").val(),
            description: $("#description_edit").val(),
            idTask: $("#idTarea").val()
        };

        $.post("update-task.php", postdata,
            function (response) {
                switch (response) {
                    case "ok":
                        Swal.fire({
                            title: 'Actualizado!',
                            text: "Se ha actualizado correctamente",
                            icon: 'success',
                        });
                        break;
                    case "error":
                        Swal.fire({
                            title: 'Error!',
                            text: "Ha ocurrido un error",
                            icon: 'error',
                        });
                        break;
                }

                $("#taskForm_edit").trigger('reset');               
                
                llenarTabla();
            }
        );

        e.preventDefault();

    });
});